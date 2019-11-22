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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/video.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/video/Video.js":
/*!***************************************!*\
  !*** ./src/js/modules/video/Video.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Video
 */
var Video =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param {Element} video
   * @return {[type]}      [description]
   */
  function Video($video) {
    _classCallCheck(this, Video);

    this.query = AMP.queryHashMap();
    this.isSamsungBrowser = AMP.UA.indexOf('SamsungBrowser') > -1; // video

    this.$video = $video;
    this.video = $video[0];
    this.$loading = $('#videoLoading'); // video load flag

    this.videoLoadedDef; // video active flag

    this.balloonTime;
    this.balloon2Time;
    this.buttonTime;
    this.fadeOutTime; // それぞれのDeferred用

    this.balloonDef;
    this.balloon2Def;
    this.buttonDef;
    this.fadeOutDef;
    this.endDef; // それぞれのフラグ用

    this.isBalloon = false;
    this.isBalloon2 = false;
    this.isButton = false;
    this.isFadeOut = false;
    this.isEnded = false; // 再生中かどうか

    this.isPlaying = false; // 停止中かどうか

    this.isPause = false;
    this.currentTime = 0;
    this.isDuration = true;
  }
  /**
   * _standby
   * 動画待機状態を保つ
   * @method _standby
   * @param なし
   * @return
   */


  _createClass(Video, [{
    key: "_standby",
    value: function _standby() {
      var self = this;
      self.video.play();
      self.video.pause(); // https://stackoverflow.com/questions/20245164/audio-currenttime-invalidstateerror-ie11-js-html5/31390386
      // if (!isNaN(self.video.duration)) {

      if (self.video.currentTime !== 0) {
        self.video.currentTime = 0;
      }
    }
    /**
     * _load
     * Video読み込み
     * @method _load
     * @param {String} videoURL
     * @return {$.Deferred} 読み込み完了を通知
     */

  }, {
    key: "_load",
    value: function _load(src) {
      // app.debug.log('Video load', 'lb');
      // console.log('video : load');
      var self = this;
      self.videoLoadedDef = $.Deferred();
      self.loaded = false; // console.log(self);
      // console.log(self.video);

      self.video.src = '../assets/mp4/' + src + '.mp4'; // console.log(self.video.src);

      self.video.load(); // AMP.debug.log('load')
      // エラーが発生

      self.$video.off('error').one('error', function () {
        alert('動画の読み込みに失敗しました。\nページをリロードします。');
        location.reload(true); // self.videoLoadedDef.reject();
      }); // SamsungBrowser

      if (self.isSamsungBrowser) {
        self.isDuration = false;
        self.$video.off('durationchange').on('durationchange', function (event) {
          // console.log('durationchange');
          if (self.$video[0].duration > 0 && self.$video[0].currentTime == 0) {
            self.isDuration = true;
            self.$video[0].play();
          }
        });
      } // メディアリソースとテキストトラックの大きさと時間を取得できたとき


      self.$video.off('loadedmetadata').one('loadedmetadata', function () {
        self.isPlaying = false;
      }); // 再生可能

      self.$video.off('canplay').one('canplay', function (event) {
        self.isPlaying = false;
        self.videoLoadedDef.resolve(event);
      }); // 再生可能

      self.$video.off('canplaythrough').one('canplaythrough', function (event) {
        self.isPlaying = false;
        self.videoLoadedDef.resolve(event);
      }); // 次のフレームの準備が整わず、一時的に停止するとき。

      self.$video.off('waiting').on('waiting', function () {
        self.$loading.addClass('active');
        self.isPlaying = false; // console.log('waiting');
      }); // 再生中

      self.$video.off('playing').on('playing', function () {
        self.isPlaying = true;
        self.$loading.removeClass('active'); // console.log('playing');
      }); // 動画再生開始

      self.$video.off('play').on('play', function () {
        self.isPlaying = true;
        self.$loading.removeClass('active'); // console.log('play');
      }); // 動画再生終了

      self.$video.off('ended').on('ended', function () {
        self.isPlaying = false;
        self.$loading.removeClass('active'); // console.log('ended');
      }); // 動画一時停止

      self.$video.off('pause').on('pause', function () {
        self.isPlaying = false; // console.log('pause');
      }); // $.Deferred

      return $.when(self.videoLoadedDef.promise()).done(function (data) {
        self.loaded = true; // console.log(data);
        // app.debug.log('ロード完了 -> ' + data.target.src , 'lb');

        self.videoLoadedDef.resolve();
      }).fail(function (data) {
        // console.log(data);
        self.videoLoadedDef.reject();

        if (confirm('ファイルの読み込みに失敗しました。リロードしますか?')) {
          location.reload();
        }
      });
    }
    /**
     * _play
     * 通常動画の再生
     * @method _play
     * @param {Array, String} videoData, type(special)
     * @return {$.Deferred} 読み込み完了を通知
     */

  }, {
    key: "_play",
    value: function _play(videoData, type) {
      var self = this; // 配列の中身を初期化

      self.isEnded = false;
      self.isBalloon = false;
      self.isBalloon2 = false;
      self.isButton = false;
      self.isFadeOut = false; // delete

      delete self.balloonTime;
      delete self.balloon2Time;
      delete self.buttonTime;
      delete self.fadeOutTime;
      delete self.balloonDef;
      delete self.balloon2Def;
      delete self.buttonDef;
      delete self.fadeOutDef;
      delete self.endDef; // 処理開始

      self.balloonDef = new $.Deferred();
      self.balloon2Def = new $.Deferred();
      self.buttonDef = new $.Deferred();
      self.fadeOutDef = new $.Deferred();
      self.endDef = new $.Deferred();

      if (self.balloonTime === undefined) {
        self.balloonTime = videoData.balloonTime;
        self.balloon2Time = videoData.balloon2Time;
        self.buttonTime = videoData.buttonTime;
        self.fadeOutTime = videoData.fadeOutTime;
      }

      if (self.balloon2Time === undefined) {
        self.balloon2Time = self.balloonTime;
      }

      self.video.play();

      self._update();

      self.balloonDef.promise();
      self.balloon2Def.promise();
      self.buttonDef.promise();
      self.fadeOutDef.promise();
      self.endDef.promise();
      return {
        balloon: self.balloonDef,
        balloon2: self.balloon2Def,
        button: self.buttonDef,
        fadeOut: self.fadeOutDef,
        end: self.endDef
      };
    }
    /**
     * _update
     * videoのタイムラインの同期
     * @method _update
     * @param なし
     * @return
     */

  }, {
    key: "_update",
    value: function _update() {
      var self = this;

      if (self.isDuration) {
        // console.log('_update');
        if (self.isBalloon === false && self.$video[0].currentTime >= self.$video[0].duration - self.balloonTime) {
          // console.log('吹き出し表示');
          self.isBalloon = true;
          self.balloonDef.resolve();
        } else if (self.isBalloon2 === false && self.$video[0].currentTime >= self.$video[0].duration - self.balloon2Time) {
          // console.log('吹き出し表示');
          self.isBalloon2 = true;
          self.balloon2Def.resolve();
        } else if (self.isButton === false && self.$video[0].currentTime >= self.$video[0].duration - self.buttonTime) {
          // console.log('ボタン表示');
          self.isButton = true;
          self.buttonDef.resolve();
        } else if (self.isFadeOut === false && self.$video[0].currentTime >= self.$video[0].duration - self.fadeOutTime) {
          // console.log('フェードアウト');
          self.isFadeOut = true;
          self.fadeOutDef.resolve();
        } else if (self.$video[0].currentTime >= self.$video[0].duration) {
          // console.log('再生終了');
          self.endDef.resolve();
          self.isEnded = true;
          return;
        }

        self.currentTime = self.$video[0].currentTime;
      }

      AMP.requestAnimationFrame(self._update.bind(self));
    }
    /**
     * _pause
     * 一時停止
     * @method _pause
     * @param {Number, Boolean} duration(動画を止める秒数), flag(Pause中かどうか)
     * @return {$.Deferred} 完了を通知
     */

  }, {
    key: "_pause",
    value: function _pause(duration, flag) {
      var self = this;
      var $def = $.Deferred();
      var video = self.video;

      if (duration === undefined) {
        duration = 0;
      }

      setTimeout(function () {
        video.pause();

        if (flag == true) {
          self.isPause = true;
        }

        $def.resolve();
      }, duration);
      return $def.promise();
    }
    /**
     * _resume
     * 再生復帰
     * @method _resume
     * @param {Number, Boolean} duration(動画を止める秒数), flag(Pause中かどうか)
     * @return {$.Deferred} 完了を通知
     */

  }, {
    key: "_resume",
    value: function _resume(duration, flag) {
      var self = this;
      var $def = $.Deferred();
      var video = self.video;

      if (duration === undefined) {
        duration = 0;
      }

      setTimeout(function () {
        video.play();

        if (flag == false) {
          self.isPause = false;
        }

        $def.resolve();
      }, duration);
      return $def.promise();
    }
    /**
     * _playLoopVideo
     * 動画の再生(LoopVideo用)
     * @method _playLoopVideo
     * @param なし
     * @return
     */

  }, {
    key: "_playLoopVideo",
    value: function _playLoopVideo() {
      var self = this;
      self.video.play();
    }
    /**
     * _stopLoop
     * Loop動画の停止
     * @method _stopLoop
     * @param {Number} duration (動画を止める秒数)
     * @return {$.Deferred} 読み込み完了を通知
     */

  }, {
    key: "_stopLoop",
    value: function _stopLoop(duration) {
      var $def = $.Deferred();
      var video = this.video;

      if (duration === undefined) {
        duration = 0;
      }

      setTimeout(function () {
        video.pause();
        video.currentTime = 0;
        $def.resolve();
      }, duration);
      return $def.promise();
    }
    /**
     * _stop
     * 動画の停止
     * @method _stop
     * @param {Number} duration (動画を止める秒数)
     * @return {$.Deferred} 読み込み完了を通知
     */

  }, {
    key: "_stop",
    value: function _stop(duration) {
      var $def = $.Deferred();
      var video = this.video;

      if (duration === undefined) {
        duration = 0;
      }

      setTimeout(function () {
        video.pause();
        video.currentTime = 0;
        $def.resolve();
      }, duration);
      return $def.promise();
    }
  }]);

  return Video;
}();



/***/ }),

/***/ "./src/js/modules/video/VideoData.js":
/*!*******************************************!*\
  !*** ./src/js/modules/video/VideoData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoData; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class VideoData
 */
var VideoData =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function VideoData() {
    _classCallCheck(this, VideoData);

    // props
    // 動画データ
    this.videoDataJson = [// {
    // 	id : '1', // 必須
    // 	src : '01', // 必須
    // 	nextLoop : true or false, // 必須 動画の次にLoop動画を出すかどうか
    // 	isLoop : true or false, // 任意 動画がLoop動画かどうか
    // 	isRandom : '15', // 任意
    // 	isCrossfade : true or false, // 任意 ダブル再生のみ有効
    // 	parent : 17, // 任意
    // 	child : '17-04', // 任意
    // 	totalTime : 0, // 必須
    // 	balloonTime : 5, // 必須
    // 	buttonTime : 4, // 必須
    // 	fadeOutTime : 1 // 必須
    // },
    {
      id: '1',
      src: '01',
      // nextLoop : false,
      totalTime: 0,
      balloonTime: 1,
      buttonTime: 2,
      fadeOutTime: 3
    }, {
      id: '2',
      src: '02',
      // nextLoop : false,
      totalTime: 0,
      balloonTime: 1,
      buttonTime: 2,
      fadeOutTime: 3
    }, {
      id: '3',
      src: '03',
      // nextLoop : false,
      // isCrossfade : true,
      totalTime: 0,
      balloonTime: 1,
      buttonTime: 2,
      fadeOutTime: 3
    }, {
      id: '4',
      src: '04',
      // nextLoop : true,
      totalTime: 0,
      balloonTime: 1,
      buttonTime: 2,
      fadeOutTime: 3
    }];
  }
  /**
   * get
   * @param {number} video id
   * @return {Array} video data array
   */


  _createClass(VideoData, [{
    key: "get",
    value: function get(id) {
      var self = this; //Videoの内容を取得

      return self._videoDataGet(id);
    }
    /**
     * _videoDataGet
     * @method _videoDataGet
     * @param {Number} videoid
     * @return {Array}
     */

  }, {
    key: "_videoDataGet",
    value: function _videoDataGet(id) {
      var self = this;
      var array = null;

      for (var key in self.videoDataJson) {
        if (self.videoDataJson[key].id == id) {
          array = self.videoDataJson[key];
          break;
        }
      }

      if (array === null) {
        alert('動画の読み込みに失敗しました。\nページをリロードします。');
        location.reload(true);
      }

      return array;
    }
  }]);

  return VideoData;
}();



/***/ }),

/***/ "./src/js/modules/video/VideoManager.js":
/*!**********************************************!*\
  !*** ./src/js/modules/video/VideoManager.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoManager; });
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video */ "./src/js/modules/video/Video.js");
/* harmony import */ var _VideoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoData */ "./src/js/modules/video/VideoData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class VideoManager
 */



var VideoManager =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function VideoManager() {
    _classCallCheck(this, VideoManager);

    // element
    this.$loading = $('#loading');
    this.$video = $('#video');
    this.$standby = $('#standby');
    this.$play = $('#play');
    this.$pause = $('#pause');
    this.$next = $('#next');
    this.$mainVideos = $('#mainVideos'); // media

    this.src = null;
    this.queueData = null;
    this.queueDataSub = null;
    this.stream = null; // $.streamはここに入れる

    this.videoID = 1; // どのscene（video）を再生中かどうか

    this.videoLoadedDef = null;
    this.videoPlayingDef = null; // state

    this.isLoaded = false; // 読み込み済みかどうか(縦横判定につかう)

    this.isCurrent = true; // this.isLoop = false;

    this.isCrossfade = false;
    this.isPause = false;
    this.isPauseVideo = null; // 横向きにしたときのvideoを入れる変数

    this.isBrowserFocus = false;
    this.isFirst = true; // 切り替えduration

    this.duration = 800; // video生成

    this.videoCurrent = new _Video__WEBPACK_IMPORTED_MODULE_0__["default"]($('#videoCurrent'));
    this.videoNext = new _Video__WEBPACK_IMPORTED_MODULE_0__["default"]($('#videoNext')); // video data

    this.videoData = new _VideoData__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  /**
   * setup
   */


  _createClass(VideoManager, [{
    key: "setup",
    value: function setup() {
      var self = this; // 再生

      self.$play.on('click', function (event) {
        event.preventDefault();

        if ($(this).hasClass('disabled')) {
          return;
        }

        $(this).addClass('disabled');
        self.$pause.removeClass('disabled');
        self.$next.removeClass('disabled');

        if (self.isPause) {
          self.isPause = false;

          if (self.isCurrent === true) {
            self.videoCurrent._resume();
          } else {
            self.videoNext._resume();
          }
        } else {
          self.videoCurrent._standby();

          self.videoNext._standby();

          self._videoPlay();
        }

        return false;
      }); // 次

      self.$next.on('click', function (event) {
        event.preventDefault();

        if ($(this).hasClass('disabled')) {
          return;
        }

        $(this).addClass('disabled');
        $.sequence(function () {
          self.videoID++;

          if (self.videoID > 4) {
            self.videoID = 1;
          }

          if (self.isCurrent === true) {
            // self.videoNext._standby();
            self.setPlay(self.videoID);
          } else {
            // self.videoCurrent._standby();
            self.setPlay(self.videoID);
          }

          self.$play.addClass('disabled');
          self.$pause.removeClass('disabled');
          return self.videoPlayingDef;
        }, function () {
          return self.$next.removeClass('disabled');
        });
        return false;
      }); // 停止

      self.$pause.on('click', function (event) {
        event.preventDefault();

        if ($(this).hasClass('disabled')) {
          return;
        }

        self.isPause = true;

        if (self.isCurrent === true) {
          self.videoCurrent._pause();
        } else {
          self.videoNext._pause();
        }

        $(this).addClass('disabled');
        self.$play.removeClass('disabled');
        self.$next.removeClass('disabled');
        return false;
      });
    }
    /**
     * _resetQueueData
     * キューデータをリセット
     * @method _resetQueueData
     * @param なし
     * @return {$.Deferred} 完了を通知
     */

  }, {
    key: "_resetQueueData",
    value: function _resetQueueData() {
      // console.log('_resetQueueData');
      var $def = $.Deferred();
      var self = this;

      if (self.queueData === null) {
        return;
      } // queueDataを強制終了させる各処理


      for (var key in self.queueData) {
        if (self.queueData[key].state() !== 'resolved') {
          self.queueData[key].resolve();
        }
      }

      self.queueData = null;
      $def.resolve();
      return $def.promise();
    }
    /**
     * _resetQueueDataSub
     * キューデータサブをリセット
     * @method _resetQueueDataSub
     * @param なし
     * @return {$.Deferred} 完了を通知
     */

  }, {
    key: "_resetQueueDataSub",
    value: function _resetQueueDataSub() {
      // console.log('_resetQueueDataSub');
      var $def = $.Deferred();
      var self = this;

      if (self.queueDataSub === null) {
        return;
      } // queueDataSubを強制終了させる各処理


      for (var key in self.queueDataSub) {
        if (self.queueDataSub[key].state() !== 'resolved') {
          self.queueDataSub[key].resolve();
        }
      }

      self.queueDataSub = null;
      $def.resolve();
      return $def.promise();
    }
    /**
     * _resetStream
     * streamのリセット
     * @method _resetStream
     * @param なし
     * @return {$.Deferred} 完了を通知
     */

  }, {
    key: "_resetStream",
    value: function _resetStream() {
      var $def = $.Deferred();
      var self = this;

      if (self.stream === null) {
        return;
      } // console.log(self.stream.state());


      if (self.stream.state() !== 'resolved') {
        self.stream.resolve();
      } // if(self.stream !== null) {


      self.stream = null;
      $def.resolve(); // }
      // console.log(self.stream);

      return $def.promise();
    }
    /**
     * _videoLoad
     * 動画をロードする
     * @method _videoLoad
     * @param {Array, String} videoData, 'preload'
     * @return
     */

  }, {
    key: "_videoLoad",
    value: function _videoLoad(videoData, type) {
      var self = this;

      if (type === 'preload') {
        // 17系とかの時
        // 再生する動画を読み込む
        if (self.isCurrent === true) {
          //videoNextに入っているものを消して、Currentを表示
          self.videoLoadedDef = self.videoCurrent._load(videoData.src);
        } else {
          // videoCurrentに入っているものを消してNextを表示
          self.videoLoadedDef = self.videoNext._load(videoData.src);
        }
      } else {
        // 再生する動画を読み込む
        if (self.isCurrent === true) {
          // videoCurrentに入っているものを消してNextを表示
          self.videoLoadedDef = self.videoNext._load(videoData.src);
        } else {
          //videoNextに入っているものを消して、Currentを表示
          self.videoLoadedDef = self.videoCurrent._load(videoData.src);
        }
      }
    }
    /**
     * setPlay
     * セットプレイヤー
     * @method setPlay
     * @param {String, Element} id (ルートid)
     * @return
     */

  }, {
    key: "setPlay",
    value: function setPlay(id) {
      var self = this;
      var videoData; // 動画の再生

      self.videoPlayingDef = $.Deferred();
      $.sequence(function () {
        // videodataにidを渡して、情報を取得
        videoData = self.videoData.get(id); // 再生する動画を読み込む

        self._videoLoad(videoData);
      }, function () {
        // pauseの時に入れた変数はnullにする
        self.isPauseVideo = null; // console.log('vM:setPlayer; id:'+id);
        // リセット処理

        self._resetStream();

        self._resetQueueData();

        self._resetQueueDataSub();

        self.stream = $.stream(function () {
          // 動画読み込み完了待ち
          return self.videoLoadedDef;
        }, function () {
          // console.log(self.videoLoadedDef.state());
          self.videoLoadedDef = null; // Videoの切り替え、動画をplay

          return self._switchVideoPlay(videoData);
        }, function () {
          self.videoPlayingDef.resolve();
          self.videoPlayingDef = null;
          return self.queueData.balloon;
        }, function () {
          // 吹き出しを表示
          // app.sceneManager.balloon();
          // ボタンを出すタイミングで抜ける
          return self.queueData.button;
        }, function () {
          // UIを表示する
          // console.log('UIを表示する');
          // app.sceneManager.button();
          // 残ってるqueueDataを強制的に終了
          // フェードアウトするタイミングで抜ける
          return self.queueData.fadeOut;
        }, function () {
          // 再生中の動画をfadeOutして、ループ動画読み込み・再生
          // console.log('ループ動画読み込み -> ' + videoData.nextLoop);
          if (videoData.nextLoop) {
            self._loopVideoPlay();
          }

          return;
        }, function () {
          // 再生終了を告げる（必要であれば）
          return self.queueData.end;
        }, function () {
          app.main.$play.removeClass('disabled');
          app.main.$pause.addClass('disabled');
          self.queueData = null; //self.queueData.end;になったら処理完了でnullにする
          // console.log('queueData null');
        }, function () {// console.log('stream完了');
        });
      });
    }
    /**
     * _videoSet
     * Videoをsetする（初回の人）
     * @method _videoSet
     * @param なし
     * @return {$.Deferred} 読み込み完了を通知
     */

  }, {
    key: "_videoSet",
    value: function _videoSet() {
      var $defVideo = $.Deferred();
      var self = this; // console.log('Videoをsetする（初回の人）');

      $.sequence(function () {
        // 再生する動画をセットして読み込み
        var data = self.videoData.get(1);
        return self.videoCurrent._load(data.src);
      }, function () {
        // 次の動画をセットして読み込み
        var data = self.videoData.get(2);
        return self.videoNext._load(data.src);
      }, function () {
        // 処理完了
        $defVideo.resolve();
      });
      return $defVideo.promise();
    }
    /**
     * _videoPlay
     * Videoを再生する（初回の人）
     * @method _videoPlay
     * @param なし
     * @return
     */

  }, {
    key: "_videoPlay",
    value: function _videoPlay() {
      var self = this;
      var videoData = self.videoData.get(1); // console.log('Videoを再生する（初回の人）');

      self.stream = $.stream(function () {
        return self._resetQueueData();
      }, function () {
        return self._resetQueueDataSub();
      }, function () {
        // app.sceneManager.$route.addClass('show');
        self.queueData = self.videoCurrent._play(videoData);
        return self.queueData.balloon;
      }, function () {
        // 吹き出しを表示
        // app.sceneManager.balloon();
        // ボタンを出すタイミングで抜ける
        return self.queueData.button;
      }, function () {
        // UIを表示する
        // app.sceneManager.button();
        // フェードアウトするタイミングで抜ける
        return self.queueData.fadeOut;
      }, function () {
        // 再生終了を告げる（必要であれば）
        return self.queueData.end;
      }, function () {
        app.main.$play.removeClass('disabled');
        app.main.$pause.addClass('disabled');
        self.queueData = null; //self.queueData.end;になったら処理完了でnullにする
      });
    }
    /**
     * _switchVideoPlay
     * Current動画とNext動画を切り替えて、再生
     * @method _switchVideoPlay
     * @param {Array, String} videoData (再生中のvideoデータ), type (sub or undefind)
     * @return {$.sequence} 完了を通知
     */

  }, {
    key: "_switchVideoPlay",
    value: function _switchVideoPlay(videoData, type) {
      var self = this;
      var videoObjectCurrent;
      var videoObjectNext;
      self.videoID = videoData.id; // console.log('再生中のvideoid -> ' + self.videoID);
      // Videoの切り替え
      // Loop状態で入ってくることはないので
      // Loopだったときの処理は無くてよい

      if (self.isCurrent === true) {
        videoObjectCurrent = self.videoCurrent;
        videoObjectNext = self.videoNext;
      } else {
        videoObjectCurrent = self.videoNext;
        videoObjectNext = self.videoCurrent;
      }

      return $.sequence(function () {
        if (self.isCrossfade === true) {
          videoObjectNext.$video.addClass('block'); // 動画再生

          if (type === 'sub') {
            return self.queueDataSub = videoObjectNext._play(videoData);
          } else {
            return self.queueData = videoObjectNext._play(videoData);
          }
        } else {
          return videoObjectCurrent.$video.addClass('hide').delay(self.duration);
        }
      }, function () {
        if (self.isCrossfade === true) {
          return videoObjectCurrent.$video.addClass('hide').delay(self.duration);
        }
      }, function () {
        videoObjectCurrent.$video.removeClass('show').removeClass('hide').addClass('standby');
        videoObjectNext.$video.removeClass('standby').addClass('show'); // 動画再生

        if (self.isCrossfade === false) {
          if (type === 'sub') {
            return self.queueDataSub = videoObjectNext._play(videoData);
          } else {
            return self.queueData = videoObjectNext._play(videoData);
          }
        }
      }, function () {
        if (self.isCrossfade === true) {
          videoObjectNext.$video.removeClass('block');
        } // Current・Nextを入れ替える
        // 次のVideoの最初をクロスフェードさせるフラグを立てる


        self.switchFlag(videoData.isCrossfade);
      });
    }
    /**
     * switchFlag
     * Current・Nextを入れ替える / 次のVideoの最初をクロスフェードさせるフラグを立てる
     * @method switchFlag
     * @param {Boolean} クロスフェードするかどうか
     * @return
     */

  }, {
    key: "switchFlag",
    value: function switchFlag(videoDataIsCrossfade) {
      var self = this; // Current・Nextを入れ替える

      if (self.isCurrent === true) {
        self.isCurrent = false;
      } else {
        self.isCurrent = true;
      } // 次のVideoの最初をクロスフェードさせるフラグを立てる


      if (videoDataIsCrossfade === true) {
        self.isCrossfade = true;
      } else {
        self.isCrossfade = false;
      }
    }
  }]);

  return VideoManager;
}();



/***/ }),

/***/ "./src/js/pages/video.js":
/*!*******************************!*\
  !*** ./src/js/pages/video.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_video_VideoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/video/VideoManager */ "./src/js/modules/video/VideoManager.js");

/*==========================================================================
	init call
==========================================================================*/

$(function ($) {
  var videoManager = new _modules_video_VideoManager__WEBPACK_IMPORTED_MODULE_0__["default"](); // 初回の処理

  $.sequence(function () {
    videoManager.setup();
    videoManager.isLoaded = true;
    return videoManager._videoSet();
  }, function () {
    // console.log('読み込み完了');
    videoManager.$loading.removeClass('active');
    videoManager.$play.removeClass('disabled');
  });
});

/***/ })

/******/ });