(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-tag/u-tag"],{"522b":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o(i("3bb9"));function o(t){return t&&t.__esModule?t:{default:t}}var u={name:"u-tag",mixins:[t.$u.mpMixin,t.$u.mixin,e.default],data:function(){return{}},computed:{style:function(){var t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),t},textColor:function(){var t={};return this.color&&(t.color=this.color),t},imgStyle:function(){var t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize:function(){var t="large"===this.size?15:"medium"===this.size?13:12;return t},iconSize:function(){var t="large"===this.size?21:"medium"===this.size?19:16;return t},elIconColor:function(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},methods:{closeHandler:function(){this.$emit("close",this.name)},clickHandler:function(){this.$emit("click",this.name)}}};n.default=u}).call(this,i("543d")["default"])},"526d":function(t,n,i){"use strict";var e=i("aab1"),o=i.n(e);o.a},9071:function(t,n,i){"use strict";i.r(n);var e=i("bf7f"),o=i("e9d8");for(var u in o)"default"!==u&&function(t){i.d(n,t,(function(){return o[t]}))}(u);i("526d");var r,l=i("f0c5"),c=Object(l["a"])(o["default"],e["b"],e["c"],!1,null,"0ada2b28",null,!1,e["a"],r);n["default"]=c.exports},aab1:function(t,n,i){},bf7f:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return e}));var e={uTransition:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-transition/u-transition")]).then(i.bind(null,"6f1a"))},uIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(i.bind(null,"1b47"))}},o=function(){var t=this,n=t.$createElement,i=(t._self._c,t.__get_style([{marginRight:t.closable?"10px":0,marginTop:t.closable?"10px":0},t.style])),e=t.icon?t.$u.test.image(t.icon):null,o=t.icon&&e?t.__get_style([t.imgStyle]):null,u=t.__get_style([t.textColor]);t.$mp.data=Object.assign({},{$root:{s0:i,g0:e,s1:o,s2:u}})},u=[]},e9d8:function(t,n,i){"use strict";i.r(n);var e=i("522b"),o=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-tag/u-tag-create-component',
    {
        'uni_modules/uview-ui/components/u-tag/u-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9071"))
        })
    },
    [['uni_modules/uview-ui/components/u-tag/u-tag-create-component']]
]);
