(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(e,t,n){var content=n(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("18313349",content,!0,{sourceMap:!1})},199:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("43282b80",content,!0,{sourceMap:!1})},200:function(e,t,n){var content=n(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("7c9b3a4a",content,!0,{sourceMap:!1})},212:function(e,t,n){"use strict";var o=n(198);n.n(o).a},213:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".ripple[data-v-f57d4550]{display:inline-block;position:absolute;width:64px;height:64px}.ripple__circle[data-v-f57d4550]{position:absolute;border:4px solid #60d070;opacity:1;border-radius:50%;-webkit-animation:ripple-data-v-f57d4550 1s cubic-bezier(0,.2,.8,1) infinite;animation:ripple-data-v-f57d4550 1s cubic-bezier(0,.2,.8,1) infinite}.ripple__inner-circle[data-v-f57d4550]{-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes ripple-data-v-f57d4550{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}@keyframes ripple-data-v-f57d4550{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}",""])},214:function(e,t,n){"use strict";var o=n(199);n.n(o).a},215:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".image__item[data-v-0fd0a6bc]{width:100%;opacity:0;visibility:hidden}.image__item[data-v-0fd0a6bc],.image__spinner[data-v-0fd0a6bc]{transition:all .4s ease-in-out}.image__spinner[data-v-0fd0a6bc]{visibility:visible;opacity:1}.image__wrapped[data-v-0fd0a6bc]{display:flex;position:relative;justify-content:center;align-items:center;margin:50vh;height:70vh}.image__wrapped.loaded[data-v-0fd0a6bc]{margin:unset;width:unset;height:unset}.image__wrapped.loaded .image__item[data-v-0fd0a6bc]{visibility:visible;opacity:1;border:0}.image__wrapped.loaded .image__spinner[data-v-0fd0a6bc]{opacity:0}",""])},216:function(e,t,n){"use strict";var o=n(200);n.n(o).a},217:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"img{max-height:70vh}.desktop .main__container{padding:0 3rem}.desktop .main__container .container__head{padding:5rem;display:flex;flex-direction:column}.desktop .main__container .container__head .photoset__title{padding:1rem 0}.desktop .main__container .container__head .photoset__title h1{margin-left:20%;font-size:3rem}.desktop .main__container .container__head .photoset__description span{margin-left:20%;max-width:600px;line-height:1.6rem;display:block;font-size:1rem}.desktop .main__container .container__head .photoset__preview{padding:5rem 0 0;display:block;text-align:center}.desktop .main__container .container__head .photoset__preview img{max-height:80vh;max-width:80vw}.desktop .main__container .container__collection{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:space-around;align-items:flex-start}.desktop .main__container .container__collection img{margin:7rem 3rem}.desktop .main__container .container__collection img:ntd-child(2n){margin-left:10rem!important}.mobile .content{width:100%}.mobile .main__container{padding:0 3rem}.mobile .main__container .container__head{padding:1rem;display:flex;flex-direction:column}.mobile .main__container .container__head .photoset__title{padding:1rem 0}.mobile .main__container .container__head .photoset__title h1{margin-left:0;font-size:3rem}.mobile .main__container .container__head .photoset__description span{margin-left:0;max-width:600px;line-height:1.6rem;display:block;font-size:1rem}.mobile .main__container .container__head .photoset__preview{padding:5rem 0 0;display:block;text-align:center}.mobile .main__container .container__head .photoset__preview img{max-height:80vh;max-width:80vw}.mobile .main__container .container__collection{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:space-around;align-items:flex-start}.mobile .main__container .container__collection img{margin:2rem 1rem}.mobile .main__container .container__collection img:ntd-child(2n){margin-left:10rem!important}",""])},220:function(e,t,n){"use strict";n.r(t);n(73),n(16),n(212);var o=n(4),r={name:"ImageItem",components:{ImageSpinner:Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ripple"},[t("div",{staticClass:"ripple__circle"}),this._v(" "),t("div",{staticClass:"ripple__circle ripple__inner-circle"})])}],!1,null,"f57d4550",null).exports},props:{source:{type:String,required:!0}}},c=(n(214),{layout:"koreev",validate:function(e){e.params;return/^\*+$/},components:{ImageItem:Object(o.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("figure",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"image__wrapped"},[t("ImageSpinner",{staticClass:"image__spinner"}),t("img",{staticClass:"image__item",attrs:{"data-url":this.source,alt:"some img"}})],1)])},[],!1,null,"0fd0a6bc",null).exports},asyncData:function(e){var t=e.params,n=(e.id,e.env),o=[];return Object.keys(n[t.photoset]).forEach(function(e){isNaN(e)||o.push("/"+t.photoset+"/"+n[t.photoset][e])}),{photos:o,params:n[t.photoset].params}},created:function(){this.$store.commit("themes/selectTheme",this.params.theme),this.$store.commit("themes/toogleFooter",!0)},beforeUpdate:function(){this.$store.commit("themes/selectTheme",this.params.theme),this.$store.commit("themes/toogleFooter",!0)}}),l=(n(216),Object(o.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"main__container"},[n("div",{staticClass:"container__head"},[n("div",{staticClass:"photoset__title"},[n("h1",[e._v(e._s(e.params.title))])]),n("div",{staticClass:"photoset__description"},[n("span",[e._v(e._s(e.params.description))])])]),n("div",{staticClass:"container__collection"},[e._l(e.photos,function(e,t){return[n("ImageItem",{staticClass:"photo",attrs:{source:e}})]})],2)])])},[],!1,null,null,null));t.default=l.exports}}]);