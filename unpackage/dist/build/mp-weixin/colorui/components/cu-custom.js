(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{4006:function(t,a,e){"use strict";e.r(a);var n=e("d887"),r=e("dcc6");for(var o in r)"default"!==o&&function(t){e.d(a,t,function(){return r[t]})}(o);var u=e("2877"),c=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},"8c9e":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,e=this.bgImage,n="height:".concat(a,"px;padding-top:").concat(t,"px;background-color:").concat(this.bgColor,";opacity: ").concat(this.textOpacity,"; border-bottom: 1px solid ").concat(this.isShowBorder?"#F0F0F1;":"transparent",";");return this.bgImage&&(n="".concat(n,"background-image:url(").concat(e,");")),n}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},textOpacity:{type:Number,default:1},isShowBorder:{type:Boolean,default:!0}},created:function(){var t=this;if(!this.CustomBar)var a=setInterval(function(){0!=t.CustomBar?clearInterval(a):(t.StatusBar=t.StatusBar,t.CustomBar=t.CustomBar)},100)},methods:{BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var a="/"+__wxConfig.pages[0];return t.redirectTo({url:a})}t.navigateBack({delta:1})}}};a.default=e}).call(this,e("543d")["default"])},d887:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})},dcc6:function(t,a,e){"use strict";e.r(a);var n=e("8c9e"),r=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4006"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                