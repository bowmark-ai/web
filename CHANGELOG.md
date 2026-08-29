# Changelog

Every release of `@bowmark/web` (npm) and `bowmark-web` / `bowmark-web-stubs` (PyPI).
The three always ship at one version. They are one client in two languages, plus its stubs.

Entries are generated from the published capability and provider tables, so this file
describes the callable surface and nothing else.

## 1.11.0 (2026-08-29)

**Capabilities**

- New capability **git_commit_history** (1 function): `git_commit_history.commitHistory`
- New capability **hvac** (1 function): `hvac.getCostEstimate`
- New capability **products** (1 function): `products.getAvailability`
- New capability **promocodes** (1 function): `promocodes.search`
- New capability **restaurant_booking** (1 function): `restaurant_booking.findAvailability`
- New capability **shipping** (1 function): `shipping.estimate`
- New capability **tariff** (1 function): `tariff.lookup`
- New capability **weather** (1 function): `weather.forecast`

**Providers**

- New provider **americanstandardair.com** (1 function): `americanstandard.getSystemCostEstimate`
- New provider **amramp.com** (1 function): `amramp.findNearestLocation`
- New provider **ancientnutrition.com** (2 functions): `ancientnutrition.computeGutType`, `ancientnutrition.getGutTypeQuizQuestions`
- New provider **andersenwindows.com** (1 function): `andersenwindows.findDealers`
- New provider **apple.com** (2 functions): `apple.getProduct`, `apple.search`
- New provider **archipelago.gg** (2 functions): `archipelago.getClientRelease`, `archipelago.getGameOptions`
- New provider **autocamp.com** (1 function): `autocamp.searchAvailability`
- New provider **avantstay.com** (2 functions): `avantstay.getPricing`, `avantstay.searchProperties`
- New provider **azazie.com** (1 function): `azazie.getBuildYourOwnConfig`
- New provider **baublebar.com** (3 functions): `baublebar.getBaublebarCheckoutLink`, `baublebar.getBaublebarProduct`, `baublebar.listBaublebarProducts`
- New provider **beatthebomb.com** (3 functions): `beatthebomb.checkAvailability`, `beatthebomb.listMissions`, `beatthebomb.priceMission`
- New provider **bestbuy.com** (2 functions): `bestbuy.getProduct`, `bestbuy.search`
- New provider **bigjoeforklifts.com** (3 functions): `bigjoeforklifts.getRuntimeEstimatorInputs`, `bigjoeforklifts.listForkliftModels`, `bigjoeforklifts.prepareQuoteRequest`
- New provider **blackstoneproducts.com** (1 function): `blackstoneproducts.findNearbyDealers`
- New provider **bluesignal.com** (2 functions): `bluesignal.getJob`, `bluesignal.searchJobs`
- New provider **bollandbranch.com** (3 functions): `bollandbranch.getBedDesignerFlow`, `bollandbranch.getCategoryOptions`, `bollandbranch.getSwatchDetails`
- New provider **bulletproof.com** (1 function): `bulletproof.findStores`
- New provider **byltbasics.com** (3 functions): `byltbasics.buildPackHandoff`, `byltbasics.getPackOptions`, `byltbasics.listBundlePacks`
- New provider **califloors.com** (3 functions): `califloors.getProduct`, `califloors.listCategories`, `califloors.searchProducts`
- New provider **nutribullet.com** (2 functions): `capitalbrands.getBlenderRecommendation`, `capitalbrands.listQuizQuestions`
- New provider **carepatrol.com** (1 function): `carepatrol.findLocalAdvisor`
- New provider **chesmar.com** (1 function): `chesmar.searchQuickMoveInHomes`
- New provider **cleanairlawncare.com** (2 functions): `cleanairlawncare.checkServiceArea`, `cleanairlawncare.getAvailableSlots`
- New provider **clubchampion.com** (3 functions): `clubchampion.checkAvailability`, `clubchampion.getFittings`, `clubchampion.listStudios`
- New provider **consultnet.com** (1 function): `consultnet.searchJobs`
- New provider **couponfollow.com** (1 function): `couponfollow.getCodes`
- New provider **cruiselakegeneva.com** (2 functions): `cruiselakegeneva.getTour`, `cruiselakegeneva.listTours`
- New provider **culturefly.com** (3 functions): `culturefly.buildCultureFlyCheckoutLink`, `culturefly.getCultureFlyBoxOptions`, `culturefly.listCultureFlyBoxes`
- New provider **deangroup.com** (3 functions): `deangroup.getRateCalendar`, `deangroup.listProperties`, `deangroup.searchAvailability`
- New provider **developers.openai.com** (1 function): `developersopenai.getDocPage`
- New provider **disneyworld.disney.go.com** (1 function): `disney.getTicketPrice`
- New provider **ebay.com** (1 function): `ebay.search`
- New provider **eq3.com** (2 functions): `eq3.getSofaConfiguration`, `eq3.listSofas`
- New provider **executivehomecare.com** (1 function): `executivehomecare.findLocalOffice`
- New provider **facerealityskincare.com** (1 function): `facerealityskincare.searchAcneExperts`
- New provider **shop.formax.com** (2 functions): `formax.getCartLink`, `formax.search`
- New provider **furniture.com** (3 functions): `furniture.listCategories`, `furniture.listFilterOptions`, `furniture.searchProducts`
- New provider **g2.com** (2 functions): `g2.getProduct`, `g2.search`
- New provider **github.com** (1 function): `github.listCommits`
- New provider **glassesusa.com** (1 function): `glassesusa.getProduct`
- New provider **hamptonwaterwine.com** (1 function): `hamptonwaterwine.findNearbyRetailers`
- New provider **heatherwood.com** (2 functions): `heatherwood.getFloorplan`, `heatherwood.listFloorplans`
- New provider **historymaker.com** (3 functions): `historymaker.getHome`, `historymaker.listCommunities`, `historymaker.searchQuickMoveIns`
- New provider **identitygroup.com** (3 functions): `identitygroup.getSign`, `identitygroup.priceMountOption`, `identitygroup.searchSigns`
- New provider **instagram.com** (2 functions): `instagram.getPosts`, `instagram.getProfile`
- New provider **iproyal.com** (1 function): `iproyal.getPlans`
- New provider **istanbulkart.istanbul** (2 functions): `istanbulkart.getCardFees`, `istanbulkart.getTouristPassFares`
- New provider **ivoryhomes.com** (1 function): `ivoryhomes.searchFloorPlans`
- New provider **junkluggers.com** (3 functions): `junkluggers.findFranchise`, `junkluggers.getAvailability`, `junkluggers.getServiceTypes`
- New provider **kaleidescape.com** (1 function): `kaleidescape.findDealersNear`
- New provider **lasikplus.com** (2 functions): `lasikplus.findCenters`, `lasikplus.getAvailability`
- New provider **legacyhomesal.com** (1 function): `legacyhomesal.getAvailability`
- New provider **littlewordsproject.com** (3 functions): `littlewordsproject.getLittleWordsProjectCheckoutLink`, `littlewordsproject.getLittleWordsProjectProduct`, `littlewordsproject.listLittleWordsProjectProducts`
- New provider **nationalbusinessfurniture.com** (4 functions): `nationalbusinessfurniture.addToCart`, `nationalbusinessfurniture.getProduct`, `nationalbusinessfurniture.priceConfiguration`, `nationalbusinessfurniture.searchProducts`
- New provider **newageproducts.com** (1 function): `newageproducts.getNewageproductsProduct`
- New provider **nvisioncenters.com** (2 functions): `nvisioncenters.calculateLasikSavings`, `nvisioncenters.checkLasikCandidacy`
- New provider **oliverwinery.com** (3 functions): `oliverwinery.checkShippingAvailability`, `oliverwinery.getWine`, `oliverwinery.listWines`
- New provider **pacificabeauty.com** (1 function): `pacificabeauty.getHairRecommendation`
- New provider **pacificcompanies.com** (5 functions): `pacificcompanies.assembleApplication`, `pacificcompanies.getApplicationSchema`, `pacificcompanies.getJob`, `pacificcompanies.getJobCategories`, `pacificcompanies.searchJobs`
- New provider **perennialsandsutherland.com** (3 functions): `perennialsandsutherland.getRugVariant`, `perennialsandsutherland.getTearsheetUrl`, `perennialsandsutherland.searchRugs`
- New provider **positivegrid.com** (1 function): `positivegrid.findRetailers`
- New provider **provenwinners.com** (2 functions): `provenwinners.getRecipeDetails`, `provenwinners.searchContainerRecipes`
- New provider **resy.com** (2 functions): `resy.checkAvailability`, `resy.search`
- New provider **rvshare.com** (1 function): `rvshare.searchListings`
- New provider **scentbird.com** (1 function): `scentbird.browseCatalogue`
- New provider **2ndswing.com** (3 functions): `secondswing.getQuoteAttributes`, `secondswing.getTradeInValue`, `secondswing.searchClubs`
- New provider **sellcell.com** (1 function): `sellcell.getTradeInOffers`
- New provider **sitmeanssit.com** (1 function): `sitmeanssit.findNearestLocations`
- New provider **smartwool.com** (1 function): `smartwool.getSockRecommendation`
- New provider **solostove.com** (1 function): `solostove.checkBundle`
- New provider **starlighthomes.com** (3 functions): `starlighthomes.getMetro`, `starlighthomes.getNeighborhood`, `starlighthomes.listMetros`
- New provider **summerfridays.com** (2 functions): `summerfridaysquiz.getSkincareQuizQuestions`, `summerfridaysquiz.getSkincareRoutine`
- New provider **sunlighten.com** (2 functions): `sunlighten.getModelPricing`, `sunlighten.matchSauna`
- New provider **therowhouse.com** (2 functions): `therowhouse.getSchedule`, `therowhouse.listLocations`
- New provider **easyclosets.com** (1 function): `thestowcompany.getSampleClosetEstimate`
- New provider **thibautdesign.com** (1 function): `thibautdesign.calculateRollsNeeded`
- New provider **travelinsured.com** (2 functions): `travelinsured.getZipInfo`, `travelinsured.searchDestinations`
- New provider **trawickinternational.com** (2 functions): `trawickinternational.getPlanPremium`, `trawickinternational.getQuote`
- New provider **trophysignaturehomes.com** (3 functions): `trophysignaturehomes.compareHomes`, `trophysignaturehomes.getHome`, `trophysignaturehomes.searchHomes`
- New provider **ups.com** (1 function): `ups.getRate`
- New provider **usps.com** (1 function): `usps.getRate`
- New provider **vessi.com** (4 functions): `vessi.getFitGuide`, `vessi.getProduct`, `vessi.listProducts`, `vessi.searchProducts`
- New provider **winestyles.com** (2 functions): `winestyles.listStores`, `winestyles.searchStoreInventory`
- New provider **youtube.com** (1 function): `youtube.getTranscript`
- Added `target.search`

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.10.0 (2026-08-26)

**Capabilities**

- New capability **search** (2 functions): `search.news`, `search.web`

**Providers**

- New provider **asppoolco.com** (2 functions): `asppoolco.findLocationByZip`, `asppoolco.listLocations`
- New provider **bing.com** (2 functions): `bing.searchNews`, `bing.searchWeb`
- New provider **fivestarbathsolutions.com** (2 functions): `fivestarbathsolutions.getAvailableSlots`, `fivestarbathsolutions.listLocations`
- New provider **holidaybuilders.com** (2 functions): `holidaybuilders.getHomeDetail`, `holidaybuilders.searchAvailableHomes`
- New provider **kuiu.com** (4 functions): `kuiu.findKuiuSize`, `kuiu.getKuiuCheckoutLink`, `kuiu.getKuiuProduct`, `kuiu.listKuiuProducts`
- New provider **medicalguardian.com** (2 functions): `medicalguardian.assessFallRisk`, `medicalguardian.getRiskAssessmentQuestions`
- New provider **reliancepartners.com** (2 functions): `reliancepartners.assembleApplication`, `reliancepartners.getApplicationSchema`
- New provider **revisionskincare.com** (2 functions): `revisionskincare.getSkincareQuizQuestions`, `revisionskincare.takeSkincareQuiz`
- New provider **saatva.com** (2 functions): `saatva.listMattresses`, `saatva.recommendMattress`
- New provider **smartsign.com** (2 functions): `smartsign.getTemplate`, `smartsign.search`
- New provider **teneohg.com** (2 functions): `teneohg.getMemberHotel`, `teneohg.searchMemberHotels`
- New provider **walkerhughes.com** (3 functions): `walkerhughes.findNearestOffice`, `walkerhughes.listOffices`, `walkerhughes.listQuoteProducts`
- New provider **yorkwallcoverings.com** (3 functions): `yorkwallcoverings.addToCart`, `yorkwallcoverings.getProduct`, `yorkwallcoverings.search`
- New provider **zennioptical.com** (3 functions): `zennioptical.checkStock`, `zennioptical.getFrame`, `zennioptical.priceLensConfig`

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

## 1.9.0 (2026-08-16)

**Providers**

- New provider **atlasoceanvoyages.com** (2 functions): `atlasoceanvoyages.getVoyage`, `atlasoceanvoyages.searchVoyages`
- New provider **brixton.com** (3 functions): `brixton.getBrixtonCheckoutLink`, `brixton.getBrixtonProduct`, `brixton.listBrixtonProducts`
- New provider **chantecaille.com** (2 functions): `chantecaille.getFoundationQuizTaxonomy`, `chantecaille.matchFoundation`
- New provider **davidsonhomes.com** (4 functions): `davidsonhomes.getCommunity`, `davidsonhomes.getHome`, `davidsonhomes.getRegion`, `davidsonhomes.listRegions`
- New provider **evolutionofsmooth.com** (2 functions): `evolutionofsmooth.answerShadeQuizQuestion`, `evolutionofsmooth.startShadeQuiz`
- New provider **fourseasonsyachts.com** (3 functions): `fourseasonsyachts.getVoyage`, `fourseasonsyachts.getVoyageSailing`, `fourseasonsyachts.searchVoyages`
- New provider **hansons.com** (1 function): `hansons.checkAvailability`
- New provider **hayden-homes.com** (1 function): `haydenhomes.searchQuickMoveIns`
- New provider **joycefactorydirect.com** (2 functions): `joycefactorydirect.getBathCalculatorOptions`, `joycefactorydirect.getWindowCalculatorOptions`
- New provider **justinwine.com** (1 function): `justinwine.listClubTiers`
- New provider **kingsdown.com** (1 function): `kingsdown.getBedMatchResult`
- New provider **lovelybride.com** (3 functions): `lovelybride.getAvailableSlots`, `lovelybride.getStoreAppointmentTypes`, `lovelybride.listStores`
- New provider **mossyoak.com** (3 functions): `mossyoak.getMossyoakCheckoutLink`, `mossyoak.getMossyoakProduct`, `mossyoak.listMossyoakProducts`
- New provider **outdoorresearch.com** (2 functions): `outdoorresearch.checkClaimEligibility`, `outdoorresearch.getWarrantyPolicy`
- New provider **rishi-tea.com** (2 functions): `rishitea.getTeaFinderQuiz`, `rishitea.matchTeaFinderQuiz`
- New provider **saltandstone.com** (3 functions): `saltandstone.getScentProducts`, `saltandstone.listScentFamilies`, `saltandstone.matchScent`
- New provider **seakeeper.com** (2 functions): `seakeeper.findNearestDealers`, `seakeeper.listAllDealers`
- New provider **tilsonhomes.com** (2 functions): `tilsonhomes.getElevationDetails`, `tilsonhomes.listPlans`
- New provider **titlenine.com** (1 function): `titlenine.calculateBraSize`
- New provider **waterfurnace.com** (2 functions): `waterfurnace.estimateGeothermalSavings`, `waterfurnace.lookupHomeDetails`
- Added `shopify.getStyleDetails`

Full inventory: [CAPABILITIES.md](CAPABILITIES.md) · [PROVIDERS.md](PROVIDERS.md)

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
