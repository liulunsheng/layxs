(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-details"],{"129b":function(a,e,t){"use strict";var i=t("78d1"),s=t.n(i);s.a},"2d6a":function(a,e,t){"use strict";t.r(e);var i=t("9b7e"),s=t("ed57");for(var n in s)"default"!==n&&function(a){t.d(e,a,function(){return s[a]})}(n);t("129b");var l,o=t("f0c5"),d=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"41eb6fe9",null,!1,i["a"],l);e["default"]=d.exports},"78d1":function(a,e,t){var i=t("c655");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=t("4f06").default;s("0be5c8e0",i,!0,{sourceMap:!1,shadowMode:!1})},"9b7e":function(a,e,t){"use strict";var i,s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("div",{staticClass:"ad-wrap"},[t("v-uni-image",{staticClass:"ad-image",attrs:{src:"/static/image/01.png",mode:"scaleToFill"}})],1),t("div",{staticClass:"main-body"},[t("div",{staticClass:"banner"},[t("v-uni-swiper",{attrs:{autoplay:!0,interval:5e3,duration:300},on:{change:function(e){arguments[0]=e=a.$handleEvent(e),a.onBannerChange.apply(void 0,arguments)}}},a._l(a.bannerData,function(e,i){return t("v-uni-swiper-item",{key:i,on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.onBannerTap(e)}}},[t("v-uni-image",{staticClass:"banner-image",attrs:{src:e.path,mode:"scaleToFill"}})],1)}),1)],1),t("div",{staticClass:"game-details"},[t("v-uni-image",{staticClass:"game-image",attrs:{src:"/static/image/03.png",mode:"scaleToFill"}}),a._m(0)],1),t("div",{staticClass:"title-bar"},[a._v("Game instructions")]),t("div",{staticClass:"game-describe"},[a._v("The game story tells that one day the westem cowboy was The game story tells that one day the westem cowboy wasThe game story tells that one day the westem cowboy wasThe game story tells that one day the westem cowboy wasThe game story tells that one day the westem cowboy was")]),t("div",{staticClass:"title-bar"},[a._v("Related games")]),t("div",{staticClass:"popular-list"},[t("div",{staticClass:"popular-item"},[t("div",{staticClass:"popular-wrap",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.gotoGameDetails.apply(void 0,arguments)}}},[t("v-uni-image",{staticClass:"popular-image",attrs:{src:"/static/image/04.png",mode:"scaleToFill"}})],1)]),t("div",{staticClass:"popular-item"},[t("div",{staticClass:"popular-wrap popular-middle",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.gotoGameDetails.apply(void 0,arguments)}}},[t("v-uni-image",{staticClass:"popular-image",attrs:{src:"/static/image/05.png",mode:"scaleToFill"}})],1),t("div",{staticClass:"popular-wrap popular-middle",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.gotoGameDetails.apply(void 0,arguments)}}},[t("v-uni-image",{staticClass:"popular-image",attrs:{src:"/static/image/06.png",mode:"scaleToFill"}})],1)]),t("div",{staticClass:"popular-item"},[t("div",{staticClass:"popular-wrap",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.gotoGameDetails.apply(void 0,arguments)}}},[t("v-uni-image",{staticClass:"popular-image",attrs:{src:"/static/image/07.png",mode:"scaleToFill"}})],1)])])])])},n=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"game-info"},[t("div",{staticClass:"game-name"},[a._v("Save the cowboy")]),t("div",{staticClass:"game-desc"},[a._v("Cut the rope")]),t("div",{staticClass:"game-count"},[a._v("1200+")]),t("div",{staticClass:"game-btn"},[t("span",{staticClass:"iconfont"},[a._v("")]),t("span",{staticClass:"text"},[a._v("Play")])])])}];t.d(e,"b",function(){return s}),t.d(e,"c",function(){return n}),t.d(e,"a",function(){return i})},bfa2:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{bannerData:[{path:"/static/image/02.png"}]}},methods:{onBannerChange:function(a){this.bannerData=a.target.current},onBannerTap:function(a){},gotoGameDetails:function(){uni.navigateTo({url:"/pages/index/details"})}}};e.default=i},c655:function(a,e,t){e=a.exports=t("2350")(!1),e.push([a.i,".ad-image[data-v-41eb6fe9]{width:100%;height:%?200?%;border-radius:%?8?%}.main-body[data-v-41eb6fe9]{padding:%?24?%}.banner[data-v-41eb6fe9]{height:%?380?%;position:relative}.banner uni-swiper[data-v-41eb6fe9]{height:inherit}.banner-image[data-v-41eb6fe9]{width:100%;height:%?380?%;border-radius:%?12?%}.game-details[data-v-41eb6fe9]{background:#2d595e ;margin-top:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex}.game-details .game-image[data-v-41eb6fe9]{width:%?320?%;height:%?320?%}.game-details .game-info[data-v-41eb6fe9]{padding:%?24?%}.game-details .game-name[data-v-41eb6fe9]{font-size:%?28?%;font-weight:700;line-height:%?40?%}.game-details .game-desc[data-v-41eb6fe9]{font-size:%?24?%;color:hsla(0,0%,100%,.8);margin-top:%?24?%}.game-details .game-count[data-v-41eb6fe9]{font-size:%?24?%;color:hsla(0,0%,100%,.8)}.game-details .game-btn[data-v-41eb6fe9]{display:inline-block;box-shadow:0 0 0 1px #fff;line-height:%?40?%;padding:0 %?16?%;border-radius:%?26?%;margin-top:%?24?%}.game-details .game-btn .iconfont[data-v-41eb6fe9]{font-size:%?24?%;margin-right:%?8?%}.game-details .game-btn .text[data-v-41eb6fe9]{font-size:%?26?%}.title-bar[data-v-41eb6fe9]{background:#005770;margin-top:%?24?%;line-height:%?40?%;padding:%?10?% %?24?%;border-radius:%?30?%}.game-describe[data-v-41eb6fe9]{font-size:%?24?%;color:hsla(0,0%,100%,.8);line-height:%?36?%;text-indent:2em;margin-top:%?12?%}.popular-list[data-v-41eb6fe9]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?12?%}.popular-item[data-v-41eb6fe9]{width:33%;padding-right:%?6?%;box-sizing:border-box}.popular-item[data-v-41eb6fe9]:nth-child(2){width:34%}.popular-item[data-v-41eb6fe9]:nth-child(2){padding:0 %?6?%}.popular-item[data-v-41eb6fe9]:nth-child(3){padding-left:%?6?%}.popular-image[data-v-41eb6fe9]{width:100%;height:%?340?%}.popular-middle[data-v-41eb6fe9]{margin-top:%?20?%}.popular-middle[data-v-41eb6fe9]:first-child{margin-top:0}.popular-middle .popular-image[data-v-41eb6fe9]{height:%?160?%}",""])},ed57:function(a,e,t){"use strict";t.r(e);var i=t("bfa2"),s=t.n(i);for(var n in i)"default"!==n&&function(a){t.d(e,a,function(){return i[a]})}(n);e["default"]=s.a}}]);