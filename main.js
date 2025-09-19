/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/fonts/The Last Shuriken.otf */ \"./src/assets/fonts/The Last Shuriken.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary: hsl(33, 100%, 50%);\n  --primary-hover: hsl(39, 100%, 50%);\n  --primary-active: hsl(30, 100%, 40%);\n  --white1: hsla(0, 0%, 95%, 1);\n  --white2: hsla(0, 0%, 80%, 1);\n  --dark1: hsl(40, 100%, 5%);\n  --dark1-opacity: hsla(40, 100%, 5%, 0.9);\n  --dark2: hsl(40, 100%, 15%);\n  --dark3: hsl(40, 100%, 25%);\n  --dark4: hsl(40, 100%, 35%);\n  --font: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nol,\nul {\n  list-style: none;\n  padding-inline: 0;\n}\n\n@font-face {\n  font-family: theLastShuriken;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nbody {\n  background-color: var(--dark1);\n  font-family: var(--font);\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n}\n\n#page-container {\n  min-height: 100vh;\n  max-width: auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header\"\n    \"main\"\n    \"footer\";\n  position: relative;\n}\n\n#header {\n  grid-area: header;\n  padding: 1rem 0 0.75rem;\n  color: var(--white1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--dark1-opacity);\n}\n\n#home {\n  margin-right: auto;\n  font-family: theLastShuriken;\n  border-bottom: 5px solid transparent;\n  transition: all 500ms ease;\n}\n\n#home:hover {\n  border-bottom: 5px solid var(--primary-hover);\n  border-radius: 10px;\n}\n\n#menu,\n#contact {\n  background-color: var(--dark2);\n  padding: 0.5rem 1rem;\n  border-radius: 50px;\n  color: var(--white2);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n\n#menu:hover,\n#contact:hover {\n  color: var(--white1);\n  border-color: var(--white1);\n}\n\n#menu:active,\n#contact:active {\n  color: var(--dark2);\n  background-color: var(--white2);\n}\n\n.nav-tabs {\n  flex: 1;\n  display: flex;\n  max-width: 100vw;\n}\n\n.nav-tabs-list {\n  padding: 0 1rem;\n  flex: 1;\n  min-width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.tabItem {\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n#content {\n  background-size: cover;\n  width: 1280px;\n  grid-area: main;\n  padding: 2rem 0;\n  margin: 0 auto;\n  color: var(--white1);\n  display: flex;\n  justify-content: center;\n  /* align-content: center; */\n}\n.home-container,\n.contact-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  max-width: 450px;\n}\n\n.intro,\n.contact {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  border-radius: 10px;\n  gap: 0.5rem;\n  background-color: var(--dark1-opacity);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.5);\n}\n\n/* Home */\n.intro {\n  align-items: center;\n}\n\n.heading {\n  border-bottom: 2px solid var(--primary);\n  text-align: center;\n}\n\n.description {\n  color: var(--white2);\n}\n\n.cta-button {\n  grid-area: cta;\n  padding: 1.5rem 3rem;\n  background-color: var(--primary);\n  color: var(--white1);\n  font-family: \"Arial\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 0px 10px 1px var(--primary-box);\n}\n\n.cta-button:hover {\n  background-color: var(--primary-hover);\n  transform: scale(1.05);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 0px 15px 10px var(--primary-box), 0 0px 5px 1px var(--dark4-opac);\n}\n\n.cta-button:active {\n  background-color: var(--primary-active);\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n/* Menu */\n.menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  padding: 1.5rem;\n  border-radius: 10px;\n  gap: 0.5rem;\n  background-color: var(--dark1-opacity);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.5);\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0.25rem;\n}\n\n.li{\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  position: relative;\n  box-shadow: 0 2px 0  hsla(0, 0%, 100%, 0.2);\n}\n\n.itemName{\n  cursor: pointer;\n}\n\n.itemName:hover{\n  text-decoration: underline;\n}\n\n.itemPrice{\n  position: absolute;\n  right: 0;\n}\n\n/* Contact */\n.contact-content {\n  display: inline;\n}\n\n.bold-contact {\n  font-weight: bold;\n}\n\n.table {\n  min-width: 100%;\n  border-collapse: collapse;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.5);\n}\n\n.theader {\n  background-color: var(--dark2);\n}\n\n.tdata {\n  background-color: var(--dark3);\n  text-align: center;\n}\n\n.theader,\n.tdata {\n  padding: 0.5rem;\n  border: 2px solid #3333335b;\n}\n\n/* .heading */\n.homeBackground {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  max-width: 100%;\n  min-height: 100%;\n}\n\n#footer {\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: auto;\n  background-color: var(--dark1-opacity);\n}\n\n.footerContainer {\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  max-width: 100%;\n  gap: 2rem;\n}\n\n.social-media {\n  list-style: none;\n  display: flex;\n  gap: 1.25rem;\n  align-items: center;\n  justify-self: flex-end;\n  margin-left: auto;\n}\n\n.fab {\n  font-size: 1.5rem;\n  color: var(--white2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.fab:hover {\n  color: var(--white1);\n}\n\n.credits {\n  color: var(--white2);\n  transition: all 0.2s ease;\n}\n\n.credits :hover {\n  color: var(--white1);\n}\n\n.credits a {\n  cursor: pointer;\n  color: var(--white2);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/fonts/The Last Shuriken.otf":
/*!************************************************!*\
  !*** ./src/assets/fonts/The Last Shuriken.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0f18340ce870c06b52cf.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/The_Last_Shuriken.otf?\n}");

/***/ }),

/***/ "./src/assets/images/alyona-yankovska.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/alyona-yankovska.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7cc14d4b63731809132a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/alyona-yankovska.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/kobby.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/kobby.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"cc2993e436e88b11a4bb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/kobby.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/strawberry-jalapeno-margarita.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/strawberry-jalapeno-margarita.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a66e920b06ab2620dbb9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/strawberry-jalapeno-margarita.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/home.js */ \"./src/scripts/home.js\");\n/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menu.js */ \"./src/scripts/menu.js\");\n/* harmony import */ var _scripts_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/contact.js */ \"./src/scripts/contact.js\");\n/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/header.js */ \"./src/scripts/header.js\");\n/* harmony import */ var _scripts_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/footer.js */ \"./src/scripts/footer.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\nconsole.log(\"Confirmed: Webpack is working.\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const homeBtn = document.getElementById(\"home\");\n  const menuBtn = document.getElementById(\"menu\");\n  const contactBtn = document.getElementById(\"contact\");\n\n  homeBtn.addEventListener(\"click\", () => {\n    (0,_scripts_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  menuBtn.addEventListener(\"click\", () => {\n    (0,_scripts_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  contactBtn.addEventListener(\"click\", () => {\n    (0,_scripts_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n});\n// Load by default on page Load\n(0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_scripts_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_scripts_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _assets_images_alyona_yankovska_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/alyona-yankovska.jpg */ \"./src/assets/images/alyona-yankovska.jpg\");\n\n\nfunction loadContact() {\n  const content = document.getElementById(\"content\");\n  content.textContent = \"\"; // Clear previous content\n\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Contact Us\";\n  heading.classList.add(\"heading\");\n\n  // Phone Start\n  const phone = document.createElement(\"div\");\n  const phoneSpan = document.createElement(\"span\");\n  const phoneContent = document.createElement(\"p\");\n\n  phoneSpan.textContent = \"Phone:\";\n  phoneSpan.classList.add(\"bold-contact\");\n\n  phoneContent.textContent = \" (555) 123-4567\";\n  phoneContent.classList.add(\"contact-content\");\n\n  phone.classList.add(\"phone\");\n  phone.appendChild(phoneSpan);\n  phone.appendChild(phoneContent);\n  // Phone End\n\n  // Email Start\n  const email = document.createElement(\"div\");\n  const emailSpan = document.createElement(\"span\");\n  const emailContent = document.createElement(\"p\");\n\n  emailSpan.textContent = \"Email:\";\n  emailSpan.classList.add(\"bold-contact\");\n\n  emailContent.textContent = \" hello@flavorhaven.com\";\n  emailContent.classList.add(\"contact-content\");\n\n  email.classList.add(\"email\");\n  email.appendChild(emailSpan);\n  email.appendChild(emailContent);\n  // Email Ends\n\n  const address = document.createElement(\"div\");\n  const addressSpan = document.createElement(\"span\");\n  const addressContent = document.createElement(\"p\");\n\n  addressSpan.textContent = \"Address:\";\n  addressSpan.classList.add(\"bold-contact\");\n\n  addressContent.textContent = \" 123 Culinary Lane, Foodville\";\n  addressContent.classList.add(\"contact-content\");\n\n  address.classList.add(\"address\");\n  address.appendChild(addressSpan);\n  address.appendChild(addressContent);\n  // Address Ends\n  const hoursDiv = document.createElement(\"div\");\n  hoursDiv.classList.add(\"hours\");\n  // Data: Opening hours for each day\n  const restaurantHours = {\n    Monday: \"9:00 AM - 9:00 PM\",\n    Tuesday: \"9:00 AM - 9:00 PM\",\n    Wednesday: \"9:00 AM - 9:00 PM\",\n    Thursday: \"9:00 AM - 10:00 PM\",\n    Friday: \"9:00 AM - 11:00 PM\",\n    Saturday: \"10:00 AM - 11:00 PM\",\n    Sunday: \"Closed\",\n  };\n  // Create the table\n  const table = document.createElement(\"table\");\n  table.classList.add(\"table\");\n\n  // Create header row\n  const headerRow = document.createElement(\"tr\");\n  [\"Day\", \"Opening Hours\"].forEach((text) => {\n    const th = document.createElement(\"th\");\n    th.classList.add(\"theader\");\n    th.textContent = text;\n    headerRow.appendChild(th);\n  });\n  table.appendChild(headerRow);\n\n  // Add data rows\n  Object.entries(restaurantHours).forEach(([day, hours]) => {\n    const row = document.createElement(\"tr\");\n\n    [day, hours].forEach((text) => {\n      const td = document.createElement(\"td\");\n      td.classList.add(\"tdata\");\n      td.textContent = text;\n      row.appendChild(td);\n    });\n\n    table.appendChild(row);\n  });\n\n  const bgFruit = document.createElement(\"img\");\n  bgFruit.classList.add(\"homeBackground\");\n  bgFruit.src = _assets_images_alyona_yankovska_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  bgFruit.alt = \"A Drinking Party\";\n\n  const contactWrapper = document.createElement(\"section\");\n  contactWrapper.classList.add(\"contact-wrapper\");\n\n  contact.appendChild(heading);\n  contact.appendChild(phone);\n  contact.appendChild(email);\n  contact.appendChild(address);\n  hoursDiv.appendChild(table);\n  contactWrapper.appendChild(contact);\n  contactWrapper.appendChild(hoursDiv);\n  content.appendChild(contactWrapper);\n  content.appendChild(bgFruit);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/contact.js?\n}");

/***/ }),

/***/ "./src/scripts/footer.js":
/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction loadFooter() {\n  const footer = document.querySelector(\"#footer\");\n  footer.textContent = \"\";\n\n  const footerContainer = document.createElement(\"div\");\n  footerContainer.classList.add(\"footerContainer\")\n\n  const para = document.createElement(\"p\");\n  para.classList.add(\"credits\");\n  para.textContent = \"Copyright © 2025 - Made by \";\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.setAttribute(\"href\", \"https://github.com/Jordan-AM\");\n  githubLink.textContent = \"Jordan\";\n\n  // Social media\n  const socialMedia = document.createElement(\"ul\");\n  socialMedia.classList.add(\"social-media\");\n\n  // Array of Font Awesome brand icon classes\n  const icons = [\"fab fa-instagram\", \"fab fa-facebook\", \"fab fa-twitter\", \"fab fa-linkedin\"];\n\n  // Create each <li> with an <i> icon\n  icons.forEach((iconClass) => {\n    const li = document.createElement(\"li\");\n\n    const icon = document.createElement(\"i\");\n    icon.className = iconClass;\n\n    li.appendChild(icon);\n    socialMedia.appendChild(li);\n  });\n\n  para.appendChild(githubLink);\n  footerContainer.appendChild(para);\n  footerContainer.appendChild(socialMedia);\n  footer.appendChild(footerContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/footer.js?\n}");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nfunction loadHeader() {\n  const header = document.getElementById(\"header\");\n  header.textContent = \"\";\n\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav-tabs\");\n\n  const ul = document.createElement(\"ul\");\n  ul.classList.add(\"nav-tabs-list\");\n\n  const home = document.createElement(\"li\");\n  home.setAttribute(\"id\", \"home\");\n  home.classList.add(\"tabItem\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Flavor Haven\";\n\n  const menu = document.createElement(\"li\");\n  menu.setAttribute(\"id\", \"menu\");\n  menu.classList.add(\"tabItem\");\n  menu.textContent = \"Menu\";\n\n  const contact = document.createElement(\"li\");\n  contact.setAttribute(\"id\", \"contact\");\n  contact.classList.add(\"tabItem\");\n  contact.textContent = \"Contact\";\n\n  home.appendChild(heading);\n  ul.appendChild(home);\n  ul.appendChild(menu);\n  ul.appendChild(contact);\n  nav.appendChild(ul);\n  header.appendChild(nav);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/header.js?\n}");

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_kobby_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/kobby.jpg */ \"./src/assets/images/kobby.jpg\");\n\n\nfunction loadHome() {\n  const content = document.getElementById(\"content\");\n  content.textContent = \"\"; // Clear previous content\n\n  const homeContainer = document.createElement(\"section\");\n  homeContainer.classList.add(\"home-container\");\n\n  // Home intro\n  const intro = document.createElement(\"div\");\n  intro.classList.add(\"intro\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Welcome to Flavor Haven!\";\n  heading.classList.add(\"heading\");\n\n  const description = document.createElement(\"p\");\n  description.textContent =\n    \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum esse, veniam molestiae quibusdam optio aperiam aspernatur obcaecati ut pariatur dignissimos accusamus. Esse delectus quasi architecto quos magnam sequi quae voluptate dicta assumenda minima iusto, dolorum modi, maxime voluptatibus fugiat animi aspernatur iure cum temporibus accusamus quis repellendus quod pariatur!\";\n  description.classList.add(\"description\");\n\n  const cta = document.createElement(\"button\");\n  cta.classList.add(\"cta-button\");\n  cta.textContent = \"Oder Now!\";\n\n  const bgFruit = document.createElement(\"img\");\n  bgFruit.classList.add(\"homeBackground\");\n  bgFruit.src = _assets_images_kobby_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  bgFruit.alt = \"Three Cocktails\";\n\n  intro.appendChild(heading);\n  intro.appendChild(description);\n  homeContainer.appendChild(intro);\n  homeContainer.appendChild(cta);\n  content.appendChild(bgFruit);\n  content.appendChild(homeContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/home.js?\n}");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_strawberry_jalapeno_margarita_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/strawberry-jalapeno-margarita.jpg */ \"./src/assets/images/strawberry-jalapeno-margarita.jpg\");\n\n\nfunction loadMenu() {\n  const content = document.getElementById(\"content\");\n  content.textContent = \"\"; // Clear previous content\n\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.classList.add(\"menu\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Menu\";\n  heading.classList.add(\"heading\");\n\n  const items = [\n    { name: \"Spicy Shrimp Tacos\", description: \"Served with mango salsa and lime crema.\", price: \"$5.50\"},\n    { name: \"Truffle Mushroom Risotto\", description: \"Creamy arborio rice with wild mushrooms and truffle oil.\", price: \"$6.00\" },\n    { name: \"Charcoal-Grilled Steak\", description: \"Juicy sirloin with herb butter and roasted potatoes.\", price: \"$4.00\" },\n  ];\n\n  const list = document.createElement(\"ul\");\n  list.classList.add(\"list\");\n  items.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.classList.add(\"li\");\n\n    const itemName = document.createElement(\"strong\");\n    itemName.textContent = item.name;\n    itemName.classList.add(\"itemName\");\n\n    const itemDesc = document.createElement(\"p\");\n    itemDesc.textContent = item.description;\n    itemDesc.classList.add(\"description\");\n\n    const itemPrice = document.createElement(\"span\")\n    itemPrice.textContent = item.price\n    itemPrice.classList.add(\"itemPrice\")\n\n    li.appendChild(itemName);\n    li.appendChild(itemDesc);\n    li.appendChild(itemPrice)\n    list.appendChild(li);\n  });\n\n  const bgFruit = document.createElement(\"img\");\n  bgFruit.classList.add(\"homeBackground\");\n  bgFruit.src = _assets_images_strawberry_jalapeno_margarita_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  bgFruit.alt = \"Strawberry Cocktail\";\n\n  menuDiv.appendChild(heading);\n  menuDiv.appendChild(list);\n  content.appendChild(bgFruit);\n  content.appendChild(menuDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/menu.js?\n}");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;