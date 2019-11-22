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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/variance.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/variance/Variance.js":
/*!*********************************************!*\
  !*** ./src/js/modules/variance/Variance.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Variance; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Variance
 */
var Variance =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function Variance() {
    _classCallCheck(this, Variance);

    // props
    this.max = 6; // タイプ

    this.length = 7; // 何個まで

    this.varMax = {
      '2': {
        'min': 0,
        'max': 12.5
      },
      '3': {
        'min': 0,
        'max': 8.333333333333334
      },
      '4': {
        'min': 0,
        'max': 8.333333333333334
      },
      '5': {
        'min': 0,
        'max': 7.5
      },
      '6': {
        'min': 0,
        'max': 7.5
      },
      '7': {
        'min': 0,
        'max': 7.142857142857143
      }
    };
    console.log(this.varMax);
  }
  /**
   * setup
   * @return {Promise} Variance機能が使えるか判定
   */


  _createClass(Variance, [{
    key: "setup",
    value: function setup() {
      var self = this; // 分散値のmin maxを計算 (時間かかりすぎる)
      // for (let i = 2; i <= this.length; i++) {
      //   let array = this.combi(i);
      //   let varias = [];
      //   for (let i = 0; i < array.length; i++) {
      //     varias.push(this.var(array[i]));
      //   }
      //   let set = new Set(varias);
      //   let setToArr = Array.from(set);
      //   let ary = {
      //     'min' : Math.min.apply(null, setToArr),
      //     'max' : Math.max.apply(null, setToArr)
      //   };
      //   this.varMax[String(i)] = ary;
      // }
    }
    /**
     * _get (データの取得)
     * @param {Array} 取得したいデータの配列
     * @return {Number} 分散値（0～1）
     */

  }, {
    key: "_get",
    value: function _get(array) {
      var data = array;
      return this.var(data);
    }
    /**
     * var (分散値の計算)
     * @param {Array} 取得したいデータの配列
     * @return {Number} 分散値
     */

  }, {
    key: "var",
    value: function _var(array) {
      var data = array;
      var ave = this.ave(data);
      var varia = 0;

      for (var i = 0; i < data.length; i++) {
        varia = varia + Math.pow(data[i] - ave, 2);
      }

      return varia / (data.length - 1);
    }
    /**
     * varp (分散値の計算)
     * @param {Array} 取得したいデータの配列
     * @return {Number} 分散値
     */

  }, {
    key: "varp",
    value: function varp(array) {
      var data = array;
      var ave = this.ave(data);
      var varia = 0;

      for (var i = 0; i < data.length; i++) {
        varia = varia + Math.pow(data[i] - ave, 2);
      }

      return varia / data.length;
    }
    /**
     * sum (合計値の計算)
     * @param {Array} 取得したいデータの配列
     * @return {Number} 合計値
     */

  }, {
    key: "sum",
    value: function sum(array) {
      var data = array;
      var sum = 0;

      for (var i = 0; i < data.length; i++) {
        sum = sum + Number(data[i]);
      }

      return Number(sum);
    }
    /**
     * ave (平均値の計算)
     * @param {Array} 取得したいデータの配列
     * @return {Number} 平均値
     */

  }, {
    key: "ave",
    value: function ave(array) {
      var data = array;
      var ave = this.sum(data) / data.length;
      return ave;
    }
    /**
     * combi (組み合わせの計算)
     * @param {Number} 組み合わせたい数
     * @return {Array} 組み合わせ配列
     */

  }, {
    key: "combi",
    value: function combi(count) {
      var data = [];

      for (var d = 0; d < count; d++) {
        var array = [];

        for (var n = 0; n < this.max; n++) {
          array.push(n + 1);
        }

        data.push(array);
      } // 実行毎に結果の出力順序が一意になるようにソート


      var keys = Object.keys(data).sort(); // 組み合わせの総数を事前に計算

      var total = 1;

      for (var key in data) {
        total *= data[key].length;
      }

      var q,
          // 商, ループ中の配列で表現できない数
      r,
          // 余り, ループ中の配列で表現する数
      result = []; // 組み合わせを格納する配列
      // 組み合わせの総数回ループして、n番目にどの組み合わせが来るかどうかを求める

      for (var _n = 0; _n < total; _n++) {
        result[_n] = [];
        q = _n; // dataのキー毎にループして、どの要素を使うか決定

        for (var _i = 0; _i < keys.length; _i++) {
          var _key = keys[_i]; // ループ対象の配列の要素数で割った余り = その配列で表現できる数

          r = q % data[_key].length; // ループ対象の配列の要素数で割った商 = その配列で表現できない数

          q = Math.floor(q / data[_key].length);
          result[_n][_key] = data[_key][r];
        }

        result[_n].sort();
      }

      result.sort(); // 重複配列を削除

      var uniques = [];
      var itemsFound = {};

      for (var i = 0, l = result.length; i < l; i++) {
        var stringified = JSON.stringify(result[i]);

        if (itemsFound[stringified]) {
          continue;
        }

        uniques.push(result[i]);
        itemsFound[stringified] = true;
      }

      return uniques;
    }
  }]);

  return Variance;
}();



/***/ }),

/***/ "./src/js/pages/variance.js":
/*!**********************************!*\
  !*** ./src/js/pages/variance.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_variance_Variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/variance/Variance */ "./src/js/modules/variance/Variance.js");

/*==========================================================================
  init call
==========================================================================*/

$(function ($) {
  var variance = new _modules_variance_Variance__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var $log = $('#log');
  var $consoleReset = $('#consoleReset'); // button element

  var $get = $('#get'); // select

  var $getList = $('.var'); // 初回の処理

  variance.setup(); // ボタン処理

  $get.on('click', function (event) {
    event.preventDefault();
    var item = $getList;
    var value = [];

    for (var i = 0; i < item.length; i++) {
      var e = $(item[i]);
      var v = e.val();

      if (v !== '') {
        value.push(v);
      }
    }

    log('選択した値 : ' + value);

    variance._get(value);

    log('分散値 : ' + variance._get(value));
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