# Capabilities

> Generated from the live library — do not edit by hand. Run `pnpm run gen:coverage`.
> 29 functions. 🟢 implemented · ⚪ planned.
> Health was not read for this build, so 🟢 here means IMPLEMENTED, never working — a 🟢 row can be degraded or retired in prod right now. Ask the canary (`GET /internal/coverage`, or the coverage board in the admin app); never read this table for that.

One function per row. A capability is the thing you call; it fans out to whichever provider can answer, so the same call keeps working when one site changes.

| Function | What it does | Providers | Status |
|---|---|---|---|
| `cars.search` | Searches car hire for an airport and date range — `{ pickup: "SFO", pickupDate… | 1 | 🟢 |
| `email.findDomain` | Turns a company NAME into the domain it sends mail from — findDomain("Basecamp LLC")… | 1 | 🟢 |
| `flights.getBookingOptions` | Every seller on offer for ONE result — pass the whole row from `search()`, not its id. | 5 | 🟢 |
| `flights.getFlightStatus` | A flight's live status, checked directly with the airline that flies it. | 5 | 🟢 |
| `flights.search` | Searches for flights matching the query and returns `{ flights, warnings }`. `flights`… | 5 | 🟢 |
| `git_commit_history.commitHistory` | Returns a public GitHub repository's commit log — each commit's sha (full and short)… | 1 | 🟢 |
| `hotels.search` | Searches stays for a place and a date range — `{ location: "SFO", checkIn… | 1 | 🟢 |
| `hvac.getCostEstimate` | Reads a real, published national-average installed-cost range for one HVAC system type… | 1 | 🟢 |
| `insurance.findAgent` | Finds an insurance agent or agency to actually call, across the two carriers this… | 3 | 🟢 |
| `insurance.getLicensing` | Reads the regulators' own licensing record for ONE carrier, keyed on the `naicCode`… | 3 | 🟢 |
| `insurance.listReferralCarriers` | Lists the carriers a referral/marketplace program actually places business with — the… | 3 | 🟢 |
| `insurance.searchCarriers` | Searches the US insurance regulators' register — `{ name: "GEICO" }`, `{ licensedIn… | 3 | 🟢 |
| `music.getTrack` | Reads ONE track you already have a URL for — a public track link, or a `Track` that… | 1 | 🟢 |
| `music.search` | Searches the catalogue for tracks matching free text ("aphex twin", "lofi hip hop"… | 1 | 🟢 |
| `pcparts.getProduct` | Reads ONE product page in full — pass a product URL or an offer straight from… | 3 | 🟢 |
| `pcparts.search` | Searches Newegg + Micro Center + B&H for ONE part (e.g. "Ryzen 7 7800X3D" or "RTX… | 3 | 🟢 |
| `products.getAvailability` | Reads one product page and returns its price and stock status, from the page's own… | 0 | 🟢 |
| `promocodes.search` | Looks up promo codes and checkout discounts for a merchant —… | 1 | 🟢 |
| `read.page` | Loads one page and returns its content. | 0 | 🟢 |
| `read.pages` | The same read over many urls, six in flight at a time, results in the order the urls… | 0 | 🟢 |
| `restaurant_booking.findAvailability` | Finds a restaurant by name — `bowmark.restaurant_booking.findAvailability("Paco… | 1 | 🟢 |
| `search.news` | Searches news coverage and returns stories with the headline, the outlet's own article… | 1 | 🟢 |
| `search.web` | Searches the web and returns ranked results — title, destination URL, snippet — from… | 1 | 🟢 |
| `sheds.findDealers` | Looks up the real places that sell a maker's buildings in one US state or Canadian… | 1 | 🟢 |
| `sheds.listStyles` | Lists every building style each maker actually offers — its customer-facing name, the… | 1 | 🟢 |
| `sheds.quote` | Prices a building at a real size for a real zip, exactly the way the maker's own… | 1 | 🟢 |
| `shipping.estimate` | Prices a domestic package — `{ fromZip: "20024", toZip: "10001", weightOz: 16 }` —… | 2 | 🟢 |
| `tariff.lookup` | Looks up an HS/HTS code (e.g. "6109.10.00") and returns its description, Column 1… | 0 | 🟢 |
| `weather.forecast` | Geocodes a place name and returns its daily forecast (default 5 days, max 16 —… | 0 | 🟢 |
