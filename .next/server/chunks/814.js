"use strict";
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 1058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ pageAcl)
/* harmony export */ });
async function pageAcl({ site , recordMap , pageId  }) {
    if (!site) {
        return {
            error: {
                statusCode: 404,
                message: "Unable to resolve notion site"
            }
        };
    }
    if (!recordMap) {
        return {
            error: {
                statusCode: 404,
                message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" not found.`
            }
        };
    }
    const keys = Object.keys(recordMap.block);
    const rootKey = keys[0];
    if (!rootKey) {
        return {
            error: {
                statusCode: 404,
                message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" invalid data.`
            }
        };
    }
    const rootValue = recordMap.block[rootKey]?.value;
    const rootSpaceId = rootValue?.space_id;
    if (rootSpaceId && site.rootNotionSpaceId && rootSpaceId !== site.rootNotionSpaceId) {
        if (true) {
            return {
                error: {
                    statusCode: 404,
                    message: `Notion page "${pageId}" doesn't belong to the Notion workspace owned by "${site.domain}".`
                }
            };
        }
    }
}


/***/ }),

/***/ 8268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _keyvhq_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3050);
/* harmony import */ var _keyvhq_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keyvhq_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keyvhq_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1888);
/* harmony import */ var _keyvhq_redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keyvhq_redis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_2__]);
_config__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let db;
if (_config__WEBPACK_IMPORTED_MODULE_2__/* .isRedisEnabled */ .YZ) {
    const keyvRedis = new (_keyvhq_redis__WEBPACK_IMPORTED_MODULE_1___default())(_config__WEBPACK_IMPORTED_MODULE_2__/* .redisUrl */ .Xc);
    db = new (_keyvhq_core__WEBPACK_IMPORTED_MODULE_0___default())({
        store: keyvRedis,
        namespace: _config__WEBPACK_IMPORTED_MODULE_2__/* .redisNamespace */ .VO || undefined
    });
} else {
    db = new (_keyvhq_core__WEBPACK_IMPORTED_MODULE_0___default())();
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getPage)
/* harmony export */ });
/* unused harmony export search */
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8098);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9726);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var _notion_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8730);
/* harmony import */ var _preview_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9108);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([p_map__WEBPACK_IMPORTED_MODULE_0__, p_memoize__WEBPACK_IMPORTED_MODULE_1__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, _notion_api__WEBPACK_IMPORTED_MODULE_3__, _preview_images__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__]);
([p_map__WEBPACK_IMPORTED_MODULE_0__, p_memoize__WEBPACK_IMPORTED_MODULE_1__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, _notion_api__WEBPACK_IMPORTED_MODULE_3__, _preview_images__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getNavigationLinkPages = (0,p_memoize__WEBPACK_IMPORTED_MODULE_1__["default"])(async ()=>{
    const navigationLinkPageIds = (_config__WEBPACK_IMPORTED_MODULE_5__/* .navigationLinks */ .tg || []).map((link)=>link.pageId).filter(Boolean);
    if (_config__WEBPACK_IMPORTED_MODULE_5__/* .navigationStyle */ .wW !== "default" && navigationLinkPageIds.length) {
        return (0,p_map__WEBPACK_IMPORTED_MODULE_0__["default"])(navigationLinkPageIds, async (navigationLinkPageId)=>_notion_api__WEBPACK_IMPORTED_MODULE_3__/* .notion.getPage */ .R.getPage(navigationLinkPageId, {
                chunkLimit: 1,
                fetchMissingBlocks: false,
                fetchCollections: false,
                signFileUrls: false
            }), {
            concurrency: 4
        });
    }
    return [];
});
async function getPage(pageId) {
    let recordMap = await _notion_api__WEBPACK_IMPORTED_MODULE_3__/* .notion.getPage */ .R.getPage(pageId);
    if (_config__WEBPACK_IMPORTED_MODULE_5__/* .navigationStyle */ .wW !== "default") {
        // ensure that any pages linked to in the custom navigation header have
        // their block info fully resolved in the page record map so we know
        // the page title, slug, etc.
        const navigationLinkRecordMaps = await getNavigationLinkPages();
        if (navigationLinkRecordMaps?.length) {
            recordMap = navigationLinkRecordMaps.reduce((map, navigationLinkRecordMap)=>(0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.mergeRecordMaps)(map, navigationLinkRecordMap), recordMap);
        }
    }
    if (_config__WEBPACK_IMPORTED_MODULE_5__/* .isPreviewImageSupportEnabled */ .K6) {
        const previewImageMap = await (0,_preview_images__WEBPACK_IMPORTED_MODULE_4__/* .getPreviewImageMap */ .R)(recordMap);
        recordMap.preview_images = previewImageMap;
    }
    return recordMap;
}
async function search(params) {
    return notion.search(params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getPreviewImageMap)
/* harmony export */ });
/* unused harmony export getPreviewImage */
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
/* harmony import */ var lqip_modern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1253);
/* harmony import */ var lqip_modern__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lqip_modern__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8098);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9726);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8751);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4872);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8268);
/* harmony import */ var _map_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([got__WEBPACK_IMPORTED_MODULE_0__, p_map__WEBPACK_IMPORTED_MODULE_2__, p_memoize__WEBPACK_IMPORTED_MODULE_3__, notion_utils__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__, _db__WEBPACK_IMPORTED_MODULE_6__, _map_image_url__WEBPACK_IMPORTED_MODULE_7__]);
([got__WEBPACK_IMPORTED_MODULE_0__, p_map__WEBPACK_IMPORTED_MODULE_2__, p_memoize__WEBPACK_IMPORTED_MODULE_3__, notion_utils__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__, _db__WEBPACK_IMPORTED_MODULE_6__, _map_image_url__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getPreviewImageMap(recordMap) {
    const urls = (0,notion_utils__WEBPACK_IMPORTED_MODULE_4__.getPageImageUrls)(recordMap, {
        mapImageUrl: _map_image_url__WEBPACK_IMPORTED_MODULE_7__/* .mapImageUrl */ .H
    }).concat([
        _config__WEBPACK_IMPORTED_MODULE_5__/* .defaultPageIcon */ .SH,
        _config__WEBPACK_IMPORTED_MODULE_5__/* .defaultPageCover */ .yN
    ]).filter(Boolean);
    const previewImagesMap = Object.fromEntries(await (0,p_map__WEBPACK_IMPORTED_MODULE_2__["default"])(urls, async (url)=>{
        const cacheKey = (0,notion_utils__WEBPACK_IMPORTED_MODULE_4__.normalizeUrl)(url);
        return [
            cacheKey,
            await getPreviewImage(url, {
                cacheKey
            })
        ];
    }, {
        concurrency: 8
    }));
    return previewImagesMap;
}
async function createPreviewImage(url, { cacheKey  }) {
    try {
        try {
            const cachedPreviewImage = await _db__WEBPACK_IMPORTED_MODULE_6__.db.get(cacheKey);
            if (cachedPreviewImage) {
                return cachedPreviewImage;
            }
        } catch (err) {
            // ignore redis errors
            console.warn(`redis error get "${cacheKey}"`, err.message);
        }
        const { body  } = await (0,got__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
            responseType: "buffer"
        });
        const result = await lqip_modern__WEBPACK_IMPORTED_MODULE_1___default()(body);
        console.log("lqip", {
            ...result.metadata,
            url,
            cacheKey
        });
        const previewImage = {
            originalWidth: result.metadata.originalWidth,
            originalHeight: result.metadata.originalHeight,
            dataURIBase64: result.metadata.dataURIBase64
        };
        try {
            await _db__WEBPACK_IMPORTED_MODULE_6__.db.set(cacheKey, previewImage);
        } catch (err1) {
            // ignore redis errors
            console.warn(`redis error set "${cacheKey}"`, err1.message);
        }
        return previewImage;
    } catch (err2) {
        console.warn("failed to create preview image", url, err2.message);
        return null;
    }
}
const getPreviewImage = (0,p_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(createPreviewImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ resolveNotionPage)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var _acl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1058);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8268);
/* harmony import */ var _notion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9941);
/* harmony import */ var _get_site_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__, _db__WEBPACK_IMPORTED_MODULE_2__, _notion__WEBPACK_IMPORTED_MODULE_3__, _get_site_map__WEBPACK_IMPORTED_MODULE_4__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__, _db__WEBPACK_IMPORTED_MODULE_2__, _notion__WEBPACK_IMPORTED_MODULE_3__, _get_site_map__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function resolveNotionPage(domain, rawPageId) {
    let pageId;
    let recordMap;
    if (rawPageId && rawPageId !== "index") {
        pageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(rawPageId);
        if (!pageId) {
            // check if the site configuration provides an override or a fallback for
            // the page's URI
            const override = _config__WEBPACK_IMPORTED_MODULE_1__/* .pageUrlOverrides */ ._w[rawPageId] || _config__WEBPACK_IMPORTED_MODULE_1__/* .pageUrlAdditions */ .mH[rawPageId];
            if (override) {
                pageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(override);
            }
        }
        const useUriToPageIdCache = true;
        const cacheKey = `uri-to-page-id:${domain}:${_config__WEBPACK_IMPORTED_MODULE_1__/* .environment */ .NZ}:${rawPageId}`;
        // TODO: should we use a TTL for these mappings or make them permanent?
        // const cacheTTL = 8.64e7 // one day in milliseconds
        const cacheTTL = undefined // disable cache TTL
        ;
        if (!pageId && useUriToPageIdCache) {
            try {
                // check if the database has a cached mapping of this URI to page ID
                pageId = await _db__WEBPACK_IMPORTED_MODULE_2__.db.get(cacheKey);
            // console.log(`redis get "${cacheKey}"`, pageId)
            } catch (err) {
                // ignore redis errors
                console.warn(`redis error get "${cacheKey}"`, err.message);
            }
        }
        if (pageId) {
            recordMap = await (0,_notion__WEBPACK_IMPORTED_MODULE_3__/* .getPage */ .f)(pageId);
        } else {
            // handle mapping of user-friendly canonical page paths to Notion page IDs
            // e.g., /developer-x-entrepreneur versus /71201624b204481f862630ea25ce62fe
            const siteMap = await (0,_get_site_map__WEBPACK_IMPORTED_MODULE_4__/* .getSiteMap */ .P)();
            pageId = siteMap?.canonicalPageMap[rawPageId];
            if (pageId) {
                // TODO: we're not re-using the page recordMap from siteMaps because it is
                // cached aggressively
                // recordMap = siteMap.pageMap[pageId]
                recordMap = await (0,_notion__WEBPACK_IMPORTED_MODULE_3__/* .getPage */ .f)(pageId);
                if (useUriToPageIdCache) {
                    try {
                        // update the database mapping of URI to pageId
                        await _db__WEBPACK_IMPORTED_MODULE_2__.db.set(cacheKey, pageId, cacheTTL);
                    // console.log(`redis set "${cacheKey}"`, pageId, { cacheTTL })
                    } catch (err1) {
                        // ignore redis errors
                        console.warn(`redis error set "${cacheKey}"`, err1.message);
                    }
                }
            } else {
                // note: we're purposefully not caching URI to pageId mappings for 404s
                return {
                    error: {
                        message: `Not found "${rawPageId}"`,
                        statusCode: 404
                    }
                };
            }
        }
    } else {
        pageId = _config__WEBPACK_IMPORTED_MODULE_1__/* .site.rootNotionPageId */ .lz.rootNotionPageId;
        console.log(_config__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz);
        recordMap = await (0,_notion__WEBPACK_IMPORTED_MODULE_3__/* .getPage */ .f)(pageId);
    }
    const props = {
        site: _config__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz,
        recordMap,
        pageId
    };
    return {
        ...props,
        ...await _acl__WEBPACK_IMPORTED_MODULE_5__/* .pageAcl */ .e(props)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;