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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common/hoge/Base.js":
/*!************************************!*\
  !*** ./src/js/common/hoge/Base.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Base
 */
var Base =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function Base(name) {
    _classCallCheck(this, Base);

    // props
    this.name = name;
  }
  /**
   * setup
   * @return {[type]} [description]
   */


  _createClass(Base, [{
    key: "setup",
    value: function setup() {
      console.log('super : ' + this.name);
    }
    /**
     * update
     * @return {[type]} [description]
     */

  }, {
    key: "update",
    value: function update() {}
  }]);

  return Base;
}();



/***/ }),

/***/ "./src/js/common/hoge/Child.js":
/*!*************************************!*\
  !*** ./src/js/common/hoge/Child.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Child; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/js/common/hoge/Base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @class Child
 * @extend Base
 */

var Child =
/*#__PURE__*/
function (_Base) {
  _inherits(Child, _Base);

  /**
   * constructor
   * @param  {[type]} name [description]
   * @param  {[type]} num [description]
   * @return {[type]}      [description]
   */
  function Child(name, num) {
    var _this;

    _classCallCheck(this, Child);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));
    _this.num = num;
    return _this;
  }
  /**
   * @override
   * setup
   * @return {[type]} [description]
   */


  _createClass(Child, [{
    key: "setup",
    value: function setup() {
      _get(_getPrototypeOf(Child.prototype), "setup", this).call(this);

      console.log('child : ' + this.name + this.num);
    }
  }]);

  return Child;
}(_Base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/common/index.js":
/*!********************************!*\
  !*** ./src/js/common/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoge_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoge/Base */ "./src/js/common/hoge/Base.js");
/* harmony import */ var _hoge_Child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoge/Child */ "./src/js/common/hoge/Child.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/js/common/utils/utils.js");
/**
 * scripts.js エントリポイント
 */
// libs
// npm moduleで配布されていないライブラリの場合は、requireでバンドル化
// コード参考用 jQuery
// window.$ = window.jQuery = require("./libs/jquery-3.1.0.min.js");
// console.log(jQuery);
// import $ from "jquery";
// import INK from "ink-javascript";
// require("ink-javascript/dist/ink-0.0.1.min.js");
// app-es


 // import glsl from "glslify";
// const myFragShader = glsl(`
// void main () {
//   gl_FragColor = vec4(1.);
// }
// `);
// console.log(myFragShader);
// var shader = require("../shader/common/default.frag");
// console.log(shader);

/*==========================================================================
	init call
==========================================================================*/

$(function ($) {
  var base = new _hoge_Base__WEBPACK_IMPORTED_MODULE_0__["default"]('Base');
  var child = new _hoge_Child__WEBPACK_IMPORTED_MODULE_1__["default"]('Child', 999);
  _utils_utils__WEBPACK_IMPORTED_MODULE_2__["template"]();
  console.log(INK.queryHashMap());
  console.log('-----------'); // alert("2000000000000000000");
  // alert("2000000000000000000");
  // alert("2000000000000000000");
  // alert("2000000000000000000");

  base.setup();
  console.log('-----------');
  child.setup();
});

/***/ }),

/***/ "./src/js/common/utils/utils.js":
/*!**************************************!*\
  !*** ./src/js/common/utils/utils.js ***!
  \**************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/**
 * ES6テスト
 * template
 * @return {[type]} [description]
 */
var template = function template() {
  // テンプレート文字列は「`」バッククォート
  var str = "\u3042\n\t\u3044\n\t\u3046";
  console.log(str); // 変数の文字列への埋め込み

  var name = '1-10';
  var age = 20;
  var greeting = "\u79C1\u306E\u540D\u524D\u306F".concat(name, "\u3067\u3059\u3002").concat(age, "\u6B73\u3067\u3059");
  console.log(greeting); // 分割代入

  var name = '1-10',
      age = 20;
  console.log(name, age); // 可変長引数

  var array = [1, 5, 3];
  var max = Math.max.apply(Math, array);
  console.log(max); // 5

  function show1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log(args);
  }

  show1(1, 2, 3); // [1, 2, 3]
  // 初期値代入

  function show2() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1-10';
    console.log(name);
  }

  show2('1-10 design');
  show2(); // アロー関数

  var show3 = function show3(text) {
    console.log(text);
  }; // 引数が一つの時には()を省略可能


  var show4 = function show4(text) {
    console.log(text);
  }; // また一文の場合、{}とreturnの省略も可能。


  var show5 = function show5(text) {
    return text + ' さようなら';
  };

  var text = show5('こんにちは');
  console.log(text); // こんにちは さようなら
  // thisを束縛

  var counter = {
    count: 0,
    start: function start() {
      var _this = this;

      setTimeout(function () {
        console.log(_this.count++);
      }, 1000);
    }
  };
  counter.start();
};

/***/ })

/******/ });