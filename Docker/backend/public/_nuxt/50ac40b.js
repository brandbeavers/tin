/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[97,18,22],{467:function(t,e,r){"use strict";r.r(e);var n=r(468),o=r.n(n),c=r(86),l={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[c.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=r(15),component=Object(d.a)(l,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(o),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,l),i=d.root,h=d.rootMargin,f=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:h,threshold:f}));for(var v,_=n(c,i),b=0;b<_.length;b++)(v=_[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(c,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},473:function(t,e,r){"use strict";r(123),r(50);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},871:function(t,e,r){"use strict";r.r(e);r(37),r(44),r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(4),o=r(474),c=r(10),l=r(86),d=r(467),h=r(473);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var v={name:"tax-rule",middleware:["common-middleware","auth"],data:function(){return{orderByProduct:{title:{title:this.$t("index.title")},category_id:{title:this.$t("category.catUp")},purchased:{title:this.$t("prod.purchased")},selling:{title:this.$t("prod.selling")},offered:{title:this.$t("prod.offered")},created_at:{title:this.$t("category.date")},status:{title:this.$t("category.status")}}}},mixins:[l.a,h.a],components:{LazyImage:d.default,ListPage:o.default},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"}},Object(c.c)("setting",["setting"])),methods:{},mounted:function(){}},_=v,m=r(15),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("list-page",{ref:"listPage",attrs:{"list-api":"getProducts","delete-api":"deleteProduct","route-name":"products",name:t.$t("title.prod"),"order-options":t.orderByProduct,gate:"product"},on:{"delete-bulk":t.deleteBulk,list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table",fn:function(r){var n=r.list;return[e("tr",{staticClass:"lite-bold"},[e("th",{staticClass:"w-50x mx-w-50x"},[e("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),e("th",[t._v(t._s(t.$t("prod.brand")))]),t._v(" "),e("th",[t._v(t._s(t.$t("error.cat")))]),t._v(" "),e("th",[t._v(t._s(t.$t("prod.tRule")))]),t._v(" "),e("th",[t._v(t._s(t.$t("prod.purchased"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("prod.selling"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("prod.offered"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),e("th"),t._v(" "),e("th")]),t._v(" "),t._l(n,(function(r,n){return e("tr",{key:n},[e("td",{staticClass:"w-50x mx-w-50x"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,r.id)>-1:t.cbList},on:{change:function(e){var n=t.cbList,o=e.target,c=!!o.checked;if(Array.isArray(n)){var l=r.id,d=t._i(n,l);o.checked?d<0&&(t.cbList=n.concat([l])):d>-1&&(t.cbList=n.slice(0,d).concat(n.slice(d+1)))}else t.cbList=c}}})]),t._v(" "),e("td",[e("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/products/".concat(r.id)}},[e("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getThumbImageURL(r.image),alt:r.title}}),t._v(" "),e("h5",{staticClass:"mx-w-400x"},[t._v(t._s(r.title))])],1)],1),t._v(" "),e("td",{staticClass:"status",class:{active:1==r.status}},[e("span",[t._v(t._s(t.getStatus(r.status)))])]),t._v(" "),e("td",[r.brand?e("nuxt-link",{staticClass:"link",attrs:{to:"brands/".concat(r.brand.id)}},[t._v("\n            "+t._s(r.brand.title)+"\n          ")]):e("span",[t._v(t._s(t.$t("prod.na")))])],1),t._v(" "),e("td",[e("span",{staticClass:"dply-felx f-wrap gap-10 mx-w-300x j-left"},t._l(r.product_categories,(function(data,r){return e("nuxt-link",{key:r,staticClass:"link",attrs:{to:"/categories/".concat(data.category.id)}},[t._v("\n              "+t._s(data.category.title)+"\n            ")])})),1)]),t._v(" "),e("td",[r.tax_rules?e("nuxt-link",{staticClass:"link",attrs:{to:"tax-rules/".concat(r.tax_rules.id)}},[t._v("\n            "+t._s(r.tax_rules.title)+"\n          ")]):e("span",[t._v(t._s(t.$t("prod.na")))])],1),t._v(" "),e("td",[t._v(t._s(r.purchased))]),t._v(" "),e("td",[t._v(t._s(r.selling))]),t._v(" "),e("td",[r.offered?e("span",[t._v("\n             "+t._s(r.offered)+"\n          ")]):t._e()]),t._v(" "),e("td",[t._v(t._s(r.created))]),t._v(" "),e("td",[e("nuxt-link",{staticClass:"lite-btn button",attrs:{to:"/rating-reviews?product=".concat(r.id)}},[t._v("\n            "+t._s(t.$t("prod.reviews"))+"\n          ")])],1),t._v(" "),e("td",[t.$can("product","edit")?e("button",{staticClass:"lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.editItem(r.id)}}},[t._v("\n            "+t._s(t.$t("category.edit"))+"\n          ")]):t._e(),t._v(" "),t.$can("product","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.deleteItem(r.id)}}},[t._v("\n            "+t._s(t.$t("category.delete"))+"\n          ")]):t._e()])])}))]}}])})}),[],!1,null,"38f7a6f8",null);e.default=component.exports;installComponents(component,{LazyImage:r(467).default})}}]);