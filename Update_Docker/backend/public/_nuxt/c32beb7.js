(window.webpackJsonp=window.webpackJsonp||[]).push([[47,15],{466:function(e,t,r){"use strict";r.r(t);r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(4),o=r(10);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,f=r(15),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.errorData?t("ul",{staticClass:"error-list mb-15"},[t("li",{staticClass:"mb-10"},[e._v(e._s(e.$t("error.feo")))]),e._v(" "),e._l(e.errorData,(function(r,n){return t("li",{key:n},[e._v("\n    "+e._s(r)+"\n  ")])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},472:function(e,t,r){"use strict";r(32),r(28);t.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return e.size>1024*t?this.$t("util.fSize",{size:t}):this.allowedExcelExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.size>1024*t?this.$t("util.fSize",{size:t}):r&&!this.allowedImageExtensions.exec(e.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidEmail:function(e){return this.reg.test(e)},isValidLength:function(e){return e&&e.length>=this.passwordLength||!1}}}},779:function(e,t,r){"use strict";r.r(t);r(37),r(44),r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(1),o=r(4),l=(r(22),r(156)),c=r(472),d=r(49),f=r(466),v=r(86),m=r(10);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var _={name:"SocialLoginSetting",data:function(){return{gettingStore:!1,updating:!1,loading:!1,hasError:!1,result:{facebook_login:!0,google_login:!0,googleClientId:null,googleClientSecret:null,facebookClientId:null,facebookClientSecret:null}}},props:{},mixins:[v.a,c.a],components:{AjaxButton:l.default,Spinner:d.default,ErrorFormatter:f.default},computed:{},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({fetchingData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.getRequest({api:"socialLoginFind"});case 4:(data=t.sent)&&(e.result=data),e.loading=!1,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",e.$nuxt.error(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.result.googleClientId&&e.result.googleClientSecret||e.result.facebookClientId&&e.result.facebookClientSecret)){t.next=15;break}return e.updating=!0,t.prev=2,t.next=5,e.setRequest({params:e.result,api:"socialLoginAction"});case 5:(data=t.sent)&&(e.result=data),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.updating=!1,t.next=16;break;case 15:e.hasError=!0;case 16:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},Object(m.b)("common",["setRequest","getRequest"])),created:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchingData();case 2:case"end":return t.stop()}}),t)})))()}},y=_,C=r(15),component=Object(C.a)(y,(function(){var e=this,t=e._self._c;return t("form",{class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.updateData.apply(null,arguments)}}},[e.loading?t("div",{staticClass:"spinner-wrapper"},[t("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input-wrapper dply-felx start gap-10"},[t("label",{staticClass:"mb-0 dply-felx start gap-10",attrs:{for:"google-login"}},[t("span",{staticClass:"label"},[e._v(e._s(e.$t("title.googleLogin")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.google_login,expression:"result.google_login"}],attrs:{type:"checkbox",id:"google-login"},domProps:{checked:Array.isArray(e.result.google_login)?e._i(e.result.google_login,null)>-1:e.result.google_login},on:{change:function(t){var r=e.result.google_login,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.result,"google_login",r.concat([null])):l>-1&&e.$set(e.result,"google_login",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.result,"google_login",o)}}})])]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("dataPage.gci"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.googleClientId,expression:"result.googleClientId"}],class:{invalid:!e.result.googleClientId&&e.hasError},attrs:{type:"password",placeholder:e.$t("dataPage.gci")},domProps:{value:e.result.googleClientId},on:{input:function(t){t.target.composing||e.$set(e.result,"googleClientId",t.target.value)}}}),e._v(" "),!e.result.googleClientId&&e.hasError?t("span",{staticClass:"error"},[e._v("\n       "+e._s(e.$t("category.req",{type:e.$t("dataPage.gci")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("dataPage.gcs"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.googleClientSecret,expression:"result.googleClientSecret"}],class:{invalid:!e.result.googleClientSecret&&e.hasError},attrs:{type:"password",placeholder:e.$t("dataPage.gcs")},domProps:{value:e.result.googleClientSecret},on:{input:function(t){t.target.composing||e.$set(e.result,"googleClientSecret",t.target.value)}}}),e._v(" "),!e.result.googleClientSecret&&e.hasError?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("dataPage.gcs")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper dply-felx start gap-10"},[t("label",{staticClass:"mb-0 dply-felx start gap-10",attrs:{for:"facebook-login"}},[t("span",{staticClass:"label"},[e._v("\n          "+e._s(e.$t("title.facebookLogin"))+"\n        ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.facebook_login,expression:"result.facebook_login"}],attrs:{type:"checkbox",id:"facebook-login"},domProps:{checked:Array.isArray(e.result.facebook_login)?e._i(e.result.facebook_login,null)>-1:e.result.facebook_login},on:{change:function(t){var r=e.result.facebook_login,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.result,"facebook_login",r.concat([null])):l>-1&&e.$set(e.result,"facebook_login",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.result,"facebook_login",o)}}})])]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("dataPage.fci"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.facebookClientId,expression:"result.facebookClientId"}],class:{invalid:!e.result.facebookClientId&&e.hasError},attrs:{type:"password",placeholder:e.$t("dataPage.fci")},domProps:{value:e.result.facebookClientId},on:{input:function(t){t.target.composing||e.$set(e.result,"facebookClientId",t.target.value)}}}),e._v(" "),!e.result.facebookClientId&&e.hasError?t("span",{staticClass:"error"},[e._v("\n       "+e._s(e.$t("category.req",{type:e.$t("dataPage.fci")}))+"\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("label",[e._v("\n        "+e._s(e.$t("dataPage.fcs"))+"\n      ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.facebookClientSecret,expression:"result.facebookClientSecret"}],class:{invalid:!e.result.facebookClientSecret&&e.hasError},attrs:{type:"password",placeholder:e.$t("dataPage.fcs")},domProps:{value:e.result.facebookClientSecret},on:{input:function(t){t.target.composing||e.$set(e.result,"facebookClientSecret",t.target.value)}}}),e._v(" "),!e.result.facebookClientSecret&&e.hasError?t("span",{staticClass:"error"},[e._v("\n        "+e._s(e.$t("category.req",{type:e.$t("dataPage.fcs")}))+"\n      ")]):e._e()])]),e._v(" "),t("div",{staticClass:"oflow-hidden"},[e.$can("setting","edit")?t("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":e.updating}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(49).default,AjaxButton:r(156).default})}}]);