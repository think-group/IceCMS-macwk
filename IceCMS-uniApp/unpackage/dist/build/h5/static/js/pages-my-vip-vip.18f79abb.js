(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-vip-vip"],{"04a4":function(t,a,n){"use strict";n("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.api=o;var e="http://http://119.45.164.21:7953/";function o(t,a,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return void 0==o&&(o={showError:!1}),new Promise((function(r,c){uni.request({url:e+t,method:a||"GET",data:n||{},header:{"Content-Type":"application/json"},success:function(t){t.data&&t.data.success||o.showError&&i(t),r(t.data)},fail:function(t){o.showError&&i(res),c(t)}})}))}var i=function(t){if(t)switch(t.data.code){case 401:uni.showToast({title:"没有权限",icon:"none",duration:1e3});break;case 403:uni.showToast({title:"拒绝访问",icon:"none",duration:1e3});break;case 404:uni.showToast({title:"很抱歉，资源未找到!",icon:"none",duration:1e3});break;case 500:uni.showToast({title:"没有权限",icon:"none",duration:1e3});break;case 502:uni.showToast({title:"服务器异常",icon:"none",duration:1e3});break;case 504:uni.showToast({title:"网络超时",icon:"none",duration:1e3});break;default:uni.showToast({title:"网络错误",icon:"none",duration:1e3});break}}},2182:function(t,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var e={uAlert:n("b8c5").default,"u-Input":n("5ecd").default,uButton:n("a5e8").default},o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"index"},[n("u-alert",{attrs:{title:"请输入你购买的卡密哦!",type:"success"}}),n("u--input",{staticClass:"mt20",attrs:{placeholder:"请输入购买的卡密",clearable:!0,prefixIcon:"fingerprint"},model:{value:t.kami,callback:function(a){t.kami=a},expression:"kami"}}),n("u-button",{staticClass:"mt20",attrs:{type:"primary",text:"兑换会员",color:"#50A1FF"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.card()}}})],1)},i=[]},"2d93":function(t,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var e={uTransition:n("d4af").default,uIcon:n("fbc1").default},o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("u-transition",{attrs:{mode:"fade",show:t.show}},[n("v-uni-view",{staticClass:"u-alert",class:["u-alert--"+t.type+"--"+t.effect],style:[t.$u.addStyle(t.customStyle)],on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.clickHandler.apply(void 0,arguments)}}},[t.showIcon?n("v-uni-view",{staticClass:"u-alert__icon"},[n("u-icon",{attrs:{name:t.iconName,size:"18",color:t.iconColor}})],1):t._e(),n("v-uni-view",{staticClass:"u-alert__content",style:[{paddingRight:t.closable?"20px":0}]},[t.title?n("v-uni-text",{staticClass:"u-alert__content__title",class:["dark"===t.effect?"u-alert__text--dark":"u-alert__text--"+t.type+"--light"],style:[{fontSize:t.$u.addUnit(t.fontSize),textAlign:t.center?"center":"left"}]},[t._v(t._s(t.title))]):t._e(),t.description?n("v-uni-text",{staticClass:"u-alert__content__desc",class:["dark"===t.effect?"u-alert__text--dark":"u-alert__text--"+t.type+"--light"],style:[{fontSize:t.$u.addUnit(t.fontSize),textAlign:t.center?"center":"left"}]},[t._v(t._s(t.description))]):t._e()],1),t.closable?n("v-uni-view",{staticClass:"u-alert__close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.closeHandler.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"close",color:t.iconColor,size:"15"}})],1):t._e()],1)],1)},i=[]},"332f":function(t,a,n){"use strict";n.r(a);var e=n("7bca"),o=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=o.a},"55c3":function(t,a,n){"use strict";n.r(a);var e=n("2182"),o=n("b920");for(var i in o)"default"!==i&&function(t){n.d(a,t,(function(){return o[t]}))}(i);n("969f");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"5f19bc21",null,!1,e["a"],r);a["default"]=l.exports},6309:function(t,a,n){"use strict";n("a4d3"),n("e01a"),n("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={props:{title:{type:String,default:uni.$u.props.alert.title},type:{type:String,default:uni.$u.props.alert.type},description:{type:String,default:uni.$u.props.alert.description},closable:{type:Boolean,default:uni.$u.props.alert.closable},showIcon:{type:Boolean,default:uni.$u.props.alert.showIcon},effect:{type:String,default:uni.$u.props.alert.effect},center:{type:Boolean,default:uni.$u.props.alert.center},fontSize:{type:[String,Number],default:uni.$u.props.alert.fontSize}}};a.default=e},"7bca":function(t,a,n){"use strict";var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e(n("6309")),i={name:"u-alert",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{show:!0}},computed:{iconColor:function(){return"light"===this.effect?this.type:"#fff"},iconName:function(){switch(this.type){case"success":return"checkmark-circle-fill";case"error":return"close-circle-fill";case"warning":return"error-circle-fill";case"info":return"info-circle-fill";case"primary":return"more-circle-fill";default:return"error-circle-fill"}}},methods:{clickHandler:function(){this.$emit("click")},closeHandler:function(){this.show=!1}}};a.default=i},"80bf":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".mt20[data-v-5f19bc21]{margin-top:%?20?%;height:%?60?%}.index[data-v-5f19bc21]{margin:%?30?%}",""]),t.exports=a},"969f":function(t,a,n){"use strict";var e=n("f4bf"),o=n.n(e);o.a},"96a0":function(t,a,n){var e=n("ea52");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("af2bfa76",e,!0,{sourceMap:!1,shadowMode:!1})},"9b0a":function(t,a,n){"use strict";var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;e(n("ef08"));var o={data:function(){return{kami:""}},methods:{card:function(){var t=this;console.log(this.kami);var a=uni.getStorageSync("Token");null!==a&&""!==a?(uni.showLoading({title:"兑换中..."}),uni.request({url:"http://易如意后台域名/api.php?act=get_info&app=10000&token="+a,method:"GET",data:{},success:function(a){console.log("获取的用户信息是"+JSON.stringify(a.data.msg.user)),uni.request({url:"http://易如意后台域名/api.php?act=card&app=10000&account="+a.data.msg.user+"&kami="+t.kami,success:function(t){t.data.code,uni.hideLoading(),uni.showToast({title:t.data.msg,icon:"none"})},fail:function(t){console.log(t.data),uni.showToast({title:"服务器错误！",icon:"none"})}})},fail:function(t){console.log(t.data),uni.showToast({title:"服务器错误！",icon:"none"})},complete:function(){}})):(this.user="",this.isLogin=!1)}}};a.default=o},b8c5:function(t,a,n){"use strict";n.r(a);var e=n("2d93"),o=n("332f");for(var i in o)"default"!==i&&function(t){n.d(a,t,(function(){return o[t]}))}(i);n("f628");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"14cb325b",null,!1,e["a"],r);a["default"]=l.exports},b920:function(t,a,n){"use strict";n.r(a);var e=n("9b0a"),o=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=o.a},c412:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.zhuce=a.appId=a.getUserInfo=a.login=void 0;var e=n("04a4"),o=function(t){return(0,e.api)("api.php?act=user_logon","GET",t)};a.login=o;var i=function(t){return(0,e.api)("api.php?act=get_info","GET",t)};a.getUserInfo=i;var r=function(t){return(0,e.api)("api.php?act=act=ini","GET",t)};a.appId=r;var c=function(t){return(0,e.api)("api.php?act=user_reg&app=10000","GET",t)};a.zhuce=c},ea52:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.margin-b5[data-v-14cb325b]{margin-bottom:%?5?%}.margin-b10[data-v-14cb325b]{margin-bottom:%?10?%}.margin-b15[data-v-14cb325b]{margin-bottom:%?15?%}.margin-b20[data-v-14cb325b]{margin-bottom:%?20?%}.margin-b25[data-v-14cb325b]{margin-bottom:%?25?%}.margin-b30[data-v-14cb325b]{margin-bottom:%?30?%}.margin-b40[data-v-14cb325b]{margin-bottom:%?40?%}.margin-b60[data-v-14cb325b]{margin-bottom:%?60?%}.margin-b80[data-v-14cb325b]{margin-bottom:%?80?%}.margin-b100[data-v-14cb325b]{margin-bottom:%?100?%}.margin-r5[data-v-14cb325b]{margin-right:%?5?%}.margin-r10[data-v-14cb325b]{margin-right:%?10?%}.margin-r15[data-v-14cb325b]{margin-right:%?15?%}.margin-r20[data-v-14cb325b]{margin-right:%?20?%}.margin-r25[data-v-14cb325b]{margin-right:%?25?%}.margin-r30[data-v-14cb325b]{margin-right:%?30?%}.margin-r40[data-v-14cb325b]{margin-right:%?40?%}.margin-r60[data-v-14cb325b]{margin-right:%?60?%}.font-18[data-v-14cb325b]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-14cb325b]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-14cb325b]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-14cb325b]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-14cb325b]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-14cb325b]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-14cb325b]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-14cb325b]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-14cb325b]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-14cb325b]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-14cb325b]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-14cb325b]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-14cb325b]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-14cb325b]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-14cb325b]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-14cb325b]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-14cb325b]{text-align:left}.text-center[data-v-14cb325b]{text-align:center}.text-right[data-v-14cb325b]{text-align:right}.color-white[data-v-14cb325b]{color:#fff}.color-red[data-v-14cb325b]{color:#dc0000}.font-weight-400[data-v-14cb325b]{font-weight:400}.font-weight-500[data-v-14cb325b]{font-weight:700}.spacing-20[data-v-14cb325b]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-14cb325b]{border-radius:%?10?%}.radius-20[data-v-14cb325b]{border-radius:%?20?%}.radius-30[data-v-14cb325b]{border-radius:%?30?%}.radius-circle[data-v-14cb325b]{border-radius:50%}.radius-height[data-v-14cb325b]{border-radius:10000px}.vs-flex-item[data-v-14cb325b]{flex:1}.vs-space-between[data-v-14cb325b]{justify-content:space-between}.vs-space-around[data-v-14cb325b]{justify-content:space-around}.vs-space-center[data-v-14cb325b]{justify-content:center}.vs-space-end[data-v-14cb325b]{justify-content:flex-end}.vs-row[data-v-14cb325b]{flex-direction:row}.vs-column[data-v-14cb325b]{flex-direction:column}.vs-align-end[data-v-14cb325b]{align-items:flex-end}.vs-align-center[data-v-14cb325b]{align-items:center}.vs-align-start[data-v-14cb325b]{align-items:flex-start}.vs-item-hover[data-v-14cb325b]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-14cb325b]{opacity:.8}.color-base[data-v-14cb325b]{color:#50a1ff}.bg-color-base[data-v-14cb325b]{background-color:#50a1ff}\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-14cb325b], uni-scroll-view[data-v-14cb325b], uni-swiper-item[data-v-14cb325b]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-alert[data-v-14cb325b]{position:relative;background-color:#3c9cff;padding:8px 10px;display:flex;flex-direction:row;align-items:center;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.u-alert--primary--dark[data-v-14cb325b]{background-color:#3c9cff}.u-alert--primary--light[data-v-14cb325b]{background-color:#ecf5ff}.u-alert--error--dark[data-v-14cb325b]{background-color:#f56c6c}.u-alert--error--light[data-v-14cb325b]{background-color:#fef0f0}.u-alert--success--dark[data-v-14cb325b]{background-color:#50a1ff}.u-alert--success--light[data-v-14cb325b]{background-color:#f5fff0}.u-alert--warning--dark[data-v-14cb325b]{background-color:#f9ae3d}.u-alert--warning--light[data-v-14cb325b]{background-color:#fdf6ec}.u-alert--info--dark[data-v-14cb325b]{background-color:#909399}.u-alert--info--light[data-v-14cb325b]{background-color:#f4f4f5}.u-alert__icon[data-v-14cb325b]{margin-right:5px}.u-alert__content[data-v-14cb325b]{display:flex;flex-direction:column;flex:1}.u-alert__content__title[data-v-14cb325b]{color:#303133;font-size:14px;font-weight:700;color:#fff;margin-bottom:2px}.u-alert__content__desc[data-v-14cb325b]{color:#303133;font-size:14px;flex-wrap:wrap;color:#fff}.u-alert__title--dark[data-v-14cb325b], .u-alert__desc--dark[data-v-14cb325b]{color:#fff}.u-alert__text--primary--light[data-v-14cb325b], .u-alert__text--primary--light[data-v-14cb325b]{color:#3c9cff}.u-alert__text--success--light[data-v-14cb325b], .u-alert__text--success--light[data-v-14cb325b]{color:#50a1ff}.u-alert__text--warning--light[data-v-14cb325b], .u-alert__text--warning--light[data-v-14cb325b]{color:#f9ae3d}.u-alert__text--error--light[data-v-14cb325b], .u-alert__text--error--light[data-v-14cb325b]{color:#f56c6c}.u-alert__text--info--light[data-v-14cb325b], .u-alert__text--info--light[data-v-14cb325b]{color:#909399}.u-alert__close[data-v-14cb325b]{position:absolute;top:11px;right:10px}',""]),t.exports=a},ef08:function(t,a,n){"use strict";n("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("c412"),o={namespaced:!0,state:{Token:uni.getStorageSync("Token")||{access_token:""},UserInfo:uni.getStorageSync("UserInfo")||{}},mutations:{SET_TOKEN:function(t,a){t.Token=a},SET_USERINFO:function(t,a){t.UserInfo=a}},actions:{Login:function(t,a){t.commit;return new Promise((function(t,n){(0,e.login)(a).then((function(a){console.log("登录了"+JSON.stringify(a)),200==a.code&&(uni.setStorageSync("SET_TOKEN",a.msg.token),uni.setStorageSync("Token",a.msg.token),uni.setStorageSync("SET_ISLOGIN",!0)),t(a)})).catch((function(t){n(t)}))}))},zhuce:function(t,a){t.commit;return new Promise((function(t,n){(0,e.zhuce)(a).then((function(a){console.log("注册了"+JSON.stringify(a)),200==a.code&&(uni.setStorageSync("SET_TOKEN",a.msg.token),uni.setStorageSync("Token",a.msg.token),uni.setStorageSync("SET_ISLOGIN",!0)),t(a)})).catch((function(t){n(t)}))}))},Logout:function(t){var a=t.commit,n=t.state;return new Promise((function(t){logout(n.token).then((function(){t()})).catch((function(){t()})).finally((function(){a("SET_TOKEN",{access_token:""}),uni.setStorageSync("SET_ISLOGIN",!1),uni.removeStorageSync("Token"),uni.removeStorageSync("IsLogin")}))}))},GetUserInfo:function(t){var a=t.commit;t.state;return new Promise((function(t){(0,e.getUserInfo)().then((function(n){console.log("获取了用户信息"+JSON.stringify(n)),200===n.code&&a("SET_USERINFO",n.data),t(n)}))}))}}},i=o;a.default=i},f4bf:function(t,a,n){var e=n("80bf");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("6142ae7b",e,!0,{sourceMap:!1,shadowMode:!1})},f628:function(t,a,n){"use strict";var e=n("96a0"),o=n.n(e);o.a}}]);