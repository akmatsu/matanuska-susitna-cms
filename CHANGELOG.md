## [0.14.1](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.14.0...v0.14.1) (2025-07-30)


### Bug Fixes

* can now connect existing election results ([a9b87ca](https://github.com/akmatsu/matanuska-susitna-cms/commit/a9b87caf6058213b96d5d648a2ff87616d46ffb2))

# [0.14.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.13.0...v0.14.0) (2025-07-30)


### Features

* added calendar id and calendar query to board ct ([d596738](https://github.com/akmatsu/matanuska-susitna-cms/commit/d59673874a2a3353aab924111b966226c3abf88f))

# [0.13.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.12.2...v0.13.0) (2025-07-22)


### Features

* added voting locations ([eed805d](https://github.com/akmatsu/matanuska-susitna-cms/commit/eed805d3b97589d75227637b8972cb910e9745a6))

## [0.12.2](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.12.1...v0.12.2) (2025-07-18)


### Bug Fixes

* only users who are assigned to electionsUser group can edit or create elections ([f2959df](https://github.com/akmatsu/matanuska-susitna-cms/commit/f2959dfd0b541300cf3f4ab4c43ba8a9f326ac54))
* only users who can edit elections can now see the elections pages ([a4c08a9](https://github.com/akmatsu/matanuska-susitna-cms/commit/a4c08a9f8ffc999ea62aa6ba93f7e13bfa6ab070))

## [0.12.1](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.12.0...v0.12.1) (2025-07-18)


### Bug Fixes

* elections date is now required ([#26](https://github.com/akmatsu/matanuska-susitna-cms/issues/26)) ([e2c4af2](https://github.com/akmatsu/matanuska-susitna-cms/commit/e2c4af281ad0f7592cd14a4bbc80788233eb3b6f))

# [0.12.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.11.1...v0.12.0) (2025-07-16)


### Features

* created elections CT ([0acecee](https://github.com/akmatsu/matanuska-susitna-cms/commit/0aceceea9386ca360d538fc74cf2bb1258440730))
* updated models ([b8e2207](https://github.com/akmatsu/matanuska-susitna-cms/commit/b8e2207c8b5e4183fba8977fa435ffada634539a))

## [0.11.1](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.11.0...v0.11.1) (2025-06-27)


### Bug Fixes

* fixed cors errors ([4fa5be2](https://github.com/akmatsu/matanuska-susitna-cms/commit/4fa5be2a0a3ba56cc773427d333cea031c185eb7))
* removed extra comma from cors config ([02a50fa](https://github.com/akmatsu/matanuska-susitna-cms/commit/02a50fa4726ca2dab07e061d1e0cbe5b03183a84))

# [0.11.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.10.0...v0.11.0) (2025-06-27)


### Features

* added directory field to boards ([6e7ac0f](https://github.com/akmatsu/matanuska-susitna-cms/commit/6e7ac0fccf4dda70e650819739c5554acf2ffeeb))
* added parli training link to boards page ([c215cd3](https://github.com/akmatsu/matanuska-susitna-cms/commit/c215cd3e56757e6d780e28b24731a5d5e00b4bef))

# [0.10.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.9.3...v0.10.0) (2025-06-23)


### Bug Fixes

* removed duplicate memberName checki n page __resolveType ([684853d](https://github.com/akmatsu/matanuska-susitna-cms/commit/684853dc52bd4050c776b4190e5d749b41dbaea1))


### Features

* now indexing topics in the search engine ([1610e17](https://github.com/akmatsu/matanuska-susitna-cms/commit/1610e17a8779d973134c6f84917254ee2e141f7e))

## [0.9.3](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.9.2...v0.9.3) (2025-06-12)


### Bug Fixes

* fixed issue where directive fallbacks were grabbing known directives by mistake ([5cdb401](https://github.com/akmatsu/matanuska-susitna-cms/commit/5cdb40126b0949a9c83e719f7149ce84677f87f3))
* fixed leaf and container direct fallbacks catching accepted directives ([e6c01cf](https://github.com/akmatsu/matanuska-susitna-cms/commit/e6c01cfb7d5e67cce6000a4b6f3d935b90bcfb76))
* fixed version and draft publishing ([ab334e0](https://github.com/akmatsu/matanuska-susitna-cms/commit/ab334e093c2f70a9df12c64389cc67c45c9d75e5))
* fixed versions not being created correctly ([2f68a6a](https://github.com/akmatsu/matanuska-susitna-cms/commit/2f68a6acd284d3717578530d49aede5ff2437383))
* no longer throwing server error when parsing unknown directives ([e8674cf](https://github.com/akmatsu/matanuska-susitna-cms/commit/e8674cff0e2b6ed3b40b5062db88ec94a219dea8))
* textDirectiveNode no longer adding undefined or empty spaces ([507c532](https://github.com/akmatsu/matanuska-susitna-cms/commit/507c532d0270ce94d29785d96c1620efb0e9765b))

## [0.9.2](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.9.1...v0.9.2) (2025-06-11)


### Bug Fixes

* fixed issue that prevented create topic pages from loading ([d000b44](https://github.com/akmatsu/matanuska-susitna-cms/commit/d000b4444488b8a41e0fa35c4601079795c1349e))

## [0.9.1](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.9.0...v0.9.1) (2025-06-11)


### Bug Fixes

* fixed graphql types and updated code to ensure type safety ([79eaeac](https://github.com/akmatsu/matanuska-susitna-cms/commit/79eaeacae37b88b4c6d80bab69b9fae9a2630d2b))

# [0.9.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.8.0...v0.9.0) (2025-06-10)


### Bug Fixes

* fixed eslint and type errors ([564f832](https://github.com/akmatsu/matanuska-susitna-cms/commit/564f832a46e67faa716f864145612ed08b9a1ece))


### Features

* deleted public files ([2af47b2](https://github.com/akmatsu/matanuska-susitna-cms/commit/2af47b2a4bb8587f4418ea53c5deeac539257685))

# [0.8.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.7.0...v0.8.0) (2025-06-10)


### Features

* created the topics CT ([f858abc](https://github.com/akmatsu/matanuska-susitna-cms/commit/f858abc429d975c42b193affe6a6a2df55f371ed))

# [0.7.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.6.0...v0.7.0) (2025-06-10)


### Bug Fixes

* added a migration for multiple services on org units ([e4aa437](https://github.com/akmatsu/matanuska-susitna-cms/commit/e4aa437fa75d09f879ba0914ab67dfac0b3e354f))
* added the rest of the type checks to internalLinkSearch resolveType function ([f469cc4](https://github.com/akmatsu/matanuska-susitna-cms/commit/f469cc4091550ba02f081426069709a2ba1191ba))
* fixed issues with liveURL ([4fd441b](https://github.com/akmatsu/matanuska-susitna-cms/commit/4fd441b1985a0be6a57707ec8939658010d5942d))
* fixed liveURL not showing up for published documents ([97a38f3](https://github.com/akmatsu/matanuska-susitna-cms/commit/97a38f3ce43f871a6a5cd11b67800e2d93de7f2d))
* fixed some special pages not being redirected to correctly ([b5b37bf](https://github.com/akmatsu/matanuska-susitna-cms/commit/b5b37bf5f06d0c16b3a592c6f6df0de574367aed))
* improved internal link searching ([dad4c78](https://github.com/akmatsu/matanuska-susitna-cms/commit/dad4c78c6ecbddffca69712ca1f8632272e582ab))
* orgUnits can now have multiple services ([10304c5](https://github.com/akmatsu/matanuska-susitna-cms/commit/10304c5843b9170b58bfcbf27b13f237de42562a))
* triggering release ([dc197d7](https://github.com/akmatsu/matanuska-susitna-cms/commit/dc197d7bc99c9ff4eb55bacfd634b1ea5b6fce43))


### Features

* added the ability to toggle internalLinks from the selection toolbar. Also added a delete link button ([c1524aa](https://github.com/akmatsu/matanuska-susitna-cms/commit/c1524aaef21b2c2a4c30d8f6352aac1477ce0a84))
* created a keyboard shortcut for creating links ([32924bb](https://github.com/akmatsu/matanuska-susitna-cms/commit/32924bb7b332f7daa9d2998dafcb75db8547c6a3))
* created queries to dynamically grab data ([7cf284a](https://github.com/akmatsu/matanuska-susitna-cms/commit/7cf284a25e1b00c32161aeb166d7ba5fc3918afe))
* fixed some selection errors ([f5606d1](https://github.com/akmatsu/matanuska-susitna-cms/commit/f5606d1fca87bb22191cca828676ee25373e9087))
* improved ability to search for internal links ([730c57a](https://github.com/akmatsu/matanuska-susitna-cms/commit/730c57a81e77d1c4825d5c130c3f883e1e720bee))
