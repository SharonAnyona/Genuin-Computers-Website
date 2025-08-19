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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./utils/db.ts\");\n\n\n\n\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET || \"fallback-secret-for-development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    // Configure one or more authentication providers\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const user = await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findFirst({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    if (user) {\n                        const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                        if (isPasswordCorrect) {\n                            return {\n                                id: user.id,\n                                email: user.email,\n                                role: user.role || \"user\"\n                            };\n                        }\n                    }\n                    return null;\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                // Fetch user role from database and add to token\n                try {\n                    const dbUser = await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findFirst({\n                        where: {\n                            email: user.email\n                        }\n                    });\n                    token.role = dbUser?.role || \"user\";\n                } catch (error) {\n                    console.error(\"Error fetching user role:\", error);\n                    token.role = \"user\";\n                }\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Add role to session\n            session.user.role = token.role;\n            return session;\n        },\n        async signIn ({ user, account }) {\n            if (account?.provider == \"credentials\") {\n                return true;\n            }\n        // if (account?.provider == \"github\") {\n        //   try {\n        //     const existingUser = await prisma.user.findFirst({ where: {email: user.email!} });\n        //     if (!existingUser) {\n        //       await prisma.user.create({\n        //           data: {\n        //             id: nanoid() + \"\",\n        //             email: user.email!\n        //           },\n        //         });\n        //       return true;\n        //     }\n        //     return true;\n        //   } catch (err) {\n        //     console.log(\"Error saving user\", err);\n        //     return false;\n        //   }\n        // }\n        // if (account?.provider == \"google\") {\n        //   try {\n        //     const existingUser = await prisma.user.findFirst({where: { email: user.email! }});\n        //     if (!existingUser) {\n        //       await prisma.user.create({\n        //           data: {\n        //             id: nanoid() + \"\",\n        //             email: user.email!\n        //           },\n        //         });\n        //       return true;\n        //     }\n        //     return true;\n        //   } catch (err) {\n        //     console.log(\"Error saving user\", err);\n        //     return false;\n        //   }\n        // }\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBSWlDO0FBRXBDO0FBQ0U7QUFHekIsTUFBTUksY0FBbUI7SUFDOUJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZSxJQUFJO0lBQ3ZDQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLGlEQUFpRDtJQUNqREMsV0FBVztRQUNUViwyRUFBbUJBLENBQUM7WUFDbEJXLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQWdCO2dCQUM5QixJQUFJO29CQUNGLE1BQU1NLE9BQU8sTUFBTWpCLGlEQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxTQUFTLENBQUM7d0JBQ3ZDQyxPQUFPOzRCQUNMUCxPQUFPRCxZQUFZQyxLQUFLO3dCQUMxQjtvQkFDRjtvQkFDQSxJQUFJSyxNQUFNO3dCQUNSLE1BQU1HLG9CQUFvQixNQUFNckIsdURBQWMsQ0FDNUNZLFlBQVlJLFFBQVEsRUFDcEJFLEtBQUtGLFFBQVE7d0JBRWYsSUFBSUssbUJBQW1COzRCQUNyQixPQUFPO2dDQUNMWCxJQUFJUSxLQUFLUixFQUFFO2dDQUNYRyxPQUFPSyxLQUFLTCxLQUFLO2dDQUNqQlUsTUFBTUwsS0FBS0ssSUFBSSxJQUFJOzRCQUNyQjt3QkFDRjtvQkFDRjtvQkFDQSxPQUFPO2dCQUNULEVBQUUsT0FBT0MsS0FBVTtvQkFDakIsTUFBTSxJQUFJQyxNQUFNRDtnQkFDbEI7WUFDRjtRQUNGO0tBVUQ7SUFDREUsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVixJQUFJLEVBQWtDO1lBQ3ZELElBQUlBLE1BQU07Z0JBQ1IsaURBQWlEO2dCQUNqRCxJQUFJO29CQUNGLE1BQU1XLFNBQVMsTUFBTTVCLGlEQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxTQUFTLENBQUM7d0JBQ3pDQyxPQUFPOzRCQUFFUCxPQUFPSyxLQUFLTCxLQUFLO3dCQUFFO29CQUM5QjtvQkFDQWUsTUFBTUwsSUFBSSxHQUFHTSxRQUFRTixRQUFRO2dCQUMvQixFQUFFLE9BQU9PLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO29CQUMzQ0YsTUFBTUwsSUFBSSxHQUFHO2dCQUNmO1lBQ0Y7WUFDQSxPQUFPSztRQUNUO1FBQ0EsTUFBTXJCLFNBQVEsRUFBRUEsT0FBTyxFQUFFcUIsS0FBSyxFQUFvQztZQUNoRSxzQkFBc0I7WUFDckJyQixRQUFRVyxJQUFJLENBQVNLLElBQUksR0FBR0ssTUFBTUwsSUFBSTtZQUN2QyxPQUFPaEI7UUFDVDtRQUNBLE1BQU15QixRQUFPLEVBQUVkLElBQUksRUFBRWUsT0FBTyxFQUF3QztZQUNsRSxJQUFJQSxTQUFTQyxZQUFZLGVBQWU7Z0JBQ3RDLE9BQU87WUFDVDtRQUNBLHVDQUF1QztRQUV2QyxVQUFVO1FBQ1YseUZBQXlGO1FBQ3pGLDJCQUEyQjtRQUUzQixtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUNqQyxpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsNkNBQTZDO1FBQzdDLG9CQUFvQjtRQUNwQixNQUFNO1FBQ04sSUFBSTtRQUVKLHVDQUF1QztRQUV2QyxVQUFVO1FBQ1YseUZBQXlGO1FBQ3pGLDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUNqQyxpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLGNBQWM7UUFFZCxxQkFBcUI7UUFDckIsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsNkNBQTZDO1FBQzdDLG9CQUFvQjtRQUNwQixNQUFNO1FBQ04sSUFBSTtRQUNOO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUMsVUFBVXJDLGdEQUFRQSxDQUFDSSxhQUFhO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW51aW4tdGVjaG5vbG9neS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IEFjY291bnQsIFVzZXIgYXMgQXV0aFVzZXIsIFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBKV1QgfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL3V0aWxzL2RiXCI7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogYW55ID0ge1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCBcImZhbGxiYWNrLXNlY3JldC1mb3ItZGV2ZWxvcG1lbnRcIixcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgaWQ6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgdXNlci5wYXNzd29yZCFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaXNQYXNzd29yZENvcnJlY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUgfHwgXCJ1c2VyXCIsXG4gICAgICAgICAgICAgIH0gYXMgYW55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBHaXRodWJQcm92aWRlcih7XG4gICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lEID8/IFwiXCIsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQgPz8gXCJcIixcbiAgICAvLyB9KSxcbiAgICAvLyBHb29nbGVQcm92aWRlcih7XG4gICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lEID8/IFwiXCIsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQgPz8gXCJcIixcbiAgICAvLyB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZSBpZiB5b3Ugd2FudC4gWW91IGNhbiBmaW5kIHRoZW0gb24gbmV4dGF1dGggd2Vic2l0ZS5cbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfTogeyB0b2tlbjogSldUOyB1c2VyOiBBdXRoVXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICAvLyBGZXRjaCB1c2VyIHJvbGUgZnJvbSBkYXRhYmFzZSBhbmQgYWRkIHRvIHRva2VuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiB1c2VyLmVtYWlsISB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG9rZW4ucm9sZSA9IGRiVXNlcj8ucm9sZSB8fCBcInVzZXJcIjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciByb2xlOlwiLCBlcnJvcik7XG4gICAgICAgICAgdG9rZW4ucm9sZSA9IFwidXNlclwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfTogeyBzZXNzaW9uOiBTZXNzaW9uOyB0b2tlbjogSldUIH0pIHtcbiAgICAgIC8vIEFkZCByb2xlIHRvIHNlc3Npb25cbiAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID0gdG9rZW4ucm9sZTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCB9OiB7IHVzZXI6IEF1dGhVc2VyOyBhY2NvdW50OiBBY2NvdW50IH0pIHtcbiAgICAgIGlmIChhY2NvdW50Py5wcm92aWRlciA9PSBcImNyZWRlbnRpYWxzXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT0gXCJnaXRodWJcIikge1xuXG4gICAgICAvLyAgIHRyeSB7XG4gICAgICAvLyAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHsgd2hlcmU6IHtlbWFpbDogdXNlci5lbWFpbCF9IH0pO1xuICAgICAgLy8gICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG5cbiAgICAgIC8vICAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAvLyAgICAgICAgICAgZGF0YToge1xuICAgICAgLy8gICAgICAgICAgICAgaWQ6IG5hbm9pZCgpICsgXCJcIixcbiAgICAgIC8vICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsIVxuICAgICAgLy8gICAgICAgICAgIH0sXG4gICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNhdmluZyB1c2VyXCIsIGVycik7XG4gICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGlmIChhY2NvdW50Py5wcm92aWRlciA9PSBcImdvb2dsZVwiKSB7XG5cbiAgICAgIC8vICAgdHJ5IHtcbiAgICAgIC8vICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe3doZXJlOiB7IGVtYWlsOiB1c2VyLmVtYWlsISB9fSk7XG4gICAgICAvLyAgICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcbiAgICAgIC8vICAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAvLyAgICAgICAgICAgZGF0YToge1xuICAgICAgLy8gICAgICAgICAgICAgaWQ6IG5hbm9pZCgpICsgXCJcIixcbiAgICAgIC8vICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsIVxuICAgICAgLy8gICAgICAgICAgIH0sXG4gICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2F2aW5nIHVzZXJcIiwgZXJyKTtcbiAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwicm9sZSIsImVyciIsIkVycm9yIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJkYlVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

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