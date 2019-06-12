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

/***/ "./src/js/common/class/DataManager.js":
/*!********************************************!*\
  !*** ./src/js/common/class/DataManager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataManager; });
/* harmony import */ var _Localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Localstorage */ "./src/js/common/class/Localstorage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class DataManager
 */

var DataManager =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function DataManager(name) {
    _classCallCheck(this, DataManager);

    this.localstorage = new _Localstorage__WEBPACK_IMPORTED_MODULE_0__["default"](); // props

    this.name = name;
    this.stamp = {
      '1': '🌚',
      '2': '🌝',
      '3': '🍄',
      '4': '🍙',
      '5': '🦉',
      '6': '🎃',
      'hana': '🎴',
      'pengin': '<img src="../assets/img/hastur.png" alt="">',
      'mejedo': '<img src="../assets/img/6.png" alt="">',
      'kouseki': '<img class="k" src="../assets/img/7.png" alt="">'
    };
    this.quizArray = {
      'hana': '8',
      'mejedo': 'medjed',
      'pengin': 'anubis'
    };
    this.getstamp = [];
    this.getstampdeg = [];
    this.list = 'stampList';
    this.deg = 'stampDeg';
    this.$defaultSetting = $('#defaultSetting'); // storage保存パラメーター
    // isFirst
    // nickname
  }
  /**
   * setup
   * @return {[type]} [description]
   */


  _createClass(DataManager, [{
    key: "setup",
    value: function setup() {
      // console.log('isFirst : ' + app.localstorage._get('isFirst'));
      var self = this; // console.log(self.localstorage._get('isFirst'));
      // self.localstorage._get('isFirst');

      console.log('isStorage');
      console.log(self.localstorage.isStorage); // 設定せず使う [button]

      $('#settingSubmitNoName').on('click', function (event) {
        event.preventDefault();
        self.$defaultSetting.removeClass('open');

        self.localstorage._add('isFirst', 1);
      }); // 設定する [button]

      $('#settingSubmit').on('click', function (event) {
        event.preventDefault();
        self.$defaultSetting.removeClass('open');

        self.localstorage._add('isFirst', 1);

        var nickname = self.$defaultSetting.find('input[name="nickname"]').val();
        self.nickname(nickname);
      }); // スタンプのデータをリセットする [button]

      $('#dataReset').on('click', function (event) {
        event.preventDefault();

        self.localstorage._clear();
      }); // スタンプを貰う [button]

      $('#getStamp').on('click', function (event) {
        event.preventDefault();
        var stampId = $(this).data('id');
        self.update(stampId);
      }); // クイズでスタンプ貰う [button]

      $('#choice .getStampQuiz').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        var answer = $(this).data('answer') + "";

        if (self.quiz(id, answer)) {
          self.update(id);
        } else {
          alert('不正解！');
        }
      }); // スタンプページの処理

      if ($('body.stamp').length) {
        // スタンプの受け取り有無
        if ($('#getStamp').length) {
          var stampId = $('#getStamp').data('id');

          if (self.localstorage._get(stampId) !== null) {
            $('#getStamp').addClass('open');
            $('#received').addClass('open');
          }
        } else if ($('#question').length) {
          var _stampId = $('#choice .getStampQuiz').eq(0).data('id');

          if (self.localstorage._get(_stampId) !== null) {
            $('#question').addClass('open');
            $('#received').addClass('open');
          }
        }

        if (self.localstorage._get(self.list) !== null) {
          self.getstamp.push(self.localstorage._get(self.list)); // console.log(self.getstamp);
        }
      } // スタンプカードページの処理


      if ($('body.stampcard').length) {
        if (self.localstorage._get(self.list) !== null) {
          self.getstamp = self.localstorage._get(self.list).split(',');
          self.getstampdeg = self.localstorage._get(self.deg).split(',');
          self.setcard();
        }
      }
    }
    /**
     * attention
     */

  }, {
    key: "attention",
    value: function attention() {
      // let self = this;
      var href = location.origin + '/';
      var html = '';
      html = '<section id="attentionModal">' + '<div class="box">' + '<div class="baloon">' + '<img src="' + href + 'assets/img/boy.png" width="200" alt="">' + '<div class="balloon">プライベートブラウズしてる？</div>' + '</div>' + '<img src="' + href + 'assets/img/2.png" width="600" alt="">' + '<h2><img src="' + href + 'assets/img/attention1.png" width="200" alt=""></h2>' + '<p>シークレットウィンドウ、<br>' + '又はプライベートブラウズは使用せず、<br>' + '通常モードのブラウザで<br>ご使用されることをオススメします。</p>' + '<img src="' + href + 'assets/img/2.png" width="600" alt="">' + '</div>' + '</section>';
      $('#page').append(html);
    }
    /**
     * nickname
     * @param {String} ニックネーム
     * @return {[type]} [description]
     */

  }, {
    key: "nickname",
    value: function nickname(_nickname) {
      var self = this;

      self.localstorage._add('nickname', _nickname);

      if (_nickname !== null) {
        $('body.stampcard #header .name').text(_nickname + 'の');
      } // console.log(self.localstorage._get('nickname'));

    }
    /**
     * setcard
     */

  }, {
    key: "setcard",
    value: function setcard() {
      var self = this;
      console.log('スタンプカードをセットする');
      console.log(self.getstamp);
      console.log(self.getstampdeg);
      var $element = $('#stampcard');

      for (var i in self.getstamp) {
        $element.find('li').eq(i).append('<span class="stamp" style="transform: rotate(' + self.getstampdeg[i] + 'deg)">' + self.stamp[self.getstamp[i]] + '</span>');
      }
    }
    /**
     * update
     * @param {String} スタンプのid
     */

  }, {
    key: "update",
    value: function update(stampid) {
      var self = this;
      var min = -45;
      var max = 40;
      var deg = Math.floor(Math.random() * (max - min + 1) + min);

      self.localstorage._add(stampid, 1);

      self.localstorage._update(self.list, stampid);

      self.localstorage._update(self.deg, deg);

      alert('スタンプを貰いました！');
      location.reload();
    }
    /**
     * quiz
     * @param {[String], [String]} クイズのid, クイズの答え
     * @return {Boolean} 正解か不正解か
     */

  }, {
    key: "quiz",
    value: function quiz(id, answer) {
      var self = this;
      var correct = false;
      console.log(self.quizArray[id]);

      if (self.quizArray[id] === answer) {
        correct = true;
      }

      return correct;
    }
  }]);

  return DataManager;
}();



/***/ }),

/***/ "./src/js/common/class/Localstorage.js":
/*!*********************************************!*\
  !*** ./src/js/common/class/Localstorage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Localstorage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Localstorage
 */
var Localstorage =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function Localstorage(name) {
    _classCallCheck(this, Localstorage);

    // props
    this.isStorage;
    this.$def = $.Deferred();
  }
  /**
   * setup
   * @return {Boolean} Storage機能が使えるか判定
   */


  _createClass(Localstorage, [{
    key: "setup",
    value: function setup() {
      var self = this;
      self.isStorage = "sessionStorage" in window && "localStorage" in window;

      function storageAvailable(type) {
        try {
          var storage = window[type],
              x = '__storage_test__';
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return e instanceof DOMException && ( // everything except Firefox
          e.code === 22 || // Firefox
          e.code === 1014 || // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' || // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
        }
      }

      console.log('----');
      console.log(storageAvailable('localStorage'));
      console.log('----');
      console.log(self.isStorage);

      if (self.isStorage) {
        // chrome シークレットウィンドウ用
        // if (window.webkitRequestFileSystem) {
        //   console.log('Chrome用');
        //   window.webkitRequestFileSystem(
        //     window.TEMPORARY, 1,
        //     function() {
        //       self.isStorage = true;
        //       // console.log('1');
        //       // console.log(self.isStorage);
        //       // alert('成功')
        //       self.$def.resolve();
        //       // return isStorage;
        //     },
        //     function(e) {
        //       console.log(e);
        //       self.isStorage = false;
        //       // console.log(self.isStorage);
        //       // alert('失敗')
        //       self.$def.resolve();
        //     }
        //   );
        // } else {
        // safari プライベートブラウズ用
        try {
          localStorage.setItem("_INKJS_", 1);
        } catch (err) {
          self.isStorage = false;
          console.log('失敗');
        }

        if (self.isStorage) {
          localStorage.removeItem("_INKJS_");
          self.isStorage = true;
        }

        self.$def.resolve(); // }
      }

      return self.$def.promise();
    }
    /**
     * _add (データの保存)
     * @param {[String], [String]} 保存先, 保存する内容
     */

  }, {
    key: "_add",
    value: function _add(item, data) {
      // データの保存
      localStorage.setItem(item, data);
    }
    /**
     * _update (データを追加で保存)
     * @param {[String], [String]} 保存先, 保存する内容
     */

  }, {
    key: "_update",
    value: function _update(list, data) {
      var self = this; // 保存先のデータを取得

      var datas = self._get(list);

      var array = [];

      if (datas !== null) {
        array.push(datas);
      }

      array.push(data); // データの保存

      localStorage.setItem(list, array);
      console.log(self._get(list)); // alert(self._get(list))
    }
    /**
     * _get (データの取得)
     * @param {String} 取得したいデータ名
     * @return {String} 取得内容
     */

  }, {
    key: "_get",
    value: function _get(item) {
      var data = localStorage.getItem(item); // alert(data);
      // data = window.localStorage.getItem('access_count');
      // data = localStorage.item

      return data;
    }
    /**
     * _remove (LocalStorageからデータを削除する)
     * @param {String} 削除するアイテム
     */

  }, {
    key: "_remove",
    value: function _remove() {
      localStorage.removeItem('access_count');
      window.localStorage.removeItem('access_count');
    }
    /**
     * _clear (localStorageを初期化)
     */

  }, {
    key: "_clear",
    value: function _clear() {
      localStorage.clear();
      alert('データをリセットしました😥\nリロードしますか？');
      location.reload();
    }
  }]);

  return Localstorage;
}();



/***/ }),

/***/ "./src/js/common/index.js":
/*!********************************!*\
  !*** ./src/js/common/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Localstorage */ "./src/js/common/class/Localstorage.js");
/* harmony import */ var _class_DataManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/DataManager */ "./src/js/common/class/DataManager.js");
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

 // import * as utils from './utils/utils';
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
  var localstorage = new _class_Localstorage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var dataManager = new _class_DataManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
  $.sequence(function () {
    console.log('step1');
    return localstorage.setup();
  }, function () {
    console.log('step2');

    if (localstorage.isStorage) {
      // ローカルストレージが使える
      console.log('つかえる');
      dataManager.setup();

      if (localstorage._get('isFirst') === null) {
        $('#defaultSetting').addClass('open');
      } else {
        if (localstorage._get('nickname') !== null) {
          $('body.stampcard #header .name').text(localstorage._get('nickname') + 'の');
        }
      }
    } else {
      // 使えない
      console.log('つかえない');
      dataManager.attention(); // $('#attention').addClass('open');
    }
  });
});

/***/ })

/******/ });