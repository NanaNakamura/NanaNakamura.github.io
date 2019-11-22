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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/qrcode.js");
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
      navigator.mediaDevices.enumerateDevices().then(self.gotDevices.bind(this)).catch(function (err) {
        self.handleError(err);
      });
      self.videoSelect.addEventListener('change', function (event) {
        self.start();
      });
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
      navigator.mediaDevices.getUserMedia(constraints).then(self.gotStream.bind(self)).then(self.gotDevices.bind(self)).catch(function (err) {
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
      });

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

/***/ "./src/js/pages/qrcode.js":
/*!********************************!*\
  !*** ./src/js/pages/qrcode.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_webcamera_Webcamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/webcamera/Webcamera */ "./src/js/modules/webcamera/Webcamera.js");
 // import jsQR from "jsqr";

/*==========================================================================
init call
==========================================================================*/

$(function ($) {
  // var webcamera = new Webcamera();
  // webcamera.setup();
  // const jsQR = require("jsqr");
  // const code = jsQR(imageData, width, height);
  // if (code) {
  // 	console.log("Found QR code", code);
  // }
  var video = document.querySelector("video");
  var canv = document.querySelector("canvas");
  var context = canv.getContext("2d");
  context.drawImage(video, 0, 0, this.width, this.height);
  var imageData = context.getImageData(0, 0, this.width, this.height);
  console.log(imageData);
  var code = jsQR(imageData.data, imageData.width, imageData.height);

  if (code) {
    console.log("Found QR code", code, code.data);
  } // const video = document.querySelector("video");
  // let canv = document.querySelector("canvas");
  // const context = canv.getContext("2d");
  // setInterval(() => {
  // 		context.drawImage(video, 0, 0, this.width, this.height);
  // 		console.log(this.width);
  // 		const imageData = context.getImageData(0, 0, this.width, this.height);
  // 		const code = jsQR(imageData.data, imageData.width, imageData.height);
  // 		if (code) {
  // 				console.log("Found QR code", code, code.data);
  // 	}
  // }, 500);
  // // QRCODE reader Copyright 2011 Lazar Laszlo
  // // http://www.webqr.com
  // var gCtx = null;
  // var gCanvas = null;
  // var c = 0;
  // var stype = 0;
  // var gUM = false;
  // var webkit = false;
  // var moz = false;
  // var v = null;
  // // var imghtml = '<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>' +
  // // 	'<div id="imghelp">drag and drop a QRCode here' +
  // // 	'<br>or select a file' +
  // // 	'<input type="file" onchange="handleFiles(this.files)"/>' +
  // // 	'</div>' +
  // // 	'</div>';
  // // var vidhtml = '<video id="v" autoplay></video>';
  // var front = false;
  // var arg = new Object;
  // var pair = location.search.substring(1).split('&');
  // for (var i = 0; pair[i]; i++) {
  // 	var kv = pair[i].split('=');
  // 	arg[kv[0]] = kv[1];
  // }
  // // function dragenter(e) {
  // // 	e.stopPropagation();
  // // 	e.preventDefault();
  // // }
  // // function dragover(e) {
  // // 	e.stopPropagation();
  // // 	e.preventDefault();
  // // }
  // // function drop(e) {
  // // 	e.stopPropagation();
  // // 	e.preventDefault();
  // // 	var dt = e.dataTransfer;
  // // 	var files = dt.files;
  // // 	if (files.length > 0) {
  // // 		handleFiles(files);
  // // 	}
  // // 	else
  // // 		if (dt.getData('URL')) {
  // // 			qrcode.decode(dt.getData('URL'));
  // // 		}
  // // }
  // // function handleFiles(f) {
  // // 	var o = [];
  // // 	for (var i = 0; i < f.length; i++) {
  // // 		var reader = new FileReader();
  // // 		reader.onload = (function (theFile) {
  // // 			return function (e) {
  // // 				gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
  // // 				qrcode.decode(e.target.result);
  // // 			};
  // // 		})(f[i]);
  // // 		reader.readAsDataURL(f[i]);
  // // 	}
  // // }
  // function initCanvas() {
  // 	var video = document.getElementById("video");
  // 	var w = video.clientWidth;
  // 	var h = video.clientHeight;
  // 	gCanvas = document.getElementById("canvas");
  // 	gCanvas.style.width = w + "px";
  // 	gCanvas.style.height = h + "px";
  // 	gCanvas.width = w;
  // 	gCanvas.height = h;
  // 	gCtx = gCanvas.getContext("2d");
  // 	gCtx.clearRect(0, 0, w, h);
  // }
  // function captureToCanvas() {
  // 	if (stype != 1)
  // 		return;
  // 	if (gUM) {
  // 		try {
  // 			gCtx.drawImage(v, 0, 0);
  // 			try {
  // 				qrcode.decode();
  // 			}
  // 			catch (e) {
  // 				// console.log(e);
  // 				setTimeout(captureToCanvas, 500);
  // 			};
  // 		}
  // 		catch (e) {
  // 			// console.log(e);
  // 			setTimeout(captureToCanvas, 500);
  // 		};
  // 	}
  // }
  // // function htmlEntities(str) {
  // // 	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // // }
  // function read(a) {
  // 	var html = "";
  // 	if (a.indexOf("url->") === 0) {
  // 		var url = a.replace( 'url->', '');
  // 		html += "<a href='../stamp/" + url + "/'>3秒後に移動します</a><br>";
  // 		document.getElementById("result").innerHTML = html;
  // 		setTimeout(function () {
  // 			location.href = '../stamp/' + url + '/';
  // 			console.log(a)
  // 		}, 3000);
  // 	}
  // 	else if ((a === 'hana') || (a === 'kouseki') || (a === 'mejedo') || (a === 'pengin')) {
  // 		// var url = a.replace( 'url->', '');
  // 		var url = a;
  // 		html += "<a href='../stamp/" + url + "/'>3秒後に移動します</a><br>";
  // 		document.getElementById("result").innerHTML = html;
  // 		setTimeout(function () {
  // 			location.href = '../stamp/' + url + '/';
  // 			console.log(a)
  // 		}, 3000);
  // 	}
  // 	else if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0) {
  // 		// var url = a.replace( 'url->', '');
  // 		var url = a;
  // 		html += url + "<br>";
  // 		html += "<a href='" + url + "'>3秒後に移動します</a><br>";
  // 		document.getElementById("result").innerHTML = html;
  // 		setTimeout(function () {
  // 			location.href = url;
  // 			console.log(a)
  // 		}, 3000);
  // 	}
  // }
  // function isCanvasSupported() {
  // 	var elem = document.createElement('canvas');
  // 	return !!(elem.getContext && elem.getContext('2d'));
  // }
  // function success(stream) {
  // 	v.srcObject = stream;
  // 	v.play();
  // 	gUM = true;
  // 	setTimeout(captureToCanvas, 500);
  // }
  // function error(error) {
  // 	gUM = false;
  // 	return;
  // }
  // function load() {
  // 	// Camera切り替え用
  // 	if (arg['camera'] && arg['camera'] === 'change') {
  // 		front = true;
  // 	}
  // 	// document.getElementById("flipbutton").onclick = function() {
  // 	// 	// front = !front;
  // 	// 	if(front) {
  // 	// 		location.href = './'
  // 	// 	} else {
  // 	// 		location.href = './?camera=change'
  // 	// 	}
  // 	// };
  // 	if (isCanvasSupported() && window.File && window.FileReader) {
  // 		initCanvas();
  // 		qrcode.callback = read;
  // 		// document.getElementById("mainbody").style.display = "inline";
  // 		setwebcam();
  // 	}
  // 	else {
  // 		// document.getElementById("mainbody").style.display = "inline";
  // 		document.getElementById("mainbody").innerHTML = '<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>' +
  // 			'<br><p id="mp2">sorry your browser is not supported</p><br><br>' +
  // 			'<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>';
  // 	}
  // }
  // function setwebcam() {
  // 	var options = true;
  // 	if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
  // 		try {
  // 			navigator.mediaDevices.enumerateDevices()
  // 				.then(function (devices) {
  // 					devices.forEach(function (device) {
  // 						console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
  // 						if (device.kind === 'videoinput') {
  // 							if (device.label.toLowerCase().search("back") > -1) {
  // 								options =
  // 									{
  // 										'deviceId': { 'exact': device.deviceId }
  // 										// 'facingMode':'environment'//背面カメラ
  // 										// 'facingMode':'user'//インカメラ
  // 										// 'facingMode':(front? "user" : "environment")
  // 										// 'facingMode': { exact: (front? "user" : "environment"), }
  // 									};
  // 								console.log('----------------');
  // 								console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
  // 								console.log('----------------');
  // 							}
  // 						}
  // 					});
  // 					setwebcam2(options);
  // 				});
  // 		}
  // 		catch (e) {
  // 			console.log(e);
  // 		}
  // 	}
  // 	else {
  // 		console.log("no navigator.mediaDevices.enumerateDevices");
  // 		setwebcam2(options);
  // 	}
  // }
  // function setwebcam2(options) {
  // 	console.log(options);
  // 	document.getElementById("result").innerHTML = "- scanning -";
  // 	if (stype == 1) {
  // 		setTimeout(captureToCanvas, 500);
  // 		return;
  // 	}
  // 	var n = navigator;
  // 	// document.getElementById("outdiv").innerHTML = vidhtml;
  // 	v = document.getElementById("video");
  // 	if (n.mediaDevices.getUserMedia) {
  // 		n.mediaDevices.getUserMedia({ video: options, audio: false }).
  // 			then(function (stream) {
  // 				success(stream);
  // 			}).catch(function (error) {
  // 				error(error)
  // 			});
  // 	}
  // 	else
  // 		if (n.getUserMedia) {
  // 			webkit = true;
  // 			n.getUserMedia({ video: options, audio: false }, success, error);
  // 		}
  // 		else
  // 			if (n.webkitGetUserMedia) {
  // 				webkit = true;
  // 				n.webkitGetUserMedia({ video: options, audio: false }, success, error);
  // 			}
  // 	// document.getElementById("qrimg").style.opacity=0.2;
  // 	// document.getElementById("webcamimg").style.opacity=1.0;
  // 	stype = 1;
  // 	setTimeout(captureToCanvas, 500);
  // }
  // // function setimg() {
  // // 	document.getElementById("result").innerHTML = "";
  // // 	if (stype == 2)
  // // 		return;
  // // 	document.getElementById("outdiv").innerHTML = imghtml;
  // // 	//document.getElementById("qrimg").src="qrimg.png";
  // // 	//document.getElementById("webcamimg").src="webcam2.png";
  // // 	document.getElementById("qrimg").style.opacity = 1.0;
  // // 	document.getElementById("webcamimg").style.opacity = 0.2;
  // // 	var qrfile = document.getElementById("qrfile");
  // // 	qrfile.addEventListener("dragenter", dragenter, false);
  // // 	qrfile.addEventListener("dragover", dragover, false);
  // // 	qrfile.addEventListener("drop", drop, false);
  // // 	stype = 2;
  // // }
  // setTimeout(function(){
  // 	load();
  // }, 2000);

});

/***/ })

/******/ });