(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(t,e,o){var content=o(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("36873827",content,!0,{sourceMap:!1})},277:function(t,e,o){"use strict";var r=o(261);o.n(r).a},278:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,".hidden-field{width:0;height:0;visibility:hidden}.progress-bar{height:100vh;background-color:#fff;z-index:99999}.progress-bar,.top{transition:all 1s ease;position:absolute;left:0;top:0;width:100vw}.top{height:50vh;background-color:#0b171f}.middle{right:0;top:0;transition:all .5s ease;width:4px;height:4px;background-color:#fff;z-index:9999999;border-radius:50%;margin:auto}.bottom,.middle{left:0;bottom:0;position:absolute}.bottom{transition:all 1s ease;height:50vh;width:100vw;background-color:#0b171f}",""])},279:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden-field"},[e("img",{attrs:{src:o(122)}}),e("img",{attrs:{src:o(123)}}),e("img",{attrs:{src:o(124)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"top"}),e("div",{staticClass:"middle"}),e("div",{staticClass:"bottom"})])}],n=(o(16),{layout:"default",components:{AppLogo:o(113).a},data:function(){return{}},mounted:function(){var t=function(){console.log("Фотография успешно загружена."),progress+=o,r++;var t="width: "+Math.floor(progress)+"%";document.querySelector(".progress-bar .middle").style=t,progress>=100&&r==e.length&&(document.querySelector(".top").style.height=0,document.querySelector(".bottom").style.height=0,setTimeout(function(){document.querySelector(".progress-bar").style="opacity: 0;"},1e3),setTimeout(function(){document.querySelector(".progress-bar").style="display: none;"},1500))},e=document.querySelectorAll("img"),o=100/e.length,progress=0,r=0;e.forEach(function(img){img.onload=t})}}),l=(o(277),o(6)),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[this._m(0),this._m(1),e("div",{staticClass:"container"},[e("span",[this._v("M или K")]),e("span",[this._v("?")]),e("app-logo")],1)])},r,!1,null,null,null);e.default=component.exports}}]);