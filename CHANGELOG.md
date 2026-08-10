# Changelog

Every release of `@bowmark/web` (npm) and `bowmark-web` / `bowmark-web-stubs` (PyPI).
The three always ship at one version. They are one client in two languages, plus its stubs.

Entries are generated from the published capability and provider tables, so this file
describes the callable surface and nothing else.

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
