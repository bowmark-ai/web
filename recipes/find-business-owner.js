// Recipe: find-business-owner
//
// Finds who runs a small business: its LinkedIn company page, the owner (or the
// most senior local manager) with their LinkedIn profile, and their work email.
// Optionally counts staff whose titles match words you give, e.g. how many
// recruiters a staffing agency has.
//
// Input (the `input` global). Only `company` is required:
//   company     string    required — the business's name, e.g. "Barton Staffing Solutions"
//   town        string?   where it is, e.g. "Crest Hill" — picks the right LinkedIn page
//                         when several share a name
//   region      string?   its state or region as LinkedIn writes it, e.g. "Illinois" —
//                         a wider net than town, since LinkedIn lists a head office
//   domain      string?   its website, e.g. bartonstaffing.com — needed for an email
//   linkedin    string?   its LinkedIn company URL, handle or numeric id, if you know it
//   countTitles string[]? title words to count staff by, e.g. ["recruiter", "account manager"]
//
// Run it through the recipe endpoint:
//   POST https://api.bowmark.ai/v1/recipes/find-business-owner
//   { "company": "Barton Staffing Solutions", "town": "Crest Hill", "domain": "bartonstaffing.com" }
//
// LinkedIn's people search needs the caller signed in to LinkedIn. A free LinkedIn
// account that has reached LinkedIn's monthly search limit sees at most 3 people
// per search; `warnings` says so, and `staffCount` is then a floor, not a count.
//
// What comes back:
//   linkedinCompany  { id, url, name, location } or null when no page matched
//   owner            { name, title, linkedin, why } or null
//   email            { address, status, source } or null — status is LinkedIn-free:
//                    "verified" / "catch-all" / "unknown" / "unverified"
//   staffCount       { count, capped, people } when countTitles was given
//   candidates       everyone the owner search saw, so a human can overrule the pick

const text = (v) => (typeof v === "string" ? v.trim() : "");
const company = text(input.company);
if (!company) throw new Error('input.company is required, e.g. { "company": "Barton Staffing Solutions" }');
const town = text(input.town);
const region = text(input.region);
const domain = text(input.domain).replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/.*$/, "").toLowerCase();
const countTitles = Array.isArray(input.countTitles) ? input.countTitles.map(text).filter(Boolean) : [];
const li = bowmark.providers.linkedin;
const warnings = [];
const noteLimit = (page) => {
  for (const w of page?.warnings ?? []) if (!warnings.includes(w)) warnings.push(w);
};

// Words that carry no identity: "Staffing" matches every agency on LinkedIn.
const GENERIC = new Set(["staffing", "services", "service", "solutions", "solution", "group", "personnel", "employment", "professionals", "inc", "llc", "ltd", "co", "the", "and", "of", "temps", "temporary", "labor", "resources", "agency", "partners", "associates", "network"]);
const words = (s) => text(s).toLowerCase().replace(/[^a-z0-9& ]+/g, " ").split(/\s+/).filter(Boolean);
const distinct = words(company).filter((w) => !GENERIC.has(w));
const escape = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// "IL" must not match "Brazil", and "abc" must not match "Fabcorp".
const wholeWords = (phrase) => new RegExp(`(^|[^a-z0-9])${escape(phrase.toLowerCase())}($|[^a-z0-9])`, "i");
const nameFits = (name) => {
  const got = new Set(words(name));
  return distinct.length ? distinct.every((w) => got.has(w)) : words(company).every((w) => got.has(w));
};

// 1. The company's LinkedIn page.
let linkedinCompany = null;
const given = text(input.linkedin);
if (given) {
  linkedinCompany = { id: /^\d+$/.test(given) ? given : null, url: /^\d+$/.test(given) ? null : given, name: company, location: null, how: "given" };
} else {
  const found = await li.searchCompanies(company);
  const fits = found.results.filter((c) => nameFits(c.name));
  const near = (loc) => [town, region].some((p) => p && wholeWords(p).test(loc ?? ""));
  const local = fits.filter((c) => near(c.location));
  const pick = local[0] ?? (fits.length === 1 ? fits[0] : null);
  if (pick) linkedinCompany = { id: pick.id, url: pick.url, name: pick.name, location: pick.location, how: local[0] ? "name and place match" : "only name match" };
  else warnings.push(`No LinkedIn company page matched "${company}"${fits.length > 1 ? ` (${fits.length} share the name, none in the right place: ${fits.map((c) => c.name).join("; ")})` : ""}.`);
}
const companyRef = linkedinCompany ? linkedinCompany.id ?? linkedinCompany.url : null;

// 2. The owner, or the most senior local manager. LinkedIn ranks matches, so two
// narrow searches beat one broad one when the account is limited to 3 a page.
const RANKS = [
  [/\b(owner|co-owner|founder|co-founder|franchisee|franchise owner|proprietor|principal)\b/i, "owner"],
  [/\b(president|ceo|chief executive)\b/i, "president"],
  [/\b(branch manager|general manager|area manager|regional manager|office manager|managing director|director)\b/i, "manager"],
];
const rankOf = (headline) => {
  const h = headline ?? "";
  if (/\bvice[- ]president\b|\bvp\b/i.test(h)) return { score: 2.5, role: "vice president" };
  for (let i = 0; i < RANKS.length; i++) if (RANKS[i][0].test(h)) return { score: i, role: RANKS[i][1] };
  return null;
};
const mentionsCompany = (headline) => {
  const h = headline ?? "";
  return distinct.length ? distinct.every((w) => wholeWords(w).test(h)) : wholeWords(company).test(h);
};
// A headline that names an employer ("Owner at X", "Founder @ X") which is not this company.
const worksElsewhere = (headline) => /\s(?:at|@)\s/i.test(headline ?? "") && !mentionsCompany(headline);

const candidates = [];
let owner = null;
if (companyRef) {
  // One title family per search: a limited account sees only the top 3 matches, and
  // "president" alone also matches every vice president, so owners go first.
  for (const keywords of ["owner OR founder OR franchisee OR principal", "president OR CEO", '"branch manager" OR "general manager" OR director']) {
    const page = await li.listCompanyEmployees({ company: companyRef, keywords });
    noteLimit(page);
    for (const p of page.results) {
      if (!p.url || candidates.some((c) => c.linkedin === p.url)) continue;
      const rank = rankOf(p.headline);
      // A headline naming ANOTHER company is a past job LinkedIn still matched.
      const atOther = worksElsewhere(p.headline);
      candidates.push({ name: p.name, title: p.headline, linkedin: p.url, location: p.location, rank, atOther });
    }
    const best = candidates.filter((c) => c.rank && !c.atOther).sort((a, b) => a.rank.score - b.rank.score)[0];
    if (best && best.rank.score === 0) break; // an owner: no need to look further
  }
  const best = candidates.filter((c) => c.rank && !c.atOther).sort((a, b) => a.rank.score - b.rank.score)[0];
  if (best) owner = { name: best.name, title: best.title, linkedin: best.linkedin, why: `headline reads as ${best.rank.role}` };
}

// 3. Their work email, from the company's own pages or a name pattern its mail
// server accepts. Free public sources only.
let email = null;
if (owner?.name && domain && owner.name !== "LinkedIn Member") {
  try {
    const lead = await bowmark.leads.enrich({ name: owner.name, company, domain, linkedin: owner.linkedin });
    const work = (lead.emails ?? []).filter((e) => e.kind === "work");
    const pick = work.find((e) => e.verified) ?? work[0];
    if (pick) email = { address: pick.address, status: pick.verified ? "verified" : pick.status ?? "unverified", source: pick.citation?.url ?? pick.method ?? null };
  } catch (e) {
    warnings.push(`Email lookup failed: ${String(e?.message ?? e)}`);
  }
}

// 4. Staff whose titles match countTitles.
let staffCount = null;
if (companyRef && countTitles.length) {
  const keywords = countTitles.map((t) => (t.includes(" ") ? `"${t}"` : t)).join(" OR ");
  const people = [];
  let capped = false;
  let start = 0;
  // Two pages at most: past LinkedIn's monthly limit a page holds 3, so 6 people
  // already says "5 or more", and every page is one more search on the account.
  for (let i = 0; i < 2 && start !== null; i++) {
    const page = await li.listCompanyEmployees({ company: companyRef, keywords, start });
    noteLimit(page);
    if (page.warnings?.length) capped = true;
    for (const p of page.results) {
      // LinkedIn already matched the title words (stems too: "recruiter" finds
      // "Recruiting Manager"), so keep everyone except a past job at another firm.
      const elsewhere = worksElsewhere(p.headline);
      const key = p.url ?? p.id ?? `${p.name}|${p.headline}`;
      if (!elsewhere && !people.some((x) => x.key === key)) {
        people.push({ key, name: p.name, title: p.headline });
      }
    }
    start = capped ? null : page.nextStart;
  }
  // Stopped with pages left: the count is a floor, not a total.
  if (start !== null) capped = true;
  staffCount = { count: people.length, capped, people: people.map(({ key, ...p }) => p) };
}

return { company, linkedinCompany, owner, email, staffCount, candidates, warnings };
