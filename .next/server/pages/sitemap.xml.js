"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 6380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getCanonicalPageId)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function getCanonicalPageId(pageId, recordMap, { uuid =true  } = {}) {
    const cleanPageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(pageId, {
        uuid: false
    });
    if (!cleanPageId) {
        return null;
    }
    const override = _config__WEBPACK_IMPORTED_MODULE_1__/* .inversePageUrlOverrides */ .JN[cleanPageId];
    if (override) {
        return override;
    } else {
        return (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getCanonicalPageId)(pageId, recordMap, {
            uuid
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4872);
/* harmony import */ var lib_get_site_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_config__WEBPACK_IMPORTED_MODULE_0__, lib_get_site_map__WEBPACK_IMPORTED_MODULE_1__]);
([lib_config__WEBPACK_IMPORTED_MODULE_0__, lib_get_site_map__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getServerSideProps = async ({ req , res  })=>{
    if (req.method !== "GET") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({
            error: "method not allowed"
        }));
        res.end();
        return {
            props: {}
        };
    }
    const siteMap = await (0,lib_get_site_map__WEBPACK_IMPORTED_MODULE_1__/* .getSiteMap */ .P)();
    // cache for up to 8 hours
    res.setHeader("Cache-Control", "public, max-age=28800, stale-while-revalidate=28800");
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(siteMap));
    res.end();
    return {
        props: {}
    };
};
const createSitemap = (siteMap)=>`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${lib_config__WEBPACK_IMPORTED_MODULE_0__/* .host */ .ho}</loc>
    </url>

    <url>
      <loc>${lib_config__WEBPACK_IMPORTED_MODULE_0__/* .host */ .ho}/</loc>
    </url>

    ${Object.keys(siteMap.canonicalPageMap).map((canonicalPagePath)=>`
          <url>
            <loc>${lib_config__WEBPACK_IMPORTED_MODULE_0__/* .host */ .ho}/${canonicalPagePath}</loc>
          </url>
        `.trim()).join("")}
  </urlset>
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>null);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = import("notion-client");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("notion-utils");;

/***/ }),

/***/ 9726:
/***/ ((module) => {

module.exports = import("p-memoize");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [872,655], () => (__webpack_exec__(3040)));
module.exports = __webpack_exports__;

})();