(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{1618:function(a,t,i){"use strict";var n=i("26d1"),e=i.n(n);e.a},"26d1":function(a,t,i){var n=i("deff");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var e=i("4f06").default;e("7750b91f",n,!0,{sourceMap:!1,shadowMode:!1})},"421e":function(a,t,i){a.exports=i.p+"static/img/setting.13f3e40b.png"},"53a6":function(a,t,i){"use strict";i.r(t);var n=i("8c80"),e=i("8b6a");for(var o in e)"default"!==o&&function(a){i.d(t,a,(function(){return e[a]}))}(o);i("1618");var r,s=i("f0c5"),f=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"20ab60f6",null,!1,n["a"],r);t["default"]=f.exports},"7cce":function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isH5Plus:!1,userinfo:{},orderTypeLise:[{name:"待付款",icon:"l1.png",badge:1},{name:"待发货",icon:"l2.png",badge:2},{name:"待收货",icon:"l3.png",badge:6},{name:"待评价",icon:"l4.png",badge:9},{name:"退换货",icon:"l5.png",badge:0}],severList:[[{name:"兑换会员",icon:"point.png"},{name:"修改密码",icon:"quan.png"},{name:"绑定邮箱",icon:"momey.png"},{name:"修改昵称",icon:"renw.png"}],[{name:"积分明细",icon:"mingxi.png"},{name:"清除缓存",icon:"choujiang.png"},{name:"收货地址",icon:"addr.png"},{name:"银行卡",icon:"bank.png"},{name:"安全中心",icon:"security.png"},{name:"在线客服",icon:"kefu.png"}]]}},onLoad:function(){this.init()},methods:{init:function(){this.userinfo={face:"../../static/HM-PersonalCenter/face.jpeg",username:"VIP会员10240",integral:"1435"}},toOrderType:function(a){uni.showToast({title:this.orderTypeLise[a].name})},toPage:function(a,t){uni.showToast({title:this.severList[a][t].name})}}};t.default=n},"8b6a":function(a,t,i){"use strict";i.r(t);var n=i("7cce"),e=i.n(n);for(var o in n)"default"!==o&&function(a){i.d(t,a,(function(){return n[a]}))}(o);t["default"]=e.a},"8c80":function(a,t,i){"use strict";var n;i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"header",class:{status:a.isH5Plus}},[n("v-uni-view",{staticClass:"userinfo"},[n("v-uni-view",{staticClass:"face"},[n("v-uni-image",{attrs:{src:a.userinfo.face}})],1),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"username"},[a._v(a._s(a.userinfo.username))]),n("v-uni-view",{staticClass:"integral"},[a._v("积分:"+a._s(a.userinfo.integral))])],1)],1),n("v-uni-view",{staticClass:"setting"},[n("v-uni-image",{attrs:{src:i("421e")}})],1)],1),n("v-uni-view",{staticClass:"orders"},[n("v-uni-view",{staticClass:"box"},a._l(a.orderTypeLise,(function(t,i){return n("v-uni-view",{key:t.name,staticClass:"label",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.toOrderType(i)}}},[n("v-uni-view",{staticClass:"icon"},[t.badge>0?n("v-uni-view",{staticClass:"badge"},[a._v(a._s(t.badge))]):a._e(),n("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/"+t.icon}})],1),a._v(a._s(t.name))],1)})),1)],1),a._l(a.severList,(function(t,e){return n("v-uni-view",{key:e,staticClass:"list"},a._l(t,(function(o,r){return n("v-uni-view",{key:o.name,staticClass:"li",class:{noborder:r==t.length-1},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.toPage(e,r)}}},[n("v-uni-view",{staticClass:"icon"},[n("v-uni-image",{attrs:{src:"../../static/HM-PersonalCenter/sever/"+o.icon}})],1),n("v-uni-view",{staticClass:"text"},[a._v(a._s(o.name))]),n("v-uni-image",{staticClass:"to",attrs:{src:i("a521")}})],1)})),1)}))],2)},o=[]},a521:function(a,t){a.exports="data:image/png;base64,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"},deff:function(a,t,i){var n=i("24fb");t=n(!1),t.push([a.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.margin-b5[data-v-20ab60f6]{margin-bottom:%?5?%}.margin-b10[data-v-20ab60f6]{margin-bottom:%?10?%}.margin-b15[data-v-20ab60f6]{margin-bottom:%?15?%}.margin-b20[data-v-20ab60f6]{margin-bottom:%?20?%}.margin-b25[data-v-20ab60f6]{margin-bottom:%?25?%}.margin-b30[data-v-20ab60f6]{margin-bottom:%?30?%}.margin-b40[data-v-20ab60f6]{margin-bottom:%?40?%}.margin-b60[data-v-20ab60f6]{margin-bottom:%?60?%}.margin-b80[data-v-20ab60f6]{margin-bottom:%?80?%}.margin-b100[data-v-20ab60f6]{margin-bottom:%?100?%}.margin-r5[data-v-20ab60f6]{margin-right:%?5?%}.margin-r10[data-v-20ab60f6]{margin-right:%?10?%}.margin-r15[data-v-20ab60f6]{margin-right:%?15?%}.margin-r20[data-v-20ab60f6]{margin-right:%?20?%}.margin-r25[data-v-20ab60f6]{margin-right:%?25?%}.margin-r30[data-v-20ab60f6]{margin-right:%?30?%}.margin-r40[data-v-20ab60f6]{margin-right:%?40?%}.margin-r60[data-v-20ab60f6]{margin-right:%?60?%}.font-18[data-v-20ab60f6]{font-style:normal;font-size:%?18?%;font-family:Droid Sans Fallback}.font-20[data-v-20ab60f6]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-20ab60f6]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-20ab60f6]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-20ab60f6]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-20ab60f6]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-20ab60f6]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-20ab60f6]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-20ab60f6]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-20ab60f6]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-20ab60f6]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-20ab60f6]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-46[data-v-20ab60f6]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-50[data-v-20ab60f6]{font-style:normal;font-size:%?50?%;font-family:Droid Sans Fallback}.font-60[data-v-20ab60f6]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-80[data-v-20ab60f6]{font-style:normal;font-size:%?80?%;font-family:Droid Sans Fallback}.text-left[data-v-20ab60f6]{text-align:left}.text-center[data-v-20ab60f6]{text-align:center}.text-right[data-v-20ab60f6]{text-align:right}.color-white[data-v-20ab60f6]{color:#fff}.color-red[data-v-20ab60f6]{color:#dc0000}.font-weight-400[data-v-20ab60f6]{font-weight:400}.font-weight-500[data-v-20ab60f6]{font-weight:700}.spacing-20[data-v-20ab60f6]{width:%?750?%;height:%?20?%;background-color:#f8f8f8}.radius-10[data-v-20ab60f6]{border-radius:%?10?%}.radius-20[data-v-20ab60f6]{border-radius:%?20?%}.radius-30[data-v-20ab60f6]{border-radius:%?30?%}.radius-circle[data-v-20ab60f6]{border-radius:50%}.radius-height[data-v-20ab60f6]{border-radius:10000px}.vs-flex-item[data-v-20ab60f6]{flex:1}.vs-space-between[data-v-20ab60f6]{justify-content:space-between}.vs-space-around[data-v-20ab60f6]{justify-content:space-around}.vs-space-center[data-v-20ab60f6]{justify-content:center}.vs-space-end[data-v-20ab60f6]{justify-content:flex-end}.vs-row[data-v-20ab60f6]{flex-direction:row}.vs-column[data-v-20ab60f6]{flex-direction:column}.vs-align-end[data-v-20ab60f6]{align-items:flex-end}.vs-align-center[data-v-20ab60f6]{align-items:center}.vs-align-start[data-v-20ab60f6]{align-items:flex-start}.vs-item-hover[data-v-20ab60f6]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-20ab60f6]{opacity:.8}.color-base[data-v-20ab60f6]{color:#50a1ff}.bg-color-base[data-v-20ab60f6]{background-color:#50a1ff}\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-20ab60f6]{background-color:#fff}.header[data-v-20ab60f6]{background-color:#50a1ff;width:92%;height:30vw;padding:0 4%;display:flex;align-items:center}.header.status[data-v-20ab60f6]{padding-top:0}.header .userinfo[data-v-20ab60f6]{width:90%;display:flex}.header .userinfo .face[data-v-20ab60f6]{flex-shrink:0;width:15vw;height:15vw}.header .userinfo .face uni-image[data-v-20ab60f6]{width:100%;height:100%;border-radius:100%}.header .userinfo .info[data-v-20ab60f6]{display:flex;flex-flow:wrap;padding-left:%?30?%}.header .userinfo .info .username[data-v-20ab60f6]{width:100%;color:#fff;font-size:%?40?%}.header .userinfo .info .integral[data-v-20ab60f6]{display:flex;align-items:center;padding:0 %?20?%;height:%?40?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%}.header .setting[data-v-20ab60f6]{flex-shrink:0;width:6vw;height:6vw}.header .setting uni-image[data-v-20ab60f6]{width:100%;height:100%}.hover[data-v-20ab60f6]{background-color:#eee}.orders[data-v-20ab60f6]{background-color:#50a1ff;width:92%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:flex;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-20ab60f6]{width:98%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:flex;align-items:center;justify-content:center}.orders .box .label[data-v-20ab60f6]{display:flex;align-items:center;justify-content:center;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-20ab60f6]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-20ab60f6]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:flex;align-items:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-20ab60f6]{width:7vw;height:7vw;z-index:9}.list[data-v-20ab60f6]{width:100%;border-bottom:solid %?26?% #f1f1f1}.list .li[data-v-20ab60f6]{width:92%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:flex;align-items:center}.list .li.noborder[data-v-20ab60f6]{border-bottom:0}.list .li .icon[data-v-20ab60f6]{flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-20ab60f6]{width:%?50?%;height:%?50?%}.list .li .text[data-v-20ab60f6]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-20ab60f6]{flex-shrink:0;width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-20ab60f6]{background-color:#fff}',""]),a.exports=t}}]);