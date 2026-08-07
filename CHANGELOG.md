# Changelog

Every release of `@bowmark/web` (npm) and `bowmark-web` / `bowmark-web-stubs` (PyPI).
The three always ship at one version. They are one client in two languages, plus its stubs.

Entries are generated from the published capability and provider tables, so this file
describes the callable surface and nothing else.

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
