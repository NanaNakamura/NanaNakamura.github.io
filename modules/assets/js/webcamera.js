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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/webcamera.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/webcamera/Webcamera.js":
/*!***********************************************!*\
  !*** ./src/js/modules/webcamera/Webcamera.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Webcamera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Webcamera
 */
var Webcamera =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function Webcamera() {
    _classCallCheck(this, Webcamera);

    this.videoElement = document.querySelector('video');
    this.videoSelect = document.querySelector('select#videoSource');
    this.selectors = [this.videoSelect];
  }
  /**
   * setup
   */


  _createClass(Webcamera, [{
    key: "setup",
    value: function setup() {
      var self = this;
      navigator.mediaDevices.enumerateDevices().then(function (e) {
        return self.gotDevices(e);
      }).catch(function (err) {
        self.handleError(err);
      });
      self.videoSelect.onchange = self.start;
      self.start();
    }
    /**
     * start
     */

  }, {
    key: "start",
    value: function start() {
      var self = this;

      if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
          track.stop();
        });
      }

      var videoSource = self.videoSelect.value;
      var constraints = {
        audio: false,
        video: {
          deviceId: videoSource ? {
            exact: videoSource
          } : undefined
        }
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (e) {
        return self.gotStream(e);
      }).then(function (e) {
        return self.gotDevices(e);
      }).catch(function (err) {
        self.handleError(err);
      });
    }
    /**
     * gotDevices
     */

  }, {
    key: "gotDevices",
    value: function gotDevices(deviceInfos) {
      var self = this; // Handles being called several times to update labels. Preserve values.

      var values = self.selectors.map(function (select) {
        return select.value;
      });
      self.selectors.forEach(function (select) {
        while (select.firstChild) {
          select.removeChild(select.firstChild);
        }
      }); // console.log(deviceInfos.length);

      for (var i = 0; i !== deviceInfos.length; ++i) {
        var deviceInfo = deviceInfos[i];
        var option = document.createElement('option');
        option.value = deviceInfo.deviceId;

        if (deviceInfo.kind === 'audioinput') {} else if (deviceInfo.kind === 'audiooutput') {} else if (deviceInfo.kind === 'videoinput') {
          // if (deviceInfo.kind === 'videoinput') {
          option.text = deviceInfo.label || "camera ".concat(self.videoSelect.length + 1);
          self.videoSelect.appendChild(option);
        } else {
          console.log('Some other kind of source/device: ', deviceInfo);
        }
      }

      self.selectors.forEach(function (select, selectorIndex) {
        if (Array.prototype.slice.call(select.childNodes).some(function (n) {
          return n.value === values[selectorIndex];
        })) {
          select.value = values[selectorIndex];
        }
      });
    }
    /**
     * gotStream
     */

  }, {
    key: "gotStream",
    value: function gotStream(stream) {
      var self = this;
      window.stream = stream; // make stream available to console

      self.videoElement.srcObject = stream; // Refresh button list in case labels have become available

      return navigator.mediaDevices.enumerateDevices();
    }
    /**
     * handleError
     */

  }, {
    key: "handleError",
    value: function handleError(error) {
      console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
    }
  }]);

  return Webcamera;
}();



/***/ }),

/***/ "./src/js/pages/webcamera.js":
/*!***********************************!*\
  !*** ./src/js/pages/webcamera.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_webcamera_Webcamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/webcamera/Webcamera */ "./src/js/modules/webcamera/Webcamera.js");

/*==========================================================================
init call
==========================================================================*/

$(function ($) {
  var webcamera = new _modules_webcamera_Webcamera__WEBPACK_IMPORTED_MODULE_0__["default"]();
  webcamera.setup(); // // 初回の処理
  // $.sequence(
  // 	function () {
  // 		videoManager.isLoaded = true;
  // 		return videoManager._videoSet();
  // 	},
  // 	function () {
  // 		// console.log('読み込み完了');
  // 		videoManager.$loading.removeClass('active');
  // 		videoManager.$play.removeClass('disabled');
  // 	}
  // );
  // const videoElement = document.querySelector('video');
  // // const audioInputSelect = document.querySelector('select#audioSource');
  // // const audioOutputSelect = document.querySelector('select#audioOutput');
  // const videoSelect = document.querySelector('select#videoSource');
  // // const selectors = [audioInputSelect, audioOutputSelect, videoSelect];
  // const selectors = [videoSelect];
  // // audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);
  // function gotDevices(deviceInfos) {
  // 	// Handles being called several times to update labels. Preserve values.
  // 	const values = selectors.map(select => select.value);
  // 	selectors.forEach(select => {
  // 		while (select.firstChild) {
  // 			select.removeChild(select.firstChild);
  // 		}
  // 	});
  // 	for (let i = 0; i !== deviceInfos.length; ++i) {
  // 		const deviceInfo = deviceInfos[i];
  // 		const option = document.createElement('option');
  // 		option.value = deviceInfo.deviceId;
  // 		if (deviceInfo.kind === 'audioinput') {
  // 			// option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
  // 			// audioInputSelect.appendChild(option);
  // 		} else if (deviceInfo.kind === 'audiooutput') {
  // 			// option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
  // 			// audioOutputSelect.appendChild(option);
  // 		} else if (deviceInfo.kind === 'videoinput') {
  // 			option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
  // 			videoSelect.appendChild(option);
  // 		} else {
  // 			console.log('Some other kind of source/device: ', deviceInfo);
  // 		}
  // 	}
  // 	selectors.forEach((select, selectorIndex) => {
  // 		if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
  // 			select.value = values[selectorIndex];
  // 		}
  // 	});
  // }
  // navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
  // // // Attach audio output device to video element using device/sink ID.
  // // function attachSinkId(element, sinkId) {
  // // 	if (typeof element.sinkId !== 'undefined') {
  // // 		element.setSinkId(sinkId)
  // // 			.then(() => {
  // // 				console.log(`Success, audio output device attached: ${sinkId}`);
  // // 			})
  // // 			.catch(error => {
  // // 				let errorMessage = error;
  // // 				if (error.name === 'SecurityError') {
  // // 					errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
  // // 				}
  // // 				console.error(errorMessage);
  // // 				// Jump back to first output device in the list as it's the default.
  // // 				// audioOutputSelect.selectedIndex = 0;
  // // 			});
  // // 	} else {
  // // 		console.warn('Browser does not support output device selection.');
  // // 	}
  // // }
  // // function changeAudioDestination() {
  // // 	// const audioDestination = audioOutputSelect.value;
  // // 	// attachSinkId(videoElement, audioDestination);
  // // 	attachSinkId(videoElement);
  // // }
  // function gotStream(stream) {
  // 	window.stream = stream; // make stream available to console
  // 	videoElement.srcObject = stream;
  // 	// Refresh button list in case labels have become available
  // 	return navigator.mediaDevices.enumerateDevices();
  // }
  // function handleError(error) {
  // 	console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
  // }
  // function start() {
  // 	if (window.stream) {
  // 		window.stream.getTracks().forEach(track => {
  // 			track.stop();
  // 		});
  // 	}
  // 	// const audioSource = audioInputSelect.value;
  // 	const videoSource = videoSelect.value;
  // 	const constraints = {
  // 		// audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
  // 		audio: false,
  // 		video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  // 	};
  // 	navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
  // }
  // // audioInputSelect.onchange = start;
  // // audioOutputSelect.onchange = changeAudioDestination;
  // videoSelect.onchange = start;
  // start();
});

/***/ })

/******/ });