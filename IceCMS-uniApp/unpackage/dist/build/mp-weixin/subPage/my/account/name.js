require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subPage/my/account/name"],{"14bc":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{nic:""}},methods:{nics:function(){var t=this.nic.toString();console.log(t);var e=n.getStorageSync("Token");console.log("用户的token是"+e),null!==e&&""!==e?n.request({url:"http://易如意后台域名/api.php?act=alter_name&app=10000&token="+e+"&name="+t,success:function(t){console.log(t.data),n.showToast({title:t.data.msg,icon:"none"})},fail:function(n){}}):(this.user="",this.isLogin=!1)}}};t.default=e}).call(this,e("543d")["default"])},"4a5d":function(n,t,e){"use strict";(function(n){e("c6ef");u(e("66fd"));var t=u(e("b45b"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"6f7a":function(n,t,e){"use strict";var u=e("8d2f"),o=e.n(u);o.a},"7a02":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uAlert:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-alert/u-alert")]).then(e.bind(null,"c522"))},"u-Input":function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u--input/u--input")]).then(e.bind(null,"9f38"))},uButton:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-button/u-button")]).then(e.bind(null,"29bb"))}},o=function(){var n=this,t=n.$createElement;n._self._c},i=[]},"8d2f":function(n,t,e){},b45b:function(n,t,e){"use strict";e.r(t);var u=e("7a02"),o=e("d24d");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("6f7a");var c,a=e("f0c5"),r=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=r.exports},d24d:function(n,t,e){"use strict";e.r(t);var u=e("14bc"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a}},[["4a5d","common/runtime","common/vendor"]]]);