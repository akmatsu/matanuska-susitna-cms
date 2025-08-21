# [0.20.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.19.2...v0.20.0) (2025-08-21)


### Features

* deleting index URLs if index is set to no or they are deleted ([fc8d972](https://github.com/akmatsu/matanuska-susitna-cms/commit/fc8d972b9e94bcf8ca6b69b7b42cef732552300b))

## [0.19.2](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.19.1...v0.19.2) (2025-08-21)


### Bug Fixes

* fixed plan Documents not saving on plans ([07dc885](https://github.com/akmatsu/matanuska-susitna-cms/commit/07dc885078b0f4598c00b3d0d9e8cf7cf7052148))

## [0.19.1](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.19.0...v0.19.1) (2025-08-21)


### Bug Fixes

* increased maxFileSize to 500 MB ([da10b3b](https://github.com/akmatsu/matanuska-susitna-cms/commit/da10b3bcd20c5bc25131499a97a3250075b41885))

# [0.19.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.18.0...v0.19.0) (2025-08-20)


### Bug Fixes

* add missing relationships and index plans in the search engine ([6cf2dd1](https://github.com/akmatsu/matanuska-susitna-cms/commit/6cf2dd11b7dea17d97d4013b52091c547343d690))
* all page items are now indexed in the search engine ([4cc6eb4](https://github.com/akmatsu/matanuska-susitna-cms/commit/4cc6eb4a214b894bb989d6cef34deb8f35458430))
* fixed linting warnings ([633e18f](https://github.com/akmatsu/matanuska-susitna-cms/commit/633e18f67570f9b1f3a6d4d1d9f54a2b3b98c25d))
* fixed type errors, fixed access warnigns appearing when they shouldn't, owner field is read only when not admin or owner ([b1ea2d9](https://github.com/akmatsu/matanuska-susitna-cms/commit/b1ea2d9727af9459678a0c5dc6de6d798a9617ee))
* improved plan and topic indexing ([ea8a8f6](https://github.com/akmatsu/matanuska-susitna-cms/commit/ea8a8f658b271d6bd44ef1e3f54c8ec1ec3e8414))
* now indexing elections and boards pages ([7076660](https://github.com/akmatsu/matanuska-susitna-cms/commit/707666002266808e23e791ed35ceb63754517b62))


### Features

* added the ability to add images in body text ([b073eaa](https://github.com/akmatsu/matanuska-susitna-cms/commit/b073eaab0cb2606a292eb287f70416d2ef725d1b))
* created away to reset all indeces in typesense ([9c34026](https://github.com/akmatsu/matanuska-susitna-cms/commit/9c340264aa9b51d5ebd7cfcca7b579dd96ba447b))
* fixed slug not working ([8985067](https://github.com/akmatsu/matanuska-susitna-cms/commit/8985067938922a89c39e8ce1e3a9fdc571af9ce8))
* removed unused code ([5b14c02](https://github.com/akmatsu/matanuska-susitna-cms/commit/5b14c0250798ccc7e0d72176119abc4e9c129f71))

# [0.18.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.17.0...v0.18.0) (2025-08-14)


### Bug Fixes

* fixed items in dashboard side nav ([4292930](https://github.com/akmatsu/matanuska-susitna-cms/commit/42929304ffe1fddcd104ab4b056277136059882e))


### Features

* added a insufficient permissions warning to the tops of the page; ([66311aa](https://github.com/akmatsu/matanuska-susitna-cms/commit/66311aab01bbd01d5d03687de927615a3fc16848))
* added topics to shared pages ([797a737](https://github.com/akmatsu/matanuska-susitna-cms/commit/797a737b9bf396652a893187296942d9a931cddb))

# [0.17.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.16.0...v0.17.0) (2025-08-14)


### Features

* added topics and events to all page types ([9082e66](https://github.com/akmatsu/matanuska-susitna-cms/commit/9082e662b9464ef0980c8ecb59c19dc4f6a6e85e))
* expanded basePage, basePageWithSlug and added BasePageWithActions ([774cdec](https://github.com/akmatsu/matanuska-susitna-cms/commit/774cdec8edb438a17358a0219f3b2da055ba166a))

# [0.16.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.15.0...v0.16.0) (2025-08-12)


### Bug Fixes

* plans and events now implement basePage, plan and topics now have many to many relationship ([6544144](https://github.com/akmatsu/matanuska-susitna-cms/commit/65441442b04613f2332f50ae245263d1df740c01))
* redirects are now unique ([2a92c3b](https://github.com/akmatsu/matanuska-susitna-cms/commit/2a92c3ba301aa1dea60ead58baa482e3f7ffc7b5))
* removed endpoints for updating documents and contacts ([7f1fb37](https://github.com/akmatsu/matanuska-susitna-cms/commit/7f1fb37ccff015e30160666e34ddd582e6cf6605))
* update plan page layout ([60297a4](https://github.com/akmatsu/matanuska-susitna-cms/commit/60297a4e3b9232c3cd6962b66ff37cd5c20d38b5))


### Features

* created events and plans CT ([488f966](https://github.com/akmatsu/matanuska-susitna-cms/commit/488f9664ecf8af08219ec46da3e72dbd5fd61a94))
* created redirect CT, and added redirects and events to all page CTs ([98c9f81](https://github.com/akmatsu/matanuska-susitna-cms/commit/98c9f814a94b2f9f11b5aea1473fab33354db50f))
* dropping newDocuments and newContacts fields for now ([4ac96e5](https://github.com/akmatsu/matanuska-susitna-cms/commit/4ac96e5a611ec418eaaec3d4ec3e886f4f21e14e))
* fixed live URLs on topic pages ([d378116](https://github.com/akmatsu/matanuska-susitna-cms/commit/d3781166401b570770464d6242e46cfca281c7dd))
* updated graphql codegen ([6b8383e](https://github.com/akmatsu/matanuska-susitna-cms/commit/6b8383e0550cc7ba7dc84035a4356b4af443f181))

# [0.15.0](https://github.com/akmatsu/matanuska-susitna-cms/compare/v0.14.1...v0.15.0) (2025-08-05)


### Features

* added newContacts and newDocuments ([48c8693](https://github.com/akmatsu/matanuska-susitna-cms/commit/48c8693843a93dc04a9f8a2d7bb69c4a6aebe7f9))

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
