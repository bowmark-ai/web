# Providers

> Generated from the live library — do not edit by hand. Run `pnpm run gen:coverage`.
> 1000 functions. 🟢 implemented · ⚪ planned.
> Health was not read for this build, so 🟢 here means IMPLEMENTED, never working — a 🟢 row can be degraded or retired in prod right now. Ask the canary (`GET /internal/coverage`, or the coverage board in the admin app); never read this table for that.

One function per row. A provider is one site, reached directly. A FAMILY (a storefront platform) is one row per function carrying its member count — never one row per member.

| Function | Site | What it does | Status |
|---|---|---|---|
| `aa.getAirportInfo` | aa.com | Reads what American publishes about an airport it serves — which terminal it operates… | ⚪ |
| `aa.getBaggageAllowance` | aa.com | American's published baggage allowance and fees for a ROUTE, keyed on the two… | 🟢 |
| `aa.getFlightStatus` | aa.com | Looks up an American Airlines flight's real-time status by flight number and date, or… | 🟢 |
| `aa.getSeatMap` | aa.com | Reads the seat map for a specific flight — the cabin layout, which seats are free… | ⚪ |
| `aa.getServiceFees` | aa.com | Reads American's optional-service fee schedule — seat selection, change and… | ⚪ |
| `aa.listLounges` | aa.com | Lists American's Admirals Club and Flagship lounges for an airport — location within… | ⚪ |
| `aa.retrieveBooking` | aa.com | Reads an existing American Airlines reservation by its six-letter record locator (PNR)… | 🟢 |
| `aa.search` | aa.com | Searches American's own fares for an origin/destination/date (and cabin, passenger… | ⚪ |
| `aa.searchAwardFlights` | aa.com | Searches the same routes priced in AAdvantage miles rather than cash — award… | ⚪ |
| `abercrombie.checkGiftCardBalance` | abercrombie.com | Checks the remaining balance on an Abercrombie gift card the way the site's own… | ⚪ |
| `abercrombie.checkStock` | abercrombie.com | Answers whether a specific size/color of a product is buyable right now — online, and… | 🟢 |
| `abercrombie.findStores` | abercrombie.com | Finds physical Abercrombie/abercrombie kids stores near a zip code or city (state) the… | 🟢 |
| `abercrombie.getDeals` | abercrombie.com | Reads Abercrombie's currently published sales and promotions — the site's own… | ⚪ |
| `abercrombie.getProduct` | abercrombie.com | Reads one Abercrombie & Fitch product in full the way its own product detail page does… | 🟢 |
| `abercrombie.search` | abercrombie.com | Searches or browses Abercrombie's live catalog the way the site's own search bar and… | 🟢 |
| `aiper.listPoolChooserQuestions` | aiper.store | Lists the questions the Help Me Choose pool-cleaner finder asks (pool size, surface… | 🟢 |
| `aiper.recommendPoolCleaner` | aiper.store | Runs the Help Me Choose quiz's real backend computation against a buyer's answers and… | 🟢 |
| `ajmadison.checkStock` | ajmadison.com | Reads one product's detail page for its real, current stock/availability message. | ⚪ |
| `ajmadison.search` | ajmadison.com | Runs AJ Madison's own category + facet filter (brand, size/capacity, price band… | 🟢 |
| `americanstandard.getSystemCostEstimate` | americanstandardair.com | Reads American Standard's own published cost guide for one system type ("Air… | 🟢 |
| `amramp.findNearestLocation` | amramp.com | Runs Amramp's own ZIP/postal-code locator — the same… | 🟢 |
| `ancientnutrition.computeGutType` | ancientnutrition.com | Runs Ancient Nutrition's real Gut Type Quiz with the caller's own answers (keyed by… | 🟢 |
| `ancientnutrition.getGutTypeQuizQuestions` | ancientnutrition.com | Walks Ancient Nutrition's real Gut Type Quiz along its default path (first option for… | 🟢 |
| `andersenwindows.findDealers` | andersenwindows.com | Finds Andersen-certified dealers and contractors near a US ZIP code — the entry point… | 🟢 |
| `apple.getProduct` | apple.com | Reads one apple.com product/buy page (a URL or path search already returned, e.g.… | 🟢 |
| `apple.search` | apple.com | Searches apple.com's own site search for a keyword, returning the organic and curated… | 🟢 |
| `archipelago.getClientRelease` | archipelago.gg | Returns the latest published Archipelago client release — the version tag, the GitHub… | 🟢 |
| `archipelago.getGameOptions` | archipelago.gg | Returns one game's per-player randomizer options — the commented YAML template… | 🟢 |
| `ashleyfurniture.checkStock` | ashleyfurniture.com | Answers whether a product (by SKU) is available for delivery to a ZIP — the function… | 🟢 |
| `ashleyfurniture.findStore` | ashleyfurniture.com | Finds nearby Ashley HomeStore locations for a ZIP or address — hours, phone, and… | 🟢 |
| `ashleyfurniture.getProduct` | ashleyfurniture.com | Reads one product page in full — price, dimensions, fabric/finish/size options… | 🟢 |
| `ashleyfurniture.search` | ashleyfurniture.com | Searches or browses Ashley's furniture and home-goods catalog by keyword or category… | 🟢 |
| `ashleyfurniture.trackOrder` | ashleyfurniture.com | Looks up the status of a placed order (order number plus email or ZIP, no sign-in) —… | ⚪ |
| `asppoolco.findLocationByZip` | asppoolco.com | Matches a 5-digit US zip code against ASP's 257-location franchise network and returns… | 🟢 |
| `asppoolco.listLocations` | asppoolco.com | Lists every ASP franchise location on the public directory, optionally narrowed to one… | 🟢 |
| `atlasoceanvoyages.getVoyage` | atlasoceanvoyages.com | Reads one voyage's own detail page: the full port-by-port day itinerary with… | 🟢 |
| `atlasoceanvoyages.searchVoyages` | atlasoceanvoyages.com | Runs the /search voyage finder — destination, ship, duration and departure-date… | 🟢 |
| `atlasseniorliving.searchCommunities` | atlasseniorliving.com | Runs the site's own 'Find a Community' search at… | 🟢 |
| `autocamp.listProperties` | autocamp.com | Lists AutoCamp's active properties (name, location, the reservations-engine hotel id)… | ⚪ |
| `autocamp.searchAvailability` | autocamp.com | Runs AutoCamp's own SynXis-backed reservation engine for one property (location +… | 🟢 |
| `avantstay.getPricing` | avantstay.com | Prices every room type at one AvantStay hotel-style property for a given date range… | 🟢 |
| `avantstay.searchProperties` | avantstay.com | Runs AvantStay's own portfolio search (the same query the site-wide search widget… | 🟢 |
| `avis.getDeals` | avis.com | Reads Avis's current published promotions and discount codes — the site's own "Deals &… | ⚪ |
| `avis.getLocation` | avis.com | Reads one Avis rental location in full off the site's own location-search API for a… | 🟢 |
| `avis.getReservation` | avis.com | Reads an existing Avis reservation the way the site's own "View / Modify / Cancel"… | ⚪ |
| `avis.search` | avis.com | Searches Avis's live car rental availability the way its own booking widget does —… | ⚪ |
| `avis.searchLocations` | avis.com | Finds Avis rental locations matching a full city name or an airport code (`query`… | 🟢 |
| `azazie.getBuildYourOwnConfig` | azazie.com | Reads one bridesmaid-dress style's full Build Your Own configuration — every color… | 🟢 |
| `azazie.getColorFamily` | azazie.com | Reads every dress style available in one named color, mirroring the product page's own… | ⚪ |
| `azazie.search` | azazie.com | Searches Azazie's catalog by free text (style, color, fabric, occasion). | ⚪ |
| `azure.checkRegionAvailability` | azure.microsoft.com | Answers whether a given Azure product is actually available in a given region, and in… | ⚪ |
| `azure.estimateCost` | azure.microsoft.com | Prices a whole proposed deployment rather than one meter: the caller passes line items… | ⚪ |
| `azure.getServiceHealth` | azure.microsoft.com | Returns the current operational status of Azure services by service and region — which… | ⚪ |
| `azure.getServicePricing` | azure.microsoft.com | Returns Microsoft's published retail rates for an Azure service, narrowed by SKU… | 🟢 |
| `azure.getServiceSla` | azure.microsoft.com | Returns the uptime guarantee Microsoft publishes for an Azure service — the committed… | ⚪ |
| `azure.listRegions` | azure.microsoft.com | Returns Azure's datacenter regions — the ARM region name a caller has to pass to every… | ⚪ |
| `azure.listServices` | azure.microsoft.com | Returns the Azure service catalogue derived live from `prices.azure.com`'s own rows —… | 🟢 |
| `azure.listVmSizes` | azure.microsoft.com | Returns Azure's virtual-machine SKUs with the specifications a sizing decision is… | ⚪ |
| `barletta.getConfigurator` | barlettapontoonboats.com | Reads one model's whole builder: every option group (Railskin Color, Furniture… | 🟢 |
| `barletta.priceConfiguration` | barlettapontoonboats.com | Prices a specific build (a choice per option group) against getConfigurator's live… | 🟢 |
| `barletta.searchModels` | barlettapontoonboats.com | Lists every current Barletta floorplan from the public "Build Your Pontoon Boat"… | 🟢 |
| `baublebar.getBaublebarCheckoutLink` | baublebar.com | Resolves a product handle + chosen size/color + (for personalizer products) the… | 🟢 |
| `baublebar.getBaublebarProduct` | baublebar.com | Reads one product by its handle — every size/color variant with its exact price and… | 🟢 |
| `baublebar.listBaublebarProducts` | baublebar.com | Reads a BaubleBar collection's live catalogue as the storefront publishes it — every… | 🟢 |
| `beatthebomb.checkAvailability` | beatthebomb.com | Checks real, live per-date availability for one product type in one city over a list… | 🟢 |
| `beatthebomb.listMissions` | beatthebomb.com | Reads one city's live mission catalog — the same product list the site's own /products… | 🟢 |
| `beatthebomb.priceMission` | beatthebomb.com | Runs the site's own real pricing calculation for a given party size, city, date and… | 🟢 |
| `bestbuy.getProduct` | bestbuy.com | Looks up one product by Best Buy's own numeric SKU and returns its full detail — the… | 🟢 |
| `bestbuy.getStoreAvailability` | bestbuy.com | Whether a specific SKU is in stock at a SPECIFIC physical store (vs.… | ⚪ |
| `bestbuy.search` | bestbuy.com | Runs a Best Buy product search the way bestbuy.com's own search box does and returns… | 🟢 |
| `bhphoto.checkStock` | bhphotovideo.com | Answers whether a specific item is actually gettable right now, rather than merely… | 🟢 |
| `bhphoto.getProduct` | bhphotovideo.com | Reads one product page in full — the identity a search row cannot carry (SKU… | 🟢 |
| `bhphoto.search` | bhphotovideo.com | Searches bhphotovideo.com for a part and returns matching rows cheapest-first… | 🟢 |
| `bigjoeforklifts.estimateRuntimeAndRoi` | bigjoeforklifts.com | Would answer the ROI estimator's 17 questions and return the tool's real computed… | ⚪ |
| `bigjoeforklifts.getRuntimeEstimatorInputs` | bigjoeforklifts.com | Reads Big Joe's own 'Pre-Demo Runtime & ROI Estimator' and returns its real current 17… | 🟢 |
| `bigjoeforklifts.listForkliftModels` | bigjoeforklifts.com | Reads Big Joe's live /quote page and returns its real current forklift model list (40+… | 🟢 |
| `bigjoeforklifts.prepareQuoteRequest` | bigjoeforklifts.com | Validates the requested model names against Big Joe's real live /quote model list and… | 🟢 |
| `bigrentz.getEquipment` | bigrentz.com | Reads one piece of equipment in full by the slug `search` or `listCategories` returned… | 🟢 |
| `bigrentz.getRentalPricing` | bigrentz.com | Would return live, location- and date-specific rental pricing/availability for one… | ⚪ |
| `bigrentz.listCategories` | bigrentz.com | Lists BigRentz's equipment categories (optionally filtered to children of a parent… | 🟢 |
| `bigrentz.search` | bigrentz.com | Searches BigRentz's equipment catalog by free-text query (e.g. "boom lift", "40 ft… | 🟢 |
| `bing.searchNews` | bing.com | Searches news coverage the way bing.com/news does and returns the matching stories… | 🟢 |
| `bing.searchWeb` | bing.com | Searches the web the way bing.com's own search box does and returns the ten results… | 🟢 |
| `blackstoneproducts.findNearbyDealers` | blackstoneproducts.com | Runs Blackstone's own real-time Stockist dealer locator (the widget embedded on… | 🟢 |
| `blenderseyewear.getRxConfigurator` | blenderseyewear.com | Reads one Rx frame style's real option tree (Prescription Type: Single… | 🟢 |
| `blenderseyewear.listRxFrameStyles` | blenderseyewear.com | Searches Blenders Eyewear's real prescription (Rx) frame catalog across both the men's… | 🟢 |
| `blenderseyewear.priceRxConfiguration` | blenderseyewear.com | Resolves one exact Rx build (a frame handle + a chosen prescription type + lens color… | 🟢 |
| `bluehaven.checkPoolSiteFeasibility` | bluehaven.com | Runs a US street address through Blue Haven's own site-planning tool the way their… | 🟢 |
| `bluehaven.getPoolPriceEstimate` | bluehaven.com | Prices one of Blue Haven's own pool designs at a specific sited address, the way the… | ⚪ |
| `bluehaven.listPoolDesigns` | bluehaven.com | Reads Blue Haven's own live inground pool design catalog off their site-planning… | 🟢 |
| `bluesignal.applyToJob` | bluesignal.com | Would submit a job application (name/email/phone/resume) to the site's own per-job… | ⚪ |
| `bluesignal.getJob` | bluesignal.com | Gets one job's full posting (description + the site's own apply-form URL) by id or url… | 🟢 |
| `bluesignal.searchJobs` | bluesignal.com | Searches Blue Signal's 270+ live job openings (bluesignal.com/search-jobs, backed by a… | 🟢 |
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
| `bollandbranch.getBedDesignerFlow` | bollandbranch.com | Reads the Virtual Bed Designer's own configurator definition — the ordered categories… | 🟢 |
| `bollandbranch.getCategoryOptions` | bollandbranch.com | Lists the real, currently-sellable products for one Virtual Bed Designer category… | 🟢 |
| `bollandbranch.getSwatchDetails` | bollandbranch.com | Resolves color/fabric swatch names (as offered by getCategoryOptions) to their hex… | 🟢 |
| `bollandbranch.renderBedPreview` | bollandbranch.com | Would render the Designer's own live combination preview (the stacked-bed visual for a… | ⚪ |
| `boydsleep.calibrateSixZoneSupportNumber` | boydsleep.com | Runs Boyd's own '6-Zone Smart Support Number' calibration for the 6-zone Nautica Home… | 🟢 |
| `boydsleep.calibrateSupportNumber` | boydsleep.com | Runs Boyd's own '2-Zone Smart Support Number' calibration — sleep position, gender… | 🟢 |
| `brixton.getBrixtonCheckoutLink` | brixton.com | Resolves a product handle + chosen variant (size and/or color) to a real, purchasable… | 🟢 |
| `brixton.getBrixtonProduct` | brixton.com | Reads one product by its handle — every size/color variant, its exact price and… | 🟢 |
| `brixton.listBrixtonProducts` | brixton.com | Reads the live Brixton catalogue as the storefront publishes it — every hat, tee… | 🟢 |
| `bulletproof.findStores` | bulletproof.com | Finds real physical retailers near a US zip code that carry Bulletproof products… | 🟢 |
| `bykoket.addToCart` | bykoket.com | Hands back the shopper's own KOKET product page — the exact Add to cart button for… | 🟢 |
| `bykoket.getProduct` | bykoket.com | Reads one KOKET product's live page — price (list and current, since KOKET runs… | 🟢 |
| `bykoket.searchProducts` | bykoket.com | Searches KOKET's live public catalog (furniture, lighting, textiles) and returns each… | 🟢 |
| `byltbasics.buildPackHandoff` | byltbasics.com | Configures one bundle kit — validates the chosen size and each color against… | 🟢 |
| `byltbasics.getPackOptions` | byltbasics.com | Reads the real size and color choices for one bundle kit (a handle from… | 🟢 |
| `byltbasics.listBundlePacks` | byltbasics.com | Lists BYLT Basics' 'Custom N Pack' bundle kits — each its own product with a single… | 🟢 |
| `califloors.getProduct` | califloors.com | Reads one product's own detail page — its real current price, live stock status… | 🟢 |
| `califloors.listCategories` | califloors.com | Lists CALI's own flooring and decking category tree — Vinyl, Hardwood, Laminate… | 🟢 |
| `califloors.searchProducts` | califloors.com | Browses one category (from `listCategories`, e.g. the free-sample category or a… | 🟢 |
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
| `carepatrol.findLocalAdvisor` | carepatrol.com | Runs the site's own zip/state locator at carepatrol.com/locations/ — given a US ZIP… | 🟢 |
| `cars.compareVehicles` | cars.com | Runs Cars.com's own side-by-side comparison for up to four year/make/model picks and… | ⚪ |
| `cars.getConsumerReviews` | cars.com | Reads what owners say about one year/make/model on Cars.com: the aggregate score and… | ⚪ |
| `cars.getDealer` | cars.com | Reads one dealership's Cars.com page: legal and display name, address and phone… | ⚪ |
| `cars.getExpertReview` | cars.com | Reads the Cars.com editorial review of one year/make/model — the reviewer's verdict… | ⚪ |
| `cars.getListing` | cars.com | Reads one for-sale vehicle listing in full from its own detail page: VIN, asking price… | 🟢 |
| `cars.getModelResearch` | cars.com | Reads Cars.com's research overview for one year/make/model: MSRP or price range, the… | 🟢 |
| `cars.getRecalls` | cars.com | Looks up open safety recalls for a specific vehicle on Cars.com's recall surface — by… | ⚪ |
| `cars.getTrimSpecs` | cars.com | Reads the full specification table for one year/make/model broken out BY TRIM: engine… | ⚪ |
| `cars.getVehicleValue` | cars.com | Gets Cars.com's own valuation for a car the caller already owns — supply a VIN, a ZIP… | 🟢 |
| `cars.search` | cars.com | Searches Cars.com's live for-sale inventory the way its own shopping results page does… | 🟢 |
| `cars.searchDealers` | cars.com | Finds the car dealerships Cars.com lists near a ZIP — name, full address and distance… | ⚪ |
| `chantecaille.getFoundationQuizTaxonomy` | chantecaille.com | Reads Chantecaille's real, live Foundation Shade Match Quiz question and answer… | 🟢 |
| `chantecaille.matchFoundation` | chantecaille.com | Chantecaille's own Foundation Shade Match Quiz, run for real: posts the caller's… | 🟢 |
| `cheapflights.getBookingOptions` | cheapflights.com | For one result, reads who actually sells the fare and at what price — the provider… | 🟢 |
| `cheapflights.search` | cheapflights.com | Runs the itinerary search on cheapflights.com and returns its result rows… | 🟢 |
| `cheapflights.searchCars` | cheapflights.com | Runs the car-hire search on cheapflights.com and returns priced vehicles for a pickup… | 🟢 |
| `cheapflights.searchHotels` | cheapflights.com | Runs the stays search on cheapflights.com — the site's own second vertical — and… | 🟢 |
| `chesmar.searchQuickMoveInHomes` | chesmar.com | Runs Chesmar Homes' quick-move-in home search against the site's own live inventory… | 🟢 |
| `chriscraft.getConfigurator` | chriscraft.com | Reads one model+boat-type's whole builder off build.chriscraft.com: every option group… | 🟢 |
| `chriscraft.priceConfiguration` | chriscraft.com | Prices a specific build (a choice, or choices, per option group) against… | 🟢 |
| `chriscraft.searchModels` | chriscraft.com | Lists every current Chris-Craft model reachable from the public "Build Your Own"… | 🟢 |
| `classichome.addToCart` | classichome.com | Resolves one exact fabric/leather choice to Classic Home's own real price… | 🟢 |
| `classichome.getProduct` | classichome.com | Reads one product's real live fabric/leather picker: every real color/material choice… | 🟢 |
| `classichome.searchProducts` | classichome.com | Searches Classic Home's real Made-to-Order catalog (sofas, chairs, ottomans) via the… | 🟢 |
| `classpass.checkAvailability` | classpass.com | Checks whether a specific already-known class or appointment slot still has an open… | ⚪ |
| `classpass.getPricing` | classpass.com | Returns ClassPass's own membership/credit-plan pricing for a market — the monthly… | ⚪ |
| `classpass.getSchedule` | classpass.com | Returns one studio's upcoming bookable class/appointment timetable — class name… | 🟢 |
| `classpass.getStudio` | classpass.com | Returns one gym/studio/spa/salon's ClassPass profile in a single request — name and… | 🟢 |
| `classpass.search` | classpass.com | Searches fitness, wellness and beauty businesses (gyms, studios, spas and salons) near… | 🟢 |
| `cleanairlawncare.checkServiceArea` | cleanairlawncare.com | Checks a 5-digit US zip against the caw-estimate-widget backend — the same live area… | 🟢 |
| `cleanairlawncare.getAvailableSlots` | cleanairlawncare.com | For an in-area zip whose local org has online scheduling enabled, computes the real… | 🟢 |
| `cleanairlawncare.submitEstimateRequest` | cleanairlawncare.com | Would submit the final lead (name, contact, property, requested services, chosen slot)… | ⚪ |
| `cloudflare.comparePlans` | cloudflare.com | Compares Cloudflare's website/application plan tiers — Free, Pro, Business and… | 🟢 |
| `cloudflare.compareTeamsPlans` | cloudflare.com | Compares Cloudflare's Zero Trust / Cloudflare One team plans — Free (up to 50 users)… | 🟢 |
| `cloudflare.getDomainPricing` | cloudflare.com | Reads Cloudflare Registrar's at-cost, no-markup registration and renewal pricing… | ⚪ |
| `cloudflare.searchDomainAvailability` | cloudflare.com | Checks whether a given domain name is available to register through Cloudflare… | 🟢 |
| `clubchampion.checkAvailability` | clubchampion.com | Checks real, live open-slot availability for one fitting product at one studio over a… | 🟢 |
| `clubchampion.getFittings` | clubchampion.com | Reads one studio's real fitting-type menu with live per-store pricing (Driver, Full… | 🟢 |
| `clubchampion.listStudios` | clubchampion.com | Reads the live list of every Club Champion fitting studio — id, address, lat/lng… | 🟢 |
| `consultnet.searchJobs` | consultnet.com | Searches ConsultNet's live IT-staffing job board by keyword and optional ZIP/radius… | 🟢 |
| `couponfollow.getCodes` | couponfollow.com | Reads couponfollow.com/site/<domain> — every promo code and checkout deal couponfollow… | 🟢 |
| `culturefly.buildCultureFlyCheckoutLink` | culturefly.com | Resolves a chosen size + cadence against getCultureFlyBoxOptions and returns the exact… | 🟢 |
| `culturefly.getCultureFlyBoxOptions` | culturefly.com | Reads one box's full configure surface off its own product page — every apparel size… | 🟢 |
| `culturefly.listCultureFlyBoxes` | culturefly.com | Reads the live CultureFly catalogue for exactly the licensed subscription-box product… | 🟢 |
| `cyberpowerpc.getConfigurator` | cyberpowerpc.com | Reads one base configurator's whole component tree — every section (CPU, GPU, memory… | 🟢 |
| `cyberpowerpc.listConfigurators` | cyberpowerpc.com | Lists every base gaming-PC configurator on the site — AMD and Intel, every tier from… | 🟢 |
| `cyberpowerpc.priceBuild` | cyberpowerpc.com | Prices an exact build for one configurator given a caller's part selections (one part… | 🟢 |
| `davidsonhomes.getCommunity` | davidsonhomes.com | Reads one community's own page: its ACTUAL available homes right now — real street… | 🟢 |
| `davidsonhomes.getHome` | davidsonhomes.com | Reads one specific home's own listing page: address, price, sqft, bed/bath count… | 🟢 |
| `davidsonhomes.getRegion` | davidsonhomes.com | Reads one region's own page: every community in it with a real live price/bed/sqft… | 🟢 |
| `davidsonhomes.listRegions` | davidsonhomes.com | Lists every market region Davidson Homes currently builds in — state/metro area, live… | 🟢 |
| `deangroup.getRateCalendar` | deangroup.com | Reads 36 consecutive nights of per-night pricing and sold-out flags for one property… | 🟢 |
| `deangroup.listProperties` | deangroup.com | Lists every Dean Group hotel — Dublin Centre, Cork, Galway, Dublin Docklands, Berlin —… | 🟢 |
| `deangroup.searchAvailability` | deangroup.com | Searches one property for a date range and party size and returns every bookable rate… | 🟢 |
| `decked.getVehicleClass` | decked.com | Reads one vehicle class's complete fit list — every model it fits, each with its own… | 🟢 |
| `decked.priceCabSideOption` | decked.com | Prices the Load Floor vs Cab-side Gap 8'-bed accessory-pack option for one vehicle +… | 🟢 |
| `decked.resolveFitment` | decked.com | Resolves a free-text vehicle to its real fitted SKU and live price, mirroring the… | 🟢 |
| `decked.searchFits` | decked.com | Lists every real DECKED vehicle fit across all six vehicle classes (SUV, Full-Size… | 🟢 |
| `dice.getCompany` | dice.com | Returns one technology employer's Dice profile from its `/company-profile/<uuid>` URL… | ⚪ |
| `dice.getJob` | dice.com | Returns one Dice posting in full from its posting id — the complete HTML description… | 🟢 |
| `dice.listCompanyJobs` | dice.com | Returns the open technology roles a single named employer is currently advertising on… | ⚪ |
| `dice.searchCompanies` | dice.com | Finds technology employers on Dice and returns each company's profile — name… | ⚪ |
| `dice.searchJobs` | dice.com | Searches Dice's tech-only job database and returns the matching postings — title… | ⚪ |
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
| `ebay.search` | ebay.com | Runs an eBay item search the way ebay.com's own search box does and returns the… | 🟢 |
| `ebay.soldPrices` | ebay.com | What items ACTUALLY sold for — eBay's completed/sold listings. | ⚪ |
| `embroker.getBusinessInsuranceQuote` | embroker.com | Returns a priced business-insurance coverage package for a company's profile… | ⚪ |
| `embroker.getQuoteEntryPoint` | embroker.com | Returns the live entry URL for Embroker's self-serve quote wizard for one coverage… | 🟢 |
| `embroker.listCoverageLines` | embroker.com | Returns the real list of commercial-insurance coverage lines and policy product types… | 🟢 |
| `eq3.configureSofa` | eq3.com | Would price an ARBITRARY caller-chosen combination of options (not one of the site's… | ⚪ |
| `eq3.getSofaConfiguration` | eq3.com | Reads one sofa's full configurator: the site's own computed price (regular + sale) for… | 🟢 |
| `eq3.listSofas` | eq3.com | Lists every sofa in EQ3's living/seating/sofas line with real regular and sale prices… | 🟢 |
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
| `ethos.getLifeQuote` | ethos.com | Returns a personalized life insurance rate quote the way Ethos's own funnel does… | ⚪ |
| `eventsource.getShowroom` | eventsource.com | Reads a public Virtual Design Center showroom by its access code — the pre-built room… | 🟢 |
| `eventsource.getShowroomInquiryContact` | eventsource.com | Reads who a showroom's 'Send Inquiry' button actually emails — the sales inbox and the… | 🟢 |
| `eventsource.getShowroomVenue` | eventsource.com | Reads the real venue/room a showroom's design is staged in — business name… | 🟢 |
| `evolutionofsmooth.answerShadeQuizQuestion` | evolutionofsmooth.com | Submits one answer to a shade-quiz question page and returns either the next question… | 🟢 |
| `evolutionofsmooth.startShadeQuiz` | evolutionofsmooth.com | Starts eos's Dewy Lip Shine Shade Finder quiz (an Octane AI embed) and returns the… | 🟢 |
| `executivehomecare.findLocalOffice` | executivehomecare.com | Looks up the Executive Home Care franchise office that covers a US ZIP — the same… | 🟢 |
| `extraspace.checkAvailability` | extraspace.com | Checks current availability and price for one specific unit size (e.g. 5x10, 10x10… | 🟢 |
| `extraspace.getDeals` | extraspace.com | Reads Extra Space Storage's currently published promotions — the move-in specials… | ⚪ |
| `extraspace.getFacility` | extraspace.com | Reads one Extra Space Storage facility in full, for the `storeId` a caller already has… | 🟢 |
| `extraspace.search` | extraspace.com | Searches Extra Space Storage's live facility inventory the way its own homepage… | 🟢 |
| `facerealityskincare.searchAcneExperts` | facerealityskincare.com | Runs Face Reality's own Acne Expert Locator search — matches a free-text query (city… | 🟢 |
| `firstdibs.getListing` | 1stdibs.com | Reads one listing's real price and its concrete completing action (Make an Offer… | 🟢 |
| `firstdibs.search` | 1stdibs.com | Runs 1stDibs' search and returns real listings — name, real price, currency… | 🟢 |
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
| `fourseasonsyachts.getVoyage` | fourseasonsyachts.com | Reads one voyage's full itinerary — the day-by-day description, its region, its vessel… | 🟢 |
| `fourseasonsyachts.getVoyageSailing` | fourseasonsyachts.com | Reads the real, live departure for one voyageCode — exact embark/disembark ports and… | 🟢 |
| `fourseasonsyachts.searchVoyages` | fourseasonsyachts.com | Reads the live Voyage Finder inventory — every published sailing, its region, vessel… | 🟢 |
| `framebridge.getConfigurator` | framebridge.com | Reads one frame style's real live configurator inputs: every Size x Conveyance variant… | 🟢 |
| `framebridge.listFrameStyles` | framebridge.com | Searches Framebridge's real custom-framing catalog via the site's own Shopify… | 🟢 |
| `framebridge.priceConfiguration` | framebridge.com | Prices one exact build (frame style + size + conveyance + up to a primary and accent… | 🟢 |
| `fred.browseCategory` | fred.stlouisfed.org | Browses FRED's category tree the way fred.stlouisfed.org/categories does — given a… | 🟢 |
| `fred.getRegionalData` | fred.stlouisfed.org | Reads geographic/regional breakdowns of a series — e.g. unemployment rate by U.S.… | ⚪ |
| `fred.getSeriesInfo` | fred.stlouisfed.org | Reads the metadata for one known series id — its full title, units (e.g. 'Percent'… | 🟢 |
| `fred.getSeriesObservations` | fred.stlouisfed.org | Reads the actual numbers for a FRED series — the dated observations themselves, oldest… | 🟢 |
| `fred.listReleases` | fred.stlouisfed.org | Lists FRED's economic data releases — the named publications data comes from (e.g.… | 🟢 |
| `fred.listSources` | fred.stlouisfed.org | Lists the agencies and organizations that originate FRED's data — the Bureau of Labor… | 🟢 |
| `fred.searchSeries` | fred.stlouisfed.org | Finds the economic data series that match a search text — GDP, CPI, unemployment rate… | ⚪ |
| `furniture.listCategories` | furniture.com | Lists furniture.com's real category taxonomy (Sofas & Couches, Mattresses, Platform… | 🟢 |
| `furniture.listFilterOptions` | furniture.com | Lists furniture.com's live filter facets and their real, currently offered values —… | 🟢 |
| `furniture.searchProducts` | furniture.com | Runs furniture.com's own product search for `query` (free text — matches room, type… | 🟢 |
| `g2.getProduct` | g2.com | Reads one product's `/products/<slug>/reviews` page for its published aggregate rating… | 🟢 |
| `g2.search` | g2.com | Runs G2's own site search (`/search?query=<q>`). `query` is any free-text string — a… | 🟢 |
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
| `github.getRepo` | github.com | Returns a public repository's own metadata — description, default branch… | ⚪ |
| `github.listCommits` | github.com | Returns a repository's commit log — sha, author name and email, commit date, message… | 🟢 |
| `glassesusa.getProduct` | glassesusa.com | Reads one product's own page — real live price (plus the crossed-out 'was' price when… | 🟢 |
| `glassesusa.search` | glassesusa.com | Runs GlassesUSA's own catalog search/brand-filter and returns the matching frames with… | ⚪ |
| `google_flights.getBookingOptions` | flights.google.com | Selects one result from the same search and reads its booking panel — who actually… | 🟢 |
| `google_flights.getPriceGraph` | flights.google.com | Answers "when is this route cheapest" — the price for every departure date across… | 🟢 |
| `google_flights.search` | flights.google.com | Runs the itinerary search and returns its result rows. | 🟢 |
| `gotchacovered.getDesignStyleQuizQuestions` | gotchacovered.com | Reads the live 'What Design Style Am I?' quiz's real 6 questions and their option… | 🟢 |
| `gotchacovered.takeDesignStyleQuiz` | gotchacovered.com | Answers all 6 questions of Gotcha Covered's own Design Style Quiz and returns the… | 🟢 |
| `grainger.checkStock` | grainger.com | Checks real fulfillment availability for one item (itemNumber or url, same as… | 🟢 |
| `grainger.findBranch` | grainger.com | Finds nearby Grainger branch locations for a ZIP or address — hours, phone, and… | 🟢 |
| `grainger.getProduct` | grainger.com | Reads one product page in full — price, pack size/unit of measure, spec table… | 🟢 |
| `grainger.search` | grainger.com | Searches Grainger's industrial MRO catalog by keyword, returning matching products —… | 🟢 |
| `grainger.trackOrder` | grainger.com | Looks up the status of a placed order (order number plus account/email, no sign-in) —… | ⚪ |
| `grandwelcome.getRentalDetail` | grandwelcome.com | Reads one rental's own detail page in full — name, description, photos and the site's… | 🟢 |
| `grandwelcome.getRentalQuote` | grandwelcome.com | Runs the site's own real-time date-specific pricing engine for one property — rent… | 🟢 |
| `grandwelcome.searchRentals` | grandwelcome.com | Runs Grand Welcome's own destination search (a real market slug like… | 🟢 |
| `hamptonwaterwine.findNearbyRetailers` | hamptonwaterwine.com | Runs Hampton Water's own real-time Stockist store locator (the widget embedded on… | 🟢 |
| `handypro.checkServiceArea` | handypro.com | Checks whether a ZIP is served by a real local HandyPro franchisee and returns that… | 🟢 |
| `handypro.checkTechnicianAvailability` | handypro.com | Would find the next available technician slot for a category + ZIP via… | ⚪ |
| `handypro.createBooking` | handypro.com | Would confirm a HandyPro appointment and take Stripe payment via… | ⚪ |
| `handypro.searchServiceCategories` | handypro.com | Lists HandyPro's real service categories (grab bars, appliance install, TV mounting… | 🟢 |
| `hansons.bookEstimate` | hansons.com | Would submit the final booking (name/phone/email/address + chosen slot) and return the… | ⚪ |
| `hansons.checkAvailability` | hansons.com | Checks a ZIP code against Hansons' real Free Estimate scheduler and returns the actual… | 🟢 |
| `harmar.findCompatibleLifts` | harmar.com | The whole goal-flow in one call: takes a plain vehicle year/make/model and… | 🟢 |
| `harmar.getCompatibleLifts` | harmar.com | Runs the calculator's actual 'Lift Lookup' — given a model year, the calculator's own… | 🟢 |
| `harmar.searchChairModels` | harmar.com | Looks up every wheelchair/scooter model the calculator has data for under a given… | 🟢 |
| `harmar.searchVehicleModels` | harmar.com | Looks up every vehicle (make + model, with the calculator's own internal model id)… | 🟢 |
| `hauslabs.getHauslabsProduct` | hauslabs.com | Reads one product by its handle — every variant, its exact price, the image the… | 🟢 |
| `hauslabs.listHauslabsProducts` | hauslabs.com | Reads the live Haus Labs catalogue as the storefront publishes it — every product, its… | 🟢 |
| `hauslabs.runFoundationShadeFinder` | hauslabs.com | Resolves a buyer's Foundation Lab quiz answers to ONE specific shade: the variant… | 🟢 |
| `haydenhomes.calculateAffordability` | hayden-homes.com | Runs Hayden Homes' "What Can I Afford?" mortgage affordability calculator… | ⚪ |
| `haydenhomes.listFloorPlans` | hayden-homes.com | Lists Hayden Homes' Build-On-Your-Land floor plan catalog (a template plan, not live… | ⚪ |
| `haydenhomes.searchQuickMoveIns` | hayden-homes.com | Runs Hayden Homes' quick move-in search against the site's own live inventory — real… | 🟢 |
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
| `heatherwood.getFloorplan` | heatherwood.com | Reads one floor-plan type's own page: its real bed/bath/sqft spec and every currently… | 🟢 |
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
| `hilton.findHotels` | hilton.com | Finds Hilton-family properties near a city, region, or landmark — the site's own… | ⚪ |
| `hilton.getAwardAvailability` | hilton.com | Searches Hilton's live award (Hilton Honors points) availability for a property and… | ⚪ |
| `hilton.getDeals` | hilton.com | Reads Hilton's currently published promotions and offers — the site's own "Offers"… | ⚪ |
| `hilton.getHotelDetails` | hilton.com | Reads one Hilton-family property in full — full address, phone number, brand tier… | ⚪ |
| `hilton.getReservation` | hilton.com | Reads an existing Hilton reservation the way the site's own "Find Your Reservation"… | ⚪ |
| `hilton.search` | hilton.com | Searches Hilton's live cash room availability for one property (a hilton.com URL… | 🟢 |
| `historymaker.getHome` | historymaker.com | Reads one quick-move-in home's full detail: address, current and original price… | 🟢 |
| `historymaker.listCommunities` | historymaker.com | Lists HistoryMaker's active DFW communities with city, price range, beds/baths range… | 🟢 |
| `historymaker.searchQuickMoveIns` | historymaker.com | Searches HistoryMaker's current Dallas/Fort Worth quick-move-in inventory by min/max… | 🟢 |
| `hobie.checkLocalAvailability` | hobie.com | Runs the site's own real-time 'Find it Locally' local-dealer-inventory lookup for one… | 🟢 |
| `hobie.listModelColors` | hobie.com | Reads one kayak model's own hobie.com product page for its real buildable colors, each… | 🟢 |
| `hobie.listModels` | hobie.com | Lists every real kayak model Hobie currently sells (slug, display name and its own… | 🟢 |
| `holidaybuilders.getHomeDetail` | holidaybuilders.com | Reads one specific home's own listing page — full specs, floor-plan description… | 🟢 |
| `holidaybuilders.searchAvailableHomes` | holidaybuilders.com | Runs Holiday Builders' site-wide Available Homes search — every real move-in-ready or… | 🟢 |
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
| `ibuypower.searchGear` | ibuypower.com | Searches the Gear Store — peripherals, components and accessories sold loose rather… | ⚪ |
| `identitygroup.getSign` | identitygroup.com | Reads one sign product's full page: every mount-option variant, each with its own real… | 🟢 |
| `identitygroup.priceMountOption` | identitygroup.com | Resolves a free-text mount option (e.g. "wall mount", "fence post") to its exact… | 🟢 |
| `identitygroup.searchSigns` | identitygroup.com | Searches Identity Group's live signage catalog by brand or sign type and returns real… | 🟢 |
| `ihg.search` | ihg.com | Searches IHG's live hotel availability across its brand portfolio (Holiday Inn, Crowne… | ⚪ |
| `instagram.getPosts` | instagram.com | Reads the most recent posts on one public Instagram profile — shortcode, permalink… | 🟢 |
| `instagram.getProfile` | instagram.com | Reads one public Instagram profile's own metadata — full name, biography, external… | 🟢 |
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
| `insurify.getHomeQuotes` | insurify.com | Returns homeowners insurance rates from the carriers that will write a given property… | 🟢 |
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
| `iproyal.getPlans` | iproyal.com | Reads IPRoyal's own published proxy pricing — residential, datacenter, ISP and mobile… | 🟢 |
| `islllc.searchCommunities` | islllc.com | Runs the site's own community locator at islllc.com/communities/ — given a US location… | 🟢 |
| `ivoryhomes.searchFloorPlans` | ivoryhomes.com | Runs Ivory Homes' home-design floor-plan search against the site's own live inventory… | 🟢 |
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
| `kayak.getBookingOptions` | kayak.com | For one result, reads who actually sells the fare and at what price — the provider… | 🟢 |
| `kayak.search` | kayak.com | Runs the itinerary search on kayak.com and returns its result rows price-ascending. | 🟢 |
| `kayak.searchCars` | kayak.com | Runs the car-hire search on kayak.com and returns priced vehicles for a pickup… | 🟢 |
| `kayak.searchHotels` | kayak.com | Runs the stays search on kayak.com — the site's own second vertical — and returns… | 🟢 |
| `kingsdown.getBedMatchResult` | kingsdown.com | Runs Kingsdown's own bedMATCH diagnostic — the same multi-step questionnaire embedded… | 🟢 |
| `kitchentuneup.listCabinetStyles` | kitchentuneup.com | Reads Kitchen Tune-Up's own AI Design Tool catalog off its visualizer vendor's API —… | 🟢 |
| `kitchentuneup.visualizeKitchen` | kitchentuneup.com | Runs a photo through Kitchen Tune-Up's own AI Design Tool the way… | 🟢 |
| `kompan.getSparePartsDocuments` | kompan.com | Reads the real spare-parts / TÜV-certificate / maintenance-manual documents KOMPAN… | 🟢 |
| `kompan.searchProduct` | kompan.com | Searches KOMPAN Master for a product number in one region and lists every real… | 🟢 |
| `kuiu.findKuiuSize` | kuiu.com | Maps a shopper's chest/waist measurements (inches) to KUIU's own men's apparel size… | 🟢 |
| `kuiu.getKuiuCheckoutLink` | kuiu.com | Resolves a product handle + chosen variant (camo pattern/color + size) to a real… | 🟢 |
| `kuiu.getKuiuProduct` | kuiu.com | Reads one product by its handle — every camo-pattern/size variant, its exact price and… | 🟢 |
| `kuiu.listKuiuProducts` | kuiu.com | Reads the live KUIU catalogue as the storefront publishes it — every hunting… | 🟢 |
| `labcorp.checkAppointmentAvailability` | labcorp.com | Checks open appointment slots at a given Patient Service Center for a chosen date… | ⚪ |
| `labcorp.findLocation` | labcorp.com | Finds nearby Labcorp Patient Service Centers (PSCs) by zip code or address, returning… | ⚪ |
| `labcorp.getTest` | labcorp.com | Returns one OnDemand test in full: price, what it screens for, sample type (blood… | 🟢 |
| `labcorp.search` | labcorp.com | Searches Labcorp's direct-to-consumer test catalog (Labcorp OnDemand) by keyword —… | 🟢 |
| `labcorp.trackOrder` | labcorp.com | Looks up the status of an existing Labcorp OnDemand order (ordered, kit shipped, kit… | ⚪ |
| `lasikplus.findCenters` | lasikplus.com | Runs the site's own iSchedule center locator (lasikplus.com/ischedule/) — given a US… | 🟢 |
| `lasikplus.getAvailability` | lasikplus.com | Runs the site's own iSchedule appointment lookup for a given centerCode — returns the… | 🟢 |
| `legacyhomesal.getAvailability` | legacyhomesal.com | Reads a Legacy Homes AL community sales rep's real open tour-appointment slots… | 🟢 |
| `linkedin.getArticle` | linkedin.com | Returns one long-form LinkedIn article or newsletter issue from its `/pulse/` URL —… | ⚪ |
| `linkedin.getCompany` | linkedin.com | Returns a company's public LinkedIn page from its company URL or handle — legal and… | 🟢 |
| `linkedin.getEvent` | linkedin.com | Returns one public LinkedIn event from its URL — name, organizer, start and end time… | ⚪ |
| `linkedin.getJob` | linkedin.com | Returns one job posting in full from its posting URL — title, employer and employer… | 🟢 |
| `linkedin.getLearningCourse` | linkedin.com | Returns one LinkedIn Learning course from its URL — title, author, duration, level… | ⚪ |
| `linkedin.getPost` | linkedin.com | Returns one public LinkedIn post from its URL — the author, the post text, the time it… | ⚪ |
| `linkedin.getProfile` | linkedin.com | Returns the public professional record of one person from their profile URL — full… | 🟢 |
| `linkedin.getSchool` | linkedin.com | Returns a school or university's public LinkedIn page from its URL — name, type… | ⚪ |
| `linkedin.listCompanyEmployees` | linkedin.com | Returns the people who list a given company as their current employer, as a paged list… | ⚪ |
| `linkedin.listCompanyJobs` | linkedin.com | Returns the open roles a single named company is currently advertising, as a list of… | ⚪ |
| `linkedin.searchCompanies` | linkedin.com | Returns the companies matching a search — a name, an industry, a headcount band, a… | ⚪ |
| `linkedin.searchJobs` | linkedin.com | Returns the job postings matching a search — keywords, location and how recently the… | 🟢 |
| `linkedin.searchLearningCourses` | linkedin.com | Returns LinkedIn Learning courses matching a search — a topic, a skill, a software… | ⚪ |
| `linkedin.searchPeople` | linkedin.com | Finds LinkedIn members by name and returns each match's full public profile. | 🟢 |
| `linkedin.searchPosts` | linkedin.com | Returns public posts matching a search — keywords, author, date range — as a list of… | ⚪ |
| `linkedin.searchServiceProviders` | linkedin.com | Returns the LinkedIn members who sell a given professional service — accountants… | ⚪ |
| `liquiddeath.addToCart` | liquiddeath.com | Builds a filled cart for the shopper to open — cartUrl lands on the store's own cart… | 🟢 |
| `liquiddeath.getCart` | liquiddeath.com | Reads a cart the shopper already has, by its id — line items, quantities, per-line and… | 🟢 |
| `liquiddeath.getProduct` | liquiddeath.com | Reads one product by handle — every variant, its exact price, its SKU and whether that… | 🟢 |
| `liquiddeath.searchPolicies` | liquiddeath.com | Answers questions about shipping, returns, subscriptions and the store's own FAQs… | ⚪ |
| `liquiddeath.searchProducts` | liquiddeath.com | Searches the live catalogue and returns matching products with their real variants… | 🟢 |
| `littlewordsproject.getLittleWordsProjectCheckoutLink` | littlewordsproject.com | Resolves a product handle + chosen options (bead pattern / letter color / size… | 🟢 |
| `littlewordsproject.getLittleWordsProjectProduct` | littlewordsproject.com | Reads one custom-bracelet product by its handle — every bead-pattern/letter-color/size… | 🟢 |
| `littlewordsproject.listLittleWordsProjectProducts` | littlewordsproject.com | Reads a Little Words Project collection's live catalogue as the storefront publishes… | 🟢 |
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
| `lululemon.addToCart` | shop.lululemon.com | Puts a chosen SKU — one colourway in one size — into a guest cart on lululemon.com… | ⚪ |
| `lululemon.checkStoreStock` | shop.lululemon.com | Answers whether a specific size and colour is on the shelf at a named lululemon store… | ⚪ |
| `lululemon.findStores` | shop.lululemon.com | Finds physical lululemon stores near a place the way the site's own store locator… | ⚪ |
| `lululemon.getCart` | shop.lululemon.com | Reads back what is in the guest cart across several calls — line items, quantities… | ⚪ |
| `lululemon.getProduct` | shop.lululemon.com | Reads one product's full configurator the way its product page presents it — every… | 🟢 |
| `lululemon.getProductAttributes` | shop.lululemon.com | Reads what lululemon's OWN product page publishes about a garment and the third-party… | 🟢 |
| `lululemon.getProducts` | shop.lululemon.com | Reads the full configurator for MANY products in one call — the shape for ranking a… | 🟢 |
| `lululemon.getReviews` | shop.lululemon.com | Reads the customer reviews on one product — rating, title, body, size-and-fit votes… | ⚪ |
| `lululemon.getSimilarProducts` | shop.lululemon.com | Returns the products lululemon's own product pages recommend alongside one product —… | 🟢 |
| `lululemon.getSizeGuide` | shop.lululemon.com | Returns lululemon's size chart for a garment — the body measurements each numeric size… | ⚪ |
| `lululemon.listCategory` | shop.lululemon.com | Browses one category the way the site's own navigation does — Women's Leggings, Men's… | ⚪ |
| `lululemon.search` | shop.lululemon.com | Searches lululemon's catalogue by free text the way its own search bar does, returning… | 🟢 |
| `maidenhome.getProduct` | maidenhome.com | Reads one configurable product's complete Size x Wood Finish variant grid — every… | 🟢 |
| `maidenhome.resolveVariant` | maidenhome.com | Resolves a free-text product + size + wood finish to the exact priced variant and its… | 🟢 |
| `maidenhome.searchConfigurations` | maidenhome.com | Lists every Maiden Home product configurable by Size x Wood Finish (sofas… | 🟢 |
| `mailchimp.getPlanPricing` | mailchimp.com | Reads mailchimp.com/pricing/marketing/'s own plan lineup (Free, Essentials, Standard… | 🟢 |
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
| `microcenter.checkStock` | microcenter.com | Answers whether a specific item is buyable right now, rather than merely listed at a… | 🟢 |
| `microcenter.checkStoreStock` | microcenter.com | Answers which Micro Center store has an item on the shelf today — the one thing this… | 🟢 |
| `microcenter.getProduct` | microcenter.com | Reads one product page in full — the identity search cannot give you (SKU… | 🟢 |
| `microcenter.search` | microcenter.com | Searches microcenter.com for a part and returns matching rows cheapest-first, filtered… | 🟢 |
| `minted.getCardOptions` | minted.com | Would return one product's actual named paper/format/foil choices (not just the price… | ⚪ |
| `minted.priceCard` | minted.com | Prices one exact personalized-card configuration (design + paper + print method + foil… | 🟢 |
| `minted.searchCards` | minted.com | Browses one of Minted's real photo-card/stationery categories (e.g.… | 🟢 |
| `mixbook.getActivePromotion` | mixbook.com | Reads the real, currently-active sitewide coupon banner (description, code, terms URL). | 🟢 |
| `mixbook.getPhotoBookPriceTable` | mixbook.com | Returns Mixbook's full published rate card: every cover/paper x size combination, the… | 🟢 |
| `mixbook.getProductPrice` | mixbook.com | Reads one theme's real product page and returns Mixbook's own server-computed price… | 🟢 |
| `mixbook.priceCustomBook` | mixbook.com | Prices an exact custom photo book (binding, cover, paper, size, page count) against… | 🟢 |
| `mixbook.searchPhotoBookThemes` | mixbook.com | Searches Mixbook's real 750+ photo-book theme catalog (Mixbook's own public Algolia… | 🟢 |
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
| `naic.getCompanyProfile` | naic.org | Reads one insurer's CIS financial report — the holding group that owns it, the state… | 🟢 |
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
| `newageproducts.searchNewageproductsCatalog` | newageproducts.com | Search/browse the NewAge Products catalogue by category or keyword. | ⚪ |
| `newegg.checkStock` | newegg.com | Answers whether a specific item is buyable right now, rather than merely listed at a… | 🟢 |
| `newegg.getProduct` | newegg.com | Reads one product page in full — the identity search cannot give you (SKU… | 🟢 |
| `newegg.search` | newegg.com | Searches newegg.com for a part and returns matching rows cheapest-first, filtered… | 🟢 |
| `nvisioncenters.calculateLasikSavings` | nvisioncenters.com | Runs NVISION's own LASIK Savings Calculator — age plus glasses/contacts usage and cost… | 🟢 |
| `nvisioncenters.checkLasikCandidacy` | nvisioncenters.com | Runs NVISION's own LASIK Candidate Quiz disqualification rule — age bracket in, the… | 🟢 |
| `oanda.convertCurrency` | oanda.com | Converts an amount from one currency to another using OANDA's own daily average bid… | 🟢 |
| `oliverwinery.checkShippingAvailability` | oliverwinery.com | Checks whether Oliver Winery currently ships wine to one US state, read off the… | 🟢 |
| `oliverwinery.getWine` | oliverwinery.com | Reads one wine's full Commerce7 product record by its storefront slug (e.g.… | 🟢 |
| `oliverwinery.listWines` | oliverwinery.com | Lists Oliver Winery's own Commerce7 shop catalog — real bottle titles, USD prices and… | 🟢 |
| `otto.browseCategory` | otto.de | Lists products under one of OTTO's own department/category pages (e.g. Damenmode… | ⚪ |
| `otto.getProduct` | otto.de | Reads one OTTO product page — price, current availability, delivery-time estimate (the… | 🟢 |
| `otto.getReviews` | otto.de | Reads the customer reviews on one OTTO product — rating, review text… | ⚪ |
| `otto.search` | otto.de | Searches OTTO's catalog for a keyword the way the site's own search bar does, across… | 🟢 |
| `otto.trackOrder` | otto.de | Looks up shipment/delivery status for an OTTO order by order number plus the account… | ⚪ |
| `outdoorresearch.checkClaimEligibility` | outdoorresearch.com | Starts an Infinite Guarantee warranty claim by order number + email against the live… | 🟢 |
| `outdoorresearch.getWarrantyPolicy` | outdoorresearch.com | Reads Outdoor Research's Infinite Guarantee warranty program settings straight from… | 🟢 |
| `pacificcompanies.assembleApplication` | pacificcompanies.com | Validates a caller's name/email/phone against the posting's live apply-form… | 🟢 |
| `pacificcompanies.getApplicationSchema` | pacificcompanies.com | Reads one posting's own live 'Apply For This Job' Gravity Forms structure. | 🟢 |
| `pacificcompanies.getJob` | pacificcompanies.com | Reads one posting in full, by its numeric id or URL slug. | 🟢 |
| `pacificcompanies.getJobCategories` | pacificcompanies.com | Lists every specialty Pacific Companies recruits for, with a live open-posting count —… | 🟢 |
| `pacificcompanies.searchJobs` | pacificcompanies.com | Runs Pacific Companies' own job-board search — filters real open physician/APP roles… | 🟢 |
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
| `pirateship.getRates` | pirateship.com | Compares live shipping rates across USPS and UPS for a package — given a from/to… | 🟢 |
| `pirateship.trackShipment` | pirateship.com | Looks up delivery status for a shipment by tracking number, the way… | ⚪ |
| `pirateship.validateAddress` | pirateship.com | Validates and standardizes a US shipping address the way Pirate Ship checks an address… | ⚪ |
| `pizzahut.checkDeliveryAvailability` | pizzahut.com | Answers whether Pizza Hut delivers to a given address, and on what terms — which store… | ⚪ |
| `pizzahut.findStores` | pizzahut.com | Finds the Pizza Hut stores that serve a given address or ZIP — each store's id, street… | 🟢 |
| `pizzahut.getDeals` | pizzahut.com | Reads the deals, coupons and bundle offers Pizza Hut is running at a store right now —… | 🟢 |
| `pizzahut.getMenu` | pizzahut.com | Reads a store's menu — the items Pizza Hut is actually selling at that location, by… | 🟢 |
| `pizzahut.getMenuItem` | pizzahut.com | Reads one menu item in full for a store, by NAME ("Pepperoni Pizza") since the sibling… | 🟢 |
| `pizzahut.priceOrder` | pizzahut.com | Prices a configured basket at a store WITHOUT placing it — line items with their… | 🟢 |
| `positivegrid.findRetailers` | positivegrid.com | Authorized Positive Grid retailers near a place — real dealers who carry Spark amps… | 🟢 |
| `premierbuildings.findDealers` | premierbuildings.us | Looks up Premier's real dealer locations in one US state or Canadian province (full… | 🟢 |
| `premierbuildings.listBuildingStyles` | premierbuildings.us | Lists every real building style Premier's ShedView configurator offers (Lofted Barn… | 🟢 |
| `premierbuildings.priceBuilding` | premierbuildings.us | Prices one real Premier building configuration exactly the way ShedView itself does… | 🟢 |
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
| `prose.getHaircareProductPrice` | prose.com | Looks up ONE Prose product type's real one-time and subscription USD price (e.g.… | 🟢 |
| `prose.getHairPrescription` | prose.com | Runs Prose's real online hair consultation end to end — the exact 38 questions its own… | 🟢 |
| `prose.listHaircareProducts` | prose.com | Lists every haircare formula/tool type Prose sells (shampoo, conditioner, hair mask… | 🟢 |
| `provenwinners.getRecipeDetails` | provenwinners.com | Reads one container recipe's own combination page — its season(s), container size and… | 🟢 |
| `provenwinners.searchContainerRecipes` | provenwinners.com | Runs Proven Winners' own Container Recipe Finder over its 1,074+ published… | 🟢 |
| `reddit.findPostsByUrl` | reddit.com | Given a link, returns the Reddit threads that submitted or discussed it — the 'other… | ⚪ |
| `reddit.getPost` | reddit.com | Returns one Reddit submission and the discussion under it — the post's title, author… | 🟢 |
| `reddit.getSubreddit` | reddit.com | Returns the facts about one community rather than its content — the subreddit's title… | 🟢 |
| `reddit.getSubredditPosts` | reddit.com | Returns a community's own front page — the submissions in one subreddit under a chosen… | 🟢 |
| `reddit.getUser` | reddit.com | Returns a redditor's public profile — display name, post and comment karma, account… | ⚪ |
| `reddit.getUserComments` | reddit.com | Returns the comments one redditor has written, newest or top first, each with its… | ⚪ |
| `reddit.getUserPosts` | reddit.com | Returns the submissions one redditor has made, newest or top first, with the same… | ⚪ |
| `reddit.getWikiPage` | reddit.com | Returns a subreddit's wiki page — the community-maintained reference behind most large… | ⚪ |
| `reddit.search` | reddit.com | Searches Reddit's posts for a query — across the whole site or scoped to one subreddit… | 🟢 |
| `reddit.searchComments` | reddit.com | Searches the text of comments rather than posts, returning each match with its body… | ⚪ |
| `reddit.searchSubreddits` | reddit.com | Finds communities by topic — a query goes in, matching subreddits come out with their… | 🟢 |
| `reliancepartners.assembleApplication` | reliancepartners.com | Validates a caller's trucking-insurance application against the live schema's own… | 🟢 |
| `reliancepartners.getApplicationSchema` | reliancepartners.com | Reads reliancepartners.com/quote/'s live 3-step trucking-insurance application — every… | 🟢 |
| `resy.checkAvailability` | resy.com | Reads real-time open reservation slots for one venue, one date and a party size —… | 🟢 |
| `resy.search` | resy.com | Finds Resy venues matching a restaurant name, ranked by Resy's own relevance and… | 🟢 |
| `revisionskincare.getSkincareQuizQuestions` | revisionskincare.com | Reads the live 'Product Finder Quiz' at revisionskincare.com/pages/skincare-quiz… | 🟢 |
| `revisionskincare.takeSkincareQuiz` | revisionskincare.com | Submits a shopper's answers to Revision Skincare's own Product Finder Quiz and returns… | 🟢 |
| `rishitea.getTeaFinderQuiz` | rishi-tea.com | Reads the live Tea Finder quiz's real question set straight from Okendo's quiz API —… | 🟢 |
| `rishitea.matchTeaFinderQuiz` | rishi-tea.com | Submits a full set of answers to Okendo's quiz engine and returns the same… | 🟢 |
| `ritani.getConfigurator` | ritani.com | Reads Ritani's real live Ring Studio option catalog: every center stone shape… | 🟢 |
| `ritani.priceConfiguration` | ritani.com | Prices one exact custom-ring build against Ritani's own live Ring Studio pricing… | 🟢 |
| `roofmaxx.estimateRoofReplacementCost` | roofmaxx.com | Runs Roof Maxx's own Roof Replacement Cost Calculator — given a home's square footage… | 🟢 |
| `roofmaxx.getCalculatorSettings` | roofmaxx.com | The Roof Replacement Cost Calculator's own admin-configured title and description… | 🟢 |
| `rvshare.searchListings` | rvshare.com | Runs RVshare's own results grid for a US city/state… | 🟢 |
| `saatva.listMattresses` | saatva.com | Lists every mattress product line Saatva currently sells with every buyable variant —… | 🟢 |
| `saatva.recommendMattress` | saatva.com | Runs Saatva's mattress-quiz goal-flow for a stated sleep position, firmness preference… | 🟢 |
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
| `scentbird.browseCatalogue` | scentbird.com | Reads a page of Scentbird's own live subscription catalogue (perfumes or colognes) —… | 🟢 |
| `seakeeper.findNearestDealers` | seakeeper.com | Ranks every real Seakeeper dealer by distance from a US zip and returns the nearest N… | 🟢 |
| `seakeeper.listAllDealers` | seakeeper.com | Every real Seakeeper dealer worldwide (name, address, contact, coordinates, tier)… | 🟢 |
| `sears.checkStock` | sears.com | Answers whether a specific product is buyable right now — for delivery or for… | 🟢 |
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
| `shopify.addToCart` | shopify.com (51715 stores) | Puts variants into THIS run's own cart on the store and returns the cart the store… | 🟢 |
| `shopify.getCart` | shopify.com (51715 stores) | Reads THIS run's cart back — lines, quantities, per-line and order totals, and the… | 🟢 |
| `shopify.getCollection` | shopify.com (51715 stores) | Reads one collection's products in the retailer's own merchandised order, as full… | 🟢 |
| `shopify.getProduct` | shopify.com (51715 stores) | Reads one product by handle — every variant, its exact price, its SKU and whether that… | 🟢 |
| `shopify.getProducts` | shopify.com (51715 stores) | Reads FULL detail for many products in one call — the shape for ranking a candidate… | 🟢 |
| `shopify.getSetEvidence` | shopify.com (51715 stores) | Two answers in one call. `evidence` is ONLY what a MERCHANDISER pinned by hand, in the… | 🟢 |
| `shopify.getShippingRates` | shopify.com (51715 stores) | Returns the shipping options and prices for a destination, which is the second thing a… | ⚪ |
| `shopify.getStyleDetails` | shopify.com (51715 stores) | Reads what a store publishes on its rendered product PAGE and not in its product feed… | 🟢 |
| `shopify.listCollections` | shopify.com (51715 stores) | Lists the store's own merchandised collections. | 🟢 |
| `shopify.listProducts` | shopify.com (51715 stores) | Walks the store's WHOLE catalogue a page at a time, in its own merchandised order —… | 🟢 |
| `shopify.removeFromCart` | shopify.com (51715 stores) | Takes a line back out of this run's cart, or changes its quantity, so a caller can… | ⚪ |
| `shopify.resolveProductUrl` | shopify.com (51715 stores) | Turns a product URL into the product, which is the address a caller actually holds… | 🟢 |
| `shopify.search` | shopify.com (51715 stores) | Searches the store's live catalogue and returns matching products with their real… | 🟢 |
| `shopify.searchPolicies` | shopify.com (51715 stores) | Answers a question about the store's own returns, shipping, sizing or warranty policy… | ⚪ |
| `sitmeanssit.findNearestLocations` | sitmeanssit.com | Ranks every real Sit Means Sit dog-training location by distance from a US zip and… | 🟢 |
| `smartsign.getTemplate` | smartsign.com | Reads one custom-sign template's product page and returns its per-material live… | 🟢 |
| `smartsign.search` | smartsign.com | Runs SmartSign's own site-search suggest endpoint for a free-text query and returns… | 🟢 |
| `smartwool.getSockRecommendation` | smartwool.com | Runs Smartwool's own Sock Finder quiz with the given answers and returns the computed… | 🟢 |
| `solostove.checkBundle` | solostove.com | Checks one Solo Stove bundle (fire pit + accessories, e.g. the Dream Backyard Bundle)… | 🟢 |
| `soundcloud.getPlaylist` | soundcloud.com | Reads a SoundCloud set or playlist URL and returns its tracks in order — the unit… | 🟢 |
| `soundcloud.getTrack` | soundcloud.com | Resolves one soundcloud.com track URL to its full metadata — title, artist, duration… | 🟢 |
| `soundcloud.search` | soundcloud.com | Searches SoundCloud's catalogue for tracks matching a free-text query and returns up… | 🟢 |
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
| `stickergiant.listStickerProducts` | stickergiant.com | Lists every sticker SKU the /custom-stickers page publishes — name, slug-style @id… | 🟢 |
| `stickergiant.priceCustomSticker` | stickergiant.com | Prices one exact custom-sticker build against Sticker Giant's own live pricing backend… | 🟢 |
| `summerfridaysquiz.getSkincareQuizQuestions` | summerfridays.com | Lists the live Skincare Quiz's questions (skin type, sensitivity, skin concerns, eye… | 🟢 |
| `summerfridaysquiz.getSkincareRoutine` | summerfridays.com | Runs Summer Fridays' own published Skincare Quiz decision tree (the routine-category… | 🟢 |
| `sunhomesaunas.addSaunaToCart` | sunhomesaunas.com | Adds one real matched sauna to a real Shopify cart at Sun Home Saunas' own real live… | 🟢 |
| `sunhomesaunas.getPersonalizedSaunaMatches` | sunhomesaunas.com | Submits real answers through the same quiz session flow (startSession -> addSelection… | 🟢 |
| `sunhomesaunas.getSaunaFinderQuestions` | sunhomesaunas.com | Reads Sun Home Saunas' real, live Perfect Product Finder quiz (a third-party embed)… | 🟢 |
| `sunlighten.getModelPricing` | sunlighten.com | Reads the real, currently-quoted price for a Sunlighten sauna model off the public… | 🟢 |
| `sunlighten.matchSauna` | sunlighten.com | Runs Sunlighten's own 'Find My Sauna' quiz match — the same wellness-goal +… | 🟢 |
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
| `thezebra.getAutoQuotes` | thezebra.com | Returns real side-by-side auto insurance rates from the carriers that will write a… | 🟢 |
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
| `ticketmaster.getEvent` | ticketmaster.com | Returns one event in full: venue (name, address), date/time, the classification… | ⚪ |
| `ticketmaster.listClassifications` | ticketmaster.com | Returns the segment/genre/sub-genre taxonomy Ticketmaster uses to categorize events… | ⚪ |
| `ticketmaster.search` | ticketmaster.com | Searches live events — concerts, sports, arts & theater, family — by keyword, location… | ⚪ |
| `ticketmaster.searchAttractions` | ticketmaster.com | Finds attractions — artists, sports teams and other performers — by name and returns… | ⚪ |
| `ticketmaster.searchVenues` | ticketmaster.com | Finds venues by name or location (city/state/postal or geo radius) and returns each… | ⚪ |
| `tilsonhomes.getElevationDetails` | tilsonhomes.com | Reads one plan's elevation — the exterior style's customization range (how far… | 🟢 |
| `tilsonhomes.listPlans` | tilsonhomes.com | Lists Tilson Homes' Build-On-Your-Land floor plans — model name, bed/bath/size and the… | 🟢 |
| `titlenine.calculateBraSize` | titlenine.com | Runs Title Nine's own bra-size calculator — chest, bust and under-bust measurements… | 🟢 |
| `topviewtix.getPackageDetails` | topviewtix.com | Reads one TopView tour package in full — name, description, adult/kid price, and the… | 🟢 |
| `topviewtix.listPackages` | topviewtix.com | Would list every tour package TopView currently sells (name, slug, starting price)… | ⚪ |
| `topviewtix.reserve` | topviewtix.com | Would pick a date, ticket quantity and seating tier for a package and hand back a… | ⚪ |
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
| `trophysignaturehomes.compareHomes` | trophysignaturehomes.com | Runs the site's own compare: reads both homes and computes real price-per-square-foot… | 🟢 |
| `trophysignaturehomes.getHome` | trophysignaturehomes.com | Reads one home's full detail: address, price, sqft, beds/baths, status, stories… | 🟢 |
| `trophysignaturehomes.listPlans` | trophysignaturehomes.com | Lists the floor plans (as opposed to priced, addressed spec homes) available per… | ⚪ |
| `trophysignaturehomes.searchHomes` | trophysignaturehomes.com | Searches Trophy Signature Homes' current live inventory (all metros) by city… | 🟢 |
| `twiddy.getRentalDetail` | twiddy.com | Reads one rental's own detail page in full — description, address, pets-allowed flag… | 🟢 |
| `twiddy.getRentalQuote` | twiddy.com | Runs the site's own real-time weekly pricing engine for one property and a check-in… | 🟢 |
| `twiddy.searchRentals` | twiddy.com | Runs Twiddy's own Outer Banks vacation rental search (all 1,000+ managed properties in… | 🟢 |
| `ulrichlifestyle.getConfigurator` | ulrichlifestyle.com | Reads one model's default configurator: its base price (before delivery/tax) plus… | 🟢 |
| `ulrichlifestyle.listModels` | ulrichlifestyle.com | Lists every shed/cabin model in Ulrich's current catalog with its code and name — the… | 🟢 |
| `ulrichlifestyle.priceConfiguration` | ulrichlifestyle.com | Configures and prices one specific build (dimensions, wall height, siding, delivery… | 🟢 |
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
| `usps.getRate` | usps.com | Prices a domestic package across USPS's own Mail Classes (Priority Mail, Priority Mail… | 🟢 |
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
| `voluspa.getFragranceQuizIntro` | voluspa.com | Reads the "Find Your Fragrance" quiz suite's entry screen — the two branching paths… | 🟢 |
| `voluspa.matchFragranceQuiz` | voluspa.com | Drives the actual multi-step quiz end to end with a caller-supplied path and set of… | ⚪ |
| `walkerhughes.findNearestOffice` | walkerhughes.com | Matches a caller's free-text location (a city, a two-letter state, or "City, ST")… | 🟢 |
| `walkerhughes.listOffices` | walkerhughes.com | Lists all of WalkerHughes' real offices (25, not the 24 ANGLE counted off the form's… | 🟢 |
| `walkerhughes.listQuoteProducts` | walkerhughes.com | Lists WalkerHughes' real 16-product Personal/Business insurance catalog straight off… | 🟢 |
| `walkerhughes.submitQuoteApplication` | walkerhughes.com | Would submit the /start-quote application itself (POST to the site's own… | ⚪ |
| `walmart.browseCategory` | walmart.com | Lists products under one of the site's own department/category pages (e.g.… | ⚪ |
| `walmart.checkStock` | walmart.com | Answers whether a specific item is actually available right now at a given store or… | ⚪ |
| `walmart.findStores` | walmart.com | Finds nearby Walmart stores for a 5-digit US ZIP code — address, phone, hours… | 🟢 |
| `walmart.getPickupDeliverySlots` | walmart.com | Reads the available pickup or delivery time windows for a store/zip — the scheduling… | ⚪ |
| `walmart.getProduct` | walmart.com | Reads one product's full page — price, availability summary, images, brand, full… | ⚪ |
| `walmart.getWeeklyAd` | walmart.com | Reads the current local weekly ad / rollback & clearance circular for a store or zip —… | ⚪ |
| `walmart.search` | walmart.com | Searches walmart.com's catalog for a keyword and returns matching products — item id… | 🟢 |
| `walmart.trackOrder` | walmart.com | Looks up shipment/delivery status for a guest order by order number plus the email or… | ⚪ |
| `waterfurnace.estimateGeothermalSavings` | waterfurnace.com | Runs the Savings Calculator's real backend computation (the same one the site's 3-step… | 🟢 |
| `waterfurnace.lookupHomeDetails` | waterfurnace.com | Runs the Savings Calculator's own home-details lookup for an address/zip — the same… | 🟢 |
| `wellfound.getCompany` | wellfound.com | Reads one startup's `/company/<slug>` profile — the longer product description (HTML)… | ⚪ |
| `wellfound.getJob` | wellfound.com | Reads one job posting in full the way its own detail page does — takes the `url` a… | 🟢 |
| `wellfound.getJobCollection` | wellfound.com | Reads one curated collection's postings the way `/job-collections/<slug>` does — the… | ⚪ |
| `wellfound.getSalaryBenchmarks` | wellfound.com | Reads Wellfound's own published startup compensation benchmarks — what a given role… | ⚪ |
| `wellfound.listCompanyJobs` | wellfound.com | Lists the open roles at one startup the way `/company/<slug>/jobs` does — the "is this… | ⚪ |
| `wellfound.listJobCollections` | wellfound.com | Lists Wellfound's own curated job collections — the editorial groupings the site… | ⚪ |
| `wellfound.searchCompanies` | wellfound.com | Finds startups the way Wellfound's own search groups them — one row per COMPANY, off… | 🟢 |
| `wellfound.searchJobs` | wellfound.com | Searches Wellfound's startup job board — by role (`/role/<slug>`) or by city… | 🟢 |
| `winestyles.listStores` | winestyles.com | Lists the WineStyles franchise locations that currently offer online order-for-pickup… | 🟢 |
| `winestyles.searchStoreInventory` | winestyles.com | Searches one WineStyles store's own live pickup catalog for a term (grape, style… | 🟢 |
| `xpresswellnessurgentcare.checkWaitTime` | xpresswellnessurgentcare.com | Reads one clinic's live estimated wait time, next-availability text, hours-today… | 🟢 |
| `xpresswellnessurgentcare.listFacilities` | xpresswellnessurgentcare.com | Lists every Xpress Wellness Urgent Care clinic — 40 locations across Oklahoma, Kansas… | 🟢 |
| `yorkwallcoverings.addToCart` | yorkwallcoverings.com | Hands back the shopper's own York product page — the exact Add to cart button for this… | 🟢 |
| `yorkwallcoverings.getProduct` | yorkwallcoverings.com | Reads one York product page in full — SKU, live price, in-stock/out-of-stock status… | 🟢 |
| `yorkwallcoverings.search` | yorkwallcoverings.com | Searches York's live public catalog (wallpaper, wall murals, grasscloth) by keyword —… | 🟢 |
| `yourarborhome.bookSelfTour` | yourarborhome.com | Would complete a self-guided tour booking on the caller's behalf through NterNow's own… | ⚪ |
| `yourarborhome.getHome` | yourarborhome.com | Reads one Arbor Homes listing by the `uniqueName` id `searchHomes` returns — the same… | 🟢 |
| `yourarborhome.searchHomes` | yourarborhome.com | Reads Arbor Homes' live quick move-in inventory off yourarborhome.com/homes and… | 🟢 |
| `youtube.getTranscript` | youtube.com | Returns a YouTube video's own caption transcript — one row per caption line, each… | 🟢 |
| `zennioptical.checkStock` | zennioptical.com | Checks live per-SKU inventory (in stock, quantity, backorder/preorder flags) off the… | 🟢 |
| `zennioptical.getFrame` | zennioptical.com | Reads one frame's product-page data — name, base price, available colors and Rx range… | 🟢 |
| `zennioptical.priceLensConfig` | zennioptical.com | Runs a real prescription + usage type through the site's own order-configurator flow… | 🟢 |
