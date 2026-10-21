// Recipe: find-booking-links
//
// Finds the public Calendly / Cal.com (and SavvyCal, HubSpot, …) booking link a
// person publishes, and says how sure we are it is THEIRS.
//
// Input (the `input` global). Only `name` is required; everything else you pass
// gives the search another place to find a link THEY published, which is what
// turns "a page under that name exists" into "confirmed":
//   name     string    required — their full name, first and last
//   company  string?   their company's name — adds "first-company" calendar names
//   domain   string?   their company's website — its homepage, about, team and
//                      contact pages are read for a booking link
//   email    string?   a work email — fills in `domain` (and `company`) when you
//                      did not pass them; gmail.com and the like are ignored
//   x        string?   their X handle or profile URL — the bio and its website
//                      are read for a booking link
//   github   string?   their GitHub handle — the profile README and the site it
//                      lists are read
//   urls     string[]? any page of theirs: personal site, speaker bio, blog post
//   archive  boolean?  also read old Wayback copies of their company's pages, for
//                      a link since removed; slower, often 10-30 s
//
// Run it through the recipe endpoint:
//   POST https://api.bowmark.ai/v1/recipes/find-booking-links
//   { "name": "Caleb Peffer", "email": "caleb@firecrawl.dev" }
//
// Or run this exact file yourself: POST /v1/run with
//   { "script": "const input = {\"name\":\"…\"};\n" + <this file> }
//
// Every link carries `confidence`:
//   "confirmed"  — written on a page of theirs (company site, X bio, GitHub, a URL you gave)
//   "likely"     — found by name, and the booking page or its URL names their company
//   "unverified" — found by name alone; a namesake can own it
// `best` is the strongest confirmed or likely link, and is null rather than a guess.

const text = (v) => (typeof v === "string" ? v.trim() : "");
const name = text(input.name);
if (!name) throw new Error('input.name is required, e.g. { "name": "Caleb Peffer" }');

// A work email names the company's domain. A personal mailbox names nothing.
const FREE_MAIL = /^(gmail|googlemail|yahoo|ymail|hotmail|outlook|live|msn|icloud|me|mac|aol|proton|protonmail|pm|gmx|mail|yandex|zoho|fastmail|hey)\./i;
const emailDomain = text(input.email).split("@")[1]?.toLowerCase() ?? "";
const workDomain = emailDomain && !FREE_MAIL.test(emailDomain) ? emailDomain : "";
const domain = text(input.domain) || workDomain;
const company = text(input.company) || (workDomain ? workDomain.split(".")[0] : "");
const github = text(input.github).replace(/^https?:\/\/(www\.)?github\.com\//i, "").replace(/\/.*$/, "");
const xHandle = text(input.x).replace(/^https?:\/\/(www\.)?(x|twitter)\.com\//i, "").replace(/^@/, "").replace(/[/?].*$/, "");
const urls = Array.isArray(input.urls) ? input.urls.filter((u) => typeof u === "string") : [];

// Their X bio is a page they wrote: a booking link in it, or on the website it
// lists, is theirs.
const BOOKING_LINK = /\bhttps?:\/\/(?:www\.)?(?:calendly\.com|cal\.com|[\w-]+\.cal\.com|savvycal\.com|tidycal\.com|zcal\.co)\/[^\s"'<>)]+/gi;
let xProfile = null;
let xWarning = null;
if (xHandle) {
  try {
    xProfile = await bowmark.providers.x.profile({ handle: xHandle });
  } catch (e) {
    xWarning = `could not read the X profile @${xHandle}: ${String(e?.message ?? e)}`;
  }
}
const bioLinks = xProfile ? [...new Set((xProfile.bio || "").match(BOOKING_LINK) ?? [])] : [];
if (xProfile?.website) urls.push(xProfile.website);

const person = { name };
if (company) person.company = company;
if (domain) person.domain = domain;
if (github) person.github = github;
if (urls.length) person.urls = urls;

const search = await bowmark.booking_links.find(person, { archive: input.archive === true });
for (const url of bioLinks) {
  if (search.links.some((l) => l.url === url)) continue;
  search.links.unshift({
    url,
    platform: /cal\.com/i.test(url) ? "cal.com" : /calendly/i.test(url) ? "calendly" : "other",
    method: "published",
    foundOn: `https://x.com/${xHandle}`,
    archivedAt: null,
    ownerName: null,
  });
}

// Words that tie a page to their company: "firecrawl" from "Firecrawl" or "firecrawl.dev".
const companyWords = [company, domain.split(".")[0]]
  .map((w) => (w || "").toLowerCase().replace(/[^a-z0-9]/g, ""))
  .filter((w) => w.length >= 3);
const mentionsCompany = (s) => {
  const flat = (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  return companyWords.some((w) => flat.includes(w));
};

// Read up to 4 pages at once: owner, organization, events, and whether it is open.
const candidates = search.links.slice(0, 4);
const pages = await Promise.allSettled(
  candidates.map((l) =>
    l.platform === "calendly" || l.platform === "cal.com"
      ? bowmark.booking_links.read(l.url)
      : Promise.resolve(null),
  ),
);

const links = candidates.map((l, i) => {
  const page = pages[i].status === "fulfilled" ? pages[i].value : null;
  const pageText = page
    ? [page.ownerName, page.organization, ...page.events.map((e) => `${e.name} ${e.description ?? ""}`)].join(" ")
    : "";
  let confidence = "unverified";
  if (l.method === "published" || l.method === "archived") confidence = "confirmed";
  else if (mentionsCompany(l.url) || mentionsCompany(pageText)) confidence = "likely";
  return {
    url: l.url,
    platform: l.platform,
    confidence,
    evidence:
      l.method === "published" ? `written on ${l.foundOn}`
      : l.method === "archived" ? `written on an archived copy of ${l.foundOn} (${l.archivedAt})`
      : l.method === "indexed" ? "Google lists it under their name"
      : "a booking page under their name exists",
    owner: page?.ownerName ?? l.ownerName ?? null,
    organization: page?.organization ?? null,
    events: page ? page.events.map((e) => ({ name: e.name, url: e.url, minutes: e.durationMinutes })) : [],
    bookable: page?.bookable ?? "unknown",
    qualifyingQuestions: page?.qualifyingQuestions ?? [],
  };
});

// One account can surface twice (its profile page and one of its events). Keep the
// strongest finding per account: calendly.com/caleb-firecrawl and
// calendly.com/caleb-firecrawl/30-minutes are the same calendar.
const rank = { confirmed: 0, likely: 1, unverified: 2 };
links.sort((a, b) => rank[a.confidence] - rank[b.confidence]);
const account = (url) => {
  try {
    const u = new URL(url);
    return `${u.host}/${u.pathname.split("/").filter(Boolean)[0] ?? ""}`.toLowerCase();
  } catch {
    return url;
  }
};
const seen = new Set();
const unique = links.filter((l) => {
  const key = account(l.url);
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});
const best = unique.find((l) => l.confidence !== "unverified") ?? null;

return {
  name,
  best,
  links: unique,
  checked: search.checked.slugsChecked.length + search.checked.pagesScanned,
  warnings: xWarning ? [xWarning, ...search.warnings] : search.warnings,
};
