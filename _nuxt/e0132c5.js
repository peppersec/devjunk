(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("9880c1b2",content,!0,{sourceMap:!1})},219:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("2dae03be",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";n.r(e);var o={props:{question:{type:Object,required:!0}},data:function(){return{isExpanded:!1}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question"},[n("div",{staticClass:"question-title",on:{click:function(e){t.isExpanded=!t.isExpanded}}},[n("strong",[t._v(t._s(t.$t(t.question.title)))]),t._v(" "),n("b-icon",{attrs:{icon:t.isExpanded?"minus":"plus"}})],1),t._v(" "),n("transition-expand",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded,expression:"isExpanded"}],staticClass:"question-answer"},[n("p",[t._v(t._s(t.$t(t.question.description)))])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TransitionExpand:n(237).default})},221:function(t,e,n){t.exports=n.p+"img/main.1eaf9a4.svg"},222:function(t,e,n){t.exports=n.p+"img/privacy.0dd2747.svg"},223:function(t,e,n){t.exports=n.p+"img/compliance.da38c26.svg"},224:function(t,e,n){t.exports=n.p+"img/ceremony.b71288f.svg"},225:function(t,e,n){"use strict";n(218)},226:function(t,e,n){(e=n(46)(!1)).push([t.i,"*[data-v-0cdc937a]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}",""]),t.exports=e},227:function(t,e,n){"use strict";n(219)},228:function(t,e,n){(e=n(46)(!1)).push([t.i,".expand-enter-active,.expand-leave-active{transition:height .2s ease-in-out,opacity .2s;overflow:hidden}.expand-enter,.expand-leave-to{height:0;opacity:0}",""]),t.exports=e},229:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{totalEth:466173,uniqueUsers:7149,totalDeposits:21232}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stats columns is-justify-content-space-between"},[n("div",{staticClass:"column is-block"},[n("div",{staticClass:"stat-box"},[n("b-icon",{attrs:{icon:"tornado"}}),t._v(" "),n("div",{staticClass:"value"},[t._v(t._s(t.$n(t.totalEth)))]),t._v(" "),n("div",{staticClass:"label"},[t._v(t._s(t.$t("totalEthDeposited")))])],1)]),t._v(" "),n("div",{staticClass:"column is-block"},[n("div",{staticClass:"stat-box"},[n("b-icon",{attrs:{icon:"user"}}),t._v(" "),n("div",{staticClass:"value"},[t._v(t._s(t.$n(t.uniqueUsers)))]),t._v(" "),n("div",{staticClass:"label"},[t._v(t._s(t.$t("uniqueUsers")))])],1)]),t._v(" "),n("div",{staticClass:"column is-block"},[n("div",{staticClass:"stat-box"},[n("b-icon",{attrs:{icon:"deposit"}}),t._v(" "),n("div",{staticClass:"value"},[t._v(t._s(t.$n(t.totalDeposits)))]),t._v(" "),n("div",{staticClass:"label"},[t._v(t._s(t.$t("totalDeposits")))])],1)])])}),[],!1,null,null,null);e.default=component.exports},230:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{hexagons:[{text:this.$t("status.hexagons.one.text")},{text:this.$t("status.hexagons.two.text")},{text:this.$t("status.hexagons.three.text")},{text:this.$t("status.hexagons.six.text")},{text:this.$t("status.hexagons.seven.text")}]}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tornado-section status"},[n("i18n",{staticClass:"title has-text-centered",attrs:{tag:"h2",path:"status.title"},scopedSlots:t._u([{key:"tornadoCash",fn:function(){return[n("strong",[t._v("Tornado Cash")])]},proxy:!0}])}),t._v(" "),n("i18n",{staticClass:"subtitle has-text-centered",attrs:{tag:"p",path:"status.subtitle"},scopedSlots:t._u([{key:"tornadoCash",fn:function(){return[n("strong",[t._v("Tornado Cash")])]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"hexagon-container"},t._l(t.hexagons,(function(e,o){return n("div",{key:o,staticClass:"hex"},[n("div",{staticClass:"hexagon"},[n("h5",{domProps:{innerHTML:t._s(e.text)}})])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports},231:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{products:[{name:"products.compliance.title",description:"products.compliance.description",link:"https://app.tornado.cash/compliance",image:n(223)},{name:"products.ceremony.title",description:"products.ceremony.description",link:"https://ceremony.tornado.cash/",image:n(224)}]}}},l=n(8),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tornado-section our-products"},[e("h2",{staticClass:"title is-spaced"},[this._v(this._s(this.$t("ourProducts")))]),this._v(" "),e("div",{staticClass:"products is-multiline columns"},this._l(this.products,(function(t,n){return e("div",{key:n,staticClass:"column is-half-desktop"},[e("product",{attrs:{product:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Product:n(233).default})},232:function(t,e,n){"use strict";n.r(e);var o={components:{Question:n(220).default},data:function(){return{questions:[{title:"questions.one.title",description:"questions.one.description"},{title:"questions.two.title",description:"questions.two.description"},{title:"questions.three.title",description:"questions.three.description"},{title:"questions.four.title",description:"questions.four.description"},{title:"questions.fifth.title",description:"questions.fifth.description"},{title:"questions.sixth.title",description:"questions.sixth.description"},{title:"questions.seventh.title",description:"questions.seventh.description"}]}}},l=n(8),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tornado-section faq"},[e("h2",{staticClass:"title is-spacedx"},[this._v(this._s(this.$t("faq")))]),this._v(" "),e("div",{staticClass:"questions"},this._l(this.questions,(function(t,n){return e("question",{key:n,attrs:{question:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Question:n(220).default})},233:function(t,e,n){"use strict";n.r(e);var o={props:{product:{type:Object,required:!0}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[n("figure",{staticClass:"image is-product"},[n("img",{attrs:{src:t.product.image}})]),t._v(" "),n("div",{staticClass:"product-body"},[n("h4",{staticClass:"title is-primary is-5"},[t._v(t._s(t.$t(t.product.name)))]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.$t(t.product.description)))]),t._v(" "),n("a",{attrs:{href:t.product.link,target:"_blank"}},[t._v(t._s(t.$t("readMore")))])])])}),[],!1,null,null,null);e.default=component.exports},234:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("figure",{staticClass:"image is-main"},[e("img",{attrs:{src:n(221)}})])])}],l=n(8),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tornado-section main"},[n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column"},[n("h1",{staticClass:"title is-primary"},[t._v("Tornado Cash")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("mainDesc")))]),t._v(" "),n("div",{staticClass:"field"},[n("b-button",{attrs:{type:"is-primary",tag:"a",href:t.$config.appUrl,outlined:"","icon-left":"tornado"}},[t._v("\n          "+t._s(t.$t("launchApp"))+"\n        ")])],1)]),t._v(" "),t._m(0)])])}),o,!1,null,null,null);e.default=component.exports},235:function(t,e,n){"use strict";n.r(e);var o=n(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tornado-section how-to-work"},[n("i18n",{staticClass:"title is-spaced",attrs:{tag:"h2",path:"howTornadoCashWork"},scopedSlots:t._u([{key:"tornadoCash",fn:function(){return[n("strong",[t._v("Tornado Cash")])]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"work"}),t._v(" "),n("div",{staticClass:"columns is-justify-content-space-between"},[n("div",{staticClass:"column is-block"},[n("h3",{staticClass:"title is-primary is-5"},[t._v(t._s(t.$t("deposit")))]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("depositDesc")))])]),t._v(" "),n("div",{staticClass:"column is-block"},[n("h3",{staticClass:"title is-primary is-5"},[t._v(t._s(t.$t("waiting")))]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("waitingDesc")))])]),t._v(" "),n("div",{staticClass:"column is-block"},[n("h3",{staticClass:"title is-primary is-5"},[t._v(t._s(t.$t("withdraw")))]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("withdrawDesc")))])])])],1)}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("figure",{staticClass:"image is-privacy"},[e("img",{attrs:{src:n(222)}})])])}],l=n(8),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tornado-section how-to-achieve-privacy"},[n("div",{staticClass:"columns is-vcentered"},[t._m(0),t._v(" "),n("div",{staticClass:"column"},[n("i18n",{staticClass:"title",attrs:{tag:"h2",path:"howToAchievePrivacy"},scopedSlots:t._u([{key:"tornadoCash",fn:function(){return[n("strong",[t._v("Tornado Cash")])]},proxy:!0}])}),t._v(" "),n("i18n",{staticClass:"subtitle",attrs:{tag:"p",path:"howToAchievePrivacyDesc"},scopedSlots:t._u([{key:"break",fn:function(){return[n("br")]},proxy:!0}])})],1)])])}),o,!1,null,null,null);e.default=component.exports},237:function(t,e,n){"use strict";n.r(e);var o={name:"TransitionExpand",functional:!0,render:function(t,e){return t("transition",{props:{name:"expand"},on:{afterEnter:function(element){element.style.height="auto"},enter:function(element){var t=getComputedStyle(element).width;element.style.width=t,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var e=getComputedStyle(element).height;element.style.width=null,element.style.position=null,element.style.visibility=null,element.style.height=0,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=e}))},leave:function(element){var t=getComputedStyle(element).height;element.style.height=t,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},e.children)}},l=(n(225),n(227),n(8)),component=Object(l.a)(o,void 0,void 0,!1,null,"0cdc937a",null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Main"),this._v(" "),e("how-to-work"),this._v(" "),e("how-to-achieve-privacy"),this._v(" "),e("stats"),this._v(" "),e("status"),this._v(" "),e("products"),this._v(" "),e("questions")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Main:n(234).default,HowToWork:n(235).default,HowToAchievePrivacy:n(236).default,Stats:n(229).default,Status:n(230).default,Products:n(231).default,Questions:n(232).default})}}]);