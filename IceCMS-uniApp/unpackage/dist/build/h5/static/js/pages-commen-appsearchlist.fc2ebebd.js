(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-commen-appsearchlist"],{"218a":function(t,e,a){var i=a("6582");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("75000b16",i,!0,{sourceMap:!1,shadowMode:!1})},4143:function(t,e,a){"use strict";a.r(e);var i=a("59af"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},44751:function(t,e,a){"use strict";a.r(e);var i=a("68bb"),n=a("4143");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("e09a");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"f8d2704c",null,!1,i["a"],r);e["default"]=c.exports},"59af":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("6d2e")),s={data:function(){return{keyword:"",name:"搜索结果",searchlist:[],showlist:""}},onLoad:function(t){this.keyword=t.keyword,this.getSearchList()},methods:{getSearchList:function(){var t=this,e=t.keyword;uni.request({url:n.default.Search(e),success:function(e){var a=e.data.data;"undefined"!=typeof a&&"none"!=e.data.data?(t.showlist=!0,t.searchlist=e.data.data,console.log(e.data)):t.showlist=!1}})},goDetails:function(t,e){uni.navigateTo({url:"/pages/commen/appdetails?cid="+t+"&name="+e})},leftClick:function(){uni.navigateBack({delta:1})}}};e.default=s},6582:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".nores[data-v-f8d2704c]{width:100%;\n\t/* align-items: center; */justify-content:center}.imgs[data-v-f8d2704c]{margin-left:%?285?%;align-items:center}.tip[data-v-f8d2704c]{text-align:center;color:#8799a3;font-size:%?40?%}.article_list[data-v-f8d2704c]{margin:%?30?% %?30?% 0 %?30?%}.navbarheight[data-v-f8d2704c]{height:44px;padding-top:0}.thumbs[data-v-f8d2704c]{width:%?120?%;height:%?120?%;border-radius:%?25?%;align-items:center}.article2[data-v-f8d2704c]{display:flex;\n\t/* padding: 10rpx; */justify-content:space-between;height:%?120?%;margin-top:%?20?%\n\t/* background-color: #55ff00; */}.title[data-v-f8d2704c]{width:%?400?%;height:%?40?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:%?30?%;line-height:%?40?%}.tagss[data-v-f8d2704c]{font-size:%?25?%;line-height:%?40?%;padding:%?5?%;color:#bababa}.tags[data-v-f8d2704c]{width:%?400?%;height:%?40?%;display:flex;white-space:nowrap;overflow:hidden}.other[data-v-f8d2704c]{display:flex;width:%?400?%;height:%?30?%;overflow:hidden;text-overflow:ellipsis;font-size:%?25?%;margin-top:%?15?%;line-height:%?30?%;color:#303133}.down[data-v-f8d2704c]{margin-top:%?35?%;\n\t/* margin-left: 10rpx; */width:%?120?%;height:%?50?%;background:#0081ff;display:flex;color:#fff;text-align:center;box-shadow:1px 1px 3px #1184ff;border-radius:%?50?%}.text[data-v-f8d2704c]{font-size:%?30?%;margin-top:%?5?%;margin-left:%?30?%}.you[data-v-f8d2704c]{width:%?400?%;height:100%\n\t/* margin-left: 10rpx; */\n\t/* flex: 2; */}",""]),t.exports=e},"68bb":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uNavbar:a("2982").default,uEmpty:a("a893").default,uNoNetwork:a("b2f3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("u-navbar",{attrs:{title:t.name,fixed:!0,safeAreaInsetTop:!0,leftIcon:"arrow-left",border:!0},on:{leftClick:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick()}}}),a("v-uni-view",{staticClass:"navbarheight"}),a("v-uni-view",{staticClass:"article_list"},[t.showlist?t._l(t.searchlist,(function(e,i){return a("v-uni-view",{key:i,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetails(e.cid,e.title)}}},[a("v-uni-view",{staticClass:"article2"},[a("v-uni-view",[a("v-uni-image",{staticClass:"thumbs",attrs:{src:e.thumb[0].str_value,mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"you"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"tags"},t._l(e.tag,(function(e,i){return a("v-uni-view",{key:i,staticClass:"tagss"},[t._v(t._s(e.name))])})),1),a("v-uni-view",{staticClass:"other"},[a("v-uni-view",{staticClass:"views"},[t._v(t._s(e.views[0].views)+"次下载")])],1)],1),a("v-uni-view",{staticClass:"down"},[a("v-uni-text",{staticClass:"text"},[t._v("下载")])],1)],1)],1)})):a("u-empty",{attrs:{mode:"search",icon:"http://cdn.uviewui.com/uview/empty/search.png"}})],2),a("u-no-network")],1)},s=[]},e09a:function(t,e,a){"use strict";var i=a("218a"),n=a.n(i);n.a}}]);