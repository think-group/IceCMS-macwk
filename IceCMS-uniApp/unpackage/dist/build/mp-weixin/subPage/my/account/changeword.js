require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subPage/my/account/changeword"],{1071:function(n,t,e){"use strict";var o=e("7035"),u=e.n(o);u.a},"1e99":function(n,t,e){"use strict";(function(n){e("c6ef");o(e("66fd"));var t=o(e("4b1e"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"4b1e":function(n,t,e){"use strict";e.r(t);var o=e("bbfc"),u=e("b257");for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e("1071");var s,a=e("f0c5"),c=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=c.exports},7035:function(n,t,e){},"96a0":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{old:"",news:"",news1:""}},methods:{pass:function(){var t=this,e=n.getStorageSync("Token");console.log("用户的token是"+e),null!==e&&""!==e?this.news===this.news1?n.request({url:"http://易如意后台域名/api.php?act=get_info&app=10000&token="+e,method:"GET",data:{},success:function(e){console.log("获取的用户信息是"+JSON.stringify(e.data.msg.user)),n.request({url:"http://易如意后台域名/api.php?act=alter_pass&app=10000&user="+e.data.msg.user+"&password="+t.old+"&newpassword="+t.news,success:function(t){n.showToast({title:t.data.msg,icon:"none"}),n.setStorageSync("SET_ISLOGIN",!1),n.removeStorageSync("Token"),n.navigateTo({url:"login"})},fail:function(n){}})},fail:function(){},complete:function(){}}):""==this.news1?n.showToast({title:"请输入两次密码！！",icon:"none"}):n.showToast({title:"两次密码输入不一致！！！",icon:"none"}):(this.user="",this.isLogin=!1)}}};t.default=e}).call(this,e("543d")["default"])},b257:function(n,t,e){"use strict";e.r(t);var o=e("96a0"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=u.a},bbfc:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={uAlert:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-alert/u-alert")]).then(e.bind(null,"c522"))},"u-Input":function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u--input/u--input")]).then(e.bind(null,"9f38"))},uButton:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-button/u-button")]).then(e.bind(null,"29bb"))}},u=function(){var n=this,t=n.$createElement;n._self._c},i=[]}},[["1e99","common/runtime","common/vendor"]]]);