# Capabilities

> Generated from the live library — do not edit by hand. Run `pnpm run gen:coverage`.
> 107 functions. 🟢 live · 🟡 degraded · 🔴 broken · ⚪ planned.
> Health is the capability canary's most recent verdict.

One function per row. A capability is the thing you call; it fans out to whichever provider can answer, so the same call keeps working when one site changes.

| Function | What it does | Providers | Status |
|---|---|---|---|
| `booking_links.find` | Finds a person's public booking links from their name. | 5 | 🟡 |
| `booking_links.read` | Reads a Calendly or Cal.com booking page without booking: who owns it, the events it… | 5 | 🟢 |
| `booking_links.scanPage` | Lists every booking link written on one page — hrefs, Cal.com embed buttons… | 5 | 🟢 |
| `browser_agent.list` | Lists this account's browser agent sessions (open ones by default) — check how many… | 1 | 🟢 |
| `browser_agent.send` | Sends the agent a follow-up in the same browser: an answer to its question, the… | 1 | 🟢 |
| `browser_agent.start` | A one-shot live browser for ONE task on a site nothing in the library covers; returns… | 1 | 🟢 |
| `browser_agent.status` | Reads a session: `running`, `needs_input` (relay `question` to your user, answer with… | 1 | 🟢 |
| `browser_agent.stop` | Stops the agent and shuts its browser; the watch link stops working. | 1 | 🟢 |
| `browser_agent.watchLink` | Makes a NEW watch link for an open session, for when the one from `start` was lost. | 1 | 🟢 |
| `bundles.checkAvailability` | Reads every item's product page and returns whether the WHOLE bundle can be built and… | 0 | 🟢 |
| `cable_railing_quote.getDesignOptions` | Lists Victor's real material families (304/316/2205 stainless, aluminum, wood-grain… | 1 | 🟢 |
| `candy_prices.search` | Search for candy and sweets across Target and Walmart, returning priced, in-stock rows… | 2 | 🟢 |
| `cars.search` | Searches car hire for an airport and date range — `{ pickup: "SFO", pickupDate… | 1 | 🟢 |
| `census_tract_demographics.householdIncome` | Returns median household income for a US Census tract by ZIP code, resolved via the… | 1 | 🟢 |
| `census_tract_household_income.householdIncome` | Retrieves median household income from US Census Bureau data for a given location. | 1 | 🟢 |
| `concert_setlist.search` | Search for concert setlists by artist name, venue, or date. | 0 | 🟢 |
| `costume_size_check.checkSize` | Checks whether one costume character exists in one size, right now, at Target… | 3 | 🟢 |
| `coworking.findDayPasses` | Finds single-day coworking passes for a US city —… | 1 | 🟢 |
| `currency_exchange.getRate` | Returns the current exchange rate between two currencies | 1 | 🟢 |
| `custom_packaging_quote.quoteCustomBox` | Gets a real, quantity-tiered price for a custom printed box from every supplier that… | 2 | 🟢 |
| `custom_sofa_configurator.getConfigurator` | Reads one sofa's full configurator — every option slot (Fabric, Wood Stain, Color… | 2 | 🟢 |
| `custom_sofa_configurator.listSofas` | Lists configurable sofas/sectionals across every maker — Joybird's whole catalogue… | 2 | 🟢 |
| `custom_sofa_configurator.priceConfiguration` | Prices ONE exact configuration against the maker's own live customizer and returns the… | 2 | 🟢 |
| `delegate.list` | Lists this account's delegate sessions (open ones by default). | 1 | 🟢 |
| `delegate.send` | Continues the same conversation in the same machine after a turn has finished: a… | 1 | 🟢 |
| `delegate.start` | Boots a fresh Linux machine running Claude Code on `prompt`, optionally inside a clone… | 1 | 🟢 |
| `delegate.status` | Reads a session: `running`, `idle` (done — read `result`, `files`, `diff`), `failed`… | 1 | 🟢 |
| `delegate.stop` | Destroys the machine and closes the session. | 1 | 🟢 |
| `delivery.compareDeliveryFees` | Runs a free-text search — `bowmark.delivery.compareDeliveryFees("pad thai austin tx")`… | 1 | 🟢 |
| `developer_api_key_signup.signUp` | Signs up for a real developer API key on a dashboard. `service` selects which… | 1 | 🟢 |
| `domain.checkAvailability` | Looks up a domain name (e.g. "example.com") against its authoritative RDAP server and… | 0 | 🟢 |
| `email.findDomain` | Turns a company NAME into the domain it sends mail from — findDomain("Basecamp LLC")… | 1 | 🟢 |
| `entertainment_merch.search` | Searches Hot Topic and BoxLunch in parallel for a franchise/character/show and returns… | 2 | 🟢 |
| `flights.getBookingOptions` | Every seller on offer for ONE result — pass the whole row from `search()`, not its id. | 5 | 🟢 |
| `flights.getFlightStatus` | A flight's live status, checked directly with the airline that flies it. | 5 | 🟢 |
| `flights.search` | Searches for flights matching the query and returns `{ flights, warnings }`. `flights`… | 5 | 🟢 |
| `furnished_apartment_rental.search` | Search for furnished apartments in the specified city across multiple providers. | 1 | 🟢 |
| `game_soundtrack_composer_credits.getCredits` | Looks up one soundtrack release-group by id (from search()) and returns its full… | 0 | 🟢 |
| `game_soundtrack_composer_credits.search` | Searches MusicBrainz for soundtrack releases matching a game title and returns each… | 0 | 🟢 |
| `gas_prices.search` | Returns cheapest gas stations near a US ZIP code, sorted by price ascending. fuelType… | 1 | 🟢 |
| `git_commit_history.commitHistory` | Returns a public GitHub repository's commit log — each commit's sha (full and short)… | 1 | 🟢 |
| `git_release_notes.releaseNotes` | Returns a public GitHub repository's own release history — each release's tag, display… | 1 | 🟢 |
| `goal_diff.search` | Search for sports standings with goal differential data. `options.timeoutMs` sets the… | 1 | 🟢 |
| `gstin_verification.lookup` | Verifies a GSTIN and returns the registrant's legal name, registration status… | 1 | 🟡 |
| `hotels.search` | Searches stays for a place and a date range — `{ location: "SFO", checkIn… | 1 | 🟢 |
| `hvac.getCostEstimate` | Calls the manufacturer's own published cost-guide table and returns a real… | 1 | 🟢 |
| `industrial_supply.search` | Searches industrial supply catalogs by product name, part number or category… | 1 | 🟢 |
| `insurance.findAgent` | Finds an insurance agent or agency to actually call, across the two carriers this… | 4 | 🟢 |
| `insurance.getHomeQuotes` | Returns REAL home insurance quotes — actual carrier premiums for one property address… | 4 | 🟡 |
| `insurance.getLicensing` | Reads the regulators' own licensing record for ONE carrier, keyed on the `naicCode`… | 4 | 🟢 |
| `insurance.listReferralCarriers` | Lists the carriers a referral/marketplace program actually places business with — the… | 4 | 🟢 |
| `insurance.searchCarriers` | Searches the US insurance regulators' register — `{ name: "GEICO" }`, `{ licensedIn… | 4 | 🟢 |
| `istanbul_schedules.attractionHours` | Matches `query` against muze.gov.tr's own museum/site listing (a substring match on… | 1 | 🟢 |
| `kenya_fuel_prices.search` | Returns current Kenya pump prices for diesel, petrol, or kerosene. | 0 | 🟢 |
| `local_database_gui.browse` | Parses the HTML of a local database GUI page (e.g. the caller's own agent read it off… | 0 | 🟢 |
| `local_html_preview.render` | Parses supplied HTML (a local file's contents, or a fragment) and returns a structured… | 0 | 🟢 |
| `mac_trade_in.estimate` | Get the Apple Trade In credit value for a Mac model, with optional specs. | 1 | 🟢 |
| `mcp_registry.search` | Lists or searches the official MCP server registry (registry.modelcontextprotocol.io)… | 1 | 🟢 |
| `municipal_recreation_fees.getFeeSchedule` | Retrieves annual recreation centre membership fees (adult and family passes) for a… | 1 | 🟢 |
| `music.getTrack` | Reads ONE track you already have a URL for — a public track link, or a `Track` that… | 1 | 🟢 |
| `music.search` | Searches the catalogue for tracks matching free text ("aphex twin", "lofi hip hop"… | 1 | 🟢 |
| `pcparts.getProduct` | Reads ONE product page in full — pass a product URL or an offer straight from… | 3 | 🟡 |
| `pcparts.search` | Searches Newegg + Micro Center + B&H for ONE part (e.g. "Ryzen 7 7800X3D" or "RTX… | 3 | 🟢 |
| `pet_boarding.search` | Searches overnight pet-boarding sitters for a city and increasing ISO start/end dates… | 1 | 🟢 |
| `phone_price.compare` | Prices one phone across T-Mobile and Visible in parallel and returns a price-sorted… | 2 | 🟢 |
| `phone_trade_in.estimate` | Looks up the current buyback value of an iPhone — `bowmark.phone_trade_in.estimate({… | 2 | 🟢 |
| `pricing.checkPersonalization` | Reads one product page's price once per persona (default: desktop + mobile, each a… | 0 | 🟢 |
| `products.getAvailability` | Reads one product page and returns its price and stock status, from the page's own… | 0 | 🟢 |
| `promocodes.search` | Looks up promo codes and checkout discounts for a merchant —… | 1 | 🟢 |
| `prospect_screening.screenCompany` | Fetches the homepage, reads any schema.org employee-count signal and any… | 0 | 🟢 |
| `read.page` | Loads one page and returns its content. | 0 | 🟢 |
| `read.pages` | The same read over many urls: requests to the SAME origin are serialized (one at a… | 0 | 🟢 |
| `read.urls` | Lists the pages a site has, so you can pick which to `read.page` instead of guessing… | 0 | 🟢 |
| `restaurant_booking.findAvailability` | Finds a restaurant by name — `bowmark.restaurant_booking.findAvailability("Paco… | 1 | 🟡 |
| `retail.search` | Searches Walmart, Target and Best Buy in parallel for a keyword and returns one… | 3 | 🟢 |
| `school_shopping_basket.priceList` | Prices a multi-item shopping list at Target and Walmart, one basket total per retailer. | 2 | 🟢 |
| `script_execution.guide` | Returns the loop for doing a task (get_library, then a script, then run), the… | 0 | 🟢 |
| `search.news` | Searches news coverage and returns stories with the headline, the outlet's own article… | 1 | 🟢 |
| `search.web` | Searches the web and returns ranked results — title, destination URL, snippet — from… | 1 | 🟡 |
| `sheds.findDealers` | Looks up the real places that sell a maker's buildings in one US state or Canadian… | 1 | 🟢 |
| `sheds.listStyles` | Lists every building style each maker actually offers — its customer-facing name, the… | 1 | 🟢 |
| `sheds.quote` | Prices a building at a real size for a real zip, exactly the way the maker's own… | 1 | 🟢 |
| `shipping.estimate` | Prices a domestic package — `{ fromZip: "20024", toZip: "10001", weightOz: 16 }` —… | 3 | 🟢 |
| `stream_channel.get` | Reads the signed-in streamer's own channel settings: the title shown on the stream… | 1 | 🟡 |
| `stream_channel.set` | Updates the signed-in streamer's own channel settings and returns them as they now… | 1 | 🟡 |
| `stream_highlights.create` | Cuts a highlight from [startSeconds, endSeconds] of the signed-in streamer's broadcast… | 1 | 🟢 |
| `tariff.lookup` | Looks up an HS/HTS code (e.g. "6109.10.00") and returns its description, Column 1… | 0 | 🟢 |
| `text_to_speech.cloneVoice` | Creates a new voice cloned from one or more audio sample URLs (`options.sampleUrls`) —… | 1 | 🟢 |
| `text_to_speech.synthesize` | Converts `text` into spoken audio, base64-encoded, in an existing or previously-cloned… | 1 | 🟢 |
| `theme_park_tickets.search` | Looks up a Six Flags/Cedar Fair theme park by name (`"Cedar Point"`, `"Six Flags Magic… | 1 | 🟢 |
| `video_editing.editFootage` | Trims, cuts or blurs one of the caller's own YouTube videos by starting a hosted… | 1 | 🟢 |
| `video_library.addToPlaylist` | Adds one or many videos to one of the caller's own playlists, as a single edit. | 1 | 🟡 |
| `video_library.createChannel` | Gives the signed-in account a YouTube CHANNEL, under its own Google profile name and… | 1 | 🟡 |
| `video_library.createPlaylist` | Creates an empty playlist on the caller's own account and returns its id and URL. | 1 | 🟡 |
| `video_library.deleteVideo` | PERMANENTLY deletes one of the caller's own videos, with its views and comments —… | 1 | 🟢 |
| `video_library.homeFeed` | The videos on the caller's OWN YouTube home page — the personalized recommendation… | 1 | 🟡 |
| `video_library.liked` | The videos the caller has liked, newest first. | 1 | 🟡 |
| `video_library.myVideos` | The videos on the caller's OWN channel, newest first, including private and unlisted… | 1 | 🟢 |
| `video_library.setThumbnail` | Sets a custom thumbnail (JPG or PNG, up to 2 MB, 1280x720 recommended) on one of the… | 1 | 🟢 |
| `video_library.updateVideo` | Changes the details of one of the caller's own videos — title, description, tags… | 1 | 🟢 |
| `video_library.uploadVideo` | Uploads a video file to the caller's own YouTube channel and returns its id and link. | 1 | 🟢 |
| `video_library.watchLater` | The caller's own Watch Later queue, newest first. | 1 | 🟡 |
| `weather.forecast` | Geocodes a place name and returns its daily forecast (default 5 days, max 16 —… | 0 | 🟢 |
| `web_form_fields.fillForm` | Opens the page (and the booking/quote widget behind a button, exactly as `getFields`… | 0 | 🟢 |
| `web_form_fields.getFields` | Reads a page and returns its forms plus a total field count, each field with its… | 0 | 🟢 |
| `wireless.compareAllInPrice` | For a given line count, fans out across every carrier this capability declares and… | 0 | 🟢 |
| `yoga_outfit_shopping.search` | Fans out one free-text query to lululemon, Beyond Yoga and Alo Yoga in parallel and… | 3 | 🟢 |
