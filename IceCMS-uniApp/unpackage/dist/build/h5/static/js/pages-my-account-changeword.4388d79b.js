(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-account-changeword"],{"04a4":function(t,a,e){"use strict";e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.api=o;var n="http://http://119.45.164.21:7953/";function o(t,a,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return void 0==o&&(o={showError:!1}),new Promise((function(i,c){uni.request({url:n+t,method:a||"GET",data:e||{},header:{"Content-Type":"application/json"},success:function(t){t.data&&t.data.success||o.showError&&r(t),i(t.data)},fail:function(t){o.showError&&r(res),c(t)}})}))}var r=function(t){if(t)switch(t.data.code){case 401:uni.showToast({title:"没有权限",icon:"none",duration:1e3});break;case 403:uni.showToast({title:"拒绝访问",icon:"none",duration:1e3});break;case 404:uni.showToast({title:"很抱歉，资源未找到!",icon:"none",duration:1e3});break;case 500:uni.showToast({title:"没有权限",icon:"none",duration:1e3});break;case 502:uni.showToast({title:"服务器异常",icon:"none",duration:1e3});break;case 504:uni.showToast({title:"网络超时",icon:"none",duration:1e3});break;default:uni.showToast({title:"网络错误",icon:"none",duration:1e3});break}}},"2d93":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uTransition:e("d4af").default,uIcon:e("fbc1").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("u-transition",{attrs:{mode:"fade",show:t.show}},[e("v-uni-view",{staticClass:"u-alert",class:["u-alert--"+t.type+"--"+t.effect],style:[t.$u.addStyle(t.customStyle)],on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.clickHandler.apply(void 0,arguments)}}},[t.showIcon?e("v-uni-view",{staticClass:"u-alert__icon"},[e("u-icon",{attrs:{name:t.iconName,size:"18",color:t.iconColor}})],1):t._e(),e("v-uni-view",{staticClass:"u-alert__content",style:[{paddingRight:t.closable?"20px":0}]},[t.title?e("v-uni-text",{staticClass:"u-alert__content__title",class:["dark"===t.effect?"u-alert__text--dark":"u-alert__text--"+t.type+"--light"],style:[{fontSize:t.$u.addUnit(t.fontSize),textAlign:t.center?"center":"left"}]},[t._v(t._s(t.title))]):t._e(),t.description?e("v-uni-text",{staticClass:"u-alert__content__desc",class:["dark"===t.effect?"u-alert__text--dark":"u-alert__text--"+t.type+"--light"],style:[{fontSize:t.$u.addUnit(t.fontSize),textAlign:t.center?"center":"left"}]},[t._v(t._s(t.description))]):t._e()],1),t.closable?e("v-uni-view",{staticClass:"u-alert__close",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.closeHandler.apply(void 0,arguments)}}},[e("u-icon",{attrs:{name:"close",color:t.iconColor,size:"15"}})],1):t._e()],1)],1)},r=[]},"332f":function(t,a,e){"use strict";e.r(a);var n=e("7bca"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=o.a},5604:function(t,a,e){var n=e("6b67");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("6bd1ca37",n,!0,{sourceMap:!1,shadowMode:!1})},"59ad":function(t,a,e){"use strict";var n=e("5604"),o=e.n(n);o.a},6309:function(t,a,e){"use strict";e("a4d3"),e("e01a"),e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={props:{title:{type:String,default:uni.$u.props.alert.title},type:{type:String,default:uni.$u.props.alert.type},description:{type:String,default:uni.$u.props.alert.description},closable:{type:Boolean,default:uni.$u.props.alert.closable},showIcon:{type:Boolean,default:uni.$u.props.alert.showIcon},effect:{type:String,default:uni.$u.props.alert.effect},center:{type:Boolean,default:uni.$u.props.alert.center},fontSize:{type:[String,Number],default:uni.$u.props.alert.fontSize}}};a.default=n},"67c8":function(t,a,e){"use strict";e.r(a);var n=e("bd43"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=o.a},"6b67":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".index[data-v-3713e0d4]{margin:%?30?%}.mt20[data-v-3713e0d4]{margin-top:%?20?%;height:%?60?%}",""]),t.exports=a},"7bca":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e("6309")),r={name:"u-alert",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{show:!0}},computed:{iconColor:function(){return"light"===this.effect?this.type:"#fff"},iconName:function(){switch(this.type){case"success":return"checkmark-circle-fill";case"error":return"close-circle-fill";case"warning":return"error-circle-fill";case"info":return"info-circle-fill";case"primary":return"more-circle-fill";default:return"error-circle-fill"}}},methods:{clickHandler:function(){this.$emit("click")},closeHandler:function(){this.show=!1}}};a.default=r},"96a0":function(t,a,e){var n=e("ea52");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("af2bfa76",n,!0,{sourceMap:!1,shadowMode:!1})},"97cf":function(t,a,e){"use strict";e.r(a);var n=e("c774"),o=e("67c8");for(var r in o)"default"!==r&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("59ad");var i,c=e("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"3713e0d4",null,!1,n["a"],i);a["default"]=l.exports},b8c5:function(t,a,e){"use strict";e.r(a);var n=e("2d93"),o=e("332f");for(var r in o)"default"!==r&&function(t){e.d(a,t,(function(){return o[t]}))}(r);e("f628");var i,c=e("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"14cb325b",null,!1,n["a"],i);a["default"]=l.exports},bd43:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n(e("ef08"));var o={data:function(){return{old:"",news:"",news1:""}},methods:{pass:function(){var t=this,a=uni.getStorageSync("Token");console.log("用户的token是"+a),null!==a&&""!==a?this.news===this.news1?uni.request({url:"http://易如意后台域名/api.php?act=get_info&app=10000&token="+a,method:"GET",data:{},success:function(a){console.log("获取的用户信息是"+JSON.stringify(a.data.msg.user)),uni.request({url:"http://易如意后台域名/api.php?act=alter_pass&app=10000&user="+a.data.msg.user+"&password="+t.old+"&newpassword="+t.news,success:function(t){uni.showToast({title:t.data.msg,icon:"none"}),uni.setStorageSync("SET_ISLOGIN",!1),uni.removeStorageSync("Token"),uni.navigateTo({url:"login"})},fail:function(t){}})},fail:function(){},complete:function(){}}):""==this.news1?uni.showToast({title:"请输入两次密码！！",icon:"none"}):uni.showToast({title:"两次密码输入不一致！！！",icon:"none"}):(this.user="",this.isLogin=!1)}}};a.default=o},c412:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.zhuce=a.appId=a.getUserInfo=a.login=void 0;var n=e("04a4"),o=function(t){return(0,n.api)("api.php?act=user_logon","GET",t)};a.login=o;var r=function(t){return(0,n.api)("api.php?act=get_info","GET",t)};a.getUserInfo=r;var i=function(t){return(0,n.api)("api.php?act=act=ini","GET",t)};a.appId=i;var c=function(t){return(0,n.api)("api.php?act=user_reg&app=10000","GET",t)};a.zhuce=c},c774:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uAlert:e("b8c5").default,"u-Input":e("5ecd").default,uButton:e("a5e8").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"index"},[e("u-alert",{attrs:{title:"请牢记新密码哦!任何人都不要告诉哦!!!",type:"success"}}),e("u--input",{staticClass:"mt20",attrs:{placeholder:"请输入旧密码",pawssword:!0,clearable:!0,prefixIcon:"lock"},model:{value:t.old,callback:function(a){t.old=a},expression:"old"}}),e("u--input",{staticClass:"mt20",attrs:{placeholder:"请输入新密码",pawssword:!0,clearable:!0,maxlength:18,prefixIcon:"lock"},model:{value:t.news,callback:function(a){t.news=a},expression:"news"}}),e("u--input",{staticClass:"mt20",attrs:{placeholder:"请再次输入新密码",pawssword:!0,clearable:!0,maxlength:18,prefixIcon:"lock"},model:{value:t.news1,callback:function(a){t.news1=a},expression:"news1"}}),e("u-button",{staticClass:"mt20",attrs:{type:"primary",text:"修改密码",color:"#50A1FF"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pass()}}})],1)},r=[]},ea52:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.margin-b5[data-v-14cb325b]{margin-bottom:%?5?%}.margin-b10[data-v-14cb325b]{margin-bottom:%?10?%}.margin-b15[data-v-14cb325b]{margin-bottom:%?15?%}.margin-b20[data-v-14cb325b]{margin-bottom:%?20?%}.margin-b25[data-v-14cb325b]{margin-bottom:%?25?%}.margin-b30[data-v-14cb325b]{margin-bottom:%?30?%}.margin-b40[data-v-14cb325b]{margin-bottom:%?40?%}.margin-b60[data-v-14cb325b]{margin-bottom:%?60?%}.margin-b80[data-v-14cb325b]{margin-bottom:%?80?%}.margin-b100[data-v-14cb325b]{margin-bottom:%?100?%}.margin-r5[data-v-14cb325b]{margin-right:%?5?%}.margin-r10[data-v-14cb325b]{margin-right:%?10?%}.margin-r15[data-v-14cb325b]{margin-right:%?15?%}.margin-r20[data-v-14cb325b]{margin-right:%?20?%}.margin-r25[data-v-14cb325b]{margin-right:%?25?%}.margin-r30[data-v-14cb325b]{margin-right:%?30?%}.margin-r40[data-v-14cb325b]{margin-right:%?40?%}.margin-r60[data-v-14cb325b]{margin-right:%?60?%}.font-18[data-v-14cb325b]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-14cb325b]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-14cb325b]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-14cb325b]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-14cb325b]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-14cb325b]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-14cb325b]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-14cb325b]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-14cb325b]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-14cb325b]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-14cb325b]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-14cb325b]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-14cb325b]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-14cb325b]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-14cb325b]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-14cb325b]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-14cb325b]{text-align:left}.text-center[data-v-14cb325b]{text-align:center}.text-right[data-v-14cb325b]{text-align:right}.color-white[data-v-14cb325b]{color:#fff}.color-red[data-v-14cb325b]{color:#dc0000}.font-weight-400[data-v-14cb325b]{font-weight:400}.font-weight-500[data-v-14cb325b]{font-weight:700}.spacing-20[data-v-14cb325b]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-14cb325b]{border-radius:%?10?%}.radius-20[data-v-14cb325b]{border-radius:%?20?%}.radius-30[data-v-14cb325b]{border-radius:%?30?%}.radius-circle[data-v-14cb325b]{border-radius:50%}.radius-height[data-v-14cb325b]{border-radius:10000px}.vs-flex-item[data-v-14cb325b]{flex:1}.vs-space-between[data-v-14cb325b]{justify-content:space-between}.vs-space-around[data-v-14cb325b]{justify-content:space-around}.vs-space-center[data-v-14cb325b]{justify-content:center}.vs-space-end[data-v-14cb325b]{justify-content:flex-end}.vs-row[data-v-14cb325b]{flex-direction:row}.vs-column[data-v-14cb325b]{flex-direction:column}.vs-align-end[data-v-14cb325b]{align-items:flex-end}.vs-align-center[data-v-14cb325b]{align-items:center}.vs-align-start[data-v-14cb325b]{align-items:flex-start}.vs-item-hover[data-v-14cb325b]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-14cb325b]{opacity:.8}.color-base[data-v-14cb325b]{color:#50a1ff}.bg-color-base[data-v-14cb325b]{background-color:#50a1ff}\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-14cb325b], uni-scroll-view[data-v-14cb325b], uni-swiper-item[data-v-14cb325b]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-alert[data-v-14cb325b]{position:relative;background-color:#3c9cff;padding:8px 10px;display:flex;flex-direction:row;align-items:center;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.u-alert--primary--dark[data-v-14cb325b]{background-color:#3c9cff}.u-alert--primary--light[data-v-14cb325b]{background-color:#ecf5ff}.u-alert--error--dark[data-v-14cb325b]{background-color:#f56c6c}.u-alert--error--light[data-v-14cb325b]{background-color:#fef0f0}.u-alert--success--dark[data-v-14cb325b]{background-color:#50a1ff}.u-alert--success--light[data-v-14cb325b]{background-color:#f5fff0}.u-alert--warning--dark[data-v-14cb325b]{background-color:#f9ae3d}.u-alert--warning--light[data-v-14cb325b]{background-color:#fdf6ec}.u-alert--info--dark[data-v-14cb325b]{background-color:#909399}.u-alert--info--light[data-v-14cb325b]{background-color:#f4f4f5}.u-alert__icon[data-v-14cb325b]{margin-right:5px}.u-alert__content[data-v-14cb325b]{display:flex;flex-direction:column;flex:1}.u-alert__content__title[data-v-14cb325b]{color:#303133;font-size:14px;font-weight:700;color:#fff;margin-bottom:2px}.u-alert__content__desc[data-v-14cb325b]{color:#303133;font-size:14px;flex-wrap:wrap;color:#fff}.u-alert__title--dark[data-v-14cb325b], .u-alert__desc--dark[data-v-14cb325b]{color:#fff}.u-alert__text--primary--light[data-v-14cb325b], .u-alert__text--primary--light[data-v-14cb325b]{color:#3c9cff}.u-alert__text--success--light[data-v-14cb325b], .u-alert__text--success--light[data-v-14cb325b]{color:#50a1ff}.u-alert__text--warning--light[data-v-14cb325b], .u-alert__text--warning--light[data-v-14cb325b]{color:#f9ae3d}.u-alert__text--error--light[data-v-14cb325b], .u-alert__text--error--light[data-v-14cb325b]{color:#f56c6c}.u-alert__text--info--light[data-v-14cb325b], .u-alert__text--info--light[data-v-14cb325b]{color:#909399}.u-alert__close[data-v-14cb325b]{position:absolute;top:11px;right:10px}',""]),t.exports=a},ef08:function(t,a,e){"use strict";e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("c412"),o={namespaced:!0,state:{Token:uni.getStorageSync("Token")||{access_token:""},UserInfo:uni.getStorageSync("UserInfo")||{}},mutations:{SET_TOKEN:function(t,a){t.Token=a},SET_USERINFO:function(t,a){t.UserInfo=a}},actions:{Login:function(t,a){t.commit;return new Promise((function(t,e){(0,n.login)(a).then((function(a){console.log("登录了"+JSON.stringify(a)),200==a.code&&(uni.setStorageSync("SET_TOKEN",a.msg.token),uni.setStorageSync("Token",a.msg.token),uni.setStorageSync("SET_ISLOGIN",!0)),t(a)})).catch((function(t){e(t)}))}))},zhuce:function(t,a){t.commit;return new Promise((function(t,e){(0,n.zhuce)(a).then((function(a){console.log("注册了"+JSON.stringify(a)),200==a.code&&(uni.setStorageSync("SET_TOKEN",a.msg.token),uni.setStorageSync("Token",a.msg.token),uni.setStorageSync("SET_ISLOGIN",!0)),t(a)})).catch((function(t){e(t)}))}))},Logout:function(t){var a=t.commit,e=t.state;return new Promise((function(t){logout(e.token).then((function(){t()})).catch((function(){t()})).finally((function(){a("SET_TOKEN",{access_token:""}),uni.setStorageSync("SET_ISLOGIN",!1),uni.removeStorageSync("Token"),uni.removeStorageSync("IsLogin")}))}))},GetUserInfo:function(t){var a=t.commit;t.state;return new Promise((function(t){(0,n.getUserInfo)().then((function(e){console.log("获取了用户信息"+JSON.stringify(e)),200===e.code&&a("SET_USERINFO",e.data),t(e)}))}))}}},r=o;a.default=r},f628:function(t,a,e){"use strict";var n=e("96a0"),o=e.n(n);o.a}}]);