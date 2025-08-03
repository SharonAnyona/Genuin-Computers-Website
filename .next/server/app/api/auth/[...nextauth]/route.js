"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fshay%2FGenuin-Computers-Website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshay%2FGenuin-Computers-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fshay%2FGenuin-Computers-Website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshay%2FGenuin-Computers-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_shay_Genuin_Computers_Website_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/shay/Genuin-Computers-Website/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_shay_Genuin_Computers_Website_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2hheSUyRkdlbnVpbi1Db21wdXRlcnMtV2Vic2l0ZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNoYXklMkZHZW51aW4tQ29tcHV0ZXJzLVdlYnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW51aW4tdGVjaG5vbG9neS8/ODEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zaGF5L0dlbnVpbi1Db21wdXRlcnMtV2Vic2l0ZS9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9zaGF5L0dlbnVpbi1Db21wdXRlcnMtV2Vic2l0ZS9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fshay%2FGenuin-Computers-Website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshay%2FGenuin-Computers-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./utils/db.ts\");\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const user = await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findFirst({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    if (user) {\n                        const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                        if (isPasswordCorrect) {\n                            return user;\n                        }\n                    }\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider == \"credentials\") {\n                return true;\n            }\n        // if (account?.provider == \"github\") {\n        //   try {\n        //     const existingUser = await prisma.user.findFirst({ where: {email: user.email!} });\n        //     if (!existingUser) {\n        //       await prisma.user.create({\n        //           data: {\n        //             id: nanoid() + \"\",\n        //             email: user.email!\n        //           },\n        //         });\n        //       return true;\n        //     }\n        //     return true;\n        //   } catch (err) {\n        //     console.log(\"Error saving user\", err);\n        //     return false;\n        //   }\n        // }\n        // if (account?.provider == \"google\") {\n        //   try {\n        //     const existingUser = await prisma.user.findFirst({where: { email: user.email! }});\n        //     if (!existingUser) {\n        //       await prisma.user.create({\n        //           data: {\n        //             id: nanoid() + \"\",\n        //             email: user.email!\n        //           },\n        //         });\n        //       return true;\n        //     }\n        //     return true;\n        //   } catch (err) {\n        //     console.log(\"Error saving user\", err);\n        //     return false;\n        //   }\n        // }\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2lDO0FBRXBDO0FBQ0U7QUFHekIsTUFBTUksY0FBbUI7SUFDOUIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZ0I7Z0JBRTlCLElBQUk7b0JBQ0YsTUFBTU0sT0FBTyxNQUFNWCxpREFBTUEsQ0FBQ1csSUFBSSxDQUFDQyxTQUFTLENBQUM7d0JBQ3ZDQyxPQUFPOzRCQUNMUCxPQUFPRCxZQUFZQyxLQUFLO3dCQUMxQjtvQkFDRjtvQkFDQSxJQUFJSyxNQUFNO3dCQUNSLE1BQU1HLG9CQUFvQixNQUFNZix1REFBYyxDQUM1Q00sWUFBWUksUUFBUSxFQUNwQkUsS0FBS0YsUUFBUTt3QkFFZixJQUFJSyxtQkFBbUI7NEJBQ3JCLE9BQU9IO3dCQUNUO29CQUNGO2dCQUNGLEVBQUUsT0FBT0ssS0FBVTtvQkFDakIsTUFBTSxJQUFJQyxNQUFNRDtnQkFDbEI7WUFDRjtRQUNGO0tBVUQ7SUFDREUsV0FBVztRQUNULE1BQU1DLFFBQU8sRUFBRVIsSUFBSSxFQUFFUyxPQUFPLEVBQXdDO1lBQ2xFLElBQUlBLFNBQVNDLFlBQVksZUFBZTtnQkFDdEMsT0FBTztZQUNUO1FBQ0EsdUNBQXVDO1FBRXZDLFVBQVU7UUFDVix5RkFBeUY7UUFDekYsMkJBQTJCO1FBRTNCLG1DQUFtQztRQUNuQyxvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDLGlDQUFpQztRQUNqQyxlQUFlO1FBQ2YsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixRQUFRO1FBQ1IsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiw2Q0FBNkM7UUFDN0Msb0JBQW9CO1FBQ3BCLE1BQU07UUFDTixJQUFJO1FBRUosdUNBQXVDO1FBRXZDLFVBQVU7UUFDVix5RkFBeUY7UUFDekYsMkJBQTJCO1FBQzNCLG1DQUFtQztRQUNuQyxvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDLGlDQUFpQztRQUNqQyxlQUFlO1FBQ2YsY0FBYztRQUVkLHFCQUFxQjtRQUNyQixRQUFRO1FBQ1IsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiw2Q0FBNkM7UUFDN0Msb0JBQW9CO1FBQ3BCLE1BQU07UUFDTixJQUFJO1FBQ047SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxVQUFVekIsZ0RBQVFBLENBQUNJLGFBQWE7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbnVpbi10ZWNobm9sb2d5Ly4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgQWNjb3VudCwgVXNlciBhcyBBdXRoVXNlciB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC91dGlscy9kYlwiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IGFueSA9IHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHM6IGFueSkge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgdXNlci5wYXNzd29yZCFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaXNQYXNzd29yZENvcnJlY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG4gICAgLy8gR2l0aHViUHJvdmlkZXIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCA/PyBcIlwiLFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUID8/IFwiXCIsXG4gICAgLy8gfSksXG4gICAgLy8gR29vZ2xlUHJvdmlkZXIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCA/PyBcIlwiLFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUID8/IFwiXCIsXG4gICAgLy8gfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmUgaWYgeW91IHdhbnQuIFlvdSBjYW4gZmluZCB0aGVtIG9uIG5leHRhdXRoIHdlYnNpdGUuXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfTogeyB1c2VyOiBBdXRoVXNlcjsgYWNjb3VudDogQWNjb3VudCB9KSB7XG4gICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT0gXCJjcmVkZW50aWFsc1wiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gaWYgKGFjY291bnQ/LnByb3ZpZGVyID09IFwiZ2l0aHViXCIpIHtcblxuICAgICAgLy8gICB0cnkge1xuICAgICAgLy8gICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7ZW1haWw6IHVzZXIuZW1haWwhfSB9KTtcbiAgICAgIC8vICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuXG4gICAgICAvLyAgICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgLy8gICAgICAgICAgIGRhdGE6IHtcbiAgICAgIC8vICAgICAgICAgICAgIGlkOiBuYW5vaWQoKSArIFwiXCIsXG4gICAgICAvLyAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCFcbiAgICAgIC8vICAgICAgICAgICB9LFxuICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgdXNlclwiLCBlcnIpO1xuICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICAvLyBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT0gXCJnb29nbGVcIikge1xuXG4gICAgICAvLyAgIHRyeSB7XG4gICAgICAvLyAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHt3aGVyZTogeyBlbWFpbDogdXNlci5lbWFpbCEgfX0pO1xuICAgICAgLy8gICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAvLyAgICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgLy8gICAgICAgICAgIGRhdGE6IHtcbiAgICAgIC8vICAgICAgICAgICAgIGlkOiBuYW5vaWQoKSArIFwiXCIsXG4gICAgICAvLyAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCFcbiAgICAgIC8vICAgICAgICAgICB9LFxuICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNhdmluZyB1c2VyXCIsIGVycik7XG4gICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwiZXJyIiwiRXJyb3IiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./utils/db.ts":
/*!*********************!*\
  !*** ./utils/db.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsd0JBQXdCO0lBQzFCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQzNCO0FBSUEsTUFBTUUsa0JBQWtCQztBQUl4QixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSUg7QUFHekMsaUVBQWVHLE1BQU1BLEVBQUM7QUFFdEIsSUFBR0MsSUFBcUMsRUFBRUgsZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VudWluLXRlY2hub2xvZ3kvLi91dGlscy9kYi50cz9jZDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiOyBcblxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KCk7XG59XG5cbnR5cGUgUHJpc21hQ2xpZW50U2luZ2xldG9uID0gUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgICBwcmlzbWE6IFByaXNtYUNsaWVudFNpbmdsZXRvbiB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKTtcblxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@opentelemetry","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fshay%2FGenuin-Computers-Website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshay%2FGenuin-Computers-Website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();