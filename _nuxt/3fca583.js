(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7],{465:function(t,e,r){"use strict";r(15),r(2),r(14),r(27),r(11),r(34);var n=r(8),c=r(36);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l({},Object(c.d)("login",["isLogin","userToken"])),methods:l(l({},Object(c.b)("cart",["getCarts"])),{},{fetchCartList:function(){var t=this.isLogin||this.$cookies.get("IS_LOGIN"),e=this.userToken||this.$cookies.get("USER_TOKEN");console.log("IS_LOGIN",t),console.log("USER_TOKEN",e),t&&this.getCarts(e)}})};e.a=d},466:function(t,e,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("3e897d39",content,!0,{sourceMap:!1})},472:function(t,e,r){"use strict";r(466)},473:function(t,e,r){var n=r(23)(!1);n.push([t.i,".pagination[data-v-ee76c772]{display:flex;margin-left:auto}@media (max-width:991px){.pagination[data-v-ee76c772]{margin-left:0}}.pagination__button[data-v-ee76c772]{width:60px;height:60px;border:1px solid #eaf0ed;background-color:transparent}.pager[data-v-ee76c772]{cursor:pointer;display:flex}.pager__number[data-v-ee76c772]{width:60px;height:60px;text-align:center;line-height:60px;border:1px solid #eaf0ed;color:#3f5d45;font-weight:700;border-right:0}.pager__number[data-v-ee76c772]:first-child{border-left:0}.pager__number--active[data-v-ee76c772]{background-color:#eaf0ed}",""]),t.exports=n},474:function(t,e,r){t.exports=r.p+"img/home-slogan.a3a6cfc.svg"},484:function(t,e,r){"use strict";r.r(e);r(21);var n={name:"Pagination",props:{currentPage:{type:Number,default:1},totalPage:{type:Number,default:0},viewPage:{type:Number,default:0}},computed:{startPage:function(){return 1===this.currentPage?1:this.currentPage===this.totalPage?this.currentPage-this.viewPage+1:this.currentPage-1},endPage:function(){return this.startPage+this.viewPage-1},pages:function(){for(var t=[],i=this.startPage;i<=this.endPage;i++)t.push(i);return 1===this.totalPage?1:this.totalPage<this.viewPage?this.totalPage:t}},methods:{clickPage:function(t,e){this.$emit("updatePage",t,e)}}},c=(r(472),r(5)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination"},[r("button",{staticClass:"pagination__button",attrs:{disabled:1===t.currentPage},on:{click:function(e){return t.clickPage(-1,!0)}}},[r("font-awesome",{staticClass:"icon",attrs:{icon:"caret-left"}})],1),t._v(" "),r("ul",{staticClass:"pager"},[t.currentPage>=t.viewPage&&t.totalPage>t.viewPage?[r("li",{staticClass:"pager__number",on:{click:function(e){return t.clickPage(1,!1)}}},[t._v("1")]),t._v(" "),r("li",{staticClass:"pager__number"},[t._v("...")])]:t._e(),t._v(" "),t._l(t.pages,(function(e){return r("li",{key:e,staticClass:"pager__number",class:{"pager__number--active":t.currentPage===e},on:{click:function(r){return t.clickPage(e,!1)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),t.totalPage>t.viewPage&&t.currentPage<t.totalPage-1?[r("li",{staticClass:"pager__number"},[t._v("...")]),t._v(" "),r("li",{staticClass:"pager__number",on:{click:function(e){return t.clickPage(t.totalPage,!1)}}},[t._v(t._s(t.totalPage))])]:t._e()],2),t._v(" "),r("button",{staticClass:"pagination__button",attrs:{disabled:t.currentPage===t.totalPage},on:{click:function(e){return t.clickPage(1,!0)}}},[r("font-awesome",{staticClass:"icon",attrs:{icon:"caret-right"}})],1)])}),[],!1,null,"ee76c772",null);e.default=component.exports},489:function(t,e,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("bbad0c74",content,!0,{sourceMap:!1})},517:function(t,e,r){"use strict";r(489)},518:function(t,e,r){var n=r(23),c=r(193),o=r(519),l=r(474),d=n(!1),f=c(o),_=c(l);d.push([t.i,".product__banner[data-v-f46e3660]{margin:0 auto 60px;background:url("+f+") no-repeat 50%;background-size:cover;width:940px;height:496px;transition:all .5s}@media (max-width:991px){.product__banner[data-v-f46e3660]{margin:0 auto;width:100%;height:400px}}@media (max-width:768px){.product__banner[data-v-f46e3660]{height:350px}}@media (max-width:576px){.product__banner[data-v-f46e3660]{height:280px}}.product__banner__slogan[data-v-f46e3660]{background:url("+_+") no-repeat 50%;background-size:cover;width:90px;height:330px;float:right;margin:40px;transition:all .5s}@media (max-width:991px){.product__banner__slogan[data-v-f46e3660]{margin:25px 40px}}@media (max-width:768px){.product__banner__slogan[data-v-f46e3660]{width:75px;height:280px}}@media (max-width:576px){.product__banner__slogan[data-v-f46e3660]{width:60px;height:220px}}.product__container[data-v-f46e3660]{width:940px;margin:0 auto 60px;display:flex;flex-direction:column}@media (max-width:991px){.product__container[data-v-f46e3660]{align-items:center;width:100%}}.product__content[data-v-f46e3660]{display:flex;justify-content:space-between}@media (max-width:991px){.product__content[data-v-f46e3660]{flex-direction:column;width:100%}}.product__menu[data-v-f46e3660]{width:300px}@media (max-width:991px){.product__menu[data-v-f46e3660]{width:100%;margin-bottom:30px}}.product__menu-title[data-v-f46e3660]{background-color:#3f5d45;color:#fff;padding:16px 0;text-align:center}.product__list[data-v-f46e3660]{width:620px;display:flex;justify-content:space-between;flex-wrap:wrap}@media (max-width:991px){.product__list[data-v-f46e3660]{width:100%;justify-content:center}}.menu-list[data-v-f46e3660]{border:1px solid #eaf0ed}.menu-list__item[data-v-f46e3660]{border-bottom:1px solid #eaf0ed;color:#3f5d45;font-size:24px;font-weight:700;text-align:center;display:block;padding:16px;cursor:pointer}.menu-list__item--active[data-v-f46e3660],.menu-list__item[data-v-f46e3660]:hover{background-color:#eaf0ed}",""]),t.exports=d},519:function(t,e,r){t.exports=r.p+"img/product-4.89e64ad.jpg"},533:function(t,e,r){"use strict";r.r(e);r(15),r(2),r(27),r(11),r(34);var n=r(8),c=(r(14),r(28),r(36)),o=r(468),l=r(484),d=r(465);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Product",components:{ProductCard:o.default,Pagination:l.default},mixins:[d.a],data:function(){return{tabName:"",currentPage:1,perPage:4}},computed:_(_(_(_({},Object(c.d)("login",["userToken","isLogin"])),Object(c.d)("product",["productList"])),Object(c.d)("cart",["cartList"])),{},{filterAmount:function(){var t=this;return function(e){return t.productList.filter((function(t){return e?t.type===e:t})).length}},filterProducts:function(){var t=this;return this.productList.filter((function(e){return t.tabName?e.type===t.tabName:e}))},pageList:function(){var t=(this.currentPage-1)*this.perPage;return this.filterProducts.slice(t,t+this.perPage)},totalPage:function(){return Math.ceil(this.filterProducts.length/this.perPage)}}),mounted:function(){this.tabName=this.$route.params.productType||"",this.getProducts(),this.fetchCartList()},methods:_(_({},Object(c.b)("product",["getProducts"])),{},{changeProduct:function(t){this.tabName=t,this.currentPage=1},updatePage:function(t,e){if(e)return this.currentPage+=t;this.currentPage=t}})},m=(r(517),r(5)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[t._m(0),t._v(" "),r("div",{staticClass:"product__container"},[r("div",{staticClass:"product__content"},[r("aside",{staticClass:"product__menu"},[r("h1",{staticClass:"product__menu-title"},[t._v("甜點類別")]),t._v(" "),r("ul",{staticClass:"menu-list"},[r("li",{staticClass:"menu-list__item",class:{"menu-list__item--active":""===t.tabName},on:{click:function(e){return t.changeProduct("")}}},[t._v("\n            所有甜點("+t._s(t.filterAmount())+")\n          ")]),t._v(" "),r("li",{staticClass:"menu-list__item",class:{"menu-list__item--active":"1"===t.tabName},on:{click:function(e){return t.changeProduct("1")}}},[t._v("\n            本日精選("+t._s(t.filterAmount("1"))+")\n          ")]),t._v(" "),r("li",{staticClass:"menu-list__item",class:{"menu-list__item--active":"2"===t.tabName},on:{click:function(e){return t.changeProduct("2")}}},[t._v("\n            人氣推薦("+t._s(t.filterAmount("2"))+")\n          ")]),t._v(" "),r("li",{staticClass:"menu-list__item",class:{"menu-list__item--active":"3"===t.tabName},on:{click:function(e){return t.changeProduct("3")}}},[t._v("\n            新品上市("+t._s(t.filterAmount("3"))+")\n          ")])])]),t._v(" "),r("div",{staticClass:"product__list"},t._l(t.pageList,(function(e){return r("product-card",{key:e.id,staticClass:"product-card--mb",attrs:{product:e,"user-token":t.userToken,"is-login":t.isLogin,"cart-list":t.cartList}})})),1)]),t._v(" "),r("pagination",{attrs:{"current-page":t.currentPage,"total-page":t.totalPage,"view-page":3},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},updatePage:t.updatePage}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product__banner"},[e("div",{staticClass:"product__banner__slogan"})])}],!1,null,"f46e3660",null);e.default=component.exports;installComponents(component,{ProductCard:r(468).default,Pagination:r(484).default})}}]);