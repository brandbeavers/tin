(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{473:function(t,e,c){"use strict";c(123),c(50);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},870:function(t,e,c){"use strict";c.r(e);c(37),c(44);var n=c(86),l=c(474),o=c(473),r={name:"tax-rule",middleware:["common-middleware","auth"],data:function(){return{orderOptions:{title:{title:this.$t("index.title")},created_at:{title:this.$t("category.date")},status:{title:this.$t("category.status")}}}},mixins:[n.a,o.a],components:{ListPage:l.default},computed:{},methods:{},mounted:function(){}},d=c(15),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("list-page",{ref:"listPage",attrs:{"list-api":"getProductCollections","delete-api":"deleteProductCollection","empty-store-variable":"allProductCollections","route-name":"product-collections",name:t.$t("brand.prodCol"),"order-options":t.orderOptions,gate:"product_collection"},on:{"delete-bulk":t.deleteBulk,list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table",fn:function(c){var n=c.list;return[e("tr",{staticClass:"lite-bold"},[e("th",{staticClass:"w-50x mx-w-50x"},[e("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),e("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.slug")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),e("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),e("th",[t._v(" ")])]),t._v(" "),t._l(n,(function(c,n){return e("tr",{key:n},[e("td",{staticClass:"w-50x mx-w-50x"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:c.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,c.id)>-1:t.cbList},on:{change:function(e){var n=t.cbList,l=e.target,o=!!l.checked;if(Array.isArray(n)){var r=c.id,d=t._i(n,r);l.checked?d<0&&(t.cbList=n.concat([r])):d>-1&&(t.cbList=n.slice(0,d).concat(n.slice(d+1)))}else t.cbList=o}}})]),t._v(" "),e("td",[e("nuxt-link",{staticClass:"link",attrs:{to:"/product-collections/".concat(c.id)}},[e("h5",{staticClass:"mx-w-300x"},[t._v(t._s(c.title))])])],1),t._v(" "),e("td",[t._v(t._s(c.slug))]),t._v(" "),e("td",{staticClass:"status",class:{active:1==c.status}},[e("span",[t._v(t._s(t.getStatus(c.status)))])]),t._v(" "),e("td",[t._v(t._s(c.created))]),t._v(" "),e("td",[t.$can("product_collection","edit")?e("button",{staticClass:"lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.editItem(c.id)}}},[t._v("\n            "+t._s(t.$t("category.edit")))]):t._e(),t._v(" "),t.$can("product_collection","delete")?e("button",{staticClass:"delete-btn lite-btn",on:{click:function(e){return e.preventDefault(),t.$refs.listPage.deleteItem(c.id)}}},[t._v("\n            "+t._s(t.$t("category.delete")))]):t._e()])])}))]}}])})}),[],!1,null,"17646112",null);e.default=component.exports}}]);