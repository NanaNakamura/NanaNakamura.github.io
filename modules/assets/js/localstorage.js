!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}({11:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isStorage,this.$def=$.Deferred()}var t,n,o;return t=e,(n=[{key:"setup",value:function(){var t=this;if(t.isStorage="sessionStorage"in window&&"localStorage"in window,t.isStorage){try{localStorage.setItem("_INKJS_",1)}catch(e){t.isStorage=!1}t.isStorage&&(localStorage.removeItem("_INKJS_"),t.isStorage=!0),t.$def.resolve()}return t.$def.promise()}},{key:"_add",value:function(e,t){localStorage.setItem(e,t)}},{key:"_update",value:function(e,t){var n=this._get(e),o=[];null!==n&&o.push(n),o.push(t),localStorage.setItem(e,o)}},{key:"_get",value:function(e){return localStorage.getItem(e)}},{key:"_getAll",value:function(e){for(var t,n=0,o={};t=window.localStorage.key(n);n++)o[t]=window.localStorage.getItem(t);return!0===e&&(o=JSON.stringify(o)),o}},{key:"_remove",value:function(e){localStorage.removeItem(e)}},{key:"_clear",value:function(){localStorage.clear()}}])&&r(t.prototype,n),o&&r(t,o),e}();$(function(e){var r=new m,n=e("#log"),t=e("#add"),o=e("#update"),a=e("#remove"),l=e("#get"),u=e("#all"),i=e("#clear"),c=e("#consoleReset"),f=e("#addItem"),v=e("#addData"),s=e("#updateItem"),p=e("#updateData"),d=e(".list"),g=e("#removeList"),y=e("#getList");function S(e){var t="";t+=e+"\n",t+="---\n",t+=n.val(),n.val(t),function(){var e=r._getAll();for(var t in d.find("option").remove(),Object.keys(e).length?d.append('<option value="">Keyを選択してください</option>'):d.append('<option value="">-</option>'),e)d.append('<option value="'+t+'">'+t+"</option>")}()}e.sequence(function(){return r.setup()},function(){var e="";e+="ローカルストレージが使えるかどうか\n",S(e+=r.isStorage)}),t.on("click",function(e){e.preventDefault();var t,n=f.val(),o=v.val();""===o||""===n?S("Key 又は Value が入力されていません"):(r._add(n,o),t="",t+="データを追加・変更\n",S(t+="Key : "+n+"\nValue : "+o))}),o.on("click",function(e){e.preventDefault();var t,n=s.val(),o=p.val();""===o||""===n?S("Key 又は Value が入力されていません"):(r._update(n,o),t="",t+="データを追加で保存する\n",t+="Key : "+n+"\nValue : "+o+"\n",S(t+="保存後のValue : "+r._get(n)))}),a.on("click",function(e){e.preventDefault();var t=g.val();""!==t&&(r._remove(t),S(t+"のデータを削除"))}),l.on("click",function(e){e.preventDefault();var t,n=y.val();""!==n&&(t=n+"のデータを取得\n",S(t+="Key : "+n+"\nValue : "+r._get(n)))}),u.on("click",function(e){e.preventDefault();var t="";t+="Localstorageのすべてのデータを取得\n",S(t+=r._getAll(!0))}),i.on("click",function(e){e.preventDefault(),r._clear(),S("Localstorageのデータを削除しました")}),c.on("click",function(e){e.preventDefault(),n.val("")})})}});