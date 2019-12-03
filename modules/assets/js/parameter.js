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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/parameter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/parameter/Parameter.js":
/*!***********************************************!*\
  !*** ./src/js/modules/parameter/Parameter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parameter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Parameter
 */
var Parameter =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function Parameter() {
    _classCallCheck(this, Parameter);

    // props
    this.arg = new Object();
    this.setup();
  }
  /**
   * setup
   */


  _createClass(Parameter, [{
    key: "setup",
    value: function setup() {
      var pair = location.search.substring(1).split('&');

      for (var i = 0; pair[i]; i++) {
        var kv = pair[i].split('=');
        this.arg[kv[0]] = kv[1];
      }
    }
    /**
     * get (データの取得)
     * @param {String} 取得したいデータ名
     * @return {Object} 取得内容
     */

  }, {
    key: "get",
    value: function get(key) {
      var data;

      if (key) {
        data = this.arg[key];
      } else {
        data = this.arg;
      }

      return data;
    }
  }]);

  return Parameter;
}();



/***/ }),

/***/ "./src/js/pages/parameter.js":
/*!***********************************!*\
  !*** ./src/js/pages/parameter.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_parameter_Parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/parameter/Parameter */ "./src/js/modules/parameter/Parameter.js");

/*==========================================================================
  init call
==========================================================================*/

$(function ($) {
  var parameter = new _modules_parameter_Parameter__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var $log = $('#log'); // button element

  var $get = $('#get');
  var $getKey = $('#getKey');
  var $consoleReset = $('#consoleReset'); // input

  var $parameter = $('#parameter');
  var $key = $('#key'); // ボタン処理

  $get.on('click', function (event) {
    event.preventDefault();
    var hash = $parameter.val();
    var url = window.location.origin + window.location.pathname;
    window.history.pushState("", "Get parameter", url + '?' + hash);
    parameter.setup();

    if (hash !== '') {
      var val = url + '?' + hash + 'のパラメーターを取得' + '\n';
      val += '取得結果 : ' + '\n';
      val += JSON.stringify(parameter.get());
      log(val);
    }
  });
  $getKey.on('click', function (event) {
    event.preventDefault();
    var key = $key.val();
    var hash = $parameter.val();
    var url = window.location.origin + window.location.pathname;
    window.history.pushState("", "Get parameter", url + '?' + hash);
    parameter.setup();

    if (key !== '') {
      var val = key + 'のパラメーターを取得' + '\n';
      val += '取得結果 : ' + parameter.get(key);
      log(val);
    }
  });
  $consoleReset.on('click', function (event) {
    event.preventDefault();
    $log.val('');
  }); // consoleへ追加

  function log(text) {
    var val = '';
    val += text + '\n';
    console.log(val);
    val += '---' + '\n';
    val += $log.val();
    $log.val(val);
  }
});

/***/ })

/******/ });