webpackJsonp([0],{"5fBQ":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s={name:"TextareaJustHeight",methods:{input:function(){this.$el.children[0].style.height="",this.$el.children[0].style.height=this.$el.children[0].scrollHeight+"px"},handleResize:function(){this.input()}},mounted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"box"},[t("textarea",{attrs:{placeholder:"テキストを入力"},on:{input:this.input}})])},staticRenderFns:[]};var a={name:"App",components:{TextareaJustHeight:n("VU/8")(s,r,!1,function(e){n("QTsF")},"data-v-23c372dc",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("input textarea just height!!!")]),this._v(" "),t("TextareaJustHeight")],1)},staticRenderFns:[]};var c=n("VU/8")(a,o,!1,function(e){this.$style=n("Np0D"),n("5fBQ")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:c},template:"<App/>"})},Np0D:function(e,t){e.exports={cf:"rsArx06Djf3ZHztSAdvOs_0"}},QTsF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.43bbf9c0f174931e7a1c.js.map