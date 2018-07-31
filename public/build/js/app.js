/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/components/CreateAccount.vue":
/*!************************************************!*\
  !*** ./assets/js/components/CreateAccount.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_CreateAccount_vue__ = __webpack_require__(/*! !babel-loader?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./CreateAccount.vue */ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/CreateAccount.vue");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c1c7d13_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateAccount_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7c1c7d13","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./CreateAccount.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7c1c7d13\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/CreateAccount.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader?sourceMap!css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-7c1c7d13","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./CreateAccount.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7c1c7d13\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/CreateAccount.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c1c7d13"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_CreateAccount_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c1c7d13_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateAccount_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c1c7d13_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateAccount_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\js\\components\\CreateAccount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c1c7d13", Component.options)
  } else {
    hotAPI.reload("data-v-7c1c7d13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),

/***/ "./assets/js/components/Footervue.vue":
/*!********************************************!*\
  !*** ./assets/js/components/Footervue.vue ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Footervue_vue__ = __webpack_require__(/*! !babel-loader?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Footervue.vue */ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Footervue.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c0fb18d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footervue_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-5c0fb18d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Footervue.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5c0fb18d\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Footervue.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Footervue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c0fb18d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footervue_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c0fb18d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footervue_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\js\\components\\Footervue.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c0fb18d", Component.options)
  } else {
    hotAPI.reload("data-v-5c0fb18d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./assets/js/components/Home.vue":
/*!***************************************!*\
  !*** ./assets/js/components/Home.vue ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(/*! !babel-loader?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Home.vue */ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Home.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ef7334d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1ef7334d","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Home.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ef7334d\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Home.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader?sourceMap!css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-1ef7334d","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Home.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1ef7334d\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/Home.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ef7334d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ef7334d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ef7334d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\js\\components\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ef7334d", Component.options)
  } else {
    hotAPI.reload("data-v-1ef7334d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./assets/js/components/Navbar.vue":
/*!*****************************************!*\
  !*** ./assets/js/components/Navbar.vue ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(/*! !babel-loader?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Navbar.vue */ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Navbar.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad8dc7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-3ad8dc7e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Navbar.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ad8dc7e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Navbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader?sourceMap!css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-3ad8dc7e","scoped":true,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Navbar.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3ad8dc7e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/Navbar.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ad8dc7e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_1_uglify_true_useBuiltIns_true_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad8dc7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad8dc7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\js\\components\\Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ad8dc7e", Component.options)
  } else {
    hotAPI.reload("data-v-3ad8dc7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar__ = __webpack_require__(/*! ./components/Navbar */ "./assets/js/components/Navbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(/*! ./components/Home */ "./assets/js/components/Home.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footervue__ = __webpack_require__(/*! ./components/Footervue */ "./assets/js/components/Footervue.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CreateAccount__ = __webpack_require__(/*! ./components/CreateAccount */ "./assets/js/components/CreateAccount.vue");









var home = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({

  el: "#app",
  components: { Home: __WEBPACK_IMPORTED_MODULE_2__components_Home__["default"] }
});

var header = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#header',
  components: { Navbar: __WEBPACK_IMPORTED_MODULE_1__components_Navbar__["a" /* default */] }
});

var footervue = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: "#footertest",
  components: { Footervue: __WEBPACK_IMPORTED_MODULE_3__components_Footervue__["a" /* default */] }
});

// var appCreateAccount = new Vue({
//   el: "#app-createAccount",
//   components: {appCreateAccount}
// });

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/CreateAccount.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/CreateAccount.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Account"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Footervue.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Footervue.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "footervue"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Home.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Home.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  data: function data() {
    return {
      name: "Jean-Marie Le pen"
    };
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":\"> 1%\",\"uglify\":true},\"useBuiltIns\":true}]],\"plugins\":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Navbar.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"cacheDirectory":true,"presets":[["env",{"modules":false,"targets":{"browsers":"> 1%","uglify":true},"useBuiltIns":true}]],"plugins":[]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/js/components/Navbar.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "navbar"
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1ef7334d\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/Home.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader?sourceMap!./node_modules/css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-1ef7334d","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/Home.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3ad8dc7e\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/Navbar.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader?sourceMap!./node_modules/css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-3ad8dc7e","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/Navbar.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7c1c7d13\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/CreateAccount.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader?sourceMap!./node_modules/css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-7c1c7d13","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/js/components/CreateAccount.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ef7334d\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Home.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1ef7334d","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Home.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "jumbotron text-center" }, [
    _c("h1", { staticClass: "display-4" }, [_vm._v("Home Page")]),
    _vm._v(" "),
    _c("p", [_vm._v(_vm._s(_vm.name))]),
    _vm._v(" "),
    _c("hr", { staticClass: "my-4" }),
    _vm._v(" "),
    _c("p", [_vm._v("Incroyable du cul !")]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "lead" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-outline-danger btn-lg",
          attrs: { href: "#", role: "button" }
        },
        [_vm._v("Nom d'un fion")]
      )
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ef7334d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ad8dc7e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Navbar.vue":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3ad8dc7e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Navbar.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "navbar navbar-dark bg-dark justify-content-center" },
      [
        _c("ul", { staticClass: "nav" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
              _vm._v("Home")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
              _vm._v("Ranking")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
              _vm._v("Index")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
              _vm._v("Login")
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ad8dc7e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5c0fb18d\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Footervue.vue":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5c0fb18d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/Footervue.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "footer fixed-bottom bg-primary",
        staticStyle: { height: "50px" }
      },
      [_c("p", [_vm._v("Un site fait avec amour !")])]
    )
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c0fb18d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7c1c7d13\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/CreateAccount.vue":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c1c7d13","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/js/components/CreateAccount.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", { staticClass: "display-4" }, [_vm._v("Création de compte")])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c1c7d13", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGJiM2I0ZTE1ODc0YmE2NDUzMjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3JlYXRlQWNjb3VudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9vdGVydnVlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9DcmVhdGVBY2NvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9vdGVydnVlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/ZmYxOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIudnVlPzE1ZmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3JlYXRlQWNjb3VudC52dWU/YzNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlPzYyZGYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2YmFyLnZ1ZT9lZmRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Zvb3RlcnZ1ZS52dWU/YTdkMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DcmVhdGVBY2NvdW50LnZ1ZT9kYzk5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUuZXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiaG9tZSIsImVsIiwiY29tcG9uZW50cyIsIkhvbWUiLCJoZWFkZXIiLCJOYXZiYXIiLCJmb290ZXJ2dWUiLCJGb290ZXJ2dWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLCs1QkFBdVc7QUFDdlc7QUFDQTtBQUMyTDtBQUNhO0FBQ3hNO0FBQ3NQO0FBQ3RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFDQTtBQUMyTDtBQUNhO0FBQ3hNO0FBQ3VQO0FBQ3ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDY0QkFBdVc7QUFDdlc7QUFDQTtBQUMyTDtBQUNhO0FBQ3hNO0FBQ3NQO0FBQ3RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsaTVCQUF1VztBQUN2VztBQUNBO0FBQzJMO0FBQ2E7QUFDeE07QUFDc1A7QUFDdFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsT0FBTyxJQUFJLG9EQUFKLENBQVE7O0FBRWpCQyxNQUFJLE1BRmE7QUFHakJDLGNBQVksRUFBQ0MsTUFBQSx5REFBRDtBQUhLLENBQVIsQ0FBWDs7QUFNQSxJQUFJQyxTQUFTLElBQUksb0RBQUosQ0FBUTtBQUNuQkgsTUFBSSxTQURlO0FBRW5CQyxjQUFZLEVBQUNHLFFBQUEsbUVBQUQ7QUFGTyxDQUFSLENBQWI7O0FBS0EsSUFBSUMsWUFBWSxJQUFJLG9EQUFKLENBQVE7QUFDdEJMLE1BQUksYUFEa0I7QUFFdEJDLGNBQVksRUFBQ0ssV0FBQSxzRUFBRDtBQUZVLENBQVIsQ0FBaEI7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQURBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQURBLEc7Ozs7Ozs7Ozs7OztBQ1pBLHlDOzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUNBQXVDO0FBQzNELGNBQWMsMkJBQTJCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxtREFBbUQ7QUFDeEg7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtRUFBbUU7QUFDMUU7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDLG9CQUFvQiwwQkFBMEI7QUFDOUMscUJBQXFCLGtDQUFrQyxZQUFZLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLHFCQUFxQixrQ0FBa0MsWUFBWSxFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QyxxQkFBcUIsa0NBQWtDLFlBQVksRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUMscUJBQXFCLGtDQUFrQyxZQUFZLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUjtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsbURBQW1EO0FBQ3hIO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxtREFBbUQ7QUFDeEg7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxtREFBbUQ7QUFDeEg7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQsc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQ0FBaUMsRUFBRTtBQUNyRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjOztBQUUzQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVDQUF1Qyx3QkFBd0IsRUFBRTtBQUNqRSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0Esd0NBQXdDLEVBQUU7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsU0FBUyxxQkFBcUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVCQUF1QjtBQUN6RCxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixXQUFXO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQixFQUFFOztBQUVwRDtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QyxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCO0FBQ3pCO0FBQ0Esc0JBQXNCLGlDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsZUFBZTtBQUMzRCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQXVDOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxxQ0FBcUMsZ0VBQWdFO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0QkFBNEIsK0JBQStCO0FBQzNELDRCQUE0QiwrQkFBK0I7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1RkFBdUY7QUFDNUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsK0JBQStCO0FBQy9GLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9CQUFvQixvQkFBb0I7QUFDeEMsc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekI7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQTZDO0FBQzlFO0FBQ0E7QUFDQSw2Q0FBNkMsNENBQTRDOztBQUV6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywyQkFBMkIsRUFBRTtBQUN2RSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsNEJBQTRCLEVBQUU7QUFDeEUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLHNCQUFzQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsNEJBQTRCLDRCQUE0QjtBQUN4RCw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FLGlCQUFpQix3QkFBd0IsT0FBTyx1QkFBdUI7QUFDdkU7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtEQUFrRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0RBQWtEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLG1DQUFtQyxnRUFBZ0U7QUFDbkc7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUIsT0FBTyxnQ0FBZ0M7QUFDL0Usd0RBQXdELG9CQUFvQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQWdFO0FBQzNGLE9BQU87QUFDUCxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELG9CQUFvQjtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGdDQUFnQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RTtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQsS0FBSztBQUNMLHdDQUF3QyxrQkFBa0I7QUFDMUQsS0FBSztBQUNMLHdDQUF3QywwQkFBMEI7QUFDbEUsS0FBSztBQUNMLHdDQUF3QyxpQkFBaUI7QUFDekQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlLEVBQUUsdUJBQXVCLFVBQVUsRUFBRTtBQUNwRjtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCw2RUFBNkU7QUFDN0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxHQUFHO0FBQ0gseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG1CQUFtQjtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRiw0QkFBNEI7QUFDNUI7QUFDQSwyQkFBMkI7QUFDM0Isd0JBQXdCLGlFQUFpRTtBQUN6RixZQUFZLDBGQUEwRjtBQUN0RyxNQUFNLEtBQUssMENBQTBDO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRCxzQkFBc0IsK0NBQStDO0FBQ3JFLGlEQUFpRDs7QUFFakQ7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQXNEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2Q0FBNkMsRUFBRTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNEJBQTRCLEVBQUU7QUFDM0UsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0JBQStCLEVBQUU7QUFDOUUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhOztBQUUzRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMscUNBQXFDOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdUNBQXVDLEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDJDQUEyQyxFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyw4QkFBOEIsRUFBRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyx1Q0FBdUMsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEUsMEJBQTBCLEVBQUU7QUFDdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBLGdFQUFnRSxzQkFBc0IsRUFBRTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHlCQUF5QixFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLHNCQUFzQixFQUFFLGNBQWMsRUFBRTtBQUN4QywrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsT0FBTztBQUNQLFNBQVM7QUFDVCxRQUFRO0FBQ1IsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBLHVDQUF1QztBQUN2QywwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQSxxREFBcUQsMkRBQTJEOztBQUVoSDtBQUNBO0FBQ0EsNkNBQTZDLDJCQUEyQixFQUFFO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDLDZCQUE2QixnQkFBZ0I7QUFDN0MsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixtRUFBbUU7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkMsc0JBQXNCLGFBQWE7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCO0FBQ3ZDO0FBQ0EsdURBQXVELDZEQUE2RDtBQUNwSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxvQkFBb0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFdBQVc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsV0FBVztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJDQUEyQyxHQUFHOztBQUVuRjtBQUNBLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBLG1EQUFtRCxrQ0FBa0MsRUFBRTtBQUN2Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0JBQXdCO0FBQ3RELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0NBQWdDLEVBQUU7QUFDOUUseUNBQXlDLDBDQUEwQyxFQUFFO0FBQ3JGO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSw4RkFBOEY7QUFDOUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaURBQWlEO0FBQ3ZGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsdUNBQXVDLCtCQUErQjtBQUN0RTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsdUNBQXVDO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0JBQW9COztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2R0FBNkc7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnU0FBZ1M7QUFDL1M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0IsaUNBQWlDLDRFQUE0RSxxQkFBcUIsYUFBYSxHQUFHLEVBQUUsa0JBQWtCO0FBQ3JOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsWUFBWSw4QkFBOEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQixFQUFFO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELG9DQUFvQyxFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGdDQUFnQyxFQUFFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0NBQWdDLCtDQUErQyxFQUFFLGlCQUFpQjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLEdBQUc7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUIsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxxQkFBcUIsRUFBRTtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3c1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL21haW4uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGJiM2I0ZTE1ODc0YmE2NDUzMjMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlcj9zb3VyY2VNYXAhY3NzLWxvYWRlcj97XFxcIm1pbmltaXplXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjowfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzFjN2QxM1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NyZWF0ZUFjY291bnQudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCI+IDElXFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwidXNlQnVpbHRJbnNcXFwiOnRydWV9XV0sXFxcInBsdWdpbnNcXFwiOltdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NyZWF0ZUFjY291bnQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpcXFwiPiAxJVxcXCIsXFxcInVnbGlmeVxcXCI6dHJ1ZX0sXFxcInVzZUJ1aWx0SW5zXFxcIjp0cnVlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DcmVhdGVBY2NvdW50LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YzFjN2QxM1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NyZWF0ZUFjY291bnQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTdjMWM3ZDEzXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQ3JlYXRlQWNjb3VudC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2MxYzdkMTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YzFjN2QxM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NyZWF0ZUFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NyZWF0ZUFjY291bnQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCI+IDElXFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwidXNlQnVpbHRJbnNcXFwiOnRydWV9XV0sXFxcInBsdWdpbnNcXFwiOltdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Zvb3RlcnZ1ZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCI+IDElXFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwidXNlQnVpbHRJbnNcXFwiOnRydWV9XV0sXFxcInBsdWdpbnNcXFwiOltdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Zvb3RlcnZ1ZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWMwZmIxOGRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRm9vdGVydnVlLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRm9vdGVydnVlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YzBmYjE4ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjMGZiMThkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9vdGVydnVlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb290ZXJ2dWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyP3NvdXJjZU1hcCFjc3MtbG9hZGVyP3tcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImltcG9ydExvYWRlcnNcXFwiOjB9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZjczMzRkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSG9tZS52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6XFxcIj4gMSVcXFwiLFxcXCJ1Z2xpZnlcXFwiOnRydWV9LFxcXCJ1c2VCdWlsdEluc1xcXCI6dHJ1ZX1dXSxcXFwicGx1Z2luc1xcXCI6W119IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSG9tZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCI+IDElXFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwidXNlQnVpbHRJbnNcXFwiOnRydWV9XV0sXFxcInBsdWdpbnNcXFwiOltdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0hvbWUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZjczMzRkXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSG9tZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMWVmNzMzNGRcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxIb21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZWY3MzM0ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFlZjczMzRkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXI/c291cmNlTWFwIWNzcy1sb2FkZXI/e1xcXCJtaW5pbWl6ZVxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MH0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2FkOGRjN2VcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9OYXZiYXIudnVlXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCI+IDElXFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwidXNlQnVpbHRJbnNcXFwiOnRydWV9XV0sXFxcInBsdWdpbnNcXFwiOltdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL05hdmJhci52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCI+IDElXFxcIixcXFwidWdsaWZ5XFxcIjp0cnVlfSxcXFwidXNlQnVpbHRJbnNcXFwiOnRydWV9XV0sXFxcInBsdWdpbnNcXFwiOltdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL05hdmJhci52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2FkOGRjN2VcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9OYXZiYXIudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTNhZDhkYzdlXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcTmF2YmFyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYWQ4ZGM3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNhZDhkYzdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBGb290ZXJ2dWUgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3RlcnZ1ZSc7XHJcbmltcG9ydCBDcmVhdGVBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9DcmVhdGVBY2NvdW50JztcclxuXHJcbnZhciBob21lID0gbmV3IFZ1ZSh7XHJcbiAgXHJcbiAgZWw6IFwiI2FwcFwiLFxyXG4gIGNvbXBvbmVudHM6IHtIb21lfVxyXG59KTtcclxuXHJcbmxldCBoZWFkZXIgPSBuZXcgVnVlKHtcclxuICBlbDogJyNoZWFkZXInLFxyXG4gIGNvbXBvbmVudHM6IHtOYXZiYXJ9XHJcbn0pO1xyXG5cclxubGV0IGZvb3RlcnZ1ZSA9IG5ldyBWdWUoe1xyXG4gIGVsOiBcIiNmb290ZXJ0ZXN0XCIsXHJcbiAgY29tcG9uZW50czoge0Zvb3RlcnZ1ZX1cclxufSk7XHJcblxyXG4vLyB2YXIgYXBwQ3JlYXRlQWNjb3VudCA9IG5ldyBWdWUoe1xyXG4vLyAgIGVsOiBcIiNhcHAtY3JlYXRlQWNjb3VudFwiLFxyXG4vLyAgIGNvbXBvbmVudHM6IHthcHBDcmVhdGVBY2NvdW50fVxyXG4vLyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbWFpbi5qcyIsIjx0ZW1wbGF0ZT5cclxuXHJcbiAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTRcIj5DcsOpYXRpb24gZGUgY29tcHRlPC9oMT4gXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiQWNjb3VudFwiXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFzc2V0cy9qcy9jb21wb25lbnRzL0NyZWF0ZUFjY291bnQudnVlIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmb290ZXIgZml4ZWQtYm90dG9tIGJnLXByaW1hcnlcIiBzdHlsZT1cImhlaWdodDogNTBweFwiPlxyXG4gICAgPHA+VW4gc2l0ZSBmYWl0IGF2ZWMgYW1vdXIgITwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImZvb3RlcnZ1ZVwiXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhc3NldHMvanMvY29tcG9uZW50cy9Gb290ZXJ2dWUudnVlIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcIj5cclxuICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNFwiPkhvbWUgUGFnZTwvaDE+XHJcbiAgICA8cD57eyBuYW1lIH19PC9wPlxyXG4gICAgPGhyIGNsYXNzPVwibXktNFwiPlxyXG4gICAgPHA+SW5jcm95YWJsZSBkdSBjdWwgITwvcD5cclxuICAgIDxwIGNsYXNzPVwibGVhZFwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tbGdcIiByb2xlPVwiYnV0dG9uXCI+Tm9tIGQndW4gZmlvbjwvYT5cclxuICAgIDwvcD5cclxuICA8L2Rpdj4gXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBcIkplYW4tTWFyaWUgTGUgcGVuXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlIiwiPHRlbXBsYXRlPlxyXG48bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmsganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gIDx1bCBjbGFzcz1cIm5hdlwiPlxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2LWxpbmtcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXYtbGlua1wiPlJhbmtpbmc8L2E+PC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdi1saW5rXCI+SW5kZXg8L2E+PC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdi1saW5rXCI+TG9naW48L2E+PC9saT5cclxuICA8L3VsPlxyXG48L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIm5hdmJhclwiXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFzc2V0cy9qcy9jb21wb25lbnRzL05hdmJhci52dWUiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOnRydWUsXCJpbXBvcnRMb2FkZXJzXCI6MH0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wib3B0aW9uc0lkXCI6XCIwXCIsXCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZWY3MzM0ZFwiLFwic2NvcGVkXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJtaW5pbWl6ZVwiOmZhbHNlLFwic291cmNlTWFwXCI6dHJ1ZSxcImltcG9ydExvYWRlcnNcIjowfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJvcHRpb25zSWRcIjpcIjBcIixcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlZjczMzRkXCIsXCJzY29wZWRcIjp0cnVlLFwic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlLFwic291cmNlTWFwXCI6dHJ1ZSxcImltcG9ydExvYWRlcnNcIjowfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJvcHRpb25zSWRcIjpcIjBcIixcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNhZDhkYzdlXCIsXCJzY29wZWRcIjp0cnVlLFwic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOnRydWUsXCJpbXBvcnRMb2FkZXJzXCI6MH0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1wib3B0aW9uc0lkXCI6XCIwXCIsXCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zYWQ4ZGM3ZVwiLFwic2NvcGVkXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZiYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlLFwic291cmNlTWFwXCI6dHJ1ZSxcImltcG9ydExvYWRlcnNcIjowfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJvcHRpb25zSWRcIjpcIjBcIixcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdjMWM3ZDEzXCIsXCJzY29wZWRcIjp0cnVlLFwic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NyZWF0ZUFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjp0cnVlLFwiaW1wb3J0TG9hZGVyc1wiOjB9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcIm9wdGlvbnNJZFwiOlwiMFwiLFwidnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2MxYzdkMTNcIixcInNjb3BlZFwiOnRydWUsXCJzb3VyY2VNYXBcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3JlYXRlQWNjb3VudC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xyXG5cclxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXHJcbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXHJcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcclxuICBzY3JpcHRFeHBvcnRzLFxyXG4gIHJlbmRlcixcclxuICBzdGF0aWNSZW5kZXJGbnMsXHJcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxyXG4gIGluamVjdFN0eWxlcyxcclxuICBzY29wZUlkLFxyXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXHJcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cclxuKSB7XHJcbiAgc2NyaXB0RXhwb3J0cyA9IHNjcmlwdEV4cG9ydHMgfHwge31cclxuXHJcbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxyXG4gIHZhciB0eXBlID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMuZGVmYXVsdFxyXG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cy5kZWZhdWx0XHJcbiAgfVxyXG5cclxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXHJcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcclxuICAgIDogc2NyaXB0RXhwb3J0c1xyXG5cclxuICAvLyByZW5kZXIgZnVuY3Rpb25zXHJcbiAgaWYgKHJlbmRlcikge1xyXG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXHJcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcclxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XHJcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXHJcbiAgfVxyXG5cclxuICAvLyBzY29wZWRJZFxyXG4gIGlmIChzY29wZUlkKSB7XHJcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxyXG4gIH1cclxuXHJcbiAgdmFyIGhvb2tcclxuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcclxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXHJcbiAgICAgIGNvbnRleHQgPVxyXG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcclxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcclxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXHJcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxyXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cclxuICAgICAgfVxyXG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xyXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XHJcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcclxuICAgICAgfVxyXG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcclxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcclxuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcclxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXHJcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcclxuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xyXG4gICAgaG9vayA9IHNoYWRvd01vZGVcclxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxyXG4gICAgICA6IGluamVjdFN0eWxlc1xyXG4gIH1cclxuXHJcbiAgaWYgKGhvb2spIHtcclxuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcclxuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcclxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXHJcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXHJcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXHJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXHJcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXHJcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcclxuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcclxuICAgICAgICA6IFtob29rXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXHJcbiAgICBvcHRpb25zOiBvcHRpb25zXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImp1bWJvdHJvbiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS00XCIgfSwgW192bS5fdihcIkhvbWUgUGFnZVwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW192bS5fdihcIkluY3JveWFibGUgZHUgY3VsICFcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLWxnXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIsIHJvbGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiTm9tIGQndW4gZmlvblwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWVmNzMzNGRcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWVmNzMzNGRcIixcImhhc1Njb3BlZFwiOnRydWUsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWVmNzMzNGRcIixcImhhc1Njb3BlZFwiOnRydWUsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJuYXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmsganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkhvbWVcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUmFua2luZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJJbmRleFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJMb2dpblwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNhZDhkYzdlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNhZDhkYzdlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtM2FkOGRjN2VcIixcImhhc1Njb3BlZFwiOnRydWUsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb290ZXIgZml4ZWQtYm90dG9tIGJnLXByaW1hcnlcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjUwcHhcIiB9XG4gICAgICB9LFxuICAgICAgW19jKFwicFwiLCBbX3ZtLl92KFwiVW4gc2l0ZSBmYWl0IGF2ZWMgYW1vdXIgIVwiKV0pXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVjMGZiMThkXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVjMGZiMThkXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcIm9wdGlvbnNJZFwiOlwiMFwiLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb290ZXJ2dWUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTVjMGZiMThkXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcIm9wdGlvbnNJZFwiOlwiMFwiLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb290ZXJ2dWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktNFwiIH0sIFtfdm0uX3YoXCJDcsOpYXRpb24gZGUgY29tcHRlXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdjMWM3ZDEzXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdjMWM3ZDEzXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NyZWF0ZUFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTdjMWM3ZDEzXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NyZWF0ZUFjY291bnQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxyXG4gKiBWdWUuanMgdjIuNS4xNlxyXG4gKiAoYykgMjAxNC0yMDE4IEV2YW4gWW91XHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcbi8qICAqL1xyXG5cclxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XHJcblxyXG4vLyB0aGVzZSBoZWxwZXJzIHByb2R1Y2VzIGJldHRlciB2bSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXHJcbi8vIGV4cGxpY2l0bmVzcyBhbmQgZnVuY3Rpb24gaW5saW5pbmdcclxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xyXG4gIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZiAodikge1xyXG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcclxuICByZXR1cm4gdiA9PT0gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XHJcbiAgcmV0dXJuIHYgPT09IGZhbHNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmVcclxuICovXHJcbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XHJcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XHJcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcgfHxcclxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXHJcbiAgKVxyXG59XHJcblxyXG4vKipcclxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXHJcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcclxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xyXG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUgZS5nLiBbb2JqZWN0IE9iamVjdF1cclxuICovXHJcbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xyXG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXHJcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcclxuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcclxuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB2YWwgaXMgYSB2YWxpZCBhcnJheSBpbmRleC5cclxuICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcclxuICB2YXIgbiA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbCkpO1xyXG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcclxuICByZXR1cm4gdmFsID09IG51bGxcclxuICAgID8gJydcclxuICAgIDogdHlwZW9mIHZhbCA9PT0gJ29iamVjdCdcclxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXHJcbiAgICAgIDogU3RyaW5nKHZhbClcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXHJcbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xyXG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xyXG4gIHJldHVybiBpc05hTihuKSA/IHZhbCA6IG5cclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxyXG4gKiBpcyBpbiB0aGF0IG1hcC5cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VNYXAgKFxyXG4gIHN0cixcclxuICBleHBlY3RzTG93ZXJDYXNlXHJcbikge1xyXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxyXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XHJcbiAgICA6IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cclxuICovXHJcbnZhciBpc0J1aWx0SW5UYWcgPSBtYWtlTWFwKCdzbG90LGNvbXBvbmVudCcsIHRydWUpO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxyXG4gKi9cclxudmFyIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUgPSBtYWtlTWFwKCdrZXkscmVmLHNsb3Qsc2xvdC1zY29wZSxpcycpO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XHJcbiAgaWYgKGFyci5sZW5ndGgpIHtcclxuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXHJcbiAqL1xyXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG5mdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XHJcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XHJcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICByZXR1cm4gKGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcclxuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xyXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXHJcbiAqL1xyXG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcclxudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcclxufSk7XHJcblxyXG4vKipcclxuICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cclxuICovXHJcbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcclxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXHJcbiAqL1xyXG52YXIgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xyXG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBiaW5kIHBvbHlmaWxsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3Qgc3VwcG9ydCBpdC4uLiBlLmcuXHJcbiAqIFBoYW50b21KUyAxLnguIFRlY2huaWNhbGx5IHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlIHNpbmNlIG5hdGl2ZSBiaW5kIGlzXHJcbiAqIG5vdyBtb3JlIHBlcmZvcm1hbnQgaW4gbW9zdCBicm93c2VycywgYnV0IHJlbW92aW5nIGl0IHdvdWxkIGJlIGJyZWFraW5nIGZvclxyXG4gKiBjb2RlIHRoYXQgd2FzIGFibGUgdG8gcnVuIGluIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvclxyXG4gKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cclxuICovXHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcclxuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XHJcbiAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICByZXR1cm4gbFxyXG4gICAgICA/IGwgPiAxXHJcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcclxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxyXG4gICAgICA6IGZuLmNhbGwoY3R4KVxyXG4gIH1cclxuXHJcbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xyXG4gIHJldHVybiBib3VuZEZuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdGl2ZUJpbmQgKGZuLCBjdHgpIHtcclxuICByZXR1cm4gZm4uYmluZChjdHgpXHJcbn1cclxuXHJcbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcclxuICA/IG5hdGl2ZUJpbmRcclxuICA6IHBvbHlmaWxsQmluZDtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XHJcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xyXG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcclxuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xyXG4gIHdoaWxlIChpLS0pIHtcclxuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcclxuICB9XHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG4vKipcclxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gZXh0ZW5kICh0bywgX2Zyb20pIHtcclxuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcclxuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gdG9cclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XHJcbiAgdmFyIHJlcyA9IHt9O1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYXJyW2ldKSB7XHJcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuLyoqXHJcbiAqIFBlcmZvcm0gbm8gb3BlcmF0aW9uLlxyXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcclxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pXHJcbiAqL1xyXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXHJcbiAqL1xyXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHNhbWUgdmFsdWVcclxuICovXHJcbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgc3RhdGljIGtleXMgc3RyaW5nIGZyb20gY29tcGlsZXIgbW9kdWxlcy5cclxuICovXHJcbmZ1bmN0aW9uIGdlblN0YXRpY0tleXMgKG1vZHVsZXMpIHtcclxuICByZXR1cm4gbW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGtleXMsIG0pIHtcclxuICAgIHJldHVybiBrZXlzLmNvbmNhdChtLnN0YXRpY0tleXMgfHwgW10pXHJcbiAgfSwgW10pLmpvaW4oJywnKVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXHJcbiAqIGlmIHRoZXkgYXJlIHBsYWluIG9iamVjdHMsIGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBzaGFwZT9cclxuICovXHJcbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcclxuICBpZiAoYSA9PT0gYikgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xyXG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcclxuICBpZiAoaXNPYmplY3RBICYmIGlzT2JqZWN0Qikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcclxuICAgICAgdmFyIGlzQXJyYXlCID0gQXJyYXkuaXNBcnJheShiKTtcclxuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChlLCBiW2ldKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xyXG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xyXG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghaXNPYmplY3RBICYmICFpc09iamVjdEIpIHtcclxuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3NlSW5kZXhPZiAoYXJyLCB2YWwpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxyXG4gKi9cclxuZnVuY3Rpb24gb25jZSAoZm4pIHtcclxuICB2YXIgY2FsbGVkID0gZmFsc2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgU1NSX0FUVFIgPSAnZGF0YS1zZXJ2ZXItcmVuZGVyZWQnO1xyXG5cclxudmFyIEFTU0VUX1RZUEVTID0gW1xyXG4gICdjb21wb25lbnQnLFxyXG4gICdkaXJlY3RpdmUnLFxyXG4gICdmaWx0ZXInXHJcbl07XHJcblxyXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xyXG4gICdiZWZvcmVDcmVhdGUnLFxyXG4gICdjcmVhdGVkJyxcclxuICAnYmVmb3JlTW91bnQnLFxyXG4gICdtb3VudGVkJyxcclxuICAnYmVmb3JlVXBkYXRlJyxcclxuICAndXBkYXRlZCcsXHJcbiAgJ2JlZm9yZURlc3Ryb3knLFxyXG4gICdkZXN0cm95ZWQnLFxyXG4gICdhY3RpdmF0ZWQnLFxyXG4gICdkZWFjdGl2YXRlZCcsXHJcbiAgJ2Vycm9yQ2FwdHVyZWQnXHJcbl07XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBjb25maWcgPSAoe1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxyXG4gICAqL1xyXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxyXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cclxuICAgKi9cclxuICBzaWxlbnQ6IGZhbHNlLFxyXG5cclxuICAvKipcclxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xyXG4gICAqL1xyXG4gIHByb2R1Y3Rpb25UaXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXHJcbiAgICovXHJcbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcclxuICAgKi9cclxuICBwZXJmb3JtYW5jZTogZmFsc2UsXHJcblxyXG4gIC8qKlxyXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXHJcbiAgICovXHJcbiAgZXJyb3JIYW5kbGVyOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBXYXJuIGhhbmRsZXIgZm9yIHdhdGNoZXIgd2FybnNcclxuICAgKi9cclxuICB3YXJuSGFuZGxlcjogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXHJcbiAgICovXHJcbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cclxuICAgKi9cclxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXHJcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxyXG4gICAqL1xyXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxyXG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXHJcbiAgICovXHJcbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXHJcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxyXG4gICAqL1xyXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XHJcbiAgICovXHJcbiAgZ2V0VGFnTmFtZXNwYWNlOiBub29wLFxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZSB0aGUgcmVhbCB0YWcgbmFtZSBmb3IgdGhlIHNwZWNpZmljIHBsYXRmb3JtLlxyXG4gICAqL1xyXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcclxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXHJcbiAgICovXHJcbiAgbXVzdFVzZVByb3A6IG5vLFxyXG5cclxuICAvKipcclxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xyXG4gICAqL1xyXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXHJcbn0pXHJcblxyXG4vKiAgKi9cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xyXG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xyXG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBhIHByb3BlcnR5LlxyXG4gKi9cclxuZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XHJcbiAgICB2YWx1ZTogdmFsLFxyXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxyXG4gICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWVcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxyXG4gKi9cclxudmFyIGJhaWxSRSA9IC9bXlxcdy4kXS87XHJcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xyXG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxyXG4gICAgICBvYmogPSBvYmpbc2VnbWVudHNbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9ialxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cclxudmFyIGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge307XHJcblxyXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXHJcbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XHJcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xyXG52YXIgVUEgPSBpbkJyb3dzZXIgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcclxudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XHJcbnZhciBpc0VkZ2UgPSBVQSAmJiBVQS5pbmRleE9mKCdlZGdlLycpID4gMDtcclxudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xyXG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xyXG52YXIgaXNDaHJvbWUgPSBVQSAmJiAvY2hyb21lXFwvXFxkKy8udGVzdChVQSkgJiYgIWlzRWRnZTtcclxuXHJcbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cclxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcclxuXHJcbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuaWYgKGluQnJvd3Nlcikge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgb3B0cyA9IHt9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wdHMsICdwYXNzaXZlJywgKHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdC1wYXNzaXZlJywgbnVsbCwgb3B0cyk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxufVxyXG5cclxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXHJcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXHJcbnZhciBfaXNTZXJ2ZXI7XHJcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcclxuICAgICAgLy8gV2VicGFjayBzaGltbWluZyB0aGUgcHJvY2Vzc1xyXG4gICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfaXNTZXJ2ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIF9pc1NlcnZlclxyXG59O1xyXG5cclxuLy8gZGV0ZWN0IGRldnRvb2xzXHJcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXHJcbn1cclxuXHJcbnZhciBoYXNTeW1ib2wgPVxyXG4gIHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFN5bWJvbCkgJiZcclxuICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcclxuXHJcbnZhciBfU2V0O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLy8gJGZsb3ctZGlzYWJsZS1saW5lXHJcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XHJcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXHJcbiAgX1NldCA9IFNldDtcclxufSBlbHNlIHtcclxuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXHJcbiAgX1NldCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZXQgKCkge1xyXG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB9XHJcbiAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldFtrZXldID09PSB0cnVlXHJcbiAgICB9O1xyXG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGtleSkge1xyXG4gICAgICB0aGlzLnNldFtrZXldID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKCkge1xyXG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBTZXQ7XHJcbiAgfSgpKTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgd2FybiA9IG5vb3A7XHJcbnZhciB0aXAgPSBub29wO1xyXG52YXIgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IChub29wKTsgLy8gd29yayBhcm91bmQgZmxvdyBjaGVja1xyXG52YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IChub29wKTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XHJcbiAgdmFyIGNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyXHJcbiAgICAucmVwbGFjZShjbGFzc2lmeVJFLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KVxyXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xyXG5cclxuICB3YXJuID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcclxuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcclxuXHJcbiAgICBpZiAoY29uZmlnLndhcm5IYW5kbGVyKSB7XHJcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcclxuICAgIH0gZWxzZSBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW1Z1ZSB3YXJuXTogXCIgKyBtc2cgKyB0cmFjZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XHJcbiAgICBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyAoXHJcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXHJcbiAgICAgICkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XHJcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XHJcbiAgICAgIHJldHVybiAnPFJvb3Q+J1xyXG4gICAgfVxyXG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcclxuICAgICAgPyB2bS5vcHRpb25zXHJcbiAgICAgIDogdm0uX2lzVnVlXHJcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXHJcbiAgICAgICAgOiB2bSB8fCB7fTtcclxuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcclxuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XHJcbiAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xyXG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcclxuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIChuYW1lID8gKFwiPFwiICsgKGNsYXNzaWZ5KG5hbWUpKSArIFwiPlwiKSA6IFwiPEFub255bW91cz5cIikgK1xyXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxyXG4gICAgKVxyXG4gIH07XHJcblxyXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XHJcbiAgICB2YXIgcmVzID0gJyc7XHJcbiAgICB3aGlsZSAobikge1xyXG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxyXG4gICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxyXG4gICAgICBuID4+PSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH07XHJcblxyXG4gIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcclxuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xyXG4gICAgICB2YXIgdHJlZSA9IFtdO1xyXG4gICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcclxuICAgICAgd2hpbGUgKHZtKSB7XHJcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdmFyIGxhc3QgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAobGFzdC5jb25zdHJ1Y3RvciA9PT0gdm0uY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XHJcbiAgICAgICAgICAgIHZtID0gdm0uJHBhcmVudDtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xyXG4gICAgICAgICAgICB0cmVlW3RyZWUubGVuZ3RoIC0gMV0gPSBbbGFzdCwgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlXTtcclxuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJlZS5wdXNoKHZtKTtcclxuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcclxuICAgICAgICAgICAgPyAoKGZvcm1hdENvbXBvbmVudE5hbWUodm1bMF0pKSArIFwiLi4uIChcIiArICh2bVsxXSkgKyBcIiByZWN1cnNpdmUgY2FsbHMpXCIpXHJcbiAgICAgICAgICAgIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpKTsgfSlcclxuICAgICAgICAuam9pbignXFxuJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXCJcXG5cXG4oZm91bmQgaW4gXCIgKyAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIpXCIpXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG5cclxudmFyIHVpZCA9IDA7XHJcblxyXG4vKipcclxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXHJcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXHJcbiAqL1xyXG52YXIgRGVwID0gZnVuY3Rpb24gRGVwICgpIHtcclxuICB0aGlzLmlkID0gdWlkKys7XHJcbiAgdGhpcy5zdWJzID0gW107XHJcbn07XHJcblxyXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XHJcbiAgdGhpcy5zdWJzLnB1c2goc3ViKTtcclxufTtcclxuXHJcbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gcmVtb3ZlU3ViIChzdWIpIHtcclxuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xyXG59O1xyXG5cclxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xyXG4gIGlmIChEZXAudGFyZ2V0KSB7XHJcbiAgICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKTtcclxuICB9XHJcbn07XHJcblxyXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XHJcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcclxuICB2YXIgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIHN1YnNbaV0udXBkYXRlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxyXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXHJcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxyXG5EZXAudGFyZ2V0ID0gbnVsbDtcclxudmFyIHRhcmdldFN0YWNrID0gW107XHJcblxyXG5mdW5jdGlvbiBwdXNoVGFyZ2V0IChfdGFyZ2V0KSB7XHJcbiAgaWYgKERlcC50YXJnZXQpIHsgdGFyZ2V0U3RhY2sucHVzaChEZXAudGFyZ2V0KTsgfVxyXG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xyXG4gIERlcC50YXJnZXQgPSB0YXJnZXRTdGFjay5wb3AoKTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXHJcbiAgdGFnLFxyXG4gIGRhdGEsXHJcbiAgY2hpbGRyZW4sXHJcbiAgdGV4dCxcclxuICBlbG0sXHJcbiAgY29udGV4dCxcclxuICBjb21wb25lbnRPcHRpb25zLFxyXG4gIGFzeW5jRmFjdG9yeVxyXG4pIHtcclxuICB0aGlzLnRhZyA9IHRhZztcclxuICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gIHRoaXMuZWxtID0gZWxtO1xyXG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcclxuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcclxuICB0aGlzLmZuU2NvcGVJZCA9IHVuZGVmaW5lZDtcclxuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XHJcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcclxuICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG4gIHRoaXMucmF3ID0gZmFsc2U7XHJcbiAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xyXG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcclxuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xyXG4gIHRoaXMuaXNDbG9uZWQgPSBmYWxzZTtcclxuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xyXG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xyXG4gIHRoaXMuYXN5bmNNZXRhID0gdW5kZWZpbmVkO1xyXG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xyXG5cclxuLy8gREVQUkVDQVRFRDogYWxpYXMgZm9yIGNvbXBvbmVudEluc3RhbmNlIGZvciBiYWNrd2FyZHMgY29tcGF0LlxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlXHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVk5vZGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcclxuXHJcbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICBpZiAoIHRleHQgPT09IHZvaWQgMCApIHRleHQgPSAnJztcclxuXHJcbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcclxuICBub2RlLnRleHQgPSB0ZXh0O1xyXG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcclxuICByZXR1cm4gbm9kZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcclxuICByZXR1cm4gbmV3IFZOb2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFN0cmluZyh2YWwpKVxyXG59XHJcblxyXG4vLyBvcHRpbWl6ZWQgc2hhbGxvdyBjbG9uZVxyXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXHJcbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxyXG4vLyBvbiB0aGVpciBlbG0gcmVmZXJlbmNlLlxyXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xyXG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXHJcbiAgICB2bm9kZS50YWcsXHJcbiAgICB2bm9kZS5kYXRhLFxyXG4gICAgdm5vZGUuY2hpbGRyZW4sXHJcbiAgICB2bm9kZS50ZXh0LFxyXG4gICAgdm5vZGUuZWxtLFxyXG4gICAgdm5vZGUuY29udGV4dCxcclxuICAgIHZub2RlLmNvbXBvbmVudE9wdGlvbnMsXHJcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcclxuICApO1xyXG4gIGNsb25lZC5ucyA9IHZub2RlLm5zO1xyXG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xyXG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XHJcbiAgY2xvbmVkLmlzQ29tbWVudCA9IHZub2RlLmlzQ29tbWVudDtcclxuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xyXG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XHJcbiAgY2xvbmVkLmZuU2NvcGVJZCA9IHZub2RlLmZuU2NvcGVJZDtcclxuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xyXG4gIHJldHVybiBjbG9uZWRcclxufVxyXG5cclxuLypcclxuICogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoXHJcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxyXG4gKi9cclxuXHJcbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xyXG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcclxuXHJcbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcclxuICAncHVzaCcsXHJcbiAgJ3BvcCcsXHJcbiAgJ3NoaWZ0JyxcclxuICAndW5zaGlmdCcsXHJcbiAgJ3NwbGljZScsXHJcbiAgJ3NvcnQnLFxyXG4gICdyZXZlcnNlJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xyXG4gKi9cclxubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXHJcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xyXG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcclxuICAgIHZhciBpbnNlcnRlZDtcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgJ3B1c2gnOlxyXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcclxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnc3BsaWNlJzpcclxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIGlmIChpbnNlcnRlZCkgeyBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpOyB9XHJcbiAgICAvLyBub3RpZnkgY2hhbmdlXHJcbiAgICBvYi5kZXAubm90aWZ5KCk7XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLyogICovXHJcblxyXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKTtcclxuXHJcbi8qKlxyXG4gKiBJbiBzb21lIGNhc2VzIHdlIG1heSB3YW50IHRvIGRpc2FibGUgb2JzZXJ2YXRpb24gaW5zaWRlIGEgY29tcG9uZW50J3NcclxuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxyXG4gKi9cclxudmFyIHNob3VsZE9ic2VydmUgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xyXG4gIHNob3VsZE9ic2VydmUgPSB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxyXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XHJcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XHJcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxyXG4gKi9cclxudmFyIE9ic2VydmVyID0gZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xyXG4gIHRoaXMudm1Db3VudCA9IDA7XHJcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICB2YXIgYXVnbWVudCA9IGhhc1Byb3RvXHJcbiAgICAgID8gcHJvdG9BdWdtZW50XHJcbiAgICAgIDogY29weUF1Z21lbnQ7XHJcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XHJcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMud2Fsayh2YWx1ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xyXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cclxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXHJcbiAqL1xyXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xyXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5c1tpXSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxyXG4gKi9cclxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcclxuICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gaGVscGVyc1xyXG5cclxuLyoqXHJcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcclxuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cclxuICovXHJcbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xyXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmM7XHJcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xyXG59XHJcblxyXG4vKipcclxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXHJcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgdmFyIGtleSA9IGtleXNbaV07XHJcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcclxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcclxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xyXG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgVk5vZGUpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICB2YXIgb2I7XHJcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XHJcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxyXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcclxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcclxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXHJcbiAgICAhdmFsdWUuX2lzVnVlXHJcbiAgKSB7XHJcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIGlmIChhc1Jvb3REYXRhICYmIG9iKSB7XHJcbiAgICBvYi52bUNvdW50Kys7XHJcbiAgfVxyXG4gIHJldHVybiBvYlxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKFxyXG4gIG9iaixcclxuICBrZXksXHJcbiAgdmFsLFxyXG4gIGN1c3RvbVNldHRlcixcclxuICBzaGFsbG93XHJcbikge1xyXG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XHJcblxyXG4gIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xyXG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xyXG4gIHZhciBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XHJcbiAgaWYgKCFnZXR0ZXIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgdmFsID0gb2JqW2tleV07XHJcbiAgfVxyXG4gIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XHJcblxyXG4gIHZhciBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZSh2YWwpO1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xyXG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xyXG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xyXG4gICAgICAgIGRlcC5kZXBlbmQoKTtcclxuICAgICAgICBpZiAoY2hpbGRPYikge1xyXG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmFsdWVcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcclxuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXHJcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XHJcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNldHRlcikge1xyXG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWwgPSBuZXdWYWw7XHJcbiAgICAgIH1cclxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcclxuICAgICAgZGVwLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXHJcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcclxuICogYWxyZWFkeSBleGlzdC5cclxuICovXHJcbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXHJcbiAgKSB7XHJcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcclxuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xyXG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEsIHZhbCk7XHJcbiAgICByZXR1cm4gdmFsXHJcbiAgfVxyXG4gIGlmIChrZXkgaW4gdGFyZ2V0ICYmICEoa2V5IGluIE9iamVjdC5wcm90b3R5cGUpKSB7XHJcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcclxuICAgIHJldHVybiB2YWxcclxuICB9XHJcbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xyXG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxyXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXHJcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHZhbFxyXG4gIH1cclxuICBpZiAoIW9iKSB7XHJcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcclxuICAgIHJldHVybiB2YWxcclxuICB9XHJcbiAgZGVmaW5lUmVhY3RpdmUob2IudmFsdWUsIGtleSwgdmFsKTtcclxuICBvYi5kZXAubm90aWZ5KCk7XHJcbiAgcmV0dXJuIHZhbFxyXG59XHJcblxyXG4vKipcclxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cclxuICovXHJcbmZ1bmN0aW9uIGRlbCAodGFyZ2V0LCBrZXkpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxyXG4gICkge1xyXG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XHJcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xyXG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxyXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcclxuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXHJcbiAgICApO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmICghaGFzT3duKHRhcmdldCwga2V5KSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGRlbGV0ZSB0YXJnZXRba2V5XTtcclxuICBpZiAoIW9iKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgb2IuZGVwLm5vdGlmeSgpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcclxuICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcclxuICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICBlID0gdmFsdWVbaV07XHJcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG4vKipcclxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxyXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxyXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cclxuICovXHJcbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcclxuICovXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XHJcbiAgICBpZiAoIXZtKSB7XHJcbiAgICAgIHdhcm4oXHJcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcclxuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xyXG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxyXG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xyXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJvbSk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBrZXkgPSBrZXlzW2ldO1xyXG4gICAgdG9WYWwgPSB0b1trZXldO1xyXG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XTtcclxuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XHJcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcclxuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiYgaXNQbGFpbk9iamVjdChmcm9tVmFsKSkge1xyXG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdG9cclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGFcclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxyXG4gIHBhcmVudFZhbCxcclxuICBjaGlsZFZhbCxcclxuICB2bVxyXG4pIHtcclxuICBpZiAoIXZtKSB7XHJcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xyXG4gICAgaWYgKCFjaGlsZFZhbCkge1xyXG4gICAgICByZXR1cm4gcGFyZW50VmFsXHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcmVudFZhbCkge1xyXG4gICAgICByZXR1cm4gY2hpbGRWYWxcclxuICAgIH1cclxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcclxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxyXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXHJcbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcclxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XHJcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXHJcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxyXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XHJcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXHJcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcclxuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0sIHZtKVxyXG4gICAgICAgIDogY2hpbGRWYWw7XHJcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcclxuICAgICAgICA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSlcclxuICAgICAgICA6IHBhcmVudFZhbDtcclxuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXHJcbiAgcGFyZW50VmFsLFxyXG4gIGNoaWxkVmFsLFxyXG4gIHZtXHJcbikge1xyXG4gIGlmICghdm0pIHtcclxuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxyXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xyXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xyXG4gICAgICAgICdkZWZpbml0aW9ucy4nLFxyXG4gICAgICAgIHZtXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gcGFyZW50VmFsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pXHJcbn07XHJcblxyXG4vKipcclxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2VIb29rIChcclxuICBwYXJlbnRWYWwsXHJcbiAgY2hpbGRWYWxcclxuKSB7XHJcbiAgcmV0dXJuIGNoaWxkVmFsXHJcbiAgICA/IHBhcmVudFZhbFxyXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXHJcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcclxuICAgICAgICA/IGNoaWxkVmFsXHJcbiAgICAgICAgOiBbY2hpbGRWYWxdXHJcbiAgICA6IHBhcmVudFZhbFxyXG59XHJcblxyXG5MSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xyXG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcclxufSk7XHJcblxyXG4vKipcclxuICogQXNzZXRzXHJcbiAqXHJcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cclxuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxyXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcclxuICBwYXJlbnRWYWwsXHJcbiAgY2hpbGRWYWwsXHJcbiAgdm0sXHJcbiAga2V5XHJcbikge1xyXG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcclxuICBpZiAoY2hpbGRWYWwpIHtcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XHJcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZXNcclxuICB9XHJcbn1cclxuXHJcbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcclxuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcclxufSk7XHJcblxyXG4vKipcclxuICogV2F0Y2hlcnMuXHJcbiAqXHJcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcclxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXHJcbiAqL1xyXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXHJcbiAgcGFyZW50VmFsLFxyXG4gIGNoaWxkVmFsLFxyXG4gIHZtLFxyXG4gIGtleVxyXG4pIHtcclxuICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxyXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxyXG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xyXG4gIH1cclxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxyXG4gIHZhciByZXQgPSB7fTtcclxuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xyXG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcclxuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcclxuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xyXG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcclxuICAgIH1cclxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcclxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxyXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xyXG4gIH1cclxuICByZXR1cm4gcmV0XHJcbn07XHJcblxyXG4vKipcclxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cclxuICovXHJcbnN0cmF0cy5wcm9wcyA9XHJcbnN0cmF0cy5tZXRob2RzID1cclxuc3RyYXRzLmluamVjdCA9XHJcbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcclxuICBwYXJlbnRWYWwsXHJcbiAgY2hpbGRWYWwsXHJcbiAgdm0sXHJcbiAga2V5XHJcbikge1xyXG4gIGlmIChjaGlsZFZhbCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcclxuICB9XHJcbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cclxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xyXG4gIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cclxuICByZXR1cm4gcmV0XHJcbn07XHJcbnN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxyXG4gKi9cclxudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XHJcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcclxuICAgID8gcGFyZW50VmFsXHJcbiAgICA6IGNoaWxkVmFsXHJcbn07XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcclxuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XHJcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xyXG4gIGlmICghL15bYS16QS1aXVtcXHctXSokLy50ZXN0KG5hbWUpKSB7XHJcbiAgICB3YXJuKFxyXG4gICAgICAnSW52YWxpZCBjb21wb25lbnQgbmFtZTogXCInICsgbmFtZSArICdcIi4gQ29tcG9uZW50IG5hbWVzICcgK1xyXG4gICAgICAnY2FuIG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbmQgdGhlIGh5cGhlbiwgJyArXHJcbiAgICAgICdhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLidcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcclxuICAgIHdhcm4oXHJcbiAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xyXG4gICAgICAnaWQ6ICcgKyBuYW1lXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxyXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxyXG4gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XHJcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcclxuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XHJcbiAgdmFyIHJlcyA9IHt9O1xyXG4gIHZhciBpLCB2YWwsIG5hbWU7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XHJcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICB2YWwgPSBwcm9wc1tpXTtcclxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XHJcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xyXG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xyXG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcclxuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXHJcbiAgICAgICAgPyB2YWxcclxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICB3YXJuKFxyXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcclxuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXHJcbiAgICAgIHZtXHJcbiAgICApO1xyXG4gIH1cclxuICBvcHRpb25zLnByb3BzID0gcmVzO1xyXG59XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxyXG4gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xyXG4gIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcclxuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxyXG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3QpKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XHJcbiAgICAgIHZhciB2YWwgPSBpbmplY3Rba2V5XTtcclxuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXHJcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxyXG4gICAgICAgIDogeyBmcm9tOiB2YWwgfTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHdhcm4oXHJcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcclxuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxyXG4gICAgICB2bVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxyXG4gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xyXG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xyXG4gIGlmIChkaXJzKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xyXG4gICAgICB2YXIgZGVmID0gZGlyc1trZXldO1xyXG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmLCB1cGRhdGU6IGRlZiB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcclxuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XHJcbiAgICB3YXJuKFxyXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcclxuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXHJcbiAgICAgIHZtXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cclxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXHJcbiAgcGFyZW50LFxyXG4gIGNoaWxkLFxyXG4gIHZtXHJcbikge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcclxuICBub3JtYWxpemVJbmplY3QoY2hpbGQsIHZtKTtcclxuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcclxuICB2YXIgZXh0ZW5kc0Zyb20gPSBjaGlsZC5leHRlbmRzO1xyXG4gIGlmIChleHRlbmRzRnJvbSkge1xyXG4gICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgZXh0ZW5kc0Zyb20sIHZtKTtcclxuICB9XHJcbiAgaWYgKGNoaWxkLm1peGlucykge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gIHZhciBrZXk7XHJcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XHJcbiAgICBtZXJnZUZpZWxkKGtleSk7XHJcbiAgfVxyXG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XHJcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcclxuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcclxuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcclxuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIG9wdGlvbnNcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc29sdmUgYW4gYXNzZXQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xyXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxyXG4gIG9wdGlvbnMsXHJcbiAgdHlwZSxcclxuICBpZCxcclxuICB3YXJuTWlzc2luZ1xyXG4pIHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xyXG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XHJcbiAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XHJcbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xyXG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxyXG4gIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcclxuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxyXG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxyXG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xyXG4gICAgd2FybihcclxuICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCxcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXHJcbiAga2V5LFxyXG4gIHByb3BPcHRpb25zLFxyXG4gIHByb3BzRGF0YSxcclxuICB2bVxyXG4pIHtcclxuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XHJcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xyXG4gIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldO1xyXG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xyXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcclxuICBpZiAoYm9vbGVhbkluZGV4ID4gLTEpIHtcclxuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XHJcbiAgICAgIHZhbHVlID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gaHlwaGVuYXRlKGtleSkpIHtcclxuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXHJcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxyXG4gICAgICB2YXIgc3RyaW5nSW5kZXggPSBnZXRUeXBlSW5kZXgoU3RyaW5nLCBwcm9wLnR5cGUpO1xyXG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XHJcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGNoZWNrIGRlZmF1bHQgdmFsdWVcclxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xyXG4gICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBmcmVzaCBjb3B5LFxyXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXHJcbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xyXG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xyXG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XHJcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAvLyBza2lwIHZhbGlkYXRpb24gZm9yIHdlZXggcmVjeWNsZS1saXN0IGNoaWxkIGNvbXBvbmVudCBwcm9wc1xyXG4gICAgIShmYWxzZSAmJiBpc09iamVjdCh2YWx1ZSkgJiYgKCdAYmluZGluZycgaW4gdmFsdWUpKVxyXG4gICkge1xyXG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSAodm0sIHByb3AsIGtleSkge1xyXG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcclxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XHJcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcclxuICAgIHdhcm4oXHJcbiAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcclxuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xyXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXHJcbiAgICAgIHZtXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxyXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcclxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcclxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcclxuICApIHtcclxuICAgIHJldHVybiB2bS5fcHJvcHNba2V5XVxyXG4gIH1cclxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xyXG4gIC8vIGEgdmFsdWUgaXMgRnVuY3Rpb24gaWYgaXRzIHByb3RvdHlwZSBpcyBmdW5jdGlvbiBldmVuIGFjcm9zcyBkaWZmZXJlbnQgZXhlY3V0aW9uIGNvbnRleHRcclxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcclxuICAgID8gZGVmLmNhbGwodm0pXHJcbiAgICA6IGRlZlxyXG59XHJcblxyXG4vKipcclxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxyXG4gKi9cclxuZnVuY3Rpb24gYXNzZXJ0UHJvcCAoXHJcbiAgcHJvcCxcclxuICBuYW1lLFxyXG4gIHZhbHVlLFxyXG4gIHZtLFxyXG4gIGFic2VudFxyXG4pIHtcclxuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcclxuICAgIHdhcm4oXHJcbiAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLFxyXG4gICAgICB2bVxyXG4gICAgKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xyXG4gIHZhciB2YWxpZCA9ICF0eXBlIHx8IHR5cGUgPT09IHRydWU7XHJcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcclxuICBpZiAodHlwZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XHJcbiAgICAgIHR5cGUgPSBbdHlwZV07XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XHJcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcclxuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xyXG4gICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCF2YWxpZCkge1xyXG4gICAgd2FybihcclxuICAgICAgXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xyXG4gICAgICBcIiBFeHBlY3RlZCBcIiArIChleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpKSArXHJcbiAgICAgIFwiLCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcclxuICAgICAgdm1cclxuICAgICk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xyXG4gIGlmICh2YWxpZGF0b3IpIHtcclxuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xyXG4gICAgICB3YXJuKFxyXG4gICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcclxuICAgICAgICB2bVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xyXG5cclxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUpIHtcclxuICB2YXIgdmFsaWQ7XHJcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGdldFR5cGUodHlwZSk7XHJcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XHJcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcclxuICAgIHZhbGlkID0gdCA9PT0gZXhwZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xyXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcclxuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XHJcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcclxuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdmFsaWQ6IHZhbGlkLFxyXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXHJcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xyXG4gKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xyXG4gIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XHJcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XHJcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVHlwZXMpKSB7XHJcbiAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMVxyXG4gIH1cclxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRUeXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcclxuICBpZiAodm0pIHtcclxuICAgIHZhciBjdXIgPSB2bTtcclxuICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XHJcbiAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xyXG4gICAgICBpZiAoaG9va3MpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcclxuICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsb2dFcnJvcihlcnIsIHZtLCBpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xyXG4gIH1cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IGVyclxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcbi8qIGdsb2JhbHMgTWVzc2FnZUNoYW5uZWwgKi9cclxuXHJcbnZhciBjYWxsYmFja3MgPSBbXTtcclxudmFyIHBlbmRpbmcgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzICgpIHtcclxuICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICBjYWxsYmFja3MubGVuZ3RoID0gMDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29waWVzW2ldKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIGJvdGggbWljcm90YXNrcyBhbmQgKG1hY3JvKSB0YXNrcy5cclxuLy8gSW4gPCAyLjQgd2UgdXNlZCBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGJ1dCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Mgd2hlcmVcclxuLy8gbWljcm90YXNrcyBoYXZlIHRvbyBoaWdoIGEgcHJpb3JpdHkgYW5kIGZpcmUgaW4gYmV0d2VlbiBzdXBwb3NlZGx5XHJcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCkgb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lXHJcbi8vIGV2ZW50ICgjNjU2NikuIEhvd2V2ZXIsIHVzaW5nIChtYWNybykgdGFza3MgZXZlcnl3aGVyZSBhbHNvIGhhcyBzdWJ0bGUgcHJvYmxlbXNcclxuLy8gd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50IChlLmcuICM2ODEzLCBvdXQtaW4gdHJhbnNpdGlvbnMpLlxyXG4vLyBIZXJlIHdlIHVzZSBtaWNyb3Rhc2sgYnkgZGVmYXVsdCwgYnV0IGV4cG9zZSBhIHdheSB0byBmb3JjZSAobWFjcm8pIHRhc2sgd2hlblxyXG4vLyBuZWVkZWQgKGUuZy4gaW4gZXZlbnQgaGFuZGxlcnMgYXR0YWNoZWQgYnkgdi1vbikuXHJcbnZhciBtaWNyb1RpbWVyRnVuYztcclxudmFyIG1hY3JvVGltZXJGdW5jO1xyXG52YXIgdXNlTWFjcm9UYXNrID0gZmFsc2U7XHJcblxyXG4vLyBEZXRlcm1pbmUgKG1hY3JvKSB0YXNrIGRlZmVyIGltcGxlbWVudGF0aW9uLlxyXG4vLyBUZWNobmljYWxseSBzZXRJbW1lZGlhdGUgc2hvdWxkIGJlIHRoZSBpZGVhbCBjaG9pY2UsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlXHJcbi8vIGluIElFLiBUaGUgb25seSBwb2x5ZmlsbCB0aGF0IGNvbnNpc3RlbnRseSBxdWV1ZXMgdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBET01cclxuLy8gZXZlbnRzIHRyaWdnZXJlZCBpbiB0aGUgc2FtZSBsb29wIGlzIGJ5IHVzaW5nIE1lc3NhZ2VDaGFubmVsLlxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcclxuICBtYWNyb1RpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHNldEltbWVkaWF0ZShmbHVzaENhbGxiYWNrcyk7XHJcbiAgfTtcclxufSBlbHNlIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnICYmIChcclxuICBpc05hdGl2ZShNZXNzYWdlQ2hhbm5lbCkgfHxcclxuICAvLyBQaGFudG9tSlNcclxuICBNZXNzYWdlQ2hhbm5lbC50b1N0cmluZygpID09PSAnW29iamVjdCBNZXNzYWdlQ2hhbm5lbENvbnN0cnVjdG9yXSdcclxuKSkge1xyXG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XHJcbiAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xyXG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2hDYWxsYmFja3M7XHJcbiAgbWFjcm9UaW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwb3J0LnBvc3RNZXNzYWdlKDEpO1xyXG4gIH07XHJcbn0gZWxzZSB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBtYWNyb1RpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIERldGVybWluZSBtaWNyb3Rhc2sgZGVmZXIgaW1wbGVtZW50YXRpb24uXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0LCAkZmxvdy1kaXNhYmxlLWxpbmUgKi9cclxuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xyXG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgbWljcm9UaW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xyXG4gICAgLy8gaW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XHJcbiAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcclxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXHJcbiAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cclxuICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxyXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cclxuICB9O1xyXG59IGVsc2Uge1xyXG4gIC8vIGZhbGxiYWNrIHRvIG1hY3JvXHJcbiAgbWljcm9UaW1lckZ1bmMgPSBtYWNyb1RpbWVyRnVuYztcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXAgYSBmdW5jdGlvbiBzbyB0aGF0IGlmIGFueSBjb2RlIGluc2lkZSB0cmlnZ2VycyBzdGF0ZSBjaGFuZ2UsXHJcbiAqIHRoZSBjaGFuZ2VzIGFyZSBxdWV1ZWQgdXNpbmcgYSAobWFjcm8pIHRhc2sgaW5zdGVhZCBvZiBhIG1pY3JvdGFzay5cclxuICovXHJcbmZ1bmN0aW9uIHdpdGhNYWNyb1Rhc2sgKGZuKSB7XHJcbiAgcmV0dXJuIGZuLl93aXRoVGFzayB8fCAoZm4uX3dpdGhUYXNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdXNlTWFjcm9UYXNrID0gdHJ1ZTtcclxuICAgIHZhciByZXMgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgdXNlTWFjcm9UYXNrID0gZmFsc2U7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcclxuICB2YXIgX3Jlc29sdmU7XHJcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY2IuY2FsbChjdHgpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xyXG4gICAgICBfcmVzb2x2ZShjdHgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmICghcGVuZGluZykge1xyXG4gICAgcGVuZGluZyA9IHRydWU7XHJcbiAgICBpZiAodXNlTWFjcm9UYXNrKSB7XHJcbiAgICAgIG1hY3JvVGltZXJGdW5jKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaWNyb1RpbWVyRnVuYygpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBtYXJrO1xyXG52YXIgbWVhc3VyZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChcclxuICAgIHBlcmYgJiZcclxuICAgIHBlcmYubWFyayAmJlxyXG4gICAgcGVyZi5tZWFzdXJlICYmXHJcbiAgICBwZXJmLmNsZWFyTWFya3MgJiZcclxuICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xyXG4gICkge1xyXG4gICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xyXG4gICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XHJcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcclxuICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcclxuICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XHJcbiAgICAgIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cclxuXHJcbnZhciBpbml0UHJveHk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXHJcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcclxuICAgICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICtcclxuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsJyArXHJcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxyXG4gICk7XHJcblxyXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xyXG4gICAgd2FybihcclxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xyXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcclxuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcclxuICAgICAgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgK1xyXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcclxuICAgICAgdGFyZ2V0XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHZhciBoYXNQcm94eSA9XHJcbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcclxuXHJcbiAgaWYgKGhhc1Byb3h5KSB7XHJcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhLGV4YWN0Jyk7XHJcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XHJcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xyXG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YXIgaGFzSGFuZGxlciA9IHtcclxuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xyXG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcclxuICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHwga2V5LmNoYXJBdCgwKSA9PT0gJ18nO1xyXG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XHJcbiAgICAgICAgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBnZXRIYW5kbGVyID0ge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XHJcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XHJcbiAgICAgICAgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcclxuICAgIGlmIChoYXNQcm94eSkge1xyXG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcclxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcclxuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxyXG4gICAgICAgID8gZ2V0SGFuZGxlclxyXG4gICAgICAgIDogaGFzSGFuZGxlcjtcclxuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcclxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcclxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cclxuICovXHJcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwpIHtcclxuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XHJcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcclxuICB2YXIgaSwga2V5cztcclxuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xyXG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAodmFsLl9fb2JfXykge1xyXG4gICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XHJcbiAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc2Vlbi5hZGQoZGVwSWQpO1xyXG4gIH1cclxuICBpZiAoaXNBKSB7XHJcbiAgICBpID0gdmFsLmxlbmd0aDtcclxuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cclxuICB9IGVsc2Uge1xyXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICBpID0ga2V5cy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xyXG4gIHZhciBwYXNzaXZlID0gbmFtZS5jaGFyQXQoMCkgPT09ICcmJztcclxuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xyXG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxyXG4gIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XHJcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xyXG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgICBvbmNlOiBvbmNlJCQxLFxyXG4gICAgY2FwdHVyZTogY2FwdHVyZSxcclxuICAgIHBhc3NpdmU6IHBhc3NpdmVcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMpIHtcclxuICBmdW5jdGlvbiBpbnZva2VyICgpIHtcclxuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcclxuXHJcbiAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XHJcbiAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjbG9uZWRbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzJDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xyXG4gICAgICByZXR1cm4gZm5zLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuICAgIH1cclxuICB9XHJcbiAgaW52b2tlci5mbnMgPSBmbnM7XHJcbiAgcmV0dXJuIGludm9rZXJcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcclxuICBvbixcclxuICBvbGRPbixcclxuICBhZGQsXHJcbiAgcmVtb3ZlJCQxLFxyXG4gIHZtXHJcbikge1xyXG4gIHZhciBuYW1lLCBkZWYsIGN1ciwgb2xkLCBldmVudDtcclxuICBmb3IgKG5hbWUgaW4gb24pIHtcclxuICAgIGRlZiA9IGN1ciA9IG9uW25hbWVdO1xyXG4gICAgb2xkID0gb2xkT25bbmFtZV07XHJcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XHJcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcclxuICAgICAgICBcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgKGV2ZW50Lm5hbWUpICsgXCJcXFwiOiBnb3QgXCIgKyBTdHJpbmcoY3VyKSxcclxuICAgICAgICB2bVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcclxuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50Lm9uY2UsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XHJcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XHJcbiAgICAgIG9sZC5mbnMgPSBjdXI7XHJcbiAgICAgIG9uW25hbWVdID0gb2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcclxuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xyXG4gICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xyXG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBtZXJnZVZOb2RlSG9vayAoZGVmLCBob29rS2V5LCBob29rKSB7XHJcbiAgaWYgKGRlZiBpbnN0YW5jZW9mIFZOb2RlKSB7XHJcbiAgICBkZWYgPSBkZWYuZGF0YS5ob29rIHx8IChkZWYuZGF0YS5ob29rID0ge30pO1xyXG4gIH1cclxuICB2YXIgaW52b2tlcjtcclxuICB2YXIgb2xkSG9vayA9IGRlZltob29rS2V5XTtcclxuXHJcbiAgZnVuY3Rpb24gd3JhcHBlZEhvb2sgKCkge1xyXG4gICAgaG9vay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgLy8gaW1wb3J0YW50OiByZW1vdmUgbWVyZ2VkIGhvb2sgdG8gZW5zdXJlIGl0J3MgY2FsbGVkIG9ubHkgb25jZVxyXG4gICAgLy8gYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtcclxuICAgIHJlbW92ZShpbnZva2VyLmZucywgd3JhcHBlZEhvb2spO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzVW5kZWYob2xkSG9vaykpIHtcclxuICAgIC8vIG5vIGV4aXN0aW5nIGhvb2tcclxuICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW3dyYXBwZWRIb29rXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKGlzRGVmKG9sZEhvb2suZm5zKSAmJiBpc1RydWUob2xkSG9vay5tZXJnZWQpKSB7XHJcbiAgICAgIC8vIGFscmVhZHkgYSBtZXJnZWQgaW52b2tlclxyXG4gICAgICBpbnZva2VyID0gb2xkSG9vaztcclxuICAgICAgaW52b2tlci5mbnMucHVzaCh3cmFwcGVkSG9vayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBleGlzdGluZyBwbGFpbiBob29rXHJcbiAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW29sZEhvb2ssIHdyYXBwZWRIb29rXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnZva2VyLm1lcmdlZCA9IHRydWU7XHJcbiAgZGVmW2hvb2tLZXldID0gaW52b2tlcjtcclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcclxuICBkYXRhLFxyXG4gIEN0b3IsXHJcbiAgdGFnXHJcbikge1xyXG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxyXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxyXG4gIC8vIGNvbXBvbmVudCBpdHNlbGYuXHJcbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xyXG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciByZXMgPSB7fTtcclxuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xyXG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XHJcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xyXG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAga2V5ICE9PSBrZXlJbkxvd2VyQ2FzZSAmJlxyXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRpcChcclxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xyXG4gICAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh0YWcgfHwgQ3RvcikpICsgXCIsIGJ1dCB0aGUgZGVjbGFyZWQgcHJvcCBuYW1lIGlzXCIgK1xyXG4gICAgICAgICAgICBcIiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuIFwiICtcclxuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcclxuICAgICAgICAgICAgXCJwcm9wcyBuZWVkIHRvIHVzZSB0aGVpciBrZWJhYi1jYXNlIGVxdWl2YWxlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIFwiICtcclxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZXMuIFlvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIGFsdEtleSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGtleSArIFwiXFxcIi5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxyXG4gICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb3AgKFxyXG4gIHJlcyxcclxuICBoYXNoLFxyXG4gIGtleSxcclxuICBhbHRLZXksXHJcbiAgcHJlc2VydmVcclxuKSB7XHJcbiAgaWYgKGlzRGVmKGhhc2gpKSB7XHJcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcclxuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XHJcbiAgICAgIGlmICghcHJlc2VydmUpIHtcclxuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XHJcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xyXG4gICAgICBpZiAoIXByZXNlcnZlKSB7XHJcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLyogICovXHJcblxyXG4vLyBUaGUgdGVtcGxhdGUgY29tcGlsZXIgYXR0ZW1wdHMgdG8gbWluaW1pemUgdGhlIG5lZWQgZm9yIG5vcm1hbGl6YXRpb24gYnlcclxuLy8gc3RhdGljYWxseSBhbmFseXppbmcgdGhlIHRlbXBsYXRlIGF0IGNvbXBpbGUgdGltZS5cclxuLy9cclxuLy8gRm9yIHBsYWluIEhUTUwgbWFya3VwLCBub3JtYWxpemF0aW9uIGNhbiBiZSBjb21wbGV0ZWx5IHNraXBwZWQgYmVjYXVzZSB0aGVcclxuLy8gZ2VuZXJhdGVkIHJlbmRlciBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIHJldHVybiBBcnJheTxWTm9kZT4uIFRoZXJlIGFyZVxyXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XHJcblxyXG4vLyAxLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb21wb25lbnRzIC0gYmVjYXVzZSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcclxuLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXHJcbi8vIHRoaW5nIHdpdGggQXJyYXkucHJvdG90eXBlLmNvbmNhdC4gSXQgaXMgZ3VhcmFudGVlZCB0byBiZSBvbmx5IDEtbGV2ZWwgZGVlcFxyXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXHJcbmZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xyXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjaGlsZHJlblxyXG59XHJcblxyXG4vLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxyXG4vLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxyXG4vLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cclxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxyXG4gICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cclxuICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcclxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxyXG4gICAgICA6IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1RleHROb2RlIChub2RlKSB7XHJcbiAgcmV0dXJuIGlzRGVmKG5vZGUpICYmIGlzRGVmKG5vZGUudGV4dCkgJiYgaXNGYWxzZShub2RlLmlzQ29tbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XHJcbiAgdmFyIHJlcyA9IFtdO1xyXG4gIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XHJcbiAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjID0gY2hpbGRyZW5baV07XHJcbiAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cclxuICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xyXG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xyXG4gICAgLy8gIG5lc3RlZFxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcclxuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XHJcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xyXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcclxuICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcclxuICAgICAgICAgIGMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xyXG4gICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xyXG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcclxuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXHJcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXHJcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcclxuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxyXG4gICAgICAgIHJlcy5wdXNoKGNyZWF0ZVRleHRWTm9kZShjKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpc1RleHROb2RlKGMpICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcclxuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXHJcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxyXG4gICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXHJcbiAgICAgICAgICBpc0RlZihjLnRhZykgJiZcclxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXHJcbiAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcclxuICAgICAgICAgIGMua2V5ID0gXCJfX3ZsaXN0XCIgKyBuZXN0ZWRJbmRleCArIFwiX1wiICsgaSArIFwiX19cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnB1c2goYyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGVuc3VyZUN0b3IgKGNvbXAsIGJhc2UpIHtcclxuICBpZiAoXHJcbiAgICBjb21wLl9fZXNNb2R1bGUgfHxcclxuICAgIChoYXNTeW1ib2wgJiYgY29tcFtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnTW9kdWxlJylcclxuICApIHtcclxuICAgIGNvbXAgPSBjb21wLmRlZmF1bHQ7XHJcbiAgfVxyXG4gIHJldHVybiBpc09iamVjdChjb21wKVxyXG4gICAgPyBiYXNlLmV4dGVuZChjb21wKVxyXG4gICAgOiBjb21wXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIgKFxyXG4gIGZhY3RvcnksXHJcbiAgZGF0YSxcclxuICBjb250ZXh0LFxyXG4gIGNoaWxkcmVuLFxyXG4gIHRhZ1xyXG4pIHtcclxuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcclxuICBub2RlLmFzeW5jRmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgbm9kZS5hc3luY01ldGEgPSB7IGRhdGE6IGRhdGEsIGNvbnRleHQ6IGNvbnRleHQsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGFnOiB0YWcgfTtcclxuICByZXR1cm4gbm9kZVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxyXG4gIGZhY3RvcnksXHJcbiAgYmFzZUN0b3IsXHJcbiAgY29udGV4dFxyXG4pIHtcclxuICBpZiAoaXNUcnVlKGZhY3RvcnkuZXJyb3IpICYmIGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xyXG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXHJcbiAgfVxyXG5cclxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcclxuICAgIHJldHVybiBmYWN0b3J5LnJlc29sdmVkXHJcbiAgfVxyXG5cclxuICBpZiAoaXNUcnVlKGZhY3RvcnkubG9hZGluZykgJiYgaXNEZWYoZmFjdG9yeS5sb2FkaW5nQ29tcCkpIHtcclxuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdDb21wXHJcbiAgfVxyXG5cclxuICBpZiAoaXNEZWYoZmFjdG9yeS5jb250ZXh0cykpIHtcclxuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xyXG4gICAgZmFjdG9yeS5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgY29udGV4dHMgPSBmYWN0b3J5LmNvbnRleHRzID0gW2NvbnRleHRdO1xyXG4gICAgdmFyIHN5bmMgPSB0cnVlO1xyXG5cclxuICAgIHZhciBmb3JjZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb250ZXh0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBjb250ZXh0c1tpXS4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAvLyBjYWNoZSByZXNvbHZlZFxyXG4gICAgICBmYWN0b3J5LnJlc29sdmVkID0gZW5zdXJlQ3RvcihyZXMsIGJhc2VDdG9yKTtcclxuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxyXG4gICAgICAvLyAoYXN5bmMgcmVzb2x2ZXMgYXJlIHNoaW1tZWQgYXMgc3luY2hyb25vdXMgZHVyaW5nIFNTUilcclxuICAgICAgaWYgKCFzeW5jKSB7XHJcbiAgICAgICAgZm9yY2VSZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXHJcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xyXG4gICAgICAgIChyZWFzb24gPyAoXCJcXG5SZWFzb246IFwiICsgcmVhc29uKSA6ICcnKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XHJcbiAgICAgICAgZmFjdG9yeS5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgZm9yY2VSZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xyXG4gICAgICBpZiAodHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gKCkgPT4gUHJvbWlzZVxyXG4gICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XHJcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChpc0RlZihyZXMuY29tcG9uZW50KSAmJiB0eXBlb2YgcmVzLmNvbXBvbmVudC50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcblxyXG4gICAgICAgIGlmIChpc0RlZihyZXMuZXJyb3IpKSB7XHJcbiAgICAgICAgICBmYWN0b3J5LmVycm9yQ29tcCA9IGVuc3VyZUN0b3IocmVzLmVycm9yLCBiYXNlQ3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNEZWYocmVzLmxvYWRpbmcpKSB7XHJcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xyXG4gICAgICAgICAgaWYgKHJlcy5kZWxheSA9PT0gMCkge1xyXG4gICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xyXG4gICAgICAgICAgICAgIHJlamVjdChcclxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCByZXMudGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3luYyA9IGZhbHNlO1xyXG4gICAgLy8gcmV0dXJuIGluIGNhc2UgcmVzb2x2ZWQgc3luY2hyb25vdXNseVxyXG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ1xyXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcclxuICAgICAgOiBmYWN0b3J5LnJlc29sdmVkXHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xyXG4gIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQgKGNoaWxkcmVuKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjID0gY2hpbGRyZW5baV07XHJcbiAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGluaXRFdmVudHMgKHZtKSB7XHJcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xyXG4gIC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xyXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xyXG4gIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbnZhciB0YXJnZXQ7XHJcblxyXG5mdW5jdGlvbiBhZGQgKGV2ZW50LCBmbiwgb25jZSkge1xyXG4gIGlmIChvbmNlKSB7XHJcbiAgICB0YXJnZXQuJG9uY2UoZXZlbnQsIGZuKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlJDEgKGV2ZW50LCBmbikge1xyXG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXHJcbiAgdm0sXHJcbiAgbGlzdGVuZXJzLFxyXG4gIG9sZExpc3RlbmVyc1xyXG4pIHtcclxuICB0YXJnZXQgPSB2bTtcclxuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIHZtKTtcclxuICB0YXJnZXQgPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcclxuICB2YXIgaG9va1JFID0gL15ob29rOi87XHJcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XHJcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcclxuXHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcyQxLiRvbihldmVudFtpXSwgZm4pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcclxuICAgICAgLy8gb3B0aW1pemUgaG9vazpldmVudCBjb3N0IGJ5IHVzaW5nIGEgYm9vbGVhbiBmbGFnIG1hcmtlZCBhdCByZWdpc3RyYXRpb25cclxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXHJcbiAgICAgIGlmIChob29rUkUudGVzdChldmVudCkpIHtcclxuICAgICAgICB2bS5faGFzSG9va0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZtXHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICBmdW5jdGlvbiBvbiAoKSB7XHJcbiAgICAgIHZtLiRvZmYoZXZlbnQsIG9uKTtcclxuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBvbi5mbiA9IGZuO1xyXG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XHJcbiAgICByZXR1cm4gdm1cclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XHJcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcclxuXHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgLy8gYWxsXHJcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgIHJldHVybiB2bVxyXG4gICAgfVxyXG4gICAgLy8gYXJyYXkgb2YgZXZlbnRzXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICB0aGlzJDEuJG9mZihldmVudFtpXSwgZm4pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2bVxyXG4gICAgfVxyXG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcclxuICAgIGlmICghY2JzKSB7XHJcbiAgICAgIHJldHVybiB2bVxyXG4gICAgfVxyXG4gICAgaWYgKCFmbikge1xyXG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XHJcbiAgICAgIHJldHVybiB2bVxyXG4gICAgfVxyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcclxuICAgICAgdmFyIGNiO1xyXG4gICAgICB2YXIgaSQxID0gY2JzLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGkkMS0tKSB7XHJcbiAgICAgICAgY2IgPSBjYnNbaSQxXTtcclxuICAgICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICAgICAgY2JzLnNwbGljZShpJDEsIDEpO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2bVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICB2YXIgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XHJcbiAgICAgICAgdGlwKFxyXG4gICAgICAgICAgXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArXHJcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXHJcbiAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIHlvdSBjYW5ub3QgdXNlIFwiICtcclxuICAgICAgICAgIFwidi1vbiB0byBsaXN0ZW4gdG8gY2FtZWxDYXNlIGV2ZW50cyB3aGVuIHVzaW5nIGluLURPTSB0ZW1wbGF0ZXMuIFwiICtcclxuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XHJcbiAgICBpZiAoY2JzKSB7XHJcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xyXG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNic1tpXS5hcHBseSh2bSwgYXJncyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIChcImV2ZW50IGhhbmRsZXIgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2bVxyXG4gIH07XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXHJcbiAgY2hpbGRyZW4sXHJcbiAgY29udGV4dFxyXG4pIHtcclxuICB2YXIgc2xvdHMgPSB7fTtcclxuICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gc2xvdHNcclxuICB9XHJcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xyXG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnNsb3QpIHtcclxuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcclxuICAgIH1cclxuICAgIC8vIG5hbWVkIHNsb3RzIHNob3VsZCBvbmx5IGJlIHJlc3BlY3RlZCBpZiB0aGUgdm5vZGUgd2FzIHJlbmRlcmVkIGluIHRoZVxyXG4gICAgLy8gc2FtZSBjb250ZXh0LlxyXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcclxuICAgICAgZGF0YSAmJiBkYXRhLnNsb3QgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xyXG4gICAgICB2YXIgc2xvdCA9IChzbG90c1tuYW1lXSB8fCAoc2xvdHNbbmFtZV0gPSBbXSkpO1xyXG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XHJcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAoc2xvdHMuZGVmYXVsdCB8fCAoc2xvdHMuZGVmYXVsdCA9IFtdKSkucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxyXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xyXG4gICAgaWYgKHNsb3RzW25hbWUkMV0uZXZlcnkoaXNXaGl0ZXNwYWNlKSkge1xyXG4gICAgICBkZWxldGUgc2xvdHNbbmFtZSQxXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNsb3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAobm9kZSkge1xyXG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxyXG4gIGZucywgLy8gc2VlIGZsb3cvdm5vZGVcclxuICByZXNcclxuKSB7XHJcbiAgcmVzID0gcmVzIHx8IHt9O1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnNbaV0pKSB7XHJcbiAgICAgIHJlc29sdmVTY29wZWRTbG90cyhmbnNbaV0sIHJlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNbZm5zW2ldLmtleV0gPSBmbnNbaV0uZm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xyXG52YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBpbml0TGlmZWN5Y2xlICh2bSkge1xyXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XHJcblxyXG4gIC8vIGxvY2F0ZSBmaXJzdCBub24tYWJzdHJhY3QgcGFyZW50XHJcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xyXG4gIGlmIChwYXJlbnQgJiYgIW9wdGlvbnMuYWJzdHJhY3QpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuJG9wdGlvbnMuYWJzdHJhY3QgJiYgcGFyZW50LiRwYXJlbnQpIHtcclxuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xyXG4gIH1cclxuXHJcbiAgdm0uJHBhcmVudCA9IHBhcmVudDtcclxuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xyXG5cclxuICB2bS4kY2hpbGRyZW4gPSBbXTtcclxuICB2bS4kcmVmcyA9IHt9O1xyXG5cclxuICB2bS5fd2F0Y2hlciA9IG51bGw7XHJcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcclxuICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcclxuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xyXG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgaWYgKHZtLl9pc01vdW50ZWQpIHtcclxuICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcclxuICAgIH1cclxuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XHJcbiAgICB2YXIgcHJldlZub2RlID0gdm0uX3Zub2RlO1xyXG4gICAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xyXG4gICAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcclxuICAgIHZtLl92bm9kZSA9IHZub2RlO1xyXG4gICAgLy8gVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gaXMgaW5qZWN0ZWQgaW4gZW50cnkgcG9pbnRzXHJcbiAgICAvLyBiYXNlZCBvbiB0aGUgcmVuZGVyaW5nIGJhY2tlbmQgdXNlZC5cclxuICAgIGlmICghcHJldlZub2RlKSB7XHJcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyXHJcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhcclxuICAgICAgICB2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlIC8qIHJlbW92ZU9ubHkgKi8sXHJcbiAgICAgICAgdm0uJG9wdGlvbnMuX3BhcmVudEVsbSxcclxuICAgICAgICB2bS4kb3B0aW9ucy5fcmVmRWxtXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIG5vIG5lZWQgZm9yIHRoZSByZWYgbm9kZXMgYWZ0ZXIgaW5pdGlhbCBwYXRjaFxyXG4gICAgICAvLyB0aGlzIHByZXZlbnRzIGtlZXBpbmcgYSBkZXRhY2hlZCBET00gdHJlZSBpbiBtZW1vcnkgKCM1ODUxKVxyXG4gICAgICB2bS4kb3B0aW9ucy5fcGFyZW50RWxtID0gdm0uJG9wdGlvbnMuX3JlZkVsbSA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB1cGRhdGVzXHJcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcclxuICAgIH1cclxuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xyXG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXHJcbiAgICBpZiAocHJldkVsKSB7XHJcbiAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh2bS4kZWwpIHtcclxuICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcclxuICAgIH1cclxuICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcclxuICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XHJcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxyXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcclxuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcclxuICAgIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XHJcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcclxuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdm0uJG9wdGlvbnMuYWJzdHJhY3QpIHtcclxuICAgICAgcmVtb3ZlKHBhcmVudC4kY2hpbGRyZW4sIHZtKTtcclxuICAgIH1cclxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXHJcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcclxuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcclxuICAgIH1cclxuICAgIHZhciBpID0gdm0uX3dhdGNoZXJzLmxlbmd0aDtcclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxyXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXHJcbiAgICBpZiAodm0uX2RhdGEuX19vYl9fKSB7XHJcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XHJcbiAgICB9XHJcbiAgICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cclxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICAvLyBpbnZva2UgZGVzdHJveSBob29rcyBvbiBjdXJyZW50IHJlbmRlcmVkIHRyZWVcclxuICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpO1xyXG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xyXG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcclxuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXHJcbiAgICB2bS4kb2ZmKCk7XHJcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcclxuICAgIGlmICh2bS4kZWwpIHtcclxuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gcmVsZWFzZSBjaXJjdWxhciByZWZlcmVuY2UgKCM2NzU5KVxyXG4gICAgaWYgKHZtLiR2bm9kZSkge1xyXG4gICAgICB2bS4kdm5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCAoXHJcbiAgdm0sXHJcbiAgZWwsXHJcbiAgaHlkcmF0aW5nXHJcbikge1xyXG4gIHZtLiRlbCA9IGVsO1xyXG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XHJcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVZOb2RlO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgIGlmICgodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHx8XHJcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgJ1lvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCBvZiBWdWUgd2hlcmUgdGhlIHRlbXBsYXRlICcgK1xyXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXHJcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxyXG4gICAgICAgICAgdm1cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXHJcbiAgICAgICAgICB2bVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xyXG5cclxuICB2YXIgdXBkYXRlQ29tcG9uZW50O1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XHJcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBuYW1lID0gdm0uX25hbWU7XHJcbiAgICAgIHZhciBpZCA9IHZtLl91aWQ7XHJcbiAgICAgIHZhciBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyBpZDtcclxuICAgICAgdmFyIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgaWQ7XHJcblxyXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcclxuICAgICAgdmFyIHZub2RlID0gdm0uX3JlbmRlcigpO1xyXG4gICAgICBtYXJrKGVuZFRhZyk7XHJcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHJlbmRlclwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XHJcblxyXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcclxuICAgICAgdm0uX3VwZGF0ZSh2bm9kZSwgaHlkcmF0aW5nKTtcclxuICAgICAgbWFyayhlbmRUYWcpO1xyXG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiBwYXRjaFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXHJcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcclxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXHJcbiAgbmV3IFdhdGNoZXIodm0sIHVwZGF0ZUNvbXBvbmVudCwgbm9vcCwgbnVsbCwgdHJ1ZSAvKiBpc1JlbmRlcldhdGNoZXIgKi8pO1xyXG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xyXG5cclxuICAvLyBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlLCBjYWxsIG1vdW50ZWQgb24gc2VsZlxyXG4gIC8vIG1vdW50ZWQgaXMgY2FsbGVkIGZvciByZW5kZXItY3JlYXRlZCBjaGlsZCBjb21wb25lbnRzIGluIGl0cyBpbnNlcnRlZCBob29rXHJcbiAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XHJcbiAgICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIGNhbGxIb29rKHZtLCAnbW91bnRlZCcpO1xyXG4gIH1cclxuICByZXR1cm4gdm1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRDb21wb25lbnQgKFxyXG4gIHZtLFxyXG4gIHByb3BzRGF0YSxcclxuICBsaXN0ZW5lcnMsXHJcbiAgcGFyZW50Vm5vZGUsXHJcbiAgcmVuZGVyQ2hpbGRyZW5cclxuKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cclxuICAvLyB3ZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIG92ZXJ3cml0aW5nICRvcHRpb25zLl9yZW5kZXJDaGlsZHJlblxyXG4gIHZhciBoYXNDaGlsZHJlbiA9ICEhKFxyXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xyXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xyXG4gICAgcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cyB8fCAvLyBoYXMgbmV3IHNjb3BlZCBzbG90c1xyXG4gICAgdm0uJHNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAvLyBoYXMgb2xkIHNjb3BlZCBzbG90c1xyXG4gICk7XHJcblxyXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xyXG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXHJcblxyXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcclxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcclxuICB9XHJcbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XHJcblxyXG4gIC8vIHVwZGF0ZSAkYXR0cnMgYW5kICRsaXN0ZW5lcnMgaGFzaFxyXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxyXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXHJcbiAgdm0uJGF0dHJzID0gcGFyZW50Vm5vZGUuZGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdDtcclxuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xyXG5cclxuICAvLyB1cGRhdGUgcHJvcHNcclxuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XHJcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xyXG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xyXG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XHJcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cclxuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcclxuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcclxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XHJcbiAgdmFyIG9sZExpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XHJcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcclxuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcclxuXHJcbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cclxuICBpZiAoaGFzQ2hpbGRyZW4pIHtcclxuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XHJcbiAgICB2bS4kZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XHJcbiAgd2hpbGUgKHZtICYmICh2bSA9IHZtLiRwYXJlbnQpKSB7XHJcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcclxuICBpZiAoZGlyZWN0KSB7XHJcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XHJcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcclxuICAgIH1cclxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcclxuICBpZiAoZGlyZWN0KSB7XHJcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xyXG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xyXG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xyXG4gICAgfVxyXG4gICAgY2FsbEhvb2sodm0sICdkZWFjdGl2YXRlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XHJcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xyXG4gIHB1c2hUYXJnZXQoKTtcclxuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcclxuICBpZiAoaGFuZGxlcnMpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaGFuZGxlcnNbaV0uY2FsbCh2bSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKGhvb2sgKyBcIiBob29rXCIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xyXG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xyXG4gIH1cclxuICBwb3BUYXJnZXQoKTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG5cclxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XHJcblxyXG52YXIgcXVldWUgPSBbXTtcclxudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XHJcbnZhciBoYXMgPSB7fTtcclxudmFyIGNpcmN1bGFyID0ge307XHJcbnZhciB3YWl0aW5nID0gZmFsc2U7XHJcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xyXG52YXIgaW5kZXggPSAwO1xyXG5cclxuLyoqXHJcbiAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xyXG4gIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcclxuICBoYXMgPSB7fTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgY2lyY3VsYXIgPSB7fTtcclxuICB9XHJcbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cclxuICovXHJcbmZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVyUXVldWUgKCkge1xyXG4gIGZsdXNoaW5nID0gdHJ1ZTtcclxuICB2YXIgd2F0Y2hlciwgaWQ7XHJcblxyXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxyXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0OlxyXG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcclxuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXHJcbiAgLy8gMi4gQSBjb21wb25lbnQncyB1c2VyIHdhdGNoZXJzIGFyZSBydW4gYmVmb3JlIGl0cyByZW5kZXIgd2F0Y2hlciAoYmVjYXVzZVxyXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcclxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxyXG4gIC8vICAgIGl0cyB3YXRjaGVycyBjYW4gYmUgc2tpcHBlZC5cclxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XHJcblxyXG4gIC8vIGRvIG5vdCBjYWNoZSBsZW5ndGggYmVjYXVzZSBtb3JlIHdhdGNoZXJzIG1pZ2h0IGJlIHB1c2hlZFxyXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xyXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgd2F0Y2hlciA9IHF1ZXVlW2luZGV4XTtcclxuICAgIGlkID0gd2F0Y2hlci5pZDtcclxuICAgIGhhc1tpZF0gPSBudWxsO1xyXG4gICAgd2F0Y2hlci5ydW4oKTtcclxuICAgIC8vIGluIGRldiBidWlsZCwgY2hlY2sgYW5kIHN0b3AgY2lyY3VsYXIgdXBkYXRlcy5cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xyXG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcclxuICAgICAgaWYgKGNpcmN1bGFyW2lkXSA+IE1BWF9VUERBVEVfQ09VTlQpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxyXG4gICAgICAgICAgICB3YXRjaGVyLnVzZXJcclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXHJcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHdhdGNoZXIudm1cclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcclxuICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xyXG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xyXG5cclxuICByZXNldFNjaGVkdWxlclN0YXRlKCk7XHJcblxyXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xyXG4gIGNhbGxBY3RpdmF0ZWRIb29rcyhhY3RpdmF0ZWRRdWV1ZSk7XHJcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xyXG5cclxuICAvLyBkZXZ0b29sIGhvb2tcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XHJcbiAgICBkZXZ0b29scy5lbWl0KCdmbHVzaCcpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcclxuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcclxuICB3aGlsZSAoaS0tKSB7XHJcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xyXG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcclxuICAgIGlmICh2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlciAmJiB2bS5faXNNb3VudGVkKSB7XHJcbiAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFF1ZXVlIGEga2VwdC1hbGl2ZSBjb21wb25lbnQgdGhhdCB3YXMgYWN0aXZhdGVkIGR1cmluZyBwYXRjaC5cclxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gcXVldWVBY3RpdmF0ZWRDb21wb25lbnQgKHZtKSB7XHJcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxyXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXHJcbiAgdm0uX2luYWN0aXZlID0gZmFsc2U7XHJcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBxdWV1ZVtpXS5faW5hY3RpdmUgPSB0cnVlO1xyXG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxyXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcclxuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcclxuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xyXG4gIGlmIChoYXNbaWRdID09IG51bGwpIHtcclxuICAgIGhhc1tpZF0gPSB0cnVlO1xyXG4gICAgaWYgKCFmbHVzaGluZykge1xyXG4gICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxyXG4gICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxyXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XHJcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XHJcbiAgICAgICAgaS0tO1xyXG4gICAgICB9XHJcbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XHJcbiAgICB9XHJcbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcclxuICAgIGlmICghd2FpdGluZykge1xyXG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcclxuICAgICAgbmV4dFRpY2soZmx1c2hTY2hlZHVsZXJRdWV1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciB1aWQkMSA9IDA7XHJcblxyXG4vKipcclxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXHJcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXHJcbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxyXG4gKi9cclxudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcclxuICB2bSxcclxuICBleHBPckZuLFxyXG4gIGNiLFxyXG4gIG9wdGlvbnMsXHJcbiAgaXNSZW5kZXJXYXRjaGVyXHJcbikge1xyXG4gIHRoaXMudm0gPSB2bTtcclxuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XHJcbiAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XHJcbiAgfVxyXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xyXG4gIC8vIG9wdGlvbnNcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XHJcbiAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcclxuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xyXG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuZGVlcCA9IHRoaXMudXNlciA9IHRoaXMubGF6eSA9IHRoaXMuc3luYyA9IGZhbHNlO1xyXG4gIH1cclxuICB0aGlzLmNiID0gY2I7XHJcbiAgdGhpcy5pZCA9ICsrdWlkJDE7IC8vIHVpZCBmb3IgYmF0Y2hpbmdcclxuICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcclxuICB0aGlzLmRlcHMgPSBbXTtcclxuICB0aGlzLm5ld0RlcHMgPSBbXTtcclxuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XHJcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgX1NldCgpO1xyXG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuICAgID8gZXhwT3JGbi50b1N0cmluZygpXHJcbiAgICA6ICcnO1xyXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcclxuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcclxuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxyXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xyXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXHJcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcclxuICAgICAgICB2bVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiB0aGlzLmdldCgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cclxuICovXHJcbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XHJcbiAgcHVzaFRhcmdldCh0aGlzKTtcclxuICB2YXIgdmFsdWU7XHJcbiAgdmFyIHZtID0gdGhpcy52bTtcclxuICB0cnkge1xyXG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKHRoaXMudXNlcikge1xyXG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IGVcclxuICAgIH1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXHJcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcclxuICAgIGlmICh0aGlzLmRlZXApIHtcclxuICAgICAgdHJhdmVyc2UodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcG9wVGFyZ2V0KCk7XHJcbiAgICB0aGlzLmNsZWFudXBEZXBzKCk7XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXHJcbiAqL1xyXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xyXG4gIHZhciBpZCA9IGRlcC5pZDtcclxuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcclxuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XHJcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApO1xyXG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XHJcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXHJcbiAqL1xyXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcclxuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xyXG5cclxuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XHJcbiAgd2hpbGUgKGktLSkge1xyXG4gICAgdmFyIGRlcCA9IHRoaXMkMS5kZXBzW2ldO1xyXG4gICAgaWYgKCF0aGlzJDEubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XHJcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyQxKTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xyXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XHJcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XHJcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcclxuICB0bXAgPSB0aGlzLmRlcHM7XHJcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xyXG4gIHRoaXMubmV3RGVwcyA9IHRtcDtcclxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cclxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cclxuICovXHJcbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAodGhpcy5sYXp5KSB7XHJcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xyXG4gICAgdGhpcy5ydW4oKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcXVldWVXYXRjaGVyKHRoaXMpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cclxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlci5cclxuICovXHJcbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XHJcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxyXG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cclxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxyXG4gICAgICAvLyBoYXZlIG11dGF0ZWQuXHJcbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxyXG4gICAgICB0aGlzLmRlZXBcclxuICAgICkge1xyXG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXHJcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMudXNlcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cclxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxyXG4gKi9cclxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZSAoKSB7XHJcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XHJcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxyXG4gKi9cclxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcclxuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xyXG5cclxuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XHJcbiAgd2hpbGUgKGktLSkge1xyXG4gICAgdGhpcyQxLmRlcHNbaV0uZGVwZW5kKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxyXG4gKi9cclxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XHJcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcclxuXHJcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XHJcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XHJcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxyXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XHJcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIHRoaXMkMS5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzJDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XHJcbiAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgZ2V0OiBub29wLFxyXG4gIHNldDogbm9vcFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcclxuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xyXG4gICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldXHJcbiAgfTtcclxuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xyXG4gICAgdGhpc1tzb3VyY2VLZXldW2tleV0gPSB2YWw7XHJcbiAgfTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcclxuICB2bS5fd2F0Y2hlcnMgPSBbXTtcclxuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xyXG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cclxuICBpZiAob3B0cy5tZXRob2RzKSB7IGluaXRNZXRob2RzKHZtLCBvcHRzLm1ldGhvZHMpOyB9XHJcbiAgaWYgKG9wdHMuZGF0YSkge1xyXG4gICAgaW5pdERhdGEodm0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XHJcbiAgfVxyXG4gIGlmIChvcHRzLmNvbXB1dGVkKSB7IGluaXRDb21wdXRlZCh2bSwgb3B0cy5jb21wdXRlZCk7IH1cclxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xyXG4gICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xyXG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XHJcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XHJcbiAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcclxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cclxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xyXG4gIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcclxuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcclxuICBpZiAoIWlzUm9vdCkge1xyXG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcclxuICB9XHJcbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcclxuICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xyXG4gICAgICBpZiAoaXNSZXNlcnZlZEF0dHJpYnV0ZShoeXBoZW5hdGVkS2V5KSB8fFxyXG4gICAgICAgICAgY29uZmlnLmlzUmVzZXJ2ZWRBdHRyKGh5cGhlbmF0ZWRLZXkpKSB7XHJcbiAgICAgICAgd2FybihcclxuICAgICAgICAgIChcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiKSxcclxuICAgICAgICAgIHZtXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBkZWZpbmVSZWFjdGl2ZShwcm9wcywga2V5LCB2YWx1ZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2bS4kcGFyZW50ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcclxuICAgICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcclxuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcGFyZW50IGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXHJcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcclxuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcclxuICAgICAgICAgICAgdm1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlZmluZVJlYWN0aXZlKHByb3BzLCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcclxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XHJcbiAgICAvLyBpbnN0YW50aWF0aW9uIGhlcmUuXHJcbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XHJcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xyXG4gIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XHJcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xyXG4gIGRhdGEgPSB2bS5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nXHJcbiAgICA/IGdldERhdGEoZGF0YSwgdm0pXHJcbiAgICA6IGRhdGEgfHwge307XHJcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XHJcbiAgICBkYXRhID0ge307XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXHJcbiAgICAgICdkYXRhIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIG9iamVjdDpcXG4nICtcclxuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXHJcbiAgICAgIHZtXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXHJcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcclxuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XHJcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcclxuICB3aGlsZSAoaS0tKSB7XHJcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGlmIChtZXRob2RzICYmIGhhc093bihtZXRob2RzLCBrZXkpKSB7XHJcbiAgICAgICAgd2FybihcclxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgZGF0YSBwcm9wZXJ0eS5cIiksXHJcbiAgICAgICAgICB2bVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcclxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxyXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXHJcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXHJcbiAgICAgICAgdm1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xyXG4gICAgICBwcm94eSh2bSwgXCJfZGF0YVwiLCBrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBvYnNlcnZlIGRhdGFcclxuICBvYnNlcnZlKGRhdGEsIHRydWUgLyogYXNSb290RGF0YSAqLyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XHJcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xyXG4gIHB1c2hUYXJnZXQoKTtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xyXG4gICAgcmV0dXJuIHt9XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHBvcFRhcmdldCgpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0sIGNvbXB1dGVkKSB7XHJcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXHJcbiAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIC8vIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGp1c3QgZ2V0dGVycyBkdXJpbmcgU1NSXHJcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcclxuXHJcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XHJcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XHJcbiAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXR0ZXIgPT0gbnVsbCkge1xyXG4gICAgICB3YXJuKFxyXG4gICAgICAgIChcIkdldHRlciBpcyBtaXNzaW5nIGZvciBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpLFxyXG4gICAgICAgIHZtXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc1NTUikge1xyXG4gICAgICAvLyBjcmVhdGUgaW50ZXJuYWwgd2F0Y2hlciBmb3IgdGhlIGNvbXB1dGVkIHByb3BlcnR5LlxyXG4gICAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIoXHJcbiAgICAgICAgdm0sXHJcbiAgICAgICAgZ2V0dGVyIHx8IG5vb3AsXHJcbiAgICAgICAgbm9vcCxcclxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxyXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcclxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cclxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcclxuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XHJcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgaWYgKGtleSBpbiB2bS4kZGF0YSkge1xyXG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gZGF0YS5cIiksIHZtKTtcclxuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcclxuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFzIGEgcHJvcC5cIiksIHZtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxyXG4gIHRhcmdldCxcclxuICBrZXksXHJcbiAgdXNlckRlZlxyXG4pIHtcclxuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcclxuICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxyXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcclxuICAgICAgOiB1c2VyRGVmO1xyXG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxyXG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXHJcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXHJcbiAgICAgICAgOiB1c2VyRGVmLmdldFxyXG4gICAgICA6IG5vb3A7XHJcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXRcclxuICAgICAgPyB1c2VyRGVmLnNldFxyXG4gICAgICA6IG5vb3A7XHJcbiAgfVxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcclxuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHdhcm4oXHJcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEdldHRlciAoa2V5KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcclxuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XHJcbiAgICBpZiAod2F0Y2hlcikge1xyXG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xyXG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xyXG4gICAgICAgIHdhdGNoZXIuZGVwZW5kKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xyXG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xyXG4gIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBpZiAobWV0aG9kc1trZXldID09IG51bGwpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbiB1bmRlZmluZWQgdmFsdWUgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXHJcbiAgICAgICAgICBcIkRpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/XCIsXHJcbiAgICAgICAgICB2bVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIHByb3AuXCIpLFxyXG4gICAgICAgICAgdm1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNvbmZsaWN0cyB3aXRoIGFuIGV4aXN0aW5nIFZ1ZSBpbnN0YW5jZSBtZXRob2QuIFwiICtcclxuICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV0gPT0gbnVsbCA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcclxuICBmb3IgKHZhciBrZXkgaW4gd2F0Y2gpIHtcclxuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXYXRjaGVyIChcclxuICB2bSxcclxuICBleHBPckZuLFxyXG4gIGhhbmRsZXIsXHJcbiAgb3B0aW9uc1xyXG4pIHtcclxuICBpZiAoaXNQbGFpbk9iamVjdChoYW5kbGVyKSkge1xyXG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XHJcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XHJcbiAgfVxyXG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XHJcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XHJcbiAgLy8gd2hlbiB1c2luZyBPYmplY3QuZGVmaW5lUHJvcGVydHksIHNvIHdlIGhhdmUgdG8gcHJvY2VkdXJhbGx5IGJ1aWxkIHVwXHJcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxyXG4gIHZhciBkYXRhRGVmID0ge307XHJcbiAgZGF0YURlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH07XHJcbiAgdmFyIHByb3BzRGVmID0ge307XHJcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xyXG4gICAgICB3YXJuKFxyXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXHJcbiAgICAgICAgJ1VzZSBuZXN0ZWQgZGF0YSBwcm9wZXJ0aWVzIGluc3RlYWQuJyxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRwcm9wcycsIHByb3BzRGVmKTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xyXG4gIFZ1ZS5wcm90b3R5cGUuJGRlbGV0ZSA9IGRlbDtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXHJcbiAgICBleHBPckZuLFxyXG4gICAgY2IsXHJcbiAgICBvcHRpb25zXHJcbiAgKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucylcclxuICAgIH1cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgb3B0aW9ucy51c2VyID0gdHJ1ZTtcclxuICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKTtcclxuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xyXG4gICAgICBjYi5jYWxsKHZtLCB3YXRjaGVyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xyXG4gICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcclxuICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XHJcbiAgaWYgKHByb3ZpZGUpIHtcclxuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxyXG4gICAgICA6IHByb3ZpZGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcclxuICB2YXIgcmVzdWx0ID0gcmVzb2x2ZUluamVjdCh2bS4kb3B0aW9ucy5pbmplY3QsIHZtKTtcclxuICBpZiAocmVzdWx0KSB7XHJcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xyXG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBkZWZpbmVSZWFjdGl2ZSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgd2FybihcclxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcclxuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcclxuICAgICAgICAgICAgXCJpbmplY3Rpb24gYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXHJcbiAgICAgICAgICAgIHZtXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlZmluZVJlYWN0aXZlKHZtLCBrZXksIHJlc3VsdFtrZXldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlSW5qZWN0IChpbmplY3QsIHZtKSB7XHJcbiAgaWYgKGluamVjdCkge1xyXG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcclxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcclxuICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaW5qZWN0LCBrZXkpLmVudW1lcmFibGVcclxuICAgICAgfSlcclxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcclxuICAgICAgdmFyIHByb3ZpZGVLZXkgPSBpbmplY3Rba2V5XS5mcm9tO1xyXG4gICAgICB2YXIgc291cmNlID0gdm07XHJcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlLl9wcm92aWRlZCAmJiBoYXNPd24oc291cmNlLl9wcm92aWRlZCwgcHJvdmlkZUtleSkpIHtcclxuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc291cmNlKSB7XHJcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcclxuICAgICAgICAgIHJlc3VsdFtrZXldID0gdHlwZW9mIHByb3ZpZGVEZWZhdWx0ID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcclxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLyoqXHJcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgdi1mb3IgbGlzdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcclxuICB2YWwsXHJcbiAgcmVuZGVyXHJcbikge1xyXG4gIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XHJcbiAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICByZXRbaV0gPSByZW5kZXIodmFsW2ldLCBpKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xyXG4gICAgICByZXRbaV0gPSByZW5kZXIoaSArIDEsIGkpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xyXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICByZXQgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xyXG4gICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGtleSA9IGtleXNbaV07XHJcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxba2V5XSwga2V5LCBpKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGlzRGVmKHJldCkpIHtcclxuICAgIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbi8qKlxyXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIDxzbG90PlxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXHJcbiAgbmFtZSxcclxuICBmYWxsYmFjayxcclxuICBwcm9wcyxcclxuICBiaW5kT2JqZWN0XHJcbikge1xyXG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcclxuICB2YXIgbm9kZXM7XHJcbiAgaWYgKHNjb3BlZFNsb3RGbikgeyAvLyBzY29wZWQgc2xvdFxyXG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgIGlmIChiaW5kT2JqZWN0KSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc09iamVjdChiaW5kT2JqZWN0KSkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnc2xvdCB2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCcsXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcykgfHwgZmFsbGJhY2s7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBzbG90Tm9kZXMgPSB0aGlzLiRzbG90c1tuYW1lXTtcclxuICAgIC8vIHdhcm4gZHVwbGljYXRlIHNsb3QgdXNhZ2VcclxuICAgIGlmIChzbG90Tm9kZXMpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2xvdE5vZGVzLl9yZW5kZXJlZCkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICBcIkR1cGxpY2F0ZSBwcmVzZW5jZSBvZiBzbG90IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgZm91bmQgaW4gdGhlIHNhbWUgcmVuZGVyIHRyZWUgXCIgK1xyXG4gICAgICAgICAgXCItIHRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgcmVuZGVyIGVycm9ycy5cIixcclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHNsb3ROb2Rlcy5fcmVuZGVyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZXMgPSBzbG90Tm9kZXMgfHwgZmFsbGJhY2s7XHJcbiAgfVxyXG5cclxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcclxuICBpZiAodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7IHNsb3Q6IHRhcmdldCB9LCBub2RlcylcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG5vZGVzXHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbi8qKlxyXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcclxuICovXHJcbmZ1bmN0aW9uIHJlc29sdmVGaWx0ZXIgKGlkKSB7XHJcbiAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGlzS2V5Tm90TWF0Y2ggKGV4cGVjdCwgYWN0dWFsKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXhwZWN0KSkge1xyXG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBleHBlY3QgIT09IGFjdHVhbFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cclxuICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXHJcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXHJcbiAgZXZlbnRLZXlDb2RlLFxyXG4gIGtleSxcclxuICBidWlsdEluS2V5Q29kZSxcclxuICBldmVudEtleU5hbWUsXHJcbiAgYnVpbHRJbktleU5hbWVcclxuKSB7XHJcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcclxuICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xyXG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2goYnVpbHRJbktleU5hbWUsIGV2ZW50S2V5TmFtZSlcclxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcclxuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKG1hcHBlZEtleUNvZGUsIGV2ZW50S2V5Q29kZSlcclxuICB9IGVsc2UgaWYgKGV2ZW50S2V5TmFtZSkge1xyXG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLyoqXHJcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBtZXJnaW5nIHYtYmluZD1cIm9iamVjdFwiIGludG8gYSBWTm9kZSdzIGRhdGEuXHJcbiAqL1xyXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxyXG4gIGRhdGEsXHJcbiAgdGFnLFxyXG4gIHZhbHVlLFxyXG4gIGFzUHJvcCxcclxuICBpc1N5bmNcclxuKSB7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXHJcbiAgICAgICAgJ3YtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IG9yIEFycmF5IHZhbHVlJyxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgaGFzaDtcclxuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcclxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxyXG4gICAgICAgICAgaXNSZXNlcnZlZEF0dHJpYnV0ZShrZXkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBoYXNoID0gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcclxuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxyXG4gICAgICAgICAgICA/IGRhdGEuZG9tUHJvcHMgfHwgKGRhdGEuZG9tUHJvcHMgPSB7fSlcclxuICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIShrZXkgaW4gaGFzaCkpIHtcclxuICAgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlW2tleV07XHJcblxyXG4gICAgICAgICAgaWYgKGlzU3luYykge1xyXG4gICAgICAgICAgICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xyXG4gICAgICAgICAgICBvblsoXCJ1cGRhdGU6XCIgKyBrZXkpXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLyoqXHJcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcclxuICBpbmRleCxcclxuICBpc0luRm9yXHJcbikge1xyXG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XHJcbiAgdmFyIHRyZWUgPSBjYWNoZWRbaW5kZXhdO1xyXG4gIC8vIGlmIGhhcyBhbHJlYWR5LXJlbmRlcmVkIHN0YXRpYyB0cmVlIGFuZCBub3QgaW5zaWRlIHYtZm9yLFxyXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxyXG4gIGlmICh0cmVlICYmICFpc0luRm9yKSB7XHJcbiAgICByZXR1cm4gdHJlZVxyXG4gIH1cclxuICAvLyBvdGhlcndpc2UsIHJlbmRlciBhIGZyZXNoIHRyZWUuXHJcbiAgdHJlZSA9IGNhY2hlZFtpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbChcclxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxyXG4gICAgbnVsbCxcclxuICAgIHRoaXMgLy8gZm9yIHJlbmRlciBmbnMgZ2VuZXJhdGVkIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCB0ZW1wbGF0ZXNcclxuICApO1xyXG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XHJcbiAgcmV0dXJuIHRyZWVcclxufVxyXG5cclxuLyoqXHJcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXHJcbiAqIEVmZmVjdGl2ZWx5IGl0IG1lYW5zIG1hcmtpbmcgdGhlIG5vZGUgYXMgc3RhdGljIHdpdGggYSB1bmlxdWUga2V5LlxyXG4gKi9cclxuZnVuY3Rpb24gbWFya09uY2UgKFxyXG4gIHRyZWUsXHJcbiAgaW5kZXgsXHJcbiAga2V5XHJcbikge1xyXG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19vbmNlX19cIiArIGluZGV4ICsgKGtleSA/IChcIl9cIiArIGtleSkgOiBcIlwiKSksIHRydWUpO1xyXG4gIHJldHVybiB0cmVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxyXG4gIHRyZWUsXHJcbiAga2V5LFxyXG4gIGlzT25jZVxyXG4pIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWVbaV0sIChrZXkgKyBcIl9cIiArIGkpLCBpc09uY2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xyXG4gIG5vZGUuaXNTdGF0aWMgPSB0cnVlO1xyXG4gIG5vZGUua2V5ID0ga2V5O1xyXG4gIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcclxuICAgICAgICAndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJyxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgb24gPSBkYXRhLm9uID0gZGF0YS5vbiA/IGV4dGVuZCh7fSwgZGF0YS5vbikgOiB7fTtcclxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gb25ba2V5XTtcclxuICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XHJcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XHJcbiAgdGFyZ2V0Ll9vID0gbWFya09uY2U7XHJcbiAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XHJcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XHJcbiAgdGFyZ2V0Ll9sID0gcmVuZGVyTGlzdDtcclxuICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xyXG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XHJcbiAgdGFyZ2V0Ll9pID0gbG9vc2VJbmRleE9mO1xyXG4gIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcclxuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xyXG4gIHRhcmdldC5fayA9IGNoZWNrS2V5Q29kZXM7XHJcbiAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xyXG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcclxuICB0YXJnZXQuX2UgPSBjcmVhdGVFbXB0eVZOb2RlO1xyXG4gIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcclxuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcclxuICBkYXRhLFxyXG4gIHByb3BzLFxyXG4gIGNoaWxkcmVuLFxyXG4gIHBhcmVudCxcclxuICBDdG9yXHJcbikge1xyXG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xyXG4gIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcclxuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXHJcbiAgdmFyIGNvbnRleHRWbTtcclxuICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xyXG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xyXG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXHJcbiAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB0aGUgY29udGV4dCB2bSBwYXNzZWQgaW4gaXMgYSBmdW5jdGlvbmFsIGNvbnRleHQgYXMgd2VsbC5cclxuICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxyXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxyXG4gICAgY29udGV4dFZtID0gcGFyZW50O1xyXG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXHJcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xyXG4gIH1cclxuICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XHJcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XHJcblxyXG4gIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XHJcbiAgdGhpcy5pbmplY3Rpb25zID0gcmVzb2x2ZUluamVjdChvcHRpb25zLmluamVjdCwgcGFyZW50KTtcclxuICB0aGlzLnNsb3RzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBwYXJlbnQpOyB9O1xyXG5cclxuICAvLyBzdXBwb3J0IGZvciBjb21waWxlZCBmdW5jdGlvbmFsIHRlbXBsYXRlXHJcbiAgaWYgKGlzQ29tcGlsZWQpIHtcclxuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxyXG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXHJcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcclxuICAgIHRoaXMuJHNjb3BlZFNsb3RzID0gZGF0YS5zY29wZWRTbG90cyB8fCBlbXB0eU9iamVjdDtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XHJcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcclxuICAgICAgdmFyIHZub2RlID0gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcclxuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xyXG4gICAgICAgIHZub2RlLmZuU2NvcGVJZCA9IG9wdGlvbnMuX3Njb3BlSWQ7XHJcbiAgICAgICAgdm5vZGUuZm5Db250ZXh0ID0gcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2bm9kZVxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pOyB9O1xyXG4gIH1cclxufVxyXG5cclxuaW5zdGFsbFJlbmRlckhlbHBlcnMoRnVuY3Rpb25hbFJlbmRlckNvbnRleHQucHJvdG90eXBlKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQgKFxyXG4gIEN0b3IsXHJcbiAgcHJvcHNEYXRhLFxyXG4gIGRhdGEsXHJcbiAgY29udGV4dFZtLFxyXG4gIGNoaWxkcmVuXHJcbikge1xyXG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xyXG4gIHZhciBwcm9wcyA9IHt9O1xyXG4gIHZhciBwcm9wT3B0aW9ucyA9IG9wdGlvbnMucHJvcHM7XHJcbiAgaWYgKGlzRGVmKHByb3BPcHRpb25zKSkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XHJcbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEuYXR0cnMpOyB9XHJcbiAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5wcm9wcyk7IH1cclxuICB9XHJcblxyXG4gIHZhciByZW5kZXJDb250ZXh0ID0gbmV3IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0KFxyXG4gICAgZGF0YSxcclxuICAgIHByb3BzLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjb250ZXh0Vm0sXHJcbiAgICBDdG9yXHJcbiAgKTtcclxuXHJcbiAgdmFyIHZub2RlID0gb3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCByZW5kZXJDb250ZXh0Ll9jLCByZW5kZXJDb250ZXh0KTtcclxuXHJcbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcclxuICAgIHJldHVybiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2RlLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucylcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XHJcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xyXG4gICAgdmFyIHJlcyA9IG5ldyBBcnJheSh2bm9kZXMubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zKSB7XHJcbiAgLy8gIzc4MTcgY2xvbmUgbm9kZSBiZWZvcmUgc2V0dGluZyBmbkNvbnRleHQsIG90aGVyd2lzZSBpZiB0aGUgbm9kZSBpcyByZXVzZWRcclxuICAvLyAoZS5nLiBpdCB3YXMgZnJvbSBhIGNhY2hlZCBub3JtYWwgc2xvdCkgdGhlIGZuQ29udGV4dCBjYXVzZXMgbmFtZWQgc2xvdHNcclxuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cclxuICB2YXIgY2xvbmUgPSBjbG9uZVZOb2RlKHZub2RlKTtcclxuICBjbG9uZS5mbkNvbnRleHQgPSBjb250ZXh0Vm07XHJcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcclxuICBpZiAoZGF0YS5zbG90KSB7XHJcbiAgICAoY2xvbmUuZGF0YSB8fCAoY2xvbmUuZGF0YSA9IHt9KSkuc2xvdCA9IGRhdGEuc2xvdDtcclxuICB9XHJcbiAgcmV0dXJuIGNsb25lXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcclxuICAgIHRvW2NhbWVsaXplKGtleSldID0gZnJvbVtrZXldO1xyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG5cclxuXHJcblxyXG4vLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGhvb2sgdG8gd2VleCBuYXRpdmUgcmVuZGVyIGVuZ2luZS5cclxuLy8gVGhlIGhvb2sgd2lsbCBiZSB0cmlnZ2VyZWQgYnkgbmF0aXZlLCBub3QgamF2YXNjcmlwdC5cclxuXHJcblxyXG4vLyBVcGRhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IHRvIHdlZXggbmF0aXZlIHJlbmRlciBlbmdpbmUuXHJcblxyXG4vKiAgKi9cclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9IYW5rczEwMTAwL3dlZXgtbmF0aXZlLWRpcmVjdGl2ZS90cmVlL21hc3Rlci9jb21wb25lbnRcclxuXHJcbi8vIGxpc3RlbmluZyBvbiBuYXRpdmUgY2FsbGJhY2tcclxuXHJcbi8qICAqL1xyXG5cclxuLyogICovXHJcblxyXG4vLyBpbmxpbmUgaG9va3MgdG8gYmUgaW52b2tlZCBvbiBjb21wb25lbnQgVk5vZGVzIGR1cmluZyBwYXRjaFxyXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcclxuICBpbml0OiBmdW5jdGlvbiBpbml0IChcclxuICAgIHZub2RlLFxyXG4gICAgaHlkcmF0aW5nLFxyXG4gICAgcGFyZW50RWxtLFxyXG4gICAgcmVmRWxtXHJcbiAgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXHJcbiAgICAgICF2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQgJiZcclxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmVcclxuICAgICkge1xyXG4gICAgICAvLyBrZXB0LWFsaXZlIGNvbXBvbmVudHMsIHRyZWF0IGFzIGEgcGF0Y2hcclxuICAgICAgdmFyIG1vdW50ZWROb2RlID0gdm5vZGU7IC8vIHdvcmsgYXJvdW5kIGZsb3dcclxuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlKFxyXG4gICAgICAgIHZub2RlLFxyXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLFxyXG4gICAgICAgIHBhcmVudEVsbSxcclxuICAgICAgICByZWZFbG1cclxuICAgICAgKTtcclxuICAgICAgY2hpbGQuJG1vdW50KGh5ZHJhdGluZyA/IHZub2RlLmVsbSA6IHVuZGVmaW5lZCwgaHlkcmF0aW5nKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xyXG4gICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcclxuICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxyXG4gICAgICBjaGlsZCxcclxuICAgICAgb3B0aW9ucy5wcm9wc0RhdGEsIC8vIHVwZGF0ZWQgcHJvcHNcclxuICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXHJcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXHJcbiAgICAgIG9wdGlvbnMuY2hpbGRyZW4gLy8gbmV3IGNoaWxkcmVuXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xyXG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XHJcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcclxuICAgICAgY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XHJcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcclxuICAgICAgICAvLyB2dWUtcm91dGVyIzEyMTJcclxuICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XHJcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXHJcbiAgICAgICAgLy8gb24gaW5jb3JyZWN0IGNoaWxkcmVuLiBJbnN0ZWFkIHdlIHB1c2ggdGhlbSBpbnRvIGEgcXVldWUgd2hpY2ggd2lsbFxyXG4gICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cclxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcclxuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xyXG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcclxuICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxyXG4gIEN0b3IsXHJcbiAgZGF0YSxcclxuICBjb250ZXh0LFxyXG4gIGNoaWxkcmVuLFxyXG4gIHRhZ1xyXG4pIHtcclxuICBpZiAoaXNVbmRlZihDdG9yKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xyXG5cclxuICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcclxuICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcclxuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XHJcbiAgfVxyXG5cclxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXHJcbiAgLy8gcmVqZWN0LlxyXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxyXG4gIHZhciBhc3luY0ZhY3Rvcnk7XHJcbiAgaWYgKGlzVW5kZWYoQ3Rvci5jaWQpKSB7XHJcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xyXG4gICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChhc3luY0ZhY3RvcnksIGJhc2VDdG9yLCBjb250ZXh0KTtcclxuICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxyXG4gICAgICAvLyBhcyBhIGNvbW1lbnQgbm9kZSBidXQgcHJlc2VydmVzIGFsbCB0aGUgcmF3IGluZm9ybWF0aW9uIGZvciB0aGUgbm9kZS5cclxuICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxyXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcclxuICAgICAgICBhc3luY0ZhY3RvcnksXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIHRhZ1xyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkYXRhID0gZGF0YSB8fCB7fTtcclxuXHJcbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxyXG4gIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxyXG4gIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XHJcblxyXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBkYXRhIGludG8gcHJvcHMgJiBldmVudHNcclxuICBpZiAoaXNEZWYoZGF0YS5tb2RlbCkpIHtcclxuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvLyBleHRyYWN0IHByb3BzXHJcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnKTtcclxuXHJcbiAgLy8gZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcclxuICB9XHJcblxyXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXHJcbiAgLy8gY2hpbGQgY29tcG9uZW50IGxpc3RlbmVycyBpbnN0ZWFkIG9mIERPTSBsaXN0ZW5lcnNcclxuICB2YXIgbGlzdGVuZXJzID0gZGF0YS5vbjtcclxuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxyXG4gIC8vIHNvIGl0IGdldHMgcHJvY2Vzc2VkIGR1cmluZyBwYXJlbnQgY29tcG9uZW50IHBhdGNoLlxyXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xyXG5cclxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5hYnN0cmFjdCkpIHtcclxuICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcclxuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XHJcblxyXG4gICAgLy8gd29yayBhcm91bmQgZmxvd1xyXG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XHJcbiAgICBkYXRhID0ge307XHJcbiAgICBpZiAoc2xvdCkge1xyXG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaW5zdGFsbCBjb21wb25lbnQgbWFuYWdlbWVudCBob29rcyBvbnRvIHRoZSBwbGFjZWhvbGRlciBub2RlXHJcbiAgaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpO1xyXG5cclxuICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciB2bm9kZVxyXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xyXG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcclxuICAgIChcInZ1ZS1jb21wb25lbnQtXCIgKyAoQ3Rvci5jaWQpICsgKG5hbWUgPyAoXCItXCIgKyBuYW1lKSA6ICcnKSksXHJcbiAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxyXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcclxuICAgIGFzeW5jRmFjdG9yeVxyXG4gICk7XHJcblxyXG4gIC8vIFdlZXggc3BlY2lmaWM6IGludm9rZSByZWN5Y2xlLWxpc3Qgb3B0aW1pemVkIEByZW5kZXIgZnVuY3Rpb24gZm9yXHJcbiAgLy8gZXh0cmFjdGluZyBjZWxsLXNsb3QgdGVtcGxhdGUuXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0hhbmtzMTAxMDAvd2VleC1uYXRpdmUtZGlyZWN0aXZlL3RyZWUvbWFzdGVyL2NvbXBvbmVudFxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIHJldHVybiB2bm9kZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlIChcclxuICB2bm9kZSwgLy8gd2Uga25vdyBpdCdzIE1vdW50ZWRDb21wb25lbnRWTm9kZSBidXQgZmxvdyBkb2Vzbid0XHJcbiAgcGFyZW50LCAvLyBhY3RpdmVJbnN0YW5jZSBpbiBsaWZlY3ljbGUgc3RhdGVcclxuICBwYXJlbnRFbG0sXHJcbiAgcmVmRWxtXHJcbikge1xyXG4gIHZhciBvcHRpb25zID0ge1xyXG4gICAgX2lzQ29tcG9uZW50OiB0cnVlLFxyXG4gICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxyXG4gICAgX3BhcmVudEVsbTogcGFyZW50RWxtIHx8IG51bGwsXHJcbiAgICBfcmVmRWxtOiByZWZFbG0gfHwgbnVsbFxyXG4gIH07XHJcbiAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlIHJlbmRlciBmdW5jdGlvbnNcclxuICB2YXIgaW5saW5lVGVtcGxhdGUgPSB2bm9kZS5kYXRhLmlubGluZVRlbXBsYXRlO1xyXG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcclxuICAgIG9wdGlvbnMucmVuZGVyID0gaW5saW5lVGVtcGxhdGUucmVuZGVyO1xyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBpbmxpbmVUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgdm5vZGUuY29tcG9uZW50T3B0aW9ucy5DdG9yKG9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc3RhbGxDb21wb25lbnRIb29rcyAoZGF0YSkge1xyXG4gIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xyXG4gICAgaG9va3Nba2V5XSA9IGNvbXBvbmVudFZOb2RlSG9va3Nba2V5XTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cclxuLy8gcHJvcCBhbmQgZXZlbnQgaGFuZGxlciByZXNwZWN0aXZlbHkuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsIChvcHRpb25zLCBkYXRhKSB7XHJcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XHJcbiAgdmFyIGV2ZW50ID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0JzsoZGF0YS5wcm9wcyB8fCAoZGF0YS5wcm9wcyA9IHt9KSlbcHJvcF0gPSBkYXRhLm1vZGVsLnZhbHVlO1xyXG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XHJcbiAgaWYgKGlzRGVmKG9uW2V2ZW50XSkpIHtcclxuICAgIG9uW2V2ZW50XSA9IFtkYXRhLm1vZGVsLmNhbGxiYWNrXS5jb25jYXQob25bZXZlbnRdKTtcclxuICB9IGVsc2Uge1xyXG4gICAgb25bZXZlbnRdID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xyXG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XHJcblxyXG4vLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxyXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoXHJcbiAgY29udGV4dCxcclxuICB0YWcsXHJcbiAgZGF0YSxcclxuICBjaGlsZHJlbixcclxuICBub3JtYWxpemF0aW9uVHlwZSxcclxuICBhbHdheXNOb3JtYWxpemVcclxuKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcclxuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gY2hpbGRyZW47XHJcbiAgICBjaGlsZHJlbiA9IGRhdGE7XHJcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBpZiAoaXNUcnVlKGFsd2F5c05vcm1hbGl6ZSkpIHtcclxuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcclxuICB9XHJcbiAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KGNvbnRleHQsIHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXHJcbiAgY29udGV4dCxcclxuICB0YWcsXHJcbiAgZGF0YSxcclxuICBjaGlsZHJlbixcclxuICBub3JtYWxpemF0aW9uVHlwZVxyXG4pIHtcclxuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcclxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcclxuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXHJcbiAgICAgIGNvbnRleHRcclxuICAgICk7XHJcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXHJcbiAgfVxyXG4gIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXHJcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XHJcbiAgICB0YWcgPSBkYXRhLmlzO1xyXG4gIH1cclxuICBpZiAoIXRhZykge1xyXG4gICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxyXG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxyXG4gIH1cclxuICAvLyB3YXJuIGFnYWluc3Qgbm9uLXByaW1pdGl2ZSBrZXlcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcclxuICApIHtcclxuICAgIHtcclxuICAgICAgd2FybihcclxuICAgICAgICAnQXZvaWQgdXNpbmcgbm9uLXByaW1pdGl2ZSB2YWx1ZSBhcyBrZXksICcgK1xyXG4gICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXHJcbiAgICAgICAgY29udGV4dFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBzdXBwb3J0IHNpbmdsZSBmdW5jdGlvbiBjaGlsZHJlbiBhcyBkZWZhdWx0IHNjb3BlZCBzbG90XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXHJcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcclxuICApIHtcclxuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xyXG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcclxuICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xyXG4gICAgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XHJcbiAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xyXG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XHJcbiAgfVxyXG4gIHZhciB2bm9kZSwgbnM7XHJcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB2YXIgQ3RvcjtcclxuICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XHJcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xyXG4gICAgICAvLyBwbGF0Zm9ybSBidWlsdC1pbiBlbGVtZW50c1xyXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcclxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXHJcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XHJcbiAgICAgIC8vIGNvbXBvbmVudFxyXG4gICAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xyXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xyXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxyXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcclxuICAgICAgICB0YWcsIGRhdGEsIGNoaWxkcmVuLFxyXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXHJcbiAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XHJcbiAgICByZXR1cm4gdm5vZGVcclxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xyXG4gICAgaWYgKGlzRGVmKG5zKSkgeyBhcHBseU5TKHZub2RlLCBucyk7IH1cclxuICAgIGlmIChpc0RlZihkYXRhKSkgeyByZWdpc3RlckRlZXBCaW5kaW5ncyhkYXRhKTsgfVxyXG4gICAgcmV0dXJuIHZub2RlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcclxuICB2bm9kZS5ucyA9IG5zO1xyXG4gIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xyXG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XHJcbiAgICBucyA9IHVuZGVmaW5lZDtcclxuICAgIGZvcmNlID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKGlzRGVmKHZub2RlLmNoaWxkcmVuKSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgIGlmIChpc0RlZihjaGlsZC50YWcpICYmIChcclxuICAgICAgICBpc1VuZGVmKGNoaWxkLm5zKSB8fCAoaXNUcnVlKGZvcmNlKSAmJiBjaGlsZC50YWcgIT09ICdzdmcnKSkpIHtcclxuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZWYgIzUzMThcclxuLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcclxuLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcclxuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcclxuICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcclxuICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xyXG4gIH1cclxuICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcclxuICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBpbml0UmVuZGVyICh2bSkge1xyXG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXHJcbiAgdm0uX3N0YXRpY1RyZWVzID0gbnVsbDsgLy8gdi1vbmNlIGNhY2hlZCB0cmVlc1xyXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XHJcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXHJcbiAgdmFyIHJlbmRlckNvbnRleHQgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5jb250ZXh0O1xyXG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiwgcmVuZGVyQ29udGV4dCk7XHJcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XHJcbiAgLy8gYmluZCB0aGUgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXHJcbiAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cclxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXHJcbiAgLy8gaW50ZXJuYWwgdmVyc2lvbiBpcyB1c2VkIGJ5IHJlbmRlciBmdW5jdGlvbnMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZXNcclxuICB2bS5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCBmYWxzZSk7IH07XHJcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXHJcbiAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXHJcbiAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XHJcblxyXG4gIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXHJcbiAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxyXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgZGVmaW5lUmVhY3RpdmUodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XHJcbiAgICB9LCB0cnVlKTtcclxuICAgIGRlZmluZVJlYWN0aXZlKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XHJcbiAgICB9LCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVmaW5lUmVhY3RpdmUodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xyXG4gICAgZGVmaW5lUmVhY3RpdmUodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1peGluIChWdWUpIHtcclxuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xyXG4gIGluc3RhbGxSZW5kZXJIZWxwZXJzKFZ1ZS5wcm90b3R5cGUpO1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XHJcbiAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcclxuICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xyXG5cclxuICAgIC8vIHJlc2V0IF9yZW5kZXJlZCBmbGFnIG9uIHNsb3RzIGZvciBkdXBsaWNhdGUgc2xvdCBjaGVja1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgZm9yICh2YXIga2V5IGluIHZtLiRzbG90cykge1xyXG4gICAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxyXG4gICAgICAgIHZtLiRzbG90c1trZXldLl9yZW5kZXJlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9wYXJlbnRWbm9kZSkge1xyXG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBfcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cyB8fCBlbXB0eU9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgcGFyZW50IHZub2RlLiB0aGlzIGFsbG93cyByZW5kZXIgZnVuY3Rpb25zIHRvIGhhdmUgYWNjZXNzXHJcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cclxuICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTtcclxuICAgIC8vIHJlbmRlciBzZWxmXHJcbiAgICB2YXIgdm5vZGU7XHJcbiAgICB0cnkge1xyXG4gICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XHJcbiAgICAgIC8vIHJldHVybiBlcnJvciByZW5kZXIgcmVzdWx0LFxyXG4gICAgICAvLyBvciBwcmV2aW91cyB2bm9kZSB0byBwcmV2ZW50IHJlbmRlciBlcnJvciBjYXVzaW5nIGJsYW5rIGNvbXBvbmVudFxyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmICh2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdm5vZGUgPSB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQsIGUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcclxuICAgICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxyXG4gICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgJ011bHRpcGxlIHJvb3Qgbm9kZXMgcmV0dXJuZWQgZnJvbSByZW5kZXIgZnVuY3Rpb24uIFJlbmRlciBmdW5jdGlvbiAnICtcclxuICAgICAgICAgICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLFxyXG4gICAgICAgICAgdm1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHBhcmVudFxyXG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xyXG4gICAgcmV0dXJuIHZub2RlXHJcbiAgfTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgdWlkJDMgPSAwO1xyXG5cclxuZnVuY3Rpb24gaW5pdE1peGluIChWdWUpIHtcclxuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAvLyBhIHVpZFxyXG4gICAgdm0uX3VpZCA9IHVpZCQzKys7XHJcblxyXG4gICAgdmFyIHN0YXJ0VGFnLCBlbmRUYWc7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XHJcbiAgICAgIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArICh2bS5fdWlkKTtcclxuICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XHJcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXHJcbiAgICB2bS5faXNWdWUgPSB0cnVlO1xyXG4gICAgLy8gbWVyZ2Ugb3B0aW9uc1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcclxuICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cclxuICAgICAgLy8gc2luY2UgZHluYW1pYyBvcHRpb25zIG1lcmdpbmcgaXMgcHJldHR5IHNsb3csIGFuZCBub25lIG9mIHRoZVxyXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cclxuICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxyXG4gICAgICAgIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnModm0uY29uc3RydWN0b3IpLFxyXG4gICAgICAgIG9wdGlvbnMgfHwge30sXHJcbiAgICAgICAgdm1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBpbml0UHJveHkodm0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XHJcbiAgICB9XHJcbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXHJcbiAgICB2bS5fc2VsZiA9IHZtO1xyXG4gICAgaW5pdExpZmVjeWNsZSh2bSk7XHJcbiAgICBpbml0RXZlbnRzKHZtKTtcclxuICAgIGluaXRSZW5kZXIodm0pO1xyXG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVDcmVhdGUnKTtcclxuICAgIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzXHJcbiAgICBpbml0U3RhdGUodm0pO1xyXG4gICAgaW5pdFByb3ZpZGUodm0pOyAvLyByZXNvbHZlIHByb3ZpZGUgYWZ0ZXIgZGF0YS9wcm9wc1xyXG4gICAgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xyXG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcclxuICAgICAgbWFyayhlbmRUYWcpO1xyXG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcclxuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XHJcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XHJcbiAgLy8gZG9pbmcgdGhpcyBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gZHluYW1pYyBlbnVtZXJhdGlvbi5cclxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcclxuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xyXG4gIG9wdHMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XHJcbiAgb3B0cy5fcGFyZW50RWxtID0gb3B0aW9ucy5fcGFyZW50RWxtO1xyXG4gIG9wdHMuX3JlZkVsbSA9IG9wdGlvbnMuX3JlZkVsbTtcclxuXHJcbiAgdmFyIHZub2RlQ29tcG9uZW50T3B0aW9ucyA9IHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnM7XHJcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xyXG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XHJcbiAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW47XHJcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcclxuXHJcbiAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XHJcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xyXG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcclxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcclxuICBpZiAoQ3Rvci5zdXBlcikge1xyXG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XHJcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XHJcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcclxuICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXHJcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cclxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcclxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XHJcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXHJcbiAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcclxuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xyXG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XHJcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVNb2RpZmllZE9wdGlvbnMgKEN0b3IpIHtcclxuICB2YXIgbW9kaWZpZWQ7XHJcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcclxuICB2YXIgZXh0ZW5kZWQgPSBDdG9yLmV4dGVuZE9wdGlvbnM7XHJcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcclxuICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XHJcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XHJcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxyXG4gICAgICBtb2RpZmllZFtrZXldID0gZGVkdXBlKGxhdGVzdFtrZXldLCBleHRlbmRlZFtrZXldLCBzZWFsZWRba2V5XSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtb2RpZmllZFxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWR1cGUgKGxhdGVzdCwgZXh0ZW5kZWQsIHNlYWxlZCkge1xyXG4gIC8vIGNvbXBhcmUgbGF0ZXN0IGFuZCBzZWFsZWQgdG8gZW5zdXJlIGxpZmVjeWNsZSBob29rcyB3b24ndCBiZSBkdXBsaWNhdGVkXHJcbiAgLy8gYmV0d2VlbiBtZXJnZXNcclxuICBpZiAoQXJyYXkuaXNBcnJheShsYXRlc3QpKSB7XHJcbiAgICB2YXIgcmVzID0gW107XHJcbiAgICBzZWFsZWQgPSBBcnJheS5pc0FycmF5KHNlYWxlZCkgPyBzZWFsZWQgOiBbc2VhbGVkXTtcclxuICAgIGV4dGVuZGVkID0gQXJyYXkuaXNBcnJheShleHRlbmRlZCkgPyBleHRlbmRlZCA6IFtleHRlbmRlZF07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGVzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyBwdXNoIG9yaWdpbmFsIG9wdGlvbnMgYW5kIG5vdCBzZWFsZWQgb3B0aW9ucyB0byBleGNsdWRlIGR1cGxpY2F0ZWQgb3B0aW9uc1xyXG4gICAgICBpZiAoZXh0ZW5kZWQuaW5kZXhPZihsYXRlc3RbaV0pID49IDAgfHwgc2VhbGVkLmluZGV4T2YobGF0ZXN0W2ldKSA8IDApIHtcclxuICAgICAgICByZXMucHVzaChsYXRlc3RbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBsYXRlc3RcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAhKHRoaXMgaW5zdGFuY2VvZiBWdWUpXHJcbiAgKSB7XHJcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XHJcbiAgfVxyXG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XHJcbn1cclxuXHJcbmluaXRNaXhpbihWdWUpO1xyXG5zdGF0ZU1peGluKFZ1ZSk7XHJcbmV2ZW50c01peGluKFZ1ZSk7XHJcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XHJcbnJlbmRlck1peGluKFZ1ZSk7XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGluaXRVc2UgKFZ1ZSkge1xyXG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcclxuICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcclxuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcclxuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XHJcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBtaXhpbik7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XHJcbiAgLyoqXHJcbiAgICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXHJcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxyXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxyXG4gICAqL1xyXG4gIFZ1ZS5jaWQgPSAwO1xyXG4gIHZhciBjaWQgPSAxO1xyXG5cclxuICAvKipcclxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxyXG4gICAqL1xyXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xyXG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XHJcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xyXG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XHJcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xyXG4gICAgaWYgKGNhY2hlZEN0b3JzW1N1cGVySWRdKSB7XHJcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcclxuICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBTdWIgPSBmdW5jdGlvbiBWdWVDb21wb25lbnQgKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xyXG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcclxuICAgIFN1Yi5jaWQgPSBjaWQrKztcclxuICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFxyXG4gICAgICBTdXBlci5vcHRpb25zLFxyXG4gICAgICBleHRlbmRPcHRpb25zXHJcbiAgICApO1xyXG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XHJcblxyXG4gICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cclxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXHJcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXHJcbiAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcclxuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcclxuICAgIH1cclxuICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xyXG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxyXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcclxuICAgIFN1Yi5taXhpbiA9IFN1cGVyLm1peGluO1xyXG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXHJcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXHJcbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xyXG4gICAgfSk7XHJcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXHJcbiAgICBpZiAobmFtZSkge1xyXG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXHJcbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxyXG4gICAgLy8gYmVlbiB1cGRhdGVkLlxyXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XHJcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XHJcbiAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpO1xyXG5cclxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXHJcbiAgICBjYWNoZWRDdG9yc1tTdXBlcklkXSA9IFN1YjtcclxuICAgIHJldHVybiBTdWJcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xyXG4gIHZhciBwcm9wcyA9IENvbXAub3B0aW9ucy5wcm9wcztcclxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcclxuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdENvbXB1dGVkJDEgKENvbXApIHtcclxuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XHJcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XHJcbiAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gaW5pdEFzc2V0UmVnaXN0ZXJzIChWdWUpIHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXHJcbiAgICovXHJcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxyXG4gICAgICBpZCxcclxuICAgICAgZGVmaW5pdGlvblxyXG4gICAgKSB7XHJcbiAgICAgIGlmICghZGVmaW5pdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcclxuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XHJcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XHJcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBkZWZpbml0aW9uID0geyBiaW5kOiBkZWZpbml0aW9uLCB1cGRhdGU6IGRlZmluaXRpb24gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lIChvcHRzKSB7XHJcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xyXG4gICAgcmV0dXJuIHBhdHRlcm4uaW5kZXhPZihuYW1lKSA+IC0xXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXHJcbiAgfSBlbHNlIGlmIChpc1JlZ0V4cChwYXR0ZXJuKSkge1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxyXG4gIH1cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XHJcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XHJcbiAgdmFyIGtleXMgPSBrZWVwQWxpdmVJbnN0YW5jZS5rZXlzO1xyXG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XHJcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XHJcbiAgICB2YXIgY2FjaGVkTm9kZSA9IGNhY2hlW2tleV07XHJcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xyXG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcclxuICAgICAgaWYgKG5hbWUgJiYgIWZpbHRlcihuYW1lKSkge1xyXG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxyXG4gIGNhY2hlLFxyXG4gIGtleSxcclxuICBrZXlzLFxyXG4gIGN1cnJlbnRcclxuKSB7XHJcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XHJcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XHJcbiAgICBjYWNoZWQkJDEuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcclxuICB9XHJcbiAgY2FjaGVba2V5XSA9IG51bGw7XHJcbiAgcmVtb3ZlKGtleXMsIGtleSk7XHJcbn1cclxuXHJcbnZhciBwYXR0ZXJuVHlwZXMgPSBbU3RyaW5nLCBSZWdFeHAsIEFycmF5XTtcclxuXHJcbnZhciBLZWVwQWxpdmUgPSB7XHJcbiAgbmFtZTogJ2tlZXAtYWxpdmUnLFxyXG4gIGFic3RyYWN0OiB0cnVlLFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxyXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxyXG4gICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCAoKSB7XHJcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHRoaXMua2V5cyA9IFtdO1xyXG4gIH0sXHJcblxyXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcclxuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xyXG5cclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzJDEuY2FjaGUpIHtcclxuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMkMS5jYWNoZSwga2V5LCB0aGlzJDEua2V5cyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XHJcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcclxuXHJcbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcclxuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcclxuICAgIHZhciB2bm9kZSA9IGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoc2xvdCk7XHJcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XHJcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xyXG4gICAgICAvLyBjaGVjayBwYXR0ZXJuXHJcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcclxuICAgICAgdmFyIHJlZiA9IHRoaXM7XHJcbiAgICAgIHZhciBpbmNsdWRlID0gcmVmLmluY2x1ZGU7XHJcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAvLyBub3QgaW5jbHVkZWRcclxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxyXG4gICAgICAgIC8vIGV4Y2x1ZGVkXHJcbiAgICAgICAgKGV4Y2x1ZGUgJiYgbmFtZSAmJiBtYXRjaGVzKGV4Y2x1ZGUsIG5hbWUpKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdm5vZGVcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcclxuICAgICAgdmFyIGNhY2hlID0gcmVmJDEuY2FjaGU7XHJcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcclxuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXHJcbiAgICAgICAgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcclxuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXHJcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXHJcbiAgICAgICAgOiB2bm9kZS5rZXk7XHJcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XHJcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xyXG4gICAgICAgIC8vIG1ha2UgY3VycmVudCBrZXkgZnJlc2hlc3RcclxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcclxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XHJcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgLy8gcHJ1bmUgb2xkZXN0IGVudHJ5XHJcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XHJcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxyXG4gIH1cclxufVxyXG5cclxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xyXG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XHJcbiAgLy8gY29uZmlnXHJcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xyXG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHdhcm4oXHJcbiAgICAgICAgJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJ1xyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XHJcblxyXG4gIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxyXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxyXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXHJcbiAgVnVlLnV0aWwgPSB7XHJcbiAgICB3YXJuOiB3YXJuLFxyXG4gICAgZXh0ZW5kOiBleHRlbmQsXHJcbiAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcclxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZVxyXG4gIH07XHJcblxyXG4gIFZ1ZS5zZXQgPSBzZXQ7XHJcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcclxuICBWdWUubmV4dFRpY2sgPSBuZXh0VGljaztcclxuXHJcbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICB9KTtcclxuXHJcbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxyXG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxyXG4gIFZ1ZS5vcHRpb25zLl9iYXNlID0gVnVlO1xyXG5cclxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xyXG5cclxuICBpbml0VXNlKFZ1ZSk7XHJcbiAgaW5pdE1peGluJDEoVnVlKTtcclxuICBpbml0RXh0ZW5kKFZ1ZSk7XHJcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XHJcbn1cclxuXHJcbmluaXRHbG9iYWxBUEkoVnVlKTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGlzU2VydmVyJywge1xyXG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xyXG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ0Z1bmN0aW9uYWxSZW5kZXJDb250ZXh0Jywge1xyXG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxyXG59KTtcclxuXHJcblZ1ZS52ZXJzaW9uID0gJzIuNS4xNic7XHJcblxyXG4vKiAgKi9cclxuXHJcbi8vIHRoZXNlIGFyZSByZXNlcnZlZCBmb3Igd2ViIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgY29tcGlsZWQgYXdheVxyXG4vLyBkdXJpbmcgdGVtcGxhdGUgY29tcGlsYXRpb25cclxudmFyIGlzUmVzZXJ2ZWRBdHRyID0gbWFrZU1hcCgnc3R5bGUsY2xhc3MnKTtcclxuXHJcbi8vIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgdXNpbmcgcHJvcHMgZm9yIGJpbmRpbmdcclxudmFyIGFjY2VwdFZhbHVlID0gbWFrZU1hcCgnaW5wdXQsdGV4dGFyZWEsb3B0aW9uLHNlbGVjdCxwcm9ncmVzcycpO1xyXG52YXIgbXVzdFVzZVByb3AgPSBmdW5jdGlvbiAodGFnLCB0eXBlLCBhdHRyKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIChhdHRyID09PSAndmFsdWUnICYmIGFjY2VwdFZhbHVlKHRhZykpICYmIHR5cGUgIT09ICdidXR0b24nIHx8XHJcbiAgICAoYXR0ciA9PT0gJ3NlbGVjdGVkJyAmJiB0YWcgPT09ICdvcHRpb24nKSB8fFxyXG4gICAgKGF0dHIgPT09ICdjaGVja2VkJyAmJiB0YWcgPT09ICdpbnB1dCcpIHx8XHJcbiAgICAoYXR0ciA9PT0gJ211dGVkJyAmJiB0YWcgPT09ICd2aWRlbycpXHJcbiAgKVxyXG59O1xyXG5cclxudmFyIGlzRW51bWVyYXRlZEF0dHIgPSBtYWtlTWFwKCdjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2snKTtcclxuXHJcbnZhciBpc0Jvb2xlYW5BdHRyID0gbWFrZU1hcChcclxuICAnYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSwnICtcclxuICAnZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLCcgK1xyXG4gICdlbmFibGVkLGZvcm1ub3ZhbGlkYXRlLGhpZGRlbixpbmRldGVybWluYXRlLGluZXJ0LGlzbWFwLGl0ZW1zY29wZSxsb29wLG11bHRpcGxlLCcgK1xyXG4gICdtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LCcgK1xyXG4gICdyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLCcgK1xyXG4gICd0cnVlc3BlZWQsdHlwZW11c3RtYXRjaCx2aXNpYmxlJ1xyXG4pO1xyXG5cclxudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XHJcblxyXG52YXIgaXNYbGluayA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgcmV0dXJuIG5hbWUuY2hhckF0KDUpID09PSAnOicgJiYgbmFtZS5zbGljZSgwLCA1KSA9PT0gJ3hsaW5rJ1xyXG59O1xyXG5cclxudmFyIGdldFhsaW5rUHJvcCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgcmV0dXJuIGlzWGxpbmsobmFtZSkgPyBuYW1lLnNsaWNlKDYsIG5hbWUubGVuZ3RoKSA6ICcnXHJcbn07XHJcblxyXG52YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxyXG59O1xyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBnZW5DbGFzc0ZvclZub2RlICh2bm9kZSkge1xyXG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcclxuICB2YXIgcGFyZW50Tm9kZSA9IHZub2RlO1xyXG4gIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcclxuICB3aGlsZSAoaXNEZWYoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xyXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcclxuICAgIGlmIChjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEpIHtcclxuICAgICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGNoaWxkTm9kZS5kYXRhLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgd2hpbGUgKGlzRGVmKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudCkpIHtcclxuICAgIGlmIChwYXJlbnROb2RlICYmIHBhcmVudE5vZGUuZGF0YSkge1xyXG4gICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoZGF0YSwgcGFyZW50Tm9kZS5kYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlbmRlckNsYXNzKGRhdGEuc3RhdGljQ2xhc3MsIGRhdGEuY2xhc3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlQ2xhc3NEYXRhIChjaGlsZCwgcGFyZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRpY0NsYXNzOiBjb25jYXQoY2hpbGQuc3RhdGljQ2xhc3MsIHBhcmVudC5zdGF0aWNDbGFzcyksXHJcbiAgICBjbGFzczogaXNEZWYoY2hpbGQuY2xhc3MpXHJcbiAgICAgID8gW2NoaWxkLmNsYXNzLCBwYXJlbnQuY2xhc3NdXHJcbiAgICAgIDogcGFyZW50LmNsYXNzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXHJcbiAgc3RhdGljQ2xhc3MsXHJcbiAgZHluYW1pY0NsYXNzXHJcbikge1xyXG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xyXG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSlcclxuICB9XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICByZXR1cm4gJydcclxufVxyXG5cclxuZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XHJcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXHJcbiAgfVxyXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICB9XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICByZXR1cm4gJydcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5QXJyYXkgKHZhbHVlKSB7XHJcbiAgdmFyIHJlcyA9ICcnO1xyXG4gIHZhciBzdHJpbmdpZmllZDtcclxuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcclxuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XHJcbiAgICAgIHJlcyArPSBzdHJpbmdpZmllZDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdpZnlPYmplY3QgKHZhbHVlKSB7XHJcbiAgdmFyIHJlcyA9ICcnO1xyXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlW2tleV0pIHtcclxuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XHJcbiAgICAgIHJlcyArPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgbmFtZXNwYWNlTWFwID0ge1xyXG4gIHN2ZzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICBtYXRoOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCdcclxufTtcclxuXHJcbnZhciBpc0hUTUxUYWcgPSBtYWtlTWFwKFxyXG4gICdodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSwnICtcclxuICAnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLCcgK1xyXG4gICdkaXYsZGQsZGwsZHQsZmlnY2FwdGlvbixmaWd1cmUscGljdHVyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCwnICtcclxuICAnYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LCcgK1xyXG4gICdzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbywnICtcclxuICAnZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsJyArXHJcbiAgJ2NhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLCcgK1xyXG4gICdidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLCcgK1xyXG4gICdvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLCcgK1xyXG4gICdkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksJyArXHJcbiAgJ2NvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3QnXHJcbik7XHJcblxyXG4vLyB0aGlzIG1hcCBpcyBpbnRlbnRpb25hbGx5IHNlbGVjdGl2ZSwgb25seSBjb3ZlcmluZyBTVkcgZWxlbWVudHMgdGhhdCBtYXlcclxuLy8gY29udGFpbiBjaGlsZCBlbGVtZW50cy5cclxudmFyIGlzU1ZHID0gbWFrZU1hcChcclxuICAnc3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLCcgK1xyXG4gICdmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybiwnICtcclxuICAncG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2UsdmlldycsXHJcbiAgdHJ1ZVxyXG4pO1xyXG5cclxudmFyIGlzUHJlVGFnID0gZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gdGFnID09PSAncHJlJzsgfTtcclxuXHJcbnZhciBpc1Jlc2VydmVkVGFnID0gZnVuY3Rpb24gKHRhZykge1xyXG4gIHJldHVybiBpc0hUTUxUYWcodGFnKSB8fCBpc1NWRyh0YWcpXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xyXG4gIGlmIChpc1NWRyh0YWcpKSB7XHJcbiAgICByZXR1cm4gJ3N2ZydcclxuICB9XHJcbiAgLy8gYmFzaWMgc3VwcG9ydCBmb3IgTWF0aE1MXHJcbiAgLy8gbm90ZSBpdCBkb2Vzbid0IHN1cHBvcnQgb3RoZXIgTWF0aE1MIGVsZW1lbnRzIGJlaW5nIGNvbXBvbmVudCByb290c1xyXG4gIGlmICh0YWcgPT09ICdtYXRoJykge1xyXG4gICAgcmV0dXJuICdtYXRoJ1xyXG4gIH1cclxufVxyXG5cclxudmFyIHVua25vd25FbGVtZW50Q2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5mdW5jdGlvbiBpc1Vua25vd25FbGVtZW50ICh0YWcpIHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGlzUmVzZXJ2ZWRUYWcodGFnKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHRhZyA9IHRhZy50b0xvd2VyQ2FzZSgpO1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHVua25vd25FbGVtZW50Q2FjaGVbdGFnXVxyXG4gIH1cclxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgaWYgKHRhZy5pbmRleE9mKCctJykgPiAtMSkge1xyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxyXG4gICAgcmV0dXJuICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gPSAoXHJcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTFVua25vd25FbGVtZW50IHx8XHJcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnRcclxuICAgICkpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSlcclxuICB9XHJcbn1cclxuXHJcbnZhciBpc1RleHRJbnB1dFR5cGUgPSBtYWtlTWFwKCd0ZXh0LG51bWJlcixwYXNzd29yZCxzZWFyY2gsZW1haWwsdGVsLHVybCcpO1xyXG5cclxuLyogICovXHJcblxyXG4vKipcclxuICogUXVlcnkgYW4gZWxlbWVudCBzZWxlY3RvciBpZiBpdCdzIG5vdCBhbiBlbGVtZW50IGFscmVhZHkuXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeSAoZWwpIHtcclxuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcclxuICAgICAgICAnQ2Fubm90IGZpbmQgZWxlbWVudDogJyArIGVsXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdGVkXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBlbFxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50JDEgKHRhZ05hbWUsIHZub2RlKSB7XHJcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgaWYgKHRhZ05hbWUgIT09ICdzZWxlY3QnKSB7XHJcbiAgICByZXR1cm4gZWxtXHJcbiAgfVxyXG4gIC8vIGZhbHNlIG9yIG51bGwgd2lsbCByZW1vdmUgdGhlIGF0dHJpYnV0ZSBidXQgdW5kZWZpbmVkIHdpbGwgbm90XHJcbiAgaWYgKHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS5hdHRycyAmJiB2bm9kZS5kYXRhLmF0dHJzLm11bHRpcGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XHJcbiAgfVxyXG4gIHJldHVybiBlbG1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TIChuYW1lc3BhY2UsIHRhZ05hbWUpIHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZU1hcFtuYW1lc3BhY2VdLCB0YWdOYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICh0ZXh0KSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dClcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlIChwYXJlbnROb2RlLCBuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNoaWxkIChub2RlLCBjaGlsZCkge1xyXG4gIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRDaGlsZCAobm9kZSwgY2hpbGQpIHtcclxuICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyZW50Tm9kZSAobm9kZSkge1xyXG4gIHJldHVybiBub2RlLnBhcmVudE5vZGVcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFNpYmxpbmcgKG5vZGUpIHtcclxuICByZXR1cm4gbm9kZS5uZXh0U2libGluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdOYW1lIChub2RlKSB7XHJcbiAgcmV0dXJuIG5vZGUudGFnTmFtZVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudCAobm9kZSwgdGV4dCkge1xyXG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdHlsZVNjb3BlIChub2RlLCBzY29wZUlkKSB7XHJcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoc2NvcGVJZCwgJycpO1xyXG59XHJcblxyXG5cclxudmFyIG5vZGVPcHMgPSBPYmplY3QuZnJlZXplKHtcclxuXHRjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50JDEsXHJcblx0Y3JlYXRlRWxlbWVudE5TOiBjcmVhdGVFbGVtZW50TlMsXHJcblx0Y3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxyXG5cdGNyZWF0ZUNvbW1lbnQ6IGNyZWF0ZUNvbW1lbnQsXHJcblx0aW5zZXJ0QmVmb3JlOiBpbnNlcnRCZWZvcmUsXHJcblx0cmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxyXG5cdGFwcGVuZENoaWxkOiBhcHBlbmRDaGlsZCxcclxuXHRwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxyXG5cdG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcclxuXHR0YWdOYW1lOiB0YWdOYW1lLFxyXG5cdHNldFRleHRDb250ZW50OiBzZXRUZXh0Q29udGVudCxcclxuXHRzZXRTdHlsZVNjb3BlOiBzZXRTdHlsZVNjb3BlXHJcbn0pO1xyXG5cclxuLyogICovXHJcblxyXG52YXIgcmVmID0ge1xyXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xyXG4gICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xyXG4gICAgaWYgKG9sZFZub2RlLmRhdGEucmVmICE9PSB2bm9kZS5kYXRhLnJlZikge1xyXG4gICAgICByZWdpc3RlclJlZihvbGRWbm9kZSwgdHJ1ZSk7XHJcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XHJcbiAgICByZWdpc3RlclJlZih2bm9kZSwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclJlZiAodm5vZGUsIGlzUmVtb3ZhbCkge1xyXG4gIHZhciBrZXkgPSB2bm9kZS5kYXRhLnJlZjtcclxuICBpZiAoIWlzRGVmKGtleSkpIHsgcmV0dXJuIH1cclxuXHJcbiAgdmFyIHZtID0gdm5vZGUuY29udGV4dDtcclxuICB2YXIgcmVmID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgfHwgdm5vZGUuZWxtO1xyXG4gIHZhciByZWZzID0gdm0uJHJlZnM7XHJcbiAgaWYgKGlzUmVtb3ZhbCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xyXG4gICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xyXG4gICAgfSBlbHNlIGlmIChyZWZzW2tleV0gPT09IHJlZikge1xyXG4gICAgICByZWZzW2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh2bm9kZS5kYXRhLnJlZkluRm9yKSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XHJcbiAgICAgICAgcmVmc1trZXldID0gW3JlZl07XHJcbiAgICAgIH0gZWxzZSBpZiAocmVmc1trZXldLmluZGV4T2YocmVmKSA8IDApIHtcclxuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICAgICAgICByZWZzW2tleV0ucHVzaChyZWYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWZzW2tleV0gPSByZWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVmlydHVhbCBET00gcGF0Y2hpbmcgYWxnb3JpdGhtIGJhc2VkIG9uIFNuYWJiZG9tIGJ5XHJcbiAqIFNpbW9uIEZyaWlzIFZpbmR1bSAoQHBhbGRlcGluZClcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxkZXBpbmQvc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKlxyXG4gKiBtb2RpZmllZCBieSBFdmFuIFlvdSAoQHl5eDk5MDgwMylcclxuICpcclxuICogTm90IHR5cGUtY2hlY2tpbmcgdGhpcyBiZWNhdXNlIHRoaXMgZmlsZSBpcyBwZXJmLWNyaXRpY2FsIGFuZCB0aGUgY29zdFxyXG4gKiBvZiBtYWtpbmcgZmxvdyB1bmRlcnN0YW5kIGl0IGlzIG5vdCB3b3J0aCBpdC5cclxuICovXHJcblxyXG52YXIgZW1wdHlOb2RlID0gbmV3IFZOb2RlKCcnLCB7fSwgW10pO1xyXG5cclxudmFyIGhvb2tzID0gWydjcmVhdGUnLCAnYWN0aXZhdGUnLCAndXBkYXRlJywgJ3JlbW92ZScsICdkZXN0cm95J107XHJcblxyXG5mdW5jdGlvbiBzYW1lVm5vZGUgKGEsIGIpIHtcclxuICByZXR1cm4gKFxyXG4gICAgYS5rZXkgPT09IGIua2V5ICYmIChcclxuICAgICAgKFxyXG4gICAgICAgIGEudGFnID09PSBiLnRhZyAmJlxyXG4gICAgICAgIGEuaXNDb21tZW50ID09PSBiLmlzQ29tbWVudCAmJlxyXG4gICAgICAgIGlzRGVmKGEuZGF0YSkgPT09IGlzRGVmKGIuZGF0YSkgJiZcclxuICAgICAgICBzYW1lSW5wdXRUeXBlKGEsIGIpXHJcbiAgICAgICkgfHwgKFxyXG4gICAgICAgIGlzVHJ1ZShhLmlzQXN5bmNQbGFjZWhvbGRlcikgJiZcclxuICAgICAgICBhLmFzeW5jRmFjdG9yeSA9PT0gYi5hc3luY0ZhY3RvcnkgJiZcclxuICAgICAgICBpc1VuZGVmKGIuYXN5bmNGYWN0b3J5LmVycm9yKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYW1lSW5wdXRUeXBlIChhLCBiKSB7XHJcbiAgaWYgKGEudGFnICE9PSAnaW5wdXQnKSB7IHJldHVybiB0cnVlIH1cclxuICB2YXIgaTtcclxuICB2YXIgdHlwZUEgPSBpc0RlZihpID0gYS5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xyXG4gIHZhciB0eXBlQiA9IGlzRGVmKGkgPSBiLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XHJcbiAgcmV0dXJuIHR5cGVBID09PSB0eXBlQiB8fCBpc1RleHRJbnB1dFR5cGUodHlwZUEpICYmIGlzVGV4dElucHV0VHlwZSh0eXBlQilcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlS2V5VG9PbGRJZHggKGNoaWxkcmVuLCBiZWdpbklkeCwgZW5kSWR4KSB7XHJcbiAgdmFyIGksIGtleTtcclxuICB2YXIgbWFwID0ge307XHJcbiAgZm9yIChpID0gYmVnaW5JZHg7IGkgPD0gZW5kSWR4OyArK2kpIHtcclxuICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcclxuICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxyXG4gIH1cclxuICByZXR1cm4gbWFwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhdGNoRnVuY3Rpb24gKGJhY2tlbmQpIHtcclxuICB2YXIgaSwgajtcclxuICB2YXIgY2JzID0ge307XHJcblxyXG4gIHZhciBtb2R1bGVzID0gYmFja2VuZC5tb2R1bGVzO1xyXG4gIHZhciBub2RlT3BzID0gYmFja2VuZC5ub2RlT3BzO1xyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyArK2kpIHtcclxuICAgIGNic1tob29rc1tpXV0gPSBbXTtcclxuICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgIGlmIChpc0RlZihtb2R1bGVzW2pdW2hvb2tzW2ldXSkpIHtcclxuICAgICAgICBjYnNbaG9va3NbaV1dLnB1c2gobW9kdWxlc1tqXVtob29rc1tpXV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbXB0eU5vZGVBdCAoZWxtKSB7XHJcbiAgICByZXR1cm4gbmV3IFZOb2RlKG5vZGVPcHMudGFnTmFtZShlbG0pLnRvTG93ZXJDYXNlKCksIHt9LCBbXSwgdW5kZWZpbmVkLCBlbG0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVSbUNiIChjaGlsZEVsbSwgbGlzdGVuZXJzKSB7XHJcbiAgICBmdW5jdGlvbiByZW1vdmUgKCkge1xyXG4gICAgICBpZiAoLS1yZW1vdmUubGlzdGVuZXJzID09PSAwKSB7XHJcbiAgICAgICAgcmVtb3ZlTm9kZShjaGlsZEVsbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZS5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XHJcbiAgICByZXR1cm4gcmVtb3ZlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xyXG4gICAgdmFyIHBhcmVudCA9IG5vZGVPcHMucGFyZW50Tm9kZShlbCk7XHJcbiAgICAvLyBlbGVtZW50IG1heSBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkIGR1ZSB0byB2LWh0bWwgLyB2LXRleHRcclxuICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XHJcbiAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1Vua25vd25FbGVtZW50JCQxICh2bm9kZSwgaW5WUHJlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAhaW5WUHJlICYmXHJcbiAgICAgICF2bm9kZS5ucyAmJlxyXG4gICAgICAhKFxyXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMubGVuZ3RoICYmXHJcbiAgICAgICAgY29uZmlnLmlnbm9yZWRFbGVtZW50cy5zb21lKGZ1bmN0aW9uIChpZ25vcmUpIHtcclxuICAgICAgICAgIHJldHVybiBpc1JlZ0V4cChpZ25vcmUpXHJcbiAgICAgICAgICAgID8gaWdub3JlLnRlc3Qodm5vZGUudGFnKVxyXG4gICAgICAgICAgICA6IGlnbm9yZSA9PT0gdm5vZGUudGFnXHJcbiAgICAgICAgfSlcclxuICAgICAgKSAmJlxyXG4gICAgICBjb25maWcuaXNVbmtub3duRWxlbWVudCh2bm9kZS50YWcpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICB2YXIgY3JlYXRpbmdFbG1JblZQcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVFbG0gKFxyXG4gICAgdm5vZGUsXHJcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXHJcbiAgICBwYXJlbnRFbG0sXHJcbiAgICByZWZFbG0sXHJcbiAgICBuZXN0ZWQsXHJcbiAgICBvd25lckFycmF5LFxyXG4gICAgaW5kZXhcclxuICApIHtcclxuICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XHJcbiAgICAgIC8vIFRoaXMgdm5vZGUgd2FzIHVzZWQgaW4gYSBwcmV2aW91cyByZW5kZXIhXHJcbiAgICAgIC8vIG5vdyBpdCdzIHVzZWQgYXMgYSBuZXcgbm9kZSwgb3ZlcndyaXRpbmcgaXRzIGVsbSB3b3VsZCBjYXVzZVxyXG4gICAgICAvLyBwb3RlbnRpYWwgcGF0Y2ggZXJyb3JzIGRvd24gdGhlIHJvYWQgd2hlbiBpdCdzIHVzZWQgYXMgYW4gaW5zZXJ0aW9uXHJcbiAgICAgIC8vIHJlZmVyZW5jZSBub2RlLiBJbnN0ZWFkLCB3ZSBjbG9uZSB0aGUgbm9kZSBvbi1kZW1hbmQgYmVmb3JlIGNyZWF0aW5nXHJcbiAgICAgIC8vIGFzc29jaWF0ZWQgRE9NIGVsZW1lbnQgZm9yIGl0LlxyXG4gICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdm5vZGUuaXNSb290SW5zZXJ0ID0gIW5lc3RlZDsgLy8gZm9yIHRyYW5zaXRpb24gZW50ZXIgY2hlY2tcclxuICAgIGlmIChjcmVhdGVDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcclxuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xyXG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcclxuICAgIGlmIChpc0RlZih0YWcpKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wcmUpIHtcclxuICAgICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Vua25vd25FbGVtZW50JCQxKHZub2RlLCBjcmVhdGluZ0VsbUluVlByZSkpIHtcclxuICAgICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAgICdVbmtub3duIGN1c3RvbSBlbGVtZW50OiA8JyArIHRhZyArICc+IC0gZGlkIHlvdSAnICtcclxuICAgICAgICAgICAgJ3JlZ2lzdGVyIHRoZSBjb21wb25lbnQgY29ycmVjdGx5PyBGb3IgcmVjdXJzaXZlIGNvbXBvbmVudHMsICcgK1xyXG4gICAgICAgICAgICAnbWFrZSBzdXJlIHRvIHByb3ZpZGUgdGhlIFwibmFtZVwiIG9wdGlvbi4nLFxyXG4gICAgICAgICAgICB2bm9kZS5jb250ZXh0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdm5vZGUuZWxtID0gdm5vZGUubnNcclxuICAgICAgICA/IG5vZGVPcHMuY3JlYXRlRWxlbWVudE5TKHZub2RlLm5zLCB0YWcpXHJcbiAgICAgICAgOiBub2RlT3BzLmNyZWF0ZUVsZW1lbnQodGFnLCB2bm9kZSk7XHJcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcclxuXHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICB7XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xyXG4gICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xyXG4gICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGF0YSAmJiBkYXRhLnByZSkge1xyXG4gICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlLS07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkpIHtcclxuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVDb21tZW50KHZub2RlLnRleHQpO1xyXG4gICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xyXG4gICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XHJcbiAgICB2YXIgaSA9IHZub2RlLmRhdGE7XHJcbiAgICBpZiAoaXNEZWYoaSkpIHtcclxuICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XHJcbiAgICAgIGlmIChpc0RlZihpID0gaS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkge1xyXG4gICAgICAgIGkodm5vZGUsIGZhbHNlIC8qIGh5ZHJhdGluZyAqLywgcGFyZW50RWxtLCByZWZFbG0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGFmdGVyIGNhbGxpbmcgdGhlIGluaXQgaG9vaywgaWYgdGhlIHZub2RlIGlzIGEgY2hpbGQgY29tcG9uZW50XHJcbiAgICAgIC8vIGl0IHNob3VsZCd2ZSBjcmVhdGVkIGEgY2hpbGQgaW5zdGFuY2UgYW5kIG1vdW50ZWQgaXQuIHRoZSBjaGlsZFxyXG4gICAgICAvLyBjb21wb25lbnQgYWxzbyBoYXMgc2V0IHRoZSBwbGFjZWhvbGRlciB2bm9kZSdzIGVsbS5cclxuICAgICAgLy8gaW4gdGhhdCBjYXNlIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgZWxlbWVudCBhbmQgYmUgZG9uZS5cclxuICAgICAgaWYgKGlzRGVmKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xyXG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XHJcbiAgICAgICAgaWYgKGlzVHJ1ZShpc1JlYWN0aXZhdGVkKSkge1xyXG4gICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcclxuICAgIGlmIChpc0RlZih2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQpKSB7XHJcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoLmFwcGx5KGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KTtcclxuICAgICAgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHZub2RlLmVsbSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRlbDtcclxuICAgIGlmIChpc1BhdGNoYWJsZSh2bm9kZSkpIHtcclxuICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XHJcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGVtcHR5IGNvbXBvbmVudCByb290LlxyXG4gICAgICAvLyBza2lwIGFsbCBlbGVtZW50LXJlbGF0ZWQgbW9kdWxlcyBleGNlcHQgZm9yIHJlZiAoIzM0NTUpXHJcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcclxuICAgICAgLy8gbWFrZSBzdXJlIHRvIGludm9rZSB0aGUgaW5zZXJ0IGhvb2tcclxuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhY3RpdmF0ZUNvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pIHtcclxuICAgIHZhciBpO1xyXG4gICAgLy8gaGFjayBmb3IgIzQzMzk6IGEgcmVhY3RpdmF0ZWQgY29tcG9uZW50IHdpdGggaW5uZXIgdHJhbnNpdGlvblxyXG4gICAgLy8gZG9lcyBub3QgdHJpZ2dlciBiZWNhdXNlIHRoZSBpbm5lciBub2RlJ3MgY3JlYXRlZCBob29rcyBhcmUgbm90IGNhbGxlZFxyXG4gICAgLy8gYWdhaW4uIEl0J3Mgbm90IGlkZWFsIHRvIGludm9sdmUgbW9kdWxlLXNwZWNpZmljIGxvZ2ljIGluIGhlcmUgYnV0XHJcbiAgICAvLyB0aGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYSBiZXR0ZXIgd2F5IHRvIGRvIGl0LlxyXG4gICAgdmFyIGlubmVyTm9kZSA9IHZub2RlO1xyXG4gICAgd2hpbGUgKGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xyXG4gICAgICBpbm5lck5vZGUgPSBpbm5lck5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xyXG4gICAgICBpZiAoaXNEZWYoaSA9IGlubmVyTm9kZS5kYXRhKSAmJiBpc0RlZihpID0gaS50cmFuc2l0aW9uKSkge1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuYWN0aXZhdGUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIGNicy5hY3RpdmF0ZVtpXShlbXB0eU5vZGUsIGlubmVyTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKGlubmVyTm9kZSk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdW5saWtlIGEgbmV3bHkgY3JlYXRlZCBjb21wb25lbnQsXHJcbiAgICAvLyBhIHJlYWN0aXZhdGVkIGtlZXAtYWxpdmUgY29tcG9uZW50IGRvZXNuJ3QgaW5zZXJ0IGl0c2VsZlxyXG4gICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0IChwYXJlbnQsIGVsbSwgcmVmJCQxKSB7XHJcbiAgICBpZiAoaXNEZWYocGFyZW50KSkge1xyXG4gICAgICBpZiAoaXNEZWYocmVmJCQxKSkge1xyXG4gICAgICAgIGlmIChyZWYkJDEucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmJCQxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChwYXJlbnQsIGVsbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcmVuICh2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKGNoaWxkcmVuKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgY3JlYXRlRWxtKGNoaWxkcmVuW2ldLCBpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmVsbSwgbnVsbCwgdHJ1ZSwgY2hpbGRyZW4sIGkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKHZub2RlLnRleHQpKSB7XHJcbiAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQodm5vZGUuZWxtLCBub2RlT3BzLmNyZWF0ZVRleHROb2RlKFN0cmluZyh2bm9kZS50ZXh0KSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQYXRjaGFibGUgKHZub2RlKSB7XHJcbiAgICB3aGlsZSAodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcclxuICAgICAgdm5vZGUgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNEZWYodm5vZGUudGFnKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW52b2tlQ3JlYXRlSG9va3MgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcclxuICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xyXG4gICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCB2bm9kZSk7XHJcbiAgICB9XHJcbiAgICBpID0gdm5vZGUuZGF0YS5ob29rOyAvLyBSZXVzZSB2YXJpYWJsZVxyXG4gICAgaWYgKGlzRGVmKGkpKSB7XHJcbiAgICAgIGlmIChpc0RlZihpLmNyZWF0ZSkpIHsgaS5jcmVhdGUoZW1wdHlOb2RlLCB2bm9kZSk7IH1cclxuICAgICAgaWYgKGlzRGVmKGkuaW5zZXJ0KSkgeyBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNldCBzY29wZSBpZCBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBDU1MuXHJcbiAgLy8gdGhpcyBpcyBpbXBsZW1lbnRlZCBhcyBhIHNwZWNpYWwgY2FzZSB0byBhdm9pZCB0aGUgb3ZlcmhlYWRcclxuICAvLyBvZiBnb2luZyB0aHJvdWdoIHRoZSBub3JtYWwgYXR0cmlidXRlIHBhdGNoaW5nIHByb2Nlc3MuXHJcbiAgZnVuY3Rpb24gc2V0U2NvcGUgKHZub2RlKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIGlmIChpc0RlZihpID0gdm5vZGUuZm5TY29wZUlkKSkge1xyXG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlO1xyXG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcclxuICAgICAgICBpZiAoaXNEZWYoaSA9IGFuY2VzdG9yLmNvbnRleHQpICYmIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKSkge1xyXG4gICAgICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmb3Igc2xvdCBjb250ZW50IHRoZXkgc2hvdWxkIGFsc28gZ2V0IHRoZSBzY29wZUlkIGZyb20gdGhlIGhvc3QgaW5zdGFuY2UuXHJcbiAgICBpZiAoaXNEZWYoaSA9IGFjdGl2ZUluc3RhbmNlKSAmJlxyXG4gICAgICBpICE9PSB2bm9kZS5jb250ZXh0ICYmXHJcbiAgICAgIGkgIT09IHZub2RlLmZuQ29udGV4dCAmJlxyXG4gICAgICBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZClcclxuICAgICkge1xyXG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFZub2RlcyAocGFyZW50RWxtLCByZWZFbG0sIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XHJcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XHJcbiAgICAgIGNyZWF0ZUVsbSh2bm9kZXNbc3RhcnRJZHhdLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtLCBmYWxzZSwgdm5vZGVzLCBzdGFydElkeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayAodm5vZGUpIHtcclxuICAgIHZhciBpLCBqO1xyXG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xyXG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XHJcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5kZXN0cm95KSkgeyBpKHZub2RlKTsgfVxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHsgY2JzLmRlc3Ryb3lbaV0odm5vZGUpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNoaWxkcmVuKSkge1xyXG4gICAgICBmb3IgKGogPSAwOyBqIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2opIHtcclxuICAgICAgICBpbnZva2VEZXN0cm95SG9vayh2bm9kZS5jaGlsZHJlbltqXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVZub2RlcyAocGFyZW50RWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpIHtcclxuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcclxuICAgICAgdmFyIGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcclxuICAgICAgaWYgKGlzRGVmKGNoKSkge1xyXG4gICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XHJcbiAgICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGNoKTtcclxuICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcclxuICAgICAgICAgIHJlbW92ZU5vZGUoY2guZWxtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2sgKHZub2RlLCBybSkge1xyXG4gICAgaWYgKGlzRGVmKHJtKSB8fCBpc0RlZih2bm9kZS5kYXRhKSkge1xyXG4gICAgICB2YXIgaTtcclxuICAgICAgdmFyIGxpc3RlbmVycyA9IGNicy5yZW1vdmUubGVuZ3RoICsgMTtcclxuICAgICAgaWYgKGlzRGVmKHJtKSkge1xyXG4gICAgICAgIC8vIHdlIGhhdmUgYSByZWN1cnNpdmVseSBwYXNzZWQgZG93biBybSBjYWxsYmFja1xyXG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBsaXN0ZW5lcnMgY291bnRcclxuICAgICAgICBybS5saXN0ZW5lcnMgKz0gbGlzdGVuZXJzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRpcmVjdGx5IHJlbW92aW5nXHJcbiAgICAgICAgcm0gPSBjcmVhdGVSbUNiKHZub2RlLmVsbSwgbGlzdGVuZXJzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZWN1cnNpdmVseSBpbnZva2UgaG9va3Mgb24gY2hpbGQgY29tcG9uZW50IHJvb3Qgbm9kZVxyXG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSAmJiBpc0RlZihpID0gaS5fdm5vZGUpICYmIGlzRGVmKGkuZGF0YSkpIHtcclxuICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGksIHJtKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnJlbW92ZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNicy5yZW1vdmVbaV0odm5vZGUsIHJtKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucmVtb3ZlKSkge1xyXG4gICAgICAgIGkodm5vZGUsIHJtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBybSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1vdmVOb2RlKHZub2RlLmVsbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xyXG4gICAgdmFyIG9sZFN0YXJ0SWR4ID0gMDtcclxuICAgIHZhciBuZXdTdGFydElkeCA9IDA7XHJcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcclxuICAgIHZhciBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XHJcbiAgICB2YXIgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xyXG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XHJcbiAgICB2YXIgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xyXG4gICAgdmFyIG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcclxuICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIHZub2RlVG9Nb3ZlLCByZWZFbG07XHJcblxyXG4gICAgLy8gcmVtb3ZlT25seSBpcyBhIHNwZWNpYWwgZmxhZyB1c2VkIG9ubHkgYnkgPHRyYW5zaXRpb24tZ3JvdXA+XHJcbiAgICAvLyB0byBlbnN1cmUgcmVtb3ZlZCBlbGVtZW50cyBzdGF5IGluIGNvcnJlY3QgcmVsYXRpdmUgcG9zaXRpb25zXHJcbiAgICAvLyBkdXJpbmcgbGVhdmluZyB0cmFuc2l0aW9uc1xyXG4gICAgdmFyIGNhbk1vdmUgPSAhcmVtb3ZlT25seTtcclxuXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBjaGVja0R1cGxpY2F0ZUtleXMobmV3Q2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XHJcbiAgICAgIGlmIChpc1VuZGVmKG9sZFN0YXJ0Vm5vZGUpKSB7XHJcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdOyAvLyBWbm9kZSBoYXMgYmVlbiBtb3ZlZCBsZWZ0XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGRFbmRWbm9kZSkpIHtcclxuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcclxuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcclxuICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XHJcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xyXG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcclxuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xyXG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xyXG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xyXG4gICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xyXG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgcmlnaHRcclxuICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xyXG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcclxuICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XHJcbiAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XHJcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCBsZWZ0XHJcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcclxuICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkRW5kVm5vZGUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XHJcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XHJcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpc1VuZGVmKG9sZEtleVRvSWR4KSkgeyBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTsgfVxyXG4gICAgICAgIGlkeEluT2xkID0gaXNEZWYobmV3U3RhcnRWbm9kZS5rZXkpXHJcbiAgICAgICAgICA/IG9sZEtleVRvSWR4W25ld1N0YXJ0Vm5vZGUua2V5XVxyXG4gICAgICAgICAgOiBmaW5kSWR4SW5PbGQobmV3U3RhcnRWbm9kZSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xyXG4gICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxyXG4gICAgICAgICAgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgZmFsc2UsIG5ld0NoLCBuZXdTdGFydElkeCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZub2RlVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xyXG4gICAgICAgICAgaWYgKHNhbWVWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSkpIHtcclxuICAgICAgICAgICAgcGF0Y2hWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcclxuICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgdm5vZGVUb01vdmUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzYW1lIGtleSBidXQgZGlmZmVyZW50IGVsZW1lbnQuIHRyZWF0IGFzIG5ldyBlbGVtZW50XHJcbiAgICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xyXG4gICAgICByZWZFbG0gPSBpc1VuZGVmKG5ld0NoW25ld0VuZElkeCArIDFdKSA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS5lbG07XHJcbiAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIHJlZkVsbSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XHJcbiAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0sIG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlS2V5cyAoY2hpbGRyZW4pIHtcclxuICAgIHZhciBzZWVuS2V5cyA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdm5vZGUgPSBjaGlsZHJlbltpXTtcclxuICAgICAgdmFyIGtleSA9IHZub2RlLmtleTtcclxuICAgICAgaWYgKGlzRGVmKGtleSkpIHtcclxuICAgICAgICBpZiAoc2VlbktleXNba2V5XSkge1xyXG4gICAgICAgICAgd2FybihcclxuICAgICAgICAgICAgKFwiRHVwbGljYXRlIGtleXMgZGV0ZWN0ZWQ6ICdcIiArIGtleSArIFwiJy4gVGhpcyBtYXkgY2F1c2UgYW4gdXBkYXRlIGVycm9yLlwiKSxcclxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VlbktleXNba2V5XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kSWR4SW5PbGQgKG5vZGUsIG9sZENoLCBzdGFydCwgZW5kKSB7XHJcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICB2YXIgYyA9IG9sZENoW2ldO1xyXG4gICAgICBpZiAoaXNEZWYoYykgJiYgc2FtZVZub2RlKG5vZGUsIGMpKSB7IHJldHVybiBpIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhdGNoVm5vZGUgKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KSB7XHJcbiAgICBpZiAob2xkVm5vZGUgPT09IHZub2RlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBlbG0gPSB2bm9kZS5lbG0gPSBvbGRWbm9kZS5lbG07XHJcblxyXG4gICAgaWYgKGlzVHJ1ZShvbGRWbm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIpKSB7XHJcbiAgICAgIGlmIChpc0RlZih2bm9kZS5hc3luY0ZhY3RvcnkucmVzb2x2ZWQpKSB7XHJcbiAgICAgICAgaHlkcmF0ZShvbGRWbm9kZS5lbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZub2RlLmlzQXN5bmNQbGFjZWhvbGRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV1c2UgZWxlbWVudCBmb3Igc3RhdGljIHRyZWVzLlxyXG4gICAgLy8gbm90ZSB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIHZub2RlIGlzIGNsb25lZCAtXHJcbiAgICAvLyBpZiB0aGUgbmV3IG5vZGUgaXMgbm90IGNsb25lZCBpdCBtZWFucyB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBoYXZlIGJlZW5cclxuICAgIC8vIHJlc2V0IGJ5IHRoZSBob3QtcmVsb2FkLWFwaSBhbmQgd2UgbmVlZCB0byBkbyBhIHByb3BlciByZS1yZW5kZXIuXHJcbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzU3RhdGljKSAmJlxyXG4gICAgICBpc1RydWUob2xkVm5vZGUuaXNTdGF0aWMpICYmXHJcbiAgICAgIHZub2RlLmtleSA9PT0gb2xkVm5vZGUua2V5ICYmXHJcbiAgICAgIChpc1RydWUodm5vZGUuaXNDbG9uZWQpIHx8IGlzVHJ1ZSh2bm9kZS5pc09uY2UpKVxyXG4gICAgKSB7XHJcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpO1xyXG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xyXG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnByZXBhdGNoKSkge1xyXG4gICAgICBpKG9sZFZub2RlLCB2bm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9sZENoID0gb2xkVm5vZGUuY2hpbGRyZW47XHJcbiAgICB2YXIgY2ggPSB2bm9kZS5jaGlsZHJlbjtcclxuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc1BhdGNoYWJsZSh2bm9kZSkpIHtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy51cGRhdGUubGVuZ3RoOyArK2kpIHsgY2JzLnVwZGF0ZVtpXShvbGRWbm9kZSwgdm5vZGUpOyB9XHJcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS51cGRhdGUpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcclxuICAgICAgaWYgKGlzRGVmKG9sZENoKSAmJiBpc0RlZihjaCkpIHtcclxuICAgICAgICBpZiAob2xkQ2ggIT09IGNoKSB7IHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpOyB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYoY2gpKSB7XHJcbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7IG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7IH1cclxuICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBjaCwgMCwgY2gubGVuZ3RoIC0gMSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRDaCkpIHtcclxuICAgICAgICByZW1vdmVWbm9kZXMoZWxtLCBvbGRDaCwgMCwgb2xkQ2gubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcclxuICAgICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcclxuICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XHJcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wb3N0cGF0Y2gpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW52b2tlSW5zZXJ0SG9vayAodm5vZGUsIHF1ZXVlLCBpbml0aWFsKSB7XHJcbiAgICAvLyBkZWxheSBpbnNlcnQgaG9va3MgZm9yIGNvbXBvbmVudCByb290IG5vZGVzLCBpbnZva2UgdGhlbSBhZnRlciB0aGVcclxuICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXHJcbiAgICBpZiAoaXNUcnVlKGluaXRpYWwpICYmIGlzRGVmKHZub2RlLnBhcmVudCkpIHtcclxuICAgICAgdm5vZGUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydCA9IHF1ZXVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQocXVldWVbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgaHlkcmF0aW9uQmFpbGVkID0gZmFsc2U7XHJcbiAgLy8gbGlzdCBvZiBtb2R1bGVzIHRoYXQgY2FuIHNraXAgY3JlYXRlIGhvb2sgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHRoZXlcclxuICAvLyBhcmUgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgY2xpZW50IG9yIGhhcyBubyBuZWVkIGZvciBpbml0aWFsaXphdGlvblxyXG4gIC8vIE5vdGU6IHN0eWxlIGlzIGV4Y2x1ZGVkIGJlY2F1c2UgaXQgcmVsaWVzIG9uIGluaXRpYWwgY2xvbmUgZm9yIGZ1dHVyZVxyXG4gIC8vIGRlZXAgdXBkYXRlcyAoIzcwNjMpLlxyXG4gIHZhciBpc1JlbmRlcmVkTW9kdWxlID0gbWFrZU1hcCgnYXR0cnMsY2xhc3Msc3RhdGljQ2xhc3Msc3RhdGljU3R5bGUsa2V5Jyk7XHJcblxyXG4gIC8vIE5vdGU6IHRoaXMgaXMgYSBicm93c2VyLW9ubHkgZnVuY3Rpb24gc28gd2UgY2FuIGFzc3VtZSBlbG1zIGFyZSBET00gbm9kZXMuXHJcbiAgZnVuY3Rpb24gaHlkcmF0ZSAoZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpIHtcclxuICAgIHZhciBpO1xyXG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcclxuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcclxuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xyXG4gICAgaW5WUHJlID0gaW5WUHJlIHx8IChkYXRhICYmIGRhdGEucHJlKTtcclxuICAgIHZub2RlLmVsbSA9IGVsbTtcclxuXHJcbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkgJiYgaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5KSkge1xyXG4gICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gYXNzZXJ0IG5vZGUgbWF0Y2hcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGlmICghYXNzZXJ0Tm9kZU1hdGNoKGVsbSwgdm5vZGUsIGluVlByZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XHJcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkgeyBpKHZub2RlLCB0cnVlIC8qIGh5ZHJhdGluZyAqLyk7IH1cclxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcclxuICAgICAgICAvLyBjaGlsZCBjb21wb25lbnQuIGl0IHNob3VsZCBoYXZlIGh5ZHJhdGVkIGl0cyBvd24gdHJlZS5cclxuICAgICAgICBpbml0Q29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc0RlZih0YWcpKSB7XHJcbiAgICAgIGlmIChpc0RlZihjaGlsZHJlbikpIHtcclxuICAgICAgICAvLyBlbXB0eSBlbGVtZW50LCBhbGxvdyBjbGllbnQgdG8gcGljayB1cCBhbmQgcG9wdWxhdGUgY2hpbGRyZW5cclxuICAgICAgICBpZiAoIWVsbS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gdi1odG1sIGFuZCBkb21Qcm9wczogaW5uZXJIVE1MXHJcbiAgICAgICAgICBpZiAoaXNEZWYoaSA9IGRhdGEpICYmIGlzRGVmKGkgPSBpLmRvbVByb3BzKSAmJiBpc0RlZihpID0gaS5pbm5lckhUTUwpKSB7XHJcbiAgICAgICAgICAgIGlmIChpICE9PSBlbG0uaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaHlkcmF0aW9uQmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2ZXIgaW5uZXJIVE1MOiAnLCBpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignY2xpZW50IGlubmVySFRNTDogJywgZWxtLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpdGVyYXRlIGFuZCBjb21wYXJlIGNoaWxkcmVuIGxpc3RzXHJcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbk1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGVsbS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGUgfHwgIWh5ZHJhdGUoY2hpbGROb2RlLCBjaGlsZHJlbltpJDFdLCBpbnNlcnRlZFZub2RlUXVldWUsIGluVlByZSkpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBjaGlsZE5vZGUgaXMgbm90IG51bGwsIGl0IG1lYW5zIHRoZSBhY3R1YWwgY2hpbGROb2RlcyBsaXN0IGlzXHJcbiAgICAgICAgICAgIC8vIGxvbmdlciB0aGFuIHRoZSB2aXJ0dWFsIGNoaWxkcmVuIGxpc3QuXHJcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5NYXRjaCB8fCBjaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01pc21hdGNoaW5nIGNoaWxkTm9kZXMgdnMuIFZOb2RlczogJywgZWxtLmNoaWxkTm9kZXMsIGNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XHJcbiAgICAgICAgdmFyIGZ1bGxJbnZva2UgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgaWYgKCFpc1JlbmRlcmVkTW9kdWxlKGtleSkpIHtcclxuICAgICAgICAgICAgZnVsbEludm9rZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZ1bGxJbnZva2UgJiYgZGF0YVsnY2xhc3MnXSkge1xyXG4gICAgICAgICAgLy8gZW5zdXJlIGNvbGxlY3RpbmcgZGVwcyBmb3IgZGVlcCBjbGFzcyBiaW5kaW5ncyBmb3IgZnV0dXJlIHVwZGF0ZXNcclxuICAgICAgICAgIHRyYXZlcnNlKGRhdGFbJ2NsYXNzJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlbG0uZGF0YSAhPT0gdm5vZGUudGV4dCkge1xyXG4gICAgICBlbG0uZGF0YSA9IHZub2RlLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoIChub2RlLCB2bm9kZSwgaW5WUHJlKSB7XHJcbiAgICBpZiAoaXNEZWYodm5vZGUudGFnKSkge1xyXG4gICAgICByZXR1cm4gdm5vZGUudGFnLmluZGV4T2YoJ3Z1ZS1jb21wb25lbnQnKSA9PT0gMCB8fCAoXHJcbiAgICAgICAgIWlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGluVlByZSkgJiZcclxuICAgICAgICB2bm9kZS50YWcudG9Mb3dlckNhc2UoKSA9PT0gKG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09ICh2bm9kZS5pc0NvbW1lbnQgPyA4IDogMylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiBwYXRjaCAob2xkVm5vZGUsIHZub2RlLCBoeWRyYXRpbmcsIHJlbW92ZU9ubHksIHBhcmVudEVsbSwgcmVmRWxtKSB7XHJcbiAgICBpZiAoaXNVbmRlZih2bm9kZSkpIHtcclxuICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzSW5pdGlhbFBhdGNoID0gZmFsc2U7XHJcbiAgICB2YXIgaW5zZXJ0ZWRWbm9kZVF1ZXVlID0gW107XHJcblxyXG4gICAgaWYgKGlzVW5kZWYob2xkVm5vZGUpKSB7XHJcbiAgICAgIC8vIGVtcHR5IG1vdW50IChsaWtlbHkgYXMgY29tcG9uZW50KSwgY3JlYXRlIG5ldyByb290IGVsZW1lbnRcclxuICAgICAgaXNJbml0aWFsUGF0Y2ggPSB0cnVlO1xyXG4gICAgICBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGlzUmVhbEVsZW1lbnQgPSBpc0RlZihvbGRWbm9kZS5ub2RlVHlwZSk7XHJcbiAgICAgIGlmICghaXNSZWFsRWxlbWVudCAmJiBzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xyXG4gICAgICAgIC8vIHBhdGNoIGV4aXN0aW5nIHJvb3Qgbm9kZVxyXG4gICAgICAgIHBhdGNoVm5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpc1JlYWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAvLyBtb3VudGluZyB0byBhIHJlYWwgZWxlbWVudFxyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBzZXJ2ZXItcmVuZGVyZWQgY29udGVudCBhbmQgaWYgd2UgY2FuIHBlcmZvcm1cclxuICAgICAgICAgIC8vIGEgc3VjY2Vzc2Z1bCBoeWRyYXRpb24uXHJcbiAgICAgICAgICBpZiAob2xkVm5vZGUubm9kZVR5cGUgPT09IDEgJiYgb2xkVm5vZGUuaGFzQXR0cmlidXRlKFNTUl9BVFRSKSkge1xyXG4gICAgICAgICAgICBvbGRWbm9kZS5yZW1vdmVBdHRyaWJ1dGUoU1NSX0FUVFIpO1xyXG4gICAgICAgICAgICBoeWRyYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlzVHJ1ZShoeWRyYXRpbmcpKSB7XHJcbiAgICAgICAgICAgIGlmIChoeWRyYXRlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSkge1xyXG4gICAgICAgICAgICAgIGludm9rZUluc2VydEhvb2sodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG9sZFZub2RlXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAgICAgICAnVGhlIGNsaWVudC1zaWRlIHJlbmRlcmVkIHZpcnR1YWwgRE9NIHRyZWUgaXMgbm90IG1hdGNoaW5nICcgK1xyXG4gICAgICAgICAgICAgICAgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgaW5jb3JyZWN0ICcgK1xyXG4gICAgICAgICAgICAgICAgJ0hUTUwgbWFya3VwLCBmb3IgZXhhbXBsZSBuZXN0aW5nIGJsb2NrLWxldmVsIGVsZW1lbnRzIGluc2lkZSAnICtcclxuICAgICAgICAgICAgICAgICc8cD4sIG9yIG1pc3NpbmcgPHRib2R5Pi4gQmFpbGluZyBoeWRyYXRpb24gYW5kIHBlcmZvcm1pbmcgJyArXHJcbiAgICAgICAgICAgICAgICAnZnVsbCBjbGllbnQtc2lkZSByZW5kZXIuJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGVpdGhlciBub3Qgc2VydmVyLXJlbmRlcmVkLCBvciBoeWRyYXRpb24gZmFpbGVkLlxyXG4gICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IG5vZGUgYW5kIHJlcGxhY2UgaXRcclxuICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVwbGFjaW5nIGV4aXN0aW5nIGVsZW1lbnRcclxuICAgICAgICB2YXIgb2xkRWxtID0gb2xkVm5vZGUuZWxtO1xyXG4gICAgICAgIHZhciBwYXJlbnRFbG0kMSA9IG5vZGVPcHMucGFyZW50Tm9kZShvbGRFbG0pO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcclxuICAgICAgICBjcmVhdGVFbG0oXHJcbiAgICAgICAgICB2bm9kZSxcclxuICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcclxuICAgICAgICAgIC8vIGV4dHJlbWVseSByYXJlIGVkZ2UgY2FzZTogZG8gbm90IGluc2VydCBpZiBvbGQgZWxlbWVudCBpcyBpbiBhXHJcbiAgICAgICAgICAvLyBsZWF2aW5nIHRyYW5zaXRpb24uIE9ubHkgaGFwcGVucyB3aGVuIGNvbWJpbmluZyB0cmFuc2l0aW9uICtcclxuICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXHJcbiAgICAgICAgICBvbGRFbG0uX2xlYXZlQ2IgPyBudWxsIDogcGFyZW50RWxtJDEsXHJcbiAgICAgICAgICBub2RlT3BzLm5leHRTaWJsaW5nKG9sZEVsbSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgcGFyZW50IHBsYWNlaG9sZGVyIG5vZGUgZWxlbWVudCwgcmVjdXJzaXZlbHlcclxuICAgICAgICBpZiAoaXNEZWYodm5vZGUucGFyZW50KSkge1xyXG4gICAgICAgICAgdmFyIGFuY2VzdG9yID0gdm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgdmFyIHBhdGNoYWJsZSA9IGlzUGF0Y2hhYmxlKHZub2RlKTtcclxuICAgICAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgY2JzLmRlc3Ryb3lbaV0oYW5jZXN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuY2VzdG9yLmVsbSA9IHZub2RlLmVsbTtcclxuICAgICAgICAgICAgaWYgKHBhdGNoYWJsZSkge1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xyXG4gICAgICAgICAgICAgICAgY2JzLmNyZWF0ZVtpJDFdKGVtcHR5Tm9kZSwgYW5jZXN0b3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyAjNjUxM1xyXG4gICAgICAgICAgICAgIC8vIGludm9rZSBpbnNlcnQgaG9va3MgdGhhdCBtYXkgaGF2ZSBiZWVuIG1lcmdlZCBieSBjcmVhdGUgaG9va3MuXHJcbiAgICAgICAgICAgICAgLy8gZS5nLiBmb3IgZGlyZWN0aXZlcyB0aGF0IHVzZXMgdGhlIFwiaW5zZXJ0ZWRcIiBob29rLlxyXG4gICAgICAgICAgICAgIHZhciBpbnNlcnQgPSBhbmNlc3Rvci5kYXRhLmhvb2suaW5zZXJ0O1xyXG4gICAgICAgICAgICAgIGlmIChpbnNlcnQubWVyZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGFydCBhdCBpbmRleCAxIHRvIGF2b2lkIHJlLWludm9raW5nIGNvbXBvbmVudCBtb3VudGVkIGhvb2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkMiA9IDE7IGkkMiA8IGluc2VydC5mbnMubGVuZ3RoOyBpJDIrKykge1xyXG4gICAgICAgICAgICAgICAgICBpbnNlcnQuZm5zW2kkMl0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVnaXN0ZXJSZWYoYW5jZXN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVzdHJveSBvbGQgbm9kZVxyXG4gICAgICAgIGlmIChpc0RlZihwYXJlbnRFbG0kMSkpIHtcclxuICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0kMSwgW29sZFZub2RlXSwgMCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50YWcpKSB7XHJcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpc0luaXRpYWxQYXRjaCk7XHJcbiAgICByZXR1cm4gdm5vZGUuZWxtXHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBkaXJlY3RpdmVzID0ge1xyXG4gIGNyZWF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcclxuICB1cGRhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcclxuICAgIHVwZGF0ZURpcmVjdGl2ZXModm5vZGUsIGVtcHR5Tm9kZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVEaXJlY3RpdmVzIChvbGRWbm9kZSwgdm5vZGUpIHtcclxuICBpZiAob2xkVm5vZGUuZGF0YS5kaXJlY3RpdmVzIHx8IHZub2RlLmRhdGEuZGlyZWN0aXZlcykge1xyXG4gICAgX3VwZGF0ZShvbGRWbm9kZSwgdm5vZGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX3VwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XHJcbiAgdmFyIGlzQ3JlYXRlID0gb2xkVm5vZGUgPT09IGVtcHR5Tm9kZTtcclxuICB2YXIgaXNEZXN0cm95ID0gdm5vZGUgPT09IGVtcHR5Tm9kZTtcclxuICB2YXIgb2xkRGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMShvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMsIG9sZFZub2RlLmNvbnRleHQpO1xyXG4gIHZhciBuZXdEaXJzID0gbm9ybWFsaXplRGlyZWN0aXZlcyQxKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgdm5vZGUuY29udGV4dCk7XHJcblxyXG4gIHZhciBkaXJzV2l0aEluc2VydCA9IFtdO1xyXG4gIHZhciBkaXJzV2l0aFBvc3RwYXRjaCA9IFtdO1xyXG5cclxuICB2YXIga2V5LCBvbGREaXIsIGRpcjtcclxuICBmb3IgKGtleSBpbiBuZXdEaXJzKSB7XHJcbiAgICBvbGREaXIgPSBvbGREaXJzW2tleV07XHJcbiAgICBkaXIgPSBuZXdEaXJzW2tleV07XHJcbiAgICBpZiAoIW9sZERpcikge1xyXG4gICAgICAvLyBuZXcgZGlyZWN0aXZlLCBiaW5kXHJcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAnYmluZCcsIHZub2RlLCBvbGRWbm9kZSk7XHJcbiAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuaW5zZXJ0ZWQpIHtcclxuICAgICAgICBkaXJzV2l0aEluc2VydC5wdXNoKGRpcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGV4aXN0aW5nIGRpcmVjdGl2ZSwgdXBkYXRlXHJcbiAgICAgIGRpci5vbGRWYWx1ZSA9IG9sZERpci52YWx1ZTtcclxuICAgICAgY2FsbEhvb2skMShkaXIsICd1cGRhdGUnLCB2bm9kZSwgb2xkVm5vZGUpO1xyXG4gICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmNvbXBvbmVudFVwZGF0ZWQpIHtcclxuICAgICAgICBkaXJzV2l0aFBvc3RwYXRjaC5wdXNoKGRpcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChkaXJzV2l0aEluc2VydC5sZW5ndGgpIHtcclxuICAgIHZhciBjYWxsSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2FsbEhvb2skMShkaXJzV2l0aEluc2VydFtpXSwgJ2luc2VydGVkJywgdm5vZGUsIG9sZFZub2RlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmIChpc0NyZWF0ZSkge1xyXG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGNhbGxJbnNlcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbEluc2VydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aCkge1xyXG4gICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdwb3N0cGF0Y2gnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlyc1dpdGhQb3N0cGF0Y2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoUG9zdHBhdGNoW2ldLCAnY29tcG9uZW50VXBkYXRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc0NyZWF0ZSkge1xyXG4gICAgZm9yIChrZXkgaW4gb2xkRGlycykge1xyXG4gICAgICBpZiAoIW5ld0RpcnNba2V5XSkge1xyXG4gICAgICAgIC8vIG5vIGxvbmdlciBwcmVzZW50LCB1bmJpbmRcclxuICAgICAgICBjYWxsSG9vayQxKG9sZERpcnNba2V5XSwgJ3VuYmluZCcsIG9sZFZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudmFyIGVtcHR5TW9kaWZpZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMkMSAoXHJcbiAgZGlycyxcclxuICB2bVxyXG4pIHtcclxuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBpZiAoIWRpcnMpIHtcclxuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuICB2YXIgaSwgZGlyO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkaXIgPSBkaXJzW2ldO1xyXG4gICAgaWYgKCFkaXIubW9kaWZpZXJzKSB7XHJcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxyXG4gICAgICBkaXIubW9kaWZpZXJzID0gZW1wdHlNb2RpZmllcnM7XHJcbiAgICB9XHJcbiAgICByZXNbZ2V0UmF3RGlyTmFtZShkaXIpXSA9IGRpcjtcclxuICAgIGRpci5kZWYgPSByZXNvbHZlQXNzZXQodm0uJG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyLm5hbWUsIHRydWUpO1xyXG4gIH1cclxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhd0Rpck5hbWUgKGRpcikge1xyXG4gIHJldHVybiBkaXIucmF3TmFtZSB8fCAoKGRpci5uYW1lKSArIFwiLlwiICsgKE9iamVjdC5rZXlzKGRpci5tb2RpZmllcnMgfHwge30pLmpvaW4oJy4nKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxIb29rJDEgKGRpciwgaG9vaywgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpIHtcclxuICB2YXIgZm4gPSBkaXIuZGVmICYmIGRpci5kZWZbaG9va107XHJcbiAgaWYgKGZuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmbih2bm9kZS5lbG0sIGRpciwgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBoYW5kbGVFcnJvcihlLCB2bm9kZS5jb250ZXh0LCAoXCJkaXJlY3RpdmUgXCIgKyAoZGlyLm5hbWUpICsgXCIgXCIgKyBob29rICsgXCIgaG9va1wiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgYmFzZU1vZHVsZXMgPSBbXHJcbiAgcmVmLFxyXG4gIGRpcmVjdGl2ZXNcclxuXVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVBdHRycyAob2xkVm5vZGUsIHZub2RlKSB7XHJcbiAgdmFyIG9wdHMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xyXG4gIGlmIChpc0RlZihvcHRzKSAmJiBvcHRzLkN0b3Iub3B0aW9ucy5pbmhlcml0QXR0cnMgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5hdHRycykgJiYgaXNVbmRlZih2bm9kZS5kYXRhLmF0dHJzKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciBrZXksIGN1ciwgb2xkO1xyXG4gIHZhciBlbG0gPSB2bm9kZS5lbG07XHJcbiAgdmFyIG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcclxuICB2YXIgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzIHx8IHt9O1xyXG4gIC8vIGNsb25lIG9ic2VydmVkIG9iamVjdHMsIGFzIHRoZSB1c2VyIHByb2JhYmx5IHdhbnRzIHRvIG11dGF0ZSBpdFxyXG4gIGlmIChpc0RlZihhdHRycy5fX29iX18pKSB7XHJcbiAgICBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGF0dHJzKTtcclxuICB9XHJcblxyXG4gIGZvciAoa2V5IGluIGF0dHJzKSB7XHJcbiAgICBjdXIgPSBhdHRyc1trZXldO1xyXG4gICAgb2xkID0gb2xkQXR0cnNba2V5XTtcclxuICAgIGlmIChvbGQgIT09IGN1cikge1xyXG4gICAgICBzZXRBdHRyKGVsbSwga2V5LCBjdXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyAjNDM5MTogaW4gSUU5LCBzZXR0aW5nIHR5cGUgY2FuIHJlc2V0IHZhbHVlIGZvciBpbnB1dFt0eXBlPXJhZGlvXVxyXG4gIC8vICM2NjY2OiBJRS9FZGdlIGZvcmNlcyBwcm9ncmVzcyB2YWx1ZSBkb3duIHRvIDEgYmVmb3JlIHNldHRpbmcgYSBtYXhcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoKGlzSUUgfHwgaXNFZGdlKSAmJiBhdHRycy52YWx1ZSAhPT0gb2xkQXR0cnMudmFsdWUpIHtcclxuICAgIHNldEF0dHIoZWxtLCAndmFsdWUnLCBhdHRycy52YWx1ZSk7XHJcbiAgfVxyXG4gIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XHJcbiAgICBpZiAoaXNVbmRlZihhdHRyc1trZXldKSkge1xyXG4gICAgICBpZiAoaXNYbGluayhrZXkpKSB7XHJcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKHhsaW5rTlMsIGdldFhsaW5rUHJvcChrZXkpKTtcclxuICAgICAgfSBlbHNlIGlmICghaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XHJcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xyXG4gIGlmIChlbC50YWdOYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XHJcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XHJcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyKGtleSkpIHtcclxuICAgIC8vIHNldCBhdHRyaWJ1dGUgZm9yIGJsYW5rIHZhbHVlXHJcbiAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxyXG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XHJcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGVjaG5pY2FsbHkgYWxsb3dmdWxsc2NyZWVuIGlzIGEgYm9vbGVhbiBhdHRyaWJ1dGUgZm9yIDxpZnJhbWU+LFxyXG4gICAgICAvLyBidXQgRmxhc2ggZXhwZWN0cyBhIHZhbHVlIG9mIFwidHJ1ZVwiIHdoZW4gdXNlZCBvbiA8ZW1iZWQ+IHRhZ1xyXG4gICAgICB2YWx1ZSA9IGtleSA9PT0gJ2FsbG93ZnVsbHNjcmVlbicgJiYgZWwudGFnTmFtZSA9PT0gJ0VNQkVEJ1xyXG4gICAgICAgID8gJ3RydWUnXHJcbiAgICAgICAgOiBrZXk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkgfHwgdmFsdWUgPT09ICdmYWxzZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcclxuICB9IGVsc2UgaWYgKGlzWGxpbmsoa2V5KSkge1xyXG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XHJcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZU5TKHhsaW5rTlMsIGdldFhsaW5rUHJvcChrZXkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiYXNlU2V0QXR0ciAoZWwsIGtleSwgdmFsdWUpIHtcclxuICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcclxuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAjNzEzODogSUUxMCAmIDExIGZpcmVzIGlucHV0IGV2ZW50IHdoZW4gc2V0dGluZyBwbGFjZWhvbGRlciBvblxyXG4gICAgLy8gPHRleHRhcmVhPi4uLiBibG9jayB0aGUgZmlyc3QgaW5wdXQgZXZlbnQgYW5kIHJlbW92ZSB0aGUgYmxvY2tlclxyXG4gICAgLy8gaW1tZWRpYXRlbHkuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChcclxuICAgICAgaXNJRSAmJiAhaXNJRTkgJiZcclxuICAgICAgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJlxyXG4gICAgICBrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgIWVsLl9faWVwaFxyXG4gICAgKSB7XHJcbiAgICAgIHZhciBibG9ja2VyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XHJcbiAgICAgIH07XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XHJcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxyXG4gICAgICBlbC5fX2llcGggPSB0cnVlOyAvKiBJRSBwbGFjZWhvbGRlciBwYXRjaGVkICovXHJcbiAgICB9XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgYXR0cnMgPSB7XHJcbiAgY3JlYXRlOiB1cGRhdGVBdHRycyxcclxuICB1cGRhdGU6IHVwZGF0ZUF0dHJzXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2xhc3MgKG9sZFZub2RlLCB2bm9kZSkge1xyXG4gIHZhciBlbCA9IHZub2RlLmVsbTtcclxuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XHJcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xyXG4gIGlmIChcclxuICAgIGlzVW5kZWYoZGF0YS5zdGF0aWNDbGFzcykgJiZcclxuICAgIGlzVW5kZWYoZGF0YS5jbGFzcykgJiYgKFxyXG4gICAgICBpc1VuZGVmKG9sZERhdGEpIHx8IChcclxuICAgICAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljQ2xhc3MpICYmXHJcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLmNsYXNzKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIHZhciBjbHMgPSBnZW5DbGFzc0ZvclZub2RlKHZub2RlKTtcclxuXHJcbiAgLy8gaGFuZGxlIHRyYW5zaXRpb24gY2xhc3Nlc1xyXG4gIHZhciB0cmFuc2l0aW9uQ2xhc3MgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXM7XHJcbiAgaWYgKGlzRGVmKHRyYW5zaXRpb25DbGFzcykpIHtcclxuICAgIGNscyA9IGNvbmNhdChjbHMsIHN0cmluZ2lmeUNsYXNzKHRyYW5zaXRpb25DbGFzcykpO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0IHRoZSBjbGFzc1xyXG4gIGlmIChjbHMgIT09IGVsLl9wcmV2Q2xhc3MpIHtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbHMpO1xyXG4gICAgZWwuX3ByZXZDbGFzcyA9IGNscztcclxuICB9XHJcbn1cclxuXHJcbnZhciBrbGFzcyA9IHtcclxuICBjcmVhdGU6IHVwZGF0ZUNsYXNzLFxyXG4gIHVwZGF0ZTogdXBkYXRlQ2xhc3NcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgdmFsaWREaXZpc2lvbkNoYXJSRSA9IC9bXFx3KS4rXFwtXyRcXF1dLztcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRmlsdGVycyAoZXhwKSB7XHJcbiAgdmFyIGluU2luZ2xlID0gZmFsc2U7XHJcbiAgdmFyIGluRG91YmxlID0gZmFsc2U7XHJcbiAgdmFyIGluVGVtcGxhdGVTdHJpbmcgPSBmYWxzZTtcclxuICB2YXIgaW5SZWdleCA9IGZhbHNlO1xyXG4gIHZhciBjdXJseSA9IDA7XHJcbiAgdmFyIHNxdWFyZSA9IDA7XHJcbiAgdmFyIHBhcmVuID0gMDtcclxuICB2YXIgbGFzdEZpbHRlckluZGV4ID0gMDtcclxuICB2YXIgYywgcHJldiwgaSwgZXhwcmVzc2lvbiwgZmlsdGVycztcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGV4cC5sZW5ndGg7IGkrKykge1xyXG4gICAgcHJldiA9IGM7XHJcbiAgICBjID0gZXhwLmNoYXJDb2RlQXQoaSk7XHJcbiAgICBpZiAoaW5TaW5nbGUpIHtcclxuICAgICAgaWYgKGMgPT09IDB4MjcgJiYgcHJldiAhPT0gMHg1QykgeyBpblNpbmdsZSA9IGZhbHNlOyB9XHJcbiAgICB9IGVsc2UgaWYgKGluRG91YmxlKSB7XHJcbiAgICAgIGlmIChjID09PSAweDIyICYmIHByZXYgIT09IDB4NUMpIHsgaW5Eb3VibGUgPSBmYWxzZTsgfVxyXG4gICAgfSBlbHNlIGlmIChpblRlbXBsYXRlU3RyaW5nKSB7XHJcbiAgICAgIGlmIChjID09PSAweDYwICYmIHByZXYgIT09IDB4NUMpIHsgaW5UZW1wbGF0ZVN0cmluZyA9IGZhbHNlOyB9XHJcbiAgICB9IGVsc2UgaWYgKGluUmVnZXgpIHtcclxuICAgICAgaWYgKGMgPT09IDB4MmYgJiYgcHJldiAhPT0gMHg1QykgeyBpblJlZ2V4ID0gZmFsc2U7IH1cclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGMgPT09IDB4N0MgJiYgLy8gcGlwZVxyXG4gICAgICBleHAuY2hhckNvZGVBdChpICsgMSkgIT09IDB4N0MgJiZcclxuICAgICAgZXhwLmNoYXJDb2RlQXQoaSAtIDEpICE9PSAweDdDICYmXHJcbiAgICAgICFjdXJseSAmJiAhc3F1YXJlICYmICFwYXJlblxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBmaXJzdCBmaWx0ZXIsIGVuZCBvZiBleHByZXNzaW9uXHJcbiAgICAgICAgbGFzdEZpbHRlckluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cC5zbGljZSgwLCBpKS50cmltKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHVzaEZpbHRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICBjYXNlIDB4MjI6IGluRG91YmxlID0gdHJ1ZTsgYnJlYWsgICAgICAgICAvLyBcIlxyXG4gICAgICAgIGNhc2UgMHgyNzogaW5TaW5nbGUgPSB0cnVlOyBicmVhayAgICAgICAgIC8vICdcclxuICAgICAgICBjYXNlIDB4NjA6IGluVGVtcGxhdGVTdHJpbmcgPSB0cnVlOyBicmVhayAvLyBgXHJcbiAgICAgICAgY2FzZSAweDI4OiBwYXJlbisrOyBicmVhayAgICAgICAgICAgICAgICAgLy8gKFxyXG4gICAgICAgIGNhc2UgMHgyOTogcGFyZW4tLTsgYnJlYWsgICAgICAgICAgICAgICAgIC8vIClcclxuICAgICAgICBjYXNlIDB4NUI6IHNxdWFyZSsrOyBicmVhayAgICAgICAgICAgICAgICAvLyBbXHJcbiAgICAgICAgY2FzZSAweDVEOiBzcXVhcmUtLTsgYnJlYWsgICAgICAgICAgICAgICAgLy8gXVxyXG4gICAgICAgIGNhc2UgMHg3QjogY3VybHkrKzsgYnJlYWsgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICBjYXNlIDB4N0Q6IGN1cmx5LS07IGJyZWFrICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMgPT09IDB4MmYpIHsgLy8gL1xyXG4gICAgICAgIHZhciBqID0gaSAtIDE7XHJcbiAgICAgICAgdmFyIHAgPSAodm9pZCAwKTtcclxuICAgICAgICAvLyBmaW5kIGZpcnN0IG5vbi13aGl0ZXNwYWNlIHByZXYgY2hhclxyXG4gICAgICAgIGZvciAoOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgcCA9IGV4cC5jaGFyQXQoaik7XHJcbiAgICAgICAgICBpZiAocCAhPT0gJyAnKSB7IGJyZWFrIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwIHx8ICF2YWxpZERpdmlzaW9uQ2hhclJFLnRlc3QocCkpIHtcclxuICAgICAgICAgIGluUmVnZXggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgZXhwcmVzc2lvbiA9IGV4cC5zbGljZSgwLCBpKS50cmltKCk7XHJcbiAgfSBlbHNlIGlmIChsYXN0RmlsdGVySW5kZXggIT09IDApIHtcclxuICAgIHB1c2hGaWx0ZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHB1c2hGaWx0ZXIgKCkge1xyXG4gICAgKGZpbHRlcnMgfHwgKGZpbHRlcnMgPSBbXSkpLnB1c2goZXhwLnNsaWNlKGxhc3RGaWx0ZXJJbmRleCwgaSkudHJpbSgpKTtcclxuICAgIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpbHRlcnMpIHtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGV4cHJlc3Npb24gPSB3cmFwRmlsdGVyKGV4cHJlc3Npb24sIGZpbHRlcnNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV4cHJlc3Npb25cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcEZpbHRlciAoZXhwLCBmaWx0ZXIpIHtcclxuICB2YXIgaSA9IGZpbHRlci5pbmRleE9mKCcoJyk7XHJcbiAgaWYgKGkgPCAwKSB7XHJcbiAgICAvLyBfZjogcmVzb2x2ZUZpbHRlclxyXG4gICAgcmV0dXJuIChcIl9mKFxcXCJcIiArIGZpbHRlciArIFwiXFxcIikoXCIgKyBleHAgKyBcIilcIilcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIG5hbWUgPSBmaWx0ZXIuc2xpY2UoMCwgaSk7XHJcbiAgICB2YXIgYXJncyA9IGZpbHRlci5zbGljZShpICsgMSk7XHJcbiAgICByZXR1cm4gKFwiX2YoXFxcIlwiICsgbmFtZSArIFwiXFxcIikoXCIgKyBleHAgKyAoYXJncyAhPT0gJyknID8gJywnICsgYXJncyA6IGFyZ3MpKVxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBiYXNlV2FybiAobXNnKSB7XHJcbiAgY29uc29sZS5lcnJvcigoXCJbVnVlIGNvbXBpbGVyXTogXCIgKyBtc2cpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGx1Y2tNb2R1bGVGdW5jdGlvbiAoXHJcbiAgbW9kdWxlcyxcclxuICBrZXlcclxuKSB7XHJcbiAgcmV0dXJuIG1vZHVsZXNcclxuICAgID8gbW9kdWxlcy5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG1ba2V5XTsgfSkuZmlsdGVyKGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9KVxyXG4gICAgOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9wIChlbCwgbmFtZSwgdmFsdWUpIHtcclxuICAoZWwucHJvcHMgfHwgKGVsLnByb3BzID0gW10pKS5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0pO1xyXG4gIGVsLnBsYWluID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEF0dHIgKGVsLCBuYW1lLCB2YWx1ZSkge1xyXG4gIChlbC5hdHRycyB8fCAoZWwuYXR0cnMgPSBbXSkpLnB1c2goeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgZWwucGxhaW4gPSBmYWxzZTtcclxufVxyXG5cclxuLy8gYWRkIGEgcmF3IGF0dHIgKHVzZSB0aGlzIGluIHByZVRyYW5zZm9ybXMpXHJcbmZ1bmN0aW9uIGFkZFJhd0F0dHIgKGVsLCBuYW1lLCB2YWx1ZSkge1xyXG4gIGVsLmF0dHJzTWFwW25hbWVdID0gdmFsdWU7XHJcbiAgZWwuYXR0cnNMaXN0LnB1c2goeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZERpcmVjdGl2ZSAoXHJcbiAgZWwsXHJcbiAgbmFtZSxcclxuICByYXdOYW1lLFxyXG4gIHZhbHVlLFxyXG4gIGFyZyxcclxuICBtb2RpZmllcnNcclxuKSB7XHJcbiAgKGVsLmRpcmVjdGl2ZXMgfHwgKGVsLmRpcmVjdGl2ZXMgPSBbXSkpLnB1c2goeyBuYW1lOiBuYW1lLCByYXdOYW1lOiByYXdOYW1lLCB2YWx1ZTogdmFsdWUsIGFyZzogYXJnLCBtb2RpZmllcnM6IG1vZGlmaWVycyB9KTtcclxuICBlbC5wbGFpbiA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVyIChcclxuICBlbCxcclxuICBuYW1lLFxyXG4gIHZhbHVlLFxyXG4gIG1vZGlmaWVycyxcclxuICBpbXBvcnRhbnQsXHJcbiAgd2FyblxyXG4pIHtcclxuICBtb2RpZmllcnMgPSBtb2RpZmllcnMgfHwgZW1wdHlPYmplY3Q7XHJcbiAgLy8gd2FybiBwcmV2ZW50IGFuZCBwYXNzaXZlIG1vZGlmaWVyXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgaWYgKFxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuICYmXHJcbiAgICBtb2RpZmllcnMucHJldmVudCAmJiBtb2RpZmllcnMucGFzc2l2ZVxyXG4gICkge1xyXG4gICAgd2FybihcclxuICAgICAgJ3Bhc3NpdmUgYW5kIHByZXZlbnQgY2FuXFwndCBiZSB1c2VkIHRvZ2V0aGVyLiAnICtcclxuICAgICAgJ1Bhc3NpdmUgaGFuZGxlciBjYW5cXCd0IHByZXZlbnQgZGVmYXVsdCBldmVudC4nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2sgY2FwdHVyZSBtb2RpZmllclxyXG4gIGlmIChtb2RpZmllcnMuY2FwdHVyZSkge1xyXG4gICAgZGVsZXRlIG1vZGlmaWVycy5jYXB0dXJlO1xyXG4gICAgbmFtZSA9ICchJyArIG5hbWU7IC8vIG1hcmsgdGhlIGV2ZW50IGFzIGNhcHR1cmVkXHJcbiAgfVxyXG4gIGlmIChtb2RpZmllcnMub25jZSkge1xyXG4gICAgZGVsZXRlIG1vZGlmaWVycy5vbmNlO1xyXG4gICAgbmFtZSA9ICd+JyArIG5hbWU7IC8vIG1hcmsgdGhlIGV2ZW50IGFzIG9uY2VcclxuICB9XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgaWYgKG1vZGlmaWVycy5wYXNzaXZlKSB7XHJcbiAgICBkZWxldGUgbW9kaWZpZXJzLnBhc3NpdmU7XHJcbiAgICBuYW1lID0gJyYnICsgbmFtZTsgLy8gbWFyayB0aGUgZXZlbnQgYXMgcGFzc2l2ZVxyXG4gIH1cclxuXHJcbiAgLy8gbm9ybWFsaXplIGNsaWNrLnJpZ2h0IGFuZCBjbGljay5taWRkbGUgc2luY2UgdGhleSBkb24ndCBhY3R1YWxseSBmaXJlXHJcbiAgLy8gdGhpcyBpcyB0ZWNobmljYWxseSBicm93c2VyLXNwZWNpZmljLCBidXQgYXQgbGVhc3QgZm9yIG5vdyBicm93c2VycyBhcmVcclxuICAvLyB0aGUgb25seSB0YXJnZXQgZW52cyB0aGF0IGhhdmUgcmlnaHQvbWlkZGxlIGNsaWNrcy5cclxuICBpZiAobmFtZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgaWYgKG1vZGlmaWVycy5yaWdodCkge1xyXG4gICAgICBuYW1lID0gJ2NvbnRleHRtZW51JztcclxuICAgICAgZGVsZXRlIG1vZGlmaWVycy5yaWdodDtcclxuICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLm1pZGRsZSkge1xyXG4gICAgICBuYW1lID0gJ21vdXNldXAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGV2ZW50cztcclxuICBpZiAobW9kaWZpZXJzLm5hdGl2ZSkge1xyXG4gICAgZGVsZXRlIG1vZGlmaWVycy5uYXRpdmU7XHJcbiAgICBldmVudHMgPSBlbC5uYXRpdmVFdmVudHMgfHwgKGVsLm5hdGl2ZUV2ZW50cyA9IHt9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXZlbnRzID0gZWwuZXZlbnRzIHx8IChlbC5ldmVudHMgPSB7fSk7XHJcbiAgfVxyXG5cclxuICB2YXIgbmV3SGFuZGxlciA9IHtcclxuICAgIHZhbHVlOiB2YWx1ZS50cmltKClcclxuICB9O1xyXG4gIGlmIChtb2RpZmllcnMgIT09IGVtcHR5T2JqZWN0KSB7XHJcbiAgICBuZXdIYW5kbGVyLm1vZGlmaWVycyA9IG1vZGlmaWVycztcclxuICB9XHJcblxyXG4gIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVycykpIHtcclxuICAgIGltcG9ydGFudCA/IGhhbmRsZXJzLnVuc2hpZnQobmV3SGFuZGxlcikgOiBoYW5kbGVycy5wdXNoKG5ld0hhbmRsZXIpO1xyXG4gIH0gZWxzZSBpZiAoaGFuZGxlcnMpIHtcclxuICAgIGV2ZW50c1tuYW1lXSA9IGltcG9ydGFudCA/IFtuZXdIYW5kbGVyLCBoYW5kbGVyc10gOiBbaGFuZGxlcnMsIG5ld0hhbmRsZXJdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBldmVudHNbbmFtZV0gPSBuZXdIYW5kbGVyO1xyXG4gIH1cclxuXHJcbiAgZWwucGxhaW4gPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmluZGluZ0F0dHIgKFxyXG4gIGVsLFxyXG4gIG5hbWUsXHJcbiAgZ2V0U3RhdGljXHJcbikge1xyXG4gIHZhciBkeW5hbWljVmFsdWUgPVxyXG4gICAgZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJzonICsgbmFtZSkgfHxcclxuICAgIGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWJpbmQ6JyArIG5hbWUpO1xyXG4gIGlmIChkeW5hbWljVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmlsdGVycyhkeW5hbWljVmFsdWUpXHJcbiAgfSBlbHNlIGlmIChnZXRTdGF0aWMgIT09IGZhbHNlKSB7XHJcbiAgICB2YXIgc3RhdGljVmFsdWUgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCBuYW1lKTtcclxuICAgIGlmIChzdGF0aWNWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdGF0aWNWYWx1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG5vdGU6IHRoaXMgb25seSByZW1vdmVzIHRoZSBhdHRyIGZyb20gdGhlIEFycmF5IChhdHRyc0xpc3QpIHNvIHRoYXQgaXRcclxuLy8gZG9lc24ndCBnZXQgcHJvY2Vzc2VkIGJ5IHByb2Nlc3NBdHRycy5cclxuLy8gQnkgZGVmYXVsdCBpdCBkb2VzIE5PVCByZW1vdmUgaXQgZnJvbSB0aGUgbWFwIChhdHRyc01hcCkgYmVjYXVzZSB0aGUgbWFwIGlzXHJcbi8vIG5lZWRlZCBkdXJpbmcgY29kZWdlbi5cclxuZnVuY3Rpb24gZ2V0QW5kUmVtb3ZlQXR0ciAoXHJcbiAgZWwsXHJcbiAgbmFtZSxcclxuICByZW1vdmVGcm9tTWFwXHJcbikge1xyXG4gIHZhciB2YWw7XHJcbiAgaWYgKCh2YWwgPSBlbC5hdHRyc01hcFtuYW1lXSkgIT0gbnVsbCkge1xyXG4gICAgdmFyIGxpc3QgPSBlbC5hdHRyc0xpc3Q7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmIChsaXN0W2ldLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChyZW1vdmVGcm9tTWFwKSB7XHJcbiAgICBkZWxldGUgZWwuYXR0cnNNYXBbbmFtZV07XHJcbiAgfVxyXG4gIHJldHVybiB2YWxcclxufVxyXG5cclxuLyogICovXHJcblxyXG4vKipcclxuICogQ3Jvc3MtcGxhdGZvcm0gY29kZSBnZW5lcmF0aW9uIGZvciBjb21wb25lbnQgdi1tb2RlbFxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuQ29tcG9uZW50TW9kZWwgKFxyXG4gIGVsLFxyXG4gIHZhbHVlLFxyXG4gIG1vZGlmaWVyc1xyXG4pIHtcclxuICB2YXIgcmVmID0gbW9kaWZpZXJzIHx8IHt9O1xyXG4gIHZhciBudW1iZXIgPSByZWYubnVtYmVyO1xyXG4gIHZhciB0cmltID0gcmVmLnRyaW07XHJcblxyXG4gIHZhciBiYXNlVmFsdWVFeHByZXNzaW9uID0gJyQkdic7XHJcbiAgdmFyIHZhbHVlRXhwcmVzc2lvbiA9IGJhc2VWYWx1ZUV4cHJlc3Npb247XHJcbiAgaWYgKHRyaW0pIHtcclxuICAgIHZhbHVlRXhwcmVzc2lvbiA9XHJcbiAgICAgIFwiKHR5cGVvZiBcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIiA9PT0gJ3N0cmluZydcIiArXHJcbiAgICAgIFwiPyBcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIi50cmltKClcIiArXHJcbiAgICAgIFwiOiBcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIilcIjtcclxuICB9XHJcbiAgaWYgKG51bWJlcikge1xyXG4gICAgdmFsdWVFeHByZXNzaW9uID0gXCJfbihcIiArIHZhbHVlRXhwcmVzc2lvbiArIFwiKVwiO1xyXG4gIH1cclxuICB2YXIgYXNzaWdubWVudCA9IGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCB2YWx1ZUV4cHJlc3Npb24pO1xyXG5cclxuICBlbC5tb2RlbCA9IHtcclxuICAgIHZhbHVlOiAoXCIoXCIgKyB2YWx1ZSArIFwiKVwiKSxcclxuICAgIGV4cHJlc3Npb246IChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpLFxyXG4gICAgY2FsbGJhY2s6IChcImZ1bmN0aW9uIChcIiArIGJhc2VWYWx1ZUV4cHJlc3Npb24gKyBcIikge1wiICsgYXNzaWdubWVudCArIFwifVwiKVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcm9zcy1wbGF0Zm9ybSBjb2RlZ2VuIGhlbHBlciBmb3IgZ2VuZXJhdGluZyB2LW1vZGVsIHZhbHVlIGFzc2lnbm1lbnQgY29kZS5cclxuICovXHJcbmZ1bmN0aW9uIGdlbkFzc2lnbm1lbnRDb2RlIChcclxuICB2YWx1ZSxcclxuICBhc3NpZ25tZW50XHJcbikge1xyXG4gIHZhciByZXMgPSBwYXJzZU1vZGVsKHZhbHVlKTtcclxuICBpZiAocmVzLmtleSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICh2YWx1ZSArIFwiPVwiICsgYXNzaWdubWVudClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcIiRzZXQoXCIgKyAocmVzLmV4cCkgKyBcIiwgXCIgKyAocmVzLmtleSkgKyBcIiwgXCIgKyBhc3NpZ25tZW50ICsgXCIpXCIpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYSB2LW1vZGVsIGV4cHJlc3Npb24gaW50byBhIGJhc2UgcGF0aCBhbmQgYSBmaW5hbCBrZXkgc2VnbWVudC5cclxuICogSGFuZGxlcyBib3RoIGRvdC1wYXRoIGFuZCBwb3NzaWJsZSBzcXVhcmUgYnJhY2tldHMuXHJcbiAqXHJcbiAqIFBvc3NpYmxlIGNhc2VzOlxyXG4gKlxyXG4gKiAtIHRlc3RcclxuICogLSB0ZXN0W2tleV1cclxuICogLSB0ZXN0W3Rlc3QxW2tleV1dXHJcbiAqIC0gdGVzdFtcImFcIl1ba2V5XVxyXG4gKiAtIHh4eC50ZXN0W2FbYV0udGVzdDFba2V5XV1cclxuICogLSB0ZXN0Lnh4eC5hW1wiYXNhXCJdW3Rlc3QxW2tleV1dXHJcbiAqXHJcbiAqL1xyXG5cclxudmFyIGxlbjtcclxudmFyIHN0cjtcclxudmFyIGNocjtcclxudmFyIGluZGV4JDE7XHJcbnZhciBleHByZXNzaW9uUG9zO1xyXG52YXIgZXhwcmVzc2lvbkVuZFBvcztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VNb2RlbCAodmFsKSB7XHJcbiAgLy8gRml4IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvcHVsbC83NzMwXHJcbiAgLy8gYWxsb3cgdi1tb2RlbD1cIm9iai52YWwgXCIgKHRyYWlsaW5nIHdoaXRlc3BhY2UpXHJcbiAgdmFsID0gdmFsLnRyaW0oKTtcclxuICBsZW4gPSB2YWwubGVuZ3RoO1xyXG5cclxuICBpZiAodmFsLmluZGV4T2YoJ1snKSA8IDAgfHwgdmFsLmxhc3RJbmRleE9mKCddJykgPCBsZW4gLSAxKSB7XHJcbiAgICBpbmRleCQxID0gdmFsLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICBpZiAoaW5kZXgkMSA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXhwOiB2YWwuc2xpY2UoMCwgaW5kZXgkMSksXHJcbiAgICAgICAga2V5OiAnXCInICsgdmFsLnNsaWNlKGluZGV4JDEgKyAxKSArICdcIidcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBleHA6IHZhbCxcclxuICAgICAgICBrZXk6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RyID0gdmFsO1xyXG4gIGluZGV4JDEgPSBleHByZXNzaW9uUG9zID0gZXhwcmVzc2lvbkVuZFBvcyA9IDA7XHJcblxyXG4gIHdoaWxlICghZW9mKCkpIHtcclxuICAgIGNociA9IG5leHQoKTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKGlzU3RyaW5nU3RhcnQoY2hyKSkge1xyXG4gICAgICBwYXJzZVN0cmluZyhjaHIpO1xyXG4gICAgfSBlbHNlIGlmIChjaHIgPT09IDB4NUIpIHtcclxuICAgICAgcGFyc2VCcmFja2V0KGNocik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXhwOiB2YWwuc2xpY2UoMCwgZXhwcmVzc2lvblBvcyksXHJcbiAgICBrZXk6IHZhbC5zbGljZShleHByZXNzaW9uUG9zICsgMSwgZXhwcmVzc2lvbkVuZFBvcylcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHQgKCkge1xyXG4gIHJldHVybiBzdHIuY2hhckNvZGVBdCgrK2luZGV4JDEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVvZiAoKSB7XHJcbiAgcmV0dXJuIGluZGV4JDEgPj0gbGVuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nU3RhcnQgKGNocikge1xyXG4gIHJldHVybiBjaHIgPT09IDB4MjIgfHwgY2hyID09PSAweDI3XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQnJhY2tldCAoY2hyKSB7XHJcbiAgdmFyIGluQnJhY2tldCA9IDE7XHJcbiAgZXhwcmVzc2lvblBvcyA9IGluZGV4JDE7XHJcbiAgd2hpbGUgKCFlb2YoKSkge1xyXG4gICAgY2hyID0gbmV4dCgpO1xyXG4gICAgaWYgKGlzU3RyaW5nU3RhcnQoY2hyKSkge1xyXG4gICAgICBwYXJzZVN0cmluZyhjaHIpO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgaWYgKGNociA9PT0gMHg1QikgeyBpbkJyYWNrZXQrKzsgfVxyXG4gICAgaWYgKGNociA9PT0gMHg1RCkgeyBpbkJyYWNrZXQtLTsgfVxyXG4gICAgaWYgKGluQnJhY2tldCA9PT0gMCkge1xyXG4gICAgICBleHByZXNzaW9uRW5kUG9zID0gaW5kZXgkMTtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlU3RyaW5nIChjaHIpIHtcclxuICB2YXIgc3RyaW5nUXVvdGUgPSBjaHI7XHJcbiAgd2hpbGUgKCFlb2YoKSkge1xyXG4gICAgY2hyID0gbmV4dCgpO1xyXG4gICAgaWYgKGNociA9PT0gc3RyaW5nUXVvdGUpIHtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIHdhcm4kMTtcclxuXHJcbi8vIGluIHNvbWUgY2FzZXMsIHRoZSBldmVudCB1c2VkIGhhcyB0byBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcclxuLy8gc28gd2UgdXNlZCBzb21lIHJlc2VydmVkIHRva2VucyBkdXJpbmcgY29tcGlsZS5cclxudmFyIFJBTkdFX1RPS0VOID0gJ19fcic7XHJcbnZhciBDSEVDS0JPWF9SQURJT19UT0tFTiA9ICdfX2MnO1xyXG5cclxuZnVuY3Rpb24gbW9kZWwgKFxyXG4gIGVsLFxyXG4gIGRpcixcclxuICBfd2FyblxyXG4pIHtcclxuICB3YXJuJDEgPSBfd2FybjtcclxuICB2YXIgdmFsdWUgPSBkaXIudmFsdWU7XHJcbiAgdmFyIG1vZGlmaWVycyA9IGRpci5tb2RpZmllcnM7XHJcbiAgdmFyIHRhZyA9IGVsLnRhZztcclxuICB2YXIgdHlwZSA9IGVsLmF0dHJzTWFwLnR5cGU7XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAvLyBpbnB1dHMgd2l0aCB0eXBlPVwiZmlsZVwiIGFyZSByZWFkIG9ubHkgYW5kIHNldHRpbmcgdGhlIGlucHV0J3NcclxuICAgIC8vIHZhbHVlIHdpbGwgdGhyb3cgYW4gZXJyb3IuXHJcbiAgICBpZiAodGFnID09PSAnaW5wdXQnICYmIHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICB3YXJuJDEoXHJcbiAgICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtbW9kZWw9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgdHlwZT1cXFwiZmlsZVxcXCI+OlxcblwiICtcclxuICAgICAgICBcIkZpbGUgaW5wdXRzIGFyZSByZWFkIG9ubHkuIFVzZSBhIHYtb246Y2hhbmdlIGxpc3RlbmVyIGluc3RlYWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChlbC5jb21wb25lbnQpIHtcclxuICAgIGdlbkNvbXBvbmVudE1vZGVsKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKTtcclxuICAgIC8vIGNvbXBvbmVudCB2LW1vZGVsIGRvZXNuJ3QgbmVlZCBleHRyYSBydW50aW1lXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9IGVsc2UgaWYgKHRhZyA9PT0gJ3NlbGVjdCcpIHtcclxuICAgIGdlblNlbGVjdChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XHJcbiAgfSBlbHNlIGlmICh0YWcgPT09ICdpbnB1dCcgJiYgdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgZ2VuQ2hlY2tib3hNb2RlbChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XHJcbiAgfSBlbHNlIGlmICh0YWcgPT09ICdpbnB1dCcgJiYgdHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgZ2VuUmFkaW9Nb2RlbChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XHJcbiAgfSBlbHNlIGlmICh0YWcgPT09ICdpbnB1dCcgfHwgdGFnID09PSAndGV4dGFyZWEnKSB7XHJcbiAgICBnZW5EZWZhdWx0TW9kZWwoZWwsIHZhbHVlLCBtb2RpZmllcnMpO1xyXG4gIH0gZWxzZSBpZiAoIWNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcclxuICAgIGdlbkNvbXBvbmVudE1vZGVsKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKTtcclxuICAgIC8vIGNvbXBvbmVudCB2LW1vZGVsIGRvZXNuJ3QgbmVlZCBleHRyYSBydW50aW1lXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHdhcm4kMShcclxuICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtbW9kZWw9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCI+OiBcIiArXHJcbiAgICAgIFwidi1tb2RlbCBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZWxlbWVudCB0eXBlLiBcIiArXHJcbiAgICAgICdJZiB5b3UgYXJlIHdvcmtpbmcgd2l0aCBjb250ZW50ZWRpdGFibGUsIGl0XFwncyByZWNvbW1lbmRlZCB0byAnICtcclxuICAgICAgJ3dyYXAgYSBsaWJyYXJ5IGRlZGljYXRlZCBmb3IgdGhhdCBwdXJwb3NlIGluc2lkZSBhIGN1c3RvbSBjb21wb25lbnQuJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGVuc3VyZSBydW50aW1lIGRpcmVjdGl2ZSBtZXRhZGF0YVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkNoZWNrYm94TW9kZWwgKFxyXG4gIGVsLFxyXG4gIHZhbHVlLFxyXG4gIG1vZGlmaWVyc1xyXG4pIHtcclxuICB2YXIgbnVtYmVyID0gbW9kaWZpZXJzICYmIG1vZGlmaWVycy5udW1iZXI7XHJcbiAgdmFyIHZhbHVlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAndmFsdWUnKSB8fCAnbnVsbCc7XHJcbiAgdmFyIHRydWVWYWx1ZUJpbmRpbmcgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ3RydWUtdmFsdWUnKSB8fCAndHJ1ZSc7XHJcbiAgdmFyIGZhbHNlVmFsdWVCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICdmYWxzZS12YWx1ZScpIHx8ICdmYWxzZSc7XHJcbiAgYWRkUHJvcChlbCwgJ2NoZWNrZWQnLFxyXG4gICAgXCJBcnJheS5pc0FycmF5KFwiICsgdmFsdWUgKyBcIilcIiArXHJcbiAgICBcIj9faShcIiArIHZhbHVlICsgXCIsXCIgKyB2YWx1ZUJpbmRpbmcgKyBcIik+LTFcIiArIChcclxuICAgICAgdHJ1ZVZhbHVlQmluZGluZyA9PT0gJ3RydWUnXHJcbiAgICAgICAgPyAoXCI6KFwiICsgdmFsdWUgKyBcIilcIilcclxuICAgICAgICA6IChcIjpfcShcIiArIHZhbHVlICsgXCIsXCIgKyB0cnVlVmFsdWVCaW5kaW5nICsgXCIpXCIpXHJcbiAgICApXHJcbiAgKTtcclxuICBhZGRIYW5kbGVyKGVsLCAnY2hhbmdlJyxcclxuICAgIFwidmFyICQkYT1cIiArIHZhbHVlICsgXCIsXCIgK1xyXG4gICAgICAgICckJGVsPSRldmVudC50YXJnZXQsJyArXHJcbiAgICAgICAgXCIkJGM9JCRlbC5jaGVja2VkPyhcIiArIHRydWVWYWx1ZUJpbmRpbmcgKyBcIik6KFwiICsgZmFsc2VWYWx1ZUJpbmRpbmcgKyBcIik7XCIgK1xyXG4gICAgJ2lmKEFycmF5LmlzQXJyYXkoJCRhKSl7JyArXHJcbiAgICAgIFwidmFyICQkdj1cIiArIChudW1iZXIgPyAnX24oJyArIHZhbHVlQmluZGluZyArICcpJyA6IHZhbHVlQmluZGluZykgKyBcIixcIiArXHJcbiAgICAgICAgICAnJCRpPV9pKCQkYSwkJHYpOycgK1xyXG4gICAgICBcImlmKCQkZWwuY2hlY2tlZCl7JCRpPDAmJihcIiArIChnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgJyQkYS5jb25jYXQoWyQkdl0pJykpICsgXCIpfVwiICtcclxuICAgICAgXCJlbHNleyQkaT4tMSYmKFwiICsgKGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCAnJCRhLnNsaWNlKDAsJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSsxKSknKSkgKyBcIil9XCIgK1xyXG4gICAgXCJ9ZWxzZXtcIiArIChnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgJyQkYycpKSArIFwifVwiLFxyXG4gICAgbnVsbCwgdHJ1ZVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlblJhZGlvTW9kZWwgKFxyXG4gIGVsLFxyXG4gIHZhbHVlLFxyXG4gIG1vZGlmaWVyc1xyXG4pIHtcclxuICB2YXIgbnVtYmVyID0gbW9kaWZpZXJzICYmIG1vZGlmaWVycy5udW1iZXI7XHJcbiAgdmFyIHZhbHVlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAndmFsdWUnKSB8fCAnbnVsbCc7XHJcbiAgdmFsdWVCaW5kaW5nID0gbnVtYmVyID8gKFwiX24oXCIgKyB2YWx1ZUJpbmRpbmcgKyBcIilcIikgOiB2YWx1ZUJpbmRpbmc7XHJcbiAgYWRkUHJvcChlbCwgJ2NoZWNrZWQnLCAoXCJfcShcIiArIHZhbHVlICsgXCIsXCIgKyB2YWx1ZUJpbmRpbmcgKyBcIilcIikpO1xyXG4gIGFkZEhhbmRsZXIoZWwsICdjaGFuZ2UnLCBnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgdmFsdWVCaW5kaW5nKSwgbnVsbCwgdHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlblNlbGVjdCAoXHJcbiAgZWwsXHJcbiAgdmFsdWUsXHJcbiAgbW9kaWZpZXJzXHJcbikge1xyXG4gIHZhciBudW1iZXIgPSBtb2RpZmllcnMgJiYgbW9kaWZpZXJzLm51bWJlcjtcclxuICB2YXIgc2VsZWN0ZWRWYWwgPSBcIkFycmF5LnByb3RvdHlwZS5maWx0ZXJcIiArXHJcbiAgICBcIi5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucyxmdW5jdGlvbihvKXtyZXR1cm4gby5zZWxlY3RlZH0pXCIgK1xyXG4gICAgXCIubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcXFwiX3ZhbHVlXFxcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1wiICtcclxuICAgIFwicmV0dXJuIFwiICsgKG51bWJlciA/ICdfbih2YWwpJyA6ICd2YWwnKSArIFwifSlcIjtcclxuXHJcbiAgdmFyIGFzc2lnbm1lbnQgPSAnJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdJztcclxuICB2YXIgY29kZSA9IFwidmFyICQkc2VsZWN0ZWRWYWwgPSBcIiArIHNlbGVjdGVkVmFsICsgXCI7XCI7XHJcbiAgY29kZSA9IGNvZGUgKyBcIiBcIiArIChnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgYXNzaWdubWVudCkpO1xyXG4gIGFkZEhhbmRsZXIoZWwsICdjaGFuZ2UnLCBjb2RlLCBudWxsLCB0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuRGVmYXVsdE1vZGVsIChcclxuICBlbCxcclxuICB2YWx1ZSxcclxuICBtb2RpZmllcnNcclxuKSB7XHJcbiAgdmFyIHR5cGUgPSBlbC5hdHRyc01hcC50eXBlO1xyXG5cclxuICAvLyB3YXJuIGlmIHYtYmluZDp2YWx1ZSBjb25mbGljdHMgd2l0aCB2LW1vZGVsXHJcbiAgLy8gZXhjZXB0IGZvciBpbnB1dHMgd2l0aCB2LWJpbmQ6dHlwZVxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICB2YXIgdmFsdWUkMSA9IGVsLmF0dHJzTWFwWyd2LWJpbmQ6dmFsdWUnXSB8fCBlbC5hdHRyc01hcFsnOnZhbHVlJ107XHJcbiAgICB2YXIgdHlwZUJpbmRpbmcgPSBlbC5hdHRyc01hcFsndi1iaW5kOnR5cGUnXSB8fCBlbC5hdHRyc01hcFsnOnR5cGUnXTtcclxuICAgIGlmICh2YWx1ZSQxICYmICF0eXBlQmluZGluZykge1xyXG4gICAgICB2YXIgYmluZGluZyA9IGVsLmF0dHJzTWFwWyd2LWJpbmQ6dmFsdWUnXSA/ICd2LWJpbmQ6dmFsdWUnIDogJzp2YWx1ZSc7XHJcbiAgICAgIHdhcm4kMShcclxuICAgICAgICBiaW5kaW5nICsgXCI9XFxcIlwiICsgdmFsdWUkMSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCB2LW1vZGVsIG9uIHRoZSBzYW1lIGVsZW1lbnQgXCIgK1xyXG4gICAgICAgICdiZWNhdXNlIHRoZSBsYXR0ZXIgYWxyZWFkeSBleHBhbmRzIHRvIGEgdmFsdWUgYmluZGluZyBpbnRlcm5hbGx5J1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIHJlZiA9IG1vZGlmaWVycyB8fCB7fTtcclxuICB2YXIgbGF6eSA9IHJlZi5sYXp5O1xyXG4gIHZhciBudW1iZXIgPSByZWYubnVtYmVyO1xyXG4gIHZhciB0cmltID0gcmVmLnRyaW07XHJcbiAgdmFyIG5lZWRDb21wb3NpdGlvbkd1YXJkID0gIWxhenkgJiYgdHlwZSAhPT0gJ3JhbmdlJztcclxuICB2YXIgZXZlbnQgPSBsYXp5XHJcbiAgICA/ICdjaGFuZ2UnXHJcbiAgICA6IHR5cGUgPT09ICdyYW5nZSdcclxuICAgICAgPyBSQU5HRV9UT0tFTlxyXG4gICAgICA6ICdpbnB1dCc7XHJcblxyXG4gIHZhciB2YWx1ZUV4cHJlc3Npb24gPSAnJGV2ZW50LnRhcmdldC52YWx1ZSc7XHJcbiAgaWYgKHRyaW0pIHtcclxuICAgIHZhbHVlRXhwcmVzc2lvbiA9IFwiJGV2ZW50LnRhcmdldC52YWx1ZS50cmltKClcIjtcclxuICB9XHJcbiAgaWYgKG51bWJlcikge1xyXG4gICAgdmFsdWVFeHByZXNzaW9uID0gXCJfbihcIiArIHZhbHVlRXhwcmVzc2lvbiArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNvZGUgPSBnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgdmFsdWVFeHByZXNzaW9uKTtcclxuICBpZiAobmVlZENvbXBvc2l0aW9uR3VhcmQpIHtcclxuICAgIGNvZGUgPSBcImlmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXJldHVybjtcIiArIGNvZGU7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9wKGVsLCAndmFsdWUnLCAoXCIoXCIgKyB2YWx1ZSArIFwiKVwiKSk7XHJcbiAgYWRkSGFuZGxlcihlbCwgZXZlbnQsIGNvZGUsIG51bGwsIHRydWUpO1xyXG4gIGlmICh0cmltIHx8IG51bWJlcikge1xyXG4gICAgYWRkSGFuZGxlcihlbCwgJ2JsdXInLCAnJGZvcmNlVXBkYXRlKCknKTtcclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLy8gbm9ybWFsaXplIHYtbW9kZWwgZXZlbnQgdG9rZW5zIHRoYXQgY2FuIG9ubHkgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxyXG4vLyBpdCdzIGltcG9ydGFudCB0byBwbGFjZSB0aGUgZXZlbnQgYXMgdGhlIGZpcnN0IGluIHRoZSBhcnJheSBiZWNhdXNlXHJcbi8vIHRoZSB3aG9sZSBwb2ludCBpcyBlbnN1cmluZyB0aGUgdi1tb2RlbCBjYWxsYmFjayBnZXRzIGNhbGxlZCBiZWZvcmVcclxuLy8gdXNlci1hdHRhY2hlZCBoYW5kbGVycy5cclxuZnVuY3Rpb24gbm9ybWFsaXplRXZlbnRzIChvbikge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChpc0RlZihvbltSQU5HRV9UT0tFTl0pKSB7XHJcbiAgICAvLyBJRSBpbnB1dFt0eXBlPXJhbmdlXSBvbmx5IHN1cHBvcnRzIGBjaGFuZ2VgIGV2ZW50XHJcbiAgICB2YXIgZXZlbnQgPSBpc0lFID8gJ2NoYW5nZScgOiAnaW5wdXQnO1xyXG4gICAgb25bZXZlbnRdID0gW10uY29uY2F0KG9uW1JBTkdFX1RPS0VOXSwgb25bZXZlbnRdIHx8IFtdKTtcclxuICAgIGRlbGV0ZSBvbltSQU5HRV9UT0tFTl07XHJcbiAgfVxyXG4gIC8vIFRoaXMgd2FzIG9yaWdpbmFsbHkgaW50ZW5kZWQgdG8gZml4ICM0NTIxIGJ1dCBubyBsb25nZXIgbmVjZXNzYXJ5XHJcbiAgLy8gYWZ0ZXIgMi41LiBLZWVwaW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0IHdpdGggZ2VuZXJhdGVkIGNvZGUgZnJvbSA8IDIuNFxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChpc0RlZihvbltDSEVDS0JPWF9SQURJT19UT0tFTl0pKSB7XHJcbiAgICBvbi5jaGFuZ2UgPSBbXS5jb25jYXQob25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dLCBvbi5jaGFuZ2UgfHwgW10pO1xyXG4gICAgZGVsZXRlIG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXTtcclxuICB9XHJcbn1cclxuXHJcbnZhciB0YXJnZXQkMTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChoYW5kbGVyLCBldmVudCwgY2FwdHVyZSkge1xyXG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0JDE7IC8vIHNhdmUgY3VycmVudCB0YXJnZXQgZWxlbWVudCBpbiBjbG9zdXJlXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcclxuICAgIHZhciByZXMgPSBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgIHJlbW92ZSQyKGV2ZW50LCBvbmNlSGFuZGxlciwgY2FwdHVyZSwgX3RhcmdldCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGQkMSAoXHJcbiAgZXZlbnQsXHJcbiAgaGFuZGxlcixcclxuICBvbmNlJCQxLFxyXG4gIGNhcHR1cmUsXHJcbiAgcGFzc2l2ZVxyXG4pIHtcclxuICBoYW5kbGVyID0gd2l0aE1hY3JvVGFzayhoYW5kbGVyKTtcclxuICBpZiAob25jZSQkMSkgeyBoYW5kbGVyID0gY3JlYXRlT25jZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGNhcHR1cmUpOyB9XHJcbiAgdGFyZ2V0JDEuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIGV2ZW50LFxyXG4gICAgaGFuZGxlcixcclxuICAgIHN1cHBvcnRzUGFzc2l2ZVxyXG4gICAgICA/IHsgY2FwdHVyZTogY2FwdHVyZSwgcGFzc2l2ZTogcGFzc2l2ZSB9XHJcbiAgICAgIDogY2FwdHVyZVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZSQyIChcclxuICBldmVudCxcclxuICBoYW5kbGVyLFxyXG4gIGNhcHR1cmUsXHJcbiAgX3RhcmdldFxyXG4pIHtcclxuICAoX3RhcmdldCB8fCB0YXJnZXQkMSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgIGV2ZW50LFxyXG4gICAgaGFuZGxlci5fd2l0aFRhc2sgfHwgaGFuZGxlcixcclxuICAgIGNhcHR1cmVcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVET01MaXN0ZW5lcnMgKG9sZFZub2RlLCB2bm9kZSkge1xyXG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEub24pICYmIGlzVW5kZWYodm5vZGUuZGF0YS5vbikpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICB2YXIgb24gPSB2bm9kZS5kYXRhLm9uIHx8IHt9O1xyXG4gIHZhciBvbGRPbiA9IG9sZFZub2RlLmRhdGEub24gfHwge307XHJcbiAgdGFyZ2V0JDEgPSB2bm9kZS5lbG07XHJcbiAgbm9ybWFsaXplRXZlbnRzKG9uKTtcclxuICB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQkMSwgcmVtb3ZlJDIsIHZub2RlLmNvbnRleHQpO1xyXG4gIHRhcmdldCQxID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG52YXIgZXZlbnRzID0ge1xyXG4gIGNyZWF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzLFxyXG4gIHVwZGF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlRE9NUHJvcHMgKG9sZFZub2RlLCB2bm9kZSkge1xyXG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEuZG9tUHJvcHMpICYmIGlzVW5kZWYodm5vZGUuZGF0YS5kb21Qcm9wcykpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICB2YXIga2V5LCBjdXI7XHJcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcclxuICB2YXIgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xyXG4gIHZhciBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgfHwge307XHJcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XHJcbiAgaWYgKGlzRGVmKHByb3BzLl9fb2JfXykpIHtcclxuICAgIHByb3BzID0gdm5vZGUuZGF0YS5kb21Qcm9wcyA9IGV4dGVuZCh7fSwgcHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChrZXkgaW4gb2xkUHJvcHMpIHtcclxuICAgIGlmIChpc1VuZGVmKHByb3BzW2tleV0pKSB7XHJcbiAgICAgIGVsbVtrZXldID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAoa2V5IGluIHByb3BzKSB7XHJcbiAgICBjdXIgPSBwcm9wc1trZXldO1xyXG4gICAgLy8gaWdub3JlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyB0ZXh0Q29udGVudCBvciBpbm5lckhUTUwsXHJcbiAgICAvLyBhcyB0aGVzZSB3aWxsIHRocm93IGF3YXkgZXhpc3RpbmcgRE9NIG5vZGVzIGFuZCBjYXVzZSByZW1vdmFsIGVycm9yc1xyXG4gICAgLy8gb24gc3Vic2VxdWVudCBwYXRjaGVzICgjMzM2MClcclxuICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcgfHwga2V5ID09PSAnaW5uZXJIVE1MJykge1xyXG4gICAgICBpZiAodm5vZGUuY2hpbGRyZW4pIHsgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoID0gMDsgfVxyXG4gICAgICBpZiAoY3VyID09PSBvbGRQcm9wc1trZXldKSB7IGNvbnRpbnVlIH1cclxuICAgICAgLy8gIzY2MDEgd29yayBhcm91bmQgQ2hyb21lIHZlcnNpb24gPD0gNTUgYnVnIHdoZXJlIHNpbmdsZSB0ZXh0Tm9kZVxyXG4gICAgICAvLyByZXBsYWNlZCBieSBpbm5lckhUTUwvdGV4dENvbnRlbnQgcmV0YWlucyBpdHMgcGFyZW50Tm9kZSBwcm9wZXJ0eVxyXG4gICAgICBpZiAoZWxtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcclxuICAgICAgLy8gc3RvcmUgdmFsdWUgYXMgX3ZhbHVlIGFzIHdlbGwgc2luY2VcclxuICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxyXG4gICAgICBlbG0uX3ZhbHVlID0gY3VyO1xyXG4gICAgICAvLyBhdm9pZCByZXNldHRpbmcgY3Vyc29yIHBvc2l0aW9uIHdoZW4gdmFsdWUgaXMgdGhlIHNhbWVcclxuICAgICAgdmFyIHN0ckN1ciA9IGlzVW5kZWYoY3VyKSA/ICcnIDogU3RyaW5nKGN1cik7XHJcbiAgICAgIGlmIChzaG91bGRVcGRhdGVWYWx1ZShlbG0sIHN0ckN1cikpIHtcclxuICAgICAgICBlbG0udmFsdWUgPSBzdHJDdXI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsbVtrZXldID0gY3VyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gY2hlY2sgcGxhdGZvcm1zL3dlYi91dGlsL2F0dHJzLmpzIGFjY2VwdFZhbHVlXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlVmFsdWUgKGVsbSwgY2hlY2tWYWwpIHtcclxuICByZXR1cm4gKCFlbG0uY29tcG9zaW5nICYmIChcclxuICAgIGVsbS50YWdOYW1lID09PSAnT1BUSU9OJyB8fFxyXG4gICAgaXNOb3RJbkZvY3VzQW5kRGlydHkoZWxtLCBjaGVja1ZhbCkgfHxcclxuICAgIGlzRGlydHlXaXRoTW9kaWZpZXJzKGVsbSwgY2hlY2tWYWwpXHJcbiAgKSlcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOb3RJbkZvY3VzQW5kRGlydHkgKGVsbSwgY2hlY2tWYWwpIHtcclxuICAvLyByZXR1cm4gdHJ1ZSB3aGVuIHRleHRib3ggKC5udW1iZXIgYW5kIC50cmltKSBsb3NlcyBmb2N1cyBhbmQgaXRzIHZhbHVlIGlzXHJcbiAgLy8gbm90IGVxdWFsIHRvIHRoZSB1cGRhdGVkIHZhbHVlXHJcbiAgdmFyIG5vdEluRm9jdXMgPSB0cnVlO1xyXG4gIC8vICM2MTU3XHJcbiAgLy8gd29yayBhcm91bmQgSUUgYnVnIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW4gYW4gaWZyYW1lXHJcbiAgdHJ5IHsgbm90SW5Gb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsbTsgfSBjYXRjaCAoZSkge31cclxuICByZXR1cm4gbm90SW5Gb2N1cyAmJiBlbG0udmFsdWUgIT09IGNoZWNrVmFsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGlydHlXaXRoTW9kaWZpZXJzIChlbG0sIG5ld1ZhbCkge1xyXG4gIHZhciB2YWx1ZSA9IGVsbS52YWx1ZTtcclxuICB2YXIgbW9kaWZpZXJzID0gZWxtLl92TW9kaWZpZXJzOyAvLyBpbmplY3RlZCBieSB2LW1vZGVsIHJ1bnRpbWVcclxuICBpZiAoaXNEZWYobW9kaWZpZXJzKSkge1xyXG4gICAgaWYgKG1vZGlmaWVycy5sYXp5KSB7XHJcbiAgICAgIC8vIGlucHV0cyB3aXRoIGxhenkgc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCB3aGVuIG5vdCBpbiBmb2N1c1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiB0b051bWJlcih2YWx1ZSkgIT09IHRvTnVtYmVyKG5ld1ZhbClcclxuICAgIH1cclxuICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9PSBuZXdWYWwudHJpbSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZSAhPT0gbmV3VmFsXHJcbn1cclxuXHJcbnZhciBkb21Qcm9wcyA9IHtcclxuICBjcmVhdGU6IHVwZGF0ZURPTVByb3BzLFxyXG4gIHVwZGF0ZTogdXBkYXRlRE9NUHJvcHNcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcclxuICB2YXIgcmVzID0ge307XHJcbiAgdmFyIGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xyXG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XHJcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XHJcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmVzXHJcbn0pO1xyXG5cclxuLy8gbWVyZ2Ugc3RhdGljIGFuZCBkeW5hbWljIHN0eWxlIGRhdGEgb24gdGhlIHNhbWUgdm5vZGVcclxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVEYXRhIChkYXRhKSB7XHJcbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGRhdGEuc3R5bGUpO1xyXG4gIC8vIHN0YXRpYyBzdHlsZSBpcyBwcmUtcHJvY2Vzc2VkIGludG8gYW4gb2JqZWN0IGR1cmluZyBjb21waWxhdGlvblxyXG4gIC8vIGFuZCBpcyBhbHdheXMgYSBmcmVzaCBvYmplY3QsIHNvIGl0J3Mgc2FmZSB0byBtZXJnZSBpbnRvIGl0XHJcbiAgcmV0dXJuIGRhdGEuc3RhdGljU3R5bGVcclxuICAgID8gZXh0ZW5kKGRhdGEuc3RhdGljU3R5bGUsIHN0eWxlKVxyXG4gICAgOiBzdHlsZVxyXG59XHJcblxyXG4vLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xyXG4gICAgcmV0dXJuIHRvT2JqZWN0KGJpbmRpbmdTdHlsZSlcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gcGFyc2VTdHlsZVRleHQoYmluZGluZ1N0eWxlKVxyXG4gIH1cclxuICByZXR1cm4gYmluZGluZ1N0eWxlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBwYXJlbnQgY29tcG9uZW50IHN0eWxlIHNob3VsZCBiZSBhZnRlciBjaGlsZCdzXHJcbiAqIHNvIHRoYXQgcGFyZW50IGNvbXBvbmVudCdzIHN0eWxlIGNvdWxkIG92ZXJyaWRlIGl0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZSAodm5vZGUsIGNoZWNrQ2hpbGQpIHtcclxuICB2YXIgcmVzID0ge307XHJcbiAgdmFyIHN0eWxlRGF0YTtcclxuXHJcbiAgaWYgKGNoZWNrQ2hpbGQpIHtcclxuICAgIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcclxuICAgIHdoaWxlIChjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcclxuICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuZGF0YSAmJlxyXG4gICAgICAgIChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEoY2hpbGROb2RlLmRhdGEpKVxyXG4gICAgICApIHtcclxuICAgICAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YSh2bm9kZS5kYXRhKSkpIHtcclxuICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XHJcbiAgfVxyXG5cclxuICB2YXIgcGFyZW50Tm9kZSA9IHZub2RlO1xyXG4gIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xyXG4gICAgaWYgKHBhcmVudE5vZGUuZGF0YSAmJiAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHBhcmVudE5vZGUuZGF0YSkpKSB7XHJcbiAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgY3NzVmFyUkUgPSAvXi0tLztcclxudmFyIGltcG9ydGFudFJFID0gL1xccyohaW1wb3J0YW50JC87XHJcbnZhciBzZXRQcm9wID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWwpIHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoY3NzVmFyUkUudGVzdChuYW1lKSkge1xyXG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsKTtcclxuICB9IGVsc2UgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xyXG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsLnJlcGxhY2UoaW1wb3J0YW50UkUsICcnKSwgJ2ltcG9ydGFudCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemUobmFtZSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIC8vIFN1cHBvcnQgdmFsdWVzIGFycmF5IGNyZWF0ZWQgYnkgYXV0b3ByZWZpeGVyLCBlLmcuXHJcbiAgICAgIC8vIHtkaXNwbGF5OiBbXCItd2Via2l0LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiZmxleFwiXX1cclxuICAgICAgLy8gU2V0IHRoZW0gb25lIGJ5IG9uZSwgYW5kIHRoZSBicm93c2VyIHdpbGwgb25seSBzZXQgdGhvc2UgaXQgY2FuIHJlY29nbml6ZVxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgZWwuc3R5bGVbbm9ybWFsaXplZE5hbWVdID0gdmFsW2ldO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIHZlbmRvck5hbWVzID0gWydXZWJraXQnLCAnTW96JywgJ21zJ107XHJcblxyXG52YXIgZW1wdHlTdHlsZTtcclxudmFyIG5vcm1hbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAocHJvcCkge1xyXG4gIGVtcHR5U3R5bGUgPSBlbXB0eVN0eWxlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xyXG4gIHByb3AgPSBjYW1lbGl6ZShwcm9wKTtcclxuICBpZiAocHJvcCAhPT0gJ2ZpbHRlcicgJiYgKHByb3AgaW4gZW1wdHlTdHlsZSkpIHtcclxuICAgIHJldHVybiBwcm9wXHJcbiAgfVxyXG4gIHZhciBjYXBOYW1lID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIG5hbWUgPSB2ZW5kb3JOYW1lc1tpXSArIGNhcE5hbWU7XHJcbiAgICBpZiAobmFtZSBpbiBlbXB0eVN0eWxlKSB7XHJcbiAgICAgIHJldHVybiBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChvbGRWbm9kZSwgdm5vZGUpIHtcclxuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XHJcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xyXG5cclxuICBpZiAoaXNVbmRlZihkYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKGRhdGEuc3R5bGUpICYmXHJcbiAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYob2xkRGF0YS5zdHlsZSlcclxuICApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgdmFyIGN1ciwgbmFtZTtcclxuICB2YXIgZWwgPSB2bm9kZS5lbG07XHJcbiAgdmFyIG9sZFN0YXRpY1N0eWxlID0gb2xkRGF0YS5zdGF0aWNTdHlsZTtcclxuICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkRGF0YS5ub3JtYWxpemVkU3R5bGUgfHwgb2xkRGF0YS5zdHlsZSB8fCB7fTtcclxuXHJcbiAgLy8gaWYgc3RhdGljIHN0eWxlIGV4aXN0cywgc3R5bGViaW5kaW5nIGFscmVhZHkgbWVyZ2VkIGludG8gaXQgd2hlbiBkb2luZyBub3JtYWxpemVTdHlsZURhdGFcclxuICB2YXIgb2xkU3R5bGUgPSBvbGRTdGF0aWNTdHlsZSB8fCBvbGRTdHlsZUJpbmRpbmc7XHJcblxyXG4gIHZhciBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyh2bm9kZS5kYXRhLnN0eWxlKSB8fCB7fTtcclxuXHJcbiAgLy8gc3RvcmUgbm9ybWFsaXplZCBzdHlsZSB1bmRlciBhIGRpZmZlcmVudCBrZXkgZm9yIG5leHQgZGlmZlxyXG4gIC8vIG1ha2Ugc3VyZSB0byBjbG9uZSBpdCBpZiBpdCdzIHJlYWN0aXZlLCBzaW5jZSB0aGUgdXNlciBsaWtlbHkgd2FudHNcclxuICAvLyB0byBtdXRhdGUgaXQuXHJcbiAgdm5vZGUuZGF0YS5ub3JtYWxpemVkU3R5bGUgPSBpc0RlZihzdHlsZS5fX29iX18pXHJcbiAgICA/IGV4dGVuZCh7fSwgc3R5bGUpXHJcbiAgICA6IHN0eWxlO1xyXG5cclxuICB2YXIgbmV3U3R5bGUgPSBnZXRTdHlsZSh2bm9kZSwgdHJ1ZSk7XHJcblxyXG4gIGZvciAobmFtZSBpbiBvbGRTdHlsZSkge1xyXG4gICAgaWYgKGlzVW5kZWYobmV3U3R5bGVbbmFtZV0pKSB7XHJcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsICcnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChuYW1lIGluIG5ld1N0eWxlKSB7XHJcbiAgICBjdXIgPSBuZXdTdHlsZVtuYW1lXTtcclxuICAgIGlmIChjdXIgIT09IG9sZFN0eWxlW25hbWVdKSB7XHJcbiAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXHJcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsIGN1ciA9PSBudWxsID8gJycgOiBjdXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudmFyIHN0eWxlID0ge1xyXG4gIGNyZWF0ZTogdXBkYXRlU3R5bGUsXHJcbiAgdXBkYXRlOiB1cGRhdGVTdHlsZVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbi8qKlxyXG4gKiBBZGQgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cclxuICogU1ZHIGVsZW1lbnRzIGluIElFXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xyXG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxyXG4gKiBTVkcgZWxlbWVudHMgaW4gSUVcclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5sZW5ndGgpIHtcclxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xyXG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcclxuICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcclxuICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xyXG4gICAgfVxyXG4gICAgY3VyID0gY3VyLnRyaW0oKTtcclxuICAgIGlmIChjdXIpIHtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uIChkZWYpIHtcclxuICBpZiAoIWRlZikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKHR5cGVvZiBkZWYgPT09ICdvYmplY3QnKSB7XHJcbiAgICB2YXIgcmVzID0ge307XHJcbiAgICBpZiAoZGVmLmNzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgZXh0ZW5kKHJlcywgYXV0b0Nzc1RyYW5zaXRpb24oZGVmLm5hbWUgfHwgJ3YnKSk7XHJcbiAgICB9XHJcbiAgICBleHRlbmQocmVzLCBkZWYpO1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZiA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBhdXRvQ3NzVHJhbnNpdGlvbihkZWYpXHJcbiAgfVxyXG59XHJcblxyXG52YXIgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZW50ZXJDbGFzczogKG5hbWUgKyBcIi1lbnRlclwiKSxcclxuICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcclxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxyXG4gICAgbGVhdmVDbGFzczogKG5hbWUgKyBcIi1sZWF2ZVwiKSxcclxuICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcclxuICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBoYXNUcmFuc2l0aW9uID0gaW5Ccm93c2VyICYmICFpc0lFOTtcclxudmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XHJcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcclxuXHJcbi8vIFRyYW5zaXRpb24gcHJvcGVydHkvZXZlbnQgc25pZmZpbmdcclxudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xyXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3RyYW5zaXRpb25lbmQnO1xyXG52YXIgYW5pbWF0aW9uUHJvcCA9ICdhbmltYXRpb24nO1xyXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcclxuaWYgKGhhc1RyYW5zaXRpb24pIHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAod2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICB3aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kICE9PSB1bmRlZmluZWRcclxuICApIHtcclxuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xyXG4gICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQnO1xyXG4gIH1cclxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcclxuICAgIHdpbmRvdy5vbndlYmtpdGFuaW1hdGlvbmVuZCAhPT0gdW5kZWZpbmVkXHJcbiAgKSB7XHJcbiAgICBhbmltYXRpb25Qcm9wID0gJ1dlYmtpdEFuaW1hdGlvbic7XHJcbiAgICBhbmltYXRpb25FbmRFdmVudCA9ICd3ZWJraXRBbmltYXRpb25FbmQnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYmluZGluZyB0byB3aW5kb3cgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgaG90IHJlbG9hZCB3b3JrIGluIElFIGluIHN0cmljdCBtb2RlXHJcbnZhciByYWYgPSBpbkJyb3dzZXJcclxuICA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcclxuICAgIDogc2V0VGltZW91dFxyXG4gIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9O1xyXG5cclxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xyXG4gIHJhZihmdW5jdGlvbiAoKSB7XHJcbiAgICByYWYoZm4pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcclxuICB2YXIgdHJhbnNpdGlvbkNsYXNzZXMgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXMgfHwgKGVsLl90cmFuc2l0aW9uQ2xhc3NlcyA9IFtdKTtcclxuICBpZiAodHJhbnNpdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xyXG4gICAgdHJhbnNpdGlvbkNsYXNzZXMucHVzaChjbHMpO1xyXG4gICAgYWRkQ2xhc3MoZWwsIGNscyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcclxuICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XHJcbiAgICByZW1vdmUoZWwuX3RyYW5zaXRpb25DbGFzc2VzLCBjbHMpO1xyXG4gIH1cclxuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcclxuICBlbCxcclxuICBleHBlY3RlZFR5cGUsXHJcbiAgY2JcclxuKSB7XHJcbiAgdmFyIHJlZiA9IGdldFRyYW5zaXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xyXG4gIHZhciB0eXBlID0gcmVmLnR5cGU7XHJcbiAgdmFyIHRpbWVvdXQgPSByZWYudGltZW91dDtcclxuICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcclxuICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxyXG4gIHZhciBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcclxuICB2YXIgZW5kZWQgPSAwO1xyXG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XHJcbiAgICBjYigpO1xyXG4gIH07XHJcbiAgdmFyIG9uRW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcclxuICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XHJcbiAgICAgICAgZW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XHJcbiAgICAgIGVuZCgpO1xyXG4gICAgfVxyXG4gIH0sIHRpbWVvdXQgKyAxKTtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XHJcbn1cclxuXHJcbnZhciB0cmFuc2Zvcm1SRSA9IC9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS87XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xyXG4gIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgdmFyIHRyYW5zaXRpb25EZWxheXMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcclxuICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9ucyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xyXG4gIHZhciB0cmFuc2l0aW9uVGltZW91dCA9IGdldFRpbWVvdXQodHJhbnNpdGlvbkRlbGF5cywgdHJhbnNpdGlvbkR1cmF0aW9ucyk7XHJcbiAgdmFyIGFuaW1hdGlvbkRlbGF5cyA9IHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10uc3BsaXQoJywgJyk7XHJcbiAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10uc3BsaXQoJywgJyk7XHJcbiAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcclxuXHJcbiAgdmFyIHR5cGU7XHJcbiAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gIHZhciBwcm9wQ291bnQgPSAwO1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcclxuICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcclxuICAgICAgdHlwZSA9IFRSQU5TSVRJT047XHJcbiAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcclxuICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xyXG4gICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XHJcbiAgICAgIHR5cGUgPSBBTklNQVRJT047XHJcbiAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xyXG4gICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpO1xyXG4gICAgdHlwZSA9IHRpbWVvdXQgPiAwXHJcbiAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XHJcbiAgICAgICAgPyBUUkFOU0lUSU9OXHJcbiAgICAgICAgOiBBTklNQVRJT05cclxuICAgICAgOiBudWxsO1xyXG4gICAgcHJvcENvdW50ID0gdHlwZVxyXG4gICAgICA/IHR5cGUgPT09IFRSQU5TSVRJT05cclxuICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXHJcbiAgICAgIDogMDtcclxuICB9XHJcbiAgdmFyIGhhc1RyYW5zZm9ybSA9XHJcbiAgICB0eXBlID09PSBUUkFOU0lUSU9OICYmXHJcbiAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogdHlwZSxcclxuICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcbiAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcclxuICAgIGhhc1RyYW5zZm9ybTogaGFzVHJhbnNmb3JtXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lb3V0IChkZWxheXMsIGR1cmF0aW9ucykge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgd2hpbGUgKGRlbGF5cy5sZW5ndGggPCBkdXJhdGlvbnMubGVuZ3RoKSB7XHJcbiAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSlcclxuICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gdG9NcyAocykge1xyXG4gIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkpICogMTAwMFxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGVudGVyICh2bm9kZSwgdG9nZ2xlRGlzcGxheSkge1xyXG4gIHZhciBlbCA9IHZub2RlLmVsbTtcclxuXHJcbiAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcclxuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XHJcbiAgICBlbC5fbGVhdmVDYi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgZWwuX2xlYXZlQ2IoKTtcclxuICB9XHJcblxyXG4gIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcclxuICBpZiAoaXNVbmRlZihkYXRhKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIHZhciBjc3MgPSBkYXRhLmNzcztcclxuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcclxuICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcclxuICB2YXIgZW50ZXJUb0NsYXNzID0gZGF0YS5lbnRlclRvQ2xhc3M7XHJcbiAgdmFyIGVudGVyQWN0aXZlQ2xhc3MgPSBkYXRhLmVudGVyQWN0aXZlQ2xhc3M7XHJcbiAgdmFyIGFwcGVhckNsYXNzID0gZGF0YS5hcHBlYXJDbGFzcztcclxuICB2YXIgYXBwZWFyVG9DbGFzcyA9IGRhdGEuYXBwZWFyVG9DbGFzcztcclxuICB2YXIgYXBwZWFyQWN0aXZlQ2xhc3MgPSBkYXRhLmFwcGVhckFjdGl2ZUNsYXNzO1xyXG4gIHZhciBiZWZvcmVFbnRlciA9IGRhdGEuYmVmb3JlRW50ZXI7XHJcbiAgdmFyIGVudGVyID0gZGF0YS5lbnRlcjtcclxuICB2YXIgYWZ0ZXJFbnRlciA9IGRhdGEuYWZ0ZXJFbnRlcjtcclxuICB2YXIgZW50ZXJDYW5jZWxsZWQgPSBkYXRhLmVudGVyQ2FuY2VsbGVkO1xyXG4gIHZhciBiZWZvcmVBcHBlYXIgPSBkYXRhLmJlZm9yZUFwcGVhcjtcclxuICB2YXIgYXBwZWFyID0gZGF0YS5hcHBlYXI7XHJcbiAgdmFyIGFmdGVyQXBwZWFyID0gZGF0YS5hZnRlckFwcGVhcjtcclxuICB2YXIgYXBwZWFyQ2FuY2VsbGVkID0gZGF0YS5hcHBlYXJDYW5jZWxsZWQ7XHJcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcclxuXHJcbiAgLy8gYWN0aXZlSW5zdGFuY2Ugd2lsbCBhbHdheXMgYmUgdGhlIDx0cmFuc2l0aW9uPiBjb21wb25lbnQgbWFuYWdpbmcgdGhpc1xyXG4gIC8vIHRyYW5zaXRpb24uIE9uZSBlZGdlIGNhc2UgdG8gY2hlY2sgaXMgd2hlbiB0aGUgPHRyYW5zaXRpb24+IGlzIHBsYWNlZFxyXG4gIC8vIGFzIHRoZSByb290IG5vZGUgb2YgYSBjaGlsZCBjb21wb25lbnQuIEluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIGNoZWNrXHJcbiAgLy8gPHRyYW5zaXRpb24+J3MgcGFyZW50IGZvciBhcHBlYXIgY2hlY2suXHJcbiAgdmFyIGNvbnRleHQgPSBhY3RpdmVJbnN0YW5jZTtcclxuICB2YXIgdHJhbnNpdGlvbk5vZGUgPSBhY3RpdmVJbnN0YW5jZS4kdm5vZGU7XHJcbiAgd2hpbGUgKHRyYW5zaXRpb25Ob2RlICYmIHRyYW5zaXRpb25Ob2RlLnBhcmVudCkge1xyXG4gICAgdHJhbnNpdGlvbk5vZGUgPSB0cmFuc2l0aW9uTm9kZS5wYXJlbnQ7XHJcbiAgICBjb250ZXh0ID0gdHJhbnNpdGlvbk5vZGUuY29udGV4dDtcclxuICB9XHJcblxyXG4gIHZhciBpc0FwcGVhciA9ICFjb250ZXh0Ll9pc01vdW50ZWQgfHwgIXZub2RlLmlzUm9vdEluc2VydDtcclxuXHJcbiAgaWYgKGlzQXBwZWFyICYmICFhcHBlYXIgJiYgYXBwZWFyICE9PSAnJykge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICB2YXIgc3RhcnRDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckNsYXNzXHJcbiAgICA/IGFwcGVhckNsYXNzXHJcbiAgICA6IGVudGVyQ2xhc3M7XHJcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQWN0aXZlQ2xhc3NcclxuICAgID8gYXBwZWFyQWN0aXZlQ2xhc3NcclxuICAgIDogZW50ZXJBY3RpdmVDbGFzcztcclxuICB2YXIgdG9DbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhclRvQ2xhc3NcclxuICAgID8gYXBwZWFyVG9DbGFzc1xyXG4gICAgOiBlbnRlclRvQ2xhc3M7XHJcblxyXG4gIHZhciBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxyXG4gICAgPyAoYmVmb3JlQXBwZWFyIHx8IGJlZm9yZUVudGVyKVxyXG4gICAgOiBiZWZvcmVFbnRlcjtcclxuICB2YXIgZW50ZXJIb29rID0gaXNBcHBlYXJcclxuICAgID8gKHR5cGVvZiBhcHBlYXIgPT09ICdmdW5jdGlvbicgPyBhcHBlYXIgOiBlbnRlcilcclxuICAgIDogZW50ZXI7XHJcbiAgdmFyIGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcclxuICAgID8gKGFmdGVyQXBwZWFyIHx8IGFmdGVyRW50ZXIpXHJcbiAgICA6IGFmdGVyRW50ZXI7XHJcbiAgdmFyIGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXHJcbiAgICA/IChhcHBlYXJDYW5jZWxsZWQgfHwgZW50ZXJDYW5jZWxsZWQpXHJcbiAgICA6IGVudGVyQ2FuY2VsbGVkO1xyXG5cclxuICB2YXIgZXhwbGljaXRFbnRlckR1cmF0aW9uID0gdG9OdW1iZXIoXHJcbiAgICBpc09iamVjdChkdXJhdGlvbilcclxuICAgICAgPyBkdXJhdGlvbi5lbnRlclxyXG4gICAgICA6IGR1cmF0aW9uXHJcbiAgKTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZXhwbGljaXRFbnRlckR1cmF0aW9uICE9IG51bGwpIHtcclxuICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uLCAnZW50ZXInLCB2bm9kZSk7XHJcbiAgfVxyXG5cclxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xyXG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChlbnRlckhvb2spO1xyXG5cclxuICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcclxuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCB0b0NsYXNzKTtcclxuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XHJcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcclxuICAgICAgfVxyXG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFmdGVyRW50ZXJIb29rICYmIGFmdGVyRW50ZXJIb29rKGVsKTtcclxuICAgIH1cclxuICAgIGVsLl9lbnRlckNiID0gbnVsbDtcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcclxuICAgIC8vIHJlbW92ZSBwZW5kaW5nIGxlYXZlIGVsZW1lbnQgb24gZW50ZXIgYnkgaW5qZWN0aW5nIGFuIGluc2VydCBob29rXHJcbiAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIHZhciBwZW5kaW5nTm9kZSA9IHBhcmVudCAmJiBwYXJlbnQuX3BlbmRpbmcgJiYgcGFyZW50Ll9wZW5kaW5nW3Zub2RlLmtleV07XHJcbiAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxyXG4gICAgICAgIHBlbmRpbmdOb2RlLnRhZyA9PT0gdm5vZGUudGFnICYmXHJcbiAgICAgICAgcGVuZGluZ05vZGUuZWxtLl9sZWF2ZUNiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gc3RhcnQgZW50ZXIgdHJhbnNpdGlvblxyXG4gIGJlZm9yZUVudGVySG9vayAmJiBiZWZvcmVFbnRlckhvb2soZWwpO1xyXG4gIGlmIChleHBlY3RzQ1NTKSB7XHJcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xyXG4gICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XHJcbiAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xyXG4gICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xyXG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XHJcbiAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XHJcbiAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0RW50ZXJEdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAodm5vZGUuZGF0YS5zaG93KSB7XHJcbiAgICB0b2dnbGVEaXNwbGF5ICYmIHRvZ2dsZURpc3BsYXkoKTtcclxuICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcclxuICB9XHJcblxyXG4gIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xyXG4gICAgY2IoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlYXZlICh2bm9kZSwgcm0pIHtcclxuICB2YXIgZWwgPSB2bm9kZS5lbG07XHJcblxyXG4gIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XHJcbiAgaWYgKGlzRGVmKGVsLl9lbnRlckNiKSkge1xyXG4gICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgIGVsLl9lbnRlckNiKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XHJcbiAgaWYgKGlzVW5kZWYoZGF0YSkgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcclxuICAgIHJldHVybiBybSgpXHJcbiAgfVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIHZhciBjc3MgPSBkYXRhLmNzcztcclxuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcclxuICB2YXIgbGVhdmVDbGFzcyA9IGRhdGEubGVhdmVDbGFzcztcclxuICB2YXIgbGVhdmVUb0NsYXNzID0gZGF0YS5sZWF2ZVRvQ2xhc3M7XHJcbiAgdmFyIGxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XHJcbiAgdmFyIGJlZm9yZUxlYXZlID0gZGF0YS5iZWZvcmVMZWF2ZTtcclxuICB2YXIgbGVhdmUgPSBkYXRhLmxlYXZlO1xyXG4gIHZhciBhZnRlckxlYXZlID0gZGF0YS5hZnRlckxlYXZlO1xyXG4gIHZhciBsZWF2ZUNhbmNlbGxlZCA9IGRhdGEubGVhdmVDYW5jZWxsZWQ7XHJcbiAgdmFyIGRlbGF5TGVhdmUgPSBkYXRhLmRlbGF5TGVhdmU7XHJcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcclxuXHJcbiAgdmFyIGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlICYmICFpc0lFOTtcclxuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgobGVhdmUpO1xyXG5cclxuICB2YXIgZXhwbGljaXRMZWF2ZUR1cmF0aW9uID0gdG9OdW1iZXIoXHJcbiAgICBpc09iamVjdChkdXJhdGlvbilcclxuICAgICAgPyBkdXJhdGlvbi5sZWF2ZVxyXG4gICAgICA6IGR1cmF0aW9uXHJcbiAgKTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNEZWYoZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xyXG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24sICdsZWF2ZScsIHZub2RlKTtcclxuICB9XHJcblxyXG4gIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLl9wZW5kaW5nKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuX3BlbmRpbmdbdm5vZGUua2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZXhwZWN0c0NTUykge1xyXG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XHJcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XHJcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcclxuICAgICAgfVxyXG4gICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBybSgpO1xyXG4gICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwpO1xyXG4gICAgfVxyXG4gICAgZWwuX2xlYXZlQ2IgPSBudWxsO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoZGVsYXlMZWF2ZSkge1xyXG4gICAgZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwZXJmb3JtTGVhdmUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSAoKSB7XHJcbiAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXHJcbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgLy8gcmVjb3JkIGxlYXZpbmcgZWxlbWVudFxyXG4gICAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcclxuICAgICAgKGVsLnBhcmVudE5vZGUuX3BlbmRpbmcgfHwgKGVsLnBhcmVudE5vZGUuX3BlbmRpbmcgPSB7fSkpWyh2bm9kZS5rZXkpXSA9IHZub2RlO1xyXG4gICAgfVxyXG4gICAgYmVmb3JlTGVhdmUgJiYgYmVmb3JlTGVhdmUoZWwpO1xyXG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcclxuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcclxuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcclxuICAgICAgbmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xyXG4gICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XHJcbiAgICAgICAgICBpZiAoIXVzZXJXYW50c0NvbnRyb2wpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRMZWF2ZUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZWF2ZSAmJiBsZWF2ZShlbCwgY2IpO1xyXG4gICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XHJcbiAgICAgIGNiKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBvbmx5IHVzZWQgaW4gZGV2IG1vZGVcclxuZnVuY3Rpb24gY2hlY2tEdXJhdGlvbiAodmFsLCBuYW1lLCB2bm9kZSkge1xyXG4gIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xyXG4gICAgd2FybihcclxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgbm90IGEgdmFsaWQgbnVtYmVyIC0gXCIgK1xyXG4gICAgICBcImdvdCBcIiArIChKU09OLnN0cmluZ2lmeSh2YWwpKSArIFwiLlwiLFxyXG4gICAgICB2bm9kZS5jb250ZXh0XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4odmFsKSkge1xyXG4gICAgd2FybihcclxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgTmFOIC0gXCIgK1xyXG4gICAgICAndGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LicsXHJcbiAgICAgIHZub2RlLmNvbnRleHRcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24gKHZhbCkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsKVxyXG59XHJcblxyXG4vKipcclxuICogTm9ybWFsaXplIGEgdHJhbnNpdGlvbiBob29rJ3MgYXJndW1lbnQgbGVuZ3RoLiBUaGUgaG9vayBtYXkgYmU6XHJcbiAqIC0gYSBtZXJnZWQgaG9vayAoaW52b2tlcikgd2l0aCB0aGUgb3JpZ2luYWwgaW4gLmZuc1xyXG4gKiAtIGEgd3JhcHBlZCBjb21wb25lbnQgbWV0aG9kIChjaGVjayAuX2xlbmd0aClcclxuICogLSBhIHBsYWluIGZ1bmN0aW9uICgubGVuZ3RoKVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aCAoZm4pIHtcclxuICBpZiAoaXNVbmRlZihmbikpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICB2YXIgaW52b2tlckZucyA9IGZuLmZucztcclxuICBpZiAoaXNEZWYoaW52b2tlckZucykpIHtcclxuICAgIC8vIGludm9rZXJcclxuICAgIHJldHVybiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoKFxyXG4gICAgICBBcnJheS5pc0FycmF5KGludm9rZXJGbnMpXHJcbiAgICAgICAgPyBpbnZva2VyRm5zWzBdXHJcbiAgICAgICAgOiBpbnZva2VyRm5zXHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoZm4uX2xlbmd0aCB8fCBmbi5sZW5ndGgpID4gMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2VudGVyIChfLCB2bm9kZSkge1xyXG4gIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcclxuICAgIGVudGVyKHZub2RlKTtcclxuICB9XHJcbn1cclxuXHJcbnZhciB0cmFuc2l0aW9uID0gaW5Ccm93c2VyID8ge1xyXG4gIGNyZWF0ZTogX2VudGVyLFxyXG4gIGFjdGl2YXRlOiBfZW50ZXIsXHJcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUkJDEgKHZub2RlLCBybSkge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcclxuICAgICAgbGVhdmUodm5vZGUsIHJtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IDoge31cclxuXHJcbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXHJcbiAgYXR0cnMsXHJcbiAga2xhc3MsXHJcbiAgZXZlbnRzLFxyXG4gIGRvbVByb3BzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb25cclxuXVxyXG5cclxuLyogICovXHJcblxyXG4vLyB0aGUgZGlyZWN0aXZlIG1vZHVsZSBzaG91bGQgYmUgYXBwbGllZCBsYXN0LCBhZnRlciBhbGxcclxuLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cclxudmFyIG1vZHVsZXMgPSBwbGF0Zm9ybU1vZHVsZXMuY29uY2F0KGJhc2VNb2R1bGVzKTtcclxuXHJcbnZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xyXG5cclxuLyoqXHJcbiAqIE5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBsaWtlIGF0dGFjaGluZ1xyXG4gKiBwcm9wZXJ0aWVzIHRvIEVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG5pZiAoaXNJRTkpIHtcclxuICAvLyBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L2ludGVybmV0LWV4cGxvcmVyLTktb25pbnB1dC9cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgaWYgKGVsICYmIGVsLnZtb2RlbCkge1xyXG4gICAgICB0cmlnZ2VyKGVsLCAnaW5wdXQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxudmFyIGRpcmVjdGl2ZSA9IHtcclxuICBpbnNlcnRlZDogZnVuY3Rpb24gaW5zZXJ0ZWQgKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpIHtcclxuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgIC8vICM2OTAzXHJcbiAgICAgIGlmIChvbGRWbm9kZS5lbG0gJiYgIW9sZFZub2RlLmVsbS5fdk9wdGlvbnMpIHtcclxuICAgICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ3Bvc3RwYXRjaCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRpcmVjdGl2ZS5jb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsLl92T3B0aW9ucyA9IFtdLm1hcC5jYWxsKGVsLm9wdGlvbnMsIGdldFZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodm5vZGUudGFnID09PSAndGV4dGFyZWEnIHx8IGlzVGV4dElucHV0VHlwZShlbC50eXBlKSkge1xyXG4gICAgICBlbC5fdk1vZGlmaWVycyA9IGJpbmRpbmcubW9kaWZpZXJzO1xyXG4gICAgICBpZiAoIWJpbmRpbmcubW9kaWZpZXJzLmxhenkpIHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIG9uQ29tcG9zaXRpb25FbmQpO1xyXG4gICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cclxuICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXHJcbiAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxyXG4gICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ29tcG9zaXRpb25FbmQpO1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChpc0lFOSkge1xyXG4gICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcclxuICAgICAgLy8gaW4gY2FzZSB0aGUgb3B0aW9ucyByZW5kZXJlZCBieSB2LWZvciBoYXZlIGNoYW5nZWQsXHJcbiAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGUgdmFsdWUgaXMgb3V0LW9mLXN5bmMgd2l0aCB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cclxuICAgICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGZpbHRlciBvdXQgdmFsdWVzIHRoYXQgbm8gbG9uZ2VyIGhhcyBhIG1hdGNoaW5nXHJcbiAgICAgIC8vIG9wdGlvbiBpbiB0aGUgRE9NLlxyXG4gICAgICB2YXIgcHJldk9wdGlvbnMgPSBlbC5fdk9wdGlvbnM7XHJcbiAgICAgIHZhciBjdXJPcHRpb25zID0gZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xyXG4gICAgICBpZiAoY3VyT3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCBwcmV2T3B0aW9uc1tpXSk7IH0pKSB7XHJcbiAgICAgICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgaWZcclxuICAgICAgICAvLyBubyBtYXRjaGluZyBvcHRpb24gZm91bmQgZm9yIGF0IGxlYXN0IG9uZSB2YWx1ZVxyXG4gICAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZVxyXG4gICAgICAgICAgPyBiaW5kaW5nLnZhbHVlLnNvbWUoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGhhc05vTWF0Y2hpbmdPcHRpb24odiwgY3VyT3B0aW9ucyk7IH0pXHJcbiAgICAgICAgICA6IGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUgJiYgaGFzTm9NYXRjaGluZ09wdGlvbihiaW5kaW5nLnZhbHVlLCBjdXJPcHRpb25zKTtcclxuICAgICAgICBpZiAobmVlZFJlc2V0KSB7XHJcbiAgICAgICAgICB0cmlnZ2VyKGVsLCAnY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xyXG4gIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICBpZiAoaXNJRSB8fCBpc0VkZ2UpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBhY3R1YWxseVNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bSk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdHVhbGx5U2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xyXG4gIHZhciB2YWx1ZSA9IGJpbmRpbmcudmFsdWU7XHJcbiAgdmFyIGlzTXVsdGlwbGUgPSBlbC5tdWx0aXBsZTtcclxuICBpZiAoaXNNdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcclxuICAgICAgXCI8c2VsZWN0IG11bHRpcGxlIHYtbW9kZWw9XFxcIlwiICsgKGJpbmRpbmcuZXhwcmVzc2lvbikgKyBcIlxcXCI+IFwiICtcclxuICAgICAgXCJleHBlY3RzIGFuIEFycmF5IHZhbHVlIGZvciBpdHMgYmluZGluZywgYnV0IGdvdCBcIiArIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSksXHJcbiAgICAgIHZtXHJcbiAgICApO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIHZhciBzZWxlY3RlZCwgb3B0aW9uO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsID0gZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIG9wdGlvbiA9IGVsLm9wdGlvbnNbaV07XHJcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xyXG4gICAgICBzZWxlY3RlZCA9IGxvb3NlSW5kZXhPZih2YWx1ZSwgZ2V0VmFsdWUob3B0aW9uKSkgPiAtMTtcclxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCAhPT0gc2VsZWN0ZWQpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uKSwgdmFsdWUpKSB7XHJcbiAgICAgICAgaWYgKGVsLnNlbGVjdGVkSW5kZXggIT09IGkpIHtcclxuICAgICAgICAgIGVsLnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWlzTXVsdGlwbGUpIHtcclxuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMuZXZlcnkoZnVuY3Rpb24gKG8pIHsgcmV0dXJuICFsb29zZUVxdWFsKG8sIHZhbHVlKTsgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWUgKG9wdGlvbikge1xyXG4gIHJldHVybiAnX3ZhbHVlJyBpbiBvcHRpb25cclxuICAgID8gb3B0aW9uLl92YWx1ZVxyXG4gICAgOiBvcHRpb24udmFsdWVcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db21wb3NpdGlvblN0YXJ0IChlKSB7XHJcbiAgZS50YXJnZXQuY29tcG9zaW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db21wb3NpdGlvbkVuZCAoZSkge1xyXG4gIC8vIHByZXZlbnQgdHJpZ2dlcmluZyBhbiBpbnB1dCBldmVudCBmb3Igbm8gcmVhc29uXHJcbiAgaWYgKCFlLnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuIH1cclxuICBlLnRhcmdldC5jb21wb3NpbmcgPSBmYWxzZTtcclxuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcclxuICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgZWwuZGlzcGF0Y2hFdmVudChlKTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG4vLyByZWN1cnNpdmVseSBzZWFyY2ggZm9yIHBvc3NpYmxlIHRyYW5zaXRpb24gZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCByb290XHJcbmZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XHJcbiAgcmV0dXJuIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmICghdm5vZGUuZGF0YSB8fCAhdm5vZGUuZGF0YS50cmFuc2l0aW9uKVxyXG4gICAgPyBsb2NhdGVOb2RlKHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSlcclxuICAgIDogdm5vZGVcclxufVxyXG5cclxudmFyIHNob3cgPSB7XHJcbiAgYmluZDogZnVuY3Rpb24gYmluZCAoZWwsIHJlZiwgdm5vZGUpIHtcclxuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcclxuXHJcbiAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xyXG4gICAgdmFyIHRyYW5zaXRpb24kJDEgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcclxuICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgPVxyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnJyA6IGVsLnN0eWxlLmRpc3BsYXk7XHJcbiAgICBpZiAodmFsdWUgJiYgdHJhbnNpdGlvbiQkMSkge1xyXG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xyXG4gICAgICBlbnRlcih2bm9kZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbERpc3BsYXk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gb3JpZ2luYWxEaXNwbGF5IDogJ25vbmUnO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChlbCwgcmVmLCB2bm9kZSkge1xyXG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xyXG4gICAgdmFyIG9sZFZhbHVlID0gcmVmLm9sZFZhbHVlO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCF2YWx1ZSA9PT0gIW9sZFZhbHVlKSB7IHJldHVybiB9XHJcbiAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xyXG4gICAgdmFyIHRyYW5zaXRpb24kJDEgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcclxuICAgIGlmICh0cmFuc2l0aW9uJCQxKSB7XHJcbiAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKFxyXG4gICAgZWwsXHJcbiAgICBiaW5kaW5nLFxyXG4gICAgdm5vZGUsXHJcbiAgICBvbGRWbm9kZSxcclxuICAgIGlzRGVzdHJveVxyXG4gICkge1xyXG4gICAgaWYgKCFpc0Rlc3Ryb3kpIHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBwbGF0Zm9ybURpcmVjdGl2ZXMgPSB7XHJcbiAgbW9kZWw6IGRpcmVjdGl2ZSxcclxuICBzaG93OiBzaG93XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLy8gUHJvdmlkZXMgdHJhbnNpdGlvbiBzdXBwb3J0IGZvciBhIHNpbmdsZSBlbGVtZW50L2NvbXBvbmVudC5cclxuLy8gc3VwcG9ydHMgdHJhbnNpdGlvbiBtb2RlIChvdXQtaW4gLyBpbi1vdXQpXHJcblxyXG52YXIgdHJhbnNpdGlvblByb3BzID0ge1xyXG4gIG5hbWU6IFN0cmluZyxcclxuICBhcHBlYXI6IEJvb2xlYW4sXHJcbiAgY3NzOiBCb29sZWFuLFxyXG4gIG1vZGU6IFN0cmluZyxcclxuICB0eXBlOiBTdHJpbmcsXHJcbiAgZW50ZXJDbGFzczogU3RyaW5nLFxyXG4gIGxlYXZlQ2xhc3M6IFN0cmluZyxcclxuICBlbnRlclRvQ2xhc3M6IFN0cmluZyxcclxuICBsZWF2ZVRvQ2xhc3M6IFN0cmluZyxcclxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXHJcbiAgbGVhdmVBY3RpdmVDbGFzczogU3RyaW5nLFxyXG4gIGFwcGVhckNsYXNzOiBTdHJpbmcsXHJcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcclxuICBhcHBlYXJUb0NsYXNzOiBTdHJpbmcsXHJcbiAgZHVyYXRpb246IFtOdW1iZXIsIFN0cmluZywgT2JqZWN0XVxyXG59O1xyXG5cclxuLy8gaW4gY2FzZSB0aGUgY2hpbGQgaXMgYWxzbyBhbiBhYnN0cmFjdCBjb21wb25lbnQsIGUuZy4gPGtlZXAtYWxpdmU+XHJcbi8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXHJcbmZ1bmN0aW9uIGdldFJlYWxDaGlsZCAodm5vZGUpIHtcclxuICB2YXIgY29tcE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xyXG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcclxuICAgIHJldHVybiBnZXRSZWFsQ2hpbGQoZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChjb21wT3B0aW9ucy5jaGlsZHJlbikpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2bm9kZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFRyYW5zaXRpb25EYXRhIChjb21wKSB7XHJcbiAgdmFyIGRhdGEgPSB7fTtcclxuICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XHJcbiAgLy8gcHJvcHNcclxuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5wcm9wc0RhdGEpIHtcclxuICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcclxuICB9XHJcbiAgLy8gZXZlbnRzLlxyXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xyXG4gIHZhciBsaXN0ZW5lcnMgPSBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XHJcbiAgZm9yICh2YXIga2V5JDEgaW4gbGlzdGVuZXJzKSB7XHJcbiAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZWhvbGRlciAoaCwgcmF3Q2hpbGQpIHtcclxuICBpZiAoL1xcZC1rZWVwLWFsaXZlJC8udGVzdChyYXdDaGlsZC50YWcpKSB7XHJcbiAgICByZXR1cm4gaCgna2VlcC1hbGl2ZScsIHtcclxuICAgICAgcHJvcHM6IHJhd0NoaWxkLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFzUGFyZW50VHJhbnNpdGlvbiAodm5vZGUpIHtcclxuICB3aGlsZSAoKHZub2RlID0gdm5vZGUucGFyZW50KSkge1xyXG4gICAgaWYgKHZub2RlLmRhdGEudHJhbnNpdGlvbikge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYW1lQ2hpbGQgKGNoaWxkLCBvbGRDaGlsZCkge1xyXG4gIHJldHVybiBvbGRDaGlsZC5rZXkgPT09IGNoaWxkLmtleSAmJiBvbGRDaGlsZC50YWcgPT09IGNoaWxkLnRhZ1xyXG59XHJcblxyXG52YXIgVHJhbnNpdGlvbiA9IHtcclxuICBuYW1lOiAndHJhbnNpdGlvbicsXHJcbiAgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyxcclxuICBhYnN0cmFjdDogdHJ1ZSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcclxuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xyXG5cclxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XHJcbiAgICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbHRlciBvdXQgdGV4dCBub2RlcyAocG9zc2libGUgd2hpdGVzcGFjZXMpXHJcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50YWcgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpOyB9KTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2FybiBtdWx0aXBsZSBlbGVtZW50c1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICB3YXJuKFxyXG4gICAgICAgICc8dHJhbnNpdGlvbj4gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHNpbmdsZSBlbGVtZW50LiBVc2UgJyArXHJcbiAgICAgICAgJzx0cmFuc2l0aW9uLWdyb3VwPiBmb3IgbGlzdHMuJyxcclxuICAgICAgICB0aGlzLiRwYXJlbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbW9kZSA9IHRoaXMubW9kZTtcclxuXHJcbiAgICAvLyB3YXJuIGludmFsaWQgbW9kZVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICAgICAgbW9kZSAmJiBtb2RlICE9PSAnaW4tb3V0JyAmJiBtb2RlICE9PSAnb3V0LWluJ1xyXG4gICAgKSB7XHJcbiAgICAgIHdhcm4oXHJcbiAgICAgICAgJ2ludmFsaWQgPHRyYW5zaXRpb24+IG1vZGU6ICcgKyBtb2RlLFxyXG4gICAgICAgIHRoaXMuJHBhcmVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xyXG5cclxuICAgIC8vIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgcm9vdCBub2RlIGFuZCB0aGUgY29tcG9uZW50J3NcclxuICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxyXG4gICAgaWYgKGhhc1BhcmVudFRyYW5zaXRpb24odGhpcy4kdm5vZGUpKSB7XHJcbiAgICAgIHJldHVybiByYXdDaGlsZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFwcGx5IHRyYW5zaXRpb24gZGF0YSB0byBjaGlsZFxyXG4gICAgLy8gdXNlIGdldFJlYWxDaGlsZCgpIHRvIGlnbm9yZSBhYnN0cmFjdCBjb21wb25lbnRzIGUuZy4ga2VlcC1hbGl2ZVxyXG4gICAgdmFyIGNoaWxkID0gZ2V0UmVhbENoaWxkKHJhd0NoaWxkKTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCFjaGlsZCkge1xyXG4gICAgICByZXR1cm4gcmF3Q2hpbGRcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbGVhdmluZykge1xyXG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5zdXJlIGEga2V5IHRoYXQgaXMgdW5pcXVlIHRvIHRoZSB2bm9kZSB0eXBlIGFuZCB0byB0aGlzIHRyYW5zaXRpb25cclxuICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcclxuICAgIC8vIGR1cmluZyBlbnRlcmluZy5cclxuICAgIHZhciBpZCA9IFwiX190cmFuc2l0aW9uLVwiICsgKHRoaXMuX3VpZCkgKyBcIi1cIjtcclxuICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXHJcbiAgICAgID8gY2hpbGQuaXNDb21tZW50XHJcbiAgICAgICAgPyBpZCArICdjb21tZW50J1xyXG4gICAgICAgIDogaWQgKyBjaGlsZC50YWdcclxuICAgICAgOiBpc1ByaW1pdGl2ZShjaGlsZC5rZXkpXHJcbiAgICAgICAgPyAoU3RyaW5nKGNoaWxkLmtleSkuaW5kZXhPZihpZCkgPT09IDAgPyBjaGlsZC5rZXkgOiBpZCArIGNoaWxkLmtleSlcclxuICAgICAgICA6IGNoaWxkLmtleTtcclxuXHJcbiAgICB2YXIgZGF0YSA9IChjaGlsZC5kYXRhIHx8IChjaGlsZC5kYXRhID0ge30pKS50cmFuc2l0aW9uID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xyXG4gICAgdmFyIG9sZFJhd0NoaWxkID0gdGhpcy5fdm5vZGU7XHJcbiAgICB2YXIgb2xkQ2hpbGQgPSBnZXRSZWFsQ2hpbGQob2xkUmF3Q2hpbGQpO1xyXG5cclxuICAgIC8vIG1hcmsgdi1zaG93XHJcbiAgICAvLyBzbyB0aGF0IHRoZSB0cmFuc2l0aW9uIG1vZHVsZSBjYW4gaGFuZCBvdmVyIHRoZSBjb250cm9sIHRvIHRoZSBkaXJlY3RpdmVcclxuICAgIGlmIChjaGlsZC5kYXRhLmRpcmVjdGl2ZXMgJiYgY2hpbGQuZGF0YS5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ3Nob3cnOyB9KSkge1xyXG4gICAgICBjaGlsZC5kYXRhLnNob3cgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgb2xkQ2hpbGQgJiZcclxuICAgICAgb2xkQ2hpbGQuZGF0YSAmJlxyXG4gICAgICAhaXNTYW1lQ2hpbGQoY2hpbGQsIG9sZENoaWxkKSAmJlxyXG4gICAgICAhaXNBc3luY1BsYWNlaG9sZGVyKG9sZENoaWxkKSAmJlxyXG4gICAgICAvLyAjNjY4NyBjb21wb25lbnQgcm9vdCBpcyBhIGNvbW1lbnQgbm9kZVxyXG4gICAgICAhKG9sZENoaWxkLmNvbXBvbmVudEluc3RhbmNlICYmIG9sZENoaWxkLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZS5pc0NvbW1lbnQpXHJcbiAgICApIHtcclxuICAgICAgLy8gcmVwbGFjZSBvbGQgY2hpbGQgdHJhbnNpdGlvbiBkYXRhIHdpdGggZnJlc2ggb25lXHJcbiAgICAgIC8vIGltcG9ydGFudCBmb3IgZHluYW1pYyB0cmFuc2l0aW9ucyFcclxuICAgICAgdmFyIG9sZERhdGEgPSBvbGRDaGlsZC5kYXRhLnRyYW5zaXRpb24gPSBleHRlbmQoe30sIGRhdGEpO1xyXG4gICAgICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBtb2RlXHJcbiAgICAgIGlmIChtb2RlID09PSAnb3V0LWluJykge1xyXG4gICAgICAgIC8vIHJldHVybiBwbGFjZWhvbGRlciBub2RlIGFuZCBxdWV1ZSB1cGRhdGUgd2hlbiBsZWF2ZSBmaW5pc2hlc1xyXG4gICAgICAgIHRoaXMuX2xlYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdhZnRlckxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhpcyQxLl9sZWF2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzJDEuJGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyKGgsIHJhd0NoaWxkKVxyXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdpbi1vdXQnKSB7XHJcbiAgICAgICAgaWYgKGlzQXN5bmNQbGFjZWhvbGRlcihjaGlsZCkpIHtcclxuICAgICAgICAgIHJldHVybiBvbGRSYXdDaGlsZFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVsYXllZExlYXZlO1xyXG4gICAgICAgIHZhciBwZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoKSB7IGRlbGF5ZWRMZWF2ZSgpOyB9O1xyXG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdhZnRlckVudGVyJywgcGVyZm9ybUxlYXZlKTtcclxuICAgICAgICBtZXJnZVZOb2RlSG9vayhkYXRhLCAnZW50ZXJDYW5jZWxsZWQnLCBwZXJmb3JtTGVhdmUpO1xyXG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdkZWxheUxlYXZlJywgZnVuY3Rpb24gKGxlYXZlKSB7IGRlbGF5ZWRMZWF2ZSA9IGxlYXZlOyB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYXdDaGlsZFxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG4vLyBQcm92aWRlcyB0cmFuc2l0aW9uIHN1cHBvcnQgZm9yIGxpc3QgaXRlbXMuXHJcbi8vIHN1cHBvcnRzIG1vdmUgdHJhbnNpdGlvbnMgdXNpbmcgdGhlIEZMSVAgdGVjaG5pcXVlLlxyXG5cclxuLy8gQmVjYXVzZSB0aGUgdmRvbSdzIGNoaWxkcmVuIHVwZGF0ZSBhbGdvcml0aG0gaXMgXCJ1bnN0YWJsZVwiIC0gaS5lLlxyXG4vLyBpdCBkb2Vzbid0IGd1YXJhbnRlZSB0aGUgcmVsYXRpdmUgcG9zaXRpb25pbmcgb2YgcmVtb3ZlZCBlbGVtZW50cyxcclxuLy8gd2UgZm9yY2UgdHJhbnNpdGlvbi1ncm91cCB0byB1cGRhdGUgaXRzIGNoaWxkcmVuIGludG8gdHdvIHBhc3NlczpcclxuLy8gaW4gdGhlIGZpcnN0IHBhc3MsIHdlIHJlbW92ZSBhbGwgbm9kZXMgdGhhdCBuZWVkIHRvIGJlIHJlbW92ZWQsXHJcbi8vIHRyaWdnZXJpbmcgdGhlaXIgbGVhdmluZyB0cmFuc2l0aW9uOyBpbiB0aGUgc2Vjb25kIHBhc3MsIHdlIGluc2VydC9tb3ZlXHJcbi8vIGludG8gdGhlIGZpbmFsIGRlc2lyZWQgc3RhdGUuIFRoaXMgd2F5IGluIHRoZSBzZWNvbmQgcGFzcyByZW1vdmVkXHJcbi8vIG5vZGVzIHdpbGwgcmVtYWluIHdoZXJlIHRoZXkgc2hvdWxkIGJlLlxyXG5cclxudmFyIHByb3BzID0gZXh0ZW5kKHtcclxuICB0YWc6IFN0cmluZyxcclxuICBtb3ZlQ2xhc3M6IFN0cmluZ1xyXG59LCB0cmFuc2l0aW9uUHJvcHMpO1xyXG5cclxuZGVsZXRlIHByb3BzLm1vZGU7XHJcblxyXG52YXIgVHJhbnNpdGlvbkdyb3VwID0ge1xyXG4gIHByb3BzOiBwcm9wcyxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcclxuICAgIHZhciB0YWcgPSB0aGlzLnRhZyB8fCB0aGlzLiR2bm9kZS5kYXRhLnRhZyB8fCAnc3Bhbic7XHJcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZhciBwcmV2Q2hpbGRyZW4gPSB0aGlzLnByZXZDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcbiAgICB2YXIgcmF3Q2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdO1xyXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgdmFyIHRyYW5zaXRpb25EYXRhID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGMgPSByYXdDaGlsZHJlbltpXTtcclxuICAgICAgaWYgKGMudGFnKSB7XHJcbiAgICAgICAgaWYgKGMua2V5ICE9IG51bGwgJiYgU3RyaW5nKGMua2V5KS5pbmRleE9mKCdfX3ZsaXN0JykgIT09IDApIHtcclxuICAgICAgICAgIGNoaWxkcmVuLnB1c2goYyk7XHJcbiAgICAgICAgICBtYXBbYy5rZXldID0gY1xyXG4gICAgICAgICAgOyhjLmRhdGEgfHwgKGMuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgdmFyIG9wdHMgPSBjLmNvbXBvbmVudE9wdGlvbnM7XHJcbiAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMgPyAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZyB8fCAnJykgOiBjLnRhZztcclxuICAgICAgICAgIHdhcm4oKFwiPHRyYW5zaXRpb24tZ3JvdXA+IGNoaWxkcmVuIG11c3QgYmUga2V5ZWQ6IDxcIiArIG5hbWUgKyBcIj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2Q2hpbGRyZW4pIHtcclxuICAgICAgdmFyIGtlcHQgPSBbXTtcclxuICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJldkNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcclxuICAgICAgICB2YXIgYyQxID0gcHJldkNoaWxkcmVuW2kkMV07XHJcbiAgICAgICAgYyQxLmRhdGEudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xyXG4gICAgICAgIGMkMS5kYXRhLnBvcyA9IGMkMS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKG1hcFtjJDEua2V5XSkge1xyXG4gICAgICAgICAga2VwdC5wdXNoKGMkMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbW92ZWQucHVzaChjJDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmtlcHQgPSBoKHRhZywgbnVsbCwga2VwdCk7XHJcbiAgICAgIHRoaXMucmVtb3ZlZCA9IHJlbW92ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBjaGlsZHJlbilcclxuICB9LFxyXG5cclxuICBiZWZvcmVVcGRhdGU6IGZ1bmN0aW9uIGJlZm9yZVVwZGF0ZSAoKSB7XHJcbiAgICAvLyBmb3JjZSByZW1vdmluZyBwYXNzXHJcbiAgICB0aGlzLl9fcGF0Y2hfXyhcclxuICAgICAgdGhpcy5fdm5vZGUsXHJcbiAgICAgIHRoaXMua2VwdCxcclxuICAgICAgZmFsc2UsIC8vIGh5ZHJhdGluZ1xyXG4gICAgICB0cnVlIC8vIHJlbW92ZU9ubHkgKCFpbXBvcnRhbnQsIGF2b2lkcyB1bm5lY2Vzc2FyeSBtb3ZlcylcclxuICAgICk7XHJcbiAgICB0aGlzLl92bm9kZSA9IHRoaXMua2VwdDtcclxuICB9LFxyXG5cclxuICB1cGRhdGVkOiBmdW5jdGlvbiB1cGRhdGVkICgpIHtcclxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuO1xyXG4gICAgdmFyIG1vdmVDbGFzcyA9IHRoaXMubW92ZUNsYXNzIHx8ICgodGhpcy5uYW1lIHx8ICd2JykgKyAnLW1vdmUnKTtcclxuICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLmhhc01vdmUoY2hpbGRyZW5bMF0uZWxtLCBtb3ZlQ2xhc3MpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIGRpdmlkZSB0aGUgd29yayBpbnRvIHRocmVlIGxvb3BzIHRvIGF2b2lkIG1peGluZyBET00gcmVhZHMgYW5kIHdyaXRlc1xyXG4gICAgLy8gaW4gZWFjaCBpdGVyYXRpb24gLSB3aGljaCBoZWxwcyBwcmV2ZW50IGxheW91dCB0aHJhc2hpbmcuXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNhbGxQZW5kaW5nQ2JzKTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2gocmVjb3JkUG9zaXRpb24pO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChhcHBseVRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICAvLyBmb3JjZSByZWZsb3cgdG8gcHV0IGV2ZXJ5dGhpbmcgaW4gcG9zaXRpb25cclxuICAgIC8vIGFzc2lnbiB0byB0aGlzIHRvIGF2b2lkIGJlaW5nIHJlbW92ZWQgaW4gdHJlZS1zaGFraW5nXHJcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICAgIHRoaXMuX3JlZmxvdyA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgaWYgKGMuZGF0YS5tb3ZlZCkge1xyXG4gICAgICAgIHZhciBlbCA9IGMuZWxtO1xyXG4gICAgICAgIHZhciBzID0gZWwuc3R5bGU7XHJcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xyXG4gICAgICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBlbC5fbW92ZUNiID0gZnVuY3Rpb24gY2IgKGUpIHtcclxuICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGNiKTtcclxuICAgICAgICAgICAgZWwuX21vdmVDYiA9IG51bGw7XHJcbiAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgaGFzTW92ZTogZnVuY3Rpb24gaGFzTW92ZSAoZWwsIG1vdmVDbGFzcykge1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgaWYgKCFoYXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgIGlmICh0aGlzLl9oYXNNb3ZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01vdmVcclxuICAgICAgfVxyXG4gICAgICAvLyBEZXRlY3Qgd2hldGhlciBhbiBlbGVtZW50IHdpdGggdGhlIG1vdmUgY2xhc3MgYXBwbGllZCBoYXNcclxuICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zLiBTaW5jZSB0aGUgZWxlbWVudCBtYXkgYmUgaW5zaWRlIGFuIGVudGVyaW5nXHJcbiAgICAgIC8vIHRyYW5zaXRpb24gYXQgdGhpcyB2ZXJ5IG1vbWVudCwgd2UgbWFrZSBhIGNsb25lIG9mIGl0IGFuZCByZW1vdmVcclxuICAgICAgLy8gYWxsIG90aGVyIHRyYW5zaXRpb24gY2xhc3NlcyBhcHBsaWVkIHRvIGVuc3VyZSBvbmx5IHRoZSBtb3ZlIGNsYXNzXHJcbiAgICAgIC8vIGlzIGFwcGxpZWQuXHJcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSgpO1xyXG4gICAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XHJcbiAgICAgICAgZWwuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykgeyByZW1vdmVDbGFzcyhjbG9uZSwgY2xzKTsgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkQ2xhc3MoY2xvbmUsIG1vdmVDbGFzcyk7XHJcbiAgICAgIGNsb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMuJGVsLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgdmFyIGluZm8gPSBnZXRUcmFuc2l0aW9uSW5mbyhjbG9uZSk7XHJcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgICAgcmV0dXJuICh0aGlzLl9oYXNNb3ZlID0gaW5mby5oYXNUcmFuc2Zvcm0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxsUGVuZGluZ0NicyAoYykge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChjLmVsbS5fbW92ZUNiKSB7XHJcbiAgICBjLmVsbS5fbW92ZUNiKCk7XHJcbiAgfVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gIGlmIChjLmVsbS5fZW50ZXJDYikge1xyXG4gICAgYy5lbG0uX2VudGVyQ2IoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY29yZFBvc2l0aW9uIChjKSB7XHJcbiAgYy5kYXRhLm5ld1BvcyA9IGMuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRyYW5zbGF0aW9uIChjKSB7XHJcbiAgdmFyIG9sZFBvcyA9IGMuZGF0YS5wb3M7XHJcbiAgdmFyIG5ld1BvcyA9IGMuZGF0YS5uZXdQb3M7XHJcbiAgdmFyIGR4ID0gb2xkUG9zLmxlZnQgLSBuZXdQb3MubGVmdDtcclxuICB2YXIgZHkgPSBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcDtcclxuICBpZiAoZHggfHwgZHkpIHtcclxuICAgIGMuZGF0YS5tb3ZlZCA9IHRydWU7XHJcbiAgICB2YXIgcyA9IGMuZWxtLnN0eWxlO1xyXG4gICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgZHggKyBcInB4LFwiICsgZHkgKyBcInB4KVwiO1xyXG4gICAgcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gIH1cclxufVxyXG5cclxudmFyIHBsYXRmb3JtQ29tcG9uZW50cyA9IHtcclxuICBUcmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxyXG4gIFRyYW5zaXRpb25Hcm91cDogVHJhbnNpdGlvbkdyb3VwXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBzcGVjaWZpYyB1dGlsc1xyXG5WdWUuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XHJcblZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IGlzUmVzZXJ2ZWRUYWc7XHJcblZ1ZS5jb25maWcuaXNSZXNlcnZlZEF0dHIgPSBpc1Jlc2VydmVkQXR0cjtcclxuVnVlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2UgPSBnZXRUYWdOYW1lc3BhY2U7XHJcblZ1ZS5jb25maWcuaXNVbmtub3duRWxlbWVudCA9IGlzVW5rbm93bkVsZW1lbnQ7XHJcblxyXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcclxuZXh0ZW5kKFZ1ZS5vcHRpb25zLmRpcmVjdGl2ZXMsIHBsYXRmb3JtRGlyZWN0aXZlcyk7XHJcbmV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBwbGF0Zm9ybUNvbXBvbmVudHMpO1xyXG5cclxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxyXG5WdWUucHJvdG90eXBlLl9fcGF0Y2hfXyA9IGluQnJvd3NlciA/IHBhdGNoIDogbm9vcDtcclxuXHJcbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcclxuVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbiAoXHJcbiAgZWwsXHJcbiAgaHlkcmF0aW5nXHJcbikge1xyXG4gIGVsID0gZWwgJiYgaW5Ccm93c2VyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xyXG4gIHJldHVybiBtb3VudENvbXBvbmVudCh0aGlzLCBlbCwgaHlkcmF0aW5nKVxyXG59O1xyXG5cclxuLy8gZGV2dG9vbHMgZ2xvYmFsIGhvb2tcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuaWYgKGluQnJvd3Nlcikge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGNvbmZpZy5kZXZ0b29scykge1xyXG4gICAgICBpZiAoZGV2dG9vbHMpIHtcclxuICAgICAgICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxyXG4gICAgICAgIGlzQ2hyb21lXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxyXG4gICAgICAgICAgJ0Rvd25sb2FkIHRoZSBWdWUgRGV2dG9vbHMgZXh0ZW5zaW9uIGZvciBhIGJldHRlciBkZXZlbG9wbWVudCBleHBlcmllbmNlOlxcbicgK1xyXG4gICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtZGV2dG9vbHMnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxyXG4gICAgICBjb25maWcucHJvZHVjdGlvblRpcCAhPT0gZmFsc2UgJiZcclxuICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXHJcbiAgICAgICAgXCJZb3UgYXJlIHJ1bm5pbmcgVnVlIGluIGRldmVsb3BtZW50IG1vZGUuXFxuXCIgK1xyXG4gICAgICAgIFwiTWFrZSBzdXJlIHRvIHR1cm4gb24gcHJvZHVjdGlvbiBtb2RlIHdoZW4gZGVwbG95aW5nIGZvciBwcm9kdWN0aW9uLlxcblwiICtcclxuICAgICAgICBcIlNlZSBtb3JlIHRpcHMgYXQgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZGVwbG95bWVudC5odG1sXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCAwKTtcclxufVxyXG5cclxuLyogICovXHJcblxyXG52YXIgZGVmYXVsdFRhZ1JFID0gL1xce1xceygoPzoufFxcbikrPylcXH1cXH0vZztcclxudmFyIHJlZ2V4RXNjYXBlUkUgPSAvWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nO1xyXG5cclxudmFyIGJ1aWxkUmVnZXggPSBjYWNoZWQoZnVuY3Rpb24gKGRlbGltaXRlcnMpIHtcclxuICB2YXIgb3BlbiA9IGRlbGltaXRlcnNbMF0ucmVwbGFjZShyZWdleEVzY2FwZVJFLCAnXFxcXCQmJyk7XHJcbiAgdmFyIGNsb3NlID0gZGVsaW1pdGVyc1sxXS5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKTtcclxuICByZXR1cm4gbmV3IFJlZ0V4cChvcGVuICsgJygoPzoufFxcXFxuKSs/KScgKyBjbG9zZSwgJ2cnKVxyXG59KTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VUZXh0IChcclxuICB0ZXh0LFxyXG4gIGRlbGltaXRlcnNcclxuKSB7XHJcbiAgdmFyIHRhZ1JFID0gZGVsaW1pdGVycyA/IGJ1aWxkUmVnZXgoZGVsaW1pdGVycykgOiBkZWZhdWx0VGFnUkU7XHJcbiAgaWYgKCF0YWdSRS50ZXN0KHRleHQpKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgdmFyIHRva2VucyA9IFtdO1xyXG4gIHZhciByYXdUb2tlbnMgPSBbXTtcclxuICB2YXIgbGFzdEluZGV4ID0gdGFnUkUubGFzdEluZGV4ID0gMDtcclxuICB2YXIgbWF0Y2gsIGluZGV4LCB0b2tlblZhbHVlO1xyXG4gIHdoaWxlICgobWF0Y2ggPSB0YWdSRS5leGVjKHRleHQpKSkge1xyXG4gICAgaW5kZXggPSBtYXRjaC5pbmRleDtcclxuICAgIC8vIHB1c2ggdGV4dCB0b2tlblxyXG4gICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XHJcbiAgICAgIHJhd1Rva2Vucy5wdXNoKHRva2VuVmFsdWUgPSB0ZXh0LnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpKTtcclxuICAgICAgdG9rZW5zLnB1c2goSlNPTi5zdHJpbmdpZnkodG9rZW5WYWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLy8gdGFnIHRva2VuXHJcbiAgICB2YXIgZXhwID0gcGFyc2VGaWx0ZXJzKG1hdGNoWzFdLnRyaW0oKSk7XHJcbiAgICB0b2tlbnMucHVzaCgoXCJfcyhcIiArIGV4cCArIFwiKVwiKSk7XHJcbiAgICByYXdUb2tlbnMucHVzaCh7ICdAYmluZGluZyc6IGV4cCB9KTtcclxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xyXG4gIH1cclxuICBpZiAobGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgIHJhd1Rva2Vucy5wdXNoKHRva2VuVmFsdWUgPSB0ZXh0LnNsaWNlKGxhc3RJbmRleCkpO1xyXG4gICAgdG9rZW5zLnB1c2goSlNPTi5zdHJpbmdpZnkodG9rZW5WYWx1ZSkpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZXhwcmVzc2lvbjogdG9rZW5zLmpvaW4oJysnKSxcclxuICAgIHRva2VuczogcmF3VG9rZW5zXHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybU5vZGUgKGVsLCBvcHRpb25zKSB7XHJcbiAgdmFyIHdhcm4gPSBvcHRpb25zLndhcm4gfHwgYmFzZVdhcm47XHJcbiAgdmFyIHN0YXRpY0NsYXNzID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ2NsYXNzJyk7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RhdGljQ2xhc3MpIHtcclxuICAgIHZhciByZXMgPSBwYXJzZVRleHQoc3RhdGljQ2xhc3MsIG9wdGlvbnMuZGVsaW1pdGVycyk7XHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIHdhcm4oXHJcbiAgICAgICAgXCJjbGFzcz1cXFwiXCIgKyBzdGF0aWNDbGFzcyArIFwiXFxcIjogXCIgK1xyXG4gICAgICAgICdJbnRlcnBvbGF0aW9uIGluc2lkZSBhdHRyaWJ1dGVzIGhhcyBiZWVuIHJlbW92ZWQuICcgK1xyXG4gICAgICAgICdVc2Ugdi1iaW5kIG9yIHRoZSBjb2xvbiBzaG9ydGhhbmQgaW5zdGVhZC4gRm9yIGV4YW1wbGUsICcgK1xyXG4gICAgICAgICdpbnN0ZWFkIG9mIDxkaXYgY2xhc3M9XCJ7eyB2YWwgfX1cIj4sIHVzZSA8ZGl2IDpjbGFzcz1cInZhbFwiPi4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChzdGF0aWNDbGFzcykge1xyXG4gICAgZWwuc3RhdGljQ2xhc3MgPSBKU09OLnN0cmluZ2lmeShzdGF0aWNDbGFzcyk7XHJcbiAgfVxyXG4gIHZhciBjbGFzc0JpbmRpbmcgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ2NsYXNzJywgZmFsc2UgLyogZ2V0U3RhdGljICovKTtcclxuICBpZiAoY2xhc3NCaW5kaW5nKSB7XHJcbiAgICBlbC5jbGFzc0JpbmRpbmcgPSBjbGFzc0JpbmRpbmc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5EYXRhIChlbCkge1xyXG4gIHZhciBkYXRhID0gJyc7XHJcbiAgaWYgKGVsLnN0YXRpY0NsYXNzKSB7XHJcbiAgICBkYXRhICs9IFwic3RhdGljQ2xhc3M6XCIgKyAoZWwuc3RhdGljQ2xhc3MpICsgXCIsXCI7XHJcbiAgfVxyXG4gIGlmIChlbC5jbGFzc0JpbmRpbmcpIHtcclxuICAgIGRhdGEgKz0gXCJjbGFzczpcIiArIChlbC5jbGFzc0JpbmRpbmcpICsgXCIsXCI7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbnZhciBrbGFzcyQxID0ge1xyXG4gIHN0YXRpY0tleXM6IFsnc3RhdGljQ2xhc3MnXSxcclxuICB0cmFuc2Zvcm1Ob2RlOiB0cmFuc2Zvcm1Ob2RlLFxyXG4gIGdlbkRhdGE6IGdlbkRhdGFcclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ob2RlJDEgKGVsLCBvcHRpb25zKSB7XHJcbiAgdmFyIHdhcm4gPSBvcHRpb25zLndhcm4gfHwgYmFzZVdhcm47XHJcbiAgdmFyIHN0YXRpY1N0eWxlID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3N0eWxlJyk7XHJcbiAgaWYgKHN0YXRpY1N0eWxlKSB7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIHZhciByZXMgPSBwYXJzZVRleHQoc3RhdGljU3R5bGUsIG9wdGlvbnMuZGVsaW1pdGVycyk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgXCJzdHlsZT1cXFwiXCIgKyBzdGF0aWNTdHlsZSArIFwiXFxcIjogXCIgK1xyXG4gICAgICAgICAgJ0ludGVycG9sYXRpb24gaW5zaWRlIGF0dHJpYnV0ZXMgaGFzIGJlZW4gcmVtb3ZlZC4gJyArXHJcbiAgICAgICAgICAnVXNlIHYtYmluZCBvciB0aGUgY29sb24gc2hvcnRoYW5kIGluc3RlYWQuIEZvciBleGFtcGxlLCAnICtcclxuICAgICAgICAgICdpbnN0ZWFkIG9mIDxkaXYgc3R5bGU9XCJ7eyB2YWwgfX1cIj4sIHVzZSA8ZGl2IDpzdHlsZT1cInZhbFwiPi4nXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWwuc3RhdGljU3R5bGUgPSBKU09OLnN0cmluZ2lmeShwYXJzZVN0eWxlVGV4dChzdGF0aWNTdHlsZSkpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHN0eWxlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAnc3R5bGUnLCBmYWxzZSAvKiBnZXRTdGF0aWMgKi8pO1xyXG4gIGlmIChzdHlsZUJpbmRpbmcpIHtcclxuICAgIGVsLnN0eWxlQmluZGluZyA9IHN0eWxlQmluZGluZztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkRhdGEkMSAoZWwpIHtcclxuICB2YXIgZGF0YSA9ICcnO1xyXG4gIGlmIChlbC5zdGF0aWNTdHlsZSkge1xyXG4gICAgZGF0YSArPSBcInN0YXRpY1N0eWxlOlwiICsgKGVsLnN0YXRpY1N0eWxlKSArIFwiLFwiO1xyXG4gIH1cclxuICBpZiAoZWwuc3R5bGVCaW5kaW5nKSB7XHJcbiAgICBkYXRhICs9IFwic3R5bGU6KFwiICsgKGVsLnN0eWxlQmluZGluZykgKyBcIiksXCI7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbnZhciBzdHlsZSQxID0ge1xyXG4gIHN0YXRpY0tleXM6IFsnc3RhdGljU3R5bGUnXSxcclxuICB0cmFuc2Zvcm1Ob2RlOiB0cmFuc2Zvcm1Ob2RlJDEsXHJcbiAgZ2VuRGF0YTogZ2VuRGF0YSQxXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIGRlY29kZXI7XHJcblxyXG52YXIgaGUgPSB7XHJcbiAgZGVjb2RlOiBmdW5jdGlvbiBkZWNvZGUgKGh0bWwpIHtcclxuICAgIGRlY29kZXIgPSBkZWNvZGVyIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVjb2Rlci5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuIGRlY29kZXIudGV4dENvbnRlbnRcclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIGlzVW5hcnlUYWcgPSBtYWtlTWFwKFxyXG4gICdhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbiwnICtcclxuICAnbGluayxtZXRhLHBhcmFtLHNvdXJjZSx0cmFjayx3YnInXHJcbik7XHJcblxyXG4vLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cclxuLy8gKGFuZCB3aGljaCBjbG9zZSB0aGVtc2VsdmVzKVxyXG52YXIgY2FuQmVMZWZ0T3BlblRhZyA9IG1ha2VNYXAoXHJcbiAgJ2NvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0cixzb3VyY2UnXHJcbik7XHJcblxyXG4vLyBIVE1MNSB0YWdzIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbCNlbGVtZW50cy0zXHJcbi8vIFBocmFzaW5nIENvbnRlbnQgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjcGhyYXNpbmctY29udGVudFxyXG52YXIgaXNOb25QaHJhc2luZ1RhZyA9IG1ha2VNYXAoXHJcbiAgJ2FkZHJlc3MsYXJ0aWNsZSxhc2lkZSxiYXNlLGJsb2NrcXVvdGUsYm9keSxjYXB0aW9uLGNvbCxjb2xncm91cCxkZCwnICtcclxuICAnZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLCcgK1xyXG4gICdoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSwnICtcclxuICAnb3B0Z3JvdXAsb3B0aW9uLHBhcmFtLHJwLHJ0LHNvdXJjZSxzdHlsZSxzdW1tYXJ5LHRib2R5LHRkLHRmb290LHRoLHRoZWFkLCcgK1xyXG4gICd0aXRsZSx0cix0cmFjaydcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBOb3QgdHlwZS1jaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBpdCdzIG1vc3RseSB2ZW5kb3IgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogSFRNTCBQYXJzZXIgQnkgSm9obiBSZXNpZyAoZWpvaG4ub3JnKVxyXG4gKiBNb2RpZmllZCBieSBKdXJpeSBcImthbmdheFwiIFpheXRzZXZcclxuICogT3JpZ2luYWwgY29kZSBieSBFcmlrIEFydmlkc3NvbiwgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxyXG4gKiBodHRwOi8vZXJpay5lYWUubmV0L3NpbXBsZWh0bWxwYXJzZXIvc2ltcGxlaHRtbHBhcnNlci5qc1xyXG4gKi9cclxuXHJcbi8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xyXG52YXIgYXR0cmlidXRlID0gL15cXHMqKFteXFxzXCInPD5cXC89XSspKD86XFxzKig9KVxccyooPzpcIihbXlwiXSopXCIrfCcoW14nXSopJyt8KFteXFxzXCInPTw+YF0rKSkpPy87XHJcbi8vIGNvdWxkIHVzZSBodHRwczovL3d3dy53My5vcmcvVFIvMTk5OS9SRUMteG1sLW5hbWVzLTE5OTkwMTE0LyNOVC1RTmFtZVxyXG4vLyBidXQgZm9yIFZ1ZSB0ZW1wbGF0ZXMgd2UgY2FuIGVuZm9yY2UgYSBzaW1wbGUgY2hhcnNldFxyXG52YXIgbmNuYW1lID0gJ1thLXpBLVpfXVtcXFxcd1xcXFwtXFxcXC5dKic7XHJcbnZhciBxbmFtZUNhcHR1cmUgPSBcIigoPzpcIiArIG5jbmFtZSArIFwiXFxcXDopP1wiICsgbmNuYW1lICsgXCIpXCI7XHJcbnZhciBzdGFydFRhZ09wZW4gPSBuZXcgUmVnRXhwKChcIl48XCIgKyBxbmFtZUNhcHR1cmUpKTtcclxudmFyIHN0YXJ0VGFnQ2xvc2UgPSAvXlxccyooXFwvPyk+LztcclxudmFyIGVuZFRhZyA9IG5ldyBSZWdFeHAoKFwiXjxcXFxcL1wiICsgcW5hbWVDYXB0dXJlICsgXCJbXj5dKj5cIikpO1xyXG52YXIgZG9jdHlwZSA9IC9ePCFET0NUWVBFIFtePl0rPi9pO1xyXG4vLyAjNzI5ODogZXNjYXBlIC0gdG8gYXZvaWQgYmVpbmcgcGFzZWQgYXMgSFRNTCBjb21tZW50IHdoZW4gaW5saW5lZCBpbiBwYWdlXHJcbnZhciBjb21tZW50ID0gL148IVxcLS0vO1xyXG52YXIgY29uZGl0aW9uYWxDb21tZW50ID0gL148IVxcWy87XHJcblxyXG52YXIgSVNfUkVHRVhfQ0FQVFVSSU5HX0JST0tFTiA9IGZhbHNlO1xyXG4neCcucmVwbGFjZSgveCguKT8vZywgZnVuY3Rpb24gKG0sIGcpIHtcclxuICBJU19SRUdFWF9DQVBUVVJJTkdfQlJPS0VOID0gZyA9PT0gJyc7XHJcbn0pO1xyXG5cclxuLy8gU3BlY2lhbCBFbGVtZW50cyAoY2FuIGNvbnRhaW4gYW55dGhpbmcpXHJcbnZhciBpc1BsYWluVGV4dEVsZW1lbnQgPSBtYWtlTWFwKCdzY3JpcHQsc3R5bGUsdGV4dGFyZWEnLCB0cnVlKTtcclxudmFyIHJlQ2FjaGUgPSB7fTtcclxuXHJcbnZhciBkZWNvZGluZ01hcCA9IHtcclxuICAnJmx0Oyc6ICc8JyxcclxuICAnJmd0Oyc6ICc+JyxcclxuICAnJnF1b3Q7JzogJ1wiJyxcclxuICAnJmFtcDsnOiAnJicsXHJcbiAgJyYjMTA7JzogJ1xcbicsXHJcbiAgJyYjOTsnOiAnXFx0J1xyXG59O1xyXG52YXIgZW5jb2RlZEF0dHIgPSAvJig/Omx0fGd0fHF1b3R8YW1wKTsvZztcclxudmFyIGVuY29kZWRBdHRyV2l0aE5ld0xpbmVzID0gLyYoPzpsdHxndHxxdW90fGFtcHwjMTB8IzkpOy9nO1xyXG5cclxuLy8gIzU5OTJcclxudmFyIGlzSWdub3JlTmV3bGluZVRhZyA9IG1ha2VNYXAoJ3ByZSx0ZXh0YXJlYScsIHRydWUpO1xyXG52YXIgc2hvdWxkSWdub3JlRmlyc3ROZXdsaW5lID0gZnVuY3Rpb24gKHRhZywgaHRtbCkgeyByZXR1cm4gdGFnICYmIGlzSWdub3JlTmV3bGluZVRhZyh0YWcpICYmIGh0bWxbMF0gPT09ICdcXG4nOyB9O1xyXG5cclxuZnVuY3Rpb24gZGVjb2RlQXR0ciAodmFsdWUsIHNob3VsZERlY29kZU5ld2xpbmVzKSB7XHJcbiAgdmFyIHJlID0gc2hvdWxkRGVjb2RlTmV3bGluZXMgPyBlbmNvZGVkQXR0cldpdGhOZXdMaW5lcyA6IGVuY29kZWRBdHRyO1xyXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobWF0Y2gpIHsgcmV0dXJuIGRlY29kaW5nTWFwW21hdGNoXTsgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VIVE1MIChodG1sLCBvcHRpb25zKSB7XHJcbiAgdmFyIHN0YWNrID0gW107XHJcbiAgdmFyIGV4cGVjdEhUTUwgPSBvcHRpb25zLmV4cGVjdEhUTUw7XHJcbiAgdmFyIGlzVW5hcnlUYWckJDEgPSBvcHRpb25zLmlzVW5hcnlUYWcgfHwgbm87XHJcbiAgdmFyIGNhbkJlTGVmdE9wZW5UYWckJDEgPSBvcHRpb25zLmNhbkJlTGVmdE9wZW5UYWcgfHwgbm87XHJcbiAgdmFyIGluZGV4ID0gMDtcclxuICB2YXIgbGFzdCwgbGFzdFRhZztcclxuICB3aGlsZSAoaHRtbCkge1xyXG4gICAgbGFzdCA9IGh0bWw7XHJcbiAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGluIGEgcGxhaW50ZXh0IGNvbnRlbnQgZWxlbWVudCBsaWtlIHNjcmlwdC9zdHlsZVxyXG4gICAgaWYgKCFsYXN0VGFnIHx8ICFpc1BsYWluVGV4dEVsZW1lbnQobGFzdFRhZykpIHtcclxuICAgICAgdmFyIHRleHRFbmQgPSBodG1sLmluZGV4T2YoJzwnKTtcclxuICAgICAgaWYgKHRleHRFbmQgPT09IDApIHtcclxuICAgICAgICAvLyBDb21tZW50OlxyXG4gICAgICAgIGlmIChjb21tZW50LnRlc3QoaHRtbCkpIHtcclxuICAgICAgICAgIHZhciBjb21tZW50RW5kID0gaHRtbC5pbmRleE9mKCctLT4nKTtcclxuXHJcbiAgICAgICAgICBpZiAoY29tbWVudEVuZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3VsZEtlZXBDb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy5jb21tZW50KGh0bWwuc3Vic3RyaW5nKDQsIGNvbW1lbnRFbmQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZHZhbmNlKGNvbW1lbnRFbmQgKyAzKTtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29uZGl0aW9uYWxfY29tbWVudCNEb3dubGV2ZWwtcmV2ZWFsZWRfY29uZGl0aW9uYWxfY29tbWVudFxyXG4gICAgICAgIGlmIChjb25kaXRpb25hbENvbW1lbnQudGVzdChodG1sKSkge1xyXG4gICAgICAgICAgdmFyIGNvbmRpdGlvbmFsRW5kID0gaHRtbC5pbmRleE9mKCddPicpO1xyXG5cclxuICAgICAgICAgIGlmIChjb25kaXRpb25hbEVuZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGFkdmFuY2UoY29uZGl0aW9uYWxFbmQgKyAyKTtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvY3R5cGU6XHJcbiAgICAgICAgdmFyIGRvY3R5cGVNYXRjaCA9IGh0bWwubWF0Y2goZG9jdHlwZSk7XHJcbiAgICAgICAgaWYgKGRvY3R5cGVNYXRjaCkge1xyXG4gICAgICAgICAgYWR2YW5jZShkb2N0eXBlTWF0Y2hbMF0ubGVuZ3RoKTtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbmQgdGFnOlxyXG4gICAgICAgIHZhciBlbmRUYWdNYXRjaCA9IGh0bWwubWF0Y2goZW5kVGFnKTtcclxuICAgICAgICBpZiAoZW5kVGFnTWF0Y2gpIHtcclxuICAgICAgICAgIHZhciBjdXJJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgYWR2YW5jZShlbmRUYWdNYXRjaFswXS5sZW5ndGgpO1xyXG4gICAgICAgICAgcGFyc2VFbmRUYWcoZW5kVGFnTWF0Y2hbMV0sIGN1ckluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RhcnQgdGFnOlxyXG4gICAgICAgIHZhciBzdGFydFRhZ01hdGNoID0gcGFyc2VTdGFydFRhZygpO1xyXG4gICAgICAgIGlmIChzdGFydFRhZ01hdGNoKSB7XHJcbiAgICAgICAgICBoYW5kbGVTdGFydFRhZyhzdGFydFRhZ01hdGNoKTtcclxuICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVGaXJzdE5ld2xpbmUobGFzdFRhZywgaHRtbCkpIHtcclxuICAgICAgICAgICAgYWR2YW5jZSgxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgdGV4dCA9ICh2b2lkIDApLCByZXN0ID0gKHZvaWQgMCksIG5leHQgPSAodm9pZCAwKTtcclxuICAgICAgaWYgKHRleHRFbmQgPj0gMCkge1xyXG4gICAgICAgIHJlc3QgPSBodG1sLnNsaWNlKHRleHRFbmQpO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICFlbmRUYWcudGVzdChyZXN0KSAmJlxyXG4gICAgICAgICAgIXN0YXJ0VGFnT3Blbi50ZXN0KHJlc3QpICYmXHJcbiAgICAgICAgICAhY29tbWVudC50ZXN0KHJlc3QpICYmXHJcbiAgICAgICAgICAhY29uZGl0aW9uYWxDb21tZW50LnRlc3QocmVzdClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIDwgaW4gcGxhaW4gdGV4dCwgYmUgZm9yZ2l2aW5nIGFuZCB0cmVhdCBpdCBhcyB0ZXh0XHJcbiAgICAgICAgICBuZXh0ID0gcmVzdC5pbmRleE9mKCc8JywgMSk7XHJcbiAgICAgICAgICBpZiAobmV4dCA8IDApIHsgYnJlYWsgfVxyXG4gICAgICAgICAgdGV4dEVuZCArPSBuZXh0O1xyXG4gICAgICAgICAgcmVzdCA9IGh0bWwuc2xpY2UodGV4dEVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHQgPSBodG1sLnN1YnN0cmluZygwLCB0ZXh0RW5kKTtcclxuICAgICAgICBhZHZhbmNlKHRleHRFbmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGV4dEVuZCA8IDApIHtcclxuICAgICAgICB0ZXh0ID0gaHRtbDtcclxuICAgICAgICBodG1sID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmNoYXJzICYmIHRleHQpIHtcclxuICAgICAgICBvcHRpb25zLmNoYXJzKHRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZW5kVGFnTGVuZ3RoID0gMDtcclxuICAgICAgdmFyIHN0YWNrZWRUYWcgPSBsYXN0VGFnLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHZhciByZVN0YWNrZWRUYWcgPSByZUNhY2hlW3N0YWNrZWRUYWddIHx8IChyZUNhY2hlW3N0YWNrZWRUYWddID0gbmV3IFJlZ0V4cCgnKFtcXFxcc1xcXFxTXSo/KSg8LycgKyBzdGFja2VkVGFnICsgJ1tePl0qPiknLCAnaScpKTtcclxuICAgICAgdmFyIHJlc3QkMSA9IGh0bWwucmVwbGFjZShyZVN0YWNrZWRUYWcsIGZ1bmN0aW9uIChhbGwsIHRleHQsIGVuZFRhZykge1xyXG4gICAgICAgIGVuZFRhZ0xlbmd0aCA9IGVuZFRhZy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKCFpc1BsYWluVGV4dEVsZW1lbnQoc3RhY2tlZFRhZykgJiYgc3RhY2tlZFRhZyAhPT0gJ25vc2NyaXB0Jykge1xyXG4gICAgICAgICAgdGV4dCA9IHRleHRcclxuICAgICAgICAgICAgLnJlcGxhY2UoLzwhXFwtLShbXFxzXFxTXSo/KS0tPi9nLCAnJDEnKSAvLyAjNzI5OFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvPCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLCAnJDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZElnbm9yZUZpcnN0TmV3bGluZShzdGFja2VkVGFnLCB0ZXh0KSkge1xyXG4gICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmNoYXJzKSB7XHJcbiAgICAgICAgICBvcHRpb25zLmNoYXJzKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfSk7XHJcbiAgICAgIGluZGV4ICs9IGh0bWwubGVuZ3RoIC0gcmVzdCQxLmxlbmd0aDtcclxuICAgICAgaHRtbCA9IHJlc3QkMTtcclxuICAgICAgcGFyc2VFbmRUYWcoc3RhY2tlZFRhZywgaW5kZXggLSBlbmRUYWdMZW5ndGgsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaHRtbCA9PT0gbGFzdCkge1xyXG4gICAgICBvcHRpb25zLmNoYXJzICYmIG9wdGlvbnMuY2hhcnMoaHRtbCk7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzdGFjay5sZW5ndGggJiYgb3B0aW9ucy53YXJuKSB7XHJcbiAgICAgICAgb3B0aW9ucy53YXJuKChcIk1hbC1mb3JtYXR0ZWQgdGFnIGF0IGVuZCBvZiB0ZW1wbGF0ZTogXFxcIlwiICsgaHRtbCArIFwiXFxcIlwiKSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENsZWFuIHVwIGFueSByZW1haW5pbmcgdGFnc1xyXG4gIHBhcnNlRW5kVGFnKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkdmFuY2UgKG4pIHtcclxuICAgIGluZGV4ICs9IG47XHJcbiAgICBodG1sID0gaHRtbC5zdWJzdHJpbmcobik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZVN0YXJ0VGFnICgpIHtcclxuICAgIHZhciBzdGFydCA9IGh0bWwubWF0Y2goc3RhcnRUYWdPcGVuKTtcclxuICAgIGlmIChzdGFydCkge1xyXG4gICAgICB2YXIgbWF0Y2ggPSB7XHJcbiAgICAgICAgdGFnTmFtZTogc3RhcnRbMV0sXHJcbiAgICAgICAgYXR0cnM6IFtdLFxyXG4gICAgICAgIHN0YXJ0OiBpbmRleFxyXG4gICAgICB9O1xyXG4gICAgICBhZHZhbmNlKHN0YXJ0WzBdLmxlbmd0aCk7XHJcbiAgICAgIHZhciBlbmQsIGF0dHI7XHJcbiAgICAgIHdoaWxlICghKGVuZCA9IGh0bWwubWF0Y2goc3RhcnRUYWdDbG9zZSkpICYmIChhdHRyID0gaHRtbC5tYXRjaChhdHRyaWJ1dGUpKSkge1xyXG4gICAgICAgIGFkdmFuY2UoYXR0clswXS5sZW5ndGgpO1xyXG4gICAgICAgIG1hdGNoLmF0dHJzLnB1c2goYXR0cik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVuZCkge1xyXG4gICAgICAgIG1hdGNoLnVuYXJ5U2xhc2ggPSBlbmRbMV07XHJcbiAgICAgICAgYWR2YW5jZShlbmRbMF0ubGVuZ3RoKTtcclxuICAgICAgICBtYXRjaC5lbmQgPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gbWF0Y2hcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3RhcnRUYWcgKG1hdGNoKSB7XHJcbiAgICB2YXIgdGFnTmFtZSA9IG1hdGNoLnRhZ05hbWU7XHJcbiAgICB2YXIgdW5hcnlTbGFzaCA9IG1hdGNoLnVuYXJ5U2xhc2g7XHJcblxyXG4gICAgaWYgKGV4cGVjdEhUTUwpIHtcclxuICAgICAgaWYgKGxhc3RUYWcgPT09ICdwJyAmJiBpc05vblBocmFzaW5nVGFnKHRhZ05hbWUpKSB7XHJcbiAgICAgICAgcGFyc2VFbmRUYWcobGFzdFRhZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNhbkJlTGVmdE9wZW5UYWckJDEodGFnTmFtZSkgJiYgbGFzdFRhZyA9PT0gdGFnTmFtZSkge1xyXG4gICAgICAgIHBhcnNlRW5kVGFnKHRhZ05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHVuYXJ5ID0gaXNVbmFyeVRhZyQkMSh0YWdOYW1lKSB8fCAhIXVuYXJ5U2xhc2g7XHJcblxyXG4gICAgdmFyIGwgPSBtYXRjaC5hdHRycy5sZW5ndGg7XHJcbiAgICB2YXIgYXR0cnMgPSBuZXcgQXJyYXkobCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB2YXIgYXJncyA9IG1hdGNoLmF0dHJzW2ldO1xyXG4gICAgICAvLyBoYWNraXNoIHdvcmsgYXJvdW5kIEZGIGJ1ZyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zNjk3NzhcclxuICAgICAgaWYgKElTX1JFR0VYX0NBUFRVUklOR19CUk9LRU4gJiYgYXJnc1swXS5pbmRleE9mKCdcIlwiJykgPT09IC0xKSB7XHJcbiAgICAgICAgaWYgKGFyZ3NbM10gPT09ICcnKSB7IGRlbGV0ZSBhcmdzWzNdOyB9XHJcbiAgICAgICAgaWYgKGFyZ3NbNF0gPT09ICcnKSB7IGRlbGV0ZSBhcmdzWzRdOyB9XHJcbiAgICAgICAgaWYgKGFyZ3NbNV0gPT09ICcnKSB7IGRlbGV0ZSBhcmdzWzVdOyB9XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHZhbHVlID0gYXJnc1szXSB8fCBhcmdzWzRdIHx8IGFyZ3NbNV0gfHwgJyc7XHJcbiAgICAgIHZhciBzaG91bGREZWNvZGVOZXdsaW5lcyA9IHRhZ05hbWUgPT09ICdhJyAmJiBhcmdzWzFdID09PSAnaHJlZidcclxuICAgICAgICA/IG9wdGlvbnMuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmXHJcbiAgICAgICAgOiBvcHRpb25zLnNob3VsZERlY29kZU5ld2xpbmVzO1xyXG4gICAgICBhdHRyc1tpXSA9IHtcclxuICAgICAgICBuYW1lOiBhcmdzWzFdLFxyXG4gICAgICAgIHZhbHVlOiBkZWNvZGVBdHRyKHZhbHVlLCBzaG91bGREZWNvZGVOZXdsaW5lcylcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVuYXJ5KSB7XHJcbiAgICAgIHN0YWNrLnB1c2goeyB0YWc6IHRhZ05hbWUsIGxvd2VyQ2FzZWRUYWc6IHRhZ05hbWUudG9Mb3dlckNhc2UoKSwgYXR0cnM6IGF0dHJzIH0pO1xyXG4gICAgICBsYXN0VGFnID0gdGFnTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdGFydCkge1xyXG4gICAgICBvcHRpb25zLnN0YXJ0KHRhZ05hbWUsIGF0dHJzLCB1bmFyeSwgbWF0Y2guc3RhcnQsIG1hdGNoLmVuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZUVuZFRhZyAodGFnTmFtZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIHBvcywgbG93ZXJDYXNlZFRhZ05hbWU7XHJcbiAgICBpZiAoc3RhcnQgPT0gbnVsbCkgeyBzdGFydCA9IGluZGV4OyB9XHJcbiAgICBpZiAoZW5kID09IG51bGwpIHsgZW5kID0gaW5kZXg7IH1cclxuXHJcbiAgICBpZiAodGFnTmFtZSkge1xyXG4gICAgICBsb3dlckNhc2VkVGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IG9wZW5lZCB0YWcgb2YgdGhlIHNhbWUgdHlwZVxyXG4gICAgaWYgKHRhZ05hbWUpIHtcclxuICAgICAgZm9yIChwb3MgPSBzdGFjay5sZW5ndGggLSAxOyBwb3MgPj0gMDsgcG9zLS0pIHtcclxuICAgICAgICBpZiAoc3RhY2tbcG9zXS5sb3dlckNhc2VkVGFnID09PSBsb3dlckNhc2VkVGFnTmFtZSkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXHJcbiAgICAgIHBvcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvcyA+PSAwKSB7XHJcbiAgICAgIC8vIENsb3NlIGFsbCB0aGUgb3BlbiBlbGVtZW50cywgdXAgdGhlIHN0YWNrXHJcbiAgICAgIGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IHBvczsgaS0tKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcclxuICAgICAgICAgIChpID4gcG9zIHx8ICF0YWdOYW1lKSAmJlxyXG4gICAgICAgICAgb3B0aW9ucy53YXJuXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvcHRpb25zLndhcm4oXHJcbiAgICAgICAgICAgIChcInRhZyA8XCIgKyAoc3RhY2tbaV0udGFnKSArIFwiPiBoYXMgbm8gbWF0Y2hpbmcgZW5kIHRhZy5cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xyXG4gICAgICAgICAgb3B0aW9ucy5lbmQoc3RhY2tbaV0udGFnLCBzdGFydCwgZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xyXG4gICAgICBzdGFjay5sZW5ndGggPSBwb3M7XHJcbiAgICAgIGxhc3RUYWcgPSBwb3MgJiYgc3RhY2tbcG9zIC0gMV0udGFnO1xyXG4gICAgfSBlbHNlIGlmIChsb3dlckNhc2VkVGFnTmFtZSA9PT0gJ2JyJykge1xyXG4gICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xyXG4gICAgICAgIG9wdGlvbnMuc3RhcnQodGFnTmFtZSwgW10sIHRydWUsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGxvd2VyQ2FzZWRUYWdOYW1lID09PSAncCcpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcclxuICAgICAgICBvcHRpb25zLnN0YXJ0KHRhZ05hbWUsIFtdLCBmYWxzZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XHJcbiAgICAgICAgb3B0aW9ucy5lbmQodGFnTmFtZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIG9uUkUgPSAvXkB8XnYtb246LztcclxudmFyIGRpclJFID0gL152LXxeQHxeOi87XHJcbnZhciBmb3JBbGlhc1JFID0gLyhbXl0qPylcXHMrKD86aW58b2YpXFxzKyhbXl0qKS87XHJcbnZhciBmb3JJdGVyYXRvclJFID0gLywoW14sXFx9XFxdXSopKD86LChbXixcXH1cXF1dKikpPyQvO1xyXG52YXIgc3RyaXBQYXJlbnNSRSA9IC9eXFwofFxcKSQvZztcclxuXHJcbnZhciBhcmdSRSA9IC86KC4qKSQvO1xyXG52YXIgYmluZFJFID0gL146fF52LWJpbmQ6LztcclxudmFyIG1vZGlmaWVyUkUgPSAvXFwuW14uXSsvZztcclxuXHJcbnZhciBkZWNvZGVIVE1MQ2FjaGVkID0gY2FjaGVkKGhlLmRlY29kZSk7XHJcblxyXG4vLyBjb25maWd1cmFibGUgc3RhdGVcclxudmFyIHdhcm4kMjtcclxudmFyIGRlbGltaXRlcnM7XHJcbnZhciB0cmFuc2Zvcm1zO1xyXG52YXIgcHJlVHJhbnNmb3JtcztcclxudmFyIHBvc3RUcmFuc2Zvcm1zO1xyXG52YXIgcGxhdGZvcm1Jc1ByZVRhZztcclxudmFyIHBsYXRmb3JtTXVzdFVzZVByb3A7XHJcbnZhciBwbGF0Zm9ybUdldFRhZ05hbWVzcGFjZTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQVNURWxlbWVudCAoXHJcbiAgdGFnLFxyXG4gIGF0dHJzLFxyXG4gIHBhcmVudFxyXG4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogMSxcclxuICAgIHRhZzogdGFnLFxyXG4gICAgYXR0cnNMaXN0OiBhdHRycyxcclxuICAgIGF0dHJzTWFwOiBtYWtlQXR0cnNNYXAoYXR0cnMpLFxyXG4gICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICBjaGlsZHJlbjogW11cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IEhUTUwgc3RyaW5nIHRvIEFTVC5cclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlIChcclxuICB0ZW1wbGF0ZSxcclxuICBvcHRpb25zXHJcbikge1xyXG4gIHdhcm4kMiA9IG9wdGlvbnMud2FybiB8fCBiYXNlV2FybjtcclxuXHJcbiAgcGxhdGZvcm1Jc1ByZVRhZyA9IG9wdGlvbnMuaXNQcmVUYWcgfHwgbm87XHJcbiAgcGxhdGZvcm1NdXN0VXNlUHJvcCA9IG9wdGlvbnMubXVzdFVzZVByb3AgfHwgbm87XHJcbiAgcGxhdGZvcm1HZXRUYWdOYW1lc3BhY2UgPSBvcHRpb25zLmdldFRhZ05hbWVzcGFjZSB8fCBubztcclxuXHJcbiAgdHJhbnNmb3JtcyA9IHBsdWNrTW9kdWxlRnVuY3Rpb24ob3B0aW9ucy5tb2R1bGVzLCAndHJhbnNmb3JtTm9kZScpO1xyXG4gIHByZVRyYW5zZm9ybXMgPSBwbHVja01vZHVsZUZ1bmN0aW9uKG9wdGlvbnMubW9kdWxlcywgJ3ByZVRyYW5zZm9ybU5vZGUnKTtcclxuICBwb3N0VHJhbnNmb3JtcyA9IHBsdWNrTW9kdWxlRnVuY3Rpb24ob3B0aW9ucy5tb2R1bGVzLCAncG9zdFRyYW5zZm9ybU5vZGUnKTtcclxuXHJcbiAgZGVsaW1pdGVycyA9IG9wdGlvbnMuZGVsaW1pdGVycztcclxuXHJcbiAgdmFyIHN0YWNrID0gW107XHJcbiAgdmFyIHByZXNlcnZlV2hpdGVzcGFjZSA9IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlICE9PSBmYWxzZTtcclxuICB2YXIgcm9vdDtcclxuICB2YXIgY3VycmVudFBhcmVudDtcclxuICB2YXIgaW5WUHJlID0gZmFsc2U7XHJcbiAgdmFyIGluUHJlID0gZmFsc2U7XHJcbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiB3YXJuT25jZSAobXNnKSB7XHJcbiAgICBpZiAoIXdhcm5lZCkge1xyXG4gICAgICB3YXJuZWQgPSB0cnVlO1xyXG4gICAgICB3YXJuJDIobXNnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlRWxlbWVudCAoZWxlbWVudCkge1xyXG4gICAgLy8gY2hlY2sgcHJlIHN0YXRlXHJcbiAgICBpZiAoZWxlbWVudC5wcmUpIHtcclxuICAgICAgaW5WUHJlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocGxhdGZvcm1Jc1ByZVRhZyhlbGVtZW50LnRhZykpIHtcclxuICAgICAgaW5QcmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIGFwcGx5IHBvc3QtdHJhbnNmb3Jtc1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3N0VHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBwb3N0VHJhbnNmb3Jtc1tpXShlbGVtZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhcnNlSFRNTCh0ZW1wbGF0ZSwge1xyXG4gICAgd2Fybjogd2FybiQyLFxyXG4gICAgZXhwZWN0SFRNTDogb3B0aW9ucy5leHBlY3RIVE1MLFxyXG4gICAgaXNVbmFyeVRhZzogb3B0aW9ucy5pc1VuYXJ5VGFnLFxyXG4gICAgY2FuQmVMZWZ0T3BlblRhZzogb3B0aW9ucy5jYW5CZUxlZnRPcGVuVGFnLFxyXG4gICAgc2hvdWxkRGVjb2RlTmV3bGluZXM6IG9wdGlvbnMuc2hvdWxkRGVjb2RlTmV3bGluZXMsXHJcbiAgICBzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6IG9wdGlvbnMuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmLFxyXG4gICAgc2hvdWxkS2VlcENvbW1lbnQ6IG9wdGlvbnMuY29tbWVudHMsXHJcbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQgKHRhZywgYXR0cnMsIHVuYXJ5KSB7XHJcbiAgICAgIC8vIGNoZWNrIG5hbWVzcGFjZS5cclxuICAgICAgLy8gaW5oZXJpdCBwYXJlbnQgbnMgaWYgdGhlcmUgaXMgb25lXHJcbiAgICAgIHZhciBucyA9IChjdXJyZW50UGFyZW50ICYmIGN1cnJlbnRQYXJlbnQubnMpIHx8IHBsYXRmb3JtR2V0VGFnTmFtZXNwYWNlKHRhZyk7XHJcblxyXG4gICAgICAvLyBoYW5kbGUgSUUgc3ZnIGJ1Z1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgaWYgKGlzSUUgJiYgbnMgPT09ICdzdmcnKSB7XHJcbiAgICAgICAgYXR0cnMgPSBndWFyZElFU1ZHQnVnKGF0dHJzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdGVBU1RFbGVtZW50KHRhZywgYXR0cnMsIGN1cnJlbnRQYXJlbnQpO1xyXG4gICAgICBpZiAobnMpIHtcclxuICAgICAgICBlbGVtZW50Lm5zID0gbnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc0ZvcmJpZGRlblRhZyhlbGVtZW50KSAmJiAhaXNTZXJ2ZXJSZW5kZXJpbmcoKSkge1xyXG4gICAgICAgIGVsZW1lbnQuZm9yYmlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4kMihcclxuICAgICAgICAgICdUZW1wbGF0ZXMgc2hvdWxkIG9ubHkgYmUgcmVzcG9uc2libGUgZm9yIG1hcHBpbmcgdGhlIHN0YXRlIHRvIHRoZSAnICtcclxuICAgICAgICAgICdVSS4gQXZvaWQgcGxhY2luZyB0YWdzIHdpdGggc2lkZS1lZmZlY3RzIGluIHlvdXIgdGVtcGxhdGVzLCBzdWNoIGFzICcgK1xyXG4gICAgICAgICAgXCI8XCIgKyB0YWcgKyBcIj5cIiArICcsIGFzIHRoZXkgd2lsbCBub3QgYmUgcGFyc2VkLidcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBwcmUtdHJhbnNmb3Jtc1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZVRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlbGVtZW50ID0gcHJlVHJhbnNmb3Jtc1tpXShlbGVtZW50LCBvcHRpb25zKSB8fCBlbGVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWluVlByZSkge1xyXG4gICAgICAgIHByb2Nlc3NQcmUoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucHJlKSB7XHJcbiAgICAgICAgICBpblZQcmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAocGxhdGZvcm1Jc1ByZVRhZyhlbGVtZW50LnRhZykpIHtcclxuICAgICAgICBpblByZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluVlByZSkge1xyXG4gICAgICAgIHByb2Nlc3NSYXdBdHRycyhlbGVtZW50KTtcclxuICAgICAgfSBlbHNlIGlmICghZWxlbWVudC5wcm9jZXNzZWQpIHtcclxuICAgICAgICAvLyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXNcclxuICAgICAgICBwcm9jZXNzRm9yKGVsZW1lbnQpO1xyXG4gICAgICAgIHByb2Nlc3NJZihlbGVtZW50KTtcclxuICAgICAgICBwcm9jZXNzT25jZShlbGVtZW50KTtcclxuICAgICAgICAvLyBlbGVtZW50LXNjb3BlIHN0dWZmXHJcbiAgICAgICAgcHJvY2Vzc0VsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrUm9vdENvbnN0cmFpbnRzIChlbCkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICBpZiAoZWwudGFnID09PSAnc2xvdCcgfHwgZWwudGFnID09PSAndGVtcGxhdGUnKSB7XHJcbiAgICAgICAgICAgIHdhcm5PbmNlKFxyXG4gICAgICAgICAgICAgIFwiQ2Fubm90IHVzZSA8XCIgKyAoZWwudGFnKSArIFwiPiBhcyBjb21wb25lbnQgcm9vdCBlbGVtZW50IGJlY2F1c2UgaXQgbWF5IFwiICtcclxuICAgICAgICAgICAgICAnY29udGFpbiBtdWx0aXBsZSBub2Rlcy4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZWwuYXR0cnNNYXAuaGFzT3duUHJvcGVydHkoJ3YtZm9yJykpIHtcclxuICAgICAgICAgICAgd2Fybk9uY2UoXHJcbiAgICAgICAgICAgICAgJ0Nhbm5vdCB1c2Ugdi1mb3Igb24gc3RhdGVmdWwgY29tcG9uZW50IHJvb3QgZWxlbWVudCBiZWNhdXNlICcgK1xyXG4gICAgICAgICAgICAgICdpdCByZW5kZXJzIG11bHRpcGxlIGVsZW1lbnRzLidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRyZWUgbWFuYWdlbWVudFxyXG4gICAgICBpZiAoIXJvb3QpIHtcclxuICAgICAgICByb290ID0gZWxlbWVudDtcclxuICAgICAgICBjaGVja1Jvb3RDb25zdHJhaW50cyhyb290KTtcclxuICAgICAgfSBlbHNlIGlmICghc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gYWxsb3cgcm9vdCBlbGVtZW50cyB3aXRoIHYtaWYsIHYtZWxzZS1pZiBhbmQgdi1lbHNlXHJcbiAgICAgICAgaWYgKHJvb3QuaWYgJiYgKGVsZW1lbnQuZWxzZWlmIHx8IGVsZW1lbnQuZWxzZSkpIHtcclxuICAgICAgICAgIGNoZWNrUm9vdENvbnN0cmFpbnRzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgYWRkSWZDb25kaXRpb24ocm9vdCwge1xyXG4gICAgICAgICAgICBleHA6IGVsZW1lbnQuZWxzZWlmLFxyXG4gICAgICAgICAgICBibG9jazogZWxlbWVudFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICB3YXJuT25jZShcclxuICAgICAgICAgICAgXCJDb21wb25lbnQgdGVtcGxhdGUgc2hvdWxkIGNvbnRhaW4gZXhhY3RseSBvbmUgcm9vdCBlbGVtZW50LiBcIiArXHJcbiAgICAgICAgICAgIFwiSWYgeW91IGFyZSB1c2luZyB2LWlmIG9uIG11bHRpcGxlIGVsZW1lbnRzLCBcIiArXHJcbiAgICAgICAgICAgIFwidXNlIHYtZWxzZS1pZiB0byBjaGFpbiB0aGVtIGluc3RlYWQuXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50UGFyZW50ICYmICFlbGVtZW50LmZvcmJpZGRlbikge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmVsc2VpZiB8fCBlbGVtZW50LmVsc2UpIHtcclxuICAgICAgICAgIHByb2Nlc3NJZkNvbmRpdGlvbnMoZWxlbWVudCwgY3VycmVudFBhcmVudCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnNsb3RTY29wZSkgeyAvLyBzY29wZWQgc2xvdFxyXG4gICAgICAgICAgY3VycmVudFBhcmVudC5wbGFpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgdmFyIG5hbWUgPSBlbGVtZW50LnNsb3RUYXJnZXQgfHwgJ1wiZGVmYXVsdFwiJzsoY3VycmVudFBhcmVudC5zY29wZWRTbG90cyB8fCAoY3VycmVudFBhcmVudC5zY29wZWRTbG90cyA9IHt9KSlbbmFtZV0gPSBlbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50UGFyZW50LmNoaWxkcmVuLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICBlbGVtZW50LnBhcmVudCA9IGN1cnJlbnRQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghdW5hcnkpIHtcclxuICAgICAgICBjdXJyZW50UGFyZW50ID0gZWxlbWVudDtcclxuICAgICAgICBzdGFjay5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbmQ6IGZ1bmN0aW9uIGVuZCAoKSB7XHJcbiAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyB3aGl0ZXNwYWNlXHJcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgIHZhciBsYXN0Tm9kZSA9IGVsZW1lbnQuY2hpbGRyZW5bZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKGxhc3ROb2RlICYmIGxhc3ROb2RlLnR5cGUgPT09IDMgJiYgbGFzdE5vZGUudGV4dCA9PT0gJyAnICYmICFpblByZSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ucG9wKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcG9wIHN0YWNrXHJcbiAgICAgIHN0YWNrLmxlbmd0aCAtPSAxO1xyXG4gICAgICBjdXJyZW50UGFyZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgIGNsb3NlRWxlbWVudChlbGVtZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhcnM6IGZ1bmN0aW9uIGNoYXJzICh0ZXh0KSB7XHJcbiAgICAgIGlmICghY3VycmVudFBhcmVudCkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICBpZiAodGV4dCA9PT0gdGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgd2Fybk9uY2UoXHJcbiAgICAgICAgICAgICAgJ0NvbXBvbmVudCB0ZW1wbGF0ZSByZXF1aXJlcyBhIHJvb3QgZWxlbWVudCwgcmF0aGVyIHRoYW4ganVzdCB0ZXh0LidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoKHRleHQgPSB0ZXh0LnRyaW0oKSkpIHtcclxuICAgICAgICAgICAgd2Fybk9uY2UoXHJcbiAgICAgICAgICAgICAgKFwidGV4dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIG91dHNpZGUgcm9vdCBlbGVtZW50IHdpbGwgYmUgaWdub3JlZC5cIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLy8gSUUgdGV4dGFyZWEgcGxhY2Vob2xkZXIgYnVnXHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICBpZiAoaXNJRSAmJlxyXG4gICAgICAgIGN1cnJlbnRQYXJlbnQudGFnID09PSAndGV4dGFyZWEnICYmXHJcbiAgICAgICAgY3VycmVudFBhcmVudC5hdHRyc01hcC5wbGFjZWhvbGRlciA9PT0gdGV4dFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB2YXIgY2hpbGRyZW4gPSBjdXJyZW50UGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICB0ZXh0ID0gaW5QcmUgfHwgdGV4dC50cmltKClcclxuICAgICAgICA/IGlzVGV4dFRhZyhjdXJyZW50UGFyZW50KSA/IHRleHQgOiBkZWNvZGVIVE1MQ2FjaGVkKHRleHQpXHJcbiAgICAgICAgLy8gb25seSBwcmVzZXJ2ZSB3aGl0ZXNwYWNlIGlmIGl0cyBub3QgcmlnaHQgYWZ0ZXIgYSBzdGFydGluZyB0YWdcclxuICAgICAgICA6IHByZXNlcnZlV2hpdGVzcGFjZSAmJiBjaGlsZHJlbi5sZW5ndGggPyAnICcgOiAnJztcclxuICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICB2YXIgcmVzO1xyXG4gICAgICAgIGlmICghaW5WUHJlICYmIHRleHQgIT09ICcgJyAmJiAocmVzID0gcGFyc2VUZXh0KHRleHQsIGRlbGltaXRlcnMpKSkge1xyXG4gICAgICAgICAgY2hpbGRyZW4ucHVzaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHJlcy5leHByZXNzaW9uLFxyXG4gICAgICAgICAgICB0b2tlbnM6IHJlcy50b2tlbnMsXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGV4dCAhPT0gJyAnIHx8ICFjaGlsZHJlbi5sZW5ndGggfHwgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0udGV4dCAhPT0gJyAnKSB7XHJcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogMyxcclxuICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tbWVudDogZnVuY3Rpb24gY29tbWVudCAodGV4dCkge1xyXG4gICAgICBjdXJyZW50UGFyZW50LmNoaWxkcmVuLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IDMsXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICBpc0NvbW1lbnQ6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJvb3RcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc1ByZSAoZWwpIHtcclxuICBpZiAoZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtcHJlJykgIT0gbnVsbCkge1xyXG4gICAgZWwucHJlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSYXdBdHRycyAoZWwpIHtcclxuICB2YXIgbCA9IGVsLmF0dHJzTGlzdC5sZW5ndGg7XHJcbiAgaWYgKGwpIHtcclxuICAgIHZhciBhdHRycyA9IGVsLmF0dHJzID0gbmV3IEFycmF5KGwpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgYXR0cnNbaV0gPSB7XHJcbiAgICAgICAgbmFtZTogZWwuYXR0cnNMaXN0W2ldLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KGVsLmF0dHJzTGlzdFtpXS52YWx1ZSlcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKCFlbC5wcmUpIHtcclxuICAgIC8vIG5vbiByb290IG5vZGUgaW4gcHJlIGJsb2NrcyB3aXRoIG5vIGF0dHJpYnV0ZXNcclxuICAgIGVsLnBsYWluID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50IChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgcHJvY2Vzc0tleShlbGVtZW50KTtcclxuXHJcbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHBsYWluIGVsZW1lbnQgYWZ0ZXJcclxuICAvLyByZW1vdmluZyBzdHJ1Y3R1cmFsIGF0dHJpYnV0ZXNcclxuICBlbGVtZW50LnBsYWluID0gIWVsZW1lbnQua2V5ICYmICFlbGVtZW50LmF0dHJzTGlzdC5sZW5ndGg7XHJcblxyXG4gIHByb2Nlc3NSZWYoZWxlbWVudCk7XHJcbiAgcHJvY2Vzc1Nsb3QoZWxlbWVudCk7XHJcbiAgcHJvY2Vzc0NvbXBvbmVudChlbGVtZW50KTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGVsZW1lbnQgPSB0cmFuc2Zvcm1zW2ldKGVsZW1lbnQsIG9wdGlvbnMpIHx8IGVsZW1lbnQ7XHJcbiAgfVxyXG4gIHByb2Nlc3NBdHRycyhlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0tleSAoZWwpIHtcclxuICB2YXIgZXhwID0gZ2V0QmluZGluZ0F0dHIoZWwsICdrZXknKTtcclxuICBpZiAoZXhwKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBlbC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcclxuICAgICAgd2FybiQyKFwiPHRlbXBsYXRlPiBjYW5ub3QgYmUga2V5ZWQuIFBsYWNlIHRoZSBrZXkgb24gcmVhbCBlbGVtZW50cyBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICAgIGVsLmtleSA9IGV4cDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWYgKGVsKSB7XHJcbiAgdmFyIHJlZiA9IGdldEJpbmRpbmdBdHRyKGVsLCAncmVmJyk7XHJcbiAgaWYgKHJlZikge1xyXG4gICAgZWwucmVmID0gcmVmO1xyXG4gICAgZWwucmVmSW5Gb3IgPSBjaGVja0luRm9yKGVsKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NGb3IgKGVsKSB7XHJcbiAgdmFyIGV4cDtcclxuICBpZiAoKGV4cCA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWZvcicpKSkge1xyXG4gICAgdmFyIHJlcyA9IHBhcnNlRm9yKGV4cCk7XHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIGV4dGVuZChlbCwgcmVzKTtcclxuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICB3YXJuJDIoXHJcbiAgICAgICAgKFwiSW52YWxpZCB2LWZvciBleHByZXNzaW9uOiBcIiArIGV4cClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VGb3IgKGV4cCkge1xyXG4gIHZhciBpbk1hdGNoID0gZXhwLm1hdGNoKGZvckFsaWFzUkUpO1xyXG4gIGlmICghaW5NYXRjaCkgeyByZXR1cm4gfVxyXG4gIHZhciByZXMgPSB7fTtcclxuICByZXMuZm9yID0gaW5NYXRjaFsyXS50cmltKCk7XHJcbiAgdmFyIGFsaWFzID0gaW5NYXRjaFsxXS50cmltKCkucmVwbGFjZShzdHJpcFBhcmVuc1JFLCAnJyk7XHJcbiAgdmFyIGl0ZXJhdG9yTWF0Y2ggPSBhbGlhcy5tYXRjaChmb3JJdGVyYXRvclJFKTtcclxuICBpZiAoaXRlcmF0b3JNYXRjaCkge1xyXG4gICAgcmVzLmFsaWFzID0gYWxpYXMucmVwbGFjZShmb3JJdGVyYXRvclJFLCAnJyk7XHJcbiAgICByZXMuaXRlcmF0b3IxID0gaXRlcmF0b3JNYXRjaFsxXS50cmltKCk7XHJcbiAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xyXG4gICAgICByZXMuaXRlcmF0b3IyID0gaXRlcmF0b3JNYXRjaFsyXS50cmltKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5hbGlhcyA9IGFsaWFzO1xyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NJZiAoZWwpIHtcclxuICB2YXIgZXhwID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtaWYnKTtcclxuICBpZiAoZXhwKSB7XHJcbiAgICBlbC5pZiA9IGV4cDtcclxuICAgIGFkZElmQ29uZGl0aW9uKGVsLCB7XHJcbiAgICAgIGV4cDogZXhwLFxyXG4gICAgICBibG9jazogZWxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtZWxzZScpICE9IG51bGwpIHtcclxuICAgICAgZWwuZWxzZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgZWxzZWlmID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtZWxzZS1pZicpO1xyXG4gICAgaWYgKGVsc2VpZikge1xyXG4gICAgICBlbC5lbHNlaWYgPSBlbHNlaWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzSWZDb25kaXRpb25zIChlbCwgcGFyZW50KSB7XHJcbiAgdmFyIHByZXYgPSBmaW5kUHJldkVsZW1lbnQocGFyZW50LmNoaWxkcmVuKTtcclxuICBpZiAocHJldiAmJiBwcmV2LmlmKSB7XHJcbiAgICBhZGRJZkNvbmRpdGlvbihwcmV2LCB7XHJcbiAgICAgIGV4cDogZWwuZWxzZWlmLFxyXG4gICAgICBibG9jazogZWxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgd2FybiQyKFxyXG4gICAgICBcInYtXCIgKyAoZWwuZWxzZWlmID8gKCdlbHNlLWlmPVwiJyArIGVsLmVsc2VpZiArICdcIicpIDogJ2Vsc2UnKSArIFwiIFwiICtcclxuICAgICAgXCJ1c2VkIG9uIGVsZW1lbnQgPFwiICsgKGVsLnRhZykgKyBcIj4gd2l0aG91dCBjb3JyZXNwb25kaW5nIHYtaWYuXCJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJldkVsZW1lbnQgKGNoaWxkcmVuKSB7XHJcbiAgdmFyIGkgPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgd2hpbGUgKGktLSkge1xyXG4gICAgaWYgKGNoaWxkcmVuW2ldLnR5cGUgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjaGlsZHJlbltpXS50ZXh0ICE9PSAnICcpIHtcclxuICAgICAgICB3YXJuJDIoXHJcbiAgICAgICAgICBcInRleHQgXFxcIlwiICsgKGNoaWxkcmVuW2ldLnRleHQudHJpbSgpKSArIFwiXFxcIiBiZXR3ZWVuIHYtaWYgYW5kIHYtZWxzZSgtaWYpIFwiICtcclxuICAgICAgICAgIFwid2lsbCBiZSBpZ25vcmVkLlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjaGlsZHJlbi5wb3AoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZElmQ29uZGl0aW9uIChlbCwgY29uZGl0aW9uKSB7XHJcbiAgaWYgKCFlbC5pZkNvbmRpdGlvbnMpIHtcclxuICAgIGVsLmlmQ29uZGl0aW9ucyA9IFtdO1xyXG4gIH1cclxuICBlbC5pZkNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzT25jZSAoZWwpIHtcclxuICB2YXIgb25jZSQkMSA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LW9uY2UnKTtcclxuICBpZiAob25jZSQkMSAhPSBudWxsKSB7XHJcbiAgICBlbC5vbmNlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NTbG90IChlbCkge1xyXG4gIGlmIChlbC50YWcgPT09ICdzbG90Jykge1xyXG4gICAgZWwuc2xvdE5hbWUgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ25hbWUnKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGVsLmtleSkge1xyXG4gICAgICB3YXJuJDIoXHJcbiAgICAgICAgXCJga2V5YCBkb2VzIG5vdCB3b3JrIG9uIDxzbG90PiBiZWNhdXNlIHNsb3RzIGFyZSBhYnN0cmFjdCBvdXRsZXRzIFwiICtcclxuICAgICAgICBcImFuZCBjYW4gcG9zc2libHkgZXhwYW5kIGludG8gbXVsdGlwbGUgZWxlbWVudHMuIFwiICtcclxuICAgICAgICBcIlVzZSB0aGUga2V5IG9uIGEgd3JhcHBpbmcgZWxlbWVudCBpbnN0ZWFkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBzbG90U2NvcGU7XHJcbiAgICBpZiAoZWwudGFnID09PSAndGVtcGxhdGUnKSB7XHJcbiAgICAgIHNsb3RTY29wZSA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICdzY29wZScpO1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2xvdFNjb3BlKSB7XHJcbiAgICAgICAgd2FybiQyKFxyXG4gICAgICAgICAgXCJ0aGUgXFxcInNjb3BlXFxcIiBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBzbG90cyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgXCIgK1xyXG4gICAgICAgICAgXCJyZXBsYWNlZCBieSBcXFwic2xvdC1zY29wZVxcXCIgc2luY2UgMi41LiBUaGUgbmV3IFxcXCJzbG90LXNjb3BlXFxcIiBhdHRyaWJ1dGUgXCIgK1xyXG4gICAgICAgICAgXCJjYW4gYWxzbyBiZSB1c2VkIG9uIHBsYWluIGVsZW1lbnRzIGluIGFkZGl0aW9uIHRvIDx0ZW1wbGF0ZT4gdG8gXCIgK1xyXG4gICAgICAgICAgXCJkZW5vdGUgc2NvcGVkIHNsb3RzLlwiLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZWwuc2xvdFNjb3BlID0gc2xvdFNjb3BlIHx8IGdldEFuZFJlbW92ZUF0dHIoZWwsICdzbG90LXNjb3BlJyk7XHJcbiAgICB9IGVsc2UgaWYgKChzbG90U2NvcGUgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAnc2xvdC1zY29wZScpKSkge1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZWwuYXR0cnNNYXBbJ3YtZm9yJ10pIHtcclxuICAgICAgICB3YXJuJDIoXHJcbiAgICAgICAgICBcIkFtYmlndW91cyBjb21iaW5lZCB1c2FnZSBvZiBzbG90LXNjb3BlIGFuZCB2LWZvciBvbiA8XCIgKyAoZWwudGFnKSArIFwiPiBcIiArXHJcbiAgICAgICAgICBcIih2LWZvciB0YWtlcyBoaWdoZXIgcHJpb3JpdHkpLiBVc2UgYSB3cmFwcGVyIDx0ZW1wbGF0ZT4gZm9yIHRoZSBcIiArXHJcbiAgICAgICAgICBcInNjb3BlZCBzbG90IHRvIG1ha2UgaXQgY2xlYXJlci5cIixcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsLnNsb3RTY29wZSA9IHNsb3RTY29wZTtcclxuICAgIH1cclxuICAgIHZhciBzbG90VGFyZ2V0ID0gZ2V0QmluZGluZ0F0dHIoZWwsICdzbG90Jyk7XHJcbiAgICBpZiAoc2xvdFRhcmdldCkge1xyXG4gICAgICBlbC5zbG90VGFyZ2V0ID0gc2xvdFRhcmdldCA9PT0gJ1wiXCInID8gJ1wiZGVmYXVsdFwiJyA6IHNsb3RUYXJnZXQ7XHJcbiAgICAgIC8vIHByZXNlcnZlIHNsb3QgYXMgYW4gYXR0cmlidXRlIGZvciBuYXRpdmUgc2hhZG93IERPTSBjb21wYXRcclxuICAgICAgLy8gb25seSBmb3Igbm9uLXNjb3BlZCBzbG90cy5cclxuICAgICAgaWYgKGVsLnRhZyAhPT0gJ3RlbXBsYXRlJyAmJiAhZWwuc2xvdFNjb3BlKSB7XHJcbiAgICAgICAgYWRkQXR0cihlbCwgJ3Nsb3QnLCBzbG90VGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudCAoZWwpIHtcclxuICB2YXIgYmluZGluZztcclxuICBpZiAoKGJpbmRpbmcgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ2lzJykpKSB7XHJcbiAgICBlbC5jb21wb25lbnQgPSBiaW5kaW5nO1xyXG4gIH1cclxuICBpZiAoZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ2lubGluZS10ZW1wbGF0ZScpICE9IG51bGwpIHtcclxuICAgIGVsLmlubGluZVRlbXBsYXRlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBdHRycyAoZWwpIHtcclxuICB2YXIgbGlzdCA9IGVsLmF0dHJzTGlzdDtcclxuICB2YXIgaSwgbCwgbmFtZSwgcmF3TmFtZSwgdmFsdWUsIG1vZGlmaWVycywgaXNQcm9wO1xyXG4gIGZvciAoaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgbmFtZSA9IHJhd05hbWUgPSBsaXN0W2ldLm5hbWU7XHJcbiAgICB2YWx1ZSA9IGxpc3RbaV0udmFsdWU7XHJcbiAgICBpZiAoZGlyUkUudGVzdChuYW1lKSkge1xyXG4gICAgICAvLyBtYXJrIGVsZW1lbnQgYXMgZHluYW1pY1xyXG4gICAgICBlbC5oYXNCaW5kaW5ncyA9IHRydWU7XHJcbiAgICAgIC8vIG1vZGlmaWVyc1xyXG4gICAgICBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhuYW1lKTtcclxuICAgICAgaWYgKG1vZGlmaWVycykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UobW9kaWZpZXJSRSwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChiaW5kUkUudGVzdChuYW1lKSkgeyAvLyB2LWJpbmRcclxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKGJpbmRSRSwgJycpO1xyXG4gICAgICAgIHZhbHVlID0gcGFyc2VGaWx0ZXJzKHZhbHVlKTtcclxuICAgICAgICBpc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBpZiAobW9kaWZpZXJzKSB7XHJcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnByb3ApIHtcclxuICAgICAgICAgICAgaXNQcm9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmFtZSA9IGNhbWVsaXplKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2lubmVySHRtbCcpIHsgbmFtZSA9ICdpbm5lckhUTUwnOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmNhbWVsKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBjYW1lbGl6ZShuYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc3luYykge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVyKFxyXG4gICAgICAgICAgICAgIGVsLFxyXG4gICAgICAgICAgICAgIChcInVwZGF0ZTpcIiArIChjYW1lbGl6ZShuYW1lKSkpLFxyXG4gICAgICAgICAgICAgIGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCBcIiRldmVudFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQcm9wIHx8IChcclxuICAgICAgICAgICFlbC5jb21wb25lbnQgJiYgcGxhdGZvcm1NdXN0VXNlUHJvcChlbC50YWcsIGVsLmF0dHJzTWFwLnR5cGUsIG5hbWUpXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgICAgYWRkUHJvcChlbCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhZGRBdHRyKGVsLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG9uUkUudGVzdChuYW1lKSkgeyAvLyB2LW9uXHJcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShvblJFLCAnJyk7XHJcbiAgICAgICAgYWRkSGFuZGxlcihlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycywgZmFsc2UsIHdhcm4kMik7XHJcbiAgICAgIH0gZWxzZSB7IC8vIG5vcm1hbCBkaXJlY3RpdmVzXHJcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShkaXJSRSwgJycpO1xyXG4gICAgICAgIC8vIHBhcnNlIGFyZ1xyXG4gICAgICAgIHZhciBhcmdNYXRjaCA9IG5hbWUubWF0Y2goYXJnUkUpO1xyXG4gICAgICAgIHZhciBhcmcgPSBhcmdNYXRjaCAmJiBhcmdNYXRjaFsxXTtcclxuICAgICAgICBpZiAoYXJnKSB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgwLCAtKGFyZy5sZW5ndGggKyAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZERpcmVjdGl2ZShlbCwgbmFtZSwgcmF3TmFtZSwgdmFsdWUsIGFyZywgbW9kaWZpZXJzKTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lID09PSAnbW9kZWwnKSB7XHJcbiAgICAgICAgICBjaGVja0ZvckFsaWFzTW9kZWwoZWwsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGxpdGVyYWwgYXR0cmlidXRlXHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHBhcnNlVGV4dCh2YWx1ZSwgZGVsaW1pdGVycyk7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgd2FybiQyKFxyXG4gICAgICAgICAgICBuYW1lICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCI6IFwiICtcclxuICAgICAgICAgICAgJ0ludGVycG9sYXRpb24gaW5zaWRlIGF0dHJpYnV0ZXMgaGFzIGJlZW4gcmVtb3ZlZC4gJyArXHJcbiAgICAgICAgICAgICdVc2Ugdi1iaW5kIG9yIHRoZSBjb2xvbiBzaG9ydGhhbmQgaW5zdGVhZC4gRm9yIGV4YW1wbGUsICcgK1xyXG4gICAgICAgICAgICAnaW5zdGVhZCBvZiA8ZGl2IGlkPVwie3sgdmFsIH19XCI+LCB1c2UgPGRpdiA6aWQ9XCJ2YWxcIj4uJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYWRkQXR0cihlbCwgbmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgLy8gIzY4ODcgZmlyZWZveCBkb2Vzbid0IHVwZGF0ZSBtdXRlZCBzdGF0ZSBpZiBzZXQgdmlhIGF0dHJpYnV0ZVxyXG4gICAgICAvLyBldmVuIGltbWVkaWF0ZWx5IGFmdGVyIGVsZW1lbnQgY3JlYXRpb25cclxuICAgICAgaWYgKCFlbC5jb21wb25lbnQgJiZcclxuICAgICAgICAgIG5hbWUgPT09ICdtdXRlZCcgJiZcclxuICAgICAgICAgIHBsYXRmb3JtTXVzdFVzZVByb3AoZWwudGFnLCBlbC5hdHRyc01hcC50eXBlLCBuYW1lKSkge1xyXG4gICAgICAgIGFkZFByb3AoZWwsIG5hbWUsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSW5Gb3IgKGVsKSB7XHJcbiAgdmFyIHBhcmVudCA9IGVsO1xyXG4gIHdoaWxlIChwYXJlbnQpIHtcclxuICAgIGlmIChwYXJlbnQuZm9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZU1vZGlmaWVycyAobmFtZSkge1xyXG4gIHZhciBtYXRjaCA9IG5hbWUubWF0Y2gobW9kaWZpZXJSRSk7XHJcbiAgaWYgKG1hdGNoKSB7XHJcbiAgICB2YXIgcmV0ID0ge307XHJcbiAgICBtYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7IHJldFttLnNsaWNlKDEpXSA9IHRydWU7IH0pO1xyXG4gICAgcmV0dXJuIHJldFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUF0dHJzTWFwIChhdHRycykge1xyXG4gIHZhciBtYXAgPSB7fTtcclxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgaWYgKFxyXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAgIG1hcFthdHRyc1tpXS5uYW1lXSAmJiAhaXNJRSAmJiAhaXNFZGdlXHJcbiAgICApIHtcclxuICAgICAgd2FybiQyKCdkdXBsaWNhdGUgYXR0cmlidXRlOiAnICsgYXR0cnNbaV0ubmFtZSk7XHJcbiAgICB9XHJcbiAgICBtYXBbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIG1hcFxyXG59XHJcblxyXG4vLyBmb3Igc2NyaXB0IChlLmcuIHR5cGU9XCJ4L3RlbXBsYXRlXCIpIG9yIHN0eWxlLCBkbyBub3QgZGVjb2RlIGNvbnRlbnRcclxuZnVuY3Rpb24gaXNUZXh0VGFnIChlbCkge1xyXG4gIHJldHVybiBlbC50YWcgPT09ICdzY3JpcHQnIHx8IGVsLnRhZyA9PT0gJ3N0eWxlJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZvcmJpZGRlblRhZyAoZWwpIHtcclxuICByZXR1cm4gKFxyXG4gICAgZWwudGFnID09PSAnc3R5bGUnIHx8XHJcbiAgICAoZWwudGFnID09PSAnc2NyaXB0JyAmJiAoXHJcbiAgICAgICFlbC5hdHRyc01hcC50eXBlIHx8XHJcbiAgICAgIGVsLmF0dHJzTWFwLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnXHJcbiAgICApKVxyXG4gIClcclxufVxyXG5cclxudmFyIGllTlNCdWcgPSAvXnhtbG5zOk5TXFxkKy87XHJcbnZhciBpZU5TUHJlZml4ID0gL15OU1xcZCs6LztcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmZ1bmN0aW9uIGd1YXJkSUVTVkdCdWcgKGF0dHJzKSB7XHJcbiAgdmFyIHJlcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhdHRyID0gYXR0cnNbaV07XHJcbiAgICBpZiAoIWllTlNCdWcudGVzdChhdHRyLm5hbWUpKSB7XHJcbiAgICAgIGF0dHIubmFtZSA9IGF0dHIubmFtZS5yZXBsYWNlKGllTlNQcmVmaXgsICcnKTtcclxuICAgICAgcmVzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JBbGlhc01vZGVsIChlbCwgdmFsdWUpIHtcclxuICB2YXIgX2VsID0gZWw7XHJcbiAgd2hpbGUgKF9lbCkge1xyXG4gICAgaWYgKF9lbC5mb3IgJiYgX2VsLmFsaWFzID09PSB2YWx1ZSkge1xyXG4gICAgICB3YXJuJDIoXHJcbiAgICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtbW9kZWw9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCI+OiBcIiArXHJcbiAgICAgICAgXCJZb3UgYXJlIGJpbmRpbmcgdi1tb2RlbCBkaXJlY3RseSB0byBhIHYtZm9yIGl0ZXJhdGlvbiBhbGlhcy4gXCIgK1xyXG4gICAgICAgIFwiVGhpcyB3aWxsIG5vdCBiZSBhYmxlIHRvIG1vZGlmeSB0aGUgdi1mb3Igc291cmNlIGFycmF5IGJlY2F1c2UgXCIgK1xyXG4gICAgICAgIFwid3JpdGluZyB0byB0aGUgYWxpYXMgaXMgbGlrZSBtb2RpZnlpbmcgYSBmdW5jdGlvbiBsb2NhbCB2YXJpYWJsZS4gXCIgK1xyXG4gICAgICAgIFwiQ29uc2lkZXIgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cyBhbmQgdXNlIHYtbW9kZWwgb24gYW4gb2JqZWN0IHByb3BlcnR5IGluc3RlYWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIF9lbCA9IF9lbC5wYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbi8qKlxyXG4gKiBFeHBhbmQgaW5wdXRbdi1tb2RlbF0gd2l0aCBkeWFubWljIHR5cGUgYmluZGluZ3MgaW50byB2LWlmLWVsc2UgY2hhaW5zXHJcbiAqIFR1cm4gdGhpczpcclxuICogICA8aW5wdXQgdi1tb2RlbD1cImRhdGFbdHlwZV1cIiA6dHlwZT1cInR5cGVcIj5cclxuICogaW50byB0aGlzOlxyXG4gKiAgIDxpbnB1dCB2LWlmPVwidHlwZSA9PT0gJ2NoZWNrYm94J1wiIHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJkYXRhW3R5cGVdXCI+XHJcbiAqICAgPGlucHV0IHYtZWxzZS1pZj1cInR5cGUgPT09ICdyYWRpbydcIiB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiZGF0YVt0eXBlXVwiPlxyXG4gKiAgIDxpbnB1dCB2LWVsc2UgOnR5cGU9XCJ0eXBlXCIgdi1tb2RlbD1cImRhdGFbdHlwZV1cIj5cclxuICovXHJcblxyXG5mdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlIChlbCwgb3B0aW9ucykge1xyXG4gIGlmIChlbC50YWcgPT09ICdpbnB1dCcpIHtcclxuICAgIHZhciBtYXAgPSBlbC5hdHRyc01hcDtcclxuICAgIGlmICghbWFwWyd2LW1vZGVsJ10pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHR5cGVCaW5kaW5nO1xyXG4gICAgaWYgKG1hcFsnOnR5cGUnXSB8fCBtYXBbJ3YtYmluZDp0eXBlJ10pIHtcclxuICAgICAgdHlwZUJpbmRpbmcgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ3R5cGUnKTtcclxuICAgIH1cclxuICAgIGlmICghbWFwLnR5cGUgJiYgIXR5cGVCaW5kaW5nICYmIG1hcFsndi1iaW5kJ10pIHtcclxuICAgICAgdHlwZUJpbmRpbmcgPSBcIihcIiArIChtYXBbJ3YtYmluZCddKSArIFwiKS50eXBlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVCaW5kaW5nKSB7XHJcbiAgICAgIHZhciBpZkNvbmRpdGlvbiA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWlmJywgdHJ1ZSk7XHJcbiAgICAgIHZhciBpZkNvbmRpdGlvbkV4dHJhID0gaWZDb25kaXRpb24gPyAoXCImJihcIiArIGlmQ29uZGl0aW9uICsgXCIpXCIpIDogXCJcIjtcclxuICAgICAgdmFyIGhhc0Vsc2UgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1lbHNlJywgdHJ1ZSkgIT0gbnVsbDtcclxuICAgICAgdmFyIGVsc2VJZkNvbmRpdGlvbiA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWVsc2UtaWYnLCB0cnVlKTtcclxuICAgICAgLy8gMS4gY2hlY2tib3hcclxuICAgICAgdmFyIGJyYW5jaDAgPSBjbG9uZUFTVEVsZW1lbnQoZWwpO1xyXG4gICAgICAvLyBwcm9jZXNzIGZvciBvbiB0aGUgbWFpbiBub2RlXHJcbiAgICAgIHByb2Nlc3NGb3IoYnJhbmNoMCk7XHJcbiAgICAgIGFkZFJhd0F0dHIoYnJhbmNoMCwgJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgcHJvY2Vzc0VsZW1lbnQoYnJhbmNoMCwgb3B0aW9ucyk7XHJcbiAgICAgIGJyYW5jaDAucHJvY2Vzc2VkID0gdHJ1ZTsgLy8gcHJldmVudCBpdCBmcm9tIGRvdWJsZS1wcm9jZXNzZWRcclxuICAgICAgYnJhbmNoMC5pZiA9IFwiKFwiICsgdHlwZUJpbmRpbmcgKyBcIik9PT0nY2hlY2tib3gnXCIgKyBpZkNvbmRpdGlvbkV4dHJhO1xyXG4gICAgICBhZGRJZkNvbmRpdGlvbihicmFuY2gwLCB7XHJcbiAgICAgICAgZXhwOiBicmFuY2gwLmlmLFxyXG4gICAgICAgIGJsb2NrOiBicmFuY2gwXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyAyLiBhZGQgcmFkaW8gZWxzZS1pZiBjb25kaXRpb25cclxuICAgICAgdmFyIGJyYW5jaDEgPSBjbG9uZUFTVEVsZW1lbnQoZWwpO1xyXG4gICAgICBnZXRBbmRSZW1vdmVBdHRyKGJyYW5jaDEsICd2LWZvcicsIHRydWUpO1xyXG4gICAgICBhZGRSYXdBdHRyKGJyYW5jaDEsICd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgIHByb2Nlc3NFbGVtZW50KGJyYW5jaDEsIG9wdGlvbnMpO1xyXG4gICAgICBhZGRJZkNvbmRpdGlvbihicmFuY2gwLCB7XHJcbiAgICAgICAgZXhwOiBcIihcIiArIHR5cGVCaW5kaW5nICsgXCIpPT09J3JhZGlvJ1wiICsgaWZDb25kaXRpb25FeHRyYSxcclxuICAgICAgICBibG9jazogYnJhbmNoMVxyXG4gICAgICB9KTtcclxuICAgICAgLy8gMy4gb3RoZXJcclxuICAgICAgdmFyIGJyYW5jaDIgPSBjbG9uZUFTVEVsZW1lbnQoZWwpO1xyXG4gICAgICBnZXRBbmRSZW1vdmVBdHRyKGJyYW5jaDIsICd2LWZvcicsIHRydWUpO1xyXG4gICAgICBhZGRSYXdBdHRyKGJyYW5jaDIsICc6dHlwZScsIHR5cGVCaW5kaW5nKTtcclxuICAgICAgcHJvY2Vzc0VsZW1lbnQoYnJhbmNoMiwgb3B0aW9ucyk7XHJcbiAgICAgIGFkZElmQ29uZGl0aW9uKGJyYW5jaDAsIHtcclxuICAgICAgICBleHA6IGlmQ29uZGl0aW9uLFxyXG4gICAgICAgIGJsb2NrOiBicmFuY2gyXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGhhc0Vsc2UpIHtcclxuICAgICAgICBicmFuY2gwLmVsc2UgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsc2VJZkNvbmRpdGlvbikge1xyXG4gICAgICAgIGJyYW5jaDAuZWxzZWlmID0gZWxzZUlmQ29uZGl0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYnJhbmNoMFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVBU1RFbGVtZW50IChlbCkge1xyXG4gIHJldHVybiBjcmVhdGVBU1RFbGVtZW50KGVsLnRhZywgZWwuYXR0cnNMaXN0LnNsaWNlKCksIGVsLnBhcmVudClcclxufVxyXG5cclxudmFyIG1vZGVsJDIgPSB7XHJcbiAgcHJlVHJhbnNmb3JtTm9kZTogcHJlVHJhbnNmb3JtTm9kZVxyXG59XHJcblxyXG52YXIgbW9kdWxlcyQxID0gW1xyXG4gIGtsYXNzJDEsXHJcbiAgc3R5bGUkMSxcclxuICBtb2RlbCQyXHJcbl1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gdGV4dCAoZWwsIGRpcikge1xyXG4gIGlmIChkaXIudmFsdWUpIHtcclxuICAgIGFkZFByb3AoZWwsICd0ZXh0Q29udGVudCcsIChcIl9zKFwiICsgKGRpci52YWx1ZSkgKyBcIilcIikpO1xyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG5mdW5jdGlvbiBodG1sIChlbCwgZGlyKSB7XHJcbiAgaWYgKGRpci52YWx1ZSkge1xyXG4gICAgYWRkUHJvcChlbCwgJ2lubmVySFRNTCcsIChcIl9zKFwiICsgKGRpci52YWx1ZSkgKyBcIilcIikpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGRpcmVjdGl2ZXMkMSA9IHtcclxuICBtb2RlbDogbW9kZWwsXHJcbiAgdGV4dDogdGV4dCxcclxuICBodG1sOiBodG1sXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIGJhc2VPcHRpb25zID0ge1xyXG4gIGV4cGVjdEhUTUw6IHRydWUsXHJcbiAgbW9kdWxlczogbW9kdWxlcyQxLFxyXG4gIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMkMSxcclxuICBpc1ByZVRhZzogaXNQcmVUYWcsXHJcbiAgaXNVbmFyeVRhZzogaXNVbmFyeVRhZyxcclxuICBtdXN0VXNlUHJvcDogbXVzdFVzZVByb3AsXHJcbiAgY2FuQmVMZWZ0T3BlblRhZzogY2FuQmVMZWZ0T3BlblRhZyxcclxuICBpc1Jlc2VydmVkVGFnOiBpc1Jlc2VydmVkVGFnLFxyXG4gIGdldFRhZ05hbWVzcGFjZTogZ2V0VGFnTmFtZXNwYWNlLFxyXG4gIHN0YXRpY0tleXM6IGdlblN0YXRpY0tleXMobW9kdWxlcyQxKVxyXG59O1xyXG5cclxuLyogICovXHJcblxyXG52YXIgaXNTdGF0aWNLZXk7XHJcbnZhciBpc1BsYXRmb3JtUmVzZXJ2ZWRUYWc7XHJcblxyXG52YXIgZ2VuU3RhdGljS2V5c0NhY2hlZCA9IGNhY2hlZChnZW5TdGF0aWNLZXlzJDEpO1xyXG5cclxuLyoqXHJcbiAqIEdvYWwgb2YgdGhlIG9wdGltaXplcjogd2FsayB0aGUgZ2VuZXJhdGVkIHRlbXBsYXRlIEFTVCB0cmVlXHJcbiAqIGFuZCBkZXRlY3Qgc3ViLXRyZWVzIHRoYXQgYXJlIHB1cmVseSBzdGF0aWMsIGkuZS4gcGFydHMgb2ZcclxuICogdGhlIERPTSB0aGF0IG5ldmVyIG5lZWRzIHRvIGNoYW5nZS5cclxuICpcclxuICogT25jZSB3ZSBkZXRlY3QgdGhlc2Ugc3ViLXRyZWVzLCB3ZSBjYW46XHJcbiAqXHJcbiAqIDEuIEhvaXN0IHRoZW0gaW50byBjb25zdGFudHMsIHNvIHRoYXQgd2Ugbm8gbG9uZ2VyIG5lZWQgdG9cclxuICogICAgY3JlYXRlIGZyZXNoIG5vZGVzIGZvciB0aGVtIG9uIGVhY2ggcmUtcmVuZGVyO1xyXG4gKiAyLiBDb21wbGV0ZWx5IHNraXAgdGhlbSBpbiB0aGUgcGF0Y2hpbmcgcHJvY2Vzcy5cclxuICovXHJcbmZ1bmN0aW9uIG9wdGltaXplIChyb290LCBvcHRpb25zKSB7XHJcbiAgaWYgKCFyb290KSB7IHJldHVybiB9XHJcbiAgaXNTdGF0aWNLZXkgPSBnZW5TdGF0aWNLZXlzQ2FjaGVkKG9wdGlvbnMuc3RhdGljS2V5cyB8fCAnJyk7XHJcbiAgaXNQbGF0Zm9ybVJlc2VydmVkVGFnID0gb3B0aW9ucy5pc1Jlc2VydmVkVGFnIHx8IG5vO1xyXG4gIC8vIGZpcnN0IHBhc3M6IG1hcmsgYWxsIG5vbi1zdGF0aWMgbm9kZXMuXHJcbiAgbWFya1N0YXRpYyQxKHJvb3QpO1xyXG4gIC8vIHNlY29uZCBwYXNzOiBtYXJrIHN0YXRpYyByb290cy5cclxuICBtYXJrU3RhdGljUm9vdHMocm9vdCwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5TdGF0aWNLZXlzJDEgKGtleXMpIHtcclxuICByZXR1cm4gbWFrZU1hcChcclxuICAgICd0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzJyArXHJcbiAgICAoa2V5cyA/ICcsJyArIGtleXMgOiAnJylcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtTdGF0aWMkMSAobm9kZSkge1xyXG4gIG5vZGUuc3RhdGljID0gaXNTdGF0aWMobm9kZSk7XHJcbiAgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xyXG4gICAgLy8gZG8gbm90IG1ha2UgY29tcG9uZW50IHNsb3QgY29udGVudCBzdGF0aWMuIHRoaXMgYXZvaWRzXHJcbiAgICAvLyAxLiBjb21wb25lbnRzIG5vdCBhYmxlIHRvIG11dGF0ZSBzbG90IG5vZGVzXHJcbiAgICAvLyAyLiBzdGF0aWMgc2xvdCBjb250ZW50IGZhaWxzIGZvciBob3QtcmVsb2FkaW5nXHJcbiAgICBpZiAoXHJcbiAgICAgICFpc1BsYXRmb3JtUmVzZXJ2ZWRUYWcobm9kZS50YWcpICYmXHJcbiAgICAgIG5vZGUudGFnICE9PSAnc2xvdCcgJiZcclxuICAgICAgbm9kZS5hdHRyc01hcFsnaW5saW5lLXRlbXBsYXRlJ10gPT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICBtYXJrU3RhdGljJDEoY2hpbGQpO1xyXG4gICAgICBpZiAoIWNoaWxkLnN0YXRpYykge1xyXG4gICAgICAgIG5vZGUuc3RhdGljID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucykge1xyXG4gICAgICBmb3IgKHZhciBpJDEgPSAxLCBsJDEgPSBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGg7IGkkMSA8IGwkMTsgaSQxKyspIHtcclxuICAgICAgICB2YXIgYmxvY2sgPSBub2RlLmlmQ29uZGl0aW9uc1tpJDFdLmJsb2NrO1xyXG4gICAgICAgIG1hcmtTdGF0aWMkMShibG9jayk7XHJcbiAgICAgICAgaWYgKCFibG9jay5zdGF0aWMpIHtcclxuICAgICAgICAgIG5vZGUuc3RhdGljID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrU3RhdGljUm9vdHMgKG5vZGUsIGlzSW5Gb3IpIHtcclxuICBpZiAobm9kZS50eXBlID09PSAxKSB7XHJcbiAgICBpZiAobm9kZS5zdGF0aWMgfHwgbm9kZS5vbmNlKSB7XHJcbiAgICAgIG5vZGUuc3RhdGljSW5Gb3IgPSBpc0luRm9yO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIGEgbm9kZSB0byBxdWFsaWZ5IGFzIGEgc3RhdGljIHJvb3QsIGl0IHNob3VsZCBoYXZlIGNoaWxkcmVuIHRoYXRcclxuICAgIC8vIGFyZSBub3QganVzdCBzdGF0aWMgdGV4dC4gT3RoZXJ3aXNlIHRoZSBjb3N0IG9mIGhvaXN0aW5nIG91dCB3aWxsXHJcbiAgICAvLyBvdXR3ZWlnaCB0aGUgYmVuZWZpdHMgYW5kIGl0J3MgYmV0dGVyIG9mZiB0byBqdXN0IGFsd2F5cyByZW5kZXIgaXQgZnJlc2guXHJcbiAgICBpZiAobm9kZS5zdGF0aWMgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggJiYgIShcclxuICAgICAgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcclxuICAgICAgbm9kZS5jaGlsZHJlblswXS50eXBlID09PSAzXHJcbiAgICApKSB7XHJcbiAgICAgIG5vZGUuc3RhdGljUm9vdCA9IHRydWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZS5zdGF0aWNSb290ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbWFya1N0YXRpY1Jvb3RzKG5vZGUuY2hpbGRyZW5baV0sIGlzSW5Gb3IgfHwgISFub2RlLmZvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChub2RlLmlmQ29uZGl0aW9ucykge1xyXG4gICAgICBmb3IgKHZhciBpJDEgPSAxLCBsJDEgPSBub2RlLmlmQ29uZGl0aW9ucy5sZW5ndGg7IGkkMSA8IGwkMTsgaSQxKyspIHtcclxuICAgICAgICBtYXJrU3RhdGljUm9vdHMobm9kZS5pZkNvbmRpdGlvbnNbaSQxXS5ibG9jaywgaXNJbkZvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RhdGljIChub2RlKSB7XHJcbiAgaWYgKG5vZGUudHlwZSA9PT0gMikgeyAvLyBleHByZXNzaW9uXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaWYgKG5vZGUudHlwZSA9PT0gMykgeyAvLyB0ZXh0XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gISEobm9kZS5wcmUgfHwgKFxyXG4gICAgIW5vZGUuaGFzQmluZGluZ3MgJiYgLy8gbm8gZHluYW1pYyBiaW5kaW5nc1xyXG4gICAgIW5vZGUuaWYgJiYgIW5vZGUuZm9yICYmIC8vIG5vdCB2LWlmIG9yIHYtZm9yIG9yIHYtZWxzZVxyXG4gICAgIWlzQnVpbHRJblRhZyhub2RlLnRhZykgJiYgLy8gbm90IGEgYnVpbHQtaW5cclxuICAgIGlzUGxhdGZvcm1SZXNlcnZlZFRhZyhub2RlLnRhZykgJiYgLy8gbm90IGEgY29tcG9uZW50XHJcbiAgICAhaXNEaXJlY3RDaGlsZE9mVGVtcGxhdGVGb3Iobm9kZSkgJiZcclxuICAgIE9iamVjdC5rZXlzKG5vZGUpLmV2ZXJ5KGlzU3RhdGljS2V5KVxyXG4gICkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGlyZWN0Q2hpbGRPZlRlbXBsYXRlRm9yIChub2RlKSB7XHJcbiAgd2hpbGUgKG5vZGUucGFyZW50KSB7XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICBpZiAobm9kZS50YWcgIT09ICd0ZW1wbGF0ZScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5mb3IpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIGZuRXhwUkUgPSAvXihbXFx3JF9dK3xcXChbXildKj9cXCkpXFxzKj0+fF5mdW5jdGlvblxccypcXCgvO1xyXG52YXIgc2ltcGxlUGF0aFJFID0gL15bQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWydbXiddKj8nXXxcXFtcIlteXCJdKj9cIl18XFxbXFxkK118XFxbW0EtWmEtel8kXVtcXHckXSpdKSokLztcclxuXHJcbi8vIEtleWJvYXJkRXZlbnQua2V5Q29kZSBhbGlhc2VzXHJcbnZhciBrZXlDb2RlcyA9IHtcclxuICBlc2M6IDI3LFxyXG4gIHRhYjogOSxcclxuICBlbnRlcjogMTMsXHJcbiAgc3BhY2U6IDMyLFxyXG4gIHVwOiAzOCxcclxuICBsZWZ0OiAzNyxcclxuICByaWdodDogMzksXHJcbiAgZG93bjogNDAsXHJcbiAgJ2RlbGV0ZSc6IFs4LCA0Nl1cclxufTtcclxuXHJcbi8vIEtleWJvYXJkRXZlbnQua2V5IGFsaWFzZXNcclxudmFyIGtleU5hbWVzID0ge1xyXG4gIGVzYzogJ0VzY2FwZScsXHJcbiAgdGFiOiAnVGFiJyxcclxuICBlbnRlcjogJ0VudGVyJyxcclxuICBzcGFjZTogJyAnLFxyXG4gIC8vICM3ODA2OiBJRTExIHVzZXMga2V5IG5hbWVzIHdpdGhvdXQgYEFycm93YCBwcmVmaXggZm9yIGFycm93IGtleXMuXHJcbiAgdXA6IFsnVXAnLCAnQXJyb3dVcCddLFxyXG4gIGxlZnQ6IFsnTGVmdCcsICdBcnJvd0xlZnQnXSxcclxuICByaWdodDogWydSaWdodCcsICdBcnJvd1JpZ2h0J10sXHJcbiAgZG93bjogWydEb3duJywgJ0Fycm93RG93biddLFxyXG4gICdkZWxldGUnOiBbJ0JhY2tzcGFjZScsICdEZWxldGUnXVxyXG59O1xyXG5cclxuLy8gIzQ4Njg6IG1vZGlmaWVycyB0aGF0IHByZXZlbnQgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgbGlzdGVuZXJcclxuLy8gbmVlZCB0byBleHBsaWNpdGx5IHJldHVybiBudWxsIHNvIHRoYXQgd2UgY2FuIGRldGVybWluZSB3aGV0aGVyIHRvIHJlbW92ZVxyXG4vLyB0aGUgbGlzdGVuZXIgZm9yIC5vbmNlXHJcbnZhciBnZW5HdWFyZCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHsgcmV0dXJuIChcImlmKFwiICsgY29uZGl0aW9uICsgXCIpcmV0dXJuIG51bGw7XCIpOyB9O1xyXG5cclxudmFyIG1vZGlmaWVyQ29kZSA9IHtcclxuICBzdG9wOiAnJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOycsXHJcbiAgcHJldmVudDogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpOycsXHJcbiAgc2VsZjogZ2VuR3VhcmQoXCIkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldFwiKSxcclxuICBjdHJsOiBnZW5HdWFyZChcIiEkZXZlbnQuY3RybEtleVwiKSxcclxuICBzaGlmdDogZ2VuR3VhcmQoXCIhJGV2ZW50LnNoaWZ0S2V5XCIpLFxyXG4gIGFsdDogZ2VuR3VhcmQoXCIhJGV2ZW50LmFsdEtleVwiKSxcclxuICBtZXRhOiBnZW5HdWFyZChcIiEkZXZlbnQubWV0YUtleVwiKSxcclxuICBsZWZ0OiBnZW5HdWFyZChcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAwXCIpLFxyXG4gIG1pZGRsZTogZ2VuR3VhcmQoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMVwiKSxcclxuICByaWdodDogZ2VuR3VhcmQoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMlwiKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2VuSGFuZGxlcnMgKFxyXG4gIGV2ZW50cyxcclxuICBpc05hdGl2ZSxcclxuICB3YXJuXHJcbikge1xyXG4gIHZhciByZXMgPSBpc05hdGl2ZSA/ICduYXRpdmVPbjp7JyA6ICdvbjp7JztcclxuICBmb3IgKHZhciBuYW1lIGluIGV2ZW50cykge1xyXG4gICAgcmVzICs9IFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIjpcIiArIChnZW5IYW5kbGVyKG5hbWUsIGV2ZW50c1tuYW1lXSkpICsgXCIsXCI7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc2xpY2UoMCwgLTEpICsgJ30nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkhhbmRsZXIgKFxyXG4gIG5hbWUsXHJcbiAgaGFuZGxlclxyXG4pIHtcclxuICBpZiAoIWhhbmRsZXIpIHtcclxuICAgIHJldHVybiAnZnVuY3Rpb24oKXt9J1xyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcikpIHtcclxuICAgIHJldHVybiAoXCJbXCIgKyAoaGFuZGxlci5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGdlbkhhbmRsZXIobmFtZSwgaGFuZGxlcik7IH0pLmpvaW4oJywnKSkgKyBcIl1cIilcclxuICB9XHJcblxyXG4gIHZhciBpc01ldGhvZFBhdGggPSBzaW1wbGVQYXRoUkUudGVzdChoYW5kbGVyLnZhbHVlKTtcclxuICB2YXIgaXNGdW5jdGlvbkV4cHJlc3Npb24gPSBmbkV4cFJFLnRlc3QoaGFuZGxlci52YWx1ZSk7XHJcblxyXG4gIGlmICghaGFuZGxlci5tb2RpZmllcnMpIHtcclxuICAgIGlmIChpc01ldGhvZFBhdGggfHwgaXNGdW5jdGlvbkV4cHJlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIGhhbmRsZXIudmFsdWVcclxuICAgIH1cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgcmV0dXJuIChcImZ1bmN0aW9uKCRldmVudCl7XCIgKyAoaGFuZGxlci52YWx1ZSkgKyBcIn1cIikgLy8gaW5saW5lIHN0YXRlbWVudFxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgY29kZSA9ICcnO1xyXG4gICAgdmFyIGdlbk1vZGlmaWVyQ29kZSA9ICcnO1xyXG4gICAgdmFyIGtleXMgPSBbXTtcclxuICAgIGZvciAodmFyIGtleSBpbiBoYW5kbGVyLm1vZGlmaWVycykge1xyXG4gICAgICBpZiAobW9kaWZpZXJDb2RlW2tleV0pIHtcclxuICAgICAgICBnZW5Nb2RpZmllckNvZGUgKz0gbW9kaWZpZXJDb2RlW2tleV07XHJcbiAgICAgICAgLy8gbGVmdC9yaWdodFxyXG4gICAgICAgIGlmIChrZXlDb2Rlc1trZXldKSB7XHJcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZXhhY3QnKSB7XHJcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IChoYW5kbGVyLm1vZGlmaWVycyk7XHJcbiAgICAgICAgZ2VuTW9kaWZpZXJDb2RlICs9IGdlbkd1YXJkKFxyXG4gICAgICAgICAgWydjdHJsJywgJ3NoaWZ0JywgJ2FsdCcsICdtZXRhJ11cclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5TW9kaWZpZXIpIHsgcmV0dXJuICFtb2RpZmllcnNba2V5TW9kaWZpZXJdOyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXlNb2RpZmllcikgeyByZXR1cm4gKFwiJGV2ZW50LlwiICsga2V5TW9kaWZpZXIgKyBcIktleVwiKTsgfSlcclxuICAgICAgICAgICAgLmpvaW4oJ3x8JylcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgY29kZSArPSBnZW5LZXlGaWx0ZXIoa2V5cyk7XHJcbiAgICB9XHJcbiAgICAvLyBNYWtlIHN1cmUgbW9kaWZpZXJzIGxpa2UgcHJldmVudCBhbmQgc3RvcCBnZXQgZXhlY3V0ZWQgYWZ0ZXIga2V5IGZpbHRlcmluZ1xyXG4gICAgaWYgKGdlbk1vZGlmaWVyQ29kZSkge1xyXG4gICAgICBjb2RlICs9IGdlbk1vZGlmaWVyQ29kZTtcclxuICAgIH1cclxuICAgIHZhciBoYW5kbGVyQ29kZSA9IGlzTWV0aG9kUGF0aFxyXG4gICAgICA/IChcInJldHVybiBcIiArIChoYW5kbGVyLnZhbHVlKSArIFwiKCRldmVudClcIilcclxuICAgICAgOiBpc0Z1bmN0aW9uRXhwcmVzc2lvblxyXG4gICAgICAgID8gKFwicmV0dXJuIChcIiArIChoYW5kbGVyLnZhbHVlKSArIFwiKSgkZXZlbnQpXCIpXHJcbiAgICAgICAgOiBoYW5kbGVyLnZhbHVlO1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICByZXR1cm4gKFwiZnVuY3Rpb24oJGV2ZW50KXtcIiArIGNvZGUgKyBoYW5kbGVyQ29kZSArIFwifVwiKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuS2V5RmlsdGVyIChrZXlzKSB7XHJcbiAgcmV0dXJuIChcImlmKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSYmXCIgKyAoa2V5cy5tYXAoZ2VuRmlsdGVyQ29kZSkuam9pbignJiYnKSkgKyBcIilyZXR1cm4gbnVsbDtcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuRmlsdGVyQ29kZSAoa2V5KSB7XHJcbiAgdmFyIGtleVZhbCA9IHBhcnNlSW50KGtleSwgMTApO1xyXG4gIGlmIChrZXlWYWwpIHtcclxuICAgIHJldHVybiAoXCIkZXZlbnQua2V5Q29kZSE9PVwiICsga2V5VmFsKVxyXG4gIH1cclxuICB2YXIga2V5Q29kZSA9IGtleUNvZGVzW2tleV07XHJcbiAgdmFyIGtleU5hbWUgPSBrZXlOYW1lc1trZXldO1xyXG4gIHJldHVybiAoXHJcbiAgICBcIl9rKCRldmVudC5rZXlDb2RlLFwiICtcclxuICAgIChKU09OLnN0cmluZ2lmeShrZXkpKSArIFwiLFwiICtcclxuICAgIChKU09OLnN0cmluZ2lmeShrZXlDb2RlKSkgKyBcIixcIiArXHJcbiAgICBcIiRldmVudC5rZXksXCIgK1xyXG4gICAgXCJcIiArIChKU09OLnN0cmluZ2lmeShrZXlOYW1lKSkgK1xyXG4gICAgXCIpXCJcclxuICApXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gb24gKGVsLCBkaXIpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkaXIubW9kaWZpZXJzKSB7XHJcbiAgICB3YXJuKFwidi1vbiB3aXRob3V0IGFyZ3VtZW50IGRvZXMgbm90IHN1cHBvcnQgbW9kaWZpZXJzLlwiKTtcclxuICB9XHJcbiAgZWwud3JhcExpc3RlbmVycyA9IGZ1bmN0aW9uIChjb2RlKSB7IHJldHVybiAoXCJfZyhcIiArIGNvZGUgKyBcIixcIiArIChkaXIudmFsdWUpICsgXCIpXCIpOyB9O1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGJpbmQkMSAoZWwsIGRpcikge1xyXG4gIGVsLndyYXBEYXRhID0gZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgIHJldHVybiAoXCJfYihcIiArIGNvZGUgKyBcIiwnXCIgKyAoZWwudGFnKSArIFwiJyxcIiArIChkaXIudmFsdWUpICsgXCIsXCIgKyAoZGlyLm1vZGlmaWVycyAmJiBkaXIubW9kaWZpZXJzLnByb3AgPyAndHJ1ZScgOiAnZmFsc2UnKSArIChkaXIubW9kaWZpZXJzICYmIGRpci5tb2RpZmllcnMuc3luYyA/ICcsdHJ1ZScgOiAnJykgKyBcIilcIilcclxuICB9O1xyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciBiYXNlRGlyZWN0aXZlcyA9IHtcclxuICBvbjogb24sXHJcbiAgYmluZDogYmluZCQxLFxyXG4gIGNsb2FrOiBub29wXHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxudmFyIENvZGVnZW5TdGF0ZSA9IGZ1bmN0aW9uIENvZGVnZW5TdGF0ZSAob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgdGhpcy53YXJuID0gb3B0aW9ucy53YXJuIHx8IGJhc2VXYXJuO1xyXG4gIHRoaXMudHJhbnNmb3JtcyA9IHBsdWNrTW9kdWxlRnVuY3Rpb24ob3B0aW9ucy5tb2R1bGVzLCAndHJhbnNmb3JtQ29kZScpO1xyXG4gIHRoaXMuZGF0YUdlbkZucyA9IHBsdWNrTW9kdWxlRnVuY3Rpb24ob3B0aW9ucy5tb2R1bGVzLCAnZ2VuRGF0YScpO1xyXG4gIHRoaXMuZGlyZWN0aXZlcyA9IGV4dGVuZChleHRlbmQoe30sIGJhc2VEaXJlY3RpdmVzKSwgb3B0aW9ucy5kaXJlY3RpdmVzKTtcclxuICB2YXIgaXNSZXNlcnZlZFRhZyA9IG9wdGlvbnMuaXNSZXNlcnZlZFRhZyB8fCBubztcclxuICB0aGlzLm1heWJlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiAhaXNSZXNlcnZlZFRhZyhlbC50YWcpOyB9O1xyXG4gIHRoaXMub25jZUlkID0gMDtcclxuICB0aGlzLnN0YXRpY1JlbmRlckZucyA9IFtdO1xyXG59O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZSAoXHJcbiAgYXN0LFxyXG4gIG9wdGlvbnNcclxuKSB7XHJcbiAgdmFyIHN0YXRlID0gbmV3IENvZGVnZW5TdGF0ZShvcHRpb25zKTtcclxuICB2YXIgY29kZSA9IGFzdCA/IGdlbkVsZW1lbnQoYXN0LCBzdGF0ZSkgOiAnX2MoXCJkaXZcIiknO1xyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXI6IChcIndpdGgodGhpcyl7cmV0dXJuIFwiICsgY29kZSArIFwifVwiKSxcclxuICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGUuc3RhdGljUmVuZGVyRm5zXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5FbGVtZW50IChlbCwgc3RhdGUpIHtcclxuICBpZiAoZWwuc3RhdGljUm9vdCAmJiAhZWwuc3RhdGljUHJvY2Vzc2VkKSB7XHJcbiAgICByZXR1cm4gZ2VuU3RhdGljKGVsLCBzdGF0ZSlcclxuICB9IGVsc2UgaWYgKGVsLm9uY2UgJiYgIWVsLm9uY2VQcm9jZXNzZWQpIHtcclxuICAgIHJldHVybiBnZW5PbmNlKGVsLCBzdGF0ZSlcclxuICB9IGVsc2UgaWYgKGVsLmZvciAmJiAhZWwuZm9yUHJvY2Vzc2VkKSB7XHJcbiAgICByZXR1cm4gZ2VuRm9yKGVsLCBzdGF0ZSlcclxuICB9IGVsc2UgaWYgKGVsLmlmICYmICFlbC5pZlByb2Nlc3NlZCkge1xyXG4gICAgcmV0dXJuIGdlbklmKGVsLCBzdGF0ZSlcclxuICB9IGVsc2UgaWYgKGVsLnRhZyA9PT0gJ3RlbXBsYXRlJyAmJiAhZWwuc2xvdFRhcmdldCkge1xyXG4gICAgcmV0dXJuIGdlbkNoaWxkcmVuKGVsLCBzdGF0ZSkgfHwgJ3ZvaWQgMCdcclxuICB9IGVsc2UgaWYgKGVsLnRhZyA9PT0gJ3Nsb3QnKSB7XHJcbiAgICByZXR1cm4gZ2VuU2xvdChlbCwgc3RhdGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbXBvbmVudCBvciBlbGVtZW50XHJcbiAgICB2YXIgY29kZTtcclxuICAgIGlmIChlbC5jb21wb25lbnQpIHtcclxuICAgICAgY29kZSA9IGdlbkNvbXBvbmVudChlbC5jb21wb25lbnQsIGVsLCBzdGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZGF0YSA9IGVsLnBsYWluID8gdW5kZWZpbmVkIDogZ2VuRGF0YSQyKGVsLCBzdGF0ZSk7XHJcblxyXG4gICAgICB2YXIgY2hpbGRyZW4gPSBlbC5pbmxpbmVUZW1wbGF0ZSA/IG51bGwgOiBnZW5DaGlsZHJlbihlbCwgc3RhdGUsIHRydWUpO1xyXG4gICAgICBjb2RlID0gXCJfYygnXCIgKyAoZWwudGFnKSArIFwiJ1wiICsgKGRhdGEgPyAoXCIsXCIgKyBkYXRhKSA6ICcnKSArIChjaGlsZHJlbiA/IChcIixcIiArIGNoaWxkcmVuKSA6ICcnKSArIFwiKVwiO1xyXG4gICAgfVxyXG4gICAgLy8gbW9kdWxlIHRyYW5zZm9ybXNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGUudHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb2RlID0gc3RhdGUudHJhbnNmb3Jtc1tpXShlbCwgY29kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29kZVxyXG4gIH1cclxufVxyXG5cclxuLy8gaG9pc3Qgc3RhdGljIHN1Yi10cmVlcyBvdXRcclxuZnVuY3Rpb24gZ2VuU3RhdGljIChlbCwgc3RhdGUpIHtcclxuICBlbC5zdGF0aWNQcm9jZXNzZWQgPSB0cnVlO1xyXG4gIHN0YXRlLnN0YXRpY1JlbmRlckZucy5wdXNoKChcIndpdGgodGhpcyl7cmV0dXJuIFwiICsgKGdlbkVsZW1lbnQoZWwsIHN0YXRlKSkgKyBcIn1cIikpO1xyXG4gIHJldHVybiAoXCJfbShcIiArIChzdGF0ZS5zdGF0aWNSZW5kZXJGbnMubGVuZ3RoIC0gMSkgKyAoZWwuc3RhdGljSW5Gb3IgPyAnLHRydWUnIDogJycpICsgXCIpXCIpXHJcbn1cclxuXHJcbi8vIHYtb25jZVxyXG5mdW5jdGlvbiBnZW5PbmNlIChlbCwgc3RhdGUpIHtcclxuICBlbC5vbmNlUHJvY2Vzc2VkID0gdHJ1ZTtcclxuICBpZiAoZWwuaWYgJiYgIWVsLmlmUHJvY2Vzc2VkKSB7XHJcbiAgICByZXR1cm4gZ2VuSWYoZWwsIHN0YXRlKVxyXG4gIH0gZWxzZSBpZiAoZWwuc3RhdGljSW5Gb3IpIHtcclxuICAgIHZhciBrZXkgPSAnJztcclxuICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQ7XHJcbiAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgIGlmIChwYXJlbnQuZm9yKSB7XHJcbiAgICAgICAga2V5ID0gcGFyZW50LmtleTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIWtleSkge1xyXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0YXRlLndhcm4oXHJcbiAgICAgICAgXCJ2LW9uY2UgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgdi1mb3IgdGhhdCBpcyBrZXllZC4gXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGdlbkVsZW1lbnQoZWwsIHN0YXRlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcIl9vKFwiICsgKGdlbkVsZW1lbnQoZWwsIHN0YXRlKSkgKyBcIixcIiArIChzdGF0ZS5vbmNlSWQrKykgKyBcIixcIiArIGtleSArIFwiKVwiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZ2VuU3RhdGljKGVsLCBzdGF0ZSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbklmIChcclxuICBlbCxcclxuICBzdGF0ZSxcclxuICBhbHRHZW4sXHJcbiAgYWx0RW1wdHlcclxuKSB7XHJcbiAgZWwuaWZQcm9jZXNzZWQgPSB0cnVlOyAvLyBhdm9pZCByZWN1cnNpb25cclxuICByZXR1cm4gZ2VuSWZDb25kaXRpb25zKGVsLmlmQ29uZGl0aW9ucy5zbGljZSgpLCBzdGF0ZSwgYWx0R2VuLCBhbHRFbXB0eSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuSWZDb25kaXRpb25zIChcclxuICBjb25kaXRpb25zLFxyXG4gIHN0YXRlLFxyXG4gIGFsdEdlbixcclxuICBhbHRFbXB0eVxyXG4pIHtcclxuICBpZiAoIWNvbmRpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gYWx0RW1wdHkgfHwgJ19lKCknXHJcbiAgfVxyXG5cclxuICB2YXIgY29uZGl0aW9uID0gY29uZGl0aW9ucy5zaGlmdCgpO1xyXG4gIGlmIChjb25kaXRpb24uZXhwKSB7XHJcbiAgICByZXR1cm4gKFwiKFwiICsgKGNvbmRpdGlvbi5leHApICsgXCIpP1wiICsgKGdlblRlcm5hcnlFeHAoY29uZGl0aW9uLmJsb2NrKSkgKyBcIjpcIiArIChnZW5JZkNvbmRpdGlvbnMoY29uZGl0aW9ucywgc3RhdGUsIGFsdEdlbiwgYWx0RW1wdHkpKSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcIlwiICsgKGdlblRlcm5hcnlFeHAoY29uZGl0aW9uLmJsb2NrKSkpXHJcbiAgfVxyXG5cclxuICAvLyB2LWlmIHdpdGggdi1vbmNlIHNob3VsZCBnZW5lcmF0ZSBjb2RlIGxpa2UgKGEpP19tKDApOl9tKDEpXHJcbiAgZnVuY3Rpb24gZ2VuVGVybmFyeUV4cCAoZWwpIHtcclxuICAgIHJldHVybiBhbHRHZW5cclxuICAgICAgPyBhbHRHZW4oZWwsIHN0YXRlKVxyXG4gICAgICA6IGVsLm9uY2VcclxuICAgICAgICA/IGdlbk9uY2UoZWwsIHN0YXRlKVxyXG4gICAgICAgIDogZ2VuRWxlbWVudChlbCwgc3RhdGUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5Gb3IgKFxyXG4gIGVsLFxyXG4gIHN0YXRlLFxyXG4gIGFsdEdlbixcclxuICBhbHRIZWxwZXJcclxuKSB7XHJcbiAgdmFyIGV4cCA9IGVsLmZvcjtcclxuICB2YXIgYWxpYXMgPSBlbC5hbGlhcztcclxuICB2YXIgaXRlcmF0b3IxID0gZWwuaXRlcmF0b3IxID8gKFwiLFwiICsgKGVsLml0ZXJhdG9yMSkpIDogJyc7XHJcbiAgdmFyIGl0ZXJhdG9yMiA9IGVsLml0ZXJhdG9yMiA/IChcIixcIiArIChlbC5pdGVyYXRvcjIpKSA6ICcnO1xyXG5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gICAgc3RhdGUubWF5YmVDb21wb25lbnQoZWwpICYmXHJcbiAgICBlbC50YWcgIT09ICdzbG90JyAmJlxyXG4gICAgZWwudGFnICE9PSAndGVtcGxhdGUnICYmXHJcbiAgICAhZWwua2V5XHJcbiAgKSB7XHJcbiAgICBzdGF0ZS53YXJuKFxyXG4gICAgICBcIjxcIiArIChlbC50YWcpICsgXCIgdi1mb3I9XFxcIlwiICsgYWxpYXMgKyBcIiBpbiBcIiArIGV4cCArIFwiXFxcIj46IGNvbXBvbmVudCBsaXN0cyByZW5kZXJlZCB3aXRoIFwiICtcclxuICAgICAgXCJ2LWZvciBzaG91bGQgaGF2ZSBleHBsaWNpdCBrZXlzLiBcIiArXHJcbiAgICAgIFwiU2VlIGh0dHBzOi8vdnVlanMub3JnL2d1aWRlL2xpc3QuaHRtbCNrZXkgZm9yIG1vcmUgaW5mby5cIixcclxuICAgICAgdHJ1ZSAvKiB0aXAgKi9cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlbC5mb3JQcm9jZXNzZWQgPSB0cnVlOyAvLyBhdm9pZCByZWN1cnNpb25cclxuICByZXR1cm4gKGFsdEhlbHBlciB8fCAnX2wnKSArIFwiKChcIiArIGV4cCArIFwiKSxcIiArXHJcbiAgICBcImZ1bmN0aW9uKFwiICsgYWxpYXMgKyBpdGVyYXRvcjEgKyBpdGVyYXRvcjIgKyBcIil7XCIgK1xyXG4gICAgICBcInJldHVybiBcIiArICgoYWx0R2VuIHx8IGdlbkVsZW1lbnQpKGVsLCBzdGF0ZSkpICtcclxuICAgICd9KSdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuRGF0YSQyIChlbCwgc3RhdGUpIHtcclxuICB2YXIgZGF0YSA9ICd7JztcclxuXHJcbiAgLy8gZGlyZWN0aXZlcyBmaXJzdC5cclxuICAvLyBkaXJlY3RpdmVzIG1heSBtdXRhdGUgdGhlIGVsJ3Mgb3RoZXIgcHJvcGVydGllcyBiZWZvcmUgdGhleSBhcmUgZ2VuZXJhdGVkLlxyXG4gIHZhciBkaXJzID0gZ2VuRGlyZWN0aXZlcyhlbCwgc3RhdGUpO1xyXG4gIGlmIChkaXJzKSB7IGRhdGEgKz0gZGlycyArICcsJzsgfVxyXG5cclxuICAvLyBrZXlcclxuICBpZiAoZWwua2V5KSB7XHJcbiAgICBkYXRhICs9IFwia2V5OlwiICsgKGVsLmtleSkgKyBcIixcIjtcclxuICB9XHJcbiAgLy8gcmVmXHJcbiAgaWYgKGVsLnJlZikge1xyXG4gICAgZGF0YSArPSBcInJlZjpcIiArIChlbC5yZWYpICsgXCIsXCI7XHJcbiAgfVxyXG4gIGlmIChlbC5yZWZJbkZvcikge1xyXG4gICAgZGF0YSArPSBcInJlZkluRm9yOnRydWUsXCI7XHJcbiAgfVxyXG4gIC8vIHByZVxyXG4gIGlmIChlbC5wcmUpIHtcclxuICAgIGRhdGEgKz0gXCJwcmU6dHJ1ZSxcIjtcclxuICB9XHJcbiAgLy8gcmVjb3JkIG9yaWdpbmFsIHRhZyBuYW1lIGZvciBjb21wb25lbnRzIHVzaW5nIFwiaXNcIiBhdHRyaWJ1dGVcclxuICBpZiAoZWwuY29tcG9uZW50KSB7XHJcbiAgICBkYXRhICs9IFwidGFnOlxcXCJcIiArIChlbC50YWcpICsgXCJcXFwiLFwiO1xyXG4gIH1cclxuICAvLyBtb2R1bGUgZGF0YSBnZW5lcmF0aW9uIGZ1bmN0aW9uc1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGUuZGF0YUdlbkZucy5sZW5ndGg7IGkrKykge1xyXG4gICAgZGF0YSArPSBzdGF0ZS5kYXRhR2VuRm5zW2ldKGVsKTtcclxuICB9XHJcbiAgLy8gYXR0cmlidXRlc1xyXG4gIGlmIChlbC5hdHRycykge1xyXG4gICAgZGF0YSArPSBcImF0dHJzOntcIiArIChnZW5Qcm9wcyhlbC5hdHRycykpICsgXCJ9LFwiO1xyXG4gIH1cclxuICAvLyBET00gcHJvcHNcclxuICBpZiAoZWwucHJvcHMpIHtcclxuICAgIGRhdGEgKz0gXCJkb21Qcm9wczp7XCIgKyAoZ2VuUHJvcHMoZWwucHJvcHMpKSArIFwifSxcIjtcclxuICB9XHJcbiAgLy8gZXZlbnQgaGFuZGxlcnNcclxuICBpZiAoZWwuZXZlbnRzKSB7XHJcbiAgICBkYXRhICs9IChnZW5IYW5kbGVycyhlbC5ldmVudHMsIGZhbHNlLCBzdGF0ZS53YXJuKSkgKyBcIixcIjtcclxuICB9XHJcbiAgaWYgKGVsLm5hdGl2ZUV2ZW50cykge1xyXG4gICAgZGF0YSArPSAoZ2VuSGFuZGxlcnMoZWwubmF0aXZlRXZlbnRzLCB0cnVlLCBzdGF0ZS53YXJuKSkgKyBcIixcIjtcclxuICB9XHJcbiAgLy8gc2xvdCB0YXJnZXRcclxuICAvLyBvbmx5IGZvciBub24tc2NvcGVkIHNsb3RzXHJcbiAgaWYgKGVsLnNsb3RUYXJnZXQgJiYgIWVsLnNsb3RTY29wZSkge1xyXG4gICAgZGF0YSArPSBcInNsb3Q6XCIgKyAoZWwuc2xvdFRhcmdldCkgKyBcIixcIjtcclxuICB9XHJcbiAgLy8gc2NvcGVkIHNsb3RzXHJcbiAgaWYgKGVsLnNjb3BlZFNsb3RzKSB7XHJcbiAgICBkYXRhICs9IChnZW5TY29wZWRTbG90cyhlbC5zY29wZWRTbG90cywgc3RhdGUpKSArIFwiLFwiO1xyXG4gIH1cclxuICAvLyBjb21wb25lbnQgdi1tb2RlbFxyXG4gIGlmIChlbC5tb2RlbCkge1xyXG4gICAgZGF0YSArPSBcIm1vZGVsOnt2YWx1ZTpcIiArIChlbC5tb2RlbC52YWx1ZSkgKyBcIixjYWxsYmFjazpcIiArIChlbC5tb2RlbC5jYWxsYmFjaykgKyBcIixleHByZXNzaW9uOlwiICsgKGVsLm1vZGVsLmV4cHJlc3Npb24pICsgXCJ9LFwiO1xyXG4gIH1cclxuICAvLyBpbmxpbmUtdGVtcGxhdGVcclxuICBpZiAoZWwuaW5saW5lVGVtcGxhdGUpIHtcclxuICAgIHZhciBpbmxpbmVUZW1wbGF0ZSA9IGdlbklubGluZVRlbXBsYXRlKGVsLCBzdGF0ZSk7XHJcbiAgICBpZiAoaW5saW5lVGVtcGxhdGUpIHtcclxuICAgICAgZGF0YSArPSBpbmxpbmVUZW1wbGF0ZSArIFwiLFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sJC8sICcnKSArICd9JztcclxuICAvLyB2LWJpbmQgZGF0YSB3cmFwXHJcbiAgaWYgKGVsLndyYXBEYXRhKSB7XHJcbiAgICBkYXRhID0gZWwud3JhcERhdGEoZGF0YSk7XHJcbiAgfVxyXG4gIC8vIHYtb24gZGF0YSB3cmFwXHJcbiAgaWYgKGVsLndyYXBMaXN0ZW5lcnMpIHtcclxuICAgIGRhdGEgPSBlbC53cmFwTGlzdGVuZXJzKGRhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5EaXJlY3RpdmVzIChlbCwgc3RhdGUpIHtcclxuICB2YXIgZGlycyA9IGVsLmRpcmVjdGl2ZXM7XHJcbiAgaWYgKCFkaXJzKSB7IHJldHVybiB9XHJcbiAgdmFyIHJlcyA9ICdkaXJlY3RpdmVzOlsnO1xyXG4gIHZhciBoYXNSdW50aW1lID0gZmFsc2U7XHJcbiAgdmFyIGksIGwsIGRpciwgbmVlZFJ1bnRpbWU7XHJcbiAgZm9yIChpID0gMCwgbCA9IGRpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICBkaXIgPSBkaXJzW2ldO1xyXG4gICAgbmVlZFJ1bnRpbWUgPSB0cnVlO1xyXG4gICAgdmFyIGdlbiA9IHN0YXRlLmRpcmVjdGl2ZXNbZGlyLm5hbWVdO1xyXG4gICAgaWYgKGdlbikge1xyXG4gICAgICAvLyBjb21waWxlLXRpbWUgZGlyZWN0aXZlIHRoYXQgbWFuaXB1bGF0ZXMgQVNULlxyXG4gICAgICAvLyByZXR1cm5zIHRydWUgaWYgaXQgYWxzbyBuZWVkcyBhIHJ1bnRpbWUgY291bnRlcnBhcnQuXHJcbiAgICAgIG5lZWRSdW50aW1lID0gISFnZW4oZWwsIGRpciwgc3RhdGUud2Fybik7XHJcbiAgICB9XHJcbiAgICBpZiAobmVlZFJ1bnRpbWUpIHtcclxuICAgICAgaGFzUnVudGltZSA9IHRydWU7XHJcbiAgICAgIHJlcyArPSBcIntuYW1lOlxcXCJcIiArIChkaXIubmFtZSkgKyBcIlxcXCIscmF3TmFtZTpcXFwiXCIgKyAoZGlyLnJhd05hbWUpICsgXCJcXFwiXCIgKyAoZGlyLnZhbHVlID8gKFwiLHZhbHVlOihcIiArIChkaXIudmFsdWUpICsgXCIpLGV4cHJlc3Npb246XCIgKyAoSlNPTi5zdHJpbmdpZnkoZGlyLnZhbHVlKSkpIDogJycpICsgKGRpci5hcmcgPyAoXCIsYXJnOlxcXCJcIiArIChkaXIuYXJnKSArIFwiXFxcIlwiKSA6ICcnKSArIChkaXIubW9kaWZpZXJzID8gKFwiLG1vZGlmaWVyczpcIiArIChKU09OLnN0cmluZ2lmeShkaXIubW9kaWZpZXJzKSkpIDogJycpICsgXCJ9LFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoaGFzUnVudGltZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zbGljZSgwLCAtMSkgKyAnXSdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbklubGluZVRlbXBsYXRlIChlbCwgc3RhdGUpIHtcclxuICB2YXIgYXN0ID0gZWwuY2hpbGRyZW5bMF07XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKFxyXG4gICAgZWwuY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8IGFzdC50eXBlICE9PSAxXHJcbiAgKSkge1xyXG4gICAgc3RhdGUud2FybignSW5saW5lLXRlbXBsYXRlIGNvbXBvbmVudHMgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGNoaWxkIGVsZW1lbnQuJyk7XHJcbiAgfVxyXG4gIGlmIChhc3QudHlwZSA9PT0gMSkge1xyXG4gICAgdmFyIGlubGluZVJlbmRlckZucyA9IGdlbmVyYXRlKGFzdCwgc3RhdGUub3B0aW9ucyk7XHJcbiAgICByZXR1cm4gKFwiaW5saW5lVGVtcGxhdGU6e3JlbmRlcjpmdW5jdGlvbigpe1wiICsgKGlubGluZVJlbmRlckZucy5yZW5kZXIpICsgXCJ9LHN0YXRpY1JlbmRlckZuczpbXCIgKyAoaW5saW5lUmVuZGVyRm5zLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24gKGNvZGUpIHsgcmV0dXJuIChcImZ1bmN0aW9uKCl7XCIgKyBjb2RlICsgXCJ9XCIpOyB9KS5qb2luKCcsJykpICsgXCJdfVwiKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuU2NvcGVkU2xvdHMgKFxyXG4gIHNsb3RzLFxyXG4gIHN0YXRlXHJcbikge1xyXG4gIHJldHVybiAoXCJzY29wZWRTbG90czpfdShbXCIgKyAoT2JqZWN0LmtleXMoc2xvdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIHJldHVybiBnZW5TY29wZWRTbG90KGtleSwgc2xvdHNba2V5XSwgc3RhdGUpXHJcbiAgICB9KS5qb2luKCcsJykpICsgXCJdKVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5TY29wZWRTbG90IChcclxuICBrZXksXHJcbiAgZWwsXHJcbiAgc3RhdGVcclxuKSB7XHJcbiAgaWYgKGVsLmZvciAmJiAhZWwuZm9yUHJvY2Vzc2VkKSB7XHJcbiAgICByZXR1cm4gZ2VuRm9yU2NvcGVkU2xvdChrZXksIGVsLCBzdGF0ZSlcclxuICB9XHJcbiAgdmFyIGZuID0gXCJmdW5jdGlvbihcIiArIChTdHJpbmcoZWwuc2xvdFNjb3BlKSkgKyBcIil7XCIgK1xyXG4gICAgXCJyZXR1cm4gXCIgKyAoZWwudGFnID09PSAndGVtcGxhdGUnXHJcbiAgICAgID8gZWwuaWZcclxuICAgICAgICA/ICgoZWwuaWYpICsgXCI/XCIgKyAoZ2VuQ2hpbGRyZW4oZWwsIHN0YXRlKSB8fCAndW5kZWZpbmVkJykgKyBcIjp1bmRlZmluZWRcIilcclxuICAgICAgICA6IGdlbkNoaWxkcmVuKGVsLCBzdGF0ZSkgfHwgJ3VuZGVmaW5lZCdcclxuICAgICAgOiBnZW5FbGVtZW50KGVsLCBzdGF0ZSkpICsgXCJ9XCI7XHJcbiAgcmV0dXJuIChcIntrZXk6XCIgKyBrZXkgKyBcIixmbjpcIiArIGZuICsgXCJ9XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkZvclNjb3BlZFNsb3QgKFxyXG4gIGtleSxcclxuICBlbCxcclxuICBzdGF0ZVxyXG4pIHtcclxuICB2YXIgZXhwID0gZWwuZm9yO1xyXG4gIHZhciBhbGlhcyA9IGVsLmFsaWFzO1xyXG4gIHZhciBpdGVyYXRvcjEgPSBlbC5pdGVyYXRvcjEgPyAoXCIsXCIgKyAoZWwuaXRlcmF0b3IxKSkgOiAnJztcclxuICB2YXIgaXRlcmF0b3IyID0gZWwuaXRlcmF0b3IyID8gKFwiLFwiICsgKGVsLml0ZXJhdG9yMikpIDogJyc7XHJcbiAgZWwuZm9yUHJvY2Vzc2VkID0gdHJ1ZTsgLy8gYXZvaWQgcmVjdXJzaW9uXHJcbiAgcmV0dXJuIFwiX2woKFwiICsgZXhwICsgXCIpLFwiICtcclxuICAgIFwiZnVuY3Rpb24oXCIgKyBhbGlhcyArIGl0ZXJhdG9yMSArIGl0ZXJhdG9yMiArIFwiKXtcIiArXHJcbiAgICAgIFwicmV0dXJuIFwiICsgKGdlblNjb3BlZFNsb3Qoa2V5LCBlbCwgc3RhdGUpKSArXHJcbiAgICAnfSknXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkNoaWxkcmVuIChcclxuICBlbCxcclxuICBzdGF0ZSxcclxuICBjaGVja1NraXAsXHJcbiAgYWx0R2VuRWxlbWVudCxcclxuICBhbHRHZW5Ob2RlXHJcbikge1xyXG4gIHZhciBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xyXG4gIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgIHZhciBlbCQxID0gY2hpbGRyZW5bMF07XHJcbiAgICAvLyBvcHRpbWl6ZSBzaW5nbGUgdi1mb3JcclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcclxuICAgICAgZWwkMS5mb3IgJiZcclxuICAgICAgZWwkMS50YWcgIT09ICd0ZW1wbGF0ZScgJiZcclxuICAgICAgZWwkMS50YWcgIT09ICdzbG90J1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAoYWx0R2VuRWxlbWVudCB8fCBnZW5FbGVtZW50KShlbCQxLCBzdGF0ZSlcclxuICAgIH1cclxuICAgIHZhciBub3JtYWxpemF0aW9uVHlwZSA9IGNoZWNrU2tpcFxyXG4gICAgICA/IGdldE5vcm1hbGl6YXRpb25UeXBlKGNoaWxkcmVuLCBzdGF0ZS5tYXliZUNvbXBvbmVudClcclxuICAgICAgOiAwO1xyXG4gICAgdmFyIGdlbiA9IGFsdEdlbk5vZGUgfHwgZ2VuTm9kZTtcclxuICAgIHJldHVybiAoXCJbXCIgKyAoY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBnZW4oYywgc3RhdGUpOyB9KS5qb2luKCcsJykpICsgXCJdXCIgKyAobm9ybWFsaXphdGlvblR5cGUgPyAoXCIsXCIgKyBub3JtYWxpemF0aW9uVHlwZSkgOiAnJykpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBkZXRlcm1pbmUgdGhlIG5vcm1hbGl6YXRpb24gbmVlZGVkIGZvciB0aGUgY2hpbGRyZW4gYXJyYXkuXHJcbi8vIDA6IG5vIG5vcm1hbGl6YXRpb24gbmVlZGVkXHJcbi8vIDE6IHNpbXBsZSBub3JtYWxpemF0aW9uIG5lZWRlZCAocG9zc2libGUgMS1sZXZlbCBkZWVwIG5lc3RlZCBhcnJheSlcclxuLy8gMjogZnVsbCBub3JtYWxpemF0aW9uIG5lZWRlZFxyXG5mdW5jdGlvbiBnZXROb3JtYWxpemF0aW9uVHlwZSAoXHJcbiAgY2hpbGRyZW4sXHJcbiAgbWF5YmVDb21wb25lbnRcclxuKSB7XHJcbiAgdmFyIHJlcyA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGVsID0gY2hpbGRyZW5baV07XHJcbiAgICBpZiAoZWwudHlwZSAhPT0gMSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgaWYgKG5lZWRzTm9ybWFsaXphdGlvbihlbCkgfHxcclxuICAgICAgICAoZWwuaWZDb25kaXRpb25zICYmIGVsLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZWVkc05vcm1hbGl6YXRpb24oYy5ibG9jayk7IH0pKSkge1xyXG4gICAgICByZXMgPSAyO1xyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgaWYgKG1heWJlQ29tcG9uZW50KGVsKSB8fFxyXG4gICAgICAgIChlbC5pZkNvbmRpdGlvbnMgJiYgZWwuaWZDb25kaXRpb25zLnNvbWUoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1heWJlQ29tcG9uZW50KGMuYmxvY2spOyB9KSkpIHtcclxuICAgICAgcmVzID0gMTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZWVkc05vcm1hbGl6YXRpb24gKGVsKSB7XHJcbiAgcmV0dXJuIGVsLmZvciAhPT0gdW5kZWZpbmVkIHx8IGVsLnRhZyA9PT0gJ3RlbXBsYXRlJyB8fCBlbC50YWcgPT09ICdzbG90J1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5Ob2RlIChub2RlLCBzdGF0ZSkge1xyXG4gIGlmIChub2RlLnR5cGUgPT09IDEpIHtcclxuICAgIHJldHVybiBnZW5FbGVtZW50KG5vZGUsIHN0YXRlKVxyXG4gIH0gaWYgKG5vZGUudHlwZSA9PT0gMyAmJiBub2RlLmlzQ29tbWVudCkge1xyXG4gICAgcmV0dXJuIGdlbkNvbW1lbnQobm9kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGdlblRleHQobm9kZSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlblRleHQgKHRleHQpIHtcclxuICByZXR1cm4gKFwiX3YoXCIgKyAodGV4dC50eXBlID09PSAyXHJcbiAgICA/IHRleHQuZXhwcmVzc2lvbiAvLyBubyBuZWVkIGZvciAoKSBiZWNhdXNlIGFscmVhZHkgd3JhcHBlZCBpbiBfcygpXHJcbiAgICA6IHRyYW5zZm9ybVNwZWNpYWxOZXdsaW5lcyhKU09OLnN0cmluZ2lmeSh0ZXh0LnRleHQpKSkgKyBcIilcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuQ29tbWVudCAoY29tbWVudCkge1xyXG4gIHJldHVybiAoXCJfZShcIiArIChKU09OLnN0cmluZ2lmeShjb21tZW50LnRleHQpKSArIFwiKVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5TbG90IChlbCwgc3RhdGUpIHtcclxuICB2YXIgc2xvdE5hbWUgPSBlbC5zbG90TmFtZSB8fCAnXCJkZWZhdWx0XCInO1xyXG4gIHZhciBjaGlsZHJlbiA9IGdlbkNoaWxkcmVuKGVsLCBzdGF0ZSk7XHJcbiAgdmFyIHJlcyA9IFwiX3QoXCIgKyBzbG90TmFtZSArIChjaGlsZHJlbiA/IChcIixcIiArIGNoaWxkcmVuKSA6ICcnKTtcclxuICB2YXIgYXR0cnMgPSBlbC5hdHRycyAmJiAoXCJ7XCIgKyAoZWwuYXR0cnMubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiAoKGNhbWVsaXplKGEubmFtZSkpICsgXCI6XCIgKyAoYS52YWx1ZSkpOyB9KS5qb2luKCcsJykpICsgXCJ9XCIpO1xyXG4gIHZhciBiaW5kJCQxID0gZWwuYXR0cnNNYXBbJ3YtYmluZCddO1xyXG4gIGlmICgoYXR0cnMgfHwgYmluZCQkMSkgJiYgIWNoaWxkcmVuKSB7XHJcbiAgICByZXMgKz0gXCIsbnVsbFwiO1xyXG4gIH1cclxuICBpZiAoYXR0cnMpIHtcclxuICAgIHJlcyArPSBcIixcIiArIGF0dHJzO1xyXG4gIH1cclxuICBpZiAoYmluZCQkMSkge1xyXG4gICAgcmVzICs9IChhdHRycyA/ICcnIDogJyxudWxsJykgKyBcIixcIiArIGJpbmQkJDE7XHJcbiAgfVxyXG4gIHJldHVybiByZXMgKyAnKSdcclxufVxyXG5cclxuLy8gY29tcG9uZW50TmFtZSBpcyBlbC5jb21wb25lbnQsIHRha2UgaXQgYXMgYXJndW1lbnQgdG8gc2h1biBmbG93J3MgcGVzc2ltaXN0aWMgcmVmaW5lbWVudFxyXG5mdW5jdGlvbiBnZW5Db21wb25lbnQgKFxyXG4gIGNvbXBvbmVudE5hbWUsXHJcbiAgZWwsXHJcbiAgc3RhdGVcclxuKSB7XHJcbiAgdmFyIGNoaWxkcmVuID0gZWwuaW5saW5lVGVtcGxhdGUgPyBudWxsIDogZ2VuQ2hpbGRyZW4oZWwsIHN0YXRlLCB0cnVlKTtcclxuICByZXR1cm4gKFwiX2MoXCIgKyBjb21wb25lbnROYW1lICsgXCIsXCIgKyAoZ2VuRGF0YSQyKGVsLCBzdGF0ZSkpICsgKGNoaWxkcmVuID8gKFwiLFwiICsgY2hpbGRyZW4pIDogJycpICsgXCIpXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlblByb3BzIChwcm9wcykge1xyXG4gIHZhciByZXMgPSAnJztcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICB7XHJcbiAgICAgIHJlcyArPSBcIlxcXCJcIiArIChwcm9wLm5hbWUpICsgXCJcXFwiOlwiICsgKHRyYW5zZm9ybVNwZWNpYWxOZXdsaW5lcyhwcm9wLnZhbHVlKSkgKyBcIixcIjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zbGljZSgwLCAtMSlcclxufVxyXG5cclxuLy8gIzM4OTUsICM0MjY4XHJcbmZ1bmN0aW9uIHRyYW5zZm9ybVNwZWNpYWxOZXdsaW5lcyAodGV4dCkge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JylcclxuICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbi8vIHRoZXNlIGtleXdvcmRzIHNob3VsZCBub3QgYXBwZWFyIGluc2lkZSBleHByZXNzaW9ucywgYnV0IG9wZXJhdG9ycyBsaWtlXHJcbi8vIHR5cGVvZiwgaW5zdGFuY2VvZiBhbmQgaW4gYXJlIGFsbG93ZWRcclxudmFyIHByb2hpYml0ZWRLZXl3b3JkUkUgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoXHJcbiAgJ2RvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3QsJyArXHJcbiAgJ3N1cGVyLHRocm93LHdoaWxlLHlpZWxkLGRlbGV0ZSxleHBvcnQsaW1wb3J0LHJldHVybixzd2l0Y2gsZGVmYXVsdCwnICtcclxuICAnZXh0ZW5kcyxmaW5hbGx5LGNvbnRpbnVlLGRlYnVnZ2VyLGZ1bmN0aW9uLGFyZ3VtZW50cydcclxuKS5zcGxpdCgnLCcpLmpvaW4oJ1xcXFxifFxcXFxiJykgKyAnXFxcXGInKTtcclxuXHJcbi8vIHRoZXNlIHVuYXJ5IG9wZXJhdG9ycyBzaG91bGQgbm90IGJlIHVzZWQgYXMgcHJvcGVydHkvbWV0aG9kIG5hbWVzXHJcbnZhciB1bmFyeU9wZXJhdG9yc1JFID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgKFxyXG4gICdkZWxldGUsdHlwZW9mLHZvaWQnXHJcbikuc3BsaXQoJywnKS5qb2luKCdcXFxccypcXFxcKFteXFxcXCldKlxcXFwpfFxcXFxiJykgKyAnXFxcXHMqXFxcXChbXlxcXFwpXSpcXFxcKScpO1xyXG5cclxuLy8gc3RyaXAgc3RyaW5ncyBpbiBleHByZXNzaW9uc1xyXG52YXIgc3RyaXBTdHJpbmdSRSA9IC8nKD86W14nXFxcXF18XFxcXC4pKid8XCIoPzpbXlwiXFxcXF18XFxcXC4pKlwifGAoPzpbXmBcXFxcXXxcXFxcLikqXFwkXFx7fFxcfSg/OlteYFxcXFxdfFxcXFwuKSpgfGAoPzpbXmBcXFxcXXxcXFxcLikqYC9nO1xyXG5cclxuLy8gZGV0ZWN0IHByb2JsZW1hdGljIGV4cHJlc3Npb25zIGluIGEgdGVtcGxhdGVcclxuZnVuY3Rpb24gZGV0ZWN0RXJyb3JzIChhc3QpIHtcclxuICB2YXIgZXJyb3JzID0gW107XHJcbiAgaWYgKGFzdCkge1xyXG4gICAgY2hlY2tOb2RlKGFzdCwgZXJyb3JzKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yc1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja05vZGUgKG5vZGUsIGVycm9ycykge1xyXG4gIGlmIChub2RlLnR5cGUgPT09IDEpIHtcclxuICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5hdHRyc01hcCkge1xyXG4gICAgICBpZiAoZGlyUkUudGVzdChuYW1lKSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IG5vZGUuYXR0cnNNYXBbbmFtZV07XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAobmFtZSA9PT0gJ3YtZm9yJykge1xyXG4gICAgICAgICAgICBjaGVja0Zvcihub2RlLCAoXCJ2LWZvcj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKSwgZXJyb3JzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAob25SRS50ZXN0KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNoZWNrRXZlbnQodmFsdWUsIChuYW1lICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIiksIGVycm9ycyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja0V4cHJlc3Npb24odmFsdWUsIChuYW1lICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIiksIGVycm9ycyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjaGVja05vZGUobm9kZS5jaGlsZHJlbltpXSwgZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAyKSB7XHJcbiAgICBjaGVja0V4cHJlc3Npb24obm9kZS5leHByZXNzaW9uLCBub2RlLnRleHQsIGVycm9ycyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0V2ZW50IChleHAsIHRleHQsIGVycm9ycykge1xyXG4gIHZhciBzdGlwcGVkID0gZXhwLnJlcGxhY2Uoc3RyaXBTdHJpbmdSRSwgJycpO1xyXG4gIHZhciBrZXl3b3JkTWF0Y2ggPSBzdGlwcGVkLm1hdGNoKHVuYXJ5T3BlcmF0b3JzUkUpO1xyXG4gIGlmIChrZXl3b3JkTWF0Y2ggJiYgc3RpcHBlZC5jaGFyQXQoa2V5d29yZE1hdGNoLmluZGV4IC0gMSkgIT09ICckJykge1xyXG4gICAgZXJyb3JzLnB1c2goXHJcbiAgICAgIFwiYXZvaWQgdXNpbmcgSmF2YVNjcmlwdCB1bmFyeSBvcGVyYXRvciBhcyBwcm9wZXJ0eSBuYW1lOiBcIiArXHJcbiAgICAgIFwiXFxcIlwiICsgKGtleXdvcmRNYXRjaFswXSkgKyBcIlxcXCIgaW4gZXhwcmVzc2lvbiBcIiArICh0ZXh0LnRyaW0oKSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGNoZWNrRXhwcmVzc2lvbihleHAsIHRleHQsIGVycm9ycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yIChub2RlLCB0ZXh0LCBlcnJvcnMpIHtcclxuICBjaGVja0V4cHJlc3Npb24obm9kZS5mb3IgfHwgJycsIHRleHQsIGVycm9ycyk7XHJcbiAgY2hlY2tJZGVudGlmaWVyKG5vZGUuYWxpYXMsICd2LWZvciBhbGlhcycsIHRleHQsIGVycm9ycyk7XHJcbiAgY2hlY2tJZGVudGlmaWVyKG5vZGUuaXRlcmF0b3IxLCAndi1mb3IgaXRlcmF0b3InLCB0ZXh0LCBlcnJvcnMpO1xyXG4gIGNoZWNrSWRlbnRpZmllcihub2RlLml0ZXJhdG9yMiwgJ3YtZm9yIGl0ZXJhdG9yJywgdGV4dCwgZXJyb3JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZGVudGlmaWVyIChcclxuICBpZGVudCxcclxuICB0eXBlLFxyXG4gIHRleHQsXHJcbiAgZXJyb3JzXHJcbikge1xyXG4gIGlmICh0eXBlb2YgaWRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBuZXcgRnVuY3Rpb24oKFwidmFyIFwiICsgaWRlbnQgKyBcIj1fXCIpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZXJyb3JzLnB1c2goKFwiaW52YWxpZCBcIiArIHR5cGUgKyBcIiBcXFwiXCIgKyBpZGVudCArIFwiXFxcIiBpbiBleHByZXNzaW9uOiBcIiArICh0ZXh0LnRyaW0oKSkpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRXhwcmVzc2lvbiAoZXhwLCB0ZXh0LCBlcnJvcnMpIHtcclxuICB0cnkge1xyXG4gICAgbmV3IEZ1bmN0aW9uKChcInJldHVybiBcIiArIGV4cCkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHZhciBrZXl3b3JkTWF0Y2ggPSBleHAucmVwbGFjZShzdHJpcFN0cmluZ1JFLCAnJykubWF0Y2gocHJvaGliaXRlZEtleXdvcmRSRSk7XHJcbiAgICBpZiAoa2V5d29yZE1hdGNoKSB7XHJcbiAgICAgIGVycm9ycy5wdXNoKFxyXG4gICAgICAgIFwiYXZvaWQgdXNpbmcgSmF2YVNjcmlwdCBrZXl3b3JkIGFzIHByb3BlcnR5IG5hbWU6IFwiICtcclxuICAgICAgICBcIlxcXCJcIiArIChrZXl3b3JkTWF0Y2hbMF0pICsgXCJcXFwiXFxuICBSYXcgZXhwcmVzc2lvbjogXCIgKyAodGV4dC50cmltKCkpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvcnMucHVzaChcclxuICAgICAgICBcImludmFsaWQgZXhwcmVzc2lvbjogXCIgKyAoZS5tZXNzYWdlKSArIFwiIGluXFxuXFxuXCIgK1xyXG4gICAgICAgIFwiICAgIFwiICsgZXhwICsgXCJcXG5cXG5cIiArXHJcbiAgICAgICAgXCIgIFJhdyBleHByZXNzaW9uOiBcIiArICh0ZXh0LnRyaW0oKSkgKyBcIlxcblwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uIChjb2RlLCBlcnJvcnMpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihjb2RlKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZXJyb3JzLnB1c2goeyBlcnI6IGVyciwgY29kZTogY29kZSB9KTtcclxuICAgIHJldHVybiBub29wXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21waWxlVG9GdW5jdGlvbkZuIChjb21waWxlKSB7XHJcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBpbGVUb0Z1bmN0aW9ucyAoXHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIG9wdGlvbnMsXHJcbiAgICB2bVxyXG4gICkge1xyXG4gICAgb3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgd2FybiQkMSA9IG9wdGlvbnMud2FybiB8fCB3YXJuO1xyXG4gICAgZGVsZXRlIG9wdGlvbnMud2FybjtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIC8vIGRldGVjdCBwb3NzaWJsZSBDU1AgcmVzdHJpY3Rpb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBuZXcgRnVuY3Rpb24oJ3JldHVybiAxJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoZS50b1N0cmluZygpLm1hdGNoKC91bnNhZmUtZXZhbHxDU1AvKSkge1xyXG4gICAgICAgICAgd2FybiQkMShcclxuICAgICAgICAgICAgJ0l0IHNlZW1zIHlvdSBhcmUgdXNpbmcgdGhlIHN0YW5kYWxvbmUgYnVpbGQgb2YgVnVlLmpzIGluIGFuICcgK1xyXG4gICAgICAgICAgICAnZW52aXJvbm1lbnQgd2l0aCBDb250ZW50IFNlY3VyaXR5IFBvbGljeSB0aGF0IHByb2hpYml0cyB1bnNhZmUtZXZhbC4gJyArXHJcbiAgICAgICAgICAgICdUaGUgdGVtcGxhdGUgY29tcGlsZXIgY2Fubm90IHdvcmsgaW4gdGhpcyBlbnZpcm9ubWVudC4gQ29uc2lkZXIgJyArXHJcbiAgICAgICAgICAgICdyZWxheGluZyB0aGUgcG9saWN5IHRvIGFsbG93IHVuc2FmZS1ldmFsIG9yIHByZS1jb21waWxpbmcgeW91ciAnICtcclxuICAgICAgICAgICAgJ3RlbXBsYXRlcyBpbnRvIHJlbmRlciBmdW5jdGlvbnMuJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBjYWNoZVxyXG4gICAgdmFyIGtleSA9IG9wdGlvbnMuZGVsaW1pdGVyc1xyXG4gICAgICA/IFN0cmluZyhvcHRpb25zLmRlbGltaXRlcnMpICsgdGVtcGxhdGVcclxuICAgICAgOiB0ZW1wbGF0ZTtcclxuICAgIGlmIChjYWNoZVtrZXldKSB7XHJcbiAgICAgIHJldHVybiBjYWNoZVtrZXldXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGlsZVxyXG4gICAgdmFyIGNvbXBpbGVkID0gY29tcGlsZSh0ZW1wbGF0ZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gY2hlY2sgY29tcGlsYXRpb24gZXJyb3JzL3RpcHNcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGlmIChjb21waWxlZC5lcnJvcnMgJiYgY29tcGlsZWQuZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgIHdhcm4kJDEoXHJcbiAgICAgICAgICBcIkVycm9yIGNvbXBpbGluZyB0ZW1wbGF0ZTpcXG5cXG5cIiArIHRlbXBsYXRlICsgXCJcXG5cXG5cIiArXHJcbiAgICAgICAgICBjb21waWxlZC5lcnJvcnMubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiAoXCItIFwiICsgZSk7IH0pLmpvaW4oJ1xcbicpICsgJ1xcbicsXHJcbiAgICAgICAgICB2bVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbXBpbGVkLnRpcHMgJiYgY29tcGlsZWQudGlwcy5sZW5ndGgpIHtcclxuICAgICAgICBjb21waWxlZC50aXBzLmZvckVhY2goZnVuY3Rpb24gKG1zZykgeyByZXR1cm4gdGlwKG1zZywgdm0pOyB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHR1cm4gY29kZSBpbnRvIGZ1bmN0aW9uc1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG4gICAgdmFyIGZuR2VuRXJyb3JzID0gW107XHJcbiAgICByZXMucmVuZGVyID0gY3JlYXRlRnVuY3Rpb24oY29tcGlsZWQucmVuZGVyLCBmbkdlbkVycm9ycyk7XHJcbiAgICByZXMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWQuc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb24oY29kZSwgZm5HZW5FcnJvcnMpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaGVjayBmdW5jdGlvbiBnZW5lcmF0aW9uIGVycm9ycy5cclxuICAgIC8vIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIGlmIHRoZXJlIGlzIGEgYnVnIGluIHRoZSBjb21waWxlciBpdHNlbGYuXHJcbiAgICAvLyBtb3N0bHkgZm9yIGNvZGVnZW4gZGV2ZWxvcG1lbnQgdXNlXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGlmICgoIWNvbXBpbGVkLmVycm9ycyB8fCAhY29tcGlsZWQuZXJyb3JzLmxlbmd0aCkgJiYgZm5HZW5FcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgd2FybiQkMShcclxuICAgICAgICAgIFwiRmFpbGVkIHRvIGdlbmVyYXRlIHJlbmRlciBmdW5jdGlvbjpcXG5cXG5cIiArXHJcbiAgICAgICAgICBmbkdlbkVycm9ycy5tYXAoZnVuY3Rpb24gKHJlZikge1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gcmVmLmVycjtcclxuICAgICAgICAgICAgdmFyIGNvZGUgPSByZWYuY29kZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKGVyci50b1N0cmluZygpKSArIFwiIGluXFxuXFxuXCIgKyBjb2RlICsgXCJcXG5cIik7XHJcbiAgICAgICAgfSkuam9pbignXFxuJyksXHJcbiAgICAgICAgICB2bVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGNhY2hlW2tleV0gPSByZXMpXHJcbiAgfVxyXG59XHJcblxyXG4vKiAgKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBpbGVyQ3JlYXRvciAoYmFzZUNvbXBpbGUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQ29tcGlsZXIgKGJhc2VPcHRpb25zKSB7XHJcbiAgICBmdW5jdGlvbiBjb21waWxlIChcclxuICAgICAgdGVtcGxhdGUsXHJcbiAgICAgIG9wdGlvbnNcclxuICAgICkge1xyXG4gICAgICB2YXIgZmluYWxPcHRpb25zID0gT2JqZWN0LmNyZWF0ZShiYXNlT3B0aW9ucyk7XHJcbiAgICAgIHZhciBlcnJvcnMgPSBbXTtcclxuICAgICAgdmFyIHRpcHMgPSBbXTtcclxuICAgICAgZmluYWxPcHRpb25zLndhcm4gPSBmdW5jdGlvbiAobXNnLCB0aXApIHtcclxuICAgICAgICAodGlwID8gdGlwcyA6IGVycm9ycykucHVzaChtc2cpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAvLyBtZXJnZSBjdXN0b20gbW9kdWxlc1xyXG4gICAgICAgIGlmIChvcHRpb25zLm1vZHVsZXMpIHtcclxuICAgICAgICAgIGZpbmFsT3B0aW9ucy5tb2R1bGVzID1cclxuICAgICAgICAgICAgKGJhc2VPcHRpb25zLm1vZHVsZXMgfHwgW10pLmNvbmNhdChvcHRpb25zLm1vZHVsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtZXJnZSBjdXN0b20gZGlyZWN0aXZlc1xyXG4gICAgICAgIGlmIChvcHRpb25zLmRpcmVjdGl2ZXMpIHtcclxuICAgICAgICAgIGZpbmFsT3B0aW9ucy5kaXJlY3RpdmVzID0gZXh0ZW5kKFxyXG4gICAgICAgICAgICBPYmplY3QuY3JlYXRlKGJhc2VPcHRpb25zLmRpcmVjdGl2ZXMgfHwgbnVsbCksXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGlyZWN0aXZlc1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29weSBvdGhlciBvcHRpb25zXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgIGlmIChrZXkgIT09ICdtb2R1bGVzJyAmJiBrZXkgIT09ICdkaXJlY3RpdmVzJykge1xyXG4gICAgICAgICAgICBmaW5hbE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjb21waWxlZCA9IGJhc2VDb21waWxlKHRlbXBsYXRlLCBmaW5hbE9wdGlvbnMpO1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGVycm9ycy5wdXNoLmFwcGx5KGVycm9ycywgZGV0ZWN0RXJyb3JzKGNvbXBpbGVkLmFzdCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbXBpbGVkLmVycm9ycyA9IGVycm9ycztcclxuICAgICAgY29tcGlsZWQudGlwcyA9IHRpcHM7XHJcbiAgICAgIHJldHVybiBjb21waWxlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbXBpbGU6IGNvbXBpbGUsXHJcbiAgICAgIGNvbXBpbGVUb0Z1bmN0aW9uczogY3JlYXRlQ29tcGlsZVRvRnVuY3Rpb25Gbihjb21waWxlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogICovXHJcblxyXG4vLyBgY3JlYXRlQ29tcGlsZXJDcmVhdG9yYCBhbGxvd3MgY3JlYXRpbmcgY29tcGlsZXJzIHRoYXQgdXNlIGFsdGVybmF0aXZlXHJcbi8vIHBhcnNlci9vcHRpbWl6ZXIvY29kZWdlbiwgZS5nIHRoZSBTU1Igb3B0aW1pemluZyBjb21waWxlci5cclxuLy8gSGVyZSB3ZSBqdXN0IGV4cG9ydCBhIGRlZmF1bHQgY29tcGlsZXIgdXNpbmcgdGhlIGRlZmF1bHQgcGFydHMuXHJcbnZhciBjcmVhdGVDb21waWxlciA9IGNyZWF0ZUNvbXBpbGVyQ3JlYXRvcihmdW5jdGlvbiBiYXNlQ29tcGlsZSAoXHJcbiAgdGVtcGxhdGUsXHJcbiAgb3B0aW9uc1xyXG4pIHtcclxuICB2YXIgYXN0ID0gcGFyc2UodGVtcGxhdGUudHJpbSgpLCBvcHRpb25zKTtcclxuICBpZiAob3B0aW9ucy5vcHRpbWl6ZSAhPT0gZmFsc2UpIHtcclxuICAgIG9wdGltaXplKGFzdCwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIHZhciBjb2RlID0gZ2VuZXJhdGUoYXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgYXN0OiBhc3QsXHJcbiAgICByZW5kZXI6IGNvZGUucmVuZGVyLFxyXG4gICAgc3RhdGljUmVuZGVyRm5zOiBjb2RlLnN0YXRpY1JlbmRlckZuc1xyXG4gIH1cclxufSk7XHJcblxyXG4vKiAgKi9cclxuXHJcbnZhciByZWYkMSA9IGNyZWF0ZUNvbXBpbGVyKGJhc2VPcHRpb25zKTtcclxudmFyIGNvbXBpbGVUb0Z1bmN0aW9ucyA9IHJlZiQxLmNvbXBpbGVUb0Z1bmN0aW9ucztcclxuXHJcbi8qICAqL1xyXG5cclxuLy8gY2hlY2sgd2hldGhlciBjdXJyZW50IGJyb3dzZXIgZW5jb2RlcyBhIGNoYXIgaW5zaWRlIGF0dHJpYnV0ZSB2YWx1ZXNcclxudmFyIGRpdjtcclxuZnVuY3Rpb24gZ2V0U2hvdWxkRGVjb2RlIChocmVmKSB7XHJcbiAgZGl2ID0gZGl2IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pbm5lckhUTUwgPSBocmVmID8gXCI8YSBocmVmPVxcXCJcXG5cXFwiLz5cIiA6IFwiPGRpdiBhPVxcXCJcXG5cXFwiLz5cIjtcclxuICByZXR1cm4gZGl2LmlubmVySFRNTC5pbmRleE9mKCcmIzEwOycpID4gMFxyXG59XHJcblxyXG4vLyAjMzY2MzogSUUgZW5jb2RlcyBuZXdsaW5lcyBpbnNpZGUgYXR0cmlidXRlIHZhbHVlcyB3aGlsZSBvdGhlciBicm93c2VycyBkb24ndFxyXG52YXIgc2hvdWxkRGVjb2RlTmV3bGluZXMgPSBpbkJyb3dzZXIgPyBnZXRTaG91bGREZWNvZGUoZmFsc2UpIDogZmFsc2U7XHJcbi8vICM2ODI4OiBjaHJvbWUgZW5jb2RlcyBjb250ZW50IGluIGFbaHJlZl1cclxudmFyIHNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZiA9IGluQnJvd3NlciA/IGdldFNob3VsZERlY29kZSh0cnVlKSA6IGZhbHNlO1xyXG5cclxuLyogICovXHJcblxyXG52YXIgaWRUb1RlbXBsYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChpZCkge1xyXG4gIHZhciBlbCA9IHF1ZXJ5KGlkKTtcclxuICByZXR1cm4gZWwgJiYgZWwuaW5uZXJIVE1MXHJcbn0pO1xyXG5cclxudmFyIG1vdW50ID0gVnVlLnByb3RvdHlwZS4kbW91bnQ7XHJcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKFxyXG4gIGVsLFxyXG4gIGh5ZHJhdGluZ1xyXG4pIHtcclxuICBlbCA9IGVsICYmIHF1ZXJ5KGVsKTtcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5IHx8IGVsID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcclxuICAgICAgXCJEbyBub3QgbW91bnQgVnVlIHRvIDxodG1sPiBvciA8Ym9keT4gLSBtb3VudCB0byBub3JtYWwgZWxlbWVudHMgaW5zdGVhZC5cIlxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnM7XHJcbiAgLy8gcmVzb2x2ZSB0ZW1wbGF0ZS9lbCBhbmQgY29udmVydCB0byByZW5kZXIgZnVuY3Rpb25cclxuICBpZiAoIW9wdGlvbnMucmVuZGVyKSB7XHJcbiAgICB2YXIgdGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xyXG4gICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlLmNoYXJBdCgwKSA9PT0gJyMnKSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IGlkVG9UZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgICAgIChcIlRlbXBsYXRlIGVsZW1lbnQgbm90IGZvdW5kIG9yIGlzIGVtcHR5OiBcIiArIChvcHRpb25zLnRlbXBsYXRlKSksXHJcbiAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZS5ub2RlVHlwZSkge1xyXG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICB3YXJuKCdpbnZhbGlkIHRlbXBsYXRlIG9wdGlvbjonICsgdGVtcGxhdGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGVsKSB7XHJcbiAgICAgIHRlbXBsYXRlID0gZ2V0T3V0ZXJIVE1MKGVsKTtcclxuICAgIH1cclxuICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcclxuICAgICAgICBtYXJrKCdjb21waWxlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZWYgPSBjb21waWxlVG9GdW5jdGlvbnModGVtcGxhdGUsIHtcclxuICAgICAgICBzaG91bGREZWNvZGVOZXdsaW5lczogc2hvdWxkRGVjb2RlTmV3bGluZXMsXHJcbiAgICAgICAgc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOiBzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYsXHJcbiAgICAgICAgZGVsaW1pdGVyczogb3B0aW9ucy5kZWxpbWl0ZXJzLFxyXG4gICAgICAgIGNvbW1lbnRzOiBvcHRpb25zLmNvbW1lbnRzXHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcclxuICAgICAgdmFyIHN0YXRpY1JlbmRlckZucyA9IHJlZi5zdGF0aWNSZW5kZXJGbnM7XHJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyO1xyXG4gICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZucztcclxuXHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xyXG4gICAgICAgIG1hcmsoJ2NvbXBpbGUgZW5kJyk7XHJcbiAgICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyAodGhpcy5fbmFtZSkgKyBcIiBjb21waWxlXCIpLCAnY29tcGlsZScsICdjb21waWxlIGVuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtb3VudC5jYWxsKHRoaXMsIGVsLCBoeWRyYXRpbmcpXHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IG91dGVySFRNTCBvZiBlbGVtZW50cywgdGFraW5nIGNhcmVcclxuICogb2YgU1ZHIGVsZW1lbnRzIGluIElFIGFzIHdlbGwuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPdXRlckhUTUwgKGVsKSB7XHJcbiAgaWYgKGVsLm91dGVySFRNTCkge1xyXG4gICAgcmV0dXJuIGVsLm91dGVySFRNTFxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MXHJcbiAgfVxyXG59XHJcblxyXG5WdWUuY29tcGlsZSA9IGNvbXBpbGVUb0Z1bmN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLmVzbS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=