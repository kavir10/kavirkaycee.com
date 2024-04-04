"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SH": () => (/* binding */ defaultPageIcon),
/* harmony export */   "VO": () => (/* binding */ redisNamespace),
/* harmony export */   "Wx": () => (/* binding */ defaultPageCoverPosition),
/* harmony export */   "Xc": () => (/* binding */ redisUrl),
/* harmony export */   "YZ": () => (/* binding */ isRedisEnabled),
/* harmony export */   "nw": () => (/* binding */ domain),
/* harmony export */   "tg": () => (/* binding */ navigationLinks),
/* harmony export */   "u2": () => (/* binding */ name),
/* harmony export */   "v": () => (/* binding */ author),
/* harmony export */   "wW": () => (/* binding */ navigationStyle),
/* harmony export */   "yN": () => (/* binding */ defaultPageCover)
/* harmony export */ });
/* unused harmony exports rootNotionPageId, rootNotionSpaceId, pageUrlOverrides, pageUrlAdditions, inversePageUrlOverrides, environment, isDev, seotitle, description, language, twitter, github, youtube, linkedin, newsletter, zhihu, isPreviewImageSupportEnabled, includeNotionIdInUrls, isSearchEnabled, redisHost, redisPassword, redisUser, isServer, port, host, apiBaseUrl, api, site, fathomId, fathomConfig, posthogId, posthogConfig */
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var _get_config_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__]);
notion_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Site-wide app configuration.
 *
 * This file pulls from the root "site.config.ts" as well as environment variables
 * for optional depenencies.
 */ 

const rootNotionPageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("rootNotionPageId"), {
    uuid: false
});
if (!rootNotionPageId) {
    throw new Error('Config error invalid "rootNotionPageId"');
}
// if you want to restrict pages to a single notion workspace (optional)
const rootNotionSpaceId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("rootNotionSpaceId", null), {
    uuid: true
});
const pageUrlOverrides = cleanPageUrlMap((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("pageUrlOverrides", {}) || {}, {
    label: "pageUrlOverrides"
});
const pageUrlAdditions = cleanPageUrlMap((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("pageUrlAdditions", {}) || {}, {
    label: "pageUrlAdditions"
});
const inversePageUrlOverrides = invertPageUrlOverrides(pageUrlOverrides);
const environment = "production" || 0;
const isDev = environment === "development";
// general site config
const name = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("name");
const seotitle = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("seotitle");
const author = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("author");
const domain = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("domain");
const description = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("description", "Notion Blog");
const language = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("language", "en");
// social accounts
const twitter = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("twitter", null);
const github = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("github", null);
const youtube = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("youtube", null);
const linkedin = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("linkedin", null);
const newsletter = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("newsletter", null);
const zhihu = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("zhihu", null);
// default notion values for site-wide consistency (optional; may be overridden on a per-page basis)
const defaultPageIcon = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("defaultPageIcon", null);
const defaultPageCover = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("defaultPageCover", null);
const defaultPageCoverPosition = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("defaultPageCoverPosition", 0.5);
// Optional whether or not to enable support for LQIP preview images
const isPreviewImageSupportEnabled = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("isPreviewImageSupportEnabled", false);
// Optional whether or not to include the Notion ID in page URLs or just use slugs
const includeNotionIdInUrls = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("includeNotionIdInUrls", !!isDev);
const navigationStyle = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("navigationStyle", "default");
const navigationLinks = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("navigationLinks", null);
// Optional site search
const isSearchEnabled = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("isSearchEnabled", true);
// ----------------------------------------------------------------------------
// Optional redis instance for persisting preview images
const isRedisEnabled = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getSiteConfig */ .Z)("isRedisEnabled", false) || !!(0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("REDIS_ENABLED", null);
// (if you want to enable redis, only REDIS_HOST and REDIS_PASSWORD are required)
// we recommend that you store these in a local `.env` file
const redisHost = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("REDIS_HOST", null);
const redisPassword = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("REDIS_PASSWORD", null);
const redisUser = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("REDIS_USER", "default");
const redisUrl = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("REDIS_URL", `redis://${redisUser}:${redisPassword}@${redisHost}`);
const redisNamespace = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("REDIS_NAMESPACE", "preview-images");
// ----------------------------------------------------------------------------
const isServer = (/* unused pure expression or super */ null && ("undefined" === "undefined"));
const port = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__/* .getEnv */ .d)("PORT", "3000");
const host = isDev ? `http://localhost:${port}` : `https://${domain}`;
const apiBaseUrl = `/api`;
const api = {
    searchNotion: `${apiBaseUrl}/search-notion`,
    getSocialImage: `${apiBaseUrl}/social-image`
};
// ----------------------------------------------------------------------------
const site = {
    domain,
    name,
    seotitle,
    rootNotionPageId,
    rootNotionSpaceId,
    description
};
const fathomId = isDev ? null : process.env.NEXT_PUBLIC_FATHOM_ID;
const fathomConfig = fathomId ? {
    excludedDomains: [
        "localhost",
        "localhost:3000"
    ]
} : undefined;
const posthogId = process.env.NEXT_PUBLIC_POSTHOG_ID;
const posthogConfig = {
    api_host: "https://app.posthog.com"
};
function cleanPageUrlMap(pageUrlMap, { label  }) {
    return Object.keys(pageUrlMap).reduce((acc, uri)=>{
        const pageId = pageUrlMap[uri];
        const uuid = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(pageId, {
            uuid: false
        });
        if (!uuid) {
            throw new Error(`Invalid ${label} page id "${pageId}"`);
        }
        if (!uri) {
            throw new Error(`Missing ${label} value for page "${pageId}"`);
        }
        if (!uri.startsWith("/")) {
            throw new Error(`Invalid ${label} value for page "${pageId}": value "${uri}" should be a relative URI that starts with "/"`);
        }
        const path = uri.slice(1);
        return {
            ...acc,
            [path]: uuid
        };
    }, {});
}
function invertPageUrlOverrides(pageUrlOverrides) {
    return Object.keys(pageUrlOverrides).reduce((acc, uri)=>{
        const pageId = pageUrlOverrides[uri];
        return {
            ...acc,
            [pageId]: uri
        };
    }, {});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ getEnv),
  "Z": () => (/* binding */ getSiteConfig)
});

;// CONCATENATED MODULE: ./lib/site-config.ts
const siteConfig = (config)=>{
    return config;
};

;// CONCATENATED MODULE: ./site.config.ts

/* harmony default export */ const site_config = (siteConfig({
    // the site's root Notion page (required)
    rootNotionPageId: "02d7e8dabdc048f682724fba25bfc2c7",
    // if you want to restrict pages to a single notion workspace (optional)
    // (this should be a Notion ID; see the docs for how to extract this)
    rootNotionSpaceId: null,
    // basic site info (required)
    name: "Kavir Kaycee",
    domain: "x",
    author: "Kavir Kaycee",
    seotitle: "Kavir Kaycee | Product Management",
    // open graph metadata (optional)
    description: "Hi! I am Kavir, a Product Manager, Builder, Startup Advisor, and Writer. This is my small corner of the internet.",
    // social usernames (optional)
    twitter: "kavkaycee",
    linkedin: "kavirkaycee",
    newsletter: "https://thediscourse.co",
    // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
    // default notion icon and cover images for site-wide consistency (optional)
    // page-specific values will override these site-wide defaults
    defaultPageIcon: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fcb5cda98-0a30-431a-bc0a-006e5d8770c3%2F0031064a-5312-41cf-bef6-551f9de3ff92%2FKavir_circle_notion_dp_profile.webp?table=block&id=02d7e8da-bdc0-48f6-8272-4fba25bfc2c7&spaceId=cb5cda98-0a30-431a-bc0a-006e5d8770c3&width=250&userId=74bd6286-8f72-4167-b6c4-af3c877a1fba&cache=v2",
    defaultPageCover: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faea24c45-d89d-44bc-9b0a-7f7864fcd23e%2FCoverV1.1.png?table=block&id=0972cf4b-f5f4-4698-aa72-78b8773a4fbd&cache=v2",
    defaultPageCoverPosition: 0.5,
    // whether or not to enable support for LQIP preview images (optional)
    isPreviewImageSupportEnabled: true,
    // whether or not redis is enabled for caching generated preview images (optional)
    // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
    // environment variables. see the readme for more info
    isRedisEnabled: false,
    // map of notion page IDs to URL paths (optional)
    // any pages defined here will override their default URL paths
    // example:
    //
    // pageUrlOverrides: {
    //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
    // }
    pageUrlOverrides: null,
    // whether to use the default notion navigation style or a custom one with links to
    // important pages
    navigationStyle: "custom",
    navigationLinks: [
        {
            title: "Posts",
            pageId: "9cecccc56cca48839ceff3dc442e65f2"
        },
        {
            title: "GPTs",
            pageId: "b890bb9f0f0b42e4ba2bcc927d91f26d"
        }
    ]
}));

;// CONCATENATED MODULE: ./lib/get-config-value.ts

if (!site_config) {
    throw new Error(`Config error: invalid site.config.ts`);
}
// allow environment variables to override site.config.ts
let siteConfigOverrides;
try {
    if (process.env.NEXT_PUBLIC_SITE_CONFIG) {
        siteConfigOverrides = JSON.parse(process.env.NEXT_PUBLIC_SITE_CONFIG);
    }
} catch (err) {
    console.error('Invalid config "NEXT_PUBLIC_SITE_CONFIG" failed to parse');
    throw err;
}
const get_config_value_siteConfig = {
    ...site_config,
    ...siteConfigOverrides
};
function getSiteConfig(key, defaultValue) {
    const value = get_config_value_siteConfig[key];
    if (value !== undefined) {
        return value;
    }
    if (defaultValue !== undefined) {
        return defaultValue;
    }
    throw new Error(`Config error: missing required site config value "${key}"`);
}
function getEnv(key, defaultValue, env = process.env) {
    const value = env[key];
    if (value !== undefined) {
        return value;
    }
    if (defaultValue !== undefined) {
        return defaultValue;
    }
    throw new Error(`Config error: missing required env variable "${key}"`);
}


/***/ }),

/***/ 4155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ mapImageUrl)
/* harmony export */ });
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(885);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_notion_x__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__]);
([react_notion_x__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const mapImageUrl = (url, block)=>{
    if (url === _config__WEBPACK_IMPORTED_MODULE_1__/* .defaultPageCover */ .yN || url === _config__WEBPACK_IMPORTED_MODULE_1__/* .defaultPageIcon */ .SH) {
        return url;
    }
    return (0,react_notion_x__WEBPACK_IMPORTED_MODULE_0__.defaultMapImageUrl)(url, block);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ notion)
/* harmony export */ });
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_0__]);
notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const notion = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI({
    apiBaseUrl: process.env.NOTION_API_BASE_URL
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;