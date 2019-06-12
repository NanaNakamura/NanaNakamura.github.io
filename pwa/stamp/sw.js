// キャッシュファイルの指定
var CACHE_NAME = 'stampcard-caches-v1';
var CACHE_KEYS = [
	CACHE_NAME
];
var urlsToCache = [
	'./',
	'./manifest.json',
	'./index.html',
	'./offline.html',
	// './qrcodescan/**/*',
	// './stamp/**/*',
	// './stampcard/**/*',
	'./assets/**/*.js',
	'./assets/**/*.js',
	'./assets/**/*.png',
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
// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		caches
// 			.match(event.request)
// 			.then(function(response) {
// 				return response ? response : fetch(event.request);
// 			})
// 	);
// });
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