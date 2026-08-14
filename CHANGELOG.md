# Changelog

Every release of `@bowmark/web` (npm) and `bowmark-web` / `bowmark-web-stubs` (PyPI).
The three always ship at one version. They are one client in two languages, plus its stubs.

Entries are generated from the published capability and provider tables, so this file
describes the callable surface and nothing else.

## 1.8.0 (2026-08-14)

**Providers**

- New provider **bigrentz.com** (3 functions): `bigrentz.getEquipment`, `bigrentz.listCategories`, `bigrentz.search`
- New provider **boydsleep.com** (2 functions): `boydsleep.calibrateSixZoneSupportNumber`, `boydsleep.calibrateSupportNumber`
- New provider **eventsource.com** (3 functions): `eventsource.getShowroom`, `eventsource.getShowroomInquiryContact`, `eventsource.getShowroomVenue`
- New provider **grandwelcome.com** (3 functions): `grandwelcome.getRentalDetail`, `grandwelcome.getRentalQuote`, `grandwelcome.searchRentals`
- New provider **jennikayne.com** (2 functions): `jennikayne.buildGiftCardLink`, `jennikayne.getGiftCardOptions`
- New provider **roofmaxx.com** (2 functions): `roofmaxx.estimateRoofReplacementCost`, `roofmaxx.getCalculatorSettings`
- New provider **tamarackidaho.com** (1 function): `tamarackidaho.searchLodging`
- New provider **tatcha.com** (2 functions): `tatcha.getPersonalizedRitual`, `tatcha.getRitualQuizOptions`
- New provider **twiddy.com** (3 functions): `twiddy.getRentalDetail`, `twiddy.getRentalQuote`, `twiddy.searchRentals`
- New provider **vervecoffee.com** (2 functions): `vervecoffee.listRoastersChoiceSubscriptions`, `vervecoffee.matchCoffeeSubscription`
- New provider **villagerealtyobx.com** (2 functions): `villagerealtyobx.getQuote`, `villagerealtyobx.searchRentals`
- New provider **voluspa.com** (1 function): `voluspa.getFragranceQuizIntro`
- New provider **xpresswellnessurgentcare.com** (2 functions): `xpresswellnessurgentcare.checkWaitTime`, `xpresswellnessurgentcare.listFacilities`
- Removed **tentree**

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.7.0 (2026-08-13)

**Capabilities**

- New capability **sheds** (3 functions): `sheds.findDealers`, `sheds.listStyles`, `sheds.quote`

**Providers**

- New provider **aiper.store** (2 functions): `aiper.listPoolChooserQuestions`, `aiper.recommendPoolCleaner`
- New provider **ajmadison.com** (1 function): `ajmadison.search`
- New provider **atlasseniorliving.com** (1 function): `atlasseniorliving.searchCommunities`
- New provider **classichome.com** (3 functions): `classichome.addToCart`, `classichome.getProduct`, `classichome.searchProducts`
- New provider **embroker.com** (2 functions): `embroker.getQuoteEntryPoint`, `embroker.listCoverageLines`
- New provider **gotchacovered.com** (2 functions): `gotchacovered.getDesignStyleQuizQuestions`, `gotchacovered.takeDesignStyleQuiz`
- New provider **handypro.com** (2 functions): `handypro.checkServiceArea`, `handypro.searchServiceCategories`
- New provider **harmar.com** (4 functions): `harmar.findCompatibleLifts`, `harmar.getCompatibleLifts`, `harmar.searchChairModels`, `harmar.searchVehicleModels`
- New provider **hobie.com** (3 functions): `hobie.checkLocalAvailability`, `hobie.listModelColors`, `hobie.listModels`
- New provider **islllc.com** (1 function): `islllc.searchCommunities`
- New provider **kitchentuneup.com** (2 functions): `kitchentuneup.listCabinetStyles`, `kitchentuneup.visualizeKitchen`
- New provider **kompan.com** (2 functions): `kompan.getSparePartsDocuments`, `kompan.searchProduct`
- New provider **louvershop.com** (1 function): `louvershop.findLocalDealer`
- New provider **yourarborhome.com** (2 functions): `yourarborhome.getHome`, `yourarborhome.searchHomes`
- Added `lululemon.getProducts`
- Added `shopify.getProducts`
- Added `shopify.getSetEvidence`
- Added `shopify.listProducts`
- Added `shopify.resolveProductUrl`

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.6.0 (2026-08-12)

**Providers**

- New provider **bykoket.com** (3 functions): `bykoket.addToCart`, `bykoket.getProduct`, `bykoket.searchProducts`
- New provider **1stdibs.com** (2 functions): `firstdibs.getListing`, `firstdibs.search`
- New provider **hauslabs.com** (3 functions): `hauslabs.getHauslabsProduct`, `hauslabs.listHauslabsProducts`, `hauslabs.runFoundationShadeFinder`
- New provider **maidenhome.com** (3 functions): `maidenhome.getProduct`, `maidenhome.resolveVariant`, `maidenhome.searchConfigurations`
- New provider **premierbuildings.us** (3 functions): `premierbuildings.findDealers`, `premierbuildings.listBuildingStyles`, `premierbuildings.priceBuilding`
- New provider **seegarsfence.com** (1 of 2 functions live, the rest planned): `seegarsfence.checkServiceArea`, `seegarsfence.estimateFencePrice`
- New provider **topviewtix.com** (1 of 3 functions live, the rest planned): `topviewtix.getPackageDetails`, `topviewtix.listPackages`, `topviewtix.reserve`
- Added `lululemon.getProductAttributes`
- Added `shopify.getCollection`
- Added `shopify.listCollections`
- `paypal.getCurrencyConversionQuote` is now live (it was planned)
- `target.findStore` is now live (it was planned)
- `wellfound.getCompany` is back to planned

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.5.0 (2026-08-10)

**Providers**

- New provider **bluehaven.com** (2 of 3 functions live, the rest planned): `bluehaven.checkPoolSiteFeasibility`, `bluehaven.getPoolPriceEstimate`, `bluehaven.listPoolDesigns`
- New provider **carawayhome.com** (3 functions): `caraway.getCarawayProduct`, `caraway.listCarawayProducts`, `caraway.runCarawayQuiz`
- New provider **cyberpowerpc.com** (3 functions): `cyberpowerpc.getConfigurator`, `cyberpowerpc.listConfigurators`, `cyberpowerpc.priceBuild`
- New provider **hellotend.com** (3 of 5 functions live, the rest planned): `hellotend.bookAppointment`, `hellotend.listAvailableTimes`, `hellotend.listMarkets`, `hellotend.listServices`, `hellotend.listStudios`
- New provider **joybird.com** (3 functions): `joybird.getConfigurator`, `joybird.listConfigurators`, `joybird.priceConfigurator`
- New provider **stickergiant.com** (2 functions): `stickergiant.listStickerProducts`, `stickergiant.priceCustomSticker`
- New provider **sunhomesaunas.com** (3 functions): `sunhomesaunas.addSaunaToCart`, `sunhomesaunas.getPersonalizedSaunaMatches`, `sunhomesaunas.getSaunaFinderQuestions`
- New provider **therabody.com** (3 functions): `therabody.getTheragunProduct`, `therabody.listTheragunProducts`, `therabody.recommendTheragun`
- New provider **viewrail.com** (2 of 4 functions live, the rest planned): `viewrail.getDesignEstimate`, `viewrail.listInfillOptions`, `viewrail.listMaterials`, `viewrail.listMountingStyles`
- Added `teladoc.getInsurancePricing`
- `aa.getBaggageAllowance` is now live (it was planned)
- `avis.getLocation` is now live (it was planned)
- `avis.searchLocations` is now live (it was planned)
- `bmwusa.getModel` is now live (it was planned)
- `bmwusa.listModels` is now live (it was planned)
- `bmwusa.listOffers` is now live (it was planned)
- `cancer.getCancerInfoSummary` is now live (it was planned)
- `cars.getVehicleValue` is now live (it was planned)
- `cars.search` is now live (it was planned)
- `classpass.search` is now live (it was planned)
- `dice.getJob` is now live (it was planned)
- `dillards.findStores` is now live (it was planned)
- `discounttire.getProduct` is now live (it was planned)
- `discounttire.searchTiresBySize` is now live (it was planned)
- `extraspace.checkAvailability` is now live (it was planned)
- `ford.getOffers` is now live (it was planned)
- `ford.getRecalls` is now live (it was planned)
- `ford.getVehicle` is now live (it was planned)
- `fred.browseCategory` is now live (it was planned)
- `fred.getSeriesObservations` is now live (it was planned)
- `grainger.checkStock` is now live (it was planned)
- `grainger.getProduct` is now live (it was planned)
- `grainger.search` is now live (it was planned)
- `labcorp.getTest` is now live (it was planned)
- `medicare.getPlan` is now live (it was planned)
- `paypal.estimateFee` is now live (it was planned)
- `paypal.getFees` is now live (it was planned)
- `pizzahut.getDeals` is now live (it was planned)
- `pizzahut.getMenu` is now live (it was planned)
- `sears.checkStock` is now live (it was planned)
- `teladoc.getPricing` is now live (it was planned)
- `thezebra.getAutoQuotes` is now live (it was planned)
- `visible.checkCoverage` is now live (it was planned)
- `visible.getPlans` is now live (it was planned)
- `visible.searchPhones` is now live (it was planned)
- `wellfound.getCompany` is now live (it was planned)

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.4.0 (2026-08-07)

**Capabilities**

- Added `flights.getFlightStatus`

**Providers**

- `marriott.findHotels` is now live (it was planned)

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.3.0 (2026-08-07)

**Capabilities**

- Declared `insurance.listHomeownersCompanies` (planned, not built yet)
- Added `insurance.listReferralCarriers`

**Providers**

- New provider **decked.com** (4 functions): `decked.getVehicleClass`, `decked.priceCabSideOption`, `decked.resolveFitment`, `decked.searchFits`
- New provider **shop.lululemon.com** (3 of 10 functions live, the rest planned): `lululemon.addToCart`, `lululemon.checkStoreStock`, `lululemon.findStores`, `lululemon.getCart`, `lululemon.getProduct`, `lululemon.getReviews`, `lululemon.getSimilarProducts`, `lululemon.getSizeGuide`, and 2 more
- `aa.retrieveBooking` is now live (it was planned)
- `abercrombie.checkStock` is now live (it was planned)
- `cancer.findCancerCenters` is now live (it was planned)
- `cheapflights.searchHotels` is now live (it was planned)
- `classpass.getStudio` is now live (it was planned)
- `dillards.getProduct` is now live (it was planned)
- `lonelyplanet.search` is now live (it was planned)
- `medicare.findHospitals` is now live (it was planned)
- `medicare.searchMedigapPlans` is now live (it was planned)
- `otto.search` is now live (it was planned)
- `pizzahut.getMenuItem` is now live (it was planned)
- `sears.getProduct` is now live (it was planned)
- `sears.search` is now live (it was planned)
- `walmart.search` is now live (it was planned)
- `wellfound.getJob` is now live (it was planned)

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)
