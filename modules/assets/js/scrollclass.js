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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/scrollclass.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/scrollclass/ScrollClass.js":
/*!***************************************************!*\
  !*** ./src/js/modules/scrollclass/ScrollClass.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollClass; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class ScrollClass
 * use jquery
 */
var ScrollClass =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function ScrollClass($element, options) {
    _classCallCheck(this, ScrollClass);

    // props
    this.defaults = {
      startPosition: 50,
      addClassName: 'action'
    };
    this.target = $element;
    this.$window = $(window); // optionsを代入

    if (options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          this.defaults[key] = options[key];
        }
      }
    }

    this.setup();
  }
  /**
   * setup
   */


  _createClass(ScrollClass, [{
    key: "setup",
    value: function setup() {
      var _this = this;

      this.addAction();
      this.$window.on('scroll', function () {
        _this.addAction();
      });
    }
    /**
     * addAction
     */

  }, {
    key: "addAction",
    value: function addAction() {
      var length = this.target.length;

      for (var i = 0; i < length; i++) {
        if (this.target.eq(i).hasClass(this.defaults.addClassName)) continue;
        var in_position = this.target.eq(i).offset().top + this.defaults.startPosition;
        var window_bottom_position = this.$window.scrollTop() + this.$window.height();

        if (in_position < window_bottom_position) {
          this.target.eq(i).addClass(this.defaults.addClassName);
        }
      }
    }
  }]);

  return ScrollClass;
}();



/***/ }),

/***/ "./src/js/pages/scrollclass.js":
/*!*************************************!*\
  !*** ./src/js/pages/scrollclass.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrollclass_ScrollClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/scrollclass/ScrollClass */ "./src/js/modules/scrollclass/ScrollClass.js");

/*==========================================================================
init call
==========================================================================*/

$(function ($) {
  new _modules_scrollclass_ScrollClass__WEBPACK_IMPORTED_MODULE_0__["default"]($('.target'), {
    startPosition: 200
  });
});

/***/ })

/******/ });