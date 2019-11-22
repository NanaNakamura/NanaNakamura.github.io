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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/localstorage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/localstorage/Storage.js":
/*!************************************************!*\
  !*** ./src/js/modules/localstorage/Storage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Storage
 */
var Storage =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function Storage() {
    _classCallCheck(this, Storage);

    // props
    this.isStorage;
    this.$def = $.Deferred();
  }
  /**
   * setup
   * @return {Promise} Storage機能が使えるか判定
   */


  _createClass(Storage, [{
    key: "setup",
    value: function setup() {
      var self = this;
      self.isStorage = "sessionStorage" in window && "localStorage" in window; // function storageAvailable(type) {
      //   try {
      //     var storage = window[type],
      //       x = '__storage_test__';
      //     storage.setItem(x, x);
      //     storage.removeItem(x);
      //     return true;
      //   }
      //   catch(e) {
      //     return e instanceof DOMException && (
      //       // everything except Firefox
      //       e.code === 22 ||
      //       // Firefox
      //       e.code === 1014 ||
      //       // test name field too, because code might not be present
      //       // everything except Firefox
      //       e.name === 'QuotaExceededError' ||
      //       // Firefox
      //       e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      //       // acknowledge QuotaExceededError only if there's something already stored
      //       storage.length !== 0;
      //   }
      // }
      // console.log('----');
      // console.log(storageAvailable('localStorage'));
      // console.log('----');

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
          console.log('成功');
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
    value: function _update(item, data) {
      var self = this; // 保存先のデータを取得

      var datas = self._get(item);

      var array = [];

      if (datas !== null) {
        array.push(datas);
      }

      array.push(data); // データの保存

      localStorage.setItem(item, array);
      console.log(self._get(item)); // alert(self._get(item))
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
     * _getAll (データをすべて取得)
     * @param {Boolean} 文字列で返すかどうか
     * @return {Json} 取得内容
     */

  }, {
    key: "_getAll",
    value: function _getAll(flag) {
      var i = 0;
      var json = {};
      var k;

      for (var i; k = window.localStorage.key(i); i++) {
        json[k] = window.localStorage.getItem(k);
      }

      if (flag === true) {
        json = JSON.stringify(json);
      }

      return json;
    }
    /**
     * _remove (LocalStorageからデータを削除する)
     * @param {String} 削除するアイテム
     */

  }, {
    key: "_remove",
    value: function _remove(item) {
      localStorage.removeItem(item); // window.localStorage.removeItem(item);
    }
    /**
     * _clear (localStorageを初期化)
     */

  }, {
    key: "_clear",
    value: function _clear() {
      localStorage.clear(); // alert('データをリセットしました😥\nリロードしますか？');
      // location.reload();
    }
  }]);

  return Storage;
}();



/***/ }),

/***/ "./src/js/pages/localstorage.js":
/*!**************************************!*\
  !*** ./src/js/pages/localstorage.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_localstorage_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/localstorage/Storage */ "./src/js/modules/localstorage/Storage.js");

/*==========================================================================
  init call
==========================================================================*/

$(function ($) {
  var storage = new _modules_localstorage_Storage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var $log = $('#log'); // button element

  var $add = $('#add');
  var $update = $('#update');
  var $remove = $('#remove');
  var $get = $('#get');
  var $all = $('#all');
  var $clear = $('#clear');
  var $consoleReset = $('#consoleReset'); // input

  var $addItem = $('#addItem');
  var $addData = $('#addData');
  var $updateItem = $('#updateItem');
  var $updateData = $('#updateData'); // select

  var $list = $('.list');
  var $removeList = $('#removeList');
  var $getList = $('#getList'); // 初回の処理

  $.sequence(function () {
    return storage.setup();
  }, function () {
    var val = '';
    val += 'ローカルストレージが使えるかどうか' + '\n';
    val += storage.isStorage;
    log(val);
  }); // ボタン処理

  $add.on('click', function (event) {
    event.preventDefault();
    var item = $addItem.val();
    var data = $addData.val();

    if (data === '' || item === '') {
      log('Key 又は Value が入力されていません');
    } else {
      storage._add(item, data);

      var val = '';
      val += 'データを追加・変更' + '\n';
      val += 'Key : ' + item + '\n' + 'Value : ' + data;
      log(val);
    }
  });
  $update.on('click', function (event) {
    event.preventDefault();
    var item = $updateItem.val();
    var data = $updateData.val();

    if (data === '' || item === '') {
      log('Key 又は Value が入力されていません');
    } else {
      storage._update(item, data);

      var val = '';
      val += 'データを追加で保存する' + '\n';
      val += 'Key : ' + item + '\n' + 'Value : ' + data + '\n';
      val += '保存後のValue : ' + storage._get(item);
      log(val);
    }
  });
  $remove.on('click', function (event) {
    event.preventDefault();
    var item = $removeList.val();

    if (item !== '') {
      storage._remove(item);

      var val = item + 'のデータを削除';
      log(val);
    }
  });
  $get.on('click', function (event) {
    event.preventDefault();
    var item = $getList.val();

    if (item !== '') {
      var val = item + 'のデータを取得' + '\n';
      val += 'Key : ' + item + '\n' + 'Value : ' + storage._get(item);
      log(val);
    }
  });
  $all.on('click', function (event) {
    event.preventDefault();

    var json = storage._getAll(true);

    var val = '';
    val += 'Localstorageのすべてのデータを取得' + '\n';
    val += json;
    log(val);
  });
  $clear.on('click', function (event) {
    event.preventDefault();

    storage._clear();

    log('Localstorageのデータを削除しました');
  });
  $consoleReset.on('click', function (event) {
    event.preventDefault();
    $log.val('');
  }); // 削除・取得のプルダウンを生成

  function createSelect() {
    var list = storage._getAll();

    $list.find('option').remove();

    if (Object.keys(list).length) {
      $list.append('<option value="">Keyを選択してください</option>');
    } else {
      $list.append('<option value="">-</option>');
    }

    for (var key in list) {
      $list.append('<option value="' + key + '">' + key + '</option>');
    }
  } // consoleへ追加


  function log(text) {
    var val = '';
    val += text + '\n';
    console.log(val);
    val += '---' + '\n';
    val += $log.val();
    $log.val(val);
    createSelect();
  }
});

/***/ })

/******/ });