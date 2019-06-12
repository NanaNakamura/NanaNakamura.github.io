// https://qiita.com/OMOIKANESAN/items/13a3dde525e33eb608ae

// キャッシュファイルの指定
var CACHE_VERSION = 'v0.0.2';
var CACHE_NAME = 'stampcard-caches-' + CACHE_VERSION;
var CACHE_KEYS = [
// 	CACHE_NAME
];
console.log(CACHE_NAME);
var urlsToCache = [
	'./',
	'./index.html',
	'./manifest.json',
	'./offline.html',
	'./qrcodescan/',
	'./qrcodescan/index.html',
	'./qrcodescan/js/llqrcode.js',
	'./qrcodescan/js/webqr.js',
	'./stamp/',
	'./stamp/index.html',
	'./stamp/pengin/',
	'./stamp/pengin/index.html',
	'./stamp/mejedo/',
	'./stamp/mejedo/index.html',
	'./stamp/kouseki/',
	'./stamp/kouseki/index.html',
	'./stamp/hana/',
	'./stamp/hana/index.html',
	'./stampcard/',
	'./stampcard/index.html',
	'./assets/img/icon.png',
	'./assets/img/1.png',
	'./assets/img/2.png',
	'./assets/img/3.png',
	'./assets/img/4.png',
	'./assets/img/5.png',
	'./assets/img/6.png',
	'./assets/img/7.png',
	'./assets/img/anubis.png',
	'./assets/img/attention1.png',
	'./assets/img/bastet.png',
	'./assets/img/boy.png',
	'./assets/img/hana.png',
	'./assets/img/hastur.png',
	'./assets/img/horus.png',
	'./assets/img/kouseki.png',
	'./assets/img/link.png',
	'./assets/img/mejedo.png',
	'./assets/img/mondai.png',
	'./assets/img/p1.png',
	'./assets/img/p2.png',
	'./assets/img/p3.png',
	'./assets/img/p4.png',
	'./assets/img/p5.png',
	'./assets/img/p6.png',
	'./assets/img/pengin.png',
	'./assets/img/ra.png',
	'./assets/img/seth.png',
	'./assets/img/toto.png',
	'./assets/js/libs.js',
	'./assets/js/common.js',
	'./assets/css/common.css',
	'./assets/css/index.css'
];

// インストール処理
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
		.open(CACHE_NAME) // 上記で指定しているキャッシュ名
		.then(
			function(cache){
				console.log('インストール処理');
				return cache.addAll(urlsToCache); // 指定したリソースをキャッシュへ追加
				// 1つでも失敗したらService Workerのインストールはスキップされる
			}
		)
	);
});

// 新しいバージョンがインストールされた際に、過去のバージョンを削除
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(
				keys.filter(key => {
					return !CACHE_KEYS.includes(key);
				}).map(key => {
					// 不要なキャッシュを削除
					console.log('不要なキャッシュを削除');
					return caches.delete(key);
				})
			);
		})
	);
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
	//ブラウザが回線に接続しているかをboolで返してくれる
	var online = navigator.onLine;

	//回線が使えるときの処理
	if(online){
		event.respondWith(
			caches.match(event.request)
				.then(
				function (response) {
					if (response) {
						return response;
					}
					//ローカルにキャッシュがあればすぐ返して終わりですが、
					//無かった場合はここで新しく取得します
					return fetch(event.request)
						.then(function(response){
							// 取得できたリソースは表示にも使うが、キャッシュにも追加しておきます
							// ただし、Responseはストリームなのでキャッシュのために使用してしまうと、ブラウザの表示で不具合が起こる(っぽい)ので、複製しましょう
							cloneResponse = response.clone();
							if(response){
								//ここ&&に修正するかもです
								if(response || response.status == 200){
									//現行のキャッシュに追加
									caches.open(CACHE_NAME)
										.then(function(cache)
										{
											cache.put(event.request, cloneResponse)
											.then(function(){
												//正常にキャッシュ追加できたときの処理(必要であれば)
											});
										});
								}else{
									//正常に取得できなかったときにハンドリングしてもよい
									return response;
								}
								return response;
							}
						}).catch(function(error) {
							//デバッグ用
							return console.log(error);
						});
				})
		);
	}else{
		//オフラインのときの制御
		event.respondWith(
			caches.match(event.request)
				.then(function(response) {
					// キャッシュがあったのでそのレスポンスを返す
					if (response) {
						return response;
					}
					//オフラインでキャッシュもなかったパターン
					return caches.match("offline.html")
							.then(function(responseNodata)
							{
								//適当な変数にオフラインのときに渡すリソースを入れて返却
								//今回はoffline.htmlを返しています
								return responseNodata;
							});
				}
			)
		);
	}
});
