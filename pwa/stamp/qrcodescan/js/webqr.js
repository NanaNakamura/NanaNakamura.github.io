// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com

var gCtx = null;
var gCanvas = null;
var c = 0;
var stype = 0;
var gUM = false;
var webkit = false;
var moz = false;
var v = null;

var imghtml = '<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>' +
	'<div id="imghelp">drag and drop a QRCode here' +
	'<br>or select a file' +
	'<input type="file" onchange="handleFiles(this.files)"/>' +
	'</div>' +
	'</div>';

var vidhtml = '<video id="v" autoplay></video>';

var front = false;
var arg = new Object;
var pair = location.search.substring(1).split('&');
for (var i = 0; pair[i]; i++) {
	var kv = pair[i].split('=');
	arg[kv[0]] = kv[1];
}

function dragenter(e) {
	e.stopPropagation();
	e.preventDefault();
}

function dragover(e) {
	e.stopPropagation();
	e.preventDefault();
}
function drop(e) {
	e.stopPropagation();
	e.preventDefault();

	var dt = e.dataTransfer;
	var files = dt.files;
	if (files.length > 0) {
		handleFiles(files);
	}
	else
		if (dt.getData('URL')) {
			qrcode.decode(dt.getData('URL'));
		}
}
function handleFiles(f) {
	var o = [];

	for (var i = 0; i < f.length; i++) {
		var reader = new FileReader();
		reader.onload = (function (theFile) {
			return function (e) {
				gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

				qrcode.decode(e.target.result);
			};
		})(f[i]);
		reader.readAsDataURL(f[i]);
	}
}

function initCanvas(w, h) {
	gCanvas = document.getElementById("qr-canvas");
	gCanvas.style.width = w + "px";
	gCanvas.style.height = h + "px";
	gCanvas.width = w;
	gCanvas.height = h;
	gCtx = gCanvas.getContext("2d");
	gCtx.clearRect(0, 0, w, h);
}


function captureToCanvas() {
	if (stype != 1)
		return;
	if (gUM) {
		try {
			gCtx.drawImage(v, 0, 0);
			try {
				qrcode.decode();
			}
			catch (e) {
				// console.log(e);
				setTimeout(captureToCanvas, 500);
			};
		}
		catch (e) {
			// console.log(e);
			setTimeout(captureToCanvas, 500);
		};
	}
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a) {
	var html = "";
	if (a.indexOf("url->") === 0) {
		var url = a.replace( 'url->', '');
		html += "<a href='../stamp/" + url + "/'>3秒後に移動します</a><br>";
		document.getElementById("result").innerHTML = html;
		setTimeout(function () {
			location.href = '../stamp/' + url + '/';
			console.log(a)
		}, 3000);
	}
	else if ((a === 'hana') || (a === 'kouseki') || (a === 'mejedo') || (a === 'pengin')) {
		// var url = a.replace( 'url->', '');
		var url = a;
		html += "<a href='../stamp/" + url + "/'>3秒後に移動します</a><br>";
		document.getElementById("result").innerHTML = html;
		setTimeout(function () {
			location.href = '../stamp/' + url + '/';
			console.log(a)
		}, 3000);
	}
	else if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0) {
		// var url = a.replace( 'url->', '');
		var url = a;
		html += url + "<br>";
		html += "<a href='" + url + "'>3秒後に移動します</a><br>";
		document.getElementById("result").innerHTML = html;
		setTimeout(function () {
			location.href = url;
			console.log(a)
		}, 3000);
	}
}

function isCanvasSupported() {
	var elem = document.createElement('canvas');
	return !!(elem.getContext && elem.getContext('2d'));
}
function success(stream) {

	v.srcObject = stream;
	v.play();

	gUM = true;
	setTimeout(captureToCanvas, 500);
}

function error(error) {
	gUM = false;
	return;
}

function load() {

	// Camera切り替え用
	if (arg['camera'] && arg['camera'] === 'change') {
		front = true;
	}

	// document.getElementById("flipbutton").onclick = function() {
	// 	// front = !front;
	// 	if(front) {
	// 		location.href = './'
	// 	} else {
	// 		location.href = './?camera=change'
	// 	}
	// };

	if (isCanvasSupported() && window.File && window.FileReader) {
		initCanvas(800, 600);
		qrcode.callback = read;
		document.getElementById("mainbody").style.display = "inline";
		setwebcam();
	}
	else {
		document.getElementById("mainbody").style.display = "inline";
		document.getElementById("mainbody").innerHTML = '<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>' +
			'<br><p id="mp2">sorry your browser is not supported</p><br><br>' +
			'<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>';
	}
}

function setwebcam() {

	var options = true;
	if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
		try {
			navigator.mediaDevices.enumerateDevices()
				.then(function (devices) {
					devices.forEach(function (device) {
						console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
						if (device.kind === 'videoinput') {
							if (device.label.toLowerCase().search("back") > -1) {
								options =
									{
										'deviceId': { 'exact': device.deviceId }
										// 'facingMode':'environment'//背面カメラ
										// 'facingMode':'user'//インカメラ
										// 'facingMode':(front? "user" : "environment")
										// 'facingMode': { exact: (front? "user" : "environment"), }
									};
								console.log('----------------');
								console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
								console.log('----------------');
							}
						}
					});
					setwebcam2(options);
				});
		}
		catch (e) {
			console.log(e);
		}
	}
	else {
		console.log("no navigator.mediaDevices.enumerateDevices");
		setwebcam2(options);
	}

}

function setwebcam2(options) {
	console.log(options);
	document.getElementById("result").innerHTML = "- scanning -";
	if (stype == 1) {
		setTimeout(captureToCanvas, 500);
		return;
	}
	var n = navigator;
	document.getElementById("outdiv").innerHTML = vidhtml;
	v = document.getElementById("v");


	if (n.mediaDevices.getUserMedia) {
		n.mediaDevices.getUserMedia({ video: options, audio: false }).
			then(function (stream) {
				success(stream);
			}).catch(function (error) {
				error(error)
			});
	}
	else
		if (n.getUserMedia) {
			webkit = true;
			n.getUserMedia({ video: options, audio: false }, success, error);
		}
		else
			if (n.webkitGetUserMedia) {
				webkit = true;
				n.webkitGetUserMedia({ video: options, audio: false }, success, error);
			}

	// document.getElementById("qrimg").style.opacity=0.2;
	// document.getElementById("webcamimg").style.opacity=1.0;

	stype = 1;
	setTimeout(captureToCanvas, 500);
}

function setimg() {
	document.getElementById("result").innerHTML = "";
	if (stype == 2)
		return;
	document.getElementById("outdiv").innerHTML = imghtml;
	//document.getElementById("qrimg").src="qrimg.png";
	//document.getElementById("webcamimg").src="webcam2.png";
	document.getElementById("qrimg").style.opacity = 1.0;
	document.getElementById("webcamimg").style.opacity = 0.2;
	var qrfile = document.getElementById("qrfile");
	qrfile.addEventListener("dragenter", dragenter, false);
	qrfile.addEventListener("dragover", dragover, false);
	qrfile.addEventListener("drop", drop, false);
	stype = 2;
}