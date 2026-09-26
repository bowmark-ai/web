# Providers

> Generated from the live library — do not edit by hand. Run `pnpm run gen:coverage`.
> 2464 functions. 🟢 live · 🟡 degraded · 🔴 broken · ⚪ planned.
> Health is the capability canary's most recent verdict.

One function per row. A provider is one site, reached directly. A FAMILY (a storefront platform) is one row per function carrying its member count — never one row per member.

| Function | Site | What it does | Status |
|---|---|---|---|
| `a1storage.getFacilityUnits` | a1storage.com | Reads one facility's live unit inventory by size group (from `listFacilities`'s… | 🟢 |
| `a1storage.getMoveInCost` | a1storage.com | Computes the itemized pre-rental move-in cost for one selected unit (from… | 🟢 |
| `a1storage.listFacilities` | a1storage.com | Lists every A-1 Self Storage facility (51 today) with its address, phone, email… | 🟢 |
| `aa.getAirportInfo` | aa.com | Reads what American publishes about an airport it serves — which terminal it operates… | ⚪ |
| `aa.getBaggageAllowance` | aa.com | American's published baggage allowance and fees for a ROUTE, keyed on the two… | 🟢 |
| `aa.getFlightStatus` | aa.com | Looks up an American Airlines flight's real-time status by flight number and date, or… | 🟢 |
| `aa.getSeatMap` | aa.com | Reads the seat map for a specific flight — the cabin layout, which seats are free… | ⚪ |
| `aa.getServiceFees` | aa.com | Reads American's optional-service fee schedule — seat selection, change and… | ⚪ |
| `aa.listLounges` | aa.com | Lists American's Admirals Club and Flagship lounges for an airport — location within… | ⚪ |
| `aa.retrieveBooking` | aa.com | Reads an existing American Airlines reservation by its six-letter record locator (PNR)… | 🟢 |
| `aa.search` | aa.com | Searches American's own fares for an origin/destination/date (and cabin, passenger… | ⚪ |
| `aa.searchAwardFlights` | aa.com | Searches the same routes priced in AAdvantage miles rather than cash — award… | ⚪ |
| `aauto.getProduct` | 1aauto.com | Reads one product page by the URL search() returns — the real title, brand, SKU… | 🟢 |
| `aauto.search` | 1aauto.com | Reads 1A Auto's own search-results page for a query — DIY replacement auto parts… | 🟢 |
| `abercrombie.checkGiftCardBalance` | abercrombie.com | Checks the remaining balance on an Abercrombie gift card the way the site's own… | ⚪ |
| `abercrombie.checkStock` | abercrombie.com | Answers whether a specific size/color of a product is buyable right now — online, and… | 🟢 |
| `abercrombie.findStores` | abercrombie.com | Finds physical Abercrombie/abercrombie kids stores near a zip code or city (state) the… | 🟢 |
| `abercrombie.getDeals` | abercrombie.com | Reads Abercrombie's currently published sales and promotions — the site's own… | ⚪ |
| `abercrombie.getProduct` | abercrombie.com | Reads one Abercrombie & Fitch product in full the way its own product detail page does… | 🟢 |
| `abercrombie.search` | abercrombie.com | Searches or browses Abercrombie's live catalog the way the site's own search bar and… | 🟢 |
| `abqplumb.getAvailability` | abqplumb.com | Returns currently-open ABQ Plumb appointment slots for a service and issue type… | 🟢 |
| `abqplumb.listServices` | abqplumb.com | Lists ABQ Plumb's public booking-widget services and their issue types — the entry… | 🟢 |
| `acerentacar.searchAvailability` | acerentacar.com | Returns ACE's live vehicle availability and rate totals for a public pickup location… | 🟢 |
| `acerentacar.searchLocations` | acerentacar.com | Matches a free-text city, airport or state against ACE's public location catalog and… | 🟢 |
| `achosahw.getQuote` | achosahw.com | Prices one real, purchasable Homeowner's plan combination — state, coverage level… | 🟢 |
| `achosahw.listStates` | achosahw.com | Reads the /shop state selector and returns every state Achosa currently sells a… | 🟢 |
| `acqualinaresort.searchAvailability` | acqualinaresort.com | Runs Acqualina's own SynXis GEM reservation engine (property 7032, chain 24447) for… | 🟢 |
| `agakhanhospitals.getHospitalInfo` | agakhanhospitals.org | Aga Khan Hospital, Kisumu's contact info (address, hours, phone), emergency-services… | 🟢 |
| `agakhanhospitals.listSpecialties` | agakhanhospitals.org | Every specialty clinic AKHK runs (Cardiology, Dermatology, Oncology, Orthopaedics… | 🟢 |
| `ai_engineer.getSpeaker` | ai.engineer | Returns detailed information about one speaker from the AI Engineer conference… | 🟡 |
| `ai_engineer.listSpeakers` | ai.engineer | Lists all speakers at the AI Engineer conference with their names, titles, companies… | 🟡 |
| `aiper.listPoolChooserQuestions` | aiper.store | Lists the questions the Help Me Choose pool-cleaner finder asks (pool size, surface… | 🟢 |
| `aiper.recommendPoolCleaner` | aiper.store | Runs the Help Me Choose quiz's real backend computation against a buyer's answers and… | 🟢 |
| `airbnb.search` | airbnb.com | Runs Airbnb's own stays search (airbnb.com/s/<location>/homes) for a free-text… | 🟢 |
| `airtable.createRecord` | airtable.com | Creates a new record in a specified table. | 🟢 |
| `airtable.getRecord` | airtable.com | Retrieves a single record by its ID from a specified table. | 🟢 |
| `airtable.listBases` | airtable.com | Lists all bases the authenticated user can access. | 🟢 |
| `airtable.listRecords` | airtable.com | Lists all records in a specified table with optional filtering and sorting. | 🟢 |
| `airtable.listTables` | airtable.com | Lists all tables in a specified base. | 🟢 |
| `airtable.updateRecord` | airtable.com | Updates an existing record by its ID. | 🟢 |
| `ajmadison.checkStock` | ajmadison.com | Reads one product's detail page for its real, current stock/availability message. | ⚪ |
| `ajmadison.search` | ajmadison.com | Runs AJ Madison's own category + facet filter (brand, size/capacity, price band… | 🟢 |
| `allied.estimatePackingSupplies` | allied.com | Runs Allied Van Lines' own Packing Calculator: pass which rooms are moving (no… | 🟢 |
| `alphavantage.signUp` | alphavantage.co | Runs alphavantage.co's real signup flow (organization + email, an optional occupation)… | 🟢 |
| `amazon.addToCart` | www.amazon.com | Put a product in the cart, in the quantity asked for, and report what the cart then… | ⚪ |
| `amazon.getCart` | www.amazon.com | Read what is in the cart — line items, quantities, per-item and total price — so an… | ⚪ |
| `amazon.getDeliveryEstimate` | www.amazon.com | When a product would actually arrive at a given US ZIP, and what it costs to get it… | 🟢 |
| `amazon.getProduct` | www.amazon.com | Read one product page the way a shopper reads it: title, brand, ASIN, current price… | 🟢 |
| `amazon.getSeller` | www.amazon.com | Read a marketplace seller's storefront — their name, feedback across four windows (30… | 🟢 |
| `amazon.listBestSellerCategories` | www.amazon.com | List the departments Amazon publishes rankings for — Electronics, Kitchen & Dining… | 🟢 |
| `amazon.listBestSellers` | www.amazon.com | Amazon's hourly-updated top 100 in a department — what is actually selling right now… | 🟢 |
| `amazon.listCategoryProducts` | www.amazon.com | Browse a whole department with no keyword at all — "what is in Home & Kitchen… | 🟢 |
| `amazon.listDeals` | www.amazon.com | Today's Deals — what is discounted right now, with the deal price, the price it was… | 🟢 |
| `amazon.listMostWishedFor` | www.amazon.com | What people in a department are adding to wish lists and registries most — demand that… | 🟢 |
| `amazon.listMoversAndShakers` | www.amazon.com | The biggest sales-rank gainers in a department over the past 24 hours — what is… | ⚪ |
| `amazon.listNewReleases` | www.amazon.com | What is newly out in a department, in Amazon's own hot-new-releases order — the… | 🟢 |
| `amazon.listOrders` | www.amazon.com | The signed-in person's own order history — what they bought, when, for how much, and… | ⚪ |
| `amazon.listQuestions` | www.amazon.com | The customer questions and answers under a product — the place where the answer to… | ⚪ |
| `amazon.listRelatedProducts` | www.amazon.com | The other products Amazon puts next to this one — "Frequently bought together" and… | 🟢 |
| `amazon.listReviews` | www.amazon.com | Read what customers actually wrote about a product — reviewer name, star rating… | 🟡 |
| `amazon.listSellerOffers` | www.amazon.com | Every seller offering the same product, side by side — each one's price, shipping… | 🟢 |
| `amazon.listVariations` | www.amazon.com | List every version of a product that is really the same listing — the 8-inch… | 🟢 |
| `amazon.listWishLists` | www.amazon.com | A signed-in person's own wish lists and registries and what is on them — the… | ⚪ |
| `amazon.searchProducts` | www.amazon.com | Paginate through all Amazon search results by keywords, reaching every row from 1 to… | 🟢 |
| `amazon.suggestKeywords` | www.amazon.com | Ask Amazon's own search box what it would autocomplete a prefix to — "cast iron" comes… | 🟢 |
| `amazon.trackShipment` | www.amazon.com | Where a specific order's package is and when it is due — the follow-up question to… | ⚪ |
| `americandreamvacations.listLocations` | americandreamvacations.net | Returns American Dream Vacations' own list of rental store locations (city, state and… | 🟢 |
| `americandreamvacations.searchInventory` | americandreamvacations.net | Runs American Dream Vacations' own "Check availability" search for one store location… | 🟢 |
| `americanstandard.getSystemCostEstimate` | americanstandardair.com | Reads American Standard's own published cost guide for one system type ("Air… | 🟢 |
| `americanvisionwindows.bookAppointment` | americanvisionwindows.com | Would submit the final booking (name/phone/email/street/city + the chosen date and… | ⚪ |
| `americanvisionwindows.checkAvailability` | americanvisionwindows.com | Checks real, currently-open in-home consultation appointment slots for a US ZIP code… | 🟢 |
| `amramp.findNearestLocation` | amramp.com | Runs Amramp's own ZIP/postal-code locator — the same… | 🟢 |
| `ancientnutrition.computeGutType` | ancientnutrition.com | Runs Ancient Nutrition's real Gut Type Quiz with the caller's own answers (keyed by… | 🟢 |
| `ancientnutrition.getGutTypeQuizQuestions` | ancientnutrition.com | Walks Ancient Nutrition's real Gut Type Quiz along its default path (first option for… | 🟢 |
| `andersenwindows.findDealers` | andersenwindows.com | Finds Andersen-certified dealers and contractors near a US ZIP code — the entry point… | 🟢 |
| `andstr.getListing` | booking.andstr.com | One listing's full detail page — bedrooms/bathrooms/max guests, description… | 🟢 |
| `andstr.getQuote` | booking.andstr.com | The real, date-priced quote for one listing — per-night breakdown, service fee… | 🟢 |
| `andstr.search` | booking.andstr.com | Runs stayAndes's own search-and-book portal (booking.andstr.com) — filters by market… | 🟢 |
| `angussystems.listAccessRequests` | angus-systems.com | Lists the after-hours access requests for a client's portal, showing the status… | ⚪ |
| `anthropic_com.getDoc` | anthropic.com | Reads one page of anthropic.com's engineering blog (/engineering/...) or legal terms… | 🟢 |
| `anthropic_com.listDocs` | anthropic.com | Lists every engineering-blog and legal-terms page anthropic.com publishes — url… | 🟢 |
| `antunes.findServiceAgencies` | antunes.com | Runs Antunes' own real-time authorized service-agency/distributor locator (the WP… | 🟢 |
| `aosom.getProduct` | aosom.com | Reads one product's live price and the site's own buyability flag straight off its… | 🟢 |
| `aosom.searchProducts` | aosom.com | Searches Aosom's live catalog (Outsunny/HOMCOM/PawHut/Soozier) for a free-text query… | 🟢 |
| `app_store.getApp` | apps.apple.com | Read one app the way its store listing reads: name, developer, price, average rating… | 🟢 |
| `app_store.getAppDetails` | apps.apple.com | Everything the store page shows that the API does not: the five-star histogram behind… | 🟢 |
| `app_store.getApps` | apps.apple.com | Read up to fifty apps in ONE request, for when an agent already holds a list of ids —… | 🟢 |
| `app_store.getStory` | apps.apple.com | Read an App Store editorial story — the Today-tab piece Apple's editors wrote ("Master… | 🟢 |
| `app_store.listCategories` | apps.apple.com | List every category and subcategory the App Store sorts apps into — Business… | 🟢 |
| `app_store.listDeveloperApps` | apps.apple.com | List every app one developer has on the store — from the developer's numeric artist… | 🟢 |
| `app_store.listPurchasedApps` | apps.apple.com | List the apps this Apple Account has bought or downloaded, with what was paid and when… | ⚪ |
| `app_store.listReviews` | apps.apple.com | Read what people actually wrote about an app — the review body, its title, the star… | 🟢 |
| `app_store.listSimilarApps` | apps.apple.com | Answer "what else is like this one" with the App Store's own You Might Also Like shelf… | 🟢 |
| `app_store.listSubscriptions` | apps.apple.com | List the App Store subscriptions this Apple Account is paying for, what each one… | ⚪ |
| `app_store.listTodayStories` | apps.apple.com | List the editorial stories Apple is featuring on the Today tab right now — the page a… | 🟢 |
| `app_store.listTopCharts` | apps.apple.com | What is charting on the App Store right now — top free or top paid, on iPhone, iPad or… | 🟢 |
| `app_store.searchApps` | apps.apple.com | Search the App Store for what a person would actually type — "budget tracker"… | 🟢 |
| `app_store.writeReview` | apps.apple.com | Rate an app and leave a written review on it, as the signed-in Apple Account. | ⚪ |
| `apple.bookGeniusBarAppointment` | apple.com | Book a Genius Bar or repair appointment at a specific store. | ⚪ |
| `apple.checkCoverage` | apple.com | Look up what warranty or AppleCare a device still has from its serial number. | ⚪ |
| `apple.compareModels` | apple.com | Put two or more models of the SAME family — Mac, iPhone, iPad or Apple Watch — side by… | 🟢 |
| `apple.findStoresNear` | apple.com | Find the Apple Stores near a place a person named — "Cupertino", "94108", "San… | 🟢 |
| `apple.getConfigurationOptions` | apple.com | Read every choice a buy page actually offers — chip, memory, storage, colour, size… | 🟢 |
| `apple.getDeliveryEstimate` | apple.com | When would this actually arrive if I ordered it now, to my ZIP code — the delivery… | 🟢 |
| `apple.getNewsroomPost` | apple.com | Read one Apple press release in full from its URL — the announcement text itself, not… | 🟢 |
| `apple.getOrderStatus` | apple.com | Where is my Apple order, and when does it arrive. | ⚪ |
| `apple.getPickupAvailability` | apple.com | Answer the one question apple.com is uniquely able to answer and no other site can… | 🟢 |
| `apple.getProduct` | apple.com | Reads one apple.com product/buy page (a URL or path search already returned, e.g.… | 🟢 |
| `apple.getProductByPartNumber` | apple.com | Turn an Apple part number — the MYAP3LL/A-shaped code printed on every buy page, in… | 🟢 |
| `apple.getPurchaseOptions` | apple.com | Read the ways Apple will let you pay for one product — buy it outright, Apple Card… | 🟢 |
| `apple.getRepairPricing` | apple.com | What Apple charges to fix an iPhone, iPad or Apple Watch — every model, every kind of… | 🟢 |
| `apple.getStore` | apple.com | Read one Apple Store: its full address, phone number, map coordinates, store number… | 🟢 |
| `apple.getSupportArticle` | apple.com | Read one Apple support article end to end — the actual instructions, not a search… | 🟢 |
| `apple.getSystemStatus` | apple.com | Is App Store / iCloud / FaceTime / Apple Music down right now, or is it me —… | 🟢 |
| `apple.getTradeInEstimate` | apple.com | Reads apple.com's own trade-in value table and returns the ceiling ("up to $X")… | 🟢 |
| `apple.listAccessories` | apple.com | Everything Apple sells that is not a device — cases, chargers, bands, keyboards… | 🟢 |
| `apple.listFamilyModels` | apple.com | List every model Apple currently sells in one product family — every Mac, every… | 🟢 |
| `apple.listNewsroomPosts` | apple.com | Apple's official announcements, newest first — every product launch, financial result… | 🟢 |
| `apple.listOrders` | apple.com | Everything I have bought from Apple, with dates and prices. | ⚪ |
| `apple.listRefurbished` | apple.com | Apple's own certified refurbished store, read as data: every listing currently in… | 🟢 |
| `apple.listStores` | apple.com | Every Apple Store in the US on one call — its name and its page — so a caller can… | 🟢 |
| `apple.listTodaySessions` | apple.com | The free Today at Apple sessions one store is running — every upcoming one, with what… | 🟢 |
| `apple.listTradeInValues` | apple.com | The whole Apple Trade In price list in one call. "smartphone" is the rich catalogue… | 🟢 |
| `apple.resolveLocation` | apple.com | Turn the place a person said — "cupertino", "san francisco" — into the exact location… | 🟢 |
| `apple.search` | apple.com | Searches apple.com's own site search for a keyword, returning the organic and curated… | 🟢 |
| `apple.searchSupport` | apple.com | Search Apple's own support library the way a person describes a problem — "iphone… | 🟢 |
| `apple.suggestSearches` | apple.com | Type the first two letters of what you want — "airpo", "macbo" — and get back what… | 🟢 |
| `aquaphoenixsci.browseCategory` | catalog.aquaphoenixsci.com | Lists real products in one of AquaPhoenix's catalog categories (test kits, meters, lab… | 🟢 |
| `aquaphoenixsci.getProduct` | catalog.aquaphoenixsci.com | Reads one product's real detail page: SKU, name, price (when anonymously priced)… | 🟢 |
| `arajet.search` | arajet.com | Runs Arajet's own flight-schedule search (origin, destination, date, passengers) and… | 🟢 |
| `archipelago.getClientRelease` | archipelago.gg | Returns the latest published Archipelago client release — the version tag, the GitHub… | 🟢 |
| `archipelago.getGameOptions` | archipelago.gg | Returns one game's per-player randomizer options — the commented YAML template… | 🟢 |
| `archive_org.checkAvailability` | archive.org | The Wayback Machine's own public availability lookup — is a site or page archived, and… | 🟡 |
| `archive_org.checkLendingAvailability` | archive.org | Checks whether a book item is available to borrow (lend) from the Internet Archive at… | ⚪ |
| `archive_org.downloadFile` | archive.org | Builds a download URL for one file within an item — a book PDF, an audio file, a… | ⚪ |
| `archive_org.getItem` | archive.org | Fetches the full metadata of one item in the Internet Archive's library — title… | ⚪ |
| `archive_org.getSnapshot` | archive.org | Reads one archived page as it was captured — the original HTML without the archive's… | 🟢 |
| `archive_org.listSnapshots` | archive.org | Lists the Wayback Machine's captures, newest first — every distinct page under a bare… | 🟡 |
| `archive_org.searchItems` | archive.org | Search the Internet Archive's library of books, films, audio, software and more using… | ⚪ |
| `archive_org.searchScholar` | archive.org | Search scholar.archive.org for scholarly articles, papers, and academic texts —… | ⚪ |
| `artpix3d.getSizePricing` | artpix3d.com | Runs the site's own size/price computation for one shape: every size's real current… | 🟢 |
| `artpix3d.listPhotoCrystalShapes` | artpix3d.com | Lists every ArtPix 3D Photo Crystal shape currently sold (rectangle, heart, square… | 🟢 |
| `artpix3d.listShapes` | artpix3d.com | Lists every crystal shape ArtPix 3D currently sells (rectangle, heart, square, …)… | 🟢 |
| `ashleyfurniture.checkStock` | ashleyfurniture.com | Answers whether a product (by SKU) is available for delivery to a ZIP — the function… | 🟡 |
| `ashleyfurniture.findStore` | ashleyfurniture.com | Finds nearby Ashley HomeStore locations for a ZIP or address — hours, phone, and… | 🟢 |
| `ashleyfurniture.getProduct` | ashleyfurniture.com | Reads one product page in full — price, dimensions, fabric/finish/size options… | 🟢 |
| `ashleyfurniture.search` | ashleyfurniture.com | Searches or browses Ashley's furniture and home-goods catalog by keyword or category… | 🟢 |
| `ashleyfurniture.trackOrder` | ashleyfurniture.com | Looks up the status of a placed order (order number plus email or ZIP, no sign-in) —… | ⚪ |
| `asppoolco.findLocationByZip` | asppoolco.com | Matches a 5-digit US zip code against ASP's 257-location franchise network and returns… | 🟢 |
| `asppoolco.listLocations` | asppoolco.com | Lists every ASP franchise location on the public directory, optionally narrowed to one… | 🟢 |
| `astoundgroup.getContactForm` | astoundgroup.com | Reads Astound Group's "Get in Touch" contact form (astoundgroup.com/contact-us by… | 🟢 |
| `astoundgroup.listPages` | astoundgroup.com | Lists every page Astound Group's own sitemap.xml publishes — url and last-modified… | 🟢 |
| `atlasoceanvoyages.getVoyage` | atlasoceanvoyages.com | Reads one voyage's own detail page: the full port-by-port day itinerary with… | 🟢 |
| `atlasoceanvoyages.searchVoyages` | atlasoceanvoyages.com | Runs the /search voyage finder — destination, ship, duration and departure-date… | 🟢 |
| `atlasseniorliving.searchCommunities` | atlasseniorliving.com | Runs the site's own 'Find a Community' search at… | 🟢 |
| `att.getPlanTotal` | att.com | Walks AT&T's new-line plan-builder / order flow (att.com/plans/unlimited-data-plans/ →… | ⚪ |
| `audibel.findClinics` | audibel.com | Runs Audibel's find-a-clinic locator for a ZIP code, city or address and returns the… | 🟢 |
| `autocamp.listProperties` | autocamp.com | Lists AutoCamp's active properties (name, location, the reservations-engine hotel id)… | 🟢 |
| `autocamp.searchAvailability` | autocamp.com | Runs AutoCamp's own SynXis-backed reservation engine for one property (location +… | 🟢 |
| `avalonmalibu_com.getInsuranceForm` | avalonmalibu.com | Reads Avalon Malibu's public insurance-verification form and returns its fields… | 🟢 |
| `avantstay.getPricing` | avantstay.com | Prices every room type at one AvantStay hotel-style property for a given date range… | 🟢 |
| `avantstay.searchProperties` | avantstay.com | Runs AvantStay's own portfolio search (the same query the site-wide search widget… | 🟢 |
| `avenuehealthcare.search` | avenuehealthcare.com | Search for available clinics and services across Avenue Healthcare locations in Kenya. | 🟢 |
| `avis.getDeals` | avis.com | Reads Avis's current published promotions and discount codes — the site's own "Deals &… | ⚪ |
| `avis.getLocation` | avis.com | Reads one Avis rental location in full off the site's own location-search API for a… | 🟢 |
| `avis.getReservation` | avis.com | Reads an existing Avis reservation the way the site's own "View / Modify / Cancel"… | ⚪ |
| `avis.search` | avis.com | Searches Avis's live car rental availability the way its own booking widget does —… | ⚪ |
| `avis.searchLocations` | avis.com | Finds Avis rental locations matching a full city name or an airport code (`query`… | 🟢 |
| `ayreshotels.checkRates` | ayreshotels.com | Checks one property's real live rate/availability for a date range, straight off the… | 🟢 |
| `azazie.getBuildYourOwnConfig` | azazie.com | Reads one bridesmaid-dress style's full Build Your Own configuration — every color… | 🟢 |
| `azazie.getColorFamily` | azazie.com | Reads every dress style available in one named color, mirroring the product page's own… | ⚪ |
| `azazie.search` | azazie.com | Searches Azazie's catalog by free text (style, color, fabric, occasion). | 🟢 |
| `azure.checkRegionAvailability` | azure.microsoft.com | Answers whether a given Azure product is actually available in a given region, and in… | ⚪ |
| `azure.estimateCost` | azure.microsoft.com | Prices a whole proposed deployment rather than one meter: the caller passes line items… | ⚪ |
| `azure.getServiceHealth` | azure.microsoft.com | Returns the current operational status of Azure services by service and region — which… | ⚪ |
| `azure.getServicePricing` | azure.microsoft.com | Returns Microsoft's published retail rates for an Azure service, narrowed by SKU… | 🟢 |
| `azure.getServiceSla` | azure.microsoft.com | Returns the uptime guarantee Microsoft publishes for an Azure service — the committed… | ⚪ |
| `azure.listRegions` | azure.microsoft.com | Returns Azure's datacenter regions — the ARM region name a caller has to pass to every… | ⚪ |
| `azure.listServices` | azure.microsoft.com | Returns the Azure service catalogue derived live from `prices.azure.com`'s own rows —… | 🟢 |
| `azure.listVmSizes` | azure.microsoft.com | Returns Azure's virtual-machine SKUs with the specifications a sizing decision is… | ⚪ |
| `bahn.listDisruptions` | bahn.de | Lists current long-distance (ICE/IC/EC) train disruptions network-wide — cause… | 🟢 |
| `bankmycell.getTradeInQuote` | bankmycell.com | Reads live trade-in offers for a device's bankmycell.com sell page from every merchant… | 🟢 |
| `bankmycell.searchDevices` | bankmycell.com | Searches BankMyCell's own device index by free text (e.g. "iPhone 14") and returns… | 🟢 |
| `barletta.getConfigurator` | barlettapontoonboats.com | Reads one model's whole builder: every option group (Railskin Color, Furniture… | 🟢 |
| `barletta.priceConfiguration` | barlettapontoonboats.com | Prices a specific build (a choice per option group) against getConfigurator's live… | 🟢 |
| `barletta.searchModels` | barlettapontoonboats.com | Lists every current Barletta floorplan from the public "Build Your Pontoon Boat"… | 🟢 |
| `barnesfoundation.getAdmissionCalendar` | visit.barnesfoundation.org | Reads the live open/closed status for every published date (a rolling ~6-month window)… | 🟢 |
| `barnesfoundation.priceAdmission` | visit.barnesfoundation.org | Computes the real ticket total for a set of admission-category quantities… | 🟢 |
| `baublebar.getBaublebarCheckoutLink` | baublebar.com | Resolves a product handle + chosen size/color + (for personalizer products) the… | 🟢 |
| `baublebar.getBaublebarProduct` | baublebar.com | Reads one product by its handle — every size/color variant with its exact price and… | 🟢 |
| `baublebar.listBaublebarCollections` | baublebar.com | The entry door: reads the storefront's own published collection index… | 🟢 |
| `baublebar.listBaublebarProducts` | baublebar.com | Reads a BaubleBar collection's live catalogue as the storefront publishes it — every… | 🟢 |
| `bbc.followPodcast` | bbc.com | Follow a BBC podcast or series for the signed-in reader. | ⚪ |
| `bbc.getArticle` | bbc.com | One BBC article as data: headline, byline, published and updated times, section, topic… | ⚪ |
| `bbc.getCurrentWeather` | bbc.com | The latest observation BBC Weather shows for a location: temperature, wind, humidity… | ⚪ |
| `bbc.getFixtures` | bbc.com | Scores and fixtures for a sport or competition on a date: each match's teams, kick-off… | ⚪ |
| `bbc.getForecast` | bbc.com | The BBC Weather forecast for a location: up to 14 days (high/low, weather type, chance… | ⚪ |
| `bbc.getLivePage` | bbc.com | A BBC live page (rolling coverage) as data: title, summary, whether it is still live… | ⚪ |
| `bbc.getMatch` | bbc.com | One match as BBC Sport shows it: teams, score, status, venue, and — where the sport… | ⚪ |
| `bbc.getPodcast` | bbc.com | One BBC podcast or series: title, description, and its episodes newest first — title… | ⚪ |
| `bbc.getPodcastEpisode` | bbc.com | One podcast episode: title, synopsis, duration, broadcast date, and the playable media… | ⚪ |
| `bbc.getStandings` | bbc.com | A competition's league table: position, team, played, won, drawn, lost, goals/points… | ⚪ |
| `bbc.getTeam` | bbc.com | One team's BBC Sport page: name, competition, its recent results and upcoming… | ⚪ |
| `bbc.getVideo` | bbc.com | One BBC video page as data: title, summary, duration, published time, section, poster… | ⚪ |
| `bbc.getWeatherWarnings` | bbc.com | The weather warnings BBC Weather shows for a location or region: level, type (rain… | ⚪ |
| `bbc.listCompetitions` | bbc.com | The competitions BBC Sport covers for one sport (for football: Premier League… | ⚪ |
| `bbc.listFollowedPodcasts` | bbc.com | The podcasts and series the signed-in reader follows. | ⚪ |
| `bbc.listHeadlines` | bbc.com | The stories a BBC section page shows right now, in the page's own order and grouping… | 🟢 |
| `bbc.listMostRead` | bbc.com | The "Most read" list the BBC shows beside its stories: rank, headline, url and article… | ⚪ |
| `bbc.listNewsletters` | bbc.com | The BBC newsletters a reader can sign up to: name, description, frequency and… | ⚪ |
| `bbc.listPodcasts` | bbc.com | The podcasts and audio series the BBC's audio hub (/audio) lists: title, description… | ⚪ |
| `bbc.listSavedArticles` | bbc.com | The signed-in reader's saved articles: headline, url, article id and when saved. | ⚪ |
| `bbc.listSections` | bbc.com | The BBC's own section list, read off the bbc.com top navigation — Home, News (US &… | 🟢 |
| `bbc.listSports` | bbc.com | The sports BBC Sport covers (football, cricket, rugby union, tennis, formula 1, golf… | ⚪ |
| `bbc.listTopicStories` | bbc.com | The stories on one BBC topic page (/news/topics/<id>) — headline, url, article id… | ⚪ |
| `bbc.listVideos` | bbc.com | The videos the BBC's video hub shows: title, summary, duration, url, video id, section… | ⚪ |
| `bbc.removeSavedArticle` | bbc.com | Remove an article from the signed-in reader's saved list. | ⚪ |
| `bbc.saveArticle` | bbc.com | Save a BBC article to the signed-in reader's saved list (the page's bookmark button).… | ⚪ |
| `bbc.searchArticles` | bbc.com | Search the BBC the way its search box does: headline, summary, url, article id… | ⚪ |
| `bbc.searchWeatherLocations` | bbc.com | Find BBC Weather locations by place name or postcode: name, region, country and the… | ⚪ |
| `bbc.subscribeNewsletter` | bbc.com | Sign the signed-in reader up to a BBC newsletter. | ⚪ |
| `bbc.unfollowPodcast` | bbc.com | Stop following a BBC podcast or series for the signed-in reader. | ⚪ |
| `bbc.unsubscribeNewsletter` | bbc.com | Take the signed-in reader off a BBC newsletter. | ⚪ |
| `bcparkscamping.checkAvailability` | camping.bcparks.ca | Given a campground's resourceLocationId (from searchCampgrounds) and a date range… | 🟢 |
| `bcparkscamping.searchCampgrounds` | camping.bcparks.ca | Given a free-text substring, returns every BC Parks campground (Discover Camping… | 🟢 |
| `beaconfunding.getApplicationFields` | beaconfunding.com | Reads beaconfunding.com's own credit application and returns the fields it declares… | 🟢 |
| `beatthebomb.checkAvailability` | beatthebomb.com | Checks real, live per-date availability for one product type in one city over a list… | 🟢 |
| `beatthebomb.listMissions` | beatthebomb.com | Reads one city's live mission catalog — the same product list the site's own /products… | 🟢 |
| `beatthebomb.priceMission` | beatthebomb.com | Runs the site's own real pricing calculation for a given party size, city, date and… | 🟢 |
| `bellwethercoffee.computeRoiEstimate` | bellwethercoffee.com | Runs Bellwether's own ROI calculator formula — currency, roaster type, weekly… | 🟢 |
| `bellwethercoffee.getCalculatorDefaults` | bellwethercoffee.com | Returns the ROI calculator's own currencies, roaster types, per-currency default input… | 🟢 |
| `beltservice.browseCatalog` | beltservice.com | Browses Beltservice's own belt catalog: filter by product group, category or industry… | 🟢 |
| `beltservice.getBelt` | beltservice.com | Looks up one belt directly by catalog number (its own detail page) and returns its… | 🟢 |
| `benelliusa.findDealers` | benelliusa.com | Runs the site's own "Find A Benelli Dealer" postal-code locator and returns the real… | 🟢 |
| `bennington.search` | benningtonmarine.com | Lists Bennington's pontoon/tritoon model series (S, SX, Q, QX, L, R Bowrider) with… | 🟢 |
| `bestbuy.getProduct` | bestbuy.com | Looks up one product by Best Buy's own numeric SKU and returns its full detail — the… | 🟢 |
| `bestbuy.getStoreAvailability` | bestbuy.com | Whether a specific SKU is in stock at a SPECIFIC physical store (vs.… | ⚪ |
| `bestbuy.search` | bestbuy.com | Runs a Best Buy product search the way bestbuy.com's own search box does and returns… | 🟢 |
| `bhphoto.checkStock` | bhphotovideo.com | Answers whether a specific item is actually gettable right now, rather than merely… | 🟢 |
| `bhphoto.getProduct` | bhphotovideo.com | Reads one product page in full — the identity a search row cannot carry (SKU… | 🟢 |
| `bhphoto.search` | bhphotovideo.com | Searches bhphotovideo.com for a part and returns matching rows cheapest-first… | 🟢 |
| `bigairusa.listLocations` | bigairusa.com | Lists every Big Air Trampoline Park location off the site's own location-picker (name… | 🟢 |
| `bigairusa.listPasses` | bigairusa.com | Lists every ticket/pass group and item at one open location's CenterEdge webstore —… | 🟢 |
| `bigjoeforklifts.estimateRuntimeAndRoi` | bigjoeforklifts.com | Would answer the ROI estimator's 17 questions and return the tool's real computed… | ⚪ |
| `bigjoeforklifts.getRuntimeEstimatorInputs` | bigjoeforklifts.com | Reads Big Joe's own 'Pre-Demo Runtime & ROI Estimator' and returns its real current… | 🟡 |
| `bigjoeforklifts.listForkliftModels` | bigjoeforklifts.com | Reads Big Joe's live /quote page and returns its real current forklift model list (40+… | 🟢 |
| `bigjoeforklifts.prepareQuoteRequest` | bigjoeforklifts.com | Validates the requested model names against Big Joe's real live /quote model list and… | 🟢 |
| `bigrentz.getEquipment` | bigrentz.com | Reads one piece of equipment in full by the slug `search` or `listCategories` returned… | 🟢 |
| `bigrentz.getRentalPricing` | bigrentz.com | Would return live, location- and date-specific rental pricing/availability for one… | ⚪ |
| `bigrentz.listCategories` | bigrentz.com | Lists BigRentz's equipment categories (optionally filtered to children of a parent… | 🟢 |
| `bigrentz.search` | bigrentz.com | Searches BigRentz's equipment catalog by free-text query (e.g. "boom lift", "40 ft… | 🟢 |
| `bigyellow.getQuote` | bigyellow.co.uk | Returns a storage unit quote with pricing based on location, unit size and move-in date. | ⚪ |
| `bing.define` | bing.com | Looks up a word in Bing's own dictionary panel (bing.com/dict/search) and returns its… | 🟢 |
| `bing.findPlace` | bing.com | Looks a place up on Bing Maps the way bing.com/maps does and returns its name… | 🟢 |
| `bing.listSaves` | bing.com | Lists the pages, searches and images the signed-in caller has saved to Bing… | ⚪ |
| `bing.saveResult` | bing.com | Adds a page, search or image to the signed-in caller's Bing Collections — the write… | ⚪ |
| `bing.searchImages` | bing.com | Searches Bing's image index the way bing.com/images/search does and returns each hit's… | 🟡 |
| `bing.searchNews` | bing.com | Searches news coverage the way bing.com/news does and returns the matching stories… | 🟢 |
| `bing.searchShopping` | bing.com | Searches Bing Shopping the way bing.com/shop does and returns each product's title… | 🟢 |
| `bing.searchVideos` | bing.com | Searches Bing's video index the way bing.com/videos/search does and returns each hit's… | 🟢 |
| `bing.searchWeb` | bing.com | Searches the web the way bing.com's own search box does and returns the ten results… | 🟡 |
| `bing.searchWebBrowser` | bing.com | Searches the web by driving a browser to bing.com and waiting for results — same… | 🟢 |
| `bing.translateText` | bing.com | Translates text the way bing.com/translator does and returns the translated string… | 🟢 |
| `bionicpo.getInquiryServiceDetails` | bionicpo.com | Looks one inquiry service up by name or id among the inquiry-services page's service… | 🟡 |
| `bionicpo.listInquiryServices` | bionicpo.com | Lists the inquiry and service categories available on BionicPO's inquiry-services page. | 🟢 |
| `bishops.checkAvailability` | bishops.co | Checks real, live open time slots for one service at one location on one date — the… | 🟢 |
| `bishops.findLocation` | bishops.co | Resolves a slug/neighborhood query to the matching real Bishops location(s) — name… | 🟢 |
| `bishops.listLocations` | bishops.co | Reads the live list of every Bishops Cuts/Color location off the site's own sitemap… | 🟢 |
| `bishops.listServices` | bishops.co | Reads one location's real, live service catalog (name, description, price, duration)… | 🟢 |
| `blackstoneproducts.findNearbyDealers` | blackstoneproducts.com | Runs Blackstone's own real-time Stockist dealer locator (the widget embedded on… | 🟢 |
| `blenderseyewear.getRxConfigurator` | blenderseyewear.com | Reads one Rx frame style's real option tree (Prescription Type: Single… | 🟢 |
| `blenderseyewear.listRxFrameStyles` | blenderseyewear.com | Searches Blenders Eyewear's real prescription (Rx) frame catalog across both the men's… | 🟢 |
| `blenderseyewear.priceRxConfiguration` | blenderseyewear.com | Resolves one exact Rx build (a frame handle + a chosen prescription type + lens color… | 🟢 |
| `bluehaven.checkPoolSiteFeasibility` | bluehaven.com | Runs a US street address through Blue Haven's own site-planning tool the way their… | 🟢 |
| `bluehaven.getPoolPriceEstimate` | bluehaven.com | Prices one of Blue Haven's own pool designs at a specific sited address, the way the… | ⚪ |
| `bluehaven.listPoolDesigns` | bluehaven.com | Reads Blue Haven's own live inground pool design catalog off their site-planning… | 🟢 |
| `blueribbonhomewarranty_com.getPage` | blueribbonhomewarranty.com | Reads one Blue Ribbon Home Warranty page (found via search) and returns its title… | 🟢 |
| `blueribbonhomewarranty_com.search` | blueribbonhomewarranty.com | Finds Blue Ribbon Home Warranty's own public pages — the apply/quote flows, the claim… | 🟢 |
| `bluesignal.applyToJob` | bluesignal.com | Would submit a job application (name/email/phone/resume) to the site's own per-job… | ⚪ |
| `bluesignal.getJob` | bluesignal.com | Gets one job's full posting (description + the site's own apply-form URL) by id or url… | 🟡 |
| `bluesignal.searchJobs` | bluesignal.com | Searches Blue Signal's 270+ live job openings (bluesignal.com/search-jobs, backed by a… | 🟢 |
| `bluesky.addToList` | bsky.app | Add a person to one of the caller's lists, or remove them. | ⚪ |
| `bluesky.blockUser` | bsky.app | Block a person as the caller, or unblock them. | ⚪ |
| `bluesky.bookmarkPost` | bsky.app | Save a post to the caller's Bookmarks, or remove it. | ⚪ |
| `bluesky.createList` | bsky.app | Create a curation or moderation list owned by the caller. | ⚪ |
| `bluesky.createPost` | bsky.app | Publish a post as the caller: text with links and mentions resolved into facets… | ⚪ |
| `bluesky.deletePost` | bsky.app | Delete one of the caller's own posts. | ⚪ |
| `bluesky.followUser` | bsky.app | Follow a person as the caller, or unfollow them. | ⚪ |
| `bluesky.getConversation` | bsky.app | The messages in one of the caller's DM conversations, page by page, with a finder from… | ⚪ |
| `bluesky.getFeed` | bsky.app | Read a custom feed's posts (Discover, What's Hot, any creator's feed) by URL or at://… | ⚪ |
| `bluesky.getFeedInfo` | bsky.app | One custom feed's details: name, creator, description, avatar, like count and whether… | ⚪ |
| `bluesky.getFollowers` | bsky.app | Who follows a person, page by page. | ⚪ |
| `bluesky.getFollows` | bsky.app | Who a person follows, page by page. | ⚪ |
| `bluesky.getKnownFollowers` | bsky.app | Which of the caller's own follows also follow a given person — the 'Followed by' line… | ⚪ |
| `bluesky.getLabelers` | bsky.app | A moderation service's (labeler's) details and the labels it applies. | ⚪ |
| `bluesky.getList` | bsky.app | A list's details and members, page by page. | ⚪ |
| `bluesky.getListFeed` | bsky.app | The posts from everyone on a curation list, as the list's own feed tab shows them. | ⚪ |
| `bluesky.getMe` | bsky.app | Who the signed-in caller is: their DID, handle, email-confirmed flag and PDS host. | ⚪ |
| `bluesky.getMyLikes` | bsky.app | The posts the caller has liked. | ⚪ |
| `bluesky.getPost` | bsky.app | One or more posts by URL (bsky.app/profile/<handle>/post/<rkey>) or at:// URI: text… | ⚪ |
| `bluesky.getPostLikes` | bsky.app | Who liked a post, page by page. | ⚪ |
| `bluesky.getPostQuotes` | bsky.app | The posts that quote a given post, page by page. | ⚪ |
| `bluesky.getPostReposts` | bsky.app | Who reposted a post, page by page. | ⚪ |
| `bluesky.getProfile` | bsky.app | One person's profile: display name, handle, bio, avatar, banner… | ⚪ |
| `bluesky.getRelationships` | bsky.app | Whether one account follows, or is followed by, each of a list of others. | ⚪ |
| `bluesky.getStarterPack` | bsky.app | One starter pack: its creator, description, the accounts and feeds it bundles, and how… | ⚪ |
| `bluesky.getSuggestedFeeds` | bsky.app | Bluesky's own suggested custom feeds. | ⚪ |
| `bluesky.getSuggestedFollows` | bsky.app | Accounts Bluesky suggests alongside a given person — its 'similar accounts' list on a… | ⚪ |
| `bluesky.getSuggestedUsers` | bsky.app | Bluesky's own suggested accounts to follow, optionally by interest category. | ⚪ |
| `bluesky.getThread` | bsky.app | A post with its whole conversation: the parents above it and the reply tree below it… | ⚪ |
| `bluesky.getTimeline` | bsky.app | The caller's home Following feed, newest first, page by page. | ⚪ |
| `bluesky.getTrendingTopics` | bsky.app | What is trending on Bluesky right now: the topics and the links to their search or… | ⚪ |
| `bluesky.getTrends` | bsky.app | The richer trending list the Explore page shows: each trend's post count, status… | ⚪ |
| `bluesky.getUserFeeds` | bsky.app | The custom feeds a person has made. | ⚪ |
| `bluesky.getUserLists` | bsky.app | The lists (curation and moderation lists) a person has made. | ⚪ |
| `bluesky.getUserPosts` | bsky.app | A person's posts, newest first, as their profile tabs show them — posts only, posts… | ⚪ |
| `bluesky.getUserStarterPacks` | bsky.app | The starter packs a person has made. | ⚪ |
| `bluesky.likePost` | bsky.app | Like a post as the caller, or undo the like. | ⚪ |
| `bluesky.listBlockedUsers` | bsky.app | The accounts the caller has blocked. | ⚪ |
| `bluesky.listBookmarks` | bsky.app | The posts the caller has saved to Bookmarks. | ⚪ |
| `bluesky.listConversations` | bsky.app | The caller's direct-message conversations, most recent first, with the last message… | ⚪ |
| `bluesky.listMutedUsers` | bsky.app | The accounts the caller has muted. | ⚪ |
| `bluesky.listNotifications` | bsky.app | The caller's notifications — likes, reposts, follows, mentions, replies, quotes — with… | ⚪ |
| `bluesky.markNotificationsRead` | bsky.app | Mark the caller's notifications as seen up to now. | ⚪ |
| `bluesky.muteUser` | bsky.app | Mute a person for the caller, or unmute them. | ⚪ |
| `bluesky.quotePost` | bsky.app | Quote-post an existing post with the caller's own text. | ⚪ |
| `bluesky.replyToPost` | bsky.app | Reply to a post as the caller, threaded under it. | ⚪ |
| `bluesky.repost` | bsky.app | Repost a post as the caller, or undo the repost. | ⚪ |
| `bluesky.resolveHandle` | bsky.app | Turn a Bluesky handle (alice.bsky.social, or a custom domain handle) into its… | ⚪ |
| `bluesky.saveFeed` | bsky.app | Save or pin a custom feed to the caller's feed list, or remove it. | ⚪ |
| `bluesky.searchFeeds` | bsky.app | Find custom feeds by words (e.g. 'science', 'art'), the way Explore's feed search… | ⚪ |
| `bluesky.searchPosts` | bsky.app | Search all public posts by words, with the Search tab's Top/Latest sort and its… | ⚪ |
| `bluesky.searchStarterPacks` | bsky.app | Find starter packs by words. | ⚪ |
| `bluesky.searchUsers` | bsky.app | Search people by name, handle or bio words, the way the Search tab's People list does… | ⚪ |
| `bluesky.sendMessage` | bsky.app | Send a direct message as the caller to a person who accepts DMs from them. | ⚪ |
| `bluesky.setAvatar` | bsky.app | Change the caller's profile picture (or banner) from an image. | ⚪ |
| `bluesky.suggestUsers` | bsky.app | Handle autocomplete: the few accounts that best match a partial name, as the compose… | ⚪ |
| `bluesky.updateProfile` | bsky.app | Change the caller's display name and bio. | ⚪ |
| `bmwusa.buildVehicle` | bmwusa.com | Runs BMW's own Build Your Own configurator for a model code (read off /all-bmws.html's… | 🟢 |
| `bmwusa.checkRecalls` | bmwusa.com | Checks open safety and emissions recalls for a specific BMW by VIN — each campaign's… | ⚪ |
| `bmwusa.estimatePayment` | bmwusa.com | Estimates a monthly lease or finance payment for a given BMW at a given price, term… | ⚪ |
| `bmwusa.findDealers` | bmwusa.com | Finds BMW dealerships near a ZIP code or city — each dealer's name, address, phone… | ⚪ |
| `bmwusa.getModel` | bmwusa.com | Reads one BMW model's body-style page — its trims, each trim's starting MSRP, engine… | 🟢 |
| `bmwusa.getOwnersManual` | bmwusa.com | Retrieves the correct owner's manual and vehicle documentation for a specific BMW by… | ⚪ |
| `bmwusa.getVehicle` | bmwusa.com | Reads one specific new BMW by VIN — its full factory option list with each option's… | ⚪ |
| `bmwusa.listAccessories` | bmwusa.com | Lists genuine BMW parts and accessories that fit a specific model or VIN — roof racks… | ⚪ |
| `bmwusa.listModels` | bmwusa.com | Lists BMW's current US lineup — every model BMW sells, with its bmwusa.com… | 🟢 |
| `bmwusa.listOffers` | bmwusa.com | Lists BMW's current US lease and finance offers for a ZIP code (resolved server-side… | 🟢 |
| `bmwusa.searchCertifiedPreOwned` | bmwusa.com | Searches BMW's live Certified Pre-Owned inventory near a ZIP code, server-side scoped… | 🟢 |
| `bmwusa.searchInventory` | bmwusa.com | Searches live VIN-level new-BMW dealer inventory near a ZIP code, filtered by model… | ⚪ |
| `bodacc.search` | bodacc.fr | Searches BODACC insolvency notices (redressement judiciaire, liquidation judiciaire… | 🟡 |
| `boglewinery.checkAvailability` | boglewinery.com | Checks which upcoming dates and times Tock currently shows as open for one Bogle… | 🟢 |
| `boglewinery.listExperiences` | boglewinery.com | Reads Bogle's real, live tasting/reservation experience catalog off Tock (the booking… | 🟢 |
| `bollandbranch.getBedDesignerFlow` | bollandbranch.com | Reads the Virtual Bed Designer's own configurator definition — the ordered categories… | 🟢 |
| `bollandbranch.getCategoryOptions` | bollandbranch.com | Lists the real, currently-sellable products for one Virtual Bed Designer category… | 🟢 |
| `bollandbranch.getSwatchDetails` | bollandbranch.com | Resolves color/fabric swatch names (as offered by getCategoryOptions) to their hex… | 🟢 |
| `bollandbranch.renderBedPreview` | bollandbranch.com | Would render the Designer's own live combination preview (the stacked-bed visual for a… | ⚪ |
| `booking_com.addToWishlist` | booking.com | Add a property to the caller's wishlist. | ⚪ |
| `booking_com.autocompleteDestination` | booking.com | Autocomplete destination search with dest_id, dest_type and name. | ⚪ |
| `booking_com.checkPrice` | booking.com | Check price and availability for a property on specific dates. | ⚪ |
| `booking_com.getAccountProfile` | booking.com | Get the caller's account profile information. | ⚪ |
| `booking_com.getBooking` | booking.com | Get details of one past or upcoming booking. | ⚪ |
| `booking_com.getProperty` | booking.com | Fetch detailed property information including amenities, photos and reviews. | ⚪ |
| `booking_com.getReviewBreakdown` | booking.com | Get overall review score and category breakdown for a property. | ⚪ |
| `booking_com.listAvailability` | booking.com | List available properties for a given search with availability status and pricing. | ⚪ |
| `booking_com.listBookings` | booking.com | List the caller's past and upcoming bookings. | ⚪ |
| `booking_com.listFilterOptions` | booking.com | List available filter options (amenities, price range, ratings) for a search. | ⚪ |
| `booking_com.listMyReviews` | booking.com | List reviews the caller has written. | ⚪ |
| `booking_com.listPropertyPhotos` | booking.com | List photos and galleries for a property. | ⚪ |
| `booking_com.listPropertyReviews` | booking.com | List guest reviews for a property. | ⚪ |
| `booking_com.listSavedPaymentMethods` | booking.com | List payment methods saved to the caller's account. | ⚪ |
| `booking_com.listWishlist` | booking.com | List properties the caller has saved to their wishlist. | ⚪ |
| `booking_com.removeFromWishlist` | booking.com | Remove a property from the caller's wishlist. | ⚪ |
| `booking_com.search` | booking.com | Search for accommodations by destination, dates and parameters; returns property… | ⚪ |
| `booking_com.writeReview` | booking.com | Write a review for a property the caller has booked. | ⚪ |
| `borsheims.configureRing` | borsheims.com | Composes a setting product page and a diamond/center-stone product page into a priced… | 🟢 |
| `borsheims.getProduct` | borsheims.com | Reads one product's real, live price straight off its product page's own embedded data… | 🟢 |
| `borsheims.searchProducts` | borsheims.com | Turns a free-text query into real borsheims.com product page URLs by matching every… | 🟢 |
| `boxlunch.search` | boxlunch.com | Searches boxlunch.com's own storefront for a keyword and returns the real, priced… | 🟢 |
| `boydsleep.calibrateSixZoneSupportNumber` | boydsleep.com | Runs Boyd's own '6-Zone Smart Support Number' calibration for the 6-zone Nautica Home… | 🟢 |
| `boydsleep.calibrateSupportNumber` | boydsleep.com | Runs Boyd's own '2-Zone Smart Support Number' calibration — sleep position, gender… | 🟢 |
| `brius.findProviders` | bravabraces.com | Runs Brava's own find-a-provider locator search for a zip code (or free-text location)… | 🟢 |
| `brixton.getBrixtonCheckoutLink` | brixton.com | Resolves a product handle + chosen variant (size and/or color) to a real, purchasable… | 🟢 |
| `brixton.getBrixtonProduct` | brixton.com | Reads one product by its handle — every size/color variant, its exact price and… | 🟢 |
| `brixton.listBrixtonProducts` | brixton.com | Reads the live Brixton catalogue as the storefront publishes it — every hat, tee… | 🟢 |
| `browser_use.cancelRun` | browser-use.com | Cancels an in-flight agent run via POST /api/v4/runs/{id}/cancel; idempotent on a… | 🟢 |
| `browser_use.createRun` | browser-use.com | Starts a Browser Use Cloud agent run on a natural-language task (optionally continuing… | 🟢 |
| `browser_use.findSessionBrowser` | browser-use.com | Finds the cloud browser attached to an agent session via GET… | 🟢 |
| `browser_use.getBrowser` | browser-use.com | Reads one cloud browser via GET /api/v4/browsers/{id}: status, live view url, browser… | 🟢 |
| `browser_use.getRun` | browser-use.com | Reads one agent run via GET /api/v4/runs/{id}: status, final result or error, token… | 🟢 |
| `browser_use.getRunStatus` | browser-use.com | The cheap status poll for one agent run, GET /api/v4/runs/{id}/status. | 🟢 |
| `browser_use.getSession` | browser-use.com | Reads an agent session via GET /api/v4/sessions/{id}, including the id of its latest… | 🟢 |
| `browser_use.listRunEvents` | browser-use.com | Reads a run's step-by-step event stream after a cursor via GET… | 🟢 |
| `browser_use.listSessionRuns` | browser-use.com | Lists every agent run in a session via GET /api/v4/runs?sessionId=, each with its… | 🟢 |
| `browser_use.queueMessage` | browser-use.com | Sends a follow-up instruction into an agent session via POST… | 🟢 |
| `browser_use.stopBrowser` | browser-use.com | Stops a cloud browser via PATCH /api/v4/browsers/{id} {action: stop}, which cannot be… | 🟢 |
| `buacement.getPriceList` | buacement.com | Would return current cement price list from BUA Cement with prices per bag size and… | ⚪ |
| `builder_strucsure_com.getNewConstructionRegistrationFields` | builder.strucsure.com | Returns the foundation-type, home-type and warranty-term (enrollment-type) choices for… | 🟢 |
| `builder_strucsure_com.listRegistrationStates` | builder.strucsure.com | Lists the states StrucSure Home Warranty's builder registration portal recognizes, and… | 🟢 |
| `buildingengines.getAccessRequestStatus` | buildingengines.com | Retrieves the status of after-hours vendor and cleaning-crew access requests from the… | 🟢 |
| `bulletproof.findStores` | bulletproof.com | Finds real physical retailers near a US zip code that carry Bulletproof products… | 🟢 |
| `bungalow.getListing` | bungalow.com | Returns one listing's full detail — every room with its own rent and availability… | 🟢 |
| `bungalow.listMarkets` | bungalow.com | Lists every market Bungalow currently operates in — city, region and country, plus the… | 🟢 |
| `bungalow.searchListings` | bungalow.com | Searches Bungalow's live, priced room and whole-home rental inventory in one market —… | 🟢 |
| `bykoket.addToCart` | bykoket.com | Hands back the shopper's own KOKET product page — the exact Add to cart button for… | 🟢 |
| `bykoket.getProduct` | bykoket.com | Reads one KOKET product's live page — price (list and current, since KOKET runs… | 🟢 |
| `bykoket.searchProducts` | bykoket.com | Searches KOKET's live public catalog (furniture, lighting, textiles) and returns each… | 🟢 |
| `byltbasics.buildPackHandoff` | byltbasics.com | Configures one bundle kit — validates the chosen size and each color against… | 🟢 |
| `byltbasics.getPackOptions` | byltbasics.com | Reads the real size and color choices for one bundle kit (a handle from… | 🟢 |
| `byltbasics.listBundlePacks` | byltbasics.com | Lists BYLT Basics' 'Custom N Pack' bundle kits — each its own product with a single… | 🟢 |
| `cabinsforyou.getCabinDetail` | cabinsforyou.com | Reads one cabin's own listing page — bedrooms/bathrooms/sleeps/parking, pet policy… | 🟢 |
| `cabinsforyou.search` | cabinsforyou.com | Runs Cabins For You's own homepage cabin-availability search (Check In / Check Out /… | 🟢 |
| `cal_com.findProfiles` | cal.com | Finds a person's own Cal.com page from their full name and, optionally, their company… | 🟢 |
| `cal_com.getAvailability` | cal.com | Returns the real, currently-open time slots for one Cal.com event type — accepts a… | 🟢 |
| `cal_com.getBookingForm` | cal.com | Reads what a Cal.com booking page will ask before anyone books — the event's title… | 🟢 |
| `cal_com.getEventTypes` | cal.com | Lists every event type a Cal.com username currently publishes — the entry point. | 🟢 |
| `calendly.addDateOverride` | calendly.com | Sets different hours, or no hours at all, for specific dates on the caller's… | ⚪ |
| `calendly.bookMeeting` | calendly.com | Books a slot on a Calendly event the way an invitee does on the booking page — the… | ⚪ |
| `calendly.cancelBooking` | calendly.com | Cancels a booking the caller made, from the cancel link Calendly emailed them… | ⚪ |
| `calendly.cancelScheduledEvent` | calendly.com | Cancels a meeting someone booked with the caller, with a reason the invitee is told. | ⚪ |
| `calendly.createEventType` | calendly.com | Creates a new event type on the caller's own Calendly — name, duration, location… | ⚪ |
| `calendly.createMeetingPoll` | calendly.com | Creates a meeting poll — proposes several times, returns a link to share, and lets… | ⚪ |
| `calendly.createOneOffMeeting` | calendly.com | Creates a one-off meeting link — a specific set of offered times for one conversation… | ⚪ |
| `calendly.createSingleUseLink` | calendly.com | Makes a single-use booking link for one of the caller's event types — a link that… | ⚪ |
| `calendly.deleteEventType` | calendly.com | Deletes one of the caller's own event types. | ⚪ |
| `calendly.findProfiles` | calendly.com | Finds a person's own Calendly page from their full name and, optionally, their company… | 🟢 |
| `calendly.getAvailability` | calendly.com | Returns the real, currently-open time slots for one Calendly event type over the next… | 🟢 |
| `calendly.getBooking` | calendly.com | Reads one booking from the link an invitee was sent — the confirmation page, the… | ⚪ |
| `calendly.getBookingForm` | calendly.com | Reads what a Calendly booking page will ask before anyone books — the owner's name… | 🟢 |
| `calendly.getEventTypes` | calendly.com | Lists every event type a Calendly profile currently offers — the entry point. | 🟢 |
| `calendly.getLandingPage` | calendly.com | Reads a Calendly team or organization page — the page that lists several people's or… | ⚪ |
| `calendly.getMyAccount` | calendly.com | The signed-in caller's own Calendly account — name, email, scheduling-page url and… | ⚪ |
| `calendly.getRoutingForm` | calendly.com | Reads a Calendly routing form — the questions an organization asks before it decides… | ⚪ |
| `calendly.getScheduledEvent` | calendly.com | One meeting booked with the caller in full — every invitee, their answers to the… | ⚪ |
| `calendly.inviteOrganizationMember` | calendly.com | Invites someone by email to the caller's Calendly organization. | ⚪ |
| `calendly.listAvailabilitySchedules` | calendly.com | The caller's working-hours schedules — the weekly hours they take meetings and any… | ⚪ |
| `calendly.listConnectedCalendars` | calendly.com | The calendars connected to the caller's Calendly — which are checked for conflicts and… | ⚪ |
| `calendly.listContacts` | calendly.com | The people in the caller's Calendly contacts — everyone who has booked with them, with… | ⚪ |
| `calendly.listMyEventTypes` | calendly.com | Every event type the signed-in caller hosts, including secret and turned-off ones that… | ⚪ |
| `calendly.listOrganizationMembers` | calendly.com | The people in the caller's Calendly organization, with their role and scheduling url. | ⚪ |
| `calendly.listPackages` | calendly.com | Lists the paid session packages a Calendly profile sells (several meetings bought… | ⚪ |
| `calendly.listRoutingForms` | calendly.com | The routing forms the caller's organization owns. | ⚪ |
| `calendly.listRoutingFormSubmissions` | calendly.com | The answers people have submitted to one of the caller's routing forms, and where each… | ⚪ |
| `calendly.listScheduledEvents` | calendly.com | The meetings booked with the signed-in caller — upcoming, past or a date range — with… | ⚪ |
| `calendly.listWorkflows` | calendly.com | The caller's workflows — the automatic reminder and follow-up emails and texts… | ⚪ |
| `calendly.markNoShow` | calendly.com | Marks (or un-marks) an invitee of one of the caller's past meetings as a no-show. | ⚪ |
| `calendly.rescheduleBooking` | calendly.com | Moves a booking the caller made to another open time, from the reschedule link… | ⚪ |
| `calendly.setEventTypeActive` | calendly.com | Turns one of the caller's event types on or off, so it stops or starts taking bookings… | ⚪ |
| `calendly.setProfilePicture` | calendly.com | Changes the caller's Calendly profile picture. | ⚪ |
| `calendly.submitRoutingForm` | calendly.com | Answers a Calendly routing form and returns where it sends you — the booking page… | ⚪ |
| `calendly.updateAvailabilitySchedule` | calendly.com | Changes the caller's weekly working hours on one of their availability schedules. | ⚪ |
| `calendly.updateEventType` | calendly.com | Edits one of the caller's event types — name, duration, description, location, booking… | ⚪ |
| `calendly.updateProfile` | calendly.com | Edits the caller's own Calendly profile — display name, welcome message, timezone and… | ⚪ |
| `calendly.voteOnMeetingPoll` | calendly.com | Votes on a Calendly meeting poll — picks which of the proposed times the caller can… | ⚪ |
| `caliberhealth.getJob` | caliberhealth.com | Reads one job's own detail page — specialty, location, facility type, schedule… | 🟢 |
| `caliberhealth.search` | caliberhealth.com | Runs Caliber Healthcare Solutions' own live job-board search (/healthcare-jobs) and… | 🟢 |
| `califloors.getProduct` | califloors.com | Reads one product's own detail page — its real current price, live stock status… | 🟢 |
| `califloors.listCategories` | califloors.com | Lists CALI's own flooring and decking category tree — Vinyl, Hardwood, Laminate… | 🟢 |
| `califloors.searchProducts` | califloors.com | Browses one category (from `listCategories`, e.g. the free-sample category or a… | 🟢 |
| `camelcamelcamel.getPriceHistory` | camelcamelcamel.com | Reads camelcamelcamel's independently-tracked Amazon price history for one ASIN — the… | 🟢 |
| `camelcamelcamel.search` | camelcamelcamel.com | Runs camelcamelcamel's own Amazon-product search and returns each hit's ASIN, title… | 🟢 |
| `campspot.findCampgrounds` | campspot.com | Given a free-text region (a US state, a Canadian province, or one of Campspot's own… | 🟢 |
| `campspot.getCampground` | campspot.com | Given a campspot.com/park/<slug> url (from findCampgrounds), returns that campground's… | 🟢 |
| `cancer.findCancerCenters` | cancer.gov | Returns the NCI-Designated Cancer Centers — the institutions NCI itself certifies as… | 🟢 |
| `cancer.getCancerInfoSummary` | cancer.gov | Returns NCI's own PDQ information summary for one cancer type or topic — what the… | 🟢 |
| `cancer.getCancerStatistics` | cancer.gov | Returns NCI's published statistics for a cancer type — new cases and deaths per year… | ⚪ |
| `cancer.getClinicalTrial` | cancer.gov | Returns the full detail for one cancer clinical trial by its NCT identifier — the… | ⚪ |
| `cancer.getDrugInfo` | cancer.gov | Returns NCI's drug-information page for one cancer drug — what it is used for and… | ⚪ |
| `cancer.listCancerDrugs` | cancer.gov | Returns NCI's A-to-Z list of drugs approved for or used in cancer treatment — each… | ⚪ |
| `cancer.listCancerTypes` | cancer.gov | Returns NCI's own A-to-Z list of cancer types — the common name of each cancer, its… | ⚪ |
| `cancer.lookupCancerTerm` | cancer.gov | Looks up a term in NCI's Dictionary of Cancer Terms and returns its plain-language… | ⚪ |
| `cancer.lookupGeneticsTerm` | cancer.gov | Looks up a term in NCI's Dictionary of Genetics Terms and returns its definition and… | ⚪ |
| `cancer.searchClinicalTrials` | cancer.gov | Searches NCI's register of cancer clinical trials for the ones somebody could actually… | ⚪ |
| `cancer.searchFundingOpportunities` | cancer.gov | Searches NCI's research funding opportunities — the grants, fellowships and training… | ⚪ |
| `cancer.searchNews` | cancer.gov | Returns NCI's own news — press releases, research findings written up for a general… | ⚪ |
| `cancer.searchPublications` | cancer.gov | Searches NCI's publications catalogue — the patient-education booklets, fact sheets… | ⚪ |
| `capitalbrands.getBlenderRecommendation` | nutribullet.com | Runs the site's own quiz-scoring logic (its `get_result_quiz` admin-ajax handler) for… | 🟢 |
| `capitalbrands.listQuizQuestions` | nutribullet.com | Reads NutriBullet's own "Which nutribullet is Best for Me?" product-recommendation… | 🟢 |
| `caraway.getCarawayProduct` | carawayhome.com | Reads one product by its handle — every variant, its exact price, the image the… | 🟢 |
| `caraway.listCarawayProducts` | carawayhome.com | Reads the live Caraway catalogue as Caraway publishes it — every ceramic cookware… | 🟢 |
| `caraway.runCarawayQuiz` | carawayhome.com | Routes a quiz's buyer-fit answers to a Caraway archetype and resolves the Recommended… | 🟢 |
| `cardiff.getApplication` | www.cardiff.gov.uk | Retrieves the full details of a single planning application by reference, including… | 🟢 |
| `cardiff.search` | www.cardiff.gov.uk | Searches the Cardiff planning register by reference, address, or keywords. | 🟢 |
| `carepatrol.findLocalAdvisor` | carepatrol.com | Runs the site's own zip/state locator at carepatrol.com/locations/ — given a US ZIP… | 🟢 |
| `carlsgolfland.addToCart` | carlsgolfland.com | Hands the shopper the entry-point link for a priced configuration plus the exact… | 🟢 |
| `carlsgolfland.checkout` | carlsgolfland.com | Would place a priced configuration into Carl's Golfland's cart and return a checkout… | ⚪ |
| `carlsgolfland.getProduct` | carlsgolfland.com | Reads one product's full configurable-option set (e.g. Hand, Driver Loft, Shaft) with… | 🟢 |
| `carlsgolfland.priceConfiguration` | carlsgolfland.com | Resolves a specific configuration (a choice per option group, e.g. { Hand: "Right"… | 🟢 |
| `carlsgolfland.searchProducts` | carlsgolfland.com | Searches Carl's Golfland's golf-equipment catalog by free text and returns each… | 🟢 |
| `carmelrealtycompany.getListing` | carmelrealtycompany.com | Fetches one listing detail page by slug and returns address, sold/active status… | 🟢 |
| `carmelrealtycompany.searchListings` | carmelrealtycompany.com | Runs one of Carmel Realty Company's own regional listing-search pages and returns… | 🟢 |
| `carolefabrics.search` | carolenet.com (Carole Fabrics' own CaroleNet trade catalog) | Runs a keyword search against CaroleNet's live fabric or trim catalog and returns the… | 🟢 |
| `carpetlandusa.getProduct` | carpetlandusa.net | One product's own catalog page: style, color, material, coverage per carton, and —… | 🟢 |
| `carpetlandusa.listCategories` | carpetlandusa.net | The site's own product-catalog taxonomy (Carpet, Waterproof/LVP, Hardwood, Tile, …)… | 🟢 |
| `carpetlandusa.searchProducts` | carpetlandusa.net | The first page (up to 100) of one category's live catalog listing, optionally filtered… | 🟢 |
| `cars.compareVehicles` | cars.com | Runs Cars.com's own side-by-side comparison for up to four year/make/model picks and… | ⚪ |
| `cars.getConsumerReviews` | cars.com | Reads what owners say about one year/make/model on Cars.com: the aggregate score and… | ⚪ |
| `cars.getDealer` | cars.com | Reads one dealership's Cars.com page: legal and display name, address and phone… | ⚪ |
| `cars.getExpertReview` | cars.com | Reads the Cars.com editorial review of one year/make/model — the reviewer's verdict… | ⚪ |
| `cars.getListing` | cars.com | Reads one for-sale vehicle listing in full from its own detail page: VIN, asking price… | 🟢 |
| `cars.getModelResearch` | cars.com | Reads Cars.com's research overview for one year/make/model: MSRP or price range, the… | 🟢 |
| `cars.getRecalls` | cars.com | Looks up open safety recalls for a specific vehicle on Cars.com's recall surface — by… | ⚪ |
| `cars.getTrimSpecs` | cars.com | Reads the full specification table for one year/make/model broken out BY TRIM: engine… | ⚪ |
| `cars.getVehicleValue` | cars.com | Gets Cars.com's own valuation for a car the caller already owns — supply a VIN, a ZIP… | 🟡 |
| `cars.search` | cars.com | Searches Cars.com's live for-sale inventory the way its own shopping results page does… | 🟢 |
| `cars.searchDealers` | cars.com | Finds the car dealerships Cars.com lists near a ZIP — name, full address and distance… | ⚪ |
| `cartebtp.verifyCard` | cartebtp.fr | Verifies a French construction worker card (Carte BTP) from the hash its QR code… | 🟢 |
| `carusohomes.assembleTourRequest` | carusohomes.com | Validates a caller's tour request against a community's live form schema and maps it… | 🟢 |
| `carusohomes.getTourAppointmentSchema` | carusohomes.com | Reads one community page's own 'Schedule a Tour' form — every field, its… | 🟢 |
| `carusohomes.searchCommunities` | carusohomes.com | Reads a Caruso Homes market listing page and returns every live community in it —… | 🟢 |
| `carusohomes.searchFloorPlans` | carusohomes.com | Reads a Caruso Homes market's floor-plan listing (community-attached or… | 🟢 |
| `casadragones.addToCart` | casadragones.com | Would add a real item to the embedded checkout widget's cart (the ReserveBar-branded… | ⚪ |
| `casadragones.findNearbyRetailers` | casadragones.com | Runs Casa Dragones' own real-time store locator (StoreRocket) for a US ZIP and returns… | 🟢 |
| `casadragones.getProduct` | casadragones.com | Reads one product's real title, real price and real description straight off its live… | 🟢 |
| `casadragones.listProducts` | casadragones.com | Lists Casa Dragones' real sipping-tequila catalog off their own product listing page… | 🟢 |
| `cascadiaseniorliving_com.getSitePage` | cascadiaseniorliving.com | Reads one Cascadia Senior Living page (by its url from listSitePages, or by its slug)… | 🟢 |
| `cascadiaseniorliving_com.listSitePages` | cascadiaseniorliving.com | Lists every page Cascadia Senior Living's own site publishes — title, url, slug and… | 🟢 |
| `cbhhomes.assembleInquiry` | cbhhomes.com | Validates a caller's inquiry against the form's live schema and maps it onto the… | 🟢 |
| `cbhhomes.getInquiryFormSchema` | cbhhomes.com | Reads the site's own live 'get in touch about a home' Gravity Forms inquiry form… | 🟢 |
| `cbhhomes.searchListings` | cbhhomes.com | Filters CBH Homes' own live home-search endpoint by city, price, beds and baths and… | 🟢 |
| `census_api.householdIncome` | api.census.gov | Returns median household income for a US Census tract, identified by ZIP code or… | 🟢 |
| `cftc.searchRules` | cftc.gov | Searches the CFTC's Designated Contract Market rule filings register —… | 🟢 |
| `champxpress.getPlanQuote` | champxpress.com | Runs the site's own state → location price computation for one location (matched by… | 🟢 |
| `champxpress.listLocations` | champxpress.com | Lists every wash location currently enrolled in Champion Xpress's "25 for Life" MVP… | 🟢 |
| `chantecaille.getFoundationQuizTaxonomy` | chantecaille.com | Reads Chantecaille's real, live Foundation Shade Match Quiz question and answer… | 🟢 |
| `chantecaille.matchFoundation` | chantecaille.com | Chantecaille's own Foundation Shade Match Quiz, run for real: posts the caller's… | 🟢 |
| `chappellet.checkShippingEligibility` | chappellet.com | Checks whether Chappellet's own storefront can ship wine to a US state right now, off… | 🟢 |
| `chappellet.getWine` | chappellet.com | Reads one wine by its slug — vintage, varietal blend, tasting notes, live price and… | 🟢 |
| `chappellet.listWines` | chappellet.com | Reads Chappellet's live public wine shop as the storefront publishes it — every… | 🟢 |
| `charterhomes.getScheduleVisitOptions` | charterhomes.com | Reads Charter's live schedule-a-visit page and returns every bookable neighborhood… | 🟢 |
| `charterhomes.searchHomes` | charterhomes.com | Searches Charter Homes & Neighborhoods' live for-sale home inventory by… | 🟢 |
| `cheapflights.getBookingOptions` | cheapflights.com | For one result, reads who actually sells the fare and at what price — the provider… | 🟢 |
| `cheapflights.search` | cheapflights.com | Runs the itinerary search on cheapflights.com and returns its result rows… | 🟢 |
| `cheapflights.searchCars` | cheapflights.com | Runs the car-hire search on cheapflights.com and returns priced vehicles for a pickup… | 🟡 |
| `cheapflights.searchHotels` | cheapflights.com | Runs the stays search on cheapflights.com — the site's own second vertical — and… | 🟢 |
| `chesmar.searchQuickMoveInHomes` | chesmar.com | Runs Chesmar Homes' quick-move-in home search against the site's own live inventory… | 🟢 |
| `chipotle.getBowlBuilder` | chipotle.com | Reads chipotle.com's own universal menu rules and returns every burrito-bowl protein… | 🟢 |
| `chriscraft.getConfigurator` | chriscraft.com | Reads one model+boat-type's whole builder off build.chriscraft.com: every option group… | 🟢 |
| `chriscraft.priceConfiguration` | chriscraft.com | Prices a specific build (a choice, or choices, per option group) against… | 🟢 |
| `chriscraft.searchModels` | chriscraft.com | Lists every current Chris-Craft model reachable from the public "Build Your Own"… | 🟢 |
| `christianbrothersauto.checkAppointmentAvailability` | cbac.com | Checks real, currently-open appointment slots at one Christian Brothers Automotive… | 🟢 |
| `christianbrothersauto.getShopDetails` | cbac.com | Resolves a Christian Brothers Automotive shop — by its scheduler slug (e.g.… | 🟢 |
| `christydawn.search` | christydawn.com | Searches the Christy Dawn catalog for clothing and returns matching product rows with… | 🟢 |
| `classichome.addToCart` | classichome.com | Resolves one exact fabric/leather choice to Classic Home's own real price… | 🟢 |
| `classichome.getProduct` | classichome.com | Reads one product's real live fabric/leather picker: every real color/material choice… | 🟢 |
| `classichome.searchProducts` | classichome.com | Searches Classic Home's real Made-to-Order catalog (sofas, chairs, ottomans) via the… | 🟢 |
| `classicrockfab.checkAvailability` | classicrockfab.com (public Acuity scheduler at app.acuityscheduling.com) | Given an appointmentTypeId from listAppointmentTypes, returns real currently-open time… | 🟢 |
| `classicrockfab.listAppointmentTypes` | classicrockfab.com (public Acuity scheduler at app.acuityscheduling.com) | Lists Classic Rock's public design-center appointment types across all four locations… | 🟢 |
| `classpass.checkAvailability` | classpass.com | Checks whether a specific already-known class or appointment slot still has an open… | ⚪ |
| `classpass.getPricing` | classpass.com | Returns ClassPass's own membership/credit-plan pricing for a market — the monthly… | ⚪ |
| `classpass.getSchedule` | classpass.com | Returns one studio's upcoming bookable class/appointment timetable — class name… | 🟢 |
| `classpass.getStudio` | classpass.com | Returns one gym/studio/spa/salon's ClassPass profile in a single request — name and… | 🟢 |
| `classpass.search` | classpass.com | Searches fitness, wellness AND beauty businesses (gyms, studios, spas and salons) near… | 🟢 |
| `claude_com.getDoc` | claude.com | Reads one page of claude.com's own documentation (claude.com/docs/...) by URL or path… | 🟢 |
| `claude_com.listDocPages` | claude.com | Lists every /docs page claude.com publishes, parsed from the site's own /docs/llms.txt… | 🟢 |
| `claude_support.getArticle` | support.claude.com | Returns one Claude help-center article's structured content by its URL — title… | 🟢 |
| `claude_support.listArticles` | support.claude.com | Lists every English-language help-center article — url, numeric articleId and URL slug… | 🟢 |
| `claudemarketplaces_com.getListing` | claudemarketplaces.com | Fetches one MCP server listing page (`/mcp/<publisher>/<slug>`) from… | 🟢 |
| `claudemarketplaces_com.searchListings` | claudemarketplaces.com | Finds MCP server listings whose publisher or slug matches every word in a search… | 🟢 |
| `clboyd.searchUsedEquipment` | clboyd.com | Runs CL Boyd's live used-equipment inventory filter. | 🟢 |
| `cleanairlawncare.checkServiceArea` | cleanairlawncare.com | Checks a 5-digit US zip against the caw-estimate-widget backend — the same live area… | 🟢 |
| `cleanairlawncare.getAvailableSlots` | cleanairlawncare.com | For an in-area zip whose local org has online scheduling enabled, computes the real… | 🟢 |
| `cleanairlawncare.submitEstimateRequest` | cleanairlawncare.com | Would submit the final lead (name, contact, property, requested services, chosen slot)… | ⚪ |
| `cloudflare.comparePlans` | cloudflare.com | Compares Cloudflare's website/application plan tiers — Free, Pro, Business and… | 🟢 |
| `cloudflare.compareTeamsPlans` | cloudflare.com | Compares Cloudflare's Zero Trust / Cloudflare One team plans — Free (up to 50 users)… | 🟢 |
| `cloudflare.getDomainPricing` | cloudflare.com | Reads Cloudflare Registrar's at-cost, no-markup registration and renewal pricing… | ⚪ |
| `cloudflare.searchDomainAvailability` | cloudflare.com | Checks whether a given domain name is available to register through Cloudflare… | 🟡 |
| `clubchampion.checkAvailability` | clubchampion.com | Checks real, live open-slot availability on one FITTER's calendar (an id from… | 🟢 |
| `clubchampion.getFittings` | clubchampion.com | Reads one studio's real fitting-type menu with live per-store pricing (Driver, Full… | 🟢 |
| `clubchampion.listFitters` | clubchampion.com | Reads the live list of every Club Champion fitter — id, name, studio, timezone… | 🟢 |
| `clubchampion.listStudios` | clubchampion.com | Reads the live list of every Club Champion fitting studio — id, address, lat/lng… | 🟢 |
| `cnb_avocat_fr.search` | cnb.avocat.fr | Searches the French national lawyer directory by name, city, or legal specialty. | ⚪ |
| `cnn.getArticle` | www.cnn.com | Read the full text and metadata of one CNN article — headline, body text, author… | ⚪ |
| `cnn.getMarketsData` | www.cnn.com | Financial and markets data from CNN Money — stock indices, currency rates, commodities… | ⚪ |
| `cnn.getVideo` | www.cnn.com | Get metadata for one CNN video — title, description, duration, transcription if… | ⚪ |
| `cnn.listCategories` | www.cnn.com | The section categories CNN publishes — Politics, World, US, Business, Markets, Tech… | ⚪ |
| `cnn.listHeadlines` | www.cnn.com | The top headlines from CNN's home page — the lead stories across all sections, newest… | 🟢 |
| `cnn.listOpinion` | www.cnn.com | Opinion and commentary pieces from CNN's opinion section — columns, analysis and… | ⚪ |
| `cnn.listSectionHeadlines` | www.cnn.com | The latest headlines in one CNN section by section NAME ("Politics", "World"… | ⚪ |
| `cnn.listTrendingTopics` | www.cnn.com | Topics and keywords that are trending on CNN right now — what stories are getting the… | ⚪ |
| `cnn.listVideos` | www.cnn.com | Search or list videos from CNN — video clips, segments and full shows with title… | ⚪ |
| `cnn.searchArticles` | www.cnn.com | Search for news articles across CNN — takes what a person would say ("breaking news"… | ⚪ |
| `code_claude_com.getDoc` | code.claude.com | Reads one page of code.claude.com's own documentation by URL or path and returns its… | 🟢 |
| `code_claude_com.listDocPages` | code.claude.com | Lists every doc page code.claude.com publishes, parsed from the site's own… | 🟢 |
| `compass_living.listCommunities` | compass-living.com | Lists up to 10 senior living communities with their contact-form fields and… | 🟢 |
| `completehomewarranty_com.getPlan` | completehomewarranty.com | Reads one plan by name (e.g. "Essential Plan") — its monthly price and coverage summary. | 🟢 |
| `completehomewarranty_com.listPlans` | completehomewarranty.com | Lists Complete Home Warranty's current published plans — name, monthly price and… | 🟢 |
| `consultnet.searchJobs` | consultnet.com | Searches ConsultNet's live IT-staffing job board by keyword and optional ZIP/radius… | 🟢 |
| `costco.search` | costco.com | Runs a search on Costco's product catalog and returns matching items (title, brand… | 🟢 |
| `countycourt_vic_gov_au.dailyList` | countycourt.vic.gov.au | Returns the County Court's currently-published daily hearing list (Crime and Appeals… | 🟢 |
| `couponfollow.getCodes` | couponfollow.com | Reads couponfollow.com/site/<domain> — every promo code and checkout deal couponfollow… | 🟢 |
| `crecipr.searchCredenciados` | crecipr.gov.br | Searches CRECI-PR's accredited brokers registry by name or CRECI registration number. | 🟡 |
| `crecipr.verifyBroker` | crecipr.gov.br | Verifies whether a broker or agency is currently licensed and in good standing at… | 🟡 |
| `credibly_com.getApplicationForm` | credibly.com | Reads the visible questions and select choices on Credibly's public business-financing… | 🟢 |
| `credibly_com.getEligibilityRequirements` | credibly.com | Reads Credibly's own published eligibility requirements (time in business, credit… | 🟡 |
| `cruiselakegeneva.getTour` | cruiselakegeneva.com | Reads one tour's own detail page: full pricing (adult/child/group tiers), duration… | 🟢 |
| `cruiselakegeneva.listTours` | cruiselakegeneva.com | Lists Cruise Lake Geneva's current tour lineup — every narrated/dining/seasonal boat… | 🟢 |
| `culturefly.buildCultureFlyCheckoutLink` | culturefly.com | Resolves a chosen size + cadence against getCultureFlyBoxOptions and returns the exact… | 🟢 |
| `culturefly.getCultureFlyBoxOptions` | culturefly.com | Reads one box's full configure surface off its own product page — every apparel size… | 🟢 |
| `culturefly.listCultureFlyBoxes` | culturefly.com | Reads the live CultureFly catalogue for exactly the licensed subscription-box product… | 🟢 |
| `curiocity.listEvents` | curiocity.com | Reads curiocity.com's own city 'things to do' feed and returns individual events… | 🟢 |
| `currency_exchange.getRate` | exchangerate-api.com | Returns the current exchange rate between two currency codes | 🟢 |
| `cyberpowerpc.getConfigurator` | cyberpowerpc.com | Reads one base configurator's whole component tree — every section (CPU, GPU, memory… | 🟢 |
| `cyberpowerpc.listConfigurators` | cyberpowerpc.com | Lists every base gaming-PC configurator on the site — AMD and Intel, every tier from… | 🟢 |
| `cyberpowerpc.priceBuild` | cyberpowerpc.com | Prices an exact build for one configurator given a caller's part selections (one part… | 🟢 |
| `dahlconsulting.getJob` | careers.dahlconsulting.com | Reads one job posting's full detail — the complete description, industry… | 🟢 |
| `dahlconsulting.searchJobs` | careers.dahlconsulting.com | Searches Dahl Consulting's live job board — every open role at… | 🟢 |
| `dangotecement.getPriceList` | dangotecement.com | Would return current cement price list from Dangote Cement with prices per bag size… | ⚪ |
| `dansons.identifyProduct` | pitboss-grills.com | Identifies which Pit Boss product(s) a free-text description matches — the same… | 🟢 |
| `dansons.listRegisterableProducts` | pitboss-grills.com | Lists every Pit Boss product eligible for warranty registration — the exact catalog… | 🟢 |
| `davidsonhomes.getCommunity` | davidsonhomes.com | Reads one community's own page: its ACTUAL available homes right now — real street… | 🟢 |
| `davidsonhomes.getHome` | davidsonhomes.com | Reads one specific home's own listing page: address, price, sqft, bed/bath count… | 🟢 |
| `davidsonhomes.getRegion` | davidsonhomes.com | Reads one region's own page: every community in it with a real live price/bed/sqft… | 🟢 |
| `davidsonhomes.listRegions` | davidsonhomes.com | Lists every market region Davidson Homes currently builds in — state/metro area, live… | 🟢 |
| `deangroup.getRateCalendar` | deangroup.com | Reads 36 consecutive nights of per-night pricing and sold-out flags for one property… | 🟢 |
| `deangroup.listProperties` | deangroup.com | Lists every Dean Group hotel — Dublin Centre, Cork, Galway, Dublin Docklands, Berlin —… | 🟢 |
| `deangroup.searchAvailability` | deangroup.com | Searches one property for a date range and party size and returns every bookable rate… | 🟢 |
| `decked.getVehicleClass` | decked.com | Reads one vehicle class's complete fit list — every model it fits, each with its own… | 🟢 |
| `decked.priceCabSideOption` | decked.com | Prices the Load Floor vs Cab-side Gap 8'-bed accessory-pack option for one vehicle +… | 🟢 |
| `decked.resolveFitment` | decked.com | Resolves a free-text vehicle to its real fitted SKU and live price, mirroring the… | 🟡 |
| `decked.searchFits` | decked.com | Lists every real DECKED vehicle fit across all six vehicle classes (SUV, Full-Size… | 🟢 |
| `decksdirect.addToCart` | decksdirect.com | Hands the shopper the entry-point link for a priced configuration plus the exact… | 🟢 |
| `decksdirect.checkout` | decksdirect.com | Would place a priced configuration into DecksDirect's cart and return a checkout URL. | ⚪ |
| `decksdirect.getProduct` | decksdirect.com | Reads one product's full configurable-option set (e.g. Pack Size, Color) with every… | 🟢 |
| `decksdirect.priceConfiguration` | decksdirect.com | Resolves a specific configuration (a choice per option group, e.g. { Color: "Havana… | 🟢 |
| `decksdirect.searchProducts` | decksdirect.com | Searches DecksDirect's decking/railing/hardware catalog by free text and returns each… | 🟢 |
| `dell.getOrderDetails` | dell.com | Retrieves detailed information about a specific order, including items, pricing, and… | ⚪ |
| `dell.getProduct` | dell.com | Retrieves detailed information about a specific Dell product, including… | ⚪ |
| `dell.getProductDrivers` | dell.com | Searches for and retrieves drivers for a Dell product by service tag or model number. | ⚪ |
| `dell.getRegisteredProductDetails` | dell.com | Retrieves detailed information about a registered Dell product including warranty and… | ⚪ |
| `dell.getSavedCartDetails` | dell.com | Retrieves the items and details from a specific saved cart. | ⚪ |
| `dell.getWarrantyInfo` | dell.com | Looks up warranty coverage and status for a Dell product by service tag. | ⚪ |
| `dell.listDealProducts` | dell.com | Retrieves current promotions and deals from Dell's offers section. | ⚪ |
| `dell.listMyOrders` | dell.com | Retrieves the signed-in user's order history with order numbers, dates, and status. | ⚪ |
| `dell.listMyRegisteredProducts` | dell.com | Retrieves the signed-in user's registered Dell products and devices. | ⚪ |
| `dell.listMySavedCarts` | dell.com | Retrieves the signed-in user's saved shopping carts. | ⚪ |
| `dell.listProductCategories` | dell.com | Lists the main product categories (laptops, desktops, servers, peripherals, etc.). | ⚪ |
| `dell.listSupportCategories` | dell.com | Lists the main support categories (drivers, firmware, manuals, community forum, etc.). | ⚪ |
| `dell.searchForumThreads` | dell.com | Searches Dell's community forum for threads matching a query, returning titles, URLs… | 🟢 |
| `dell.searchProducts` | dell.com | Searches the Dell store for products by keyword, returning product names, URLs… | ⚪ |
| `dell.searchSupport` | dell.com | Searches Dell's support knowledge base for articles, drivers, and troubleshooting… | ⚪ |
| `deltadentalma.lastUpdated` | deltadentalma.com | Returns the timestamp the directory data was last refreshed, so a caller can say how… | 🟢 |
| `deltadentalma.search` | deltadentalma.com | Searches Delta Dental of Massachusetts's own Find-a-Dentist directory for in-network… | 🟡 |
| `dentalplans.getPlan` | dentalplans.com | Reads one plan's own detail page — its marketing description and the site's own… | 🟢 |
| `dentalplans.search` | dentalplans.com | Runs DentalPlans.com's own live plan search (/plan-search-results/?zip=) for a 5-digit… | 🟢 |
| `detailxperts.bookAppointment` | detailxperts.com | Submits the booking form (name, phone, email, service address, vehicle, chosen… | ⚪ |
| `detailxperts.checkServiceArea` | detailxperts.com | Checks whether a service address is inside a DetailXPerts franchise's mobile service… | 🟢 |
| `detailxperts.getQuote` | detailxperts.com | Prices a mobile detail for one vehicle type and dirt/pet-hair/interior-dirt condition… | 🟢 |
| `detailxperts.listVehicleTypes` | detailxperts.com | Lists the site's own vehicle-size categories (Micro, Hatchback, Sedan, SUV, Van, …)… | 🟢 |
| `deutschepost.getDialogpostRates` | deutschepost.de | Retrieves Deutsche Post Dialogpost pricing rates by weight category and format type. | 🟢 |
| `developersopenai.getDocPage` | developers.openai.com | Reads one page of OpenAI's own developer documentation (e.g. the MCP connector / OAuth… | 🟢 |
| `dfs_rotogrinderssearch.search` | rotogrinders.com | Searches RotoGrinders for DFS projections, ownership percentages, and salary caps… | ⚪ |
| `dice.getCompany` | dice.com | Returns one technology employer's Dice profile from its `/company-profile/<uuid>` URL… | ⚪ |
| `dice.getJob` | dice.com | Returns one Dice posting in full from its posting id — the complete HTML description… | 🟢 |
| `dice.listCompanyJobs` | dice.com | Returns the open technology roles a single named employer is currently advertising on… | ⚪ |
| `dice.searchCompanies` | dice.com | Finds technology employers on Dice and returns each company's profile — name… | ⚪ |
| `dice.searchJobs` | dice.com | Searches Dice's tech-only job database and returns the matching postings — title… | 🟢 |
| `dickssportinggoods.checkStock` | dickssportinggoods.com | Answers whether a specific item is available right now for shipping or for… | ⚪ |
| `dickssportinggoods.findStores` | dickssportinggoods.com | Finds nearby DICK'S Sporting Goods stores for a US ZIP, a "City, ST" string or a… | 🟢 |
| `dickssportinggoods.getProduct` | dickssportinggoods.com | Reads one product's full page — price, available options (size, color), images, brand… | ⚪ |
| `dickssportinggoods.getWeeklyAd` | dickssportinggoods.com | Reads the current local weekly ad / deals circular for a store or zip — the… | ⚪ |
| `dickssportinggoods.search` | dickssportinggoods.com | Searches dickssportinggoods.com's catalog for a keyword (optionally scoped by sport… | ⚪ |
| `dillards.checkStock` | dillards.com | Answers whether one exact size/color of a product is available right now — both for… | 🟢 |
| `dillards.findStores` | dillards.com | Finds nearby Dillard's store locations the way the site's own /stores locator does —… | 🟢 |
| `dillards.getProduct` | dillards.com | Reads one product's own page — full name, brand, description, primary image plus every… | 🟢 |
| `dillards.search` | dillards.com | Searches dillards.com's catalog for a keyword and returns the matching products the… | 🟢 |
| `dillards.searchRegistry` | dillards.com | Searches Dillard's wedding/gift registry (dillards.com/registry) — a distinctive… | 🟢 |
| `discounttire.checkStock` | discounttire.com | Checks whether a specific tire or wheel is actually gettable near a given place — the… | 🟢 |
| `discounttire.findStores` | discounttire.com | Finds Discount Tire and America's Tire locations near a ZIP, city or coordinate —… | ⚪ |
| `discounttire.getAppointmentAvailability` | discounttire.com | Reads the installation appointment slots a given store has open — which days and times… | ⚪ |
| `discounttire.getOrderStatus` | discounttire.com | Reads the status of an existing Discount Tire order from the order number and the… | ⚪ |
| `discounttire.getProduct` | discounttire.com | Reads one tire or wheel product page — price per unit and per set, the full spec… | 🟢 |
| `discounttire.getProductReviews` | discounttire.com | Reads the customer reviews Discount Tire carries for a tire — the rating distribution… | ⚪ |
| `discounttire.getPromotions` | discounttire.com | Reads the rebates and promotions Discount Tire currently runs — the manufacturer… | ⚪ |
| `discounttire.getStore` | discounttire.com | Reads one Discount Tire store in full — its address, phone, hours by day including… | ⚪ |
| `discounttire.getTreadwellRecommendation` | discounttire.com | Runs Treadwell, Discount Tire's own tire recommendation engine — vehicle, ZIP, annual… | ⚪ |
| `discounttire.getVehicleFitment` | discounttire.com | Reads what a given vehicle actually takes, before any product is chosen — the OE and… | ⚪ |
| `discounttire.searchPackages` | discounttire.com | Searches the pre-built tire-and-wheel packages Discount Tire sells for a vehicle — a… | ⚪ |
| `discounttire.searchTiresBySize` | discounttire.com | Searches tires by the size stamped on the sidewall — 225/45R17 and the like, including… | 🟢 |
| `discounttire.searchTiresByVehicle` | discounttire.com | Searches the tires Discount Tire will actually sell for a specific vehicle — year… | ⚪ |
| `discounttire.searchWheelsBySize` | discounttire.com | Searches wheels by their own dimensions rather than by a vehicle — diameter, width… | ⚪ |
| `discounttire.searchWheelsByVehicle` | discounttire.com | Searches the wheels that fit a specific vehicle — year, make, model and trim in, and… | ⚪ |
| `disney.getTicketPrice` | disneyworld.disney.go.com | Reads a park ticket's real per-person price off Disney's own ticket page — a… | 🟢 |
| `donsappliances.getProduct` | donsappliances.com | Reads one Don's Appliances product page (a URL `search` already returned) and returns… | 🟡 |
| `donsappliances.search` | donsappliances.com | Browses one of Don's Appliances' own catalog categories and returns each listed… | 🟢 |
| `doordash.getCheckoutTotal` | doordash.com | Would open a specific store, add real menu items to the cart, set a delivery address… | ⚪ |
| `doordash.search` | doordash.com | Runs DoorDash's own store search for a free-text query and returns the real… | 🟢 |
| `dumpsters.getQuote` | dumpsters.com | Prices a roll-off dumpster rental for a US address — real per-size prices, next… | 🟢 |
| `e2b.createSandbox` | e2b.dev | Boots a fresh Linux sandbox from a template (the `claude` template ships Claude Code)… | 🟢 |
| `e2b.getSandbox` | e2b.dev | Reads one sandbox via GET /sandboxes/{id}: state, vCPU and RAM, start time and… | 🟢 |
| `e2b.killSandbox` | e2b.dev | Destroys a sandbox via DELETE /sandboxes/{id}, which cannot be undone; idempotent on… | 🟢 |
| `e2b.listSandboxes` | e2b.dev | Lists running sandboxes on the team via GET /v2/sandboxes, optionally filtered by… | 🟢 |
| `e2b.readFile` | e2b.dev | Reads a text file from inside a sandbox via the daemon's GET /files; null when it does… | 🟢 |
| `e2b.runCommand` | e2b.dev | Runs `bash -l -c <cmd>` inside a sandbox through its in-sandbox daemon's Connect-RPC… | 🟢 |
| `e2b.setSandboxTimeout` | e2b.dev | Moves a sandbox's kill time via POST /sandboxes/{id}/timeout, in seconds from now. | 🟢 |
| `e2b.writeFile` | e2b.dev | Writes a text file inside a sandbox via the daemon's multipart POST /files. | 🟢 |
| `ebay.addToCart` | ebay.com | Add an item to the caller's shopping cart. | ⚪ |
| `ebay.addToWatchlist` | ebay.com | Add an item to the caller's watch list. | ⚪ |
| `ebay.getCart` | ebay.com | Get the caller's shopping cart — items they have added but not yet purchased. | ⚪ |
| `ebay.getDeals` | ebay.com | Get current eBay deals and promotions. | ⚪ |
| `ebay.getItem` | ebay.com | Get details for a specific eBay listing — title, current price, condition, buying… | ⚪ |
| `ebay.getMyAccount` | ebay.com | Get the caller's account settings and preferences. | ⚪ |
| `ebay.getMyListings` | ebay.com | Get the caller's active selling listings (for sellers). | ⚪ |
| `ebay.getMyMessages` | ebay.com | Get the caller's eBay messages — inbox, sent, and resolved messages. | ⚪ |
| `ebay.getProfile` | ebay.com | Get the caller's profile information. | ⚪ |
| `ebay.getSellerListings` | ebay.com | List all active items for sale from a specific seller. | ⚪ |
| `ebay.getSellerProfile` | ebay.com | Get seller information — feedback score, seller type (individual/business), member… | ⚪ |
| `ebay.getWatchlist` | ebay.com | Get the caller's watch list — items they are monitoring for price changes. | ⚪ |
| `ebay.removeFromCart` | ebay.com | Remove an item from the caller's shopping cart. | ⚪ |
| `ebay.removeFromWatchlist` | ebay.com | Remove an item from the caller's watch list. | ⚪ |
| `ebay.search` | ebay.com | Runs an eBay item search the way ebay.com's own search box does and returns the… | 🟢 |
| `ebay.searchAutocomplete` | ebay.com | Get search suggestions based on a partial query — what people are searching for. | ⚪ |
| `ebay.searchByCategory` | ebay.com | Browse listings within a specific eBay category. | ⚪ |
| `elase.checkAvailability` | elase.com | Checks real, live open time slots for one service at one location on one date — the… | 🟡 |
| `elase.findLocation` | elase.com | Resolves a slug/neighborhood query to the matching real Elase location(s) — name… | 🟢 |
| `elase.listLocations` | elase.com | Reads the live list of every Elase Med Spa location off the site's own /locations/… | 🟢 |
| `elase.listServices` | elase.com | Reads one location's real, live service catalog (name, description, price, duration)… | 🟢 |
| `elevenlabs.cloneVoice` | elevenlabs.io | Creates a new ElevenLabs voice cloned from one or more caller-supplied audio sample… | 🟢 |
| `elevenlabs.synthesize` | elevenlabs.io | Converts text into spoken audio (MP3 by default) using an ElevenLabs voice — the… | 🟢 |
| `embroker.getBusinessInsuranceQuote` | embroker.com | Returns a priced business-insurance coverage package for a company's profile… | ⚪ |
| `embroker.getQuoteEntryPoint` | embroker.com | Returns the live entry URL for Embroker's self-serve quote wizard for one coverage… | 🟢 |
| `embroker.listCoverageLines` | embroker.com | Returns the real list of commercial-insurance coverage lines and policy product types… | 🟢 |
| `energyaustralia_com_au.getBusinessElectricityQuote` | energyaustralia.com.au | Returns every business electricity plan EnergyAustralia offers in a postcode's… | ⚪ |
| `epicgames.addToCart` | epicgames.com | Put a game or add-on in the signed-in caller's cart. | ⚪ |
| `epicgames.addToWishlist` | epicgames.com | Add a game to the signed-in caller's wishlist. | ⚪ |
| `epicgames.claimFreeGame` | epicgames.com | Claim one of this week's free games into the signed-in caller's library — the $0… | ⚪ |
| `epicgames.getAccount` | epicgames.com | The signed-in caller's Epic account: display name, account id, linked platforms… | ⚪ |
| `epicgames.getAchievementProgress` | epicgames.com | The signed-in caller's own achievements in one game — which are unlocked, when, and… | ⚪ |
| `epicgames.getAchievements` | epicgames.com | A game's achievement list as the store shows it — name, description, icon, XP, and the… | ⚪ |
| `epicgames.getCart` | epicgames.com | The signed-in caller's cart — each line's offer, price and discount, and the cart total. | ⚪ |
| `epicgames.getGame` | epicgames.com | One game's store page as data: title, description, developer, publisher, editions and… | 🟢 |
| `epicgames.getGameRatings` | epicgames.com | How players rate a game on the Epic Games Store — the average star rating, the count… | ⚪ |
| `epicgames.getLibrary` | epicgames.com | The games the signed-in caller owns on Epic — title, namespace, slug, and when it was… | ⚪ |
| `epicgames.getNewsArticle` | epicgames.com | One Epic Games Store news article's full text, date, author and images. | ⚪ |
| `epicgames.getPrice` | epicgames.com | What a game costs right now in a given country: current price, original price… | ⚪ |
| `epicgames.getRewardsBalance` | epicgames.com | The signed-in caller's Epic Rewards balance — the store credit they have earned from… | ⚪ |
| `epicgames.getServiceStatus` | epicgames.com | Whether Epic's services are up — the Epic Games Store, launcher, login, Fortnite… | ⚪ |
| `epicgames.getStorefront` | epicgames.com | The store's home page as data — the featured carousel, the sale carousel and the other… | ⚪ |
| `epicgames.getWishlist` | epicgames.com | The signed-in caller's Epic Games Store wishlist, with each game's current price and… | ⚪ |
| `epicgames.listCollection` | epicgames.com | One of the store's own ranked charts — Top Sellers, Most Played, Top Upcoming… | ⚪ |
| `epicgames.listDeals` | epicgames.com | Games on sale now — the store's Special Offers — with current price, original price… | ⚪ |
| `epicgames.listFreeGames` | epicgames.com | The Epic Games Store's free-game rotation: the games free to claim right now and the… | 🟢 |
| `epicgames.listFriends` | epicgames.com | The signed-in caller's Epic friends list — display name, account id, and online… | ⚪ |
| `epicgames.listGameOffers` | epicgames.com | Every purchasable offer under one game — base game, editions, DLC, add-ons and bundles… | ⚪ |
| `epicgames.listNews` | epicgames.com | The Epic Games Store's news articles, newest first — title, date, author, category… | ⚪ |
| `epicgames.listOrders` | epicgames.com | The signed-in caller's Epic purchase history — each transaction's date, items, amount… | ⚪ |
| `epicgames.listTags` | epicgames.com | The store's browse filters — genres, features, platforms and event tags with their ids… | ⚪ |
| `epicgames.redeemCode` | epicgames.com | Redeem a product code the caller holds into their Epic library. | ⚪ |
| `epicgames.removeFriend` | epicgames.com | Remove someone from the signed-in caller's Epic friends. | ⚪ |
| `epicgames.removeFromCart` | epicgames.com | Remove a line from the signed-in caller's cart. | ⚪ |
| `epicgames.removeFromWishlist` | epicgames.com | Remove a game from the signed-in caller's wishlist. | ⚪ |
| `epicgames.searchGames` | epicgames.com | Keyword search of the Epic Games Store catalogue — title, namespace, current and… | 🟢 |
| `epicgames.sendFriendRequest` | epicgames.com | Send a friend request from the signed-in caller to an Epic display name. | ⚪ |
| `epicgames.updateDisplayName` | epicgames.com | Change the signed-in caller's Epic display name. | ⚪ |
| `epromos.getProductConfiguration` | epromos.com | Reads one ePromos product's own configurator off its product page — every color/style… | 🟢 |
| `epromos.listCategoryProducts` | epromos.com | Lists the products ePromos features on one of its category landing pages (e.g.… | 🟢 |
| `epromos.quoteBulkPrice` | epromos.com | Computes the real per-unit and total price for one product at a caller-given quantity… | 🟢 |
| `epromos.searchProducts` | epromos.com | Free-text search over ePromos' full catalog. | ⚪ |
| `eq3.configureSofa` | eq3.com | Would price an ARBITRARY caller-chosen combination of options (not one of the site's… | ⚪ |
| `eq3.getSofaConfiguration` | eq3.com | Reads one sofa's full configurator: the site's own computed price (regular + sale) for… | 🟢 |
| `eq3.listSofas` | eq3.com | Lists every sofa in EQ3's living/seating/sofas line with real regular and sale prices… | 🟢 |
| `equinox_hotels.listRooms` | equinox-hotels.com | Lists Equinox Hotel New York's live room inventory with booking-engine room codes… | 🟢 |
| `equinox_hotels.searchRates` | equinox-hotels.com | Searches Equinox Hotel New York's live booking engine for dates and guests, returning… | 🟢 |
| `erieinsurance.findAgent` | erieinsurance.com | Finds ERIE independent agents near a ZIP or city+state — agency name, the named agent… | 🟢 |
| `erieinsurance.findRepairShop` | erieinsurance.com | Finds ERIE-network auto body repair shops near a ZIP or address for a policyholder… | ⚪ |
| `erieinsurance.getAutoQuote` | erieinsurance.com | Returns an auto insurance premium quote for a vehicle and driver in a given ZIP — the… | ⚪ |
| `erieinsurance.getBoatQuote` | erieinsurance.com | Returns a boat/watercraft insurance premium quote for a vessel and owner. | ⚪ |
| `erieinsurance.getBusinessQuote` | erieinsurance.com | Returns a general business insurance premium quote (property, general liability… | ⚪ |
| `erieinsurance.getClaimStatus` | erieinsurance.com | Returns the status of an existing claim (e.g. open, in review, paid) for a… | ⚪ |
| `erieinsurance.getClassicCarQuote` | erieinsurance.com | Returns an antique/collector car insurance premium quote for a vehicle, its agreed… | ⚪ |
| `erieinsurance.getCommercialAutoQuote` | erieinsurance.com | Returns a commercial auto insurance premium quote for a business's vehicles and drivers. | ⚪ |
| `erieinsurance.getCondoQuote` | erieinsurance.com | Returns a condo (HO-6) insurance premium quote for a unit address and coverage amount. | ⚪ |
| `erieinsurance.getCyberLiabilityQuote` | erieinsurance.com | Returns a cyber liability insurance premium quote for a business's size, industry and… | ⚪ |
| `erieinsurance.getHomeQuote` | erieinsurance.com | Returns a homeowners insurance premium quote for a property address and dwelling… | ⚪ |
| `erieinsurance.getLifeQuote` | erieinsurance.com | Returns a life insurance premium quote (ERIE sells term life directly online via… | ⚪ |
| `erieinsurance.getMobileHomeQuote` | erieinsurance.com | Returns a manufactured/mobile home insurance premium quote for a home's location and… | ⚪ |
| `erieinsurance.getMotorcycleQuote` | erieinsurance.com | Returns a motorcycle insurance premium quote for a bike, rider and ZIP. | ⚪ |
| `erieinsurance.getOffRoadVehicleQuote` | erieinsurance.com | Returns an ATV/off-road-vehicle insurance premium quote for a vehicle and owner. | ⚪ |
| `erieinsurance.getRentersQuote` | erieinsurance.com | Returns a renters insurance premium quote for a rented address and coverage amount —… | ⚪ |
| `erieinsurance.getRvQuote` | erieinsurance.com | Returns an RV/motorhome insurance premium quote for a vehicle and owner. | ⚪ |
| `erieinsurance.getUmbrellaQuote` | erieinsurance.com | Returns a personal umbrella liability insurance premium quote given a requested… | ⚪ |
| `erieinsurance.getWorkersCompensationQuote` | erieinsurance.com | Returns a workers' compensation insurance premium quote for a business's payroll… | ⚪ |
| `estes_express.estimateFreightQuote` | estes-express.com | Gets a freight shipping rate quote for an LTL (less than truckload) shipment with… | 🟢 |
| `ethos.getLifeQuote` | ethos.com | Returns a personalized life insurance rate quote the way Ethos's own funnel does… | ⚪ |
| `etsy.search` | etsy.com | Searches Etsy's live catalog of active listings by keyword, the way etsy.com's own… | 🟢 |
| `evag.listDepartures` | evag.de | Real-time transit departure information and schedules for Essen public transportation… | 🟢 |
| `evag.searchStop` | evag.de | Search for Essen transit stops and stations by name or partial name; returns matching… | 🟢 |
| `eventsource.getShowroom` | eventsource.com | Reads a public Virtual Design Center showroom by its access code — the pre-built room… | 🟢 |
| `eventsource.getShowroomInquiryContact` | eventsource.com | Reads who a showroom's 'Send Inquiry' button actually emails — the sales inbox and the… | 🟢 |
| `eventsource.getShowroomVenue` | eventsource.com | Reads the real venue/room a showroom's design is staged in — business name… | 🟢 |
| `evolutionofsmooth.answerShadeQuizQuestion` | evolutionofsmooth.com | Submits one answer to a shade-quiz question page and returns either the next question… | 🟢 |
| `evolutionofsmooth.startShadeQuiz` | evolutionofsmooth.com | Starts eos's Dewy Lip Shine Shade Finder quiz (an Octane AI embed) and returns the… | 🟢 |
| `evolvemedspa.checkAvailability` | evolvemedspa.com | Reads real open appointment slots for a service and date. | 🟢 |
| `evolvemedspa.listLocations` | evolvemedspa.com | Lists Evolve Med Spa's real bookable Zenoti locations. | 🟢 |
| `evolvemedspa.listServices` | evolvemedspa.com | Lists a location's live Zenoti services, prices, and durations. | 🟢 |
| `executivehomecare.findLocalOffice` | executivehomecare.com | Looks up the Executive Home Care franchise office that covers a US ZIP — the same… | 🟢 |
| `extraspace.checkAvailability` | extraspace.com | Checks current availability and price for one specific unit size (e.g. 5x10, 10x10… | 🟢 |
| `extraspace.getDeals` | extraspace.com | Reads Extra Space Storage's currently published promotions — the move-in specials… | ⚪ |
| `extraspace.getFacility` | extraspace.com | Reads one Extra Space Storage facility in full, for the `storeId` a caller already has… | 🟢 |
| `extraspace.search` | extraspace.com | Searches Extra Space Storage's live facility inventory the way its own homepage… | 🟢 |
| `faceforwardaesthetics.checkAvailability` | faceforwardaesthetics.com | Reads real open appointment slots for a service and date. | 🟢 |
| `faceforwardaesthetics.listLocations` | faceforwardaesthetics.com | Lists Face Forward Aesthetics' real bookable Zenoti locations (9 centers, OH/IN/NV/PA). | 🟢 |
| `faceforwardaesthetics.listServices` | faceforwardaesthetics.com | Lists a location's live Zenoti services, prices, and durations. | 🟢 |
| `facerealityskincare.searchAcneExperts` | facerealityskincare.com | Runs Face Reality's own Acne Expert Locator search — matches a free-text query (city… | 🟢 |
| `fbsappliance.getProductDetails` | fbsappliance.com | Reads one product's detail page for its full spec sheet, real per-showroom inventory… | ⚪ |
| `fbsappliance.searchAppliances` | fbsappliance.com | Runs the site's own category grid (e.g. built-in-refrigerators) and returns real… | 🟢 |
| `fieldstonehomes.getAppointmentFormSchema` | fieldstonehomes.com | Reads Fieldstone Homes' live schedule-appointment form, including its required fields… | 🟢 |
| `fieldstonehomes.prepareAppointment` | fieldstonehomes.com | Validates an appointment request against Fieldstone Homes' live form and returns the… | 🟢 |
| `fieldstonehomes.searchQuickMoveIns` | fieldstonehomes.com | Searches Fieldstone Homes' live quick-move-in inventory by city, home type, price… | 🟢 |
| `firstamericahomes.getCommunity` | firstamericahomes.com | Reads one community's full detail: address, sales-office phone, description… | 🟢 |
| `firstamericahomes.searchCommunities` | firstamericahomes.com | Searches First America Homes' current live community list (Houston and San Antonio… | 🟢 |
| `firstdibs.getListing` | 1stdibs.com | Reads one listing's real price and its concrete completing action (Make an Offer… | 🟢 |
| `firstdibs.search` | 1stdibs.com | Runs 1stDibs' search and returns real listings — name, real price, currency… | 🟢 |
| `fitness1440.getDayPassRequestInfo` | fitness1440.com | Validates one state/city pair against the same live cascade and returns the day-pass… | 🟡 |
| `fitness1440.listLocations` | fitness1440.com | Reads FITNESS:1440's own day-pass request form (/request-day-pass/) and returns the… | 🟡 |
| `fivebelow.search` | fivebelow.com | Searches fivebelow.com's catalog for a keyword and returns matching products — name… | 🟢 |
| `fivestarbathsolutions.bookAppointment` | fivestarbathsolutions.com | Would submit the final 3-step booking form (chosen slot +… | ⚪ |
| `fivestarbathsolutions.getAvailableSlots` | fivestarbathsolutions.com | Checks a franchise region's real free design-consultation scheduler and returns the… | 🟢 |
| `fivestarbathsolutions.listLocations` | fivestarbathsolutions.com | Returns every Five Star Bath Solutions franchise territory — the site's own… | 🟢 |
| `flightradar24.getAircraft` | flightradar24.com | Reads the airframe behind a tail registration (G-XLEA) — aircraft type and model… | ⚪ |
| `flightradar24.getAirline` | flightradar24.com | Name the carrier behind an airline code. | 🟢 |
| `flightradar24.getAirlineFleet` | flightradar24.com | Lists the aircraft an airline operates — registration, type and age per airframe — for… | ⚪ |
| `flightradar24.getAirport` | flightradar24.com | Reads one airport's own record for an IATA or ICAO code — full name, both codes, city… | ⚪ |
| `flightradar24.getAirportArrivals` | flightradar24.com | Reads an airport's arrivals board for a code (LHR / EGLL) — inbound flights with… | 🟢 |
| `flightradar24.getAirportDepartures` | flightradar24.com | Reads an airport's departures board for a code — outbound flights with airline, flight… | ⚪ |
| `flightradar24.getAirportStatistics` | flightradar24.com | Reports how an airport is actually running — on-time performance, average delay, and… | ⚪ |
| `flightradar24.getFlightHistory` | flightradar24.com | Lists the recent completed legs behind a flight number or a tail registration over a… | ⚪ |
| `flightradar24.getFlightTrack` | flightradar24.com | Returns the full flown path of one specific flight as an ordered series of positions —… | ⚪ |
| `flightradar24.listFlightsInArea` | flightradar24.com | Lists every aircraft currently airborne inside a geographic bounding box — the map's… | ⚪ |
| `flightradar24.search` | flightradar24.com | Resolves a free-text query — an airport name, a city, an airline, a flight number, a… | ⚪ |
| `flightradar24.trackFlight` | flightradar24.com | Answers "where is this flight right now" for a flight number (BA286), callsign… | ⚪ |
| `fluencecorp.calculateEnergyConsumption` | fluencecorp.com | Computes Normalized Energy Consumption (`NEC`, kWh/kg) for a wastewater treatment… | 🟢 |
| `fomo.addToWatchlist` | fomo.family | Adds a token to the signed-in trader's watchlist. `POST /watchlist`. | ⚪ |
| `fomo.claimCreatorFees` | fomo.family | Claims the creator fees a token's deployer has accrued, moving them into the signed-in… | ⚪ |
| `fomo.commentOnTrade` | fomo.family | Posts a comment on a trade, and reacts to or unreacts from an existing comment. `POST… | ⚪ |
| `fomo.deleteAccount` | fomo.family | Deletes the signed-in trader's fomo account. `DELETE /v2/users/:userId`. | ⚪ |
| `fomo.editProfile` | fomo.family | Updates the signed-in trader's own profile — display name, bio, handle — and uploads… | ⚪ |
| `fomo.executeSwap` | fomo.family | Executes a priced swap: authorizes it, refreshes the transaction if the quote went… | ⚪ |
| `fomo.exportPrivateKeys` | fomo.family | Returns the signed-in user's exported wallet private keys — the site's own key-export… | ⚪ |
| `fomo.filterTokens` | fomo.family | The full token screener — a POST taking the site's own filter object (chain, market… | ⚪ |
| `fomo.follow` | fomo.family | Follows another trader on behalf of the signed-in user. | ⚪ |
| `fomo.getAlertPreferences` | fomo.family | Returns and updates which push alerts the signed-in trader receives — the settings… | ⚪ |
| `fomo.getBalances` | fomo.family | Returns what one trader actually holds — every open token position with its raw… | 🟢 |
| `fomo.getCandles` | fomo.family | Returns OHLCV bars for one token at a given resolution — open, high, low, close… | ⚪ |
| `fomo.getClan` | fomo.family | Returns one clan — fomo's team unit — with its name, description, member count… | ⚪ |
| `fomo.getClanFeed` | fomo.family | Pages a clan's own feed and the theses its members have written. `GET… | ⚪ |
| `fomo.getClanHoldings` | fomo.family | Returns what a clan collectively holds — one row per token with how many members hold… | ⚪ |
| `fomo.getClanHoldingsBreakdown` | fomo.family | Breaks one clan's position in ONE token down to the members holding it — who in the… | ⚪ |
| `fomo.getClanThesis` | fomo.family | The written theses a clan's members have posted — the clan-scoped half of… | ⚪ |
| `fomo.getCreatorFees` | fomo.family | Returns fees accrued to a token creator through fomo's relay, and claims them. `GET… | ⚪ |
| `fomo.getCurrentUser` | fomo.family | Returns the signed-in trader's own profile — id, `userHandle`, display name, bio… | 🟢 |
| `fomo.getDevHolders` | fomo.family | Returns whether the token's own deployer still holds it, and how much. | ⚪ |
| `fomo.getFeed` | fomo.family | Pages the signed-in trader's social feed — the trades made by people they follow, each… | ⚪ |
| `fomo.getFollowers` | fomo.family | Pages the traders following one user. `GET /v2/users/:userId/followers`, cursor-paged… | ⚪ |
| `fomo.getFollowing` | fomo.family | Pages the traders one user follows. `GET /v2/users/:userId/followingPaginate`. | ⚪ |
| `fomo.getFollowingIds` | fomo.family | Returns just the ids of everyone the signed-in trader follows, in one call with no… | ⚪ |
| `fomo.getFollowingLeaderboard` | fomo.family | The same ranking restricted to traders the signed-in user follows — 'how am I doing… | ⚪ |
| `fomo.getFriendHolders` | fomo.family | Returns which of the signed-in trader's own follows hold a given token — fomo's core… | ⚪ |
| `fomo.getGraduatedTokens` | fomo.family | Returns tokens that have just completed their bonding curve and moved to a full AMM… | ⚪ |
| `fomo.getLeaderboard` | fomo.family | Returns the ranked traders for one window — daily, weekly, monthly or all-time — with… | 🟢 |
| `fomo.getMajorTokens` | fomo.family | Returns the large-cap majors — BTC, ETH, SOL and the rest of the non-memecoin set… | ⚪ |
| `fomo.getMostHeldTokens` | fomo.family | Returns the tokens held by the most fomo traders — a positions ranking rather than a… | ⚪ |
| `fomo.getMutuals` | fomo.family | Pages the traders both the signed-in user and another user follow. `GET… | ⚪ |
| `fomo.getPerpetuals` | fomo.family | Perpetual futures — open positions, funding, leverage and the perps order flow fomo… | ⚪ |
| `fomo.getPortfolioHistory` | fomo.family | Returns the time series behind a trader's portfolio-value chart — total USD value at… | ⚪ |
| `fomo.getPortfolioSnapshot` | fomo.family | Returns one point of that series in full — the positions held at that moment, not just… | ⚪ |
| `fomo.getRecommendedUsers` | fomo.family | Returns fomo's own suggestions of traders to follow for one user. | ⚪ |
| `fomo.getReferrals` | fomo.family | Returns who the signed-in trader referred and what they have earned from it, plus… | ⚪ |
| `fomo.getReferrerDetails` | fomo.family | Returns who referred the signed-in trader, and the terms attached — the other end of… | ⚪ |
| `fomo.getRewards` | fomo.family | Returns the signed-in trader's reward history. `GET /v2/users/:userId/rewards`. | ⚪ |
| `fomo.getSupportedTransferTokens` | fomo.family | Returns the tokens fomo will let a user send to another user or an external address.… | ⚪ |
| `fomo.getSwapStatus` | fomo.family | Returns where a submitted swap got to — its status word, transaction hash, and failure… | ⚪ |
| `fomo.getToken` | fomo.family | Returns one token's full detail — name, symbol, decimals, image, description and… | ⚪ |
| `fomo.getTokenAllowlist` | fomo.family | Returns the tokens fomo will actually let a user trade, and the detailed variant that… | ⚪ |
| `fomo.getTokenAllowlistDetailed` | fomo.family | The token allowlist with each entry's full record rather than its address alone — the… | ⚪ |
| `fomo.getTokenFeed` | fomo.family | Pages the posts and trades attached to one specific token — the conversation on a… | ⚪ |
| `fomo.getTokenThesis` | fomo.family | Returns the written theses traders have posted about one token, ranked by the site's… | ⚪ |
| `fomo.getTokenWarnings` | fomo.family | Returns fomo's risk flags for one token — the honeypot, mint-authority… | ⚪ |
| `fomo.getTopHolders` | fomo.family | Returns the largest holders of one token, with position sizes. | ⚪ |
| `fomo.getTrade` | fomo.family | Returns one trade in full by id, with its author and token — the narrow read behind a… | ⚪ |
| `fomo.getTradeComments` | fomo.family | Returns the comment thread under one trade. `GET /trades/:tradeId/comments`. | ⚪ |
| `fomo.getTrades` | fomo.family | Pages trades across the platform, optionally filtered to one trader. `GET… | ⚪ |
| `fomo.getTradingActivityFeed` | fomo.family | Pages raw trading activity rather than the composed social feed — the unfiltered… | ⚪ |
| `fomo.getTransfers` | fomo.family | Pages the signed-in trader's transfers, and the transfers exchanged with one other… | ⚪ |
| `fomo.getTransfersWith` | fomo.family | Pages the transfers between the signed-in trader and ONE other user — the two-party… | ⚪ |
| `fomo.getTrendingTokens` | fomo.family | Returns what is moving on fomo right now — the site's own trending ranking, which is a… | ⚪ |
| `fomo.getUser` | fomo.family | Returns one trader's public profile by fomo user id — the same record as… | 🟢 |
| `fomo.getUserByHandle` | fomo.family | Returns one trader's profile from their `@handle` — the half of a… | 🟢 |
| `fomo.getUserLeaderboardStanding` | fomo.family | Returns one trader's own rank and stats without walking the board — the narrow… | ⚪ |
| `fomo.getUserSpotlight` | fomo.family | Returns the highlighted trades and stats fomo pins to the top of one trader's profile… | ⚪ |
| `fomo.getUserSwaps` | fomo.family | Pages one trader's executed swaps — token, side, amount, USD value, price and realized… | ⚪ |
| `fomo.getUserTransfers` | fomo.family | Pages one trader's token transfers in and out — distinct from swaps, which are trades.… | ⚪ |
| `fomo.getUserWithdrawals` | fomo.family | Returns one trader's withdrawals off the platform for a given chain. `GET… | ⚪ |
| `fomo.getVerifiedTokens` | fomo.family | Returns the tokens fomo has verified — its own trust list, as distinct from the… | ⚪ |
| `fomo.getWatchlist` | fomo.family | Returns the tokens the signed-in trader is watching, and adds or removes one. | ⚪ |
| `fomo.postTokenThesis` | fomo.family | Publishes the signed-in trader's written thesis on a token. | ⚪ |
| `fomo.quoteSwap` | fomo.family | Prices a swap without executing it — input token, output token, amounts, price impact… | ⚪ |
| `fomo.quoteUsdcSwap` | fomo.family | Prices a swap denominated in USDC — the stablecoin path fomo's own buy flow uses… | ⚪ |
| `fomo.reactToComment` | fomo.family | Reacts to a comment under a trade. `POST /trades/comment/react`. | ⚪ |
| `fomo.reactToPost` | fomo.family | Reacts to, or removes a reaction from, a feed post. `POST /feed/react` and `POST… | ⚪ |
| `fomo.removeFromWatchlist` | fomo.family | Removes a token from the signed-in trader's watchlist. `DELETE /watchlist`. | ⚪ |
| `fomo.searchClans` | fomo.family | Searches clans by name. | ⚪ |
| `fomo.searchTokens` | fomo.family | Searches tokens by name, symbol or contract address and returns matching rows with… | ⚪ |
| `fomo.searchUsers` | fomo.family | Fuzzy-searches traders by handle or display name and returns matching profiles. | 🟢 |
| `fomo.sendTransfer` | fomo.family | Sends tokens from the signed-in user's wallet to another user or address. `POST… | ⚪ |
| `fomo.setAlertPreferences` | fomo.family | Writes the signed-in trader's push-notification preferences — which alerts fomo sends… | ⚪ |
| `fomo.subscribeTokenStream` | fomo.family | Subscribes to fomo's realtime channel and streams token updates as they happen — the… | ⚪ |
| `fomo.unfollow` | fomo.family | Unfollows a trader. `DELETE /follows`. | ⚪ |
| `fomo.unreactToComment` | fomo.family | Removes the signed-in trader's reaction from a comment. `POST /trades/comment/unreact`. | ⚪ |
| `fomo.unreactToPost` | fomo.family | Removes the signed-in trader's reaction from a feed post. `POST /feed/unreact`. | ⚪ |
| `fomo.useReferralCode` | fomo.family | Applies a referral code to the signed-in trader's account. `POST… | ⚪ |
| `forbes.getArticle` | forbes.com | Read the full content of a single article. | ⚪ |
| `forbes.getContributor` | forbes.com | Get a contributor's profile and list their articles. | ⚪ |
| `forbes.getVideo` | forbes.com | Get details of a Forbes Video. | ⚪ |
| `forbes.listArticlesByTopic` | forbes.com | List articles within a specific topic/category. | 🟢 |
| `forbes.listContributors` | forbes.com | List Forbes contributors and columnists. | ⚪ |
| `forbes.listNews` | forbes.com | List latest news articles. | 🟢 |
| `forbes.listTopics` | forbes.com | List all available topics/categories on Forbes. | 🟢 |
| `forbes.listVideos` | forbes.com | List video content from Forbes Video. | ⚪ |
| `forbes.searchArticles` | forbes.com | Search articles across Forbes by keyword. | ⚪ |
| `ford.buildAndPrice` | ford.com | Walks Ford's own build-and-price configurator for a model and year — choosing trim… | ⚪ |
| `ford.findDealers` | ford.com | Finds franchised Ford dealers near a US ZIP code — name, address, phone, coordinates… | 🟢 |
| `ford.getModelDetails` | ford.com | Reads one Ford model's showroom page — its trims with starting MSRP, key specs… | ⚪ |
| `ford.getOffers` | ford.com | Returns Ford's current incentives for one model near a US ZIP — cash back, APR… | 🟢 |
| `ford.getRecalls` | ford.com | Looks up the open safety recalls and field service actions on one specific Ford… | 🟢 |
| `ford.getVehicle` | ford.com | Reads one specific vehicle by VIN — its full option list, all Ford-approved images… | 🟢 |
| `ford.listColors` | ford.com | Lists the exterior paint options actually available for one Ford model near a ZIP code… | ⚪ |
| `ford.listNameplates` | ford.com | Lists every Ford model the inventory surface can be searched by — slug, display name… | 🟢 |
| `ford.searchInventory` | ford.com | Searches live VIN-level new-vehicle inventory at Ford dealers near a ZIP code… | ⚪ |
| `formax.getCartLink` | shop.formax.com | Looks up one part by its Store-API product id, confirms it is real and purchasable… | 🟢 |
| `formax.search` | shop.formax.com | Runs shop.formax.com's own WooCommerce Store API product search for a free-text query… | 🟢 |
| `forms_hubspot_com.findForms` | forms.hubspot.com | Fetches one page on a company's own site (e.g. their homepage or a contact/demo page)… | 🟢 |
| `forms_hubspot_com.getFormDefinition` | forms.hubspot.com | Reads a public HubSpot form's own field definitions off a forms.hubspot.com URL (or a… | 🟢 |
| `fortressbp.listProductTypes` | fortressbp.com | Reads the live Simplifinder form on /about/plan-your-project and returns its top-level… | 🟢 |
| `fortressbp.recommendProduct` | fortressbp.com | Walks Fortress's own Simplifinder decision tree (product type, then application and… | 🟢 |
| `fourseasonsyachts.getVoyage` | fourseasonsyachts.com | Reads one voyage's full itinerary — the day-by-day description, its region, its vessel… | 🟢 |
| `fourseasonsyachts.getVoyageSailing` | fourseasonsyachts.com | Reads the real, live departure for one voyageCode — exact embark/disembark ports and… | 🟢 |
| `fourseasonsyachts.searchVoyages` | fourseasonsyachts.com | Reads the live Voyage Finder inventory — every published sailing, its region, vessel… | 🟢 |
| `framebridge.getConfigurator` | framebridge.com | Reads one frame style's real live configurator inputs: every Size x Conveyance variant… | 🟢 |
| `framebridge.listFrameStyles` | framebridge.com | Searches Framebridge's real custom-framing catalog via the site's own Shopify… | 🟡 |
| `framebridge.priceConfiguration` | framebridge.com | Prices one exact build (frame style + size + conveyance + up to a primary and accent… | 🟢 |
| `fred.browseCategory` | fred.stlouisfed.org | Browses FRED's category tree the way fred.stlouisfed.org/categories does — the… | 🟢 |
| `fred.getRegionalData` | fred.stlouisfed.org | Reads geographic/regional breakdowns of a series — e.g. unemployment rate by U.S.… | ⚪ |
| `fred.getSeriesInfo` | fred.stlouisfed.org | Reads the metadata for one known series id — its full title, units (e.g. 'Percent'… | 🟢 |
| `fred.getSeriesObservations` | fred.stlouisfed.org | Reads the actual numbers for a FRED series — the dated observations themselves, oldest… | 🟢 |
| `fred.listReleases` | fred.stlouisfed.org | Lists FRED's economic data releases — the named publications data comes from (e.g.… | 🟢 |
| `fred.listSources` | fred.stlouisfed.org | Lists the agencies and organizations that originate FRED's data — the Bureau of Labor… | 🟢 |
| `fred.searchSeries` | fred.stlouisfed.org | Finds the economic data series that match a search text — GDP, CPI, unemployment rate… | 🟢 |
| `furniture.listCategories` | furniture.com | Lists furniture.com's real category taxonomy (Sofas & Couches, Mattresses, Platform… | 🟢 |
| `furniture.listFilterOptions` | furniture.com | Lists furniture.com's live filter facets and their real, currently offered values —… | 🟢 |
| `furniture.searchProducts` | furniture.com | Runs furniture.com's own product search for `query` (free text — matches room, type… | 🟢 |
| `g2.getProduct` | g2.com | Reads one product's `/products/<slug>/reviews` page for its published aggregate rating… | 🟢 |
| `g2.search` | g2.com | Runs G2's own site search (`/search?query=<q>`). `query` is any free-text string — a… | 🟢 |
| `gasbuddy.findCheapestNearby` | gasbuddy.com | Runs GasBuddy's own ZIP-radius station search and returns real, currently-reported… | 🟢 |
| `gazelle.findDevices` | gazelle.com | Every device gazelle.com takes in trade, off gazelle's own sitemap — name, brand… | 🟢 |
| `gazelle.getTradeInQuote` | gazelle.com | Reads gazelle.com's own current trade-in offer for a device named by NAME or by URL… | 🟢 |
| `geico.findAgent` | geico.com | Returns the GEICO local agents near a US location — each office's display name, the… | 🟢 |
| `geico.getAtvQuote` | geico.com | Returns a GEICO ATV, UTV or off-road vehicle rate — the machine, the rider, the ZIP… | ⚪ |
| `geico.getAutoQuote` | geico.com | Returns a GEICO car insurance rate for a driver — the ZIP, the vehicles, the drivers… | ⚪ |
| `geico.getBicycleQuote` | geico.com | Returns a bicycle insurance rate — the bike, its value, where it is stored and the… | ⚪ |
| `geico.getBoatQuote` | geico.com | Returns a boat or personal-watercraft rate for a vessel — its type, length, engine… | ⚪ |
| `geico.getBusinessOwnersQuote` | geico.com | Returns a business owner's policy (BOP) rate — the business's industry, revenue… | ⚪ |
| `geico.getClaimStatus` | geico.com | Returns the current status of a GEICO claim — where it is in the process, the adjuster… | ⚪ |
| `geico.getCollectorAutoQuote` | geico.com | Returns a classic or collector car rate — the vehicle, its agreed value, how it is… | ⚪ |
| `geico.getCommercialAutoQuote` | geico.com | Returns a commercial auto rate for a business — its vehicles, drivers, use class and… | ⚪ |
| `geico.getCondoQuote` | geico.com | Returns a condo or co-op owner's rate — the unit, its address, the personal-property… | ⚪ |
| `geico.getCyberLiabilityQuote` | geico.com | Returns a cyber liability rate for a business — its industry, revenue and the volume… | ⚪ |
| `geico.getEarthquakeQuote` | geico.com | Returns an earthquake rate for a property — the address, construction type and the… | ⚪ |
| `geico.getEventQuote` | geico.com | Returns a special-event liability rate — the event type, date, venue, headcount and… | ⚪ |
| `geico.getFloodQuote` | geico.com | Returns a flood insurance rate for a property — the address, its flood zone, elevation… | ⚪ |
| `geico.getGeneralLiabilityQuote` | geico.com | Returns a general liability rate for a business — its industry, revenue, payroll and… | ⚪ |
| `geico.getHomeownersQuote` | geico.com | Returns a homeowners rate for a property — the address, year built, construction… | ⚪ |
| `geico.getIdentityProtectionQuote` | geico.com | Returns identity-theft protection plan pricing — the plan tiers offered, what… | ⚪ |
| `geico.getJewelryQuote` | geico.com | Returns a scheduled-jewelry / valuable-articles rate — the item, its appraised value… | ⚪ |
| `geico.getLandlordQuote` | geico.com | Returns a landlord / rental-property (dwelling fire) rate — the property, its address… | ⚪ |
| `geico.getMedicalMalpracticeQuote` | geico.com | Returns a medical malpractice rate for a clinician or practice — specialty, state… | ⚪ |
| `geico.getMexicoAutoQuote` | geico.com | Returns a Mexico auto policy rate for a US driver taking a vehicle across the border —… | ⚪ |
| `geico.getMobileDeviceQuote` | geico.com | Returns mobile device protection pricing — the device, and the plan's monthly cost… | ⚪ |
| `geico.getMobileHomeQuote` | geico.com | Returns a manufactured or mobile home rate — the unit, its year, size, foundation and… | ⚪ |
| `geico.getMotorcycleQuote` | geico.com | Returns a GEICO motorcycle or moped rate for a rider — the bike's year, make and… | ⚪ |
| `geico.getOverseasQuote` | geico.com | Returns an overseas auto rate for a US service member or government employee stationed… | ⚪ |
| `geico.getPetQuote` | geico.com | Returns pet insurance rates for a pet — species, breed, age and ZIP — with each plan's… | ⚪ |
| `geico.getProfessionalLiabilityQuote` | geico.com | Returns a professional liability / errors-and-omissions rate for a business — its… | ⚪ |
| `geico.getRentersQuote` | geico.com | Returns what GEICO charges to insure the contents of one rented home — the amount due… | 🟢 |
| `geico.getRvQuote` | geico.com | Returns a GEICO RV rate — for a motorhome or a travel trailer, its class, value and… | ⚪ |
| `geico.getScooterQuote` | geico.com | Returns a GEICO scooter or moped rate — the machine, the rider and the ZIP — with the… | ⚪ |
| `geico.getTravelQuote` | geico.com | Returns a travel insurance rate for a trip — destination, dates, traveller ages and… | ⚪ |
| `geico.getUmbrellaQuote` | geico.com | Returns a personal umbrella liability rate — the limit asked for (typically $1M and… | ⚪ |
| `geico.getWorkersCompensationQuote` | geico.com | Returns a workers' compensation rate for an employer — its state, class codes, payroll… | ⚪ |
| `geico.listDiscounts` | geico.com | Returns the discounts GEICO publishes for a line of business — each discount's name… | 🟢 |
| `geico.listPartnerCompanies` | geico.com | Returns which insurance companies GEICO Insurance Agency actually places each line of… | 🟢 |
| `geico.recommendAutoCoverage` | geico.com | Returns GEICO's own recommended auto coverage limits and deductibles for a driver's… | ⚪ |
| `geico.recommendPropertyCoverage` | geico.com | Returns GEICO's own recommended home or renters coverage limits for a property — its… | ⚪ |
| `github.createComment` | github.com | Adds a comment to an issue or pull request. | ⚪ |
| `github.createIssue` | github.com | Creates a new issue on a repository. | ⚪ |
| `github.createPullRequest` | github.com | Creates a new pull request from a head branch to a base branch. | ⚪ |
| `github.createReview` | github.com | Submits a review on a pull request — approve, request changes, or comment. | ⚪ |
| `github.createReviewComment` | github.com | Adds an inline comment to a specific line in a pull request's diff. | ⚪ |
| `github.deleteComment` | github.com | Deletes a comment on an issue or pull request. | ⚪ |
| `github.getIssue` | github.com | Returns the full details of one issue — title, body, creator, assignees, labels… | 🟢 |
| `github.getOrganization` | github.com | Returns an organization's public metadata — name, description, location, website… | 🟢 |
| `github.getProfileReadme` | github.com | Reads a person's GitHub profile — name, company, website, bio, X handle — and the… | 🟢 |
| `github.getPullRequest` | github.com | Returns the full details of one pull request — title, body, creator, reviewers… | ⚪ |
| `github.getRepo` | github.com | Returns a public repository's own metadata — description, default branch… | 🟢 |
| `github.getSponsorPage` | github.com | Returns the public sponsor/funding page for a user, showing sponsorship options and… | ⚪ |
| `github.getUser` | github.com | Returns a person's public GitHub profile metadata — login, name, company, location… | 🟢 |
| `github.getUserRepositories` | github.com | Lists every public repository a user owns — description, fork/archived flags, default… | 🟢 |
| `github.listCommits` | github.com | Returns a repository's commit log — sha, author name and email, commit date, message… | 🟢 |
| `github.listIssues` | github.com | Lists issues on a repository, optionally filtered by state (open/closed), assignee… | 🟢 |
| `github.listMarketplaceActions` | github.com | Lists GitHub Actions available on the marketplace, optionally filtered by category or… | ⚪ |
| `github.listNotifications` | github.com | Lists the signed-in user's notifications — issues, pull requests, and discussions… | ⚪ |
| `github.listOrganizationRepositories` | github.com | Lists all repositories owned by an organization, with optional sorting and filtering. | ⚪ |
| `github.listPullRequests` | github.com | Lists pull requests on a repository, optionally filtered by state (open/closed/all)… | 🟢 |
| `github.listReleases` | github.com | Returns a public repository's release history — tag, name, draft/prerelease flags… | 🟢 |
| `github.listStarredRepositories` | github.com | Lists repositories the signed-in user has starred, with optional sorting and filtering. | ⚪ |
| `github.listTopics` | github.com | Lists repositories by topic, returning repositories tagged with a specific topic. | ⚪ |
| `github.listTrendingRepositories` | github.com | Lists repositories trending on GitHub by stars in a time window… | ⚪ |
| `github.mergePullRequest` | github.com | Merges a pull request into its base branch. | ⚪ |
| `github.searchCode` | github.com | Searches for code across public repositories by filename, language, code snippet… | ⚪ |
| `github.searchRepositories` | github.com | Searches across all public repositories by name, language, topic, star count and other… | 🟢 |
| `github.starRepository` | github.com | Adds a repository to the signed-in user's starred list. | ⚪ |
| `github.unstarRepository` | github.com | Removes a repository from the signed-in user's starred list. | ⚪ |
| `github.unwatchRepository` | github.com | Removes a repository from the signed-in user's watched list. | ⚪ |
| `github.updateComment` | github.com | Edits an existing comment on an issue or pull request. | ⚪ |
| `github.updateIssue` | github.com | Updates an issue's title, body, state (open/closed), assignees, labels, or milestone. | ⚪ |
| `github.updatePullRequest` | github.com | Updates a pull request's title, body, state (open/closed), base branch, or draft status. | ⚪ |
| `github.watchRepository` | github.com | Adds a repository to the signed-in user's watched/subscribed list for notifications. | ⚪ |
| `glama.search` | glama.ai | Searches Glama's MCP server directory (81,811+ servers as of 2026-09-04) and returns… | 🟢 |
| `glassesusa.getProduct` | glassesusa.com | Reads one product's own page — real live price (plus the crossed-out 'was' price when… | 🟢 |
| `glassesusa.search` | glassesusa.com | Runs GlassesUSA's own catalog search and returns matching frames with their live… | 🟡 |
| `gobrightwing.getJobDetails` | gobrightwing.com | Get full details for a specific job posting, including description, requirements, and… | 🟢 |
| `gobrightwing.listLocations` | gobrightwing.com | List all available job location options. | ⚪ |
| `gobrightwing.listWorkTypes` | gobrightwing.com | List all available work type options (Full-time, Contract, etc.). | ⚪ |
| `gobrightwing.searchJobs` | gobrightwing.com | Search Brightwing's live job listings by keyword, location, and work type. | 🟢 |
| `golf_com.findCourses` | golf.com | Searches GOLF.com's Course Finder by course name, city or ZIP and returns actual… | 🟢 |
| `golf_com.getCourse` | golf.com | Reads one Course Finder record: address, phone and the course's own tee-time/trip… | 🟢 |
| `goloadup.checkServiceAvailability` | goloadup.com | Checks whether and how LoadUp serves one ZIP code — in service, same-day allowed… | 🟢 |
| `goloadup.getPricingCatalog` | goloadup.com | Returns LoadUp's full current catalog of pickupable items (couches, mattresses… | 🟢 |
| `goloadup.getQuote` | goloadup.com | Prices an exact set of items at a real ZIP code against LoadUp's live pricing engine… | 🟢 |
| `goodway.getProduct` | goodway.com | Reads one pressure-washer product's detail page for its real, current price and… | 🟢 |
| `goodway.searchProducts` | goodway.com | Reads Goodway's pressure-washer catalog grid and returns every listed model with its… | 🟢 |
| `google_flights.getBookingOptions` | flights.google.com | Selects one result from the same search and reads its booking panel — who actually… | 🟢 |
| `google_flights.getPriceGraph` | flights.google.com | Answers "when is this route cheapest" — the price for every departure date across… | 🟢 |
| `google_flights.search` | flights.google.com | Runs the itinerary search and returns its result rows. | 🟢 |
| `google_maps.addMissingPlace` | google.com/maps | Add a business Google Maps does not list yet — name, address, category and hours —… | ⚪ |
| `google_maps.geocodeAddress` | google.com/maps | A street address or place name in, coordinates and the matching Google Maps place out. | 🟢 |
| `google_maps.getDirections` | google.com/maps | Route between two places — the site's own trip total (distance, duration… | 🟢 |
| `google_maps.getPlace` | google.com/maps | Everything Google Maps shows on one business's panel: name, a shareable url back to… | 🟢 |
| `google_maps.getPopularTimes` | google.com/maps | The "popular times" histogram for a place — how busy it is by hour and day, and how… | 🟢 |
| `google_maps.listMyContributions` | google.com/maps | The reviews, photos, answers and edits the signed-in person has contributed, with… | ⚪ |
| `google_maps.listPhotos` | google.com/maps | The photos Google Maps shows in a place's gallery panel — up to 20, each with a url… | 🟢 |
| `google_maps.listRelatedPlaces` | google.com/maps | Other businesses Google Maps lists "At this place" — the site's own label for a shared… | 🟢 |
| `google_maps.listReviews` | google.com/maps | The reviews Google Maps shows on a business's own panel — a handful, each with author… | 🟢 |
| `google_maps.listSavedPlaces` | google.com/maps | The places the signed-in caller saved — Favourites, Want to go, Starred and their own… | 🟢 |
| `google_maps.resolvePlaceUrl` | google.com/maps | A Google Maps link somebody pasted — a maps.app.goo.gl short link, a full /maps/place/… | 🟢 |
| `google_maps.reverseGeocode` | google.com/maps | A point in — the Plus Code and locality Google Maps shows for it out, the same string… | 🟢 |
| `google_maps.savePlace` | google.com/maps | Save a place to one of the signed-in person's own lists — the Maps equivalent of a… | ⚪ |
| `google_maps.searchNearby` | google.com/maps | searchPlaces anchored to a POINT instead of resolved from the query text — for a… | 🟢 |
| `google_maps.searchPlaces` | google.com/maps | The door every other Maps function chains off. | 🟢 |
| `google_maps.suggestPlaceEdit` | google.com/maps | Send Google a correction about a place — wrong hours, wrong address, permanently… | ⚪ |
| `google_maps.suggestPlaces` | google.com/maps | Google Maps' own autocomplete for a half-typed query — what the search box offers… | 🟢 |
| `google_maps.writeReview` | google.com/maps | Post a star rating and review text on a place, as the signed-in person — what a Local… | ⚪ |
| `google_news.findTopic` | news.google.com | The finder `getTopicHeadlines` is missing for an ENTITY topic — a company, a person, a… | ⚪ |
| `google_news.followTopic` | news.google.com | Follow a topic, a place or a publisher as the signed-in person — how a Google News… | ⚪ |
| `google_news.getForYou` | news.google.com | The personalised For You feed — what Google News picks for the signed-in person from… | ⚪ |
| `google_news.getFullCoverage` | news.google.com | Google News' Full Coverage for one story — every outlet reporting it, with each one's… | 🟢 |
| `google_news.getTopicHeadlines` | news.google.com | The headlines under any Google News topic id — the opaque key `/rss/topics/<id>`… | 🟢 |
| `google_news.listEditions` | news.google.com | The country and language editions Google News publishes — the hl / gl / ceid triple… | ⚪ |
| `google_news.listFollowedTopics` | news.google.com | The topics, places and publishers the signed-in person follows, as Google News'… | ⚪ |
| `google_news.listLocalHeadlines` | news.google.com | What is being reported in one place — the local-news edition for a city or region, by… | 🟢 |
| `google_news.listPublisherHeadlines` | news.google.com | Everything Google News has indexed from one publisher — a domain like reuters.com, or… | 🟢 |
| `google_news.listSavedArticles` | news.google.com | The articles the signed-in person saved for later — Google News' own reading list… | ⚪ |
| `google_news.listStories` | news.google.com | The story clusters Google News is running right now, as ids — the front page and any… | 🟢 |
| `google_news.listTopicHeadlines` | news.google.com | The latest headlines in one of Google News' own eight sections — World, Nation… | 🟢 |
| `google_news.listTopics` | news.google.com | The topics Google News' own home-page nav rail is offering today — the eight standing… | 🟢 |
| `google_news.resolveArticleUrl` | news.google.com | The publisher's real article URL behind a Google News link. | 🟢 |
| `google_news.saveArticle` | news.google.com | Save an article to the signed-in person's own reading list — the Google News… | ⚪ |
| `google_news.searchNews` | news.google.com | Everything Google News has indexed about a subject, across every publisher at once —… | 🟢 |
| `google_news.topStories` | news.google.com | What Google News is leading with right now — the front page, as ranked story CLUSTERS… | 🟢 |
| `google_translate.checkSpelling` | translate.google.com | Google Translate's own "Did you mean …" line — whether the text it was handed looks… | 🟢 |
| `google_translate.detectLanguage` | translate.google.com | Work out what language a string is written in, with Google's own confidence in the… | 🟢 |
| `google_translate.getAlternativeTranslations` | translate.google.com | The other ways Google would have translated the same thing — the list that appears… | 🟢 |
| `google_translate.getDefinitions` | translate.google.com | What a word MEANS, in its own language — every sense grouped by part of speech, each… | 🟢 |
| `google_translate.getSynonyms` | translate.google.com | Other words that mean the same thing, grouped by sense rather than thrown into one… | 🟢 |
| `google_translate.listHistory` | translate.google.com | What the signed-in person has translated recently, newest first — Google Translate's… | ⚪ |
| `google_translate.listLanguages` | translate.google.com | Every language this site supports — the table that turns a caller's "Portuguese" into… | 🟢 |
| `google_translate.listSavedPhrases` | translate.google.com | The phrases the signed-in person starred — Google Translate's own saved-phrase book… | ⚪ |
| `google_translate.lookupWord` | translate.google.com | The full "translations of <word>" panel for one word — every part of speech Google has… | 🟢 |
| `google_translate.romanize` | translate.google.com | A Latin-alphabet (or phonetic) rendering of the translation, or the source, printed… | 🟢 |
| `google_translate.savePhrase` | translate.google.com | Star a translation so it joins the signed-in person's saved phrases — the one write… | ⚪ |
| `google_translate.speak` | translate.google.com | Hear `args.text` spoken in `args.language`, as the MP3 the site's own speaker button… | 🟢 |
| `google_translate.translate` | translate.google.com | Turn text into another language — the whole point of the site, and the provider's main… | 🟢 |
| `google_translate.translateDocument` | translate.google.com | Translate a whole document — the Documents tab, which takes a PDF, Word or PowerPoint… | 🟢 |
| `google_translate.translateImage` | translate.google.com | Read the text in a picture and translate it — the Images tab, where a person points a… | 🟢 |
| `google_translate.translateWebPage` | translate.google.com | Read somebody else's web page in your own language — the Websites tab. | 🟢 |
| `google_translate.unsavePhrase` | translate.google.com | Take a phrase back out of the signed-in person's saved phrases — the undo for… | ⚪ |
| `google.search` | google.com | Runs a Google web search and returns the ranked results — title, destination url and… | ⚪ |
| `goremutual.getProductOverview` | goremutual.ca | Returns the public product overview for Gore Mutual's commercial property and casualty… | 🟢 |
| `gostoreit.findFacilities` | gostoreit.com | Searches Go Store It's public location results by a city, state, or ZIP and returns… | 🟢 |
| `gostoreit.getFacilityUnits` | gostoreit.com | Reads a public Go Store It facility URL's live rendered unit inventory: size… | 🟢 |
| `gotchacovered.getDesignStyleQuizQuestions` | gotchacovered.com | Reads the live 'What Design Style Am I?' quiz's real 6 questions and their option… | 🟢 |
| `gotchacovered.takeDesignStyleQuiz` | gotchacovered.com | Answers all 6 questions of Gotcha Covered's own Design Style Quiz and returns the… | 🟡 |
| `grainger.checkStock` | grainger.com | Checks real fulfillment availability for one item (itemNumber or url, same as… | 🟡 |
| `grainger.findBranch` | grainger.com | Finds nearby Grainger branch locations for a ZIP or address — hours, phone, and… | 🟢 |
| `grainger.getProduct` | grainger.com | Reads one product page in full — price, pack size/unit of measure, spec table… | 🟢 |
| `grainger.search` | grainger.com | Searches Grainger's industrial MRO catalog by keyword, returning matching products —… | 🟢 |
| `grainger.trackOrder` | grainger.com | Looks up the status of a placed order (order number plus account/email, no sign-in) —… | ⚪ |
| `grandwelcome.getRentalDetail` | grandwelcome.com | Reads one rental's own detail page in full — name, description, photos and the site's… | 🟢 |
| `grandwelcome.getRentalQuote` | grandwelcome.com | Runs the site's own real-time date-specific pricing engine for one property — rent… | 🟢 |
| `grandwelcome.listGrandwelcomeDestinations` | grandwelcome.com | The entry door: reads the site's own /sitemap.xml for every published destination page… | 🟢 |
| `grandwelcome.searchRentals` | grandwelcome.com | Runs Grand Welcome's own destination search (a real market slug like… | 🟢 |
| `greatlakesbrewing.getEGiftCardOptions` | store.greatlakesbrewing.com | Reads Great Lakes Brewing Co.'s live eGift-card denominations, permitted custom range… | 🟢 |
| `greatlakesbrewing.priceEGiftCard` | store.greatlakesbrewing.com | Calculates a Great Lakes Brewing Co. eGift-card total from a whole-dollar value and… | 🟢 |
| `greatlakesdentaltech.getProduct` | greatlakesdentaltech.com | Reads one product's real, current price and live stock status straight off its own… | 🟢 |
| `greatlakesdentaltech.search` | greatlakesdentaltech.com | Searches Great Lakes Dental Tech's own storefront catalog (~4,000 orthodontic/dental… | 🟢 |
| `gst_india.lookup` | services.gst.gov.in | Searches India's GST registry by GSTIN and returns the registrant's legal name… | 🟡 |
| `hamptonwaterwine.findNearbyRetailers` | hamptonwaterwine.com | Runs Hampton Water's own real-time Stockist store locator (the widget embedded on… | 🟢 |
| `handypro.checkServiceArea` | handypro.com | Checks whether a ZIP is served by a real local HandyPro franchisee and returns that… | 🟢 |
| `handypro.checkTechnicianAvailability` | handypro.com | Would find the next available technician slot for a category + ZIP via… | ⚪ |
| `handypro.createBooking` | handypro.com | Would confirm a HandyPro appointment and take Stripe payment via… | ⚪ |
| `handypro.searchServiceCategories` | handypro.com | Lists HandyPro's real service categories (grab bars, appliance install, TV mounting… | 🟢 |
| `hansons.bookEstimate` | hansons.com | Would submit the final booking (name/phone/email/address + chosen slot) and return the… | ⚪ |
| `hansons.checkAvailability` | hansons.com | Checks a ZIP code against Hansons' real Free Estimate scheduler and returns the actual… | 🟢 |
| `harmar.findCompatibleLifts` | harmar.com | The whole goal-flow in one call: takes a plain vehicle year/make/model and… | 🟡 |
| `harmar.getCompatibleLifts` | harmar.com | Runs the calculator's actual 'Lift Lookup' — given a model year, the calculator's own… | 🟡 |
| `harmar.searchChairModels` | harmar.com | Looks up every wheelchair/scooter model the calculator has data for under a given… | 🟡 |
| `harmar.searchVehicleModels` | harmar.com | Looks up every vehicle (make + model, with the calculator's own internal model id)… | 🟡 |
| `hauslabs.getHauslabsProduct` | hauslabs.com | Reads one product by its handle — every variant, its exact price, the image the… | 🟢 |
| `hauslabs.listHauslabsProducts` | hauslabs.com | Reads the live Haus Labs catalogue as the storefront publishes it — every product, its… | 🟢 |
| `hauslabs.runFoundationShadeFinder` | hauslabs.com | Resolves a buyer's Foundation Lab quiz answers to ONE specific shade: the variant… | 🟢 |
| `havenenergy.getPricingPrograms` | havenenergy.com | Returns every active battery incentive/pricing program Haven currently prices against… | 🟢 |
| `havenenergy.getPropertyDetails` | havenenergy.com | Given a US home address, returns the property attributes Haven's own /quote flow… | 🟢 |
| `havenenergy.listPricingPrograms` | havenenergy.com | Given { address }, returns the property attributes plus ONLY the programs that… | 🟢 |
| `haydenhomes.calculateAffordability` | hayden-homes.com | Runs Hayden Homes' "What Can I Afford?" mortgage affordability calculator… | ⚪ |
| `haydenhomes.listFloorPlans` | hayden-homes.com | Lists Hayden Homes' Build-On-Your-Land floor plan catalog (a template plan, not live… | ⚪ |
| `haydenhomes.searchQuickMoveIns` | hayden-homes.com | Runs Hayden Homes' quick move-in search against the site's own live inventory — real… | 🟢 |
| `hccts.checkApplicationAvailability` | hccts.org | Checks appointment booking availability and whether the online application form is… | 🟢 |
| `healthcare_gov.checkDrugCoverage` | healthcare.gov | Which of a household's available ACA Marketplace plans cover a specific prescription… | 🟢 |
| `healthcare_gov.checkEnrollmentEligibility` | healthcare.gov | Returns whether somebody can enrol in Marketplace coverage right now and until when —… | 🟢 |
| `healthcare_gov.checkProviderCoverage` | healthcare.gov | Returns which of a household's available Marketplace plans have a specific doctor… | 🟢 |
| `healthcare_gov.estimateEligibility` | healthcare.gov | Returns what a household actually qualifies for before it shops — the advance premium… | 🟢 |
| `healthcare_gov.estimateOutOfPocketCosts` | healthcare.gov | Returns the estimated TOTAL yearly cost of a plan for a household — premiums plus… | 🟢 |
| `healthcare_gov.findLocalHelp` | healthcare.gov | Returns the in-person help available near a ZIP — the navigators, certified… | 🟢 |
| `healthcare_gov.getCountiesByZip` | healthcare.gov | Returns the counties and CMS rating areas a ZIP code falls in — the resolution step… | ⚪ |
| `healthcare_gov.getPlan` | healthcare.gov | Returns the full detail for one Marketplace plan by its HIOS plan id — the… | 🟢 |
| `healthcare_gov.getPlanCrosswalk` | healthcare.gov | Returns what this year's plan becomes next year — the plan CMS maps an existing… | ⚪ |
| `healthcare_gov.getSmallBusinessPlans` | healthcare.gov | Returns the SHOP plans a small employer can offer — the group health and dental… | ⚪ |
| `healthcare_gov.getStateMarketplace` | healthcare.gov | Returns, for a US state, whether its residents buy ACA coverage through healthcare.gov… | ⚪ |
| `healthcare_gov.listIssuers` | healthcare.gov | Returns the insurance companies selling on the Marketplace in a given state and plan… | ⚪ |
| `healthcare_gov.searchDentalPlans` | healthcare.gov | Returns the STANDALONE dental plans a household can buy on the ACA Marketplace for a… | 🟢 |
| `healthcare_gov.searchDrugs` | healthcare.gov | Searches the Marketplace's drug reference by name and returns matching drugs with… | ⚪ |
| `healthcare_gov.searchPlans` | healthcare.gov | Returns the ACA Marketplace health plans available to a household — for a ZIP… | 🟢 |
| `healthcare_gov.searchProviders` | healthcare.gov | Searches the Marketplace's own provider directory by name and location and returns… | ⚪ |
| `healthie.getPracticeDetails` | gethealthie.com | Returns detailed information about a specific practice including providers, services… | ⚪ |
| `healthie.searchPractices` | gethealthie.com | Searches for therapists, coaches, dietitians, and other health practitioners by… | 🟢 |
| `healthie.searchProviders` | gethealthie.com | Searches for individual practitioners (therapists, coaches, dietitians) by… | ⚪ |
| `heatherwood.getFloorplan` | heatherwood.com | Reads one floor-plan type's own page: its real bed/bath/sqft spec and every currently… | 🟡 |
| `heatherwood.listFloorplans` | heatherwood.com | Lists every floor-plan TYPE Heritage Westminster publishes (studio through 3-bedroom… | 🟢 |
| `hellofresh.checkDeliveryAvailability` | hellofresh.com | Answers whether HelloFresh delivers to a given ZIP code, and which delivery days that… | 🟢 |
| `hellofresh.getPlanPricing` | hellofresh.com | Prices a plan configuration — meals per week x servings per meal — into the numbers a… | ⚪ |
| `hellofresh.getRecipe` | hellofresh.com | Reads one recipe page in full for a recipe URL or bare id that `getWeeklyMenu` (or the… | 🟢 |
| `hellofresh.getWeeklyMenu` | hellofresh.com | Reads the meals HelloFresh is offering for one delivery week — each meal's name… | 🟢 |
| `hellofresh.searchRecipes` | hellofresh.com | Searches HelloFresh's public recipe archive by keyword, ingredient, cuisine or diet… | 🟢 |
| `hellotend.bookAppointment` | hellotend.com | Submits the patient-info form and holds a Tend appointment for the caller. | ⚪ |
| `hellotend.listAvailableTimes` | hellotend.com | Returns the real appointment slots a (market, studio, service) triple currently has… | ⚪ |
| `hellotend.listMarkets` | hellotend.com | Lists every market Tend serves — the 6 metros the booking chain currently offers (New… | 🟢 |
| `hellotend.listServices` | hellotend.com | Lists the service codes a specific Tend studio offers (Dental Exam CLNCHK, Clear… | 🟢 |
| `hellotend.listStudios` | hellotend.com | Lists every Tend dental studio across all markets — 33+ locations with name, slug… | 🟢 |
| `higgsfield.estimateCost` | higgsfield.ai | Asks Higgsfield what one generation will cost, for exactly the parameters that would… | 🟢 |
| `higgsfield.generateImage` | higgsfield.ai | Turns a text prompt into finished images and waits for them, returning their URLs plus… | 🟡 |
| `higgsfield.generateVideo` | higgsfield.ai | Turns a text prompt — or a prompt plus an input image — into a finished video and… | 🟡 |
| `higgsfield.getRequestStatus` | higgsfield.ai | Checks one submitted generation by the request id a generate call returned, and hands… | 🟢 |
| `higgsfield.listModels` | higgsfield.ai | Lists every generation model Bowmark's Higgsfield account can actually call — id… | 🟢 |
| `highlandhomes.search` | highlandhomes.org | Searches Highland Homes' live new-construction inventory (Florida only) by city… | 🟢 |
| `hilton.findHotels` | hilton.com | Finds Hilton-family properties near a city, region, or landmark — the site's own… | ⚪ |
| `hilton.getAwardAvailability` | hilton.com | Searches Hilton's live award (Hilton Honors points) availability for a property and… | ⚪ |
| `hilton.getDeals` | hilton.com | Reads Hilton's currently published promotions and offers — the site's own "Offers"… | ⚪ |
| `hilton.getHotelDetails` | hilton.com | Reads one Hilton-family property in full — full address, phone number, brand tier… | ⚪ |
| `hilton.getReservation` | hilton.com | Reads an existing Hilton reservation the way the site's own "Find Your Reservation"… | ⚪ |
| `hilton.search` | hilton.com | Searches Hilton's live cash room availability for one property (a hilton.com URL… | 🟡 |
| `hipcamp.search` | hipcamp.com | Given a destination name (a national park, region, or city), returns campground… | 🟢 |
| `historymaker.getHome` | historymaker.com | Reads one quick-move-in home's full detail: address, current and original price… | 🟢 |
| `historymaker.listCommunities` | historymaker.com | Lists HistoryMaker's active DFW communities with city, price range, beds/baths range… | 🟢 |
| `historymaker.searchQuickMoveIns` | historymaker.com | Searches HistoryMaker's current Dallas/Fort Worth quick-move-in inventory by min/max… | 🟢 |
| `hobie.checkLocalAvailability` | hobie.com | Runs the site's own real-time 'Find it Locally' local-dealer-inventory lookup for one… | 🟢 |
| `hobie.listKayakModels` | hobie.com | Same as listModels, reshaped into { total_models, models } — for a caller asking how… | 🟢 |
| `hobie.listModelColors` | hobie.com | Reads one kayak model's own hobie.com product page for its real buildable colors, each… | 🟢 |
| `hobie.listModels` | hobie.com | Lists every real kayak model Hobie currently sells (slug, display name and its own… | 🟢 |
| `hodjapasha.getAvailability` | hodjapasha.com | Checks one show's own availability widget for a given date and party size, returning… | 🟢 |
| `hodjapasha.getShow` | hodjapasha.com | Reads one show's own detail page for its full description, adult/child pricing… | 🟢 |
| `hodjapasha.listShows` | hodjapasha.com | Reads every show hodjapasha.com's own booking widget lists — title, product id… | 🟢 |
| `holidaybuilders.getHomeDetail` | holidaybuilders.com | Reads one specific home's own listing page — full specs, floor-plan description… | 🟢 |
| `holidaybuilders.searchAvailableHomes` | holidaybuilders.com | Runs Holiday Builders' site-wide Available Homes search — every real move-in-ready or… | 🟢 |
| `hottopic.search` | hottopic.com | Searches hottopic.com's own storefront for a keyword and returns the real, priced… | 🟢 |
| `hunter.countEmails` | hunter.io | Returns how many email addresses Hunter holds for a domain, without returning the… | 🟢 |
| `hunter.discoverCompanies` | hunter.io | Finds companies matching an ideal-customer-profile description or a set of filters —… | ⚪ |
| `hunter.discoverPeople` | hunter.io | Finds individual people matching a profile — role, seniority, department, plus the… | ⚪ |
| `hunter.enrichCompany` | hunter.io | Returns the company behind a domain — industry, headcount band, founding year… | ⚪ |
| `hunter.enrichPerson` | hunter.io | Returns who is behind an email address (or a LinkedIn handle) — full name, current job… | ⚪ |
| `hunter.findDomain` | hunter.io | Turns a company NAME into the domain it actually sends mail from — the missing first… | 🟢 |
| `hunter.findEmail` | hunter.io | Returns the work email address of one named person at one company — given a first and… | ⚪ |
| `hunter.getEmailBreakdown` | hunter.io | Returns how the addresses Hunter holds for a domain SPLIT UP — personal versus generic… | ⚪ |
| `hunter.searchDomain` | hunter.io | Returns every email address Hunter knows at one company, addressed by the company's… | ⚪ |
| `hunter.searchMultiDomain` | hunter.io | Runs one search for contacts across every company matching a set of filters at once… | ⚪ |
| `hunter.verifyEmail` | hunter.io | Checks whether one specific email address will actually accept mail — Hunter's… | ⚪ |
| `hyatt.findHotels` | hyatt.com | Finds Hyatt properties near a city, region, or landmark — the site's own destination… | ⚪ |
| `hyatt.getAwardAvailability` | hyatt.com | Searches Hyatt's live award (World of Hyatt points) availability for a property and… | ⚪ |
| `hyatt.getDeals` | hyatt.com | Reads Hyatt's currently published promotions and offers — the site's own "Offers"… | ⚪ |
| `hyatt.getHotelDetails` | hyatt.com | Reads one Hyatt property in full — full address, phone number, brand tier, amenities… | ⚪ |
| `hyatt.getReservation` | hyatt.com | Reads an existing Hyatt reservation the way the site's own "View, Modify or Cancel a… | ⚪ |
| `hyatt.search` | hyatt.com | Searches Hyatt's live cash room availability the way its own booking widget does — a… | ⚪ |
| `ibuypower.getBenchmark` | ibuypower.com | Returns iBUYPOWER's own measured 3DMark Time Spy scores and per-game FPS at… | 🟢 |
| `ibuypower.getSystem` | ibuypower.com | Reads one base system's whole configurator — every component category, every option's… | 🟢 |
| `ibuypower.listLaptops` | ibuypower.com | Lists the Chimera gaming laptops with their configurations and prices — a headline nav… | 🟢 |
| `ibuypower.listPrebuilts` | ibuypower.com | Lists the RDY prebuilt gaming PCs — the ship-now, fixed-configuration SKUs, a… | 🟢 |
| `ibuypower.listSystems` | ibuypower.com | Lists every base configurator on the PC builder — AMD and Intel — with its slug, name… | 🟢 |
| `ibuypower.recommendGamingPc` | ibuypower.com | Recommends buildable PCs at or under a budget, drawn from both product lines —… | 🟢 |
| `ibuypower.searchGear` | ibuypower.com | Searches the Gear Store — peripherals, components and accessories sold loose rather… | ⚪ |
| `identitygroup.getSign` | identitygroup.com | Reads one sign product's full page: every mount-option variant, each with its own real… | 🟡 |
| `identitygroup.priceMountOption` | identitygroup.com | Resolves a free-text mount option (e.g. "wall mount", "fence post") to its exact… | 🟡 |
| `identitygroup.searchSigns` | identitygroup.com | Searches Identity Group's live signage catalog by brand or sign type and returns real… | 🟢 |
| `ihg.search` | ihg.com | Searches IHG's live hotel availability for a destination and date range, returning its… | 🟢 |
| `indeed.getCompanyDetails` | indeed.com | Fetches company details including ratings, reviews, and company information. | ⚪ |
| `indeed.getJobDetails` | indeed.com | Fetches complete details for a specific job listing including salary, company info… | ⚪ |
| `indeed.getSalaryDetails` | indeed.com | Retrieves detailed salary information for a specific job title and location. | ⚪ |
| `indeed.searchCompanies` | indeed.com | Searches for companies on Indeed by name or keyword. | ⚪ |
| `indeed.searchJobs` | indeed.com | Searches for job listings on Indeed with keyword and location filters. | ⚪ |
| `indeed.searchSalaries` | indeed.com | Searches salary data on Indeed by job title and location. | ⚪ |
| `inspirecommunities.searchHomes` | inspirecommunities.com | Searches live manufactured-home listings by market, home facts, price and sale or rent… | 🟢 |
| `instagram.getPosts` | instagram.com | Reads the most recent posts on one public Instagram profile — shortcode, permalink… | 🟡 |
| `instagram.getProfile` | instagram.com | Reads one public Instagram profile's own metadata — full name, biography, external… | 🟡 |
| `instagram.searchProfiles` | instagram.com | Searches Instagram for accounts matching a query and returns each match's username… | ⚪ |
| `insurify.estimateAutoCost` | insurify.com | Returns an estimated monthly car insurance cost for a driver profile — age, location… | ⚪ |
| `insurify.getAutoQuotes` | insurify.com | Returns real-time side-by-side car insurance rates from the carriers that will… | 🟢 |
| `insurify.getAutoWarrantyQuotes` | insurify.com | Returns extended vehicle service contract (auto warranty) prices for a vehicle's make… | ⚪ |
| `insurify.getBusinessQuotes` | insurify.com | Returns small-business insurance rates — general liability, a business owner's policy… | ⚪ |
| `insurify.getCarrierReview` | insurify.com | Returns Insurify's assessment of a named insurance company — its Insurify Quality… | 🟢 |
| `insurify.getCarrierUserReviews` | insurify.com | Returns Insurify's own paginated list of individual, named customer reviews for one… | 🟢 |
| `insurify.getCityRates` | insurify.com | Returns car insurance costs for a specific US city — the local average premium, the… | 🟢 |
| `insurify.getCommercialAutoQuotes` | insurify.com | Returns commercial auto rates for a business's vehicles, drivers and use class — the… | ⚪ |
| `insurify.getDeviceInsuranceQuotes` | insurify.com | Returns phone and device protection plan prices for a device's make, model and age… | ⚪ |
| `insurify.getHealthQuotes` | insurify.com | Returns individual and family health insurance options for a ZIP, household size and… | ⚪ |
| `insurify.getHomeQuotes` | insurify.com | Returns homeowners insurance rates from the carriers that will write a given property… | 🟡 |
| `insurify.getHomeStateRates` | insurify.com | Returns what homeowners insurance costs in a US state — the average annual premium… | ⚪ |
| `insurify.getHomeWarrantyQuotes` | insurify.com | Returns home warranty (home service contract) plan prices for a property's location… | ⚪ |
| `insurify.getInsightsReport` | insurify.com | Returns one Insurify Insights report's actual findings — the headline figures, the… | ⚪ |
| `insurify.getLifeQuotes` | insurify.com | Returns term and whole life insurance rates for an applicant's age, sex, health tier… | ⚪ |
| `insurify.getLifeRates` | insurify.com | Returns what life insurance costs on average by age, sex and policy shape — term rates… | ⚪ |
| `insurify.getMotorcycleQuotes` | insurify.com | Returns motorcycle insurance rates for a bike's make, model and year, the rider's age… | ⚪ |
| `insurify.getPetQuotes` | insurify.com | Returns pet insurance rates for a pet's species, breed, age and ZIP, with each plan's… | ⚪ |
| `insurify.getRentersQuotes` | insurify.com | Returns REAL renters insurance rates for one rented home from the carriers that will… | 🟢 |
| `insurify.getRentersStateRates` | insurify.com | Returns what renters insurance costs in a US state — the average premium and the… | ⚪ |
| `insurify.getStateRates` | insurify.com | Returns what car insurance actually costs across a US state — the state's average… | 🟢 |
| `insurify.getTravelQuotes` | insurify.com | Returns travel insurance rates for a trip's destination, dates, cost and the… | ⚪ |
| `insurify.getVehicleRates` | insurify.com | Returns what it costs to insure a specific vehicle — by make, model and year — with… | 🟢 |
| `insurify.listCarriers` | insurify.com | Returns the insurance companies Insurify rates and compares — the index that makes… | ⚪ |
| `insurify.listCities` | insurify.com | Returns the cities Insurify publishes rate pages for, per state — the index that says… | ⚪ |
| `insurify.listDiscounts` | insurify.com | Returns the car insurance discounts the site catalogues and which carriers offer them… | ⚪ |
| `insurify.listInsightsReports` | insurify.com | Returns the Insurify Insights reports the site publishes — the index of its original… | 🟢 |
| `insurify.listVehicles` | insurify.com | Returns the makes and models Insurify publishes insurance rates for — the index that… | ⚪ |
| `insurify.rankCarriers` | insurify.com | Returns one of Insurify's two national ranked shortlists of car insurance companies —… | 🟢 |
| `interiordefine.addToCart` | interiordefine.com | Hands the shopper a link that opens their exact configuration on Interior Define's own… | 🟢 |
| `interiordefine.getConfigurator` | interiordefine.com | Reads one product's whole customizer: every option category (fabric color, leg finish… | 🟢 |
| `interiordefine.priceConfiguration` | interiordefine.com | Prices a specific configuration (a choice per option category) against… | 🟢 |
| `interiordefine.searchProducts` | interiordefine.com | Searches Interior Define's custom-furniture catalog (sofas, sectionals, chairs) by… | 🟢 |
| `iproyal_reseller.extendPeriod` | apid.iproyal.com | Extends one order's term (POST /orders/{id}/extend) — spends real money; a new prepaid… | ⚪ |
| `iproyal_reseller.getAccountBalance` | apid.iproyal.com | Bowmark's own prepaid IPRoyal balance (GET /balance) — used to fence a lease purchase… | 🟢 |
| `iproyal_reseller.getCatalogue` | apid.iproyal.com | Reads IPRoyal's live reseller catalogue for one lease kind (GET /products) —… | 🟢 |
| `iproyal_reseller.getOrder` | apid.iproyal.com | Reads one order by IPRoyal's own id (GET /orders/{id}) — status, endpoints, expiry… | 🟢 |
| `iproyal_reseller.listOrders` | apid.iproyal.com | Every order on Bowmark's account for one product line (GET /orders, paged), including… | 🟢 |
| `iproyal_reseller.placeOrder` | apid.iproyal.com | Places one real IPRoyal order (POST /orders) — spends real money on Bowmark's shared… | ⚪ |
| `iproyal_reseller.quotePrice` | apid.iproyal.com | Prices one order before it is placed (GET /orders/calculate-pricing) — the vendor-cost… | 🟢 |
| `iproyal_reseller.setAutoExtend` | apid.iproyal.com | Sets the vendor's own auto-renew flag on one order (POST /orders/toggle-auto-extend) —… | ⚪ |
| `iproyal.getPlans` | iproyal.com | Reads IPRoyal's own published proxy pricing — residential, datacenter, ISP and mobile… | 🟢 |
| `islllc.searchCommunities` | islllc.com | Runs the site's own community locator at islllc.com/communities/ — given a US location… | 🟢 |
| `istanbulkart.getCardFees` | istanbulkart.istanbul | Reads the current İstanbulkart fee table — the purchase price of every card variant… | 🟢 |
| `istanbulkart.getTouristPassFares` | istanbulkart.istanbul | Reads the İstanbul City Card tariff table — the 1/3/5/7/15-day unlimited-ride visitor… | 🟢 |
| `ivoryhomes.searchFloorPlans` | ivoryhomes.com | Runs Ivory Homes' home-design floor-plan search against the site's own live inventory… | 🟢 |
| `iyc.checkCharterAvailability` | iyc.com | Reads one yacht's real charter calendar (the site's own booked/unavailable date list)… | 🟢 |
| `iyc.searchCharterYachts` | iyc.com | Searches IYC's live superyacht charter fleet by destination, guest count, length and… | 🟢 |
| `jasmine_dilucci.getApplicationFormSchema` | jasminedilucci.com | Returns the structure of the application funnel's DQ (disqualification) step: field… | 🟢 |
| `jcrew.addToCart` | jcrew.com | Adds a chosen J.Crew variant to a shopping bag. | ⚪ |
| `jcrew.browseCategory` | jcrew.com | Lists the products in one J.Crew category the way the site's own category pages do —… | 🟢 |
| `jcrew.checkVariantStock` | jcrew.com | Answers whether one specific colour and size of a J.Crew style is buyable right now —… | 🟢 |
| `jcrew.findStores` | jcrew.com | Finds physical J.Crew stores near a point the way the site's own store locator does —… | 🟢 |
| `jcrew.getCategory` | jcrew.com | Reads one J.Crew category by id — its display name, its parent and the full path back… | 🟢 |
| `jcrew.getProduct` | jcrew.com | Reads one J.Crew product in full the way its own product detail page does — given the… | 🟡 |
| `jcrew.getProducts` | jcrew.com | Reads several J.Crew products in one call, given a list of style ids — the batch form… | 🟢 |
| `jcrew.listCategories` | jcrew.com | Walks J.Crew's own category tree from a starting category down a requested number of… | 🟢 |
| `jcrew.listSearchRefinements` | jcrew.com | Lists the filters J.Crew itself offers for a given search or category — size, colour… | 🟢 |
| `jcrew.listSortOptions` | jcrew.com | Lists the sort orders J.Crew's own result pages offer — price low to high, newest… | 🟢 |
| `jcrew.searchProducts` | jcrew.com | Searches J.Crew's live catalogue the way its own search bar does — a free-text query… | 🟢 |
| `jcrew.startCheckout` | jcrew.com | Begins J.Crew's checkout for a filled bag. | ⚪ |
| `jcrew.suggestSearchTerms` | jcrew.com | Completes a partial search the way J.Crew's own type-ahead does — a word fragment 3-50… | 🟢 |
| `jennikayne.buildGiftCardLink` | jennikayne.com | Configures a gift card — amount, recipient name/email, an optional message, and a… | 🟢 |
| `jennikayne.getGiftCardOptions` | jennikayne.com | Reads the live digital gift-card product — every denomination from $50 to $1,000 with… | 🟢 |
| `joybird.getConfigurator` | joybird.com | Reads one product's full configurator — its dimensions, current price, active… | 🟢 |
| `joybird.listConfigurators` | joybird.com | Lists every configurable product Joybird currently sells — sofas, sectionals, chairs… | 🟢 |
| `joybird.priceConfigurator` | joybird.com | Prices an exact configuration for one product given the caller's swatch picks (one… | 🟢 |
| `joycefactorydirect.estimateWindowCost` | joycefactorydirect.com | Would answer all steps of Joyce's window-cost calculator and return the site's own… | ⚪ |
| `joycefactorydirect.getBathCalculatorOptions` | joycefactorydirect.com | Reads the live bath-remodel cost calculator's real questions and answer options… | 🟢 |
| `joycefactorydirect.getWindowCalculatorOptions` | joycefactorydirect.com | Reads the live window-cost calculator's real questions and answer options (styles… | 🟢 |
| `junkluggers.createBooking` | junkluggers.com | Would submit the widget's final step (name/phone/email/address) to create an actual… | ⚪ |
| `junkluggers.findFranchise` | junkluggers.com | Resolves the local Junkluggers franchise for a zip code — the same lookup the… | 🟢 |
| `junkluggers.getAvailability` | junkluggers.com | Real open 2-hour appointment windows for a zip, read straight off Junkluggers' live… | 🟢 |
| `junkluggers.getServiceTypes` | junkluggers.com | Lists the service types the zip's resolved franchise offers, each flagged isOnline for… | 🟢 |
| `justinwine.checkTastingAvailability` | justinwine.com | Checks real open reservation slots for a given date and party size at JUSTIN's… | ⚪ |
| `justinwine.listClubTiers` | justinwine.com | Lists the JUSTIN Wine Society club tiers (Red Wines, Red and White Wines, Isosceles… | 🟢 |
| `kaleidescape.findDealersNear` | kaleidescape.com | Finds Kaleidescape authorized dealers near a location — pass EITHER a 5-digit US zip… | 🟢 |
| `kalshi.getMarket` | kalshi.com | Reads one Kalshi market's full detail by its own ticker — title, subtitle, status… | 🟢 |
| `kalshi.getMarkets` | kalshi.com | Lists Kalshi's own live prediction-market contracts — each market's ticker, title… | 🟢 |
| `kayak.getBookingOptions` | kayak.com | For one result, reads who actually sells the fare and at what price, plus its baggage… | 🟢 |
| `kayak.search` | kayak.com | Runs the itinerary search on kayak.com and returns its result rows price-ascending. | 🟢 |
| `kayak.searchCars` | kayak.com | Runs the car-hire search on kayak.com and returns priced vehicles for a pickup… | 🟢 |
| `kayak.searchHotels` | kayak.com | Runs the stays search on kayak.com — the site's own second vertical — and returns… | 🟢 |
| `kbb.getTrimPricing` | kbb.com | Reads kbb.com's own per-trim MSRP and Fair Purchase Price for a make and model, e.g.… | 🟢 |
| `keepa.getProduct` | keepa.com | Reads Keepa's native Amazon product record, including its compact price-history… | 🟢 |
| `keepa.searchProducts` | keepa.com | Searches Keepa's Amazon product index by keyword through its documented Product Search… | ⚪ |
| `kingsdown.getBedMatchResult` | kingsdown.com | Runs Kingsdown's own bedMATCH diagnostic — the same multi-step questionnaire embedded… | 🟢 |
| `kitchentuneup.listCabinetStyles` | kitchentuneup.com | Reads Kitchen Tune-Up's own AI Design Tool catalog off its visualizer vendor's API —… | 🟢 |
| `kitchentuneup.visualizeKitchen` | kitchentuneup.com | Runs a photo through Kitchen Tune-Up's own AI Design Tool the way… | 🟢 |
| `kompan.getSparePartsDocuments` | kompan.com | Reads the real spare-parts / TÜV-certificate / maintenance-manual documents KOMPAN… | 🟢 |
| `kompan.searchPlaygroundSpareParts` | kompan.com | Single-object-argument search keyed by product_no that reports whether a playground… | 🟢 |
| `kompan.searchProduct` | kompan.com | Searches KOMPAN Master for a product number in one region and lists every real… | 🟢 |
| `kuiu.findKuiuSize` | kuiu.com | Maps a shopper's chest/waist measurements (inches) to KUIU's own men's apparel size… | 🟢 |
| `kuiu.getKuiuCheckoutLink` | kuiu.com | Resolves a product handle + chosen variant (camo pattern/color + size) to a real… | 🟢 |
| `kuiu.getKuiuProduct` | kuiu.com | Reads one product by its handle — every camo-pattern/size variant, its exact price and… | 🟢 |
| `kuiu.listKuiuProducts` | kuiu.com | Reads the live KUIU catalogue as the storefront publishes it — every hunting… | 🟢 |
| `kwworldwide.findContactForm` | kwworldwide.com | Fetches a kwworldwide.com page (defaults to the contact page) and recovers the HubSpot… | 🟢 |
| `labcorp.checkAppointmentAvailability` | labcorp.com | Checks open appointment slots at a given Patient Service Center for a chosen date… | ⚪ |
| `labcorp.findLocation` | labcorp.com | Finds nearby Labcorp Patient Service Centers (PSCs) by zip code or address, returning… | ⚪ |
| `labcorp.getTest` | labcorp.com | Returns one OnDemand test in full: price, what it screens for, sample type (blood… | 🟢 |
| `labcorp.search` | labcorp.com | Searches Labcorp's direct-to-consumer test catalog (Labcorp OnDemand) by keyword —… | 🟢 |
| `labcorp.trackOrder` | labcorp.com | Looks up the status of an existing Labcorp OnDemand order (ordered, kit shipped, kit… | ⚪ |
| `landmarkhw_com.getOrderFormOptions` | landmarkhw.com | Returns the property-type choices for a Landmark Home Warranty order in one supported… | 🟢 |
| `landmarkhw_com.listOrderStates` | landmarkhw.com | Lists the states where Landmark Home Warranty's public order form currently offers… | 🟢 |
| `lasikplus.findCenters` | lasikplus.com | Runs the site's own iSchedule center locator (lasikplus.com/ischedule/) — given a US… | 🟢 |
| `lasikplus.getAvailability` | lasikplus.com | Runs the site's own iSchedule appointment lookup for a given centerCode — returns the… | 🟢 |
| `legacyhomesal.getAvailability` | legacyhomesal.com | Reads a Legacy Homes AL community sales rep's real open tour-appointment slots… | 🟢 |
| `legacyhomesal.listCommunities` | legacyhomesal.com | Lists every Legacy Homes AL community (name, area, sales status) paired with the rep… | 🟢 |
| `letterboxd.film` | letterboxd.com | Reads one film's full record off its letterboxd page — title, year, directors, cast… | 🟢 |
| `letterboxd.memberDiary` | letterboxd.com | Reads a member's activity feed — every film they logged, with their star rating, the… | 🟢 |
| `letterboxd.memberFilms` | letterboxd.com | Lists the films a letterboxd member has logged, newest first, off their own films page… | 🟢 |
| `linkedin.acceptInvitation` | linkedin.com | Accepts a connection invitation the signed-in caller received, by the id and shared… | ⚪ |
| `linkedin.commentOnPost` | linkedin.com | Comments on a post as the signed-in caller. | ⚪ |
| `linkedin.createPost` | linkedin.com | Publishes a text post to the signed-in caller's feed, visible to anyone or to… | ⚪ |
| `linkedin.followCompany` | linkedin.com | Follows or unfollows a company page as the signed-in caller. | ⚪ |
| `linkedin.getArticle` | linkedin.com | Returns one long-form LinkedIn article or newsletter issue from its `/pulse/` URL —… | ⚪ |
| `linkedin.getCompany` | linkedin.com | Returns a company's public LinkedIn page from its company URL or handle — legal and… | 🟢 |
| `linkedin.getConversation` | linkedin.com | Reads one LinkedIn message thread in order, oldest first — who sent each message, its… | 🟢 |
| `linkedin.getEvent` | linkedin.com | Returns one public LinkedIn event from its URL — name, organizer, start and end time… | ⚪ |
| `linkedin.getHomeFeed` | linkedin.com | Reads the caller's LinkedIn home feed, newest first, with author, text, counts and URL… | 🟢 |
| `linkedin.getJob` | linkedin.com | Returns one job posting in full from its posting URL — title, employer and employer… | 🟢 |
| `linkedin.getLearningCourse` | linkedin.com | Returns one LinkedIn Learning course from its URL — title, author, duration, level… | ⚪ |
| `linkedin.getMyProfile` | linkedin.com | Returns the signed-in caller's own LinkedIn member record — name, headline, profile… | 🟢 |
| `linkedin.getPost` | linkedin.com | Returns one public LinkedIn post from its URL — the author, the post text, the time it… | ⚪ |
| `linkedin.getProfile` | linkedin.com | Returns the public professional record of one person from their profile URL — full… | 🟢 |
| `linkedin.getProfileDetails` | linkedin.com | Returns one member's full profile as a signed-in member sees it — headline, the About… | 🟢 |
| `linkedin.getProfileViews` | linkedin.com | Returns "who viewed your profile" for the caller: the view count LinkedIn reports and… | 🟢 |
| `linkedin.getSchool` | linkedin.com | Returns a school or university's public LinkedIn page from its URL — name, type… | ⚪ |
| `linkedin.ignoreInvitation` | linkedin.com | Ignores a connection invitation the signed-in caller received, without telling the… | ⚪ |
| `linkedin.listCompanyEmployees` | linkedin.com | Lists people who give a company as their current employer — from its LinkedIn URL… | 🟢 |
| `linkedin.listCompanyJobs` | linkedin.com | Returns the open roles a single named company is currently advertising, as a list of… | ⚪ |
| `linkedin.listConnections` | linkedin.com | Lists the caller's first-degree connections, most recently connected first, with each… | 🟢 |
| `linkedin.listConversations` | linkedin.com | Lists the caller's LinkedIn message threads, most recent first, with the other… | 🟢 |
| `linkedin.listInvitations` | linkedin.com | Lists the connection invitations the caller has received and not yet answered — who… | 🟢 |
| `linkedin.listSentInvitations` | linkedin.com | Lists the connection invitations the caller has sent that are still pending — who each… | 🟢 |
| `linkedin.reactToPost` | linkedin.com | Reacts to a post as the signed-in caller — like, celebrate, support, love, insightful… | ⚪ |
| `linkedin.searchCompanies` | linkedin.com | Searches LinkedIn's companies by name or keyword and returns 10 ranked companies per… | 🟢 |
| `linkedin.searchJobs` | linkedin.com | Returns the job postings matching a search — keywords, location and how recently the… | 🟢 |
| `linkedin.searchLearningCourses` | linkedin.com | Returns LinkedIn Learning courses matching a search — a topic, a skill, a software… | ⚪ |
| `linkedin.searchMembers` | linkedin.com | LinkedIn's own people search, run as the caller: keywords plus optional filters —… | 🟢 |
| `linkedin.searchPeople` | linkedin.com | Finds LinkedIn members by name and returns each match's full public profile. | 🟡 |
| `linkedin.searchPosts` | linkedin.com | Searches LinkedIn posts by keyword and returns them with author, text, how long ago… | 🟢 |
| `linkedin.searchServiceProviders` | linkedin.com | Returns the LinkedIn members who sell a given professional service — accountants… | ⚪ |
| `linkedin.sendConnectionRequest` | linkedin.com | Sends a connection invitation from the signed-in caller to a member, with an optional… | ⚪ |
| `linkedin.sendMessage` | linkedin.com | Sends a LinkedIn message as the signed-in caller — into an existing thread, or to a… | ⚪ |
| `linkedin.withdrawInvitation` | linkedin.com | Withdraws a connection invitation the signed-in caller sent and is still pending. | ⚪ |
| `liquiddeath.addToCart` | liquiddeath.com | Builds a filled cart for the shopper to open — cartUrl lands on the store's own cart… | 🟢 |
| `liquiddeath.getCart` | liquiddeath.com | Reads a cart the shopper already has, by its id — line items, quantities, per-line and… | 🟢 |
| `liquiddeath.getProduct` | liquiddeath.com | Reads one product by handle — every variant, its exact price, its SKU and whether that… | 🟢 |
| `liquiddeath.listProducts` | liquiddeath.com | Lists products from the catalogue without a search term, supporting the same limit… | 🟢 |
| `liquiddeath.searchPolicies` | liquiddeath.com | Answers questions about shipping, returns, subscriptions and the store's own FAQs… | ⚪ |
| `liquiddeath.searchProducts` | liquiddeath.com | Searches the live catalogue and returns matching products with their real variants… | 🟢 |
| `liquidspace.search` | liquidspace.com | Reads LiquidSpace's own city-listing page for a US city/state and returns every… | 🟢 |
| `littlewordsproject.getLittleWordsProjectCheckoutLink` | littlewordsproject.com | Resolves a product handle + chosen options (bead pattern / letter color / size… | 🟢 |
| `littlewordsproject.getLittleWordsProjectProduct` | littlewordsproject.com | Reads one custom-bracelet product by its handle — every bead-pattern/letter-color/size… | 🟢 |
| `littlewordsproject.listLittleWordsProjectCollections` | littlewordsproject.com | The entry door: reads the storefront's own published collection index… | 🟢 |
| `littlewordsproject.listLittleWordsProjectProducts` | littlewordsproject.com | Reads a Little Words Project collection's live catalogue as the storefront publishes… | 🟢 |
| `lmstudio.getDoc` | lmstudio.ai | Fetches one lmstudio.ai/docs/... documentation page and returns its title and body… | 🟢 |
| `lmstudio.listDocPages` | lmstudio.ai | Lists every documentation page lmstudio.ai publishes under /docs — url and the page's… | 🟢 |
| `lonelyplanet.getBestInTravel` | lonelyplanet.com | Reads Lonely Planet's annually curated 'Best in Travel' list — the destinations and… | ⚪ |
| `lonelyplanet.getDestinationGuide` | lonelyplanet.com | Reads one destination's guide page (e.g. lonelyplanet.com/destinations/italy) — its… | ⚪ |
| `lonelyplanet.search` | lonelyplanet.com | Searches lonelyplanet.com's site-wide index — destinations, articles, curated trip… | 🟢 |
| `lonelyplanet.searchGuidebooks` | lonelyplanet.com | Searches Lonely Planet's guidebook catalog (destination guides, phrasebooks, planning… | ⚪ |
| `lonelyplanet.searchTrips` | lonelyplanet.com | Browses Lonely Planet's ready-to-book curated multi-day itineraries — trips 'crafted… | ⚪ |
| `louvershop.findLocalDealer` | louvershop.com | Looks up the Louver Shop dealer/branch that covers a US ZIP — the same ZIP-gate lookup… | 🟢 |
| `louvershop.requestConsultation` | louvershop.com | Would submit the site's actual 'Free, No-Obligation In-Home Design Consultation'… | ⚪ |
| `lovelybride.getAvailableSlots` | lovelybride.com | Reads the real open appointment slots for one store, one appointment type and one date… | 🟢 |
| `lovelybride.getStoreAppointmentTypes` | lovelybride.com | Reads one store's real, currently-bookable BridalLive appointment types — each with… | 🟢 |
| `lovelybride.listStores` | lovelybride.com | Lists every Lovely Bride store the site's own store locator links — 19 across the US… | 🟢 |
| `lufthansa.getBaggageAllowance` | lufthansa.com | Reads the checked and carry-on baggage allowance for a fare class and route — bag… | 🟢 |
| `lufthansa.getFlightStatus` | lufthansa.com | Looks up a flight's real-time status by flight number and date — scheduled vs.… | 🟢 |
| `lufthansa.getSeatMap` | lufthansa.com | Reads the seat map for a specific flight — cabin layout, which seats are open… | ⚪ |
| `lufthansa.retrieveBooking` | lufthansa.com | Reads an existing reservation by confirmation code (PNR) and the passenger's last name… | ⚪ |
| `lufthansa.search` | lufthansa.com | Searches flights for an origin/destination/date (and cabin) and returns the available… | ⚪ |
| `luggageforward.getQuoteOptions` | luggageforward.com | Reads Luggage Forward's live public luggage-shipping price grid and calculates every… | 🟢 |
| `luggageforward.listLuggageTypes` | luggageforward.com | Lists the live luggage categories and their limits from Luggage Forward's public quote… | 🟢 |
| `lululemon.addToCart` | shop.lululemon.com | Puts a chosen SKU — one colourway in one size — into a guest cart on lululemon.com… | ⚪ |
| `lululemon.checkStoreStock` | shop.lululemon.com | Answers whether a specific size and colour is on the shelf at a named lululemon store… | ⚪ |
| `lululemon.findStores` | shop.lululemon.com | Finds physical lululemon stores near a place the way the site's own store locator… | ⚪ |
| `lululemon.getCart` | shop.lululemon.com | Reads back what is in the guest cart across several calls — line items, quantities… | ⚪ |
| `lululemon.getProduct` | shop.lululemon.com | Reads one product's full configurator the way its product page presents it — every… | 🟢 |
| `lululemon.getProductAttributes` | shop.lululemon.com | Reads what lululemon publishes ABOUT a garment rather than what it costs: the category… | 🟡 |
| `lululemon.getProducts` | shop.lululemon.com | Reads the full configurator for MANY products in one call — the shape for ranking a… | 🟢 |
| `lululemon.getReviews` | shop.lululemon.com | Reads the customer reviews on one product — rating, title, body, number of helpful… | 🟢 |
| `lululemon.getSimilarProducts` | shop.lululemon.com | Returns the products lululemon's own product pages recommend alongside one product —… | 🟢 |
| `lululemon.getSizeGuide` | shop.lululemon.com | Returns lululemon's size chart for a garment — the body measurements each numeric size… | ⚪ |
| `lululemon.listCategory` | shop.lululemon.com | Browses one category the way the site's own navigation does — Women's Leggings, Men's… | ⚪ |
| `lululemon.search` | shop.lululemon.com | Searches lululemon's catalogue by free text the way its own search bar does, returning… | 🟢 |
| `maersk.track` | maersk.com | Tracks a container or bill-of-lading number on Maersk's documented Track & Trace API… | 🟢 |
| `maidenhome.getProduct` | maidenhome.com | Reads one configurable product's complete Size x Wood Finish variant grid — every… | 🟢 |
| `maidenhome.resolveVariant` | maidenhome.com | Resolves a free-text product + size + wood finish to the exact priced variant and its… | 🟢 |
| `maidenhome.searchConfigurations` | maidenhome.com | Lists every Maiden Home product configurable by Size x Wood Finish (sofas… | 🟢 |
| `mailchimp.getPlanPricing` | mailchimp.com | Reads mailchimp.com/pricing/marketing/'s own plan lineup (Free, Essentials, Standard… | 🟢 |
| `marketplace_visualstudio.getExtensionStats` | marketplace.visualstudio.com | Looks up one VS Code extension by its "publisher.extension" id (the id shown in the… | 🟢 |
| `marketplace_visualstudio.searchExtensions` | marketplace.visualstudio.com | Full-text searches the VS Code Marketplace for extensions matching a query, ordered by… | 🟢 |
| `marriott.findHotels` | marriott.com | Lists Marriott-family properties published on the site's own hotel-sitemap directory… | 🟢 |
| `marriott.getAwardAvailability` | marriott.com | Searches Marriott's live award (Marriott Bonvoy points) availability for a property… | ⚪ |
| `marriott.getDeals` | marriott.com | Reads Marriott's currently published promotions and offers — the site's own "Deals"… | ⚪ |
| `marriott.getHotelDetails` | marriott.com | Reads one Marriott-family property in full — full address, phone number, brand… | ⚪ |
| `marriott.getReservation` | marriott.com | Reads an existing Marriott reservation the way the site's own "Find Reservations" page… | ⚪ |
| `marriott.search` | marriott.com | Searches Marriott's live cash room availability the way its own booking widget does —… | ⚪ |
| `mcdonalds.checkDeliveryAvailability` | mcdonalds.com | Answers whether McDelivery (McDonald's own delivery, fulfilled through Uber Eats /… | ⚪ |
| `mcdonalds.findStores` | mcdonalds.com | Finds McDonald's restaurants near a location — pass EITHER a 5-digit US `zip`… | 🟢 |
| `mcdonalds.getDeals` | mcdonalds.com | Reads the current public deals, value-menu items and promotions McDonald's is… | ⚪ |
| `mcdonalds.getMenu` | mcdonalds.com | Returns McDonald's national menu — every item's internal id, name, the category it is… | 🟢 |
| `mcdonalds.getMenuItem` | mcdonalds.com | Returns one McDonald's menu item in full — its marketing name, description, FDA-style… | 🟢 |
| `mcp_registry.search` | registry.modelcontextprotocol.io | Lists or searches the official MCP server registry (registry.modelcontextprotocol.io)… | 🟢 |
| `mcp_so.search` | mcp.so | Searches the mcp.so directory of published MCP servers by a slug/name substring and… | 🟢 |
| `medicalguardian.assessFallRisk` | medicalguardian.com | Runs Medical Guardian's own fall-risk scoring — 9 yes/no + one 3-way activity-level… | 🟢 |
| `medicalguardian.getRiskAssessmentQuestions` | medicalguardian.com | Returns the 9 scored questions from Medical Guardian's own fall-risk assessment… | 🟢 |
| `medicare.checkCoverage` | medicare.gov | Answers the question this site gets asked most: is a specific test, item or service… | ⚪ |
| `medicare.estimateDrugCosts` | medicare.gov | Returns what each available plan would actually cost somebody for a YEAR given the… | ⚪ |
| `medicare.findDialysisFacilities` | medicare.gov | Returns the Medicare-certified dialysis facilities near a location — each with its… | ⚪ |
| `medicare.findDoctors` | medicare.gov | Searches Medicare's Care Compare directory for doctors and clinicians by name… | 🟢 |
| `medicare.findEquipmentSuppliers` | medicare.gov | Returns the suppliers near a ZIP that Medicare will pay for durable medical equipment… | ⚪ |
| `medicare.findHomeHealthAgencies` | medicare.gov | Returns the Medicare-certified home health agencies serving a ZIP — each with its… | ⚪ |
| `medicare.findHospices` | medicare.gov | Returns the Medicare-certified hospice providers serving a location — each with its… | ⚪ |
| `medicare.findHospitals` | medicare.gov | Returns the hospitals near a location with the quality information CMS publishes about… | 🟢 |
| `medicare.findLocalHelp` | medicare.gov | Returns the free, unbiased help available to somebody in their own state — the State… | ⚪ |
| `medicare.findNursingHomes` | medicare.gov | Returns the Medicare- and Medicaid-certified nursing homes near a location with the… | 🟢 |
| `medicare.findRehabAndLongTermCareFacilities` | medicare.gov | Returns the inpatient rehabilitation facilities and long-term care hospitals near a… | ⚪ |
| `medicare.getCosts` | medicare.gov | Returns what Medicare itself costs in a given year — the Part A premium (and who pays… | 🟢 |
| `medicare.getEnrollmentPeriods` | medicare.gov | Returns when somebody can actually enrol in or change Medicare coverage, and what… | ⚪ |
| `medicare.getPlan` | medicare.gov | Returns the full detail for one Medicare plan by its CMS contract/plan identifier —… | 🟢 |
| `medicare.searchDrugPlans` | medicare.gov | Returns the standalone Medicare Part D prescription drug plans sold in a ZIP's Part D… | 🟢 |
| `medicare.searchDrugs` | medicare.gov | Searches Medicare's own drug reference by name and returns matching drugs with the… | ⚪ |
| `medicare.searchHealthPlans` | medicare.gov | Returns the Medicare Advantage (Part C) plans somebody can actually buy for a ZIP and… | ⚪ |
| `medicare.searchMedigapPlans` | medicare.gov | Returns the Medigap (Medicare Supplement) plan TYPES sold in somebody's ZIP's state… | 🟢 |
| `medicare.searchPharmacies` | medicare.gov | Returns the pharmacies near a ZIP that a given Medicare drug plan works with, and on… | ⚪ |
| `mercadolibre.getBestSellers` | mercadolibre.com | Reads the site's own "Más vendidos" (best sellers) ranked feed —… | ⚪ |
| `mercadolibre.getProduct` | mercadolibre.com | Reads one listing in full — price, condition, description, images, seller and… | ⚪ |
| `mercadolibre.getSellerReputation` | mercadolibre.com | Looks up one seller's reputation — level, percent positive, sales volume, the site's… | ⚪ |
| `mercadolibre.getShippingEstimate` | mercadolibre.com | Estimates delivery cost and time for a specific listing to a destination postal code —… | ⚪ |
| `mercadolibre.listCategories` | mercadolibre.com | Reads the marketplace's category tree for one country site (electronics, home… | ⚪ |
| `mercadolibre.search` | mercadolibre.com | Searches or browses the marketplace by keyword, returning matching listings with… | ⚪ |
| `mercari.search` | mercari.com | Runs a Mercari US keyword search the way mercari.com's own search box does and returns… | 🟢 |
| `mergify.pullStatus` | mergify.com | One pull request's own position in the merge queue — queued-at time, queue position… | ⚪ |
| `mergify.queueStatus` | mergify.com | The live state of a repo's Mergify merge queue — every active batch (its status code… | 🟢 |
| `meteofrance.getMarineWindForecast` | meteofrance.com | Marine wind forecast for French coastal regions, including wind speed, gusts, and… | 🟢 |
| `microcenter.checkStock` | microcenter.com | Answers whether a specific item is buyable right now, rather than merely listed at a… | 🟡 |
| `microcenter.checkStoreStock` | microcenter.com | Answers which Micro Center store has an item on the shelf today — the one thing this… | 🟡 |
| `microcenter.getProduct` | microcenter.com | Reads one product page in full — the identity search cannot give you (SKU… | 🟡 |
| `microcenter.search` | microcenter.com | Searches microcenter.com for a part and returns matching rows cheapest-first, filtered… | 🟢 |
| `millisaraylar.getPalaces` | millisaraylar.gov.tr | Reads the full palace/kiosk/pavilion/museum list off millisaraylar.gov.tr's own site… | 🟢 |
| `millisaraylar.getTicketPrices` | millisaraylar.gov.tr | Matches a name against millisaraylar.gov.tr's own ticket-purchase location list and… | 🟢 |
| `millisaraylar.getVisitingHours` | millisaraylar.gov.tr | Matches a name against getPalaces()'s own listing and reads that site's closed day(s)… | 🟢 |
| `minimax.getDocs` | platform.minimax.io | Resolves a topic (e.g. "text generation", "mcp guide", "voice clone") against… | 🟢 |
| `minted.getCardOptions` | minted.com | Would return one product's actual named paper/format/foil choices (not just the price… | ⚪ |
| `minted.priceCard` | minted.com | Prices one exact personalized-card configuration (design + paper + print method + foil… | 🟢 |
| `minted.searchCards` | minted.com | Browses one of Minted's real photo-card/stationery categories (e.g.… | 🟢 |
| `mixbook.getActivePromotion` | mixbook.com | Reads the real, currently-active sitewide coupon banner (description, code, terms URL). | 🟢 |
| `mixbook.getPhotoBookPriceTable` | mixbook.com | Returns Mixbook's full published rate card: every cover/paper x size combination, the… | 🟢 |
| `mixbook.getProductPrice` | mixbook.com | Reads one theme's real product page and returns Mixbook's own server-computed price… | 🟢 |
| `mixbook.priceCustomBook` | mixbook.com | Prices an exact custom photo book (binding, cover, paper, size, page count) against… | 🟢 |
| `mixbook.searchPhotoBookThemes` | mixbook.com | Searches Mixbook's real 750+ photo-book theme catalog (Mixbook's own public Algolia… | 🟢 |
| `mobygames.searchByTitle` | mobygames.com | Search for video games by title and return matching releases with box art cover image… | ⚪ |
| `modernize_com.getQuoteFlow` | modernize.com | Reads modernize.com's own multi-step homeowner quote wizard for one project type and… | 🟢 |
| `modernize_com.listProjectTypes` | modernize.com | Reads modernize.com's own trade radio group — every home-improvement project type its… | 🟢 |
| `modularclosets.getKitConfigurator` | modularclosets.com | Reads one kit's real option tree (Color, Width, and — on some kits — a third option… | 🟢 |
| `modularclosets.priceKitConfiguration` | modularclosets.com | Resolves one exact kit build (a handle + a chosen value for every real option on that… | 🟢 |
| `modularclosets.searchClosetKits` | modularclosets.com | Searches Modular Closets' real pre-configured kit catalog (closets, wardrobes… | 🟢 |
| `momondo.getBookingOptions` | momondo.com | For one result, reads who actually sells the fare and at what price — the provider… | 🟢 |
| `momondo.search` | momondo.com | Runs the itinerary search on momondo.com and returns its result rows price-ascending. | 🟢 |
| `momondo.searchCars` | momondo.com | Runs the car-hire search on momondo.com and returns priced vehicles for a pickup… | 🟢 |
| `momondo.searchHotels` | momondo.com | Runs the stays search on momondo.com — the site's own second vertical — and returns… | ⚪ |
| `mossyoak.getMossyoakCheckoutLink` | mossyoak.com | Resolves a product handle + chosen variant (camo pattern + size) to a real… | 🟢 |
| `mossyoak.getMossyoakProduct` | mossyoak.com | Reads one product by its handle — every camo-pattern/size variant, its exact price and… | 🟢 |
| `mossyoak.listMossyoakProducts` | mossyoak.com | Reads the live Mossy Oak catalogue as the storefront publishes it — every camo-apparel… | 🟢 |
| `mossyoak.searchProducts` | mossyoak.com | Reads the same live catalogue listMossyoakProducts does and filters it by product type… | 🟢 |
| `msc.trackShipment` | msc.com | Track an MSC shipment — get real-time status, location, and delivery date for… | 🟢 |
| `msn.getArticle` | msn.com | Reads one MSN article's full text, byline, publish time and images off its own article… | 🟢 |
| `msn.getMarketSummary` | msn.com | Reads the major index levels (S&P 500, Dow, Nasdaq) and their day's change off MSN… | ⚪ |
| `msn.getSectionFeed` | msn.com | Returns the current top-stories feed the way msn.com/en-us/<section> does for a… | 🟢 |
| `msn.getStockQuote` | msn.com | Reads one ticker's current price, change and key stats off MSN Money the way… | ⚪ |
| `msn.getTopStories` | msn.com | Returns the top stories the MSN front page is showing right now, the way www.msn.com… | 🟢 |
| `msn.getWeatherForecast` | msn.com | Reads the multi-day forecast for a named city off MSN Weather the way… | ⚪ |
| `msn.listSavedArticles` | msn.com | Lists the articles the signed-in caller has saved to their MSN reading list — the… | ⚪ |
| `msn.saveArticle` | msn.com | Adds an article to the signed-in caller's MSN reading list — the write half of… | ⚪ |
| `msn.searchNews` | msn.com | Searches MSN's own aggregated news index the way its front-page search does and… | 🟢 |
| `municipal_recreation_fees_fetcher.getFeeSchedule` | fredericton.ca, dieppe.ca | Retrieves annual recreation centre membership fees (adult and family passes) for a New… | 🟢 |
| `muze_gov_tr.getVisitingHours` | muze.gov.tr | Matches a museum name against muze.gov.tr's own highlight listing and reads that… | 🟢 |
| `my_auroramedicalspa_com.getProviders` | my.auroramedicalspa.com | Lists the providers who can perform one service at one location, including the site's… | 🟢 |
| `my_auroramedicalspa_com.getServiceCategories` | my.auroramedicalspa.com | Lists the treatment categories one location offers online (Botox, Injectable… | 🟢 |
| `my_auroramedicalspa_com.getServices` | my.auroramedicalspa.com | Reads the live bookable services in one category at one location — name, starting… | 🟢 |
| `my_auroramedicalspa_com.listLocations` | my.auroramedicalspa.com | Lists every Aurora Medical Spa location (9 today, across Colorado, Missouri and Texas)… | 🟢 |
| `myollie.getMealPlan` | myollie.com | Computes Ollie's personalized fresh-food meal plan and REAL weekly price for a dog… | 🟢 |
| `naic.getCompanyProfile` | naic.org | Reads one insurer's CIS financial report — the holding group that owns it, the state… | 🟡 |
| `naic.getComplaintIndex` | naic.org | Reads one insurer's closed-confirmed complaint index against the national baseline of… | 🟢 |
| `naic.getComplaintTrends` | naic.org | Reads NAIC's aggregate closed-complaint reports — by disposition, by reason, and by… | ⚪ |
| `naic.getLicensing` | naic.org | Lists the states one insurer is licensed in and its status in each, which is the… | 🟢 |
| `naic.getStateInsuranceChart` | naic.org | Reads one State Insurance Chart back in full — the per-state statute and regulation… | ⚪ |
| `naic.listStateDepartments` | naic.org | Returns the directory of all 50+ state and territory insurance departments — the… | 🟢 |
| `naic.lookupProducer` | naic.org | Verifies an individual insurance agent or agency through NAIC's State Based Systems… | ⚪ |
| `naic.searchCompanies` | naic.org | Searches the NAIC Consumer Information Source register by company name or headquarters… | 🟢 |
| `naic.searchStateInsuranceCharts` | naic.org | Searches NAIC's State Insurance Charts — the 100+ issue-specific charts that compile… | ⚪ |
| `namecheap.checkTransferEligibility` | namecheap.com | Checks whether a domain already registered elsewhere can be transferred IN to… | ⚪ |
| `namecheap.getHostingPlans` | namecheap.com | Lists Namecheap's hosting plan tiers (shared, WordPress-managed, VPS, dedicated) with… | ⚪ |
| `namecheap.getSslPlans` | namecheap.com | Lists the SSL certificate products Namecheap resells (DV/OV/EV… | ⚪ |
| `namecheap.getWhois` | namecheap.com | Reads the WHOIS record for a domain — registrar, creation/expiry/updated dates… | 🟢 |
| `namecheap.search` | namecheap.com | Checks whether a domain name is available to register and, if so, what it costs — the… | ⚪ |
| `nationalbusinessfurniture.addToCart` | nationalbusinessfurniture.com | Hands the shopper the entry-point link for a priced configuration plus the exact… | 🟢 |
| `nationalbusinessfurniture.getProduct` | nationalbusinessfurniture.com | Reads one product's full configurable-option set (e.g. Finish) with every choice's… | 🟢 |
| `nationalbusinessfurniture.priceConfiguration` | nationalbusinessfurniture.com | Resolves a specific configuration (a choice per option group, e.g. { Finish: "Ash… | 🟢 |
| `nationalbusinessfurniture.searchProducts` | nationalbusinessfurniture.com | Searches National Business Furniture's office-furniture catalog by free text and… | 🟢 |
| `newageproducts.getNewageproductsProduct` | newageproducts.com | Reads one NewAge Products garage-storage/outdoor-living product by its URL handle —… | 🟢 |
| `newageproducts.searchNewageproductsCatalog` | newageproducts.com | Runs NewAge Products' own header-search box for a keyword and returns up to 5 ranked… | 🟢 |
| `newegg.checkStock` | newegg.com | Answers whether a specific item is buyable right now, rather than merely listed at a… | 🟢 |
| `newegg.getProduct` | newegg.com | Reads one product page in full — the identity search cannot give you (SKU… | 🟢 |
| `newegg.search` | newegg.com | Searches newegg.com for a part and returns matching rows cheapest-first, filtered… | 🟢 |
| `nfa_futures_org.lookupByNfaId` | nfa.futures.org | One firm or individual's current NFA membership status and registration types, by NFA… | 🟢 |
| `nfa_futures_org.searchFirms` | nfa.futures.org | Firms NFA's own BASIC registry lists for a name query — NFA ID, membership status… | 🟢 |
| `nfa_futures_org.searchIndividuals` | nfa.futures.org | Individuals NFA's own BASIC registry lists for a name query — NFA ID, membership… | 🟢 |
| `npmjs.getDownloads` | npmjs.com | Returns a package's real download count off npmjs.com's own public download-counts API… | 🟢 |
| `nurturelife.getMealBundle` | nurturelife.com | Returns Nurture Life's currently-offered curated meal bundles with their real, current… | 🟢 |
| `nurturelife.getMealPlans` | nurturelife.com | Returns Nurture Life's real, live plan tiers (7/10/14/21 meals) with each tier's… | 🟢 |
| `nutrafol.assessHairWellness` | nutrafol.com | Runs Nutrafol's own Hair Wellness Quiz along its default answer path (the site's own… | 🟢 |
| `nutrafol.computeHairWellness` | nutrafol.com | Would run the quiz with the caller's own answers (age range, shedding pattern, stress… | ⚪ |
| `nutrafol.getQuizOverview` | nutrafol.com | Reads the Hair Wellness Quiz's own static intro page — its real description text and… | 🟢 |
| `nvisioncenters.calculateLasikSavings` | nvisioncenters.com | Runs NVISION's own LASIK Savings Calculator — age plus glasses/contacts usage and cost… | 🟢 |
| `nvisioncenters.checkLasikCandidacy` | nvisioncenters.com | Runs NVISION's own LASIK Candidate Quiz disqualification rule — age bracket in, the… | 🟢 |
| `nvisioncenters.estimateLasikSavings` | nvisioncenters.com | Alias of calculateLasikSavings taking the snake_case argument spelling (glasses_cost… | 🟢 |
| `nyt_cooking.addRecipeToFolder` | cooking.nytimes.com | Files a saved recipe into one of the signed-in reader's Recipe Box folders. | ⚪ |
| `nyt_cooking.addToGroceryList` | cooking.nytimes.com | Adds a recipe's ingredients (or plain items) to the signed-in reader's grocery list. | ⚪ |
| `nyt_cooking.clearGroceryList` | cooking.nytimes.com | Clears the signed-in reader's whole grocery list. | ⚪ |
| `nyt_cooking.createRecipeBoxFolder` | cooking.nytimes.com | Creates a new Recipe Box folder for the signed-in reader. | ⚪ |
| `nyt_cooking.createRecipeNote` | cooking.nytimes.com | Writes the signed-in reader's own private cook note on a recipe. | ⚪ |
| `nyt_cooking.deleteRecipeBoxFolder` | cooking.nytimes.com | Deletes one of the signed-in reader's Recipe Box folders. | ⚪ |
| `nyt_cooking.deleteRecipeNote` | cooking.nytimes.com | Deletes one of the signed-in reader's own private cook notes. | ⚪ |
| `nyt_cooking.getAccountProfile` | cooking.nytimes.com | Reads the signed-in reader's own account profile (display name, email). Needs the… | ⚪ |
| `nyt_cooking.getArticle` | cooking.nytimes.com | Reads one cooking article or guide's text and any recipes it links to. | ⚪ |
| `nyt_cooking.getAuthorRecipes` | cooking.nytimes.com | Lists an author's published recipes off their byline page — the finder for a recipe… | ⚪ |
| `nyt_cooking.getCollection` | cooking.nytimes.com | Reads one curated editorial collection (e.g. "Cheap and Easy Meals") and the recipe… | ⚪ |
| `nyt_cooking.getCookedRecipes` | cooking.nytimes.com | Lists the recipes the signed-in reader has marked cooked. | ⚪ |
| `nyt_cooking.getGroceryList` | cooking.nytimes.com | Reads the signed-in reader's own grocery list. | ⚪ |
| `nyt_cooking.getMyNotes` | cooking.nytimes.com | Reads the signed-in reader's own private cook notes on a recipe. | ⚪ |
| `nyt_cooking.getMyRating` | cooking.nytimes.com | Reads the signed-in reader's own rating for a recipe. | ⚪ |
| `nyt_cooking.getRecipe` | cooking.nytimes.com | Reads one recipe's full detail — ingredients, steps, yield, times, ratings and public… | ⚪ |
| `nyt_cooking.getRecipeNotes` | cooking.nytimes.com | Reads the public helpful/all cook notes left on a recipe by other readers. | ⚪ |
| `nyt_cooking.getRelatedRecipes` | cooking.nytimes.com | Reads the related-recipe carousel the site itself shows on a recipe page. | ⚪ |
| `nyt_cooking.getSavedRecipes` | cooking.nytimes.com | Lists the signed-in reader's saved recipes (their Recipe Box). Needs the CALLER's own… | ⚪ |
| `nyt_cooking.getSeasonalGuide` | cooking.nytimes.com | Reads a seasonal guide page (e.g. "/thanksgiving", "/christmas") and its featured… | ⚪ |
| `nyt_cooking.getTopic` | cooking.nytimes.com | Reads one topic page (e.g. "dinner-recipes", "vegan-recipes") and its tagged recipes. | ⚪ |
| `nyt_cooking.getTrendingArticles` | cooking.nytimes.com | Lists the trending articles the site surfaces alongside recipes. | ⚪ |
| `nyt_cooking.listFeaturedCollections` | cooking.nytimes.com | Lists the collections currently featured on the site's own homepage — the entry point… | ⚪ |
| `nyt_cooking.listRecipeBoxFolders` | cooking.nytimes.com | Lists the signed-in reader's own Recipe Box folders. | ⚪ |
| `nyt_cooking.listTopics` | cooking.nytimes.com | Lists the site's topic pages off its own navigation — the finder for a topic a caller… | ⚪ |
| `nyt_cooking.markRecipeCooked` | cooking.nytimes.com | Marks a recipe as cooked on the signed-in reader's account. | ⚪ |
| `nyt_cooking.rateRecipe` | cooking.nytimes.com | Submits the signed-in reader's own 1-4 star rating for a recipe. | ⚪ |
| `nyt_cooking.removeFromGroceryList` | cooking.nytimes.com | Removes one item from the signed-in reader's grocery list. | ⚪ |
| `nyt_cooking.removeRecipeFromFolder` | cooking.nytimes.com | Removes a saved recipe from one of the signed-in reader's Recipe Box folders. | ⚪ |
| `nyt_cooking.renameRecipeBoxFolder` | cooking.nytimes.com | Renames one of the signed-in reader's Recipe Box folders. | ⚪ |
| `nyt_cooking.saveRecipe` | cooking.nytimes.com | Saves a recipe to the signed-in reader's Recipe Box. | ⚪ |
| `nyt_cooking.searchMyRecipeBox` | cooking.nytimes.com | Searches inside the signed-in reader's own saved Recipe Box, rather than the whole site. | ⚪ |
| `nyt_cooking.searchRecipes` | cooking.nytimes.com | Runs the site's own recipe search (query text plus cuisine/diet/mealType/cookTime… | ⚪ |
| `nyt_cooking.unsaveRecipe` | cooking.nytimes.com | Removes a recipe from the signed-in reader's Recipe Box. | ⚪ |
| `nyt_cooking.updateRecipeNote` | cooking.nytimes.com | Edits one of the signed-in reader's own private cook notes. | ⚪ |
| `nyt_games.getConnections` | games.nytimes.com | Retrieves the daily Connections puzzle with category groupings and answers. | 🟢 |
| `nyt_games.getCrosswordArchive` | games.nytimes.com | Retrieves historical crossword puzzles dating back to 1995. | ⚪ |
| `nyt_games.getCrosswordDaily` | games.nytimes.com | Retrieves today's New York Times daily crossword puzzle. | ⚪ |
| `nyt_games.getCrosswordMidi` | games.nytimes.com | Retrieves today's New York Times midi crossword puzzle. | ⚪ |
| `nyt_games.getCrosswordMini` | games.nytimes.com | Retrieves today's New York Times mini crossword puzzle. | ⚪ |
| `nyt_games.getLetterBoxed` | games.nytimes.com | Retrieves the daily Letter Boxed puzzle with grid and answer. | ⚪ |
| `nyt_games.getPips` | games.nytimes.com | Retrieves the daily Pips puzzle. | ⚪ |
| `nyt_games.getSpellingBee` | games.nytimes.com | Retrieves the daily Spelling Bee puzzle with required and optional letters. | ⚪ |
| `nyt_games.getStrands` | games.nytimes.com | Retrieves the daily Strands puzzle with theme and answer words. | ⚪ |
| `nyt_games.getSudoku` | games.nytimes.com | Retrieves today's daily Sudoku puzzle. | ⚪ |
| `nyt_games.getTiles` | games.nytimes.com | Retrieves today's Tiles puzzle. | ⚪ |
| `nyt_games.getWordle` | games.nytimes.com | Reads one day's Wordle answer, puzzle number and editor from NYT's own game JSON. | 🟢 |
| `nyt_games.listCrosswordPuzzles` | games.nytimes.com | Lists available crossword puzzles by date and difficulty. | ⚪ |
| `nytimes.followWriter` | TODO example.com | Follows a writer (requires auth). | ⚪ |
| `nytimes.getArticle` | TODO example.com | Gets full article text, metadata and comments count. | ⚪ |
| `nytimes.getArticleComments` | TODO example.com | Reads comments on an article: trending, recent or top-rated. | ⚪ |
| `nytimes.getConnections` | TODO example.com | Gets today's Connections puzzle. | ⚪ |
| `nytimes.getLiveBlog` | TODO example.com | Gets live blog updates (breaking news, events). | ⚪ |
| `nytimes.getNewsletter` | TODO example.com | Gets newsletter description and signup info. | ⚪ |
| `nytimes.getPodcast` | TODO example.com | Gets podcast details and episode list. | ⚪ |
| `nytimes.getSection` | TODO example.com | Gets articles in a specific section with metadata. | ⚪ |
| `nytimes.getSpellingBee` | TODO example.com | Gets today's Spelling Bee puzzle. | ⚪ |
| `nytimes.getTopicArticles` | TODO example.com | Gets all articles tagged with a specific topic. | ⚪ |
| `nytimes.getTrending` | TODO example.com | Gets articles tagged with a trending topic. | ⚪ |
| `nytimes.getWordle` | TODO example.com | Gets today's Wordle puzzle. | ⚪ |
| `nytimes.getWriter` | TODO example.com | Gets writer profile and byline. | ⚪ |
| `nytimes.listArticles` | TODO example.com | Lists articles by section or topic with pagination. | ⚪ |
| `nytimes.listEpisodes` | TODO example.com | Gets episodes for a specific podcast. | ⚪ |
| `nytimes.listNewsletters` | TODO example.com | Lists available email newsletters. | ⚪ |
| `nytimes.listPodcasts` | TODO example.com | Lists NYT podcasts. | ⚪ |
| `nytimes.listRSSFeeds` | TODO example.com | Lists available RSS feed URLs by section. | ⚪ |
| `nytimes.listSavedArticles` | TODO example.com | Lists articles saved by signed-in reader. | ⚪ |
| `nytimes.listSections` | TODO example.com | Lists all news sections (World, US, Business, etc.). | ⚪ |
| `nytimes.listTopics` | TODO example.com | Lists all available topics/tags. | ⚪ |
| `nytimes.listTrending` | TODO example.com | Lists trending topics or articles of the day. | ⚪ |
| `nytimes.listWriterArticles` | TODO example.com | Gets all articles by a specific writer. | ⚪ |
| `nytimes.saveArticle` | TODO example.com | Saves an article to the reader's collection (requires auth). | ⚪ |
| `nytimes.searchArticles` | TODO example.com | Searches articles by keyword with pagination. | ⚪ |
| `nytimes.searchWriters` | TODO example.com | Searches writers by name. | ⚪ |
| `nytimes.unfollowWriter` | TODO example.com | Unfollows a writer (requires auth). | ⚪ |
| `nytimes.unsaveArticle` | TODO example.com | Removes an article from the reader's collection (requires auth). | ⚪ |
| `oanda.convertCurrency` | oanda.com | Converts an amount from one currency to another using OANDA's own daily average bid… | 🟢 |
| `odfl.estimateFreightQuote` | odfl.com | Generates a shipping rate quote for an LTL freight shipment from ODFL. | ⚪ |
| `oliverwinery.checkShippingAvailability` | oliverwinery.com | Checks whether Oliver Winery currently ships wine to one US state, read off the… | 🟢 |
| `oliverwinery.getWine` | oliverwinery.com | Reads one wine's full Commerce7 product record by its storefront slug (e.g.… | 🟢 |
| `oliverwinery.listWines` | oliverwinery.com | Lists Oliver Winery's own Commerce7 shop catalog — real bottle titles, USD prices and… | 🟢 |
| `onthemarket.search` | onthemarket.com | Search OnTheMarket for residential property listings by location and type (sale or… | 🟢 |
| `openai.helpArticle` | learn.chatgpt.com | Retrieves the full text of a help article by its ID from OpenAI's documentation. | 🟢 |
| `openai.plans` | learn.chatgpt.com | Returns available OpenAI pricing plans with monthly/annual rates and Codex limits. | 🟢 |
| `originenergy_com_au.getBusinessElectricityQuote` | originenergy.com.au | Search originenergy.com.au for business electricity quote: returns every business… | 🟢 |
| `othership.getClassSchedule` | othership.us | Searches one location's real, live class schedule between two dates — sauna, ice bath… | 🟢 |
| `othership.getLocations` | othership.us | Returns every Othership studio location (Toronto's Adelaide and Yorkville, NYC's… | 🟢 |
| `otto.browseCategory` | otto.de | Lists products under one of OTTO's own department/category pages (e.g. Damenmode… | ⚪ |
| `otto.getProduct` | otto.de | Reads one OTTO product page — price, current availability, delivery-time estimate (the… | 🟢 |
| `otto.getReviews` | otto.de | Reads the customer reviews on one OTTO product — rating, review text… | ⚪ |
| `otto.search` | otto.de | Searches OTTO's catalog for a keyword the way the site's own search bar does, across… | 🟡 |
| `otto.trackOrder` | otto.de | Looks up shipment/delivery status for an OTTO order by order number plus the account… | ⚪ |
| `outdoorresearch.checkClaimEligibility` | outdoorresearch.com | Starts an Infinite Guarantee warranty claim by order number + email against the live… | 🟢 |
| `outdoorresearch.getWarrantyPolicy` | outdoorresearch.com | Reads Outdoor Research's Infinite Guarantee warranty program settings straight from… | 🟢 |
| `pacificabeauty.getHairRecommendation` | pacificabeauty.com | Runs Pacifica's own hair-quiz recommendation engine (the Tangent AI-powered quiz at… | 🟢 |
| `pacificcompanies.assembleApplication` | pacificcompanies.com | Validates a caller's name/email/phone against the posting's live apply-form… | 🟢 |
| `pacificcompanies.getApplicationSchema` | pacificcompanies.com | Reads one posting's own live 'Apply For This Job' Gravity Forms structure. | 🟢 |
| `pacificcompanies.getJob` | pacificcompanies.com | Reads one posting in full, by its numeric id or URL slug. | 🟢 |
| `pacificcompanies.getJobCategories` | pacificcompanies.com | Lists every specialty Pacific Companies recruits for, with a live open-posting count —… | 🟢 |
| `pacificcompanies.searchJobs` | pacificcompanies.com | Runs Pacific Companies' own job-board search — filters real open physician/APP roles… | 🟢 |
| `pacificlifestylehomes.searchAvailableHomes` | pacificlifestylehomes.com | Searches Pacific Lifestyle Homes' live available-home inventory in Camas, Ridgefield… | 🟢 |
| `packlane.getQuote` | packlane.com | Prices Packlane's custom Mailer Boxes (product 35139) for a given box size, material… | 🟢 |
| `pallet2ship.getQuote` | pallet2ship.co.uk | Returns a pallet freight quote from Pallet2Ship, a UK pallet broker, based on… | 🟢 |
| `pawsup.checkAvailability` | pawsup.com | Checks available accommodations and starting rates for a requested stay. | 🟢 |
| `paypal.estimateFee` | paypal.com | Computes what PayPal charges to send a PERSONAL (friends-and-family) payment — an… | 🟢 |
| `paypal.estimatePayLaterPlan` | paypal.com | Turns a purchase amount into PayPal's Pay Later options — the four-instalment Pay in 4… | ⚪ |
| `paypal.getCryptoPrices` | paypal.com | Reads the buy and sell prices PayPal itself quotes for the cryptocurrencies it… | ⚪ |
| `paypal.getCurrencyConversionQuote` | paypal.com | Reads PayPal's published currency-conversion spread (FEETB26 — 4.00% for… | 🟢 |
| `paypal.getFees` | paypal.com | Reads PayPal's own published fee schedule for a country and audience (consumer or… | 🟢 |
| `paypal.getHelpArticle` | paypal.com | Reads one PayPal help article in full by its id or URL — the complete answer, its… | ⚪ |
| `paypal.getInvoice` | paypal.com | Reads a PayPal invoice from the payer-view link printed on the invoice itself — the… | ⚪ |
| `paypal.getPayPalMeProfile` | paypal.com | Resolves a PayPal.Me link or handle to the public profile behind it — the display… | ⚪ |
| `paypal.getPolicyDocument` | paypal.com | Reads one of PayPal's binding policy documents — the User Agreement, the Seller… | ⚪ |
| `paypal.searchHelp` | paypal.com | Searches PayPal's Help Center and returns the matching articles — title, canonical URL… | ⚪ |
| `paypal.searchShoppingOffers` | paypal.com | Finds the cashback and discount offers PayPal is currently running at a given merchant… | ⚪ |
| `perennialsandsutherland.getRugVariant` | perennialsandsutherland.com | Reads one rug product-page variant (design + colorway + size) — the real trade price… | 🟢 |
| `perennialsandsutherland.getTearsheetUrl` | perennialsandsutherland.com | Returns the direct, unauthenticated PDF tearsheet download URL for one rug variant… | 🟢 |
| `perennialsandsutherland.searchRugs` | perennialsandsutherland.com | Searches Perennials & Sutherland's live public rug catalog and returns each match's… | 🟢 |
| `pilotprotocol.getApp` | pilotprotocol.network | Reads one app's detail page (/apps/<id>) — vendor, tagline, description, category… | 🟢 |
| `pilotprotocol.listApps` | pilotprotocol.network | Lists every app in Pilot Protocol's app store (id, name, vendor, category, tagline… | 🟢 |
| `pinterest.commentOnPin` | pinterest.com | Leave a comment on a pin as the caller. | ⚪ |
| `pinterest.createBoard` | pinterest.com | Make a new board on the caller's account, public or secret, with a name and description. | ⚪ |
| `pinterest.createPin` | pinterest.com | Create a new pin on the caller's account from an image and a destination link, with a… | ⚪ |
| `pinterest.deleteBoard` | pinterest.com | Delete one of the caller's own boards — what makes every board test write reversible. | ⚪ |
| `pinterest.deletePin` | pinterest.com | Delete a pin the caller created or saved — the undo that makes `createPin` and… | ⚪ |
| `pinterest.findVisuallySimilar` | pinterest.com | Find pins that look like a region of an image — Pinterest's lens, the thing the site… | ⚪ |
| `pinterest.followBoard` | pinterest.com | Follow a single board rather than everything its owner posts. | ⚪ |
| `pinterest.followTopic` | pinterest.com | Follow one of Pinterest's idea topics, which is what steers the caller's home feed. | ⚪ |
| `pinterest.followUser` | pinterest.com | Follow a person or a brand on the caller's behalf. | ⚪ |
| `pinterest.getBoard` | pinterest.com | Read one board: name, description, owner, pin count, follower count, section count… | ⚪ |
| `pinterest.getCurrentUser` | pinterest.com | Who the caller is signed in as — username, display name, counts. | ⚪ |
| `pinterest.getHomeFeed` | pinterest.com | The caller's own personalised Pinterest home feed — the thing the site is actually for… | ⚪ |
| `pinterest.getPin` | pinterest.com | Read one pin in full: title, `seo_title`, the description Pinterest renders, the… | 🟢 |
| `pinterest.getProduct` | pinterest.com | Read the product behind a shoppable pin: price and currency, the merchant and the… | 🟢 |
| `pinterest.getTopic` | pinterest.com | Read one idea topic: its display name, the description Pinterest wrote for it, its… | ⚪ |
| `pinterest.getUser` | pinterest.com | Read a person's or a brand's profile: full name, username, the bio they wrote… | ⚪ |
| `pinterest.hidePin` | pinterest.com | Tell Pinterest the caller does not want to see a pin. | ⚪ |
| `pinterest.listBoardPins` | pinterest.com | Every pin inside a board, in the board's own order, with a `bookmark` for the next… | ⚪ |
| `pinterest.listBoardSectionPins` | pinterest.com | The pins inside one section of a board, taking the section id `listBoardSections`… | ⚪ |
| `pinterest.listBoardSections` | pinterest.com | The sections a board is divided into — a 258-pin board is usually 29 sections, and… | ⚪ |
| `pinterest.listConversations` | pinterest.com | The caller's Pinterest inbox — the conversations people have sent them pins in. | ⚪ |
| `pinterest.listNotifications` | pinterest.com | The caller's notifications — who saved, commented on or followed them. | ⚪ |
| `pinterest.listPinComments` | pinterest.com | Read the comments under a pin — what people said, who said it and when — taking the… | 🟢 |
| `pinterest.listRelatedPins` | pinterest.com | The "More like this" rail under a pin — the pins Pinterest itself recommends next… | 🟢 |
| `pinterest.listRelatedProducts` | pinterest.com | The other products Pinterest shows beside a shoppable pin — the competing and… | 🟢 |
| `pinterest.listTopicPins` | pinterest.com | The best pins in a topic — Pinterest's editorial feed for that interest, which is the… | ⚪ |
| `pinterest.listTopics` | pinterest.com | Pinterest's own top-level idea topics — Food and Drink, Home Decor, Travel, Tattoos… | ⚪ |
| `pinterest.listUserBoards` | pinterest.com | Every board a person has made public, with id, name, url, pin count, section count and… | ⚪ |
| `pinterest.listUserCreatedPins` | pinterest.com | The pins a person made themselves rather than saved from somebody else —… | ⚪ |
| `pinterest.listUserFollowers` | pinterest.com | Who follows this person, page by page — the audience side of a profile. | ⚪ |
| `pinterest.listUserFollowing` | pinterest.com | Who this person follows — people, boards and topics. | ⚪ |
| `pinterest.listUserSavedPins` | pinterest.com | The pins a person has saved, newest first, across all their boards — what… | ⚪ |
| `pinterest.listVisualObjects` | pinterest.com | The objects Pinterest's own computer vision found inside a pin's image — each with a… | 🟢 |
| `pinterest.reactToPin` | pinterest.com | React to a pin as the caller — Pinterest's good-idea / love / thanks set, which… | ⚪ |
| `pinterest.savePin` | pinterest.com | Save an existing pin to one of the caller's boards — the repin, which is the single… | ⚪ |
| `pinterest.searchBoards` | pinterest.com | Search for boards rather than pins — "espresso machine" comes back as 49 boards with… | 🟢 |
| `pinterest.searchMyPins` | pinterest.com | Search only inside the caller's own saved pins — Pinterest's `my_pins` search scope… | ⚪ |
| `pinterest.searchPins` | pinterest.com | Search Pinterest the way a person types into its search box and get the pins back… | 🟢 |
| `pinterest.searchUsers` | pinterest.com | Search for people and brands by name and get their account back — the door that turns… | 🟢 |
| `pinterest.searchVideos` | pinterest.com | Search only the video pins — Pinterest's own `videos` search scope, for a caller who… | 🟢 |
| `pinterest.sendPin` | pinterest.com | Send a pin to somebody in a Pinterest message — the site's own share action. | ⚪ |
| `pinterest.suggestSearches` | pinterest.com | Autocomplete a half-typed query the way Pinterest's search box does — hand it "espre"… | 🟢 |
| `pinterest.unfollowBoard` | pinterest.com | Stop following a board. | ⚪ |
| `pinterest.unfollowTopic` | pinterest.com | Stop following an idea topic. | ⚪ |
| `pinterest.unfollowUser` | pinterest.com | Stop following a person or a brand. | ⚪ |
| `pinterest.updateBoard` | pinterest.com | Rename a board, change its description, or flip it between public and secret. | ⚪ |
| `pinterest.updateProfile` | pinterest.com | Edit the caller's own profile — display name, bio, website, and the profile picture. | ⚪ |
| `pirateship.getRates` | pirateship.com | Compares live shipping rates across USPS and UPS for a package — given a from/to… | 🟢 |
| `pirateship.trackShipment` | pirateship.com | Looks up delivery status for a shipment by tracking number, the way… | ⚪ |
| `pirateship.validateAddress` | pirateship.com | Validates and standardizes a US shipping address the way Pirate Ship checks an address… | ⚪ |
| `pizzahut.checkDeliveryAvailability` | pizzahut.com | Answers whether Pizza Hut delivers to a given address, and on what terms — which store… | ⚪ |
| `pizzahut.findStores` | pizzahut.com | Finds the Pizza Hut stores that serve a given address or ZIP — each store's id, street… | 🟢 |
| `pizzahut.getDeals` | pizzahut.com | Reads the deals, coupons and bundle offers Pizza Hut is running at a store right now —… | 🟢 |
| `pizzahut.getMenu` | pizzahut.com | Reads a store's menu — the items Pizza Hut is actually selling at that location, by… | 🟢 |
| `pizzahut.getMenuItem` | pizzahut.com | Reads one menu item in full for a store, by NAME ("Pepperoni Pizza") since the sibling… | 🟢 |
| `pizzahut.priceOrder` | pizzahut.com | Prices a configured basket at a store WITHOUT placing it — line items with their… | 🟢 |
| `planning_inspectorate_ni.search` | national-infrastructure-consenting.planninginspectorate.gov.uk | Searches the national infrastructure planning register by project name or keywords… | 🟡 |
| `platform_claude_com.getDocPage` | platform.claude.com | Reads one page of platform.claude.com's own /docs/** documentation by URL or path and… | 🟢 |
| `platform_claude_com.getPage` | platform.claude.com | Reads a non-/docs page (e.g. /plugins/submit) and returns its title and meta… | ⚪ |
| `platform_claude_com.listDocPages` | platform.claude.com | Lists every English /docs page platform.claude.com publishes, parsed from the site's… | 🟢 |
| `polymarket.getMarket` | polymarket.com | Reads one Polymarket market by its slug (the id search returns) — question, outcomes… | 🟢 |
| `polymarket.search` | polymarket.com | Searches Polymarket's own prediction markets by keyword (via its public-search API)… | 🟢 |
| `polytex.getProduct` | poly-tex.com | Reads one Poly-Tex product's current price, selectable options, shipping availability… | 🟢 |
| `polytex.searchProducts` | poly-tex.com | Searches Poly-Tex's live greenhouse catalog by product words, returning current… | 🟢 |
| `poshmark.getBulkUploadTemplateGuide` | poshmark.com | Reads Poshmark's own 'How to use Bulk Upload Templates' support article — required… | 🟢 |
| `poshmark.getZipFileGuide` | poshmark.com | Reads Poshmark's own 'How to create a Zip file for Bulk Upload' support article — how… | 🟢 |
| `positivegrid.findRetailers` | positivegrid.com | Authorized Positive Grid retailers near a place — real dealers who carry Spark amps… | 🟢 |
| `postiz.createPost` | postiz.com | Create and schedule a new post across a connected social media account. | 🟡 |
| `postiz.listPosts` | postiz.com | List scheduled and published posts for a workspace within a date range. | 🟡 |
| `powys.search` | planning.powys.gov.uk | Searches Powys County Council planning applications. | 🟡 |
| `premierbuildings.findDealers` | premierbuildings.us | Looks up Premier's real dealer locations in one US state or Canadian province (full… | 🟢 |
| `premierbuildings.listBuildingStyles` | premierbuildings.us | Lists every real building style Premier's ShedView configurator offers (Lofted Barn… | 🟢 |
| `premierbuildings.priceBuilding` | premierbuildings.us | Prices one real Premier building configuration exactly the way ShedView itself does… | 🟢 |
| `prime_video.getChannel` | www.primevideo.com | Read one add-on channel: what it is called, its top ten, its originals and series, and… | 🟢 |
| `prime_video.getLiveSchedule` | www.primevideo.com | Read one live station's schedule — every programme with its start and end time, the… | 🟢 |
| `prime_video.getPerson` | www.primevideo.com | Read a cast member's Prime Video page: their name, what they are credited as, when and… | 🟢 |
| `prime_video.getTitle` | www.primevideo.com | Read one film, series-season or episode the way a viewer reads its page: title… | 🟢 |
| `prime_video.getWatchlist` | www.primevideo.com | Read the caller's own Prime Video watchlist — what they saved and whether each of… | ⚪ |
| `prime_video.getWatchOptions` | www.primevideo.com | Say how you would actually watch a title: included with your Prime membership, free… | 🟢 |
| `prime_video.listCategories` | www.primevideo.com | List the ways Prime Video lets you browse — its genres (action, comedy, horror, anime… | 🟢 |
| `prime_video.listCategoryTitles` | www.primevideo.com | Browse one genre, collection or storefront and get its rows of titles back — "what… | 🟢 |
| `prime_video.listChannels` | www.primevideo.com | List the add-on subscriptions Prime Video sells inside itself — HBO Max, Paramount+… | 🟢 |
| `prime_video.listContinueWatching` | www.primevideo.com | What the caller started and did not finish, and how far in they got. | ⚪ |
| `prime_video.listDeals` | www.primevideo.com | What is discounted to rent or buy on Prime Video this week — the sales, the… | 🟢 |
| `prime_video.listEpisodes` | www.primevideo.com | List a season's episodes with number, title, synopsis, runtime, release date, artwork… | 🟢 |
| `prime_video.listFreeToWatch` | www.primevideo.com | What you can watch on Prime Video without paying anything at all — the free-with-ads… | 🟢 |
| `prime_video.listLiveChannels` | www.primevideo.com | List the free live TV and news stations Prime Video streams — their name, their logo… | 🟢 |
| `prime_video.listLiveSports` | www.primevideo.com | What sport is on Prime Video now and what is coming — the live and upcoming events… | 🟢 |
| `prime_video.listNewReleases` | www.primevideo.com | What has just arrived on Prime Video and what is coming — the read behind "anything… | 🟢 |
| `prime_video.listPurchases` | www.primevideo.com | The films and series the caller has already rented or bought — their video library… | ⚪ |
| `prime_video.listRelatedTitles` | www.primevideo.com | What to watch next after this one — the commonest thing anyone says after the credits… | 🟢 |
| `prime_video.listSeasons` | www.primevideo.com | List every season of a series with the titleId that opens each one, its number, its… | 🟢 |
| `prime_video.listTop10` | www.primevideo.com | Prime Video's own top ten right now — the most-watched TV shows in the US, the top… | 🟢 |
| `prime_video.searchTitles` | www.primevideo.com | Search Prime Video's whole catalogue for what a person would type — "matrix", "the… | 🟢 |
| `prime_video.suggestTitles` | www.primevideo.com | Ask Prime Video's own search box what it would autocomplete a prefix to — "the boy"… | 🟢 |
| `prime_video.toggleWatchlist` | www.primevideo.com | Add a title to the caller's watchlist, or take one off it — the one write a person… | ⚪ |
| `printful.getOrder` | printful.com | Fetches details of a single order by order ID from a Printful store, including status… | 🟢 |
| `printful.searchOrders` | printful.com | Finds orders matching a customer's email or the order's own reference (external_id)… | 🟢 |
| `progressive.findAgent` | progressive.com | Finds the independent agents who sell Progressive near a ZIP — name, agency, address… | 🟢 |
| `progressive.getAtvQuote` | progressive.com | Returns an ATV or UTV insurance quote for the machine and its ZIP — off-road coverage… | ⚪ |
| `progressive.getAutoQuote` | progressive.com | Returns an auto insurance premium quote for a vehicle and driver in a given ZIP —… | ⚪ |
| `progressive.getBoatQuote` | progressive.com | Returns a watercraft insurance quote for a boat's type, length, motor and mooring ZIP… | ⚪ |
| `progressive.getBusinessQuote` | progressive.com | Returns a small-business insurance quote — business owners policy, general liability… | 🟢 |
| `progressive.getClassicCarQuote` | progressive.com | Returns a classic or collector car insurance quote for an agreed-value vehicle and its… | ⚪ |
| `progressive.getCommercialAutoQuote` | progressive.com | Returns a commercial auto insurance quote for a business's vehicles, radius of… | ⚪ |
| `progressive.getCondoQuote` | progressive.com | Returns a condominium unitowners insurance quote for a ZIP and unit — the coverage… | ⚪ |
| `progressive.getDeviceQuote` | progressive.com | Returns an electronic device insurance quote for a phone, laptop or tablet —… | ⚪ |
| `progressive.getEventQuote` | progressive.com | Returns an event insurance quote for a one-off event's date, venue, attendance and… | ⚪ |
| `progressive.getGolfCartQuote` | progressive.com | Returns a golf cart or LSV insurance quote for the cart and its ZIP — coverage for a… | ⚪ |
| `progressive.getHomeownersQuote` | progressive.com | Returns homeowners insurance quotes for a property address — the panel of carriers… | 🟢 |
| `progressive.getJewelryQuote` | progressive.com | Returns a scheduled jewelry insurance quote for an item's appraised value and ZIP —… | ⚪ |
| `progressive.getLifeQuote` | progressive.com | Returns a term life insurance quote for an age, sex, coverage amount and health class… | ⚪ |
| `progressive.getMobileHomeQuote` | progressive.com | Returns a manufactured or mobile home insurance quote for a ZIP and unit — a… | ⚪ |
| `progressive.getMotorcycleQuote` | progressive.com | Returns a motorcycle insurance quote for a bike and rider in a ZIP — Progressive is… | 🟢 |
| `progressive.getPetQuote` | progressive.com | Returns a pet insurance quote for a species, breed, age and ZIP — accident and illness… | ⚪ |
| `progressive.getPwcQuote` | progressive.com | Returns a personal watercraft insurance quote for a jet ski, its market value and its… | 🟢 |
| `progressive.getRentersQuote` | progressive.com | Returns a renters insurance quote for a residence address and the personal-property… | 🟢 |
| `progressive.getRvQuote` | progressive.com | Returns an RV insurance quote for a motorhome or travel trailer and its ZIP — a… | ⚪ |
| `progressive.getSnowmobileQuote` | progressive.com | Returns a snowmobile insurance quote for the sled and its ZIP — a seasonal line with… | ⚪ |
| `progressive.getTravelQuote` | progressive.com | Returns a travel insurance quote for a trip's dates, destination and cost — trip… | ⚪ |
| `progressive.getUmbrellaQuote` | progressive.com | Returns a personal umbrella liability quote for a coverage limit and ZIP — the excess… | ⚪ |
| `progressive.listHomeownersCompanies` | progressive.com | Lists every carrier Progressive places property business with and what each one writes… | 🟢 |
| `prolook.getStyleCustomizationOptions` | prolook.com | Reads one style's real customization surface — every trim (buttons, piping, etc.) and… | 🟢 |
| `prolook.getTeamQuote` | prolook.com | Computes a real team order total for N jerseys of one style, from the site's own live… | 🟢 |
| `prolook.listUniformStyles` | prolook.com | Lists one page of PROLOOK's real team-uniform styles for a sport (e.g. baseball) —… | 🟢 |
| `prose.getHaircareProductPrice` | prose.com | Looks up ONE Prose product type's real one-time and subscription USD price (e.g.… | 🟡 |
| `prose.getHairPrescription` | prose.com | Runs Prose's real online hair consultation end to end — the exact 38 questions its own… | 🟢 |
| `prose.listHaircareProducts` | prose.com | Lists every haircare formula/tool type Prose sells (shampoo, conditioner, hair mask… | 🟢 |
| `proton_mail.getMessage` | proton.me | Reads one message in full from the CALLER's own mailbox — sender, recipients, subject… | ⚪ |
| `proton_mail.listFolders` | proton.me | Lists the CALLER's own folders and labels — Inbox, Sent, Drafts, Spam, Trash and… | ⚪ |
| `proton_mail.listMessages` | proton.me | Lists messages in the CALLER's own Proton Mail mailbox, newest first, from a chosen… | ⚪ |
| `proton_mail.searchMessages` | proton.me | Searches the CALLER's own mailbox by sender, recipient or subject, the way Proton… | ⚪ |
| `proton_mail.sendMessage` | proton.me | Sends an email from the CALLER's own Proton Mail address. | ⚪ |
| `provenwinners.getRecipeDetails` | provenwinners.com | Reads one container recipe's own combination page — its season(s), container size and… | 🟢 |
| `provenwinners.searchContainerRecipes` | provenwinners.com | Runs Proven Winners' own Container Recipe Finder over its 1,074+ published… | 🟢 |
| `proxmox.getIsoDownloads` | proxmox.com | Lists the current ISO installer download(s) for one or all of Proxmox's four products… | 🟢 |
| `proxy_cheap.changeAuthenticationType` | proxy-cheap.com | Switches one proxy between USERNAME_PASSWORD and IP_WHITELIST auth (POST… | ⚪ |
| `proxy_cheap.disableAutoExtend` | proxy-cheap.com | Turns off auto-renew for one proxy (POST /proxies/:id/auto-extend/disable, 204 empty… | ⚪ |
| `proxy_cheap.enableAutoExtend` | proxy-cheap.com | Turns on auto-renew for one proxy (POST /proxies/:id/auto-extend/enable, 204 empty… | ⚪ |
| `proxy_cheap.extendPeriod` | proxy-cheap.com | Extends one proxy's period and charges for it (POST /proxies/:id/extend-period) —… | ⚪ |
| `proxy_cheap.getAccountBalance` | proxy-cheap.com | Reads Bowmark's own Proxy-Cheap account balance (GET /account/balance) — used to fence… | ⚪ |
| `proxy_cheap.getOrder` | proxy-cheap.com | Reads one order's period, bandwidth and total price by id (GET /orders/:id). | ⚪ |
| `proxy_cheap.getProxy` | proxy-cheap.com | Reads one proxy's status, bandwidth usage and auto-extend flag by id (GET /proxies/:id). | ⚪ |
| `proxy_cheap.listLocations` | proxy-cheap.com | For one service+plan, lists in-stock countries and, per country, the ISP carriers… | ⚪ |
| `proxy_cheap.listOrderProxies` | proxy-cheap.com | Lists the proxy endpoints an order produced (GET /orders/:id/proxies) — connection… | ⚪ |
| `proxy_cheap.listProxies` | proxy-cheap.com | Lists every proxy on the account (GET /proxies). | ⚪ |
| `proxy_cheap.listServices` | proxy-cheap.com | Lists Proxy-Cheap's service lines and their plan tiers (GET /v2/order) — includes… | ⚪ |
| `proxy_cheap.placeOrder` | proxy-cheap.com | Places one order for a plan+quantity+term (POST /v2/order/:serviceId/execute) — spends… | ⚪ |
| `proxy_cheap.quoteExtension` | proxy-cheap.com | Prices extending one proxy's period before committing (POST… | ⚪ |
| `proxy_cheap.quotePrice` | proxy-cheap.com | Prices a plan+quantity+term before ordering (POST /v2/order/:serviceId/price) —… | ⚪ |
| `puls_com.getRepairQuote` | puls.com | Checks whether Puls services a ZIP code and, if so, returns the real service-call… | 🟢 |
| `puls_com.listApplianceCategories` | puls.com | Lists the appliance repair categories Puls' booking funnel offers — Refrigerator… | 🟢 |
| `reddit.askRedditAnswers` | reddit.com | Asks Reddit Answers — Reddit's own AI answer engine — a question and returns its… | ⚪ |
| `reddit.blockUser` | reddit.com | Blocks a redditor for the signed-in caller, hiding their posts, comments and messages. | 🟢 |
| `reddit.browseSubreddits` | reddit.com | Lists communities without a query — Reddit's own most-popular and newest communities… | 🟢 |
| `reddit.createSubreddit` | reddit.com | Creates a new community owned by the signed-in caller — name, description, and public… | 🟢 |
| `reddit.deletePostOrComment` | reddit.com | Deletes the signed-in caller's own post or comment. | 🟢 |
| `reddit.editPostOrComment` | reddit.com | Edits the text of the signed-in caller's own post or comment. | 🟢 |
| `reddit.findPostsByUrl` | reddit.com | Given a link, returns the Reddit threads that submitted or discussed it — the 'other… | 🟢 |
| `reddit.followUser` | reddit.com | Follows or unfollows a redditor as the signed-in caller, so their posts reach the… | 🟢 |
| `reddit.getCommentReplies` | reddit.com | Expands a branch of a thread that `getPost` could not return — the 'load more… | 🟢 |
| `reddit.getHomeFeed` | reddit.com | The signed-in caller's own Reddit home feed — posts from the communities they joined… | 🟢 |
| `reddit.getMyAccount` | reddit.com | Returns the signed-in caller's own account — username, karma, account age, whether… | 🟢 |
| `reddit.getPost` | reddit.com | Returns one Reddit submission and the discussion under it — the post's title, author… | 🟢 |
| `reddit.getSubreddit` | reddit.com | Returns the facts about one community rather than its content — the subreddit's title… | 🟢 |
| `reddit.getSubredditPosts` | reddit.com | Returns a community's own front page — the submissions in one subreddit under a chosen… | 🟢 |
| `reddit.getSubredditRules` | reddit.com | Returns one community's posting rules — each rule's short name, full description and… | 🟢 |
| `reddit.getUser` | reddit.com | Returns a redditor's public profile — display name, post and comment karma, account… | 🟢 |
| `reddit.getUserComments` | reddit.com | Returns the comments one redditor has written, newest or top first, each with its… | 🟢 |
| `reddit.getUserPosts` | reddit.com | Returns the submissions one redditor has made, newest or top first, with the same… | 🟢 |
| `reddit.getWikiPage` | reddit.com | Returns a subreddit's wiki page — the community-maintained reference behind most large… | 🟢 |
| `reddit.giveAward` | reddit.com | Gives an award to a post or comment as the signed-in caller. | ⚪ |
| `reddit.hidePost` | reddit.com | Hides or un-hides a post from the signed-in caller's feeds. | 🟢 |
| `reddit.joinSubreddit` | reddit.com | Joins a community as the signed-in caller, so its posts reach their home feed. | 🟢 |
| `reddit.leaveSubreddit` | reddit.com | Leaves a community the signed-in caller has joined. | 🟢 |
| `reddit.listInbox` | reddit.com | Reads the signed-in caller's inbox — replies to their posts and comments, username… | 🟢 |
| `reddit.listMySubscriptions` | reddit.com | Lists the communities the signed-in caller has joined. | 🟢 |
| `reddit.listPostFlairs` | reddit.com | Lists the post flairs a community offers, with their ids — the door `submitPost` needs… | 🟢 |
| `reddit.listSaved` | reddit.com | Lists the posts and comments the signed-in caller has saved. | 🟢 |
| `reddit.listWikiPages` | reddit.com | Lists the pages of one subreddit's wiki — the index a caller needs before… | 🟢 |
| `reddit.postComment` | reddit.com | Comments on a post as the signed-in caller and returns the new comment's permalink. | 🟢 |
| `reddit.replyToComment` | reddit.com | Replies to a comment as the signed-in caller and returns the new reply's permalink. | 🟢 |
| `reddit.reportPostOrComment` | reddit.com | Reports a post or comment to a community's moderators, as the signed-in caller, under… | 🟢 |
| `reddit.savePostOrComment` | reddit.com | Saves a post or comment to the signed-in caller's Saved list. | 🟢 |
| `reddit.search` | reddit.com | Searches Reddit's posts for a query — across the whole site or scoped to one subreddit… | 🟢 |
| `reddit.searchComments` | reddit.com | Searches the text of comments rather than posts, returning each match with its body… | ⚪ |
| `reddit.searchSubreddits` | reddit.com | Finds communities by topic — a query goes in, matching subreddits come out with their… | 🟢 |
| `reddit.searchUsers` | reddit.com | Finds redditors by name — a partial or remembered username goes in, matching accounts… | 🟢 |
| `reddit.sendDirectMessage` | reddit.com | Sends a direct message (Reddit chat) from the signed-in caller to another redditor. | 🟢 |
| `reddit.setProfilePicture` | reddit.com | Uploads an image as the signed-in caller's profile picture. | 🟢 |
| `reddit.submitPost` | reddit.com | Posts to a community as the signed-in caller — a text post, a link, an image, or a… | 🟢 |
| `reddit.unsavePostOrComment` | reddit.com | Removes a post or comment from the signed-in caller's Saved list. | 🟢 |
| `reddit.updateProfile` | reddit.com | Changes the signed-in caller's public profile — display name and the 'about' bio. | 🟢 |
| `reddit.vote` | reddit.com | Upvotes, downvotes or clears the caller's vote on a post or a comment, as the… | 🟢 |
| `reliancepartners.assembleApplication` | reliancepartners.com | Validates a caller's trucking-insurance application against the live schema's own… | 🟡 |
| `reliancepartners.getApplicationSchema` | reliancepartners.com | Reads reliancepartners.com/quote/'s live 3-step trucking-insurance application — every… | 🟡 |
| `resy.checkAvailability` | resy.com | Reads real-time open reservation slots for one venue, one date and a party size —… | 🟡 |
| `resy.search` | resy.com | Finds Resy venues matching a restaurant name, ranked by Resy's own relevance and… | 🟢 |
| `revisionskincare.getSkincareQuizQuestions` | revisionskincare.com | Reads the live 'Product Finder Quiz' at revisionskincare.com/pages/skincare-quiz… | 🟢 |
| `revisionskincare.takeSkincareQuiz` | revisionskincare.com | Submits a shopper's answers to Revision Skincare's own Product Finder Quiz and returns… | 🟡 |
| `rightmove.search` | rightmove.co.uk | Searches for properties for sale or rent by location, price range, and bedroom count. | 🟢 |
| `rishitea.getTeaFinderQuiz` | rishi-tea.com | Reads the live Tea Finder quiz's real question set straight from Okendo's quiz API —… | 🟢 |
| `rishitea.matchTeaFinderQuiz` | rishi-tea.com | Submits a full set of answers to Okendo's quiz engine and returns the same… | 🟢 |
| `ritani.getConfigurator` | ritani.com | Reads Ritani's real live Ring Studio option catalog: every center stone shape… | 🟢 |
| `ritani.priceConfiguration` | ritani.com | Prices one exact custom-ring build against Ritani's own live Ring Studio pricing… | 🟢 |
| `rivian.estimateLeasePayment` | rivian.com | Prices a 36- or 24-month Rivian lease for a 2027-model-year R1T Premium — monthly… | 🟢 |
| `roofmaxx.estimateRoofReplacementCost` | roofmaxx.com | Runs Roof Maxx's own Roof Replacement Cost Calculator — given a home's square footage… | 🟢 |
| `roofmaxx.getCalculatorSettings` | roofmaxx.com | The Roof Replacement Cost Calculator's own admin-configured title and description… | 🟢 |
| `rover.searchBoarding` | rover.com | Searches Rover's live overnight-boarding sitter results for a city and a specific date… | 🟢 |
| `rvshare.searchListings` | rvshare.com | Runs RVshare's own results grid for a US city/state… | 🟢 |
| `saatva.listMattresses` | saatva.com | Lists every mattress product line Saatva currently sells with every buyable variant —… | 🟢 |
| `saatva.recommendMattress` | saatva.com | Runs Saatva's mattress-quiz goal-flow for a stated sleep position, firmness preference… | 🟢 |
| `safetywing.getQuote` | safetywing.com | Runs SafetyWing's own Nomad Insurance quote calculator — plan (Essential or Complete)… | 🟢 |
| `saltandstone.getScentProducts` | saltandstone.com | Lists the real core products (body wash, body mist, body lotion, deodorant, hand… | 🟢 |
| `saltandstone.listScentFamilies` | saltandstone.com | Lists Salt & Stone's real six named scent families (Santal & Vetiver, Bergamot &… | 🟢 |
| `saltandstone.matchScent` | saltandstone.com | Salt & Stone's own Scent Quiz, reimplemented: given a free-text scent preference… | 🟢 |
| `samsclub.browseCategory` | samsclub.com | Reads the current live grid (~50 rows) for one of samsclub.com's own… | 🟢 |
| `samsclub.checkStock` | samsclub.com | Answers whether one item is in stock right now, and at what price, at a SPECIFIC club… | 🟢 |
| `samsclub.findClubs` | samsclub.com | Finds nearby Sam's Club warehouse locations for a 5-digit US zip — address, phone… | 🟢 |
| `samsclub.getFuelPrices` | samsclub.com | Reads the current fuel-center gas price at a specific club — a genuinely… | 🟢 |
| `samsclub.getInstantSavings` | samsclub.com | Reads one page (47 rows) of samsclub.com's live Instant Savings promotional catalog —… | 🟢 |
| `samsclub.getMembershipPlans` | samsclub.com | Reads the site's own published membership tiers (Club, Plus) — the currently-displayed… | 🟢 |
| `samsclub.getPickupSlots` | samsclub.com | Reads the available club-pickup or delivery time windows for a given club/zip — the… | ⚪ |
| `samsclub.getProduct` | samsclub.com | Reads one product's full page — member price (and non-member price where the site… | 🟢 |
| `samsclub.search` | samsclub.com | Searches samsclub.com's catalog for a keyword and returns matching products — name… | 🟢 |
| `samsclub.trackOrder` | samsclub.com | Looks up shipment/delivery status for an order by order number plus the email or zip… | ⚪ |
| `samsung.checkWarrantyStatus` | samsung.com | Whether a specific device's Samsung warranty is active and when it expires — takes the… | ⚪ |
| `samsung.compareProducts` | samsung.com | Samsung's own side-by-side spec comparison for two or more models in the same family —… | ⚪ |
| `samsung.findStore` | samsung.com | Samsung-owned and authorized retail locations near a US ZIP or city — address, hours… | ⚪ |
| `samsung.getOrderStatus` | samsung.com | Where one specific order stands — shipped, delivered, the carrier tracking link — the… | ⚪ |
| `samsung.getProduct` | samsung.com | Read one exact model's page the way a shopper reads it: name, price, star rating and… | 🟢 |
| `samsung.getRewardsBalance` | samsung.com | A signed-in shopper's Samsung Rewards points balance and available redemptions, off… | ⚪ |
| `samsung.getTradeInQuote` | samsung.com | Samsung's own trade-in estimate for a device someone already owns — what they'd get… | ⚪ |
| `samsung.listCarrierOffers` | samsung.com | Samsung's own trade-in and carrier promotions — the "save up to $X with eligible… | ⚪ |
| `samsung.listCategories` | samsung.com | The site's own product taxonomy — Smartphones, TVs, Home Appliances, Monitors… | 🟢 |
| `samsung.listCategoryProducts` | samsung.com | Browse a whole product family with no keyword at all — every Galaxy S phone, every Neo… | 🟢 |
| `samsung.listDeals` | samsung.com | What is discounted right now across the whole site — the deal price, the price it was… | 🟢 |
| `samsung.listMyProducts` | samsung.com | The devices a signed-in shopper has registered to their Samsung account — model… | ⚪ |
| `samsung.listOrders` | samsung.com | The signed-in shopper's own Samsung.com order history — what they bought, when, and… | ⚪ |
| `samsung.listSupportArticles` | samsung.com | Samsung's own how-to and troubleshooting articles for a product — firmware downloads… | ⚪ |
| `samsung.search` | samsung.com | Runs Samsung's own AI-powered site search (the box that redirects to /us/aisearch/)… | 🟢 |
| `scentbird.browseCatalogue` | scentbird.com | Reads a page of Scentbird's own live subscription catalogue (perfumes or colognes) —… | 🟢 |
| `seakeeper.findNearestDealers` | seakeeper.com | Ranks every real Seakeeper dealer by distance from a US zip and returns the nearest N… | 🟢 |
| `seakeeper.listAllDealers` | seakeeper.com | Every real Seakeeper dealer worldwide (name, address, contact, coordinates, tier)… | 🟢 |
| `sears.checkStock` | sears.com | Answers whether a specific product is buyable right now — for delivery or for… | 🟡 |
| `sears.findStores` | sears.com | Finds physical Sears/Sears Hometown stores near a zip code or city the way the site's… | ⚪ |
| `sears.getProduct` | sears.com | Reads one product in full the way its own product detail page does — given a URL or… | 🟢 |
| `sears.search` | sears.com | Searches Sears' live catalog by free-text keyword the way the site's own search bar… | 🟢 |
| `secondswing.getQuoteAttributes` | 2ndswing.com | Lists the condition and club-number (loft/iron-number) options the Value Guide asks… | 🟢 |
| `secondswing.getTradeInValue` | 2ndswing.com | Runs the Value Guide's real quotePreview computation for a SKU + condition/club-number… | 🟢 |
| `secondswing.searchClubs` | 2ndswing.com | Runs the Value Guide's model quick-search for a make/model query and returns the… | 🟢 |
| `seegarsfence.checkServiceArea` | seegarsfence.com | Geocodes a free-text address and reports whether it falls inside Seegars Fence's… | 🟢 |
| `seegarsfence.estimateFencePrice` | seegarsfence.com | Would return the estimator's actual priced result for a drawn fence line + selected… | ⚪ |
| `selectblinds.getConfigurator` | selectblinds.com | Reads one blind style's real live configurator: every feature (Mount Type, Lift Style… | 🟢 |
| `selectblinds.listBlindStyles` | selectblinds.com | Searches SelectBlinds' real made-to-measure catalog via the site's own Shopify… | 🟢 |
| `selectblinds.priceConfiguration` | selectblinds.com | Prices one exact build (a blind style + chosen feature option ids + a real… | 🟢 |
| `sellcell.getTradeInOffers` | sellcell.com | Returns every buyback vendor's current cash offer for one iPhone — a specific model… | 🟢 |
| `semihandmade.getPartOptions` | semihandmade.com | Reads one part's real live size grid: every real size combination with its own real… | 🟢 |
| `semihandmade.priceConfiguration` | semihandmade.com | Resolves one exact size selection to Semihandmade's own real price, availability and… | 🟢 |
| `semihandmade.searchParts` | semihandmade.com | Searches Semihandmade's real catalog for one IKEA cabinet system (Sektion, Akurum… | 🟢 |
| `serper.searchGoogle` | serper.dev | Runs a Google search through Serper's API and returns Google's organic results —… | 🟢 |
| `shopify.addToCart` | shopify.com (51717 stores) | Puts variants into THIS run's own cart on the store and returns the cart the store… | 🟢 |
| `shopify.getCart` | shopify.com (51717 stores) | Reads THIS run's cart back — lines, quantities, per-line and order totals, and the… | 🟢 |
| `shopify.getCollection` | shopify.com (51717 stores) | Reads one collection's products in the retailer's own merchandised order, as full… | 🟢 |
| `shopify.getProduct` | shopify.com (51717 stores) | Reads one product by handle — every variant, its exact price, its SKU and whether that… | 🟢 |
| `shopify.getProducts` | shopify.com (51717 stores) | Reads FULL detail for many products in one call — the shape for ranking a candidate… | 🟢 |
| `shopify.getSetEvidence` | shopify.com (51717 stores) | Two answers in one call. `evidence` is ONLY what a MERCHANDISER pinned by hand, in the… | 🟢 |
| `shopify.getShippingRates` | shopify.com (51717 stores) | Returns the shipping options and prices for a destination, which is the second thing a… | ⚪ |
| `shopify.getStyleDetails` | shopify.com (51717 stores) | Reads what a store publishes on its rendered product PAGE and not in its product feed… | 🟢 |
| `shopify.listCollections` | shopify.com (51717 stores) | Lists the store's own merchandised collections. | 🟢 |
| `shopify.listProducts` | shopify.com (51717 stores) | Walks the store's WHOLE catalogue a page at a time, in its own merchandised order —… | 🟢 |
| `shopify.removeFromCart` | shopify.com (51717 stores) | Takes a line back out of this run's cart, or changes its quantity, so a caller can… | ⚪ |
| `shopify.resolveProductUrl` | shopify.com (51717 stores) | Turns a product URL into the product, which is the address a caller actually holds… | 🟢 |
| `shopify.search` | shopify.com (51717 stores) | Searches the store's live catalogue and returns matching products with their real… | 🟢 |
| `shopify.searchPolicies` | shopify.com (51717 stores) | Answers a question about the store's own returns, shipping, sizing or warranty policy… | ⚪ |
| `shopify.searchProducts` | shopify.com (51717 stores) | An ALIAS for search, on aloyoga only — same call, same result. | 🟢 |
| `sitmeanssit.findNearestLocations` | sitmeanssit.com | Ranks every real Sit Means Sit dog-training location by distance from a US zip and… | 🟢 |
| `sixflags.getTickets` | sixflags.com | Reads one park's own daily-tickets page (e.g. sixflags.com/cedarpoint/daily-tickets)… | 🟢 |
| `smartsign.getTemplate` | smartsign.com | Reads one custom-sign template's product page and returns its per-material live… | 🟢 |
| `smartsign.search` | smartsign.com | Runs SmartSign's own site-search suggest endpoint for a free-text query and returns… | 🟢 |
| `smartwool.getSockRecommendation` | smartwool.com | Runs Smartwool's own Sock Finder quiz with the given answers and returns the computed… | 🟢 |
| `smithery.search` | smithery.ai | Full-text/semantic search over the Smithery MCP server registry — returns each… | 🟢 |
| `solostove.checkBundle` | solostove.com | Checks one Solo Stove bundle (fire pit + accessories, e.g. the Dream Backyard Bundle)… | 🟢 |
| `solostove.listBundles` | solostove.com | Searches Solo Stove's own storefront search for BUNDLE products (fire pit +… | 🟢 |
| `soundcloud.getPlaylist` | soundcloud.com | Reads a SoundCloud set or playlist URL and returns its tracks in order — the unit… | 🟢 |
| `soundcloud.getTrack` | soundcloud.com | Resolves one soundcloud.com track URL to its full metadata — title, artist, duration… | 🟢 |
| `soundcloud.search` | soundcloud.com | Searches SoundCloud's catalogue for tracks matching a free-text query and returns up… | 🟢 |
| `speedrun.categories` | www.speedrun.com | List all categories for a game, including variables and values. | 🟢 |
| `speedrun.findGame` | www.speedrun.com | Search for a game by name, returning metadata including ID, platforms, and rules. | 🟢 |
| `speedrun.platforms` | www.speedrun.com | List all platforms, optionally filtered to a specific game. | 🟢 |
| `speedrun.submitRun` | www.speedrun.com | Submits a speedrun to a game category, with optional video URL and user variables. | ⚪ |
| `spirithalloween.getProduct` | spirithalloween.com | Reads one product page's full live variant matrix — every real color/size combination… | 🟢 |
| `spirithalloween.search` | spirithalloween.com | Browses Spirit Halloween's category listing for a query resolved against a small… | 🟢 |
| `starlighthomes.getMetro` | starlighthomes.com | Reads one metro's own page: every named neighborhood in it, each with a real live… | 🟢 |
| `starlighthomes.getNeighborhood` | starlighthomes.com | Reads one neighborhood's own page: its ACTUAL move-in-ready homes right now — real… | 🟢 |
| `starlighthomes.listMetros` | starlighthomes.com | Lists every metro division Starlight Homes currently builds in (e.g. Dallas - Fort… | 🟢 |
| `statefarm.findAgent` | statefarm.com | Returns the State Farm agents near a ZIP or city — name, office address, phone… | 🟢 |
| `statefarm.getAgent` | statefarm.com | Reads one State Farm agent's own page back to full detail — office hours, licensed… | ⚪ |
| `statefarm.getAutoQuote` | statefarm.com | Returns an auto insurance premium quote for a vehicle and driver in a given ZIP — the… | ⚪ |
| `statefarm.getBoatQuote` | statefarm.com | Returns a watercraft insurance quote for a boat's type, length, motor and mooring ZIP… | ⚪ |
| `statefarm.getBusinessQuote` | statefarm.com | Returns a real State Farm Business Owners Policy price for one small business — the… | 🟢 |
| `statefarm.getCondoQuote` | statefarm.com | Returns a condominium unitowners insurance quote for a ZIP and unit — the coverage… | ⚪ |
| `statefarm.getDisabilityQuote` | statefarm.com | Returns an individual disability income quote for an occupation, income and benefit… | ⚪ |
| `statefarm.getHealthQuote` | statefarm.com | Returns a supplemental health quote — Medicare supplement and the individual… | ⚪ |
| `statefarm.getHomeQuote` | statefarm.com | Returns a homeowners insurance premium quote for a property address — dwelling… | ⚪ |
| `statefarm.getLifeQuote` | statefarm.com | Returns State Farm's own term life rate table for a date of birth, sex, self-rated… | 🟢 |
| `statefarm.getManufacturedHomeQuote` | statefarm.com | Returns a manufactured-home insurance quote for a ZIP and unit — a separately rated… | ⚪ |
| `statefarm.getMotorcycleQuote` | statefarm.com | Returns a motorcycle insurance quote for a bike and rider in a ZIP — the largest of… | ⚪ |
| `statefarm.getPersonalArticlesQuote` | statefarm.com | Returns a personal articles policy quote for a scheduled item — jewelry, cameras… | ⚪ |
| `statefarm.getPetQuote` | statefarm.com | Returns a pet insurance quote for a species, breed, age and ZIP — accident and illness… | ⚪ |
| `statefarm.getRecreationalVehicleQuote` | statefarm.com | Returns a quote for the recreational vehicle lines — motorhomes, travel trailers and… | ⚪ |
| `statefarm.getRentalPropertyQuote` | statefarm.com | Returns a landlord insurance quote for a rented-out property — dwelling coverage plus… | ⚪ |
| `statefarm.getRentersQuote` | statefarm.com | Returns State Farm's own monthly renters insurance estimate for a US ZIP — a low and a… | 🟢 |
| `statefarm.getUmbrellaQuote` | statefarm.com | Returns a personal umbrella liability quote — the excess liability layer above the… | ⚪ |
| `steam.addFriend` | steampowered.com | Sends a friend request to another Steam user by username or ID. | ⚪ |
| `steam.addToWishlist` | steampowered.com | Adds a game to the caller's wishlist, marking it for tracking and price drop… | ⚪ |
| `steam.editProfile` | steampowered.com | Updates the caller's own profile information like profile name, bio/summary, and… | ⚪ |
| `steam.getAchievements` | steampowered.com | Retrieves achievement list for a game when publicly viewable, including achievement… | ⚪ |
| `steam.getCommunityHub` | steampowered.com | Retrieves the community hub for a game, including recent discussions, artwork… | ⚪ |
| `steam.getGameDetails` | steampowered.com | Reads a specific game's full store page including title, description, price… | ⚪ |
| `steam.getGameReviews` | steampowered.com | Retrieves user reviews for a game, including review text, helpful/unhelpful counts… | ⚪ |
| `steam.getGameScreenshots` | steampowered.com | Fetches a game's screenshots and promotional images, returning image URLs, captions… | ⚪ |
| `steam.getGameStats` | steampowered.com | Provides game statistics like current player count, peak player count (24h)… | ⚪ |
| `steam.getGameVideos` | steampowered.com | Returns video trailers and gameplay videos for a game, including video URLs, titles… | ⚪ |
| `steam.getLibrary` | steampowered.com | Lists all games the caller owns, with installation status, play time, and last-played… | ⚪ |
| `steam.getMarketPrice` | steampowered.com | Retrieves current Community Market price information for an item, including listing… | ⚪ |
| `steam.getNewsItem` | steampowered.com | Fetches the full text of a specific news article by its ID or URL. | ⚪ |
| `steam.getPlayTime` | steampowered.com | Returns total playtime in hours for a specific game owned by the caller. | ⚪ |
| `steam.getProfile` | steampowered.com | Retrieves a Steam profile by username or ID, including profile name, avatar, status… | ⚪ |
| `steam.getWishlist` | steampowered.com | Fetches the caller's complete wishlist with all games currently saved. | ⚪ |
| `steam.listFeaturedGames` | steampowered.com | Fetches the current list of featured games displayed on the Steam store homepage… | ⚪ |
| `steam.listGamesByCategory` | steampowered.com | Lists games filtered by Steam's official categories (e.g., Action, Adventure, Indie… | ⚪ |
| `steam.listGameTags` | steampowered.com | Lists all available tags users can apply to games, with tag popularity or usage counts. | ⚪ |
| `steam.listNews` | steampowered.com | Lists recent news articles from the Steam community news section, including title… | ⚪ |
| `steam.postComment` | steampowered.com | Posts a comment or discussion in a game's community hub. | ⚪ |
| `steam.removeFriend` | steampowered.com | Removes a user from the caller's friends list. | ⚪ |
| `steam.removeFromWishlist` | steampowered.com | Removes a game from the caller's wishlist. | ⚪ |
| `steam.searchGames` | steampowered.com | Searches the Steam store by keyword and returns matching games with basic details like… | ⚪ |
| `steam.searchNews` | steampowered.com | Searches the Steam news archive by keyword or date range. | ⚪ |
| `steam.viewFriends` | steampowered.com | Lists the caller's Steam friends, including online status and last-seen date. | ⚪ |
| `steam.viewInventory` | steampowered.com | Displays the caller's inventory including trading cards, profile items, and gift… | ⚪ |
| `steam.viewMarketHistory` | steampowered.com | Shows the caller's Steam Community Market transaction history including listings… | ⚪ |
| `stickergiant.listStickerProducts` | stickergiant.com | Lists every sticker SKU the /custom-stickers page publishes — name, slug-style @id… | 🟢 |
| `stickergiant.priceCustomSticker` | stickergiant.com | Prices one exact custom-sticker build against Sticker Giant's own live pricing backend… | 🟢 |
| `summerfridaysquiz.getSkincareQuizQuestions` | summerfridays.com | Lists the live Skincare Quiz's questions (skin type, sensitivity, skin concerns, eye… | 🟢 |
| `summerfridaysquiz.getSkincareRoutine` | summerfridays.com | Runs Summer Fridays' own published Skincare Quiz decision tree (the routine-category… | 🟢 |
| `sunhomesaunas.addSaunaToCart` | sunhomesaunas.com | Adds one real matched product to a real Shopify cart at Sun Home Saunas' own real live… | 🟢 |
| `sunhomesaunas.getPersonalizedSaunaMatches` | sunhomesaunas.com | Applies real answers to the live Digioh product-weight rules the site's quiz… | 🟢 |
| `sunhomesaunas.getSaunaFinderQuestions` | sunhomesaunas.com | Reads Sun Home Saunas' real, live Digioh buyer quiz from its public breakpoint… | 🟢 |
| `sunlighten.getModelPricing` | sunlighten.com | Reads the real, currently-quoted price for a Sunlighten sauna model off the public… | 🟢 |
| `sunlighten.matchSauna` | sunlighten.com | Runs Sunlighten's own 'Find My Sauna' quiz match — the same wellness-goal +… | 🟢 |
| `tagtrans_net.createShipmentRateEmail` | tagtrans.net | Builds TAG Trans's own prefilled mailto handoff for a freight shipment-rate request… | 🟢 |
| `tagtrans_net.getShipmentRateForm` | tagtrans.net | Returns TAG Trans's current public shipment-rate request fields, service choices, and… | 🟢 |
| `tamarackidaho.searchLodging` | tamarackidaho.com | Searches Tamarack's own direct-managed lodging inventory (Lodge at Osprey Meadows… | 🟢 |
| `target.checkStock` | target.com | Answers whether a product (by TCIN) is available for same-day pickup or ship-to at a… | ⚪ |
| `target.findStore` | target.com | Finds nearby Target store locations for a ZIP or address — hours, phone, and address —… | 🟢 |
| `target.getProduct` | target.com | Reads one product page in full — price, variant/size options, description, images —… | ⚪ |
| `target.search` | target.com | Searches or browses Target's catalog by keyword and returns one page of matching… | 🟢 |
| `target.trackOrder` | target.com | Looks up the status of a placed order (order number plus email, no sign-in) —… | ⚪ |
| `tatcha.getPersonalizedRitual` | tatcha.com | Runs a shopper's real answers (skin type, up to three benefits, optional eye concerns… | 🟢 |
| `tatcha.getRitualQuizOptions` | tatcha.com | Reads the live "Ritual Finder" quiz's real input menus — every skin-type, skin-benefit… | 🟢 |
| `teladoc.getArticle` | teladochealth.com | Returns one Health Library article in full — title, body content and category — given… | ⚪ |
| `teladoc.getInsurancePricing` | teladochealth.com | Returns the with-insurance side of /start/no-insurance — what Teladoc publishes about… | 🟢 |
| `teladoc.getPricing` | teladochealth.com | Returns Teladoc's published self-pay (no-insurance) visit pricing by service line —… | 🟢 |
| `teladoc.search` | teladochealth.com | Searches Teladoc Health's public Health Library — recipes, meal plans… | ⚪ |
| `teneohg.getMemberHotel` | teneohg.com | Reads one member hotel's own profile page: the full meeting-space stat block… | 🟢 |
| `teneohg.searchMemberHotels` | teneohg.com | Runs Teneo's own member-hotel directory — 350+ independent and small-branded meeting… | 🟢 |
| `therabody.getTheragunProduct` | therabody.com | Reads one product by its handle — every variant, its exact price, the image the… | 🟢 |
| `therabody.listTheragunProducts` | therabody.com | Reads the live Therabody catalogue as Therabody publishes it — every product, its… | 🟢 |
| `therabody.recommendTheragun` | therabody.com | Filters the live catalogue by what a shopper actually needs — Theragun device family… | 🟢 |
| `therowhouse.getSchedule` | therowhouse.com | Reads one studio's live class schedule — real class names, instructor, start/end time… | 🟢 |
| `therowhouse.listLocations` | therowhouse.com | Lists every Row House studio's slug and canonical page URL, enumerated from the site's… | 🟢 |
| `thestowcompany.getSampleClosetEstimate` | easyclosets.com | Runs EasyClosets' own free 3D closet design tool for a given closet shape (reach-in or… | 🟢 |
| `thezebra.estimateCoverageCost` | thezebra.com | Returns The Zebra's own estimate of what a driver should expect to pay, and what… | ⚪ |
| `thezebra.getAutoQuotes` | thezebra.com | Returns real side-by-side auto insurance rates from the carriers that will write a… | 🟡 |
| `thezebra.getCarrierRates` | thezebra.com | Returns what a named insurance company charges relative to its competitors — its own… | 🟢 |
| `thezebra.getCityRates` | thezebra.com | Returns car insurance costs for a US city — the average premium there, the per-carrier… | 🟢 |
| `thezebra.getCommercialAutoQuotes` | thezebra.com | Returns commercial auto rates for a business's vehicles, drivers and use class — the… | ⚪ |
| `thezebra.getDiscounts` | thezebra.com | Returns the discounts a carrier offers and roughly what each is worth — multi-policy… | ⚪ |
| `thezebra.getHomeQuotes` | thezebra.com | Returns homeowners insurance rates from the carriers that will write a given property… | ⚪ |
| `thezebra.getInsuranceStatistics` | thezebra.com | Returns the figures from The Zebra's annual State of Insurance report — the national… | ⚪ |
| `thezebra.getLifeQuotes` | thezebra.com | Returns term and whole life insurance rates for an applicant's age, sex, health tier… | ⚪ |
| `thezebra.getPetQuotes` | thezebra.com | Returns pet insurance rates for a pet's species, breed, age and ZIP, with each plan's… | ⚪ |
| `thezebra.getRatesByDriverProfile` | thezebra.com | Returns how a driver's own circumstances move their premium — what an at-fault… | 🟢 |
| `thezebra.getRentersQuotes` | thezebra.com | Returns REAL renters insurance quotes for one address — each carrier's own monthly… | 🟢 |
| `thezebra.getRentersRates` | thezebra.com | Returns what renters insurance actually costs, as The Zebra's own published figures… | ⚪ |
| `thezebra.getStateRates` | thezebra.com | Returns what car insurance costs in a US state — the state's average premium for… | 🟢 |
| `thezebra.getStateRequirements` | thezebra.com | Returns a US state's legally required auto coverage — the liability minimums as three… | 🟢 |
| `thezebra.getVehicleRates` | thezebra.com | Returns what it costs to insure a specific vehicle — by make, model and year — with… | 🟢 |
| `thezebra.listCarriers` | thezebra.com | Returns the insurance companies The Zebra compares — the roster behind the '100+… | ⚪ |
| `thezebra.listVehicles` | thezebra.com | Returns the makes and models The Zebra publishes insurance rates for — the index that… | ⚪ |
| `thibautdesign.calculateRollsNeeded` | thibautdesign.com | Runs Thibaut's own wallpaper-calculator (thibautdesign.com/wallpaper-calculator) —… | 🟢 |
| `ticketmaster_mx.getEvent` | ticketmaster.com.mx | Fetches event details including title, venue, dates, and ticket availability from a… | 🟢 |
| `ticketmaster_mx.search` | ticketmaster.com.mx | Searches for events on Ticketmaster México by query string. | 🟢 |
| `ticketmaster_nl.event` | ticketmaster.nl | Returns the event title, venue, date, time, and availability from an event page URL. | 🟡 |
| `ticketmaster_nl.search` | ticketmaster.nl | Searches for events by name on Ticketmaster Netherlands and returns a list of matching… | 🟢 |
| `ticketmaster.getEvent` | ticketmaster.com | Returns one event in full: venue (name, address), date/time, the classification… | ⚪ |
| `ticketmaster.listClassifications` | ticketmaster.com | Returns the segment/genre/sub-genre taxonomy Ticketmaster uses to categorize events… | ⚪ |
| `ticketmaster.search` | ticketmaster.com | Searches live events — concerts, sports, arts & theater, family — by keyword, location… | ⚪ |
| `ticketmaster.searchAttractions` | ticketmaster.com | Finds attractions — artists, sports teams and other performers — by name and returns… | ⚪ |
| `ticketmaster.searchVenues` | ticketmaster.com | Finds venues by name or location (city/state/postal or geo radius) and returns each… | ⚪ |
| `tiktok.bookmarkVideo` | tiktok.com | Save a video to the signed-in caller's own Favorites/bookmarks. | ⚪ |
| `tiktok.deleteComment` | tiktok.com | Delete the caller's own comment — the reverse of postComment, and how a test write is… | ⚪ |
| `tiktok.deleteVideo` | tiktok.com | Delete a video the signed-in caller uploaded — the reverse of uploadVideo, and how an… | ⚪ |
| `tiktok.editProfile` | tiktok.com | Change the signed-in caller's own display name, bio or bioLink — the profile-edit form… | ⚪ |
| `tiktok.followUser` | tiktok.com | Follow a creator as the signed-in caller. | ⚪ |
| `tiktok.getHashtag` | tiktok.com | A hashtag's own facts — view count, description, whether it is currently promoted —… | 🟢 |
| `tiktok.getOwnProfile` | tiktok.com | The signed-in caller's own account facts — handle, bio, email/phone binding status… | ⚪ |
| `tiktok.getProfile` | tiktok.com | A creator's own profile as TikTok's server-rendered page carries it — id, uniqueId… | 🟢 |
| `tiktok.getSound` | tiktok.com | A sound/music track's own facts — title, artist, duration, how many videos use it —… | 🟢 |
| `tiktok.getTranscript` | tiktok.com | A video's own caption track, read off `itemStruct.video.subtitleInfos` — the WebVTT… | 🟢 |
| `tiktok.getVideo` | tiktok.com | One video's own facts, off the watch page's embedded state: caption, hashtags, create… | 🟢 |
| `tiktok.likeVideo` | tiktok.com | Like a video as the signed-in caller — the heart button. | ⚪ |
| `tiktok.listBookmarkedVideos` | tiktok.com | The signed-in caller's own saved videos — the companion read to bookmarkVideo. | ⚪ |
| `tiktok.listCaptionTracks` | tiktok.com | Which languages a video's captions are available in and which TikTok shows by default… | 🟢 |
| `tiktok.listCommentReplies` | tiktok.com | The replies under one comment thread, hidden behind TikTok's "N replies" button and… | 🟢 |
| `tiktok.listComments` | tiktok.com | What people said under a video — author, text, like count, reply count, whether pinned… | 🟢 |
| `tiktok.listConversations` | tiktok.com | The signed-in caller's own DM inbox — threads, last message, unread state. | ⚪ |
| `tiktok.listFollowingFeed` | tiktok.com | The signed-in viewer's Following feed — videos only from accounts they follow, in… | ⚪ |
| `tiktok.listForYouFeed` | tiktok.com | The signed-in viewer's own For You feed, the same personalised ranking `/foryou` shows… | ⚪ |
| `tiktok.listHashtagVideos` | tiktok.com | The videos under one hashtag, newest or top, paged — the companion read to getHashtag. | 🟢 |
| `tiktok.listNotifications` | tiktok.com | The signed-in caller's own activity feed — new followers, likes, comments and mentions. | ⚪ |
| `tiktok.listSoundVideos` | tiktok.com | The videos made with one sound, newest or top, paged — the companion read to getSound… | ⚪ |
| `tiktok.listUserVideos` | tiktok.com | What a creator has posted — id and caption for each — the door from a handle to their… | 🟢 |
| `tiktok.postComment` | tiktok.com | Post a comment on a video as the signed-in caller. | ⚪ |
| `tiktok.searchUsers` | tiktok.com | Search TikTok for creators matching a query and get back handle, nickname and follower… | 🟢 |
| `tiktok.searchVideos` | tiktok.com | Search TikTok the way the search box does and get back matching videos — id, caption… | 🟢 |
| `tiktok.sendDirectMessage` | tiktok.com | Send a DM as the signed-in caller. | ⚪ |
| `tiktok.unfollowUser` | tiktok.com | Unfollow a creator — the reverse of followUser. | ⚪ |
| `tiktok.unlikeVideo` | tiktok.com | Remove a like the caller placed — the reverse of likeVideo. | ⚪ |
| `tiktok.uploadVideo` | tiktok.com | Upload a video to the signed-in caller's own account, with caption, hashtags and… | ⚪ |
| `tilsonhomes.getElevationDetails` | tilsonhomes.com | Reads one plan's elevation — the exterior style's customization range (how far… | 🟢 |
| `tilsonhomes.listPlans` | tilsonhomes.com | Lists Tilson Homes' Build-On-Your-Land floor plans — model name, bed/bath/size and the… | 🟢 |
| `titlenine.calculateBraSize` | titlenine.com | Runs Title Nine's own bra-size calculator — chest, bust and under-bust measurements… | 🟢 |
| `tmobile.getUpgradeOffer` | t-mobile.com | Reads one t-mobile.com device page's own pricing call — real list price, real monthly… | 🟢 |
| `topviewtix.getPackageDetails` | topviewtix.com | Reads one TopView tour package in full — name, description, adult/kid price, and the… | 🟢 |
| `topviewtix.listPackages` | topviewtix.com | Lists every TopView tour package currently sold in New York (name, slug, starting… | 🟢 |
| `topviewtix.reserve` | topviewtix.com | Would pick a date, ticket quantity and seating tier for a package and hand back a… | ⚪ |
| `totalplastics.getQuoteFormFieldOptions` | totalplastics.com | Reads one named field off the live quote form (e.g. "Material Type" or "Annual… | 🟢 |
| `totalplastics.getQuoteFormFields` | totalplastics.com | Reads Total Plastics' own "Request a Quote" form (a POWR form-builder widget embedded… | 🟢 |
| `tradingview.getChartData` | www.tradingview.com | Get historical candlestick/OHLCV data for charting. | ⚪ |
| `tradingview.getCompanyInfo` | www.tradingview.com | Get fundamental information about a company: description, sector, market cap, employees. | ⚪ |
| `tradingview.getDividends` | www.tradingview.com | Get dividend history and yield information for a symbol. | ⚪ |
| `tradingview.getEarnings` | www.tradingview.com | Get earnings history and upcoming earnings dates for a symbol. | ⚪ |
| `tradingview.getFinancials` | www.tradingview.com | Get financial statements and historical data: revenue, earnings, balance sheet. | ⚪ |
| `tradingview.getMarketOverview` | www.tradingview.com | Get market overview data: top gainers, losers, most active symbols. | ⚪ |
| `tradingview.getNews` | www.tradingview.com | Get recent news articles related to a symbol or market. | ⚪ |
| `tradingview.getOptionChain` | www.tradingview.com | Get option chain data for symbols that have options. | ⚪ |
| `tradingview.getQuote` | www.tradingview.com | Get current price, change, and key metrics for a symbol. | ⚪ |
| `tradingview.getScreenerResults` | www.tradingview.com | Run a stock screener with filters and return matching symbols. | ⚪ |
| `tradingview.getTechnicalAnalysis` | www.tradingview.com | Get technical analysis signals and ratings for a symbol. | ⚪ |
| `tradingview.searchSymbols` | www.tradingview.com | Search for a symbol by ticker, company name, or description across all exchanges. | ⚪ |
| `travelinsured.getPlanQuote` | travelinsured.com | Prices Travel Insured's Essential/Deluxe/Platinum plans for a trip (destination… | ⚪ |
| `travelinsured.getZipInfo` | travelinsured.com | Resolves a US ZIP code to its state and country the way the quote flow's… | 🟢 |
| `travelinsured.searchDestinations` | travelinsured.com | Looks up a destination (country, city, or US state) the way Travel Insured's own… | 🟢 |
| `travelocity.getReservation` | travelocity.com | Reads an existing Travelocity trip the way the site's own "Find My Trip" page does —… | ⚪ |
| `travelocity.search` | travelocity.com | Searches Travelocity's live flight fares the way its own booking widget does — origin… | ⚪ |
| `travelocity.searchActivities` | travelocity.com | Searches Travelocity's live "Things to Do" activities and tours the way its own… | ⚪ |
| `travelocity.searchCars` | travelocity.com | Searches Travelocity's live car rental availability the way its own booking widget… | ⚪ |
| `travelocity.searchCruises` | travelocity.com | Searches Travelocity's live cruise sailings the way its own booking widget does —… | ⚪ |
| `travelocity.searchHotels` | travelocity.com | Searches Travelocity's live hotel availability the way its own booking widget does —… | ⚪ |
| `travelocity.searchPackages` | travelocity.com | Searches Travelocity's live bundled flight+hotel packages the way its own booking… | ⚪ |
| `trawickinternational.getPlanPremium` | trawickinternational.com | Reads the exact dollar premium and purchase handoff link for one plan off Trawick's… | 🟢 |
| `trawickinternational.getQuote` | trawickinternational.com | Submits Trawick's own homepage 'Get a Quote' travel-insurance form (destination… | 🟢 |
| `trektravel.getDeparturePricing` | trektravel.com | Reads one trip's real scheduled departure dates straight off its own page: each date's… | 🟢 |
| `trektravel.searchTours` | trektravel.com | Searches Trek Travel's real trip catalog (destination, activity, activity level, hotel… | 🟢 |
| `trojanstorage.getFacilityUnits` | trojanstorage.com | Reads one Trojan Storage facility's currently-listed units (from `listFacilities`'s… | 🟢 |
| `trojanstorage.listFacilities` | trojanstorage.com | Lists every Trojan Storage facility (56 today) with its address, phone, lat/lng and… | 🟢 |
| `trophysignaturehomes.compareHomes` | trophysignaturehomes.com | Runs the site's own compare: reads both homes and computes real price-per-square-foot… | 🟢 |
| `trophysignaturehomes.getHome` | trophysignaturehomes.com | Reads one home's full detail: address, price, sqft, beds/baths, status, stories… | 🟢 |
| `trophysignaturehomes.listPlans` | trophysignaturehomes.com | Lists the floor plans (as opposed to priced, addressed spec homes) available per… | ⚪ |
| `trophysignaturehomes.searchHomes` | trophysignaturehomes.com | Searches Trophy Signature Homes' current live inventory (all metros) by city… | 🟢 |
| `tryalma_com.listPages` | tryalma.com | List all pages and sections available on the Alma website by category. | 🟢 |
| `tryalma_com.search` | tryalma.com | Search Alma's content, including pages, resources, and team member profiles. | 🟢 |
| `tumblr.createPost` | tumblr.com | Create a new post on the signed-in account's blog. | ⚪ |
| `tumblr.deletePost` | tumblr.com | Delete a post from the signed-in account's blog. | ⚪ |
| `tumblr.editPost` | tumblr.com | Edit an existing post on the signed-in account's blog. | ⚪ |
| `tumblr.findBlog` | tumblr.com | Find a blog by name. | ⚪ |
| `tumblr.findTag` | tumblr.com | Find posts by searching a tag. | ⚪ |
| `tumblr.followBlog` | tumblr.com | Follow a blog from the signed-in account. | ⚪ |
| `tumblr.getBlogInfo` | tumblr.com | Get metadata for a blog including name, description, follower count, and post count. | ⚪ |
| `tumblr.getBlogPosts` | tumblr.com | List posts from a blog, newest first. | ⚪ |
| `tumblr.getPost` | tumblr.com | Get a single post by ID with its content and metadata. | ⚪ |
| `tumblr.getPostNotes` | tumblr.com | Get notes (likes and reblogs) on a post with the blog names that interacted with it. | ⚪ |
| `tumblr.getTagTimeline` | tumblr.com | Get posts tagged with a specific tag. | ⚪ |
| `tumblr.getTrendingPosts` | tumblr.com | Get posts that are currently trending on Tumblr. | ⚪ |
| `tumblr.getTrendingTags` | tumblr.com | Get tags that are currently trending on Tumblr. | ⚪ |
| `tumblr.likePost` | tumblr.com | Like a post from the signed-in account. | ⚪ |
| `tumblr.listBlogFollowers` | tumblr.com | List followers of a blog; caller must own the blog. | ⚪ |
| `tumblr.reblogPost` | tumblr.com | Reblog a post to the signed-in account's blog. | ⚪ |
| `tumblr.searchBlogPosts` | tumblr.com | Search posts within a specific blog. | ⚪ |
| `tumblr.searchPosts` | tumblr.com | Search all posts across Tumblr by keyword or phrase. | ⚪ |
| `tumblr.sendMessage` | tumblr.com | Send an ask (public or anonymous) to a blog. | ⚪ |
| `tumblr.unfollowBlog` | tumblr.com | Unfollow a blog from the signed-in account. | ⚪ |
| `tumblr.unlikePost` | tumblr.com | Remove a like from a post on the signed-in account. | ⚪ |
| `tumblr.unreblogPost` | tumblr.com | Remove a reblog from the signed-in account's blog. | ⚪ |
| `tweethunter.listFeatureCategories` | tweethunter.io | Lists Tweet Hunter's public feature categories: content creation, X analytics and… | 🟢 |
| `tweethunter.listFeatures` | tweethunter.io | Lists Tweet Hunter's publicly advertised X-account features, including scheduling… | 🟢 |
| `twiddy.getRentalDetail` | twiddy.com | Reads one rental's own detail page in full — description, address, pets-allowed flag… | 🟢 |
| `twiddy.getRentalQuote` | twiddy.com | Runs the site's own real-time weekly pricing engine for one property and a check-in… | 🟢 |
| `twiddy.searchRentals` | twiddy.com | Runs Twiddy's own Outer Banks vacation rental search (all 1,000+ managed properties in… | 🟢 |
| `twitch.createHighlight` | twitch.tv | Cuts a permanent Highlight from the signed-in streamer's own broadcast, including the… | 🟢 |
| `twitch.followChannel` | twitch.tv | Marks a channel as followed by the signed-in user. | ⚪ |
| `twitch.getChannel` | twitch.tv | Reads the signed-in streamer's channel settings: title, language and game/category… | 🟡 |
| `twitch.getChannelInfo` | twitch.tv | Reads a public channel's profile: display name, description, game, language, profile… | 🟢 |
| `twitch.getChannelSchedule` | twitch.tv | Reads a channel's scheduled broadcast times and upcoming events (if public). Logged… | ⚪ |
| `twitch.getFollowStatus` | twitch.tv | Checks whether the signed-in user follows a channel and when they started following. | ⚪ |
| `twitch.getSubscriptionStatus` | twitch.tv | Checks the signed-in user's subscription status to a specific channel (tier, renews… | ⚪ |
| `twitch.getVideo` | twitch.tv | Reads one public Twitch video by id or twitch.tv/videos link: title, length in… | 🟢 |
| `twitch.listCategories` | twitch.tv | Lists Twitch games/categories by viewership: name, box art, viewer count. | ⚪ |
| `twitch.listChannelClips` | twitch.tv | Lists clips from a channel: title, creator, creation date, view count. | ⚪ |
| `twitch.listChannelVods` | twitch.tv | Lists a channel's past broadcasts/VODs: title, creation date, duration, view count… | ⚪ |
| `twitch.listFollowedChannels` | twitch.tv | Lists channels the signed-in user follows: login, display name, game, whether live. | ⚪ |
| `twitch.listSubscriptions` | twitch.tv | Lists channels the signed-in user is subscribed to and the subscription tier. | ⚪ |
| `twitch.listWatchHistory` | twitch.tv | Lists recently watched streams and VODs for the signed-in user. | ⚪ |
| `twitch.listWatchLater` | twitch.tv | Lists videos the signed-in user has saved to watch later. | ⚪ |
| `twitch.searchChannels` | twitch.tv | Searches for Twitch channels by keyword: login, display name, description, game… | ⚪ |
| `twitch.searchVideos` | twitch.tv | Searches for VODs and clips: title, creator, publish date, view count, duration. | ⚪ |
| `twitch.sendChatMessage` | twitch.tv | Sends a message to a channel's live chat. | ⚪ |
| `twitch.setChannel` | twitch.tv | Updates the signed-in streamer's channel settings: title, language and game/category… | 🟡 |
| `twitch.signUp` | twitch.tv | Registers a new developer application on the Twitch console. | ⚪ |
| `twitch.unfollowChannel` | twitch.tv | Removes a channel from the signed-in user's followed list. | ⚪ |
| `uber.getDriverEarnings` | drivers.uber.com | Returns a signed-in driver's earnings summary for a specified week: trip count and net… | 🟡 |
| `ubereats.getCheckoutTotal` | ubereats.com | Would open a specific restaurant, add real menu items to the cart, set a delivery… | ⚪ |
| `ubereats.search` | ubereats.com | Would run Uber Eats' own restaurant search for a free-text query + address and return… | ⚪ |
| `uhc_smallbusiness.getGroupHealthQuote` | smallbusiness.uhc.com | Real level-funded and fully-insured small-group health plan premiums for a ZIP code… | 🟢 |
| `ulrichlifestyle.getConfigurator` | ulrichlifestyle.com | Reads one model's default configurator: its base price (before delivery/tax) plus… | 🟢 |
| `ulrichlifestyle.listModels` | ulrichlifestyle.com | Lists every shed/cabin model in Ulrich's current catalog with its code and name — the… | 🟢 |
| `ulrichlifestyle.priceConfiguration` | ulrichlifestyle.com | Configures and prices one specific build (dimensions, wall height, siding, delivery… | 🟢 |
| `upkeepstl_com.estimatePlanCost` | upkeepstl.com | Computes the total contract price and per-year price for one plan selection (home… | 🟢 |
| `upkeepstl_com.getPlanBuilder` | upkeepstl.com | Reads UPKEEP's public 'Build Your Plan' quote-form schema: the home-warranty plan… | 🟢 |
| `ups.getRate` | ups.com | Prices a domestic shipment across UPS's own service levels (Ground, 3 Day Select, 2nd… | 🟢 |
| `urbanoutfitters.browseCategory` | urbanoutfitters.com | Lists the products under one of Urban Outfitters' own department pages — the site's… | ⚪ |
| `urbanoutfitters.checkGiftCardBalance` | urbanoutfitters.com | Checks the remaining balance on a Urban Outfitters gift card from the card number and… | ⚪ |
| `urbanoutfitters.checkStock` | urbanoutfitters.com | Answers whether one specific size in one specific colour of a Urban Outfitters product… | ⚪ |
| `urbanoutfitters.checkStorePickup` | urbanoutfitters.com | Answers whether one specific size and colour of a product can be collected from a… | ⚪ |
| `urbanoutfitters.findStores` | urbanoutfitters.com | Finds Urban Outfitters stores near a place — postcode, city, or a latitude/longitude —… | ⚪ |
| `urbanoutfitters.getDeals` | urbanoutfitters.com | Reads the sales and promotions Urban Outfitters is currently running as the site… | ⚪ |
| `urbanoutfitters.getProduct` | urbanoutfitters.com | Reads one Urban Outfitters product in full the way its own product page does — the… | ⚪ |
| `urbanoutfitters.getReviews` | urbanoutfitters.com | Reads the customer reviews on one Urban Outfitters product — the star rating and its… | ⚪ |
| `urbanoutfitters.search` | urbanoutfitters.com | Searches Urban Outfitters' live catalogue the way the site's own search bar does and… | ⚪ |
| `urbanoutfitters.trackOrder` | urbanoutfitters.com | Looks up the status of a Urban Outfitters order from the order number and the email it… | ⚪ |
| `usps.getRate` | usps.com | Prices a domestic package across USPS's own Mail Services (Priority Mail Express… | 🟢 |
| `vbt.getTourDepartures` | vbt.com | Reads one VBT tour's own public page and returns its Tour-Only and Tour+Travel-Package… | 🟢 |
| `vbt.listTours` | vbt.com | Lists every self-guided/guided bike and walking tour VBT publishes, straight off its… | 🟢 |
| `verizon.getPlanTotal` | verizon.com | Walks the new-line plan-builder flow (verizon.com/smartphones/?isMyPlanFlow=true → a… | ⚪ |
| `vervecoffee.listRoastersChoiceSubscriptions` | vervecoffee.com | Lists Verve's five real Roaster's Choice coffee subscription products (single origin… | 🟢 |
| `vervecoffee.matchCoffeeSubscription` | vervecoffee.com | Runs Verve's real 'Find Your Coffee Match' quiz end to end — the same 5 questions… | 🟢 |
| `vessi.getFitGuide` | vessi.com | Reads Vessi's own computed per-style fit-guide — a size-offset recommendation per foot… | 🟢 |
| `vessi.getProduct` | vessi.com | Reads one product's complete colorway x size grid with live price, SKU and availability. | 🟢 |
| `vessi.listProducts` | vessi.com | Lists every Vessi product from the storefront's own live catalog, optionally narrowed… | 🟢 |
| `vessi.searchProducts` | vessi.com | Searches the live catalog by a fuzzy match on product title or handle. | 🟢 |
| `viewrail.getDesignEstimate` | viewrail.com | Submits a drawn Victor layout (posts, runs, materials, mounting style) and returns the… | ⚪ |
| `viewrail.listInfillOptions` | viewrail.com | Lists Victor's infill choices for a run — stainless cable, rod, or glass panel — with… | ⚪ |
| `viewrail.listMaterials` | viewrail.com | Lists the metal and metal-look composite families Victor's cable railing configurator… | 🟢 |
| `viewrail.listMountingStyles` | viewrail.com | Lists Victor's post-mounting styles (Surface Mount, Side Mount, SLIM Side Mount, Bump… | 🟢 |
| `villagerealtyobx.getQuote` | villagerealtyobx.com | Gets a real-time price quote for one Village Realty property and date range — the… | 🟢 |
| `villagerealtyobx.searchRentals` | villagerealtyobx.com | Searches Village Realty's own 900+ Outer Banks rental listings the way… | 🟢 |
| `visible.checkCoverage` | visible.com | Returns Visible's network coverage at a caller-supplied address or ZIP, broken down by… | 🟢 |
| `visible.checkDeviceCompatibility` | visible.com | Takes a caller's device — by IMEI, or by make and model — and answers whether it can… | ⚪ |
| `visible.getInternationalRates` | visible.com | Returns what calling, texting and using data from abroad costs on Visible — which… | ⚪ |
| `visible.getPhone` | visible.com | Returns one device Visible sells, in full, from its catalogue URL or product id —… | 🟢 |
| `visible.getPlans` | visible.com | Returns Visible's current prepaid plan line-up as structured rows — the plan name, the… | 🟢 |
| `visible.getTradeInValue` | visible.com | Returns what Visible will credit for a caller's current device against a new one — the… | ⚪ |
| `visible.listDeals` | visible.com | Returns the promotions Visible is running right now and what each one is actually… | 🟢 |
| `visible.listWearables` | visible.com | Returns the smartwatches and connected devices Visible supports and what a line for… | ⚪ |
| `visible.searchHelp` | visible.com | Searches Visible's support estate and returns the matching articles with their answers… | ⚪ |
| `visible.searchPhones` | visible.com | Returns the phones Visible currently sells, with the facts a purchase turns on —… | 🟢 |
| `vistaprint.checkOrderDeadline` | vistaprint.com | Checks the order deadline and turnaround time for packaging or product orders at… | ⚪ |
| `vistaprint.getShippingBoxPrice` | vistaprint.com | Prices Vistaprint's Full-Print Shipping Boxes (product PRD-Y1LEPL3MX) for a given box… | 🟢 |
| `voluspa.getFragranceQuizIntro` | voluspa.com | Reads the "Find Your Fragrance" quiz suite's entry screen — the two branching paths… | 🟡 |
| `voluspa.matchFragranceQuiz` | voluspa.com | Drives the actual multi-step quiz end to end with a caller-supplied path and set of… | ⚪ |
| `vscode.getDoc` | code.visualstudio.com | Returns one code.visualstudio.com documentation page's structured content by its URL —… | 🟢 |
| `vscode.listDocPages` | code.visualstudio.com | Lists every doc page code.visualstudio.com publishes, parsed from the site's own… | 🟢 |
| `walkerhughes.findNearestOffice` | walkerhughes.com | Matches a caller's free-text location (a city, a two-letter state, or "City, ST")… | 🟢 |
| `walkerhughes.listOffices` | walkerhughes.com | Lists all of WalkerHughes' real offices (25, not the 24 ANGLE counted off the form's… | 🟢 |
| `walkerhughes.listQuoteProducts` | walkerhughes.com | Lists WalkerHughes' real 16-product Personal/Business insurance catalog straight off… | 🟢 |
| `walkerhughes.submitQuoteApplication` | walkerhughes.com | Would submit the /start-quote application itself (POST to the site's own… | ⚪ |
| `walmart.addAddress` | walmart.com | Saves a new delivery address on the signed-in account. | ⚪ |
| `walmart.addToCart` | walmart.com | Puts an item in the cart in the quantity asked for and reports what the cart then holds. | ⚪ |
| `walmart.addToList` | walmart.com | Adds an item to one of the shopper's saved lists. | ⚪ |
| `walmart.browseBrand` | walmart.com | Lists the products on a brand's own Walmart page (e.g. Samsung) with prices, the way a… | ⚪ |
| `walmart.browseCategory` | walmart.com | Lists products under one of the site's own department/category pages (e.g.… | ⚪ |
| `walmart.checkStock` | walmart.com | Answers whether a specific item is actually available right now at a given store or… | ⚪ |
| `walmart.createList` | walmart.com | Creates a new saved list with a name. | ⚪ |
| `walmart.findStores` | walmart.com | Finds nearby Walmart stores for a 5-digit US ZIP code — address, phone, hours… | 🔴 |
| `walmart.getAccountProfile` | walmart.com | Reads the signed-in shopper's profile — name, email, Walmart+ membership status. | ⚪ |
| `walmart.getCart` | walmart.com | Reads what is in the cart — items, quantities, prices and the subtotal. | ⚪ |
| `walmart.getList` | walmart.com | Reads one saved list's items and prices for a list id `listLists` returned. | ⚪ |
| `walmart.getOrder` | walmart.com | Reads one of the signed-in shopper's orders in full — items, delivery or pickup… | ⚪ |
| `walmart.getPickupDeliverySlots` | walmart.com | Reads the available pickup or delivery time windows for a store/zip — the scheduling… | ⚪ |
| `walmart.getProduct` | walmart.com | Reads one product's full page — price, availability summary, images, brand, full… | ⚪ |
| `walmart.getRegistry` | walmart.com | Reads one public registry — the items on it, how many are wanted and how many were… | ⚪ |
| `walmart.getSeller` | walmart.com | Reads a Marketplace seller's page — name, rating, review count, return policy — for a… | ⚪ |
| `walmart.getStore` | walmart.com | Reads one store's page — address, phone, opening hours, and which departments and… | ⚪ |
| `walmart.getWeeklyAd` | walmart.com | Reads the current local weekly ad / rollback & clearance circular for a store or zip —… | ⚪ |
| `walmart.listAddresses` | walmart.com | Lists the delivery addresses saved on the signed-in account. | ⚪ |
| `walmart.listDeals` | walmart.com | Lists what is on sale right now — Rollbacks, clearance and the site's current deal… | ⚪ |
| `walmart.listDepartments` | walmart.com | Lists Walmart's departments and their sub-categories with the browse id each one opens… | ⚪ |
| `walmart.listLists` | walmart.com | Lists the signed-in shopper's saved lists — the door `getList` needs. | ⚪ |
| `walmart.listOrders` | walmart.com | Lists the signed-in shopper's orders — date, total, status and the items in each — the… | ⚪ |
| `walmart.listPurchasedItems` | walmart.com | Lists the items the signed-in shopper has bought before — Walmart's 'My Items' /… | ⚪ |
| `walmart.listQuestions` | walmart.com | Reads the customer questions and answers under a product. | ⚪ |
| `walmart.listReviews` | walmart.com | Reads a product's customer reviews — star rating, title, text, date, verified-purchase… | ⚪ |
| `walmart.listSellerOffers` | walmart.com | Lists every seller offering one item — Walmart itself and Marketplace sellers — with… | ⚪ |
| `walmart.removeFromCart` | walmart.com | Takes an item out of the cart. | ⚪ |
| `walmart.removeFromList` | walmart.com | Removes an item from one of the shopper's saved lists. | ⚪ |
| `walmart.search` | walmart.com | Searches walmart.com's catalog for a keyword and returns matching products — item id… | 🟢 |
| `walmart.searchRegistries` | walmart.com | Finds a public wedding or baby registry by the registrant's name — the door… | ⚪ |
| `walmart.setPreferredStore` | walmart.com | Sets the shopper's store, so stock, prices and pickup slots answer for that store. | ⚪ |
| `walmart.startReturn` | walmart.com | Starts a return for an item in a delivered order. | ⚪ |
| `walmart.suggestSearches` | walmart.com | Autocomplete for the search bar — what the site suggests as you type a partial word… | ⚪ |
| `walmart.trackOrder` | walmart.com | Looks up shipment/delivery status for a guest order by order number plus the email or… | ⚪ |
| `walmart.updateCartItem` | walmart.com | Changes the quantity of an item already in the cart. | ⚪ |
| `walmart.updateProfile` | walmart.com | Edits the signed-in shopper's profile name. | ⚪ |
| `waterfurnace.estimateGeothermalSavings` | waterfurnace.com | Runs the Savings Calculator's real backend computation (the same one the site's 3-step… | 🟢 |
| `waterfurnace.lookupHomeDetails` | waterfurnace.com | Runs the Savings Calculator's own home-details lookup for an address/zip — the same… | 🟢 |
| `wearehirschfeld.getContactForm` | wearehirschfeld.com | Reads Hirschfeld's Connect contact form (wearehirschfeld.com/connect/ by default) and… | 🟢 |
| `wearehirschfeld.listPages` | wearehirschfeld.com | Lists every page wearehirschfeld.com's own page-sitemap.xml publishes — url and… | 🟢 |
| `weather_channel.getAirQuality` | weather.com | Current air quality index (AQI) and conditions — pollutant levels (ozone, PM2.5, etc). | ⚪ |
| `weather_channel.getAlertDetails` | weather.com | Full details of one weather alert — description, areas affected, impact statement. | ⚪ |
| `weather_channel.getAlmanac` | weather.com | Historical climate normals — average high/low temperatures and records for a date. | ⚪ |
| `weather_channel.getCMSContent` | weather.com | CMS-managed content (articles, how-to guides) — retrieve by content id or path. | ⚪ |
| `weather_channel.getCurrentConditions` | weather.com | Current conditions for a location — temperature, feels-like, dew point, humidity… | ⚪ |
| `weather_channel.getCurrentTropicalPosition` | weather.com | Current position and details of active tropical cyclones/hurricanes — location… | ⚪ |
| `weather_channel.getDailyForecast` | weather.com | Daily forecast — high/low, conditions, precipitation chance, wind. 10-day and 15-day… | ⚪ |
| `weather_channel.getFifteenMinuteForecast` | weather.com | Sub-hourly precipitation forecast — arrival time and intensity of rain/snow in… | ⚪ |
| `weather_channel.getHistoricalDaily` | weather.com | Historical daily summaries — past 30 days of high, low, and precipitation records. | ⚪ |
| `weather_channel.getHistoricalDailySummary` | weather.com | 30-day historical summary — aggregated daily data (highs, lows, precipitation) for the… | ⚪ |
| `weather_channel.getHistoricalHourly` | weather.com | Historical hourly observations — past 24-48 hours of actual recorded conditions. | ⚪ |
| `weather_channel.getHourlyAirQuality` | weather.com | Hourly air quality forecast — AQI and pollutant predictions at hourly intervals. | ⚪ |
| `weather_channel.getHourlyForecast` | weather.com | Hourly forecast for a location — temperature, conditions, precipitation, wind. 2-hour… | ⚪ |
| `weather_channel.getLocation` | weather.com | Gets location details by coordinates (latitude/longitude) — returns location id, name… | ⚪ |
| `weather_channel.getMinutelyPrecipitation` | weather.com | Minute-level precipitation data — highly granular rainfall/snowfall timing and… | ⚪ |
| `weather_channel.getObservations` | weather.com | Current observations from weather stations — actual measured conditions from the field. | ⚪ |
| `weather_channel.getPollenForecast` | weather.com | 7-day pollen forecast by type (trees, grass, ragweed) — pollen levels and trends for… | ⚪ |
| `weather_channel.getPollenHealth` | weather.com | Cognitive/health indices related to pollen and air quality — allergy forecasts, cold &… | ⚪ |
| `weather_channel.getRadarTiles` | weather.com | Radar imagery tiles for map overlays — precipitation radar mosaic for a region. | ⚪ |
| `weather_channel.getTropicalCone` | weather.com | Forecast track cone for tropical systems — predicted path uncertainty band. | ⚪ |
| `weather_channel.getWeeklyAd` | weather.com | Weekly promotional content and special notices — featured forecasts or seasonal alerts. | ⚪ |
| `weather_channel.listAlerts` | weather.com | Severe weather alerts (warnings, watches) for a location — headlines, types… | ⚪ |
| `weather_channel.searchLocations` | weather.com | Autocomplete for location names (cities, ZIP codes) — returns matching locations with… | ⚪ |
| `weather_channel.searchNews` | weather.com | Weather-related articles and videos from the site's content — search by keyword. | ⚪ |
| `wellfound.getCompany` | wellfound.com | Reads one startup's `/company/<slug>` profile — the longer product description (HTML)… | ⚪ |
| `wellfound.getJob` | wellfound.com | Reads one job posting in full the way its own detail page does — takes the `url` a… | 🟢 |
| `wellfound.getJobCollection` | wellfound.com | Reads one curated collection's postings the way `/job-collections/<slug>` does — the… | ⚪ |
| `wellfound.getSalaryBenchmarks` | wellfound.com | Reads Wellfound's own published startup compensation benchmarks — what a given role… | ⚪ |
| `wellfound.listCompanyJobs` | wellfound.com | Lists the open roles at one startup the way `/company/<slug>/jobs` does — the "is this… | ⚪ |
| `wellfound.listJobCollections` | wellfound.com | Lists Wellfound's own curated job collections — the editorial groupings the site… | ⚪ |
| `wellfound.searchCompanies` | wellfound.com | Finds startups the way Wellfound's own search groups them — one row per COMPANY, off… | 🟢 |
| `wellfound.searchJobs` | wellfound.com | Searches Wellfound's startup job board — by role (`/role/<slug>`) or by city… | 🟢 |
| `wholefoodsmarket.listStores` | wholefoodsmarket.com | Lists nearby Whole Foods stores by ZIP code or location. | ⚪ |
| `wholefoodsmarket.search` | wholefoodsmarket.com | Searches Whole Foods product catalog with pricing and availability. | 🟢 |
| `wikipedia_standings.search` | en.wikipedia.org | Searches Wikipedia for sports standings pages and extracts league standings with goal… | 🟢 |
| `wikipedia.compareRevisions` | wikipedia.org | The diff between two revisions of an article — what text was added and removed, line… | ⚪ |
| `wikipedia.createPage` | wikipedia.org | Create an article that does not exist yet, under the caller's account. `POST… | ⚪ |
| `wikipedia.editPage` | wikipedia.org | Change an article — replace a page or one of its sections with new wikitext, under the… | ⚪ |
| `wikipedia.getArticle` | wikipedia.org | The whole article as an agent wants to read it: title, Wikipedia's own short… | 🟢 |
| `wikipedia.getArticleHtml` | wikipedia.org | The article's rendered HTML — the real page body, with tables, references, footnotes… | 🟢 |
| `wikipedia.getCurrentUser` | wikipedia.org | Who the caller is signed in as on Wikipedia — username, user id, edit count, the… | ⚪ |
| `wikipedia.getFeaturedContent` | wikipedia.org | Wikipedia's own front page for a given date, as data — the featured article, the… | ⚪ |
| `wikipedia.getImage` | wikipedia.org | One media file's real details — the full-size url, dimensions, MIME type, and the… | ⚪ |
| `wikipedia.getInfobox` | wikipedia.org | The grey fact box at the top right of an article, as key/value pairs a caller can… | 🟢 |
| `wikipedia.getOnThisDay` | wikipedia.org | What happened on this calendar day in history, according to Wikipedia — events… | ⚪ |
| `wikipedia.getPageviews` | wikipedia.org | How many people actually read an article, per day, over a date range — the closest… | ⚪ |
| `wikipedia.getRandomArticle` | wikipedia.org | A genuinely random Wikipedia article, or several — title, url and summary. | ⚪ |
| `wikipedia.getRevision` | wikipedia.org | One specific revision of an article by id — its content, editor, timestamp, size and… | ⚪ |
| `wikipedia.getSection` | wikipedia.org | One named or numbered section of an article as plain text, without downloading the… | 🟢 |
| `wikipedia.getSections` | wikipedia.org | The article's table of contents — every section with its number, heading, nesting… | 🟢 |
| `wikipedia.getSummary` | wikipedia.org | The lead of an article and nothing else — the first paragraph as plain text and as… | 🟢 |
| `wikipedia.getUser` | wikipedia.org | A Wikipedia editor's public record — registration date, total edit count, and the user… | ⚪ |
| `wikipedia.getWikitext` | wikipedia.org | The article's raw wikitext source — what an editor sees in the edit box, templates and… | 🟢 |
| `wikipedia.listBacklinks` | wikipedia.org | What links HERE — every Wikipedia article pointing at this one, by title and url. | 🟢 |
| `wikipedia.listCategories` | wikipedia.org | The categories an article belongs to — Wikipedia's own subject taxonomy, which is how… | ⚪ |
| `wikipedia.listCategoryMembers` | wikipedia.org | Every article in a category — hand it "Coffee" and get the pages Wikipedia files under… | ⚪ |
| `wikipedia.listExternalLinks` | wikipedia.org | Every link OFF Wikipedia from one article — the sources, official sites and references… | ⚪ |
| `wikipedia.listImages` | wikipedia.org | Every image, diagram, audio clip and video in an article, in page order — each with… | ⚪ |
| `wikipedia.listLanguages` | wikipedia.org | What this article is called in every other language Wikipedia has it in, with the url… | ⚪ |
| `wikipedia.listLinks` | wikipedia.org | Every other Wikipedia article this one links to, by title and url. | 🟢 |
| `wikipedia.listMostViewed` | wikipedia.org | What Wikipedia's readers looked at most — the day's or the edition's top articles with… | ⚪ |
| `wikipedia.listNotifications` | wikipedia.org | The caller's Wikipedia notifications — replies to them, thanks they were sent… | ⚪ |
| `wikipedia.listRecentChanges` | wikipedia.org | What is being edited on Wikipedia right now — a live feed of recent edits with page… | ⚪ |
| `wikipedia.listRelated` | wikipedia.org | Articles about things like this one — Wikipedia's own "more like this", for a caller… | ⚪ |
| `wikipedia.listRevisions` | wikipedia.org | An article's edit history — each revision with its id, timestamp, editor, edit… | ⚪ |
| `wikipedia.listUserContributions` | wikipedia.org | Every edit one named editor has made, newest first — page, timestamp, edit summary and… | ⚪ |
| `wikipedia.listWatchlist` | wikipedia.org | The caller's own watchlist — the pages they follow and the recent changes to them… | ⚪ |
| `wikipedia.postTalkMessage` | wikipedia.org | Post a message to an article's talk page or to a user's talk page, under the caller's… | ⚪ |
| `wikipedia.search` | wikipedia.org | Search the encyclopedia the way a person types into Wikipedia's search box, and get… | 🟢 |
| `wikipedia.searchNearby` | wikipedia.org | Wikipedia articles about places near a point — hand it a latitude and longitude and a… | ⚪ |
| `wikipedia.suggestTitles` | wikipedia.org | Autocomplete a partial title the way Wikipedia's search box does as you type — hand it… | 🟢 |
| `wikipedia.thankUser` | wikipedia.org | Send another editor Wikipedia's built-in "thanks" for a specific edit — a one-click… | ⚪ |
| `wikipedia.undoRevision` | wikipedia.org | Undo one edit to an article — MediaWiki's own revert, which reverses a single revision… | ⚪ |
| `wikipedia.unwatchPage` | wikipedia.org | Remove an article from the caller's watchlist. `POST /w/api.php?action=watch&unwatch=1`. | ⚪ |
| `wikipedia.watchPage` | wikipedia.org | Add an article to the caller's watchlist so they are told when it changes. `POST… | ⚪ |
| `winestyles.listStores` | winestyles.com | Lists the WineStyles franchise locations that currently offer online order-for-pickup… | 🟢 |
| `winestyles.searchStoreInventory` | winestyles.com | Searches one WineStyles store's own live pickup catalog for a term (grape, style… | 🟢 |
| `wunderflats.search` | wunderflats.com | Searches for furnished apartments in a specified city, returning listings with price… | 🟢 |
| `x.userTimeline` | x.com | Reads a public user account's recent timeline to find posts. | 🟢 |
| `xpresswellnessurgentcare.checkWaitTime` | xpresswellnessurgentcare.com | Reads one clinic's live estimated wait time, next-availability text, hours-today… | 🟢 |
| `xpresswellnessurgentcare.listFacilities` | xpresswellnessurgentcare.com | Lists Xpress Wellness / Integrity Urgent Care clinics — recovered by confirming each… | 🟢 |
| `yahoo_finance.getAnalystEstimates` | finance.yahoo.com | Reads Wall Street's own consensus numbers for a ticker — revenue and earnings… | 🟢 |
| `yahoo_finance.getCompanyProfile` | finance.yahoo.com | Reads a ticker's company profile the way the site's own Profile tab does — sector… | 🟢 |
| `yahoo_finance.getFinancials` | finance.yahoo.com | Reads a ticker's income statement, balance sheet and cash-flow statement the way the… | 🟢 |
| `yahoo_finance.getHistoricalPrices` | finance.yahoo.com | Reads a ticker's daily open/high/low/close/volume history over a requested range, the… | 🟢 |
| `yahoo_finance.getHolders` | finance.yahoo.com | Reads who owns a ticker — the top institutional and mutual-fund holders and the… | 🟢 |
| `yahoo_finance.getKeyStatistics` | finance.yahoo.com | Reads the fuller valuation and share-statistics sheet the site's own Statistics tab… | 🟢 |
| `yahoo_finance.getMarketSummary` | finance.yahoo.com | Reads the market-wide overview the site's own Markets home shows — the major indices… | 🟢 |
| `yahoo_finance.getNews` | finance.yahoo.com | Reads the news stories Yahoo Finance itself has attached to a ticker's News tab —… | 🟢 |
| `yahoo_finance.getOptionsChain` | finance.yahoo.com | Reads a ticker's options chain — calls and puts by strike and expiration, with… | 🟢 |
| `yahoo_finance.getQuote` | finance.yahoo.com | Reads the live quote header for one ticker ("AAPL") the way the site's own quote page… | 🟡 |
| `yahoo_finance.getTrendingTickers` | finance.yahoo.com | Reads what Yahoo Finance itself is showing as trending right now — the same sidebar… | 🟡 |
| `yahoo_finance.listCryptoPrices` | finance.yahoo.com | Reads the live crypto leaderboard the way the site's own Crypto markets page does —… | 🟢 |
| `yahoo_finance.listCurrencyRates` | finance.yahoo.com | Reads live currency-pair rates the way the site's own Currencies markets page does —… | 🟢 |
| `yahoo_finance.searchSymbols` | finance.yahoo.com | Resolves what a person would type — a company name ("Apple"), a ticker ("AAPL") or a… | 🟢 |
| `yahoo_mail.deleteMessage` | mail.yahoo.com | Deletes one of the CALLER's own messages (moves it to Trash, matching what the site's… | ⚪ |
| `yahoo_mail.getMessage` | mail.yahoo.com | Reads one message in full from the CALLER's own mailbox — sender, recipients, subject… | ⚪ |
| `yahoo_mail.listFolders` | mail.yahoo.com | Lists the CALLER's own mail folders — Inbox, Sent, Drafts, Spam, Trash and any custom… | ⚪ |
| `yahoo_mail.listMessages` | mail.yahoo.com | Lists messages in the CALLER's own mailbox, newest first, from a chosen folder (inbox… | ⚪ |
| `yahoo_mail.markAsRead` | mail.yahoo.com | Marks one or more of the CALLER's own messages read or unread. | ⚪ |
| `yahoo_mail.moveMessage` | mail.yahoo.com | Moves one of the CALLER's own messages to another folder (archive, trash, a custom… | ⚪ |
| `yahoo_mail.searchMessages` | mail.yahoo.com | Searches the CALLER's own mailbox the way Yahoo Mail's own search bar does — by… | ⚪ |
| `yahoo_mail.sendMessage` | mail.yahoo.com | Sends an email from the CALLER's own Yahoo Mail account. | ⚪ |
| `yahoo_sports.findPlayers` | sports.yahoo.com | Finds players on one team's roster by name — the door for `getPlayer`, so a caller… | 🟢 |
| `yahoo_sports.getFantasyLeague` | sports.yahoo.com | Reads the CALLER's own fantasy football league — standings, matchups, rosters — the… | ⚪ |
| `yahoo_sports.getGame` | sports.yahoo.com | Reads one game in full the way its own game page does — final or live score, box score… | 🟢 |
| `yahoo_sports.getNews` | sports.yahoo.com | Reads the sports news and analysis stories Yahoo Sports itself is running right now… | ⚪ |
| `yahoo_sports.getPlayer` | sports.yahoo.com | Reads one player's profile and current-season stat line off their own player page —… | 🟢 |
| `yahoo_sports.getRssFeed` | sports.yahoo.com | Reads a league's own RSS feed the way `finance.yahoo.com/news/rssindex` does for… | ⚪ |
| `yahoo_sports.getSchedule` | sports.yahoo.com | Reads a team's full schedule for the season the way its own Schedule page does — every… | 🟡 |
| `yahoo_sports.getScoreboard` | sports.yahoo.com | Reads today's games for one league — NFL, NBA, MLB, NHL, college football, college… | 🟢 |
| `yahoo_sports.getStandings` | sports.yahoo.com | Reads a league's full standings table the way its own Standings page does — division… | 🟡 |
| `yahoo_sports.getTeamRoster` | sports.yahoo.com | Reads one team's current roster the way its own Roster page does — every player… | ⚪ |
| `yahoo_sports.listTeams` | sports.yahoo.com | Lists every team in a league — the door a caller needs before asking for one team's… | 🟢 |
| `yahoo_sports.setFantasyLineup` | sports.yahoo.com | Sets the CALLER's own fantasy lineup for the week, once the caller has signed in… | ⚪ |
| `ycombinator.getArticle` | ycombinator.com | Returns one YC Startup Library article — its title, author, description, markdown… | 🟢 |
| `ycombinator.getBlogPost` | ycombinator.com | Returns one YC blog post — title, author, publish date, and the flattened body text in… | 🟢 |
| `ycombinator.search` | ycombinator.com | Full-text searches the YC Startup Library (application and interview guidance… | 🟡 |
| `yelp.search` | yelp.com | Runs Yelp's own business search for a term and location and returns real… | 🟢 |
| `yorkwallcoverings.addToCart` | yorkwallcoverings.com | Hands back the shopper's own York product page — the exact Add to cart button for this… | 🟢 |
| `yorkwallcoverings.getProduct` | yorkwallcoverings.com | Reads one York product page in full — SKU, live price, in-stock/out-of-stock status… | 🟢 |
| `yorkwallcoverings.search` | yorkwallcoverings.com | Searches York's live public catalog (wallpaper, wall murals, grasscloth) by keyword —… | 🟢 |
| `yourarborhome.bookSelfTour` | yourarborhome.com | Would complete a self-guided tour booking on the caller's behalf through NterNow's own… | ⚪ |
| `yourarborhome.getHome` | yourarborhome.com | Reads one Arbor Homes listing by the `uniqueName` id `searchHomes` returns — the same… | 🟢 |
| `yourarborhome.searchHomes` | yourarborhome.com | Reads Arbor Homes' live quick move-in inventory off yourarborhome.com/homes and… | 🟢 |
| `youtube.addToPlaylist` | youtube.com | Add a video to, or remove one from, one of the signed-in account's own playlists. | 🟡 |
| `youtube.createChannel` | youtube.com | Creates the signed-in Google account's YouTube CHANNEL, using the account's own name… | 🟡 |
| `youtube.createPlaylist` | youtube.com | Create a playlist on the signed-in account. | 🟡 |
| `youtube.deleteVideo` | youtube.com | Permanently delete one of the signed-in account's own videos. | 🟢 |
| `youtube.findChannel` | youtube.com | Turn what a person would say about a channel — a name ("MrBeast"), an @handle, or any… | 🟢 |
| `youtube.getChannel` | youtube.com | A channel's own page as facts: display name, @handle, an abbreviated subscriber count… | 🟢 |
| `youtube.getLiveChat` | youtube.com | The messages scrolling past a live stream — each with its author, text and timestamp. | 🟢 |
| `youtube.getPlaylist` | youtube.com | A playlist's own facts: title, description, the channel that owns it, how many videos… | 🟢 |
| `youtube.getTranscript` | youtube.com | Returns a YouTube video's own caption transcript — one row per caption line, each… | 🟢 |
| `youtube.getVideo` | youtube.com | Everything the watch page says about one video without playing it: title, channel name… | 🟢 |
| `youtube.likeVideo` | youtube.com | Like or dislike a video as the signed-in account, or clear the rating. | ⚪ |
| `youtube.listCaptionTracks` | youtube.com | Which languages a video's captions are available in, whether each was written by a… | 🟢 |
| `youtube.listChannelLiveStreams` | youtube.com | A channel's Live tab — the streams it has run, upcoming and past, with their scheduled… | 🟢 |
| `youtube.listChannelPlaylists` | youtube.com | The playlists a channel has published, each with its id, title, video count and… | 🟢 |
| `youtube.listChannelPosts` | youtube.com | A channel's Community tab — the text, image and poll posts a creator writes between… | 🟢 |
| `youtube.listChannelShorts` | youtube.com | A channel's Shorts tab — its vertical short-form videos, which sit in their own tab… | 🟢 |
| `youtube.listChannelVideos` | youtube.com | What a channel has published, newest first and paged — each video's id, title, view… | 🟢 |
| `youtube.listChapters` | youtube.com | A video's own chapter markers — the labelled sections YouTube shows on the scrub bar —… | 🟢 |
| `youtube.listCommentReplies` | youtube.com | The replies under one comment thread, which YouTube hides behind a "N replies" button… | 🟢 |
| `youtube.listComments` | youtube.com | What people said under a video — each comment's author, the text, its like count… | 🟢 |
| `youtube.listHashtagVideos` | youtube.com | The videos under a hashtag — YouTube's own /hashtag/<tag> page. | 🟢 |
| `youtube.listHomeFeed` | youtube.com | The videos on the signed-in account's own YouTube home page — the personalized… | 🟡 |
| `youtube.listLikedVideos` | youtube.com | The videos the signed-in account has liked. | 🟡 |
| `youtube.listMyVideos` | youtube.com | The videos on the signed-in account's own channel, private and unlisted ones included… | 🟢 |
| `youtube.listPlaylistVideos` | youtube.com | The videos inside a playlist, in the playlist's own order and paged — each video's id… | 🟢 |
| `youtube.listRelatedVideos` | youtube.com | The videos YouTube itself puts next to this one — the "up next" rail — each with its… | 🟢 |
| `youtube.listStreamFormats` | youtube.com | The renditions a video is actually available in — resolution, frame rate, codec… | 🟢 |
| `youtube.listSubscriptions` | youtube.com | The channels the signed-in account subscribes to. | ⚪ |
| `youtube.listTrending` | youtube.com | YouTube's Trending feed — what is being watched across the site right now, and the… | ⚪ |
| `youtube.listWatchHistory` | youtube.com | What the signed-in account has watched, newest first. | ⚪ |
| `youtube.listWatchLater` | youtube.com | The signed-in account's Watch Later queue. | 🟡 |
| `youtube.postComment` | youtube.com | Leave a comment on a video as the signed-in account. | ⚪ |
| `youtube.replyToComment` | youtube.com | Reply to an existing comment as the signed-in account. | ⚪ |
| `youtube.search` | youtube.com | Search YouTube the way a person types into its search box, and get back the videos the… | 🟢 |
| `youtube.searchWithinChannel` | youtube.com | Search one channel's own videos rather than the whole site — the search box that… | 🟢 |
| `youtube.setCaptions` | youtube.com | Upload a caption file (SRT or VTT) for one language on one of the signed-in account's… | ⚪ |
| `youtube.setThumbnail` | youtube.com | Set a custom thumbnail image on one of the signed-in account's own videos. | 🟢 |
| `youtube.subscribeToChannel` | youtube.com | Subscribe the signed-in account to a channel (and unsubscribe it again). | ⚪ |
| `youtube.suggestSearches` | youtube.com | YouTube's own autocomplete for a partial query — the dropdown list it shows while… | 🟢 |
| `youtube.updateVideo` | youtube.com | Change the title, description, tags, category or privacy of one of the signed-in… | 🟢 |
| `youtube.uploadVideo` | youtube.com | Upload a video file to the signed-in account's own channel, with its title… | 🟢 |
| `zennioptical.checkStock` | zennioptical.com | Checks live per-SKU inventory (in stock, quantity, backorder/preorder flags) off the… | 🟢 |
| `zennioptical.getFrame` | zennioptical.com | Reads one frame's product-page data — name, base price, available colors and Rx range… | 🟢 |
| `zennioptical.priceLensConfig` | zennioptical.com | Runs a real prescription + usage type through the site's own order-configurator flow… | 🟢 |
| `zennioptical.searchFrames` | zennioptical.com | Searches Zenni's own storefront catalog for what a shopper would type — "round… | 🟢 |
| `zoopla.listings` | zoopla.co.uk | Lists property listings from a search query — alternative to search(). | ⚪ |
| `zoopla.search` | zoopla.co.uk | Searches property listings by location, price range, and bedrooms. | 🟢 |
