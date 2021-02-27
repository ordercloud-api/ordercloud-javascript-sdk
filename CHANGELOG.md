# Changelog

All notable changes to the ordercloud-javascript-sdk will be documented in this file starting in version 4. Migration guide for versions prior to version 4 are documented [here](./MIGRATION_GUIDE.md)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
