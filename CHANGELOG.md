# Changelog

All notable changes to the ordercloud-javascript-sdk will be documented in this file starting in version 4. Migration guide for versions prior to version 4 are documented [here](./MIGRATION_GUIDE.md)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [6.0.7] - 2024-04-17
- Bring SDK up to date with API [v1.0.338](https://ordercloud.io/release-notes/v1.0.338)

# [6.0.6] - 2024-04-03
- Bring SDK up to date with API [v1.0.333](https://ordercloud.io/release-notes/v1.0.333)

# [6.0.5] - 2024-03-28
- Bring SDK up to date with API [v1.0.332](https://ordercloud.io/release-notes/v1.0.332), which adds Suppliers to Entity Sync

# [6.0.4] - 2024-03-20
### Fixed
- Error when trying to set token in edge runtime because trying to use document in server environment

# [6.0.3] - 2024-03-19
- Bring SDK up to date with API [v1.0.328](https://ordercloud.io/release-notes/v1.0.328), which adds Admin, Buyer and Supplier users to Entity Sync

# [6.0.2] - 2024-03-13
- Bring SDK up to date with API [v1.0.327](https://ordercloud.io/release-notes/v1.0.327)

# [6.0.1] - 2024-03-05
- Bring SDK up to date with API [v1.0.325](https://ordercloud.io/release-notes/v1.0.325), which introduces Entity sync

# [6.0.0] - 2024-03-05
- Bring SDK up to date with API [v1.0.324](https://ordercloud.io/release-notes/v1.0.324) 
- This version includes a breaking change where forgotten passwords and forgotten usernames have been consolidated under ForgottenCredentials

# [5.3.0] - 2024-02-08
- Bring SDK up to date with API [v1.0.320](https://ordercloud.io/release-notes/v1.0.320) which adds IsOnSale to line items as well as a new error config endpoint
- Adds a new method for retrieving an identity token used by the Discover 2 proxy. More details in our [product sync documentation](https://ordercloud.io/knowledge-base/productsync)

## [5.2.4] - 2023-12-18
- Bring SDK up to date with [API v1.0.315](https://ordercloud.io/release-notes/v1.0.315) which adds routes to Cart API for setting and updating one time shipping and billing addresses

## [5.2.3] - 2023-11-06
- Fixes broken links within the SDK documentation

## [5.2.2] - 2023-10-26
- Bring SDK up to date with [API v1.0.309](https://ordercloud.io/release-notes/v1.0.309) which adds new endpoints to support Product Bundles in subscriptions.

## [5.2.1] - 2023-09-29
- Bring SDK up to date with [API v1.0.304](https://ordercloud.io/release-notes/v1.0.304) which introduces OrderSynchronization.

## [5.2.0] - 2023-08-30
- Update SDK to optionally accept a custom axios adapter
- Bring SDK up to date with [API v1.0.299](https://ordercloud.io/release-notes/v1.0.299)
 
## [5.1.0] - 2023-08-10
- Allow methods to be called without a scope parameter. When no scope is provided, OrderCloud will simply return all assigned roles
 
 ## [5.0.10] - 2023-07-27
- SDK up to date with [API v1.0.296](https://ordercloud.io/release-notes/v1.0.296), which introduces product synchronization

 ## [5.0.9] - 2023-07-20
- SDK up to date with [API v1.0.294](https://ordercloud.io/release-notes/v1.0.294), which adds support for listing product pricing for multiple sellers in a single API call

 ## [5.0.8] - 2023-06-28
- SDK up to date with [API v1.0.293](https://ordercloud.io/release-notes/v1.0.293), which contains some changes to Tracking Events and a new Delivery Configuration feature

 ## [5.0.7] - 2023-06-26
- SDK up to date with [API v1.0.292](https://ordercloud.io/release-notes/v1.0.292), which expands Product Collections

 ## [5.0.6] - 2023-04-13
- SDK up to date with [API v1.0.276](https://ordercloud.io/release-notes/v1.0.276), which introduces Subscription orders

## [5.0.5] - 2023-04-03
- SDK up to date with [API v1.0.274](https://ordercloud.io/release-notes/v1.0.274), which expands support for Inventory Records

## [5.0.4] - 2023-03-17
- Update axios peer dependency version from ^1.0.0 to ^1.1.3
    - A bug in axios was causing a filtering issue in our sdk

## [5.0.3] - 2023-03-02
- Add new optional param anonuserid to Auth.Anonymous (part of new tracking events feature)

## [5.0.2] - 2023-02-27
- Add missed changes for Tracking Events

## [5.0.1] - 2023-02-27
- SDK up to date with [API v1.0.267](https://ordercloud.io/release-notes/v1.0.267), adding support for Tracking Events

## [5.0.0-beta.5] - 2023-02-10
- SDK up to date with [API v1.0.265](https://ordercloud.io/release-notes/v1.0.265)


## [5.0.0-beta.4] - 2023-01-23
- SDK up to date with [API v1.0.263](https://ordercloud.io/release-notes/v1.0.263)

## [5.0.0-beta.3] - 2022-12-06
### Added
- new types for order returns
    - OrderReturnCalculatePayload
    - OrderReturnCalculateResponse
    - LineItemReturnCalculation

## [5.0.0-beta.1] - 2022-11-03

## [5.0.0-beta.2] - 2022-12-06
### Fixed
- OrderCloudError was not serializing errors correctly (breaking change)

## [5.0.0-beta.1] - 2022-11-03
### Added
- Added support for axios ^1.0.0, version less than 1.0.0 no longer supported (breaking change)
- Updated OrderCloudError (breaking change more details in MIGRATION_GUIDE.md)

## [4.11.1] - 2022-11-03
### Fixed
- Updated acceptable version range for axios dependency (v1.0.0 and up won't work)

## [4.11.0] - 2022-09-01
### Added
- SDK up to date with [API v1.0.251](https://ordercloud.io/release-notes/v1.0.251)
- Introduces [Cart API Endpoints](https://ordercloud.io/knowledge-base/cart)
## [4.10.1] - 2022-07-01
### Fixed
- Incorrect model type on DecodedToken.role [#76](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/76)

## [4.10.0] - 2022-06-22
### Added
- New Feature: [Ad-Hoc Products](https://ordercloud.io/knowledge-base/ad-hoc-products)
- Ad-Hoc Products enables adding products from an external system directly to an OrderCloud order

## [4.9.9] - 2022-06-21
### Fixed
- Filters set with 0 are dropped [#73](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/73)
- Access token not saved after refresh [#74](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/74)

## [4.9.8] - 2022-06-08
### Added
- SDK up to date with [API v1.0.241](https://ordercloud.io/release-notes/v1.0.241)
- Introduces [Product Collections](https://ordercloud.io/knowledge-base/product-collections)

## [4.8.8] - 2022-05-19
### Added
- SDK up to date with [API v1.0.238](https://ordercloud.io/release-notes/v1.0.238)
- Introduces Order Returns and adds Message Sender templates
- PriceScheduleID added to LineItems

## [4.7.8] - 2022-05-04
### Added
- Added an optional `customRoles` array to the authentication methods to support authenticating with custom roles, in addition to standard ApiRoles.

## [4.6.8] - 2022-05-02
### Fixed
- Docs now up to date with API v1.0.235 and previous changes to DecodedToken.role
### Removed
- The ApiRole `InventoryAdmin` was removed from the OrderCloud API and is now considered a custom role.  This role was removed from the `ApiRole` type definition.  This could be a breaking change if your application uses the role `InventoryAdmin`.  In this case, we recommend making this role a custom role.

## [4.6.7] - 2022-04-27
### Fixed
- DecodedToken.role was not properly typed. It is now (ApiRole[] | ApiRole | undefined)
### Added
- SDK up to date with API v1.0.235

## [4.6.6] - 2022-04-18
### Fixed
- bug where new models from v4.6.5 were not being bundled in the final output

## [4.6.5] - 2022-04-14
### Added
- new models for message sender payloads
- new models for integration event payloads
- new models for oidc payloads and response [#67](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/67)

## [4.5.5] - 2022-04-07
### Fixed
- bug where filter with boolean false was being dropped ([#66](https://github.com/ordercloud-api/ordercloud-javascript-sdk/issues/66))

## [4.5.4] - 2022-03-23
### Added
- SDK up to date with API v1.0.233

## [4.4.4] - 2022-03-09
### Added
- SDK up to date with [API v1.0.231](https://ordercloud.io/release-notes/v1.0.231)

## [4.3.4] - 2022-03-07

### Fixed
- bug where methods for the Cert resource were using the wrong url

## [4.3.3] - 2022-02-17

### Fixed
- bug where type parameters on certain complex models are wrong due to being ordered incorrectly. Affects model `OrderWorksheet` and `OrderSplitResult`

## [4.3.2] - 2022-01-11

### Added
- SDK up to date with [API v1.0.225](https://ordercloud.io/release-notes/v1.0.225)

## [4.2.2] - 2021-11-09

### Added
- SDK up to date with [API v1.0.220](https://ordercloud.io/release-notes/v1.0.220)

## [4.2.1] - 2021-07-29

### Added
- SDK up to date with [API v1.0.214](https://ordercloud.io/release-notes/v1.0.214)

### Fixed
- cookieOption defaults were being clobbered and as a result defaults were not being applied

## [4.2.0] - 2021-03-04

### Added
- SDK up to date with [API v1.0.196](https://ordercloud.io/release-notes/v1.0.197)

## [4.1.0] - 2021-02-27

### Added
- SDK up to date with [API v1.0.196](https://ordercloud.io/release-notes/v1.0.196)

### Fixed
- `OrderCloudError` model not exported from public entry point

### Security
- Upgraded axios dependency to version 0.21.1

## [4.0.1] - 2021-01-30

### Added
- SDK up to date with API v1.0.183
- Cookie options configuration to set path - defaults to root path if no path is provided.

### Fixed
- Prevent list options from being mutated. This lead to side effects for any user relying on the options object
- Typescript only: list options `searchOn` and `sortBy` would produce type errors for valid types
