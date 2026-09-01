# Capabilities

> Generated from the live library — do not edit by hand. Run `pnpm run gen:coverage`.
> 54 functions. 🟢 implemented · ⚪ planned.
> Health was not read for this build, so 🟢 here means IMPLEMENTED, never working — a 🟢 row can be degraded or retired in prod right now. Ask the canary (`GET /internal/coverage`, or the coverage board in the admin app); never read this table for that.

One function per row. A capability is the thing you call; it fans out to whichever provider can answer, so the same call keeps working when one site changes.

| Function | What it does | Providers | Status |
|---|---|---|---|
| `bundles.checkAvailability` | Reads every item's product page and returns whether the WHOLE bundle can be built and… | 0 | 🟢 |
| `cable_railing_quote.getDesignOptions` | Lists Victor's real material families (304/316/2205 stainless, aluminum, wood-grain… | 1 | 🟢 |
| `cars.search` | Searches car hire for an airport and date range — `{ pickup: "SFO", pickupDate… | 1 | 🟢 |
| `coworking.findDayPasses` | Finds single-day coworking passes for a US city —… | 1 | 🟢 |
| `custom_sofa_configurator.getConfigurator` | Reads one sofa's full configurator — every option slot (Fabric, Wood Stain, Color… | 2 | 🟢 |
| `custom_sofa_configurator.listSofas` | Lists configurable sofas/sectionals across every maker — Joybird's whole catalogue… | 2 | 🟢 |
| `custom_sofa_configurator.priceConfiguration` | Prices ONE exact configuration against the maker's own live customizer and returns the… | 2 | 🟢 |
| `delivery.compareDeliveryFees` | Runs a free-text search — `bowmark.delivery.compareDeliveryFees("pad thai austin tx")`… | 1 | 🟢 |
| `developer_api_key_signup.signUp` | Signs up for a real API key on a developer dashboard — RUN this, don't just explain… | 1 | 🟢 |
| `domain.checkAvailability` | Looks up a domain name (e.g. "example.com") against its authoritative RDAP server and… | 0 | 🟢 |
| `email.findDomain` | Turns a company NAME into the domain it sends mail from — findDomain("Basecamp LLC")… | 1 | 🟢 |
| `flights.getBookingOptions` | Every seller on offer for ONE result — pass the whole row from `search()`, not its id. | 5 | 🟢 |
| `flights.getFlightStatus` | A flight's live status, checked directly with the airline that flies it. | 5 | 🟢 |
| `flights.search` | Searches for flights matching the query and returns `{ flights, warnings }`. `flights`… | 5 | 🟢 |
| `game_soundtrack_composer_credits.getCredits` | Looks up one soundtrack release-group by id (from search()) and returns its full… | 0 | 🟢 |
| `game_soundtrack_composer_credits.search` | Searches MusicBrainz for soundtrack releases matching a game title and returns each… | 0 | 🟢 |
| `git_commit_history.commitHistory` | Returns a public GitHub repository's commit log — each commit's sha (full and short)… | 1 | 🟢 |
| `git_release_notes.releaseNotes` | Returns a public GitHub repository's own release history — each release's tag, display… | 1 | 🟢 |
| `hotels.search` | Searches stays for a place and a date range — `{ location: "SFO", checkIn… | 1 | 🟢 |
| `hvac.getCostEstimate` | Calls the manufacturer's own published cost-guide table and returns a real… | 1 | 🟢 |
| `insurance.findAgent` | Finds an insurance agent or agency to actually call, across the two carriers this… | 4 | 🟢 |
| `insurance.getHomeQuotes` | Returns REAL home insurance quotes — actual carrier premiums for one property address… | 4 | 🟢 |
| `insurance.getLicensing` | Reads the regulators' own licensing record for ONE carrier, keyed on the `naicCode`… | 4 | 🟢 |
| `insurance.listReferralCarriers` | Lists the carriers a referral/marketplace program actually places business with — the… | 4 | 🟢 |
| `insurance.searchCarriers` | Searches the US insurance regulators' register — `{ name: "GEICO" }`, `{ licensedIn… | 4 | 🟢 |
| `istanbul_schedules.attractionHours` | Matches `query` against muze.gov.tr's own museum/site listing (a substring match on… | 1 | 🟢 |
| `local_database_gui.browse` | Parses the HTML of a local database GUI page (e.g. the caller's own agent read it off… | 0 | 🟢 |
| `local_html_preview.render` | Parses supplied HTML (a local file's contents, or a fragment) and returns a structured… | 0 | 🟢 |
| `mcp_registry.search` | Lists or searches the official MCP server registry (registry.modelcontextprotocol.io)… | 1 | 🟢 |
| `music.getTrack` | Reads ONE track you already have a URL for — a public track link, or a `Track` that… | 1 | 🟢 |
| `music.search` | Searches the catalogue for tracks matching free text ("aphex twin", "lofi hip hop"… | 1 | 🟢 |
| `pcparts.getProduct` | Reads ONE product page in full — pass a product URL or an offer straight from… | 3 | 🟢 |
| `pcparts.search` | Searches Newegg + Micro Center + B&H for ONE part (e.g. "Ryzen 7 7800X3D" or "RTX… | 3 | 🟢 |
| `phone_trade_in.estimate` | Looks up the current buyback value of an iPhone — `bowmark.phone_trade_in.estimate({… | 2 | 🟢 |
| `pricing.checkPersonalization` | Reads one product page's price once per persona (default: desktop + mobile, each a… | 0 | 🟢 |
| `products.getAvailability` | Reads one product page and returns its price and stock status, from the page's own… | 0 | 🟢 |
| `promocodes.search` | Looks up promo codes and checkout discounts for a merchant —… | 1 | 🟢 |
| `read.page` | Loads one page and returns its content. | 0 | 🟢 |
| `read.pages` | The same read over many urls, six in flight at a time, results in the order the urls… | 0 | 🟢 |
| `restaurant_booking.findAvailability` | Finds a restaurant by name — `bowmark.restaurant_booking.findAvailability("Paco… | 1 | 🟢 |
| `retail.search` | Searches Walmart, Target and Best Buy in parallel for a keyword and returns one… | 3 | 🟢 |
| `school_shopping_basket.priceList` | Prices a multi-item shopping list at Target and Walmart, one basket total per retailer. | 2 | 🟢 |
| `search.news` | Searches news coverage and returns stories with the headline, the outlet's own article… | 1 | 🟢 |
| `search.web` | Searches the web and returns ranked results — title, destination URL, snippet — from… | 1 | 🟢 |
| `sheds.findDealers` | Looks up the real places that sell a maker's buildings in one US state or Canadian… | 1 | 🟢 |
| `sheds.listStyles` | Lists every building style each maker actually offers — its customer-facing name, the… | 1 | 🟢 |
| `sheds.quote` | Prices a building at a real size for a real zip, exactly the way the maker's own… | 1 | 🟢 |
| `shipping.estimate` | Prices a domestic package — `{ fromZip: "20024", toZip: "10001", weightOz: 16 }` —… | 2 | 🟢 |
| `tariff.lookup` | Looks up an HS/HTS code (e.g. "6109.10.00") and returns its description, Column 1… | 0 | 🟢 |
| `text_to_speech.cloneVoice` | Creates a new voice cloned from one or more audio sample URLs (`options.sampleUrls`) —… | 1 | 🟢 |
| `text_to_speech.synthesize` | Converts `text` into spoken audio, base64-encoded, in an existing or previously-cloned… | 1 | 🟢 |
| `theme_park_tickets.search` | Looks up a Six Flags/Cedar Fair theme park by name (`"Cedar Point"`, `"Six Flags Magic… | 1 | 🟢 |
| `weather.forecast` | Geocodes a place name and returns its daily forecast (default 5 days, max 16 —… | 0 | 🟢 |
| `yoga_outfit_shopping.search` | Fans out one free-text query to lululemon, Beyond Yoga and Alo Yoga in parallel and… | 3 | 🟢 |
