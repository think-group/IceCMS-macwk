(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/find"],{"1a77":function(e,t,n){"use strict";(function(e){n("c6ef");a(n("66fd"));var t=a(n("4df0"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"4df0":function(e,t,n){"use strict";n.r(t);var a=n("7987"),o=n("e5c6");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("6ac3");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=c.exports},"6ac3":function(e,t,n){"use strict";var a=n("e97a"),o=n.n(a);o.a},7987:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={nNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("nPro/navbar/navbar")]).then(n.bind(null,"a859"))}},o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},e5c6:function(e,t,n){"use strict";n.r(t);var a=n("f589"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},e97a:function(e,t,n){},f589:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a8d7"));function o(e){return e&&e.__esModule?e:{default:e}}var i=2,r=4,s={data:function(){return{newPost:[],list:[],shops:[],fens:[{fid:1,name:"天卡",money:"¥20积分"},{fid:2,name:"月卡",money:"¥69积分"},{fid:3,name:"年卡",money:"¥99积分"}],tag_color:["linear-gradient( 135deg, #03d9ff, #0345ff)","linear-gradient( 135deg, #CE9FFC, #9708CC)","linear-gradient( 135deg, #FEB692, #EA5455)","linear-gradient( 135deg, #8aeadf, #31bc92)","linear-gradient( 135deg, #FCCF31, #F55555)","linear-gradient( 135deg, #FFF6B7, #F6416C)","linear-gradient( 135deg, #aa55ff, #ff557f)","linear-gradient( 135deg, #00ff7f, #00aaff)","linear-gradient( 135deg, #ffaa00, #ff557f)","linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)","linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)","linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)","linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)","rgba(153, 204, 51, 0.6)","rgba(217, 135, 25, 0.6)"],tag_colors:["linear-gradient( 135deg, #aa55ff, #ff557f)","linear-gradient( 135deg, #00ff7f, #00aaff)","linear-gradient( 135deg, #ffaa00, #ff557f)","linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)","linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)","linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)","linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)","rgba(153, 204, 51, 0.6)","rgba(217, 135, 25, 0.6)"]}},onLoad:function(){this.getArctivelist(),this.codeList(),this.shopList()},onPageScroll:function(e){var t=this;t.scrollTopHightX=e.scrollTop},onReachBottom:function(){var t=this;e.request({url:a.default.GetPosts(i,r),success:function(n){"0"!=n.data.data.length?(i+=1,t.newPost=t.newPost.concat(n.data.data),e.hideLoading(),setTimeout((function(){e.stopPullDownRefresh()}),100)):e.showToast({icon:"none",title:"暂无更多"})}})},onPullDownRefresh:function(){console.log("!@3"),this.codeList(),this.shopList(),setTimeout((function(){e.stopPullDownRefresh()}),1e3)},methods:{getArctivelist:function(){var t=this;e.request({url:a.default.GetArctivelist(1,r),success:function(e){var n=e.data;"undefined"!=typeof n||"none"!=e.data?(t.showlist=!0,t.newPost=e.data.data,console.log(t.newPost)):t.showlist=!1}})},codeList:function(){var t=this;e.request({url:"shop.json文件域名",success:function(e){t.list=e.data}})},shopList:function(){var t=this;e.request({url:"http://易如意后台域名/api.php?act=goods&app=10000",success:function(e){t.shops=e.data.msg,console.log(t.shops)}})},joinqq:function(e){plus.runtime.openURL("mqq://im/chat?chat_type=wpa&uin="+e+"&version=1&src_type=web ")},shop:function(t){console.log(t);var n=e.getStorageSync("Token");if(null!==n&&""!==n){var a=new Date,o=a.getFullYear(),i=a.getMonth()+1,r=a.getDate(),s=a.getHours()<10?"0"+a.getHours():a.getHours(),c=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),l=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();i>=1&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r);var u=o+i+r+s+c+l+c+l+"1";plus.runtime.openURL("http://易如意后台域名/api.php?app=10000&act=pay&order="+u+"&token="+n+"&way=ali&gid="+t+"&ua=0")}else e.showModal({title:"未登录账号",content:"您没有登录账号，暂时不能购买，是否去登陆？",success:function(t){t.confirm?(console.log("用户点击确定"),e.navigateTo({url:"../account/login"})):t.cancel&&console.log("用户点击取消")}})},fen:function(t){console.log(t);var n=e.getStorageSync("Token");null!==n&&""!==n?e.request({url:"http://易如意后台域名/api.php?act=get_fen&app=10000&token="+n+"&fid="+t,success:function(t){200==t.data.code?(e.showToast({title:"兑换成功！"}),e.switchTab({url:"../my"})):e.showToast({title:t.data.msg,icon:"none"})}}):e.showModal({title:"未登录账号",content:"您没有登录账号，暂时不能购买，是否去登陆？",success:function(t){t.confirm?(console.log("用户点击确定"),e.navigateTo({url:"../account/login"})):t.cancel&&console.log("用户点击取消")}})}}};t.default=s}).call(this,n("543d")["default"])}},[["1a77","common/runtime","common/vendor"]]]);