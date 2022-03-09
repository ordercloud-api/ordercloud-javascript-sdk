# Changelog

All notable changes to the ordercloud-javascript-sdk will be documented in this file starting in version 4. Migration guide for versions prior to version 4 are documented [here](./MIGRATION_GUIDE.md)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
