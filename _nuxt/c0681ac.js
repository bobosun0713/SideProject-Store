(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4],{459:function(t,e,o){var content=o(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("7e267bf2",content,!0,{sourceMap:!1})},461:function(t,e,o){"use strict";o(459)},462:function(t,e,o){var r=o(23)(!1);r.push([t.i,'.upload[data-v-4c9b4a45]{width:150px;height:150px}.upload__image[data-v-4c9b4a45]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.upload__action[data-v-4c9b4a45]{border:1px solid #cec9c9;position:relative;overflow:hidden;width:100%;height:100%;border-radius:16px;display:flex;justify-content:center;align-items:center;flex-direction:column}.upload__action-icon[data-v-4c9b4a45]{font-size:24px}.upload__cancel[data-v-4c9b4a45]{position:absolute;top:4px;right:4px;width:30px;height:30px;cursor:pointer;transition:transform .6s}.upload__cancel[data-v-4c9b4a45]:after,.upload__cancel[data-v-4c9b4a45]:before{content:"";position:absolute;top:50%;left:50%;width:18px;height:2px;border-radius:2px;background-color:#000}.upload__cancel[data-v-4c9b4a45]:before{transform:translate(-50%,-50%) rotate(45deg)}.upload__cancel[data-v-4c9b4a45]:after{transform:translate(-50%,-50%) rotate(-45deg)}.upload__cancel[data-v-4c9b4a45]:hover{transform:scale(1.2) rotate(180deg)}',""]),t.exports=r},463:function(t,e,o){"use strict";o.r(e);var r={name:"Upload",data:function(){return{showImage:"",imageData:""}},methods:{handleImageFillIn:function(t){var e=this,o=new FileReader;o.readAsDataURL(t),o.onload=function(t){e.showImage=t.target.result,e.$emit("update",e.showImage)}},handleDelete:function(){this.showImage="",this.imageData="",this.$emit("update",this.showImage)}}},n=(o(461),o(5)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload"},[t.showImage?o("div",{staticClass:"upload__action"},[o("div",{staticClass:"upload__cancel",on:{click:t.handleDelete}}),t._v(" "),o("img",{staticClass:"upload__image",attrs:{src:t.showImage,alt:""}})]):o("vue-core-image-upload",{staticClass:"upload__action",class:["btn","btn-primary"],attrs:{crop:!1,"max-file-size":10485760},on:{imagechanged:t.handleImageFillIn}},[o("div",{staticClass:"upload__action-icon"},[o("font-awesome",{attrs:{icon:["fas","images"]}})],1),t._v(" "),o("div",{staticClass:"upload__action-text"},[t._v("上傳圖片")])])],1)}),[],!1,null,"4c9b4a45",null);e.default=component.exports},469:function(t,e,o){"use strict";o.r(e);o(15),o(2),o(14),o(27),o(11),o(34);var r=o(8),n=(o(194),o(463)),l=o(101);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={name:"ProductForm",components:{Upload:n.default},props:{product:{type:Object,default:function(){return{}}}},data:function(){return{isActionType:"add",productData:{name:null,url:null,price:null,amount:null,type:null},rules:{name:[{required:!0,message:"請輸入內容",trigger:"blur"}],type:[{required:!0,message:"請輸入內容",trigger:"change"}]}}},watch:{product:{immediate:!1,handler:function(){Object.values(this.product).length&&(this.isActionType="edit",this.handleProductDetail())}}},methods:{handleUploadImage:function(t){this.productData.url=t},handleProductDetail:function(){this.productData=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.product)},handleUpdateProduct:function(){var t=this;this.$emit("update-loading",!0),Object(l.k)(this.$route.params.id,this.productData).then((function(){t.$message({title:"商品更新通知",type:"success",message:"商品更新成功",showClose:!0}),t.$emit("update-loading",!1),t.$router.push("/admin/product/list")}))},handleAddProduct:function(){var t=this;this.$emit("update-loading",!0),Object(l.a)(this.productData).then((function(){console.log("測試",t.$route.params.id),t.$message({title:"加入商品通知",type:"success",message:"商品新增成功",showClose:!0}),t.$emit("update-loading",!1),t.$router.push("/admin/product/list")}))},submitForm:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return!1;"add"===t.isActionType?t.handleAddProduct():t.handleUpdateProduct()}))}}},m=o(5),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"ruleForm",attrs:{model:t.productData,rules:t.rules,"status-icon":"","label-width":"100px"}},[o("el-form-item",{attrs:{label:"產品名稱",prop:"name"}},[o("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.productData.name,callback:function(e){t.$set(t.productData,"name",e)},expression:"productData.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"圖片"}},[o("upload",{on:{update:t.handleUploadImage}})],1),t._v(" "),o("el-form-item",{attrs:{label:"價格"}},[o("el-input-number",{attrs:{min:10,step:10,autocomplete:"off"},model:{value:t.productData.price,callback:function(e){t.$set(t.productData,"price",e)},expression:"productData.price"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"數量"}},[o("el-input-number",{attrs:{min:1,step:1,autocomplete:"off"},model:{value:t.productData.amount,callback:function(e){t.$set(t.productData,"amount",e)},expression:"productData.amount"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"類別",prop:"type"}},[o("el-select",{attrs:{placeholder:"請選擇類型",clearable:""},model:{value:t.productData.type,callback:function(e){t.$set(t.productData,"type",e)},expression:"productData.type"}},[o("el-option",{attrs:{label:"本日精選",value:"1"}}),t._v(" "),o("el-option",{attrs:{label:"人氣精選",value:"2"}}),t._v(" "),o("el-option",{attrs:{label:"新品上市",value:"3"}})],1)],1),t._v(" "),o("div",{staticClass:"admin-form-btns"},[o("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("送出")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},535:function(t,e,o){"use strict";o.r(e);var r={name:"ProductAdd",components:{ProductForm:o(469).default},layout:"admin",data:function(){return{isLoading:!1}},methods:{updateLoading:function(t){this.isLoading=t}}},n=o(5),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"admin-form"},[o("product-form",{on:{"update-loading":t.updateLoading}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);