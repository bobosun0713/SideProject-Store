<template>
  <el-form ref="ruleForm" :model="productData" :rules="rules" status-icon label-width="100px">
    <el-form-item label="產品名稱" prop="name">
      <el-input v-model="productData.name" type="text" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="圖片">
      <upload @update="handleUploadImage"></upload>
    </el-form-item>
    <el-form-item label="價格">
      <el-input-number v-model="productData.price" :min="10" :step="10" autocomplete="off"></el-input-number>
    </el-form-item>
    <el-form-item label="數量">
      <el-input-number v-model="productData.amount" :min="1" :step="1" autocomplete="off"></el-input-number>
    </el-form-item>
    <el-form-item label="類別" prop="type">
      <el-select v-model="productData.type" placeholder="請選擇類型" clearable>
        <el-option label="本日精選" value="1"></el-option>
        <el-option label="人氣精選" value="2"></el-option>
        <el-option label="新品上市" value="3"></el-option>
      </el-select>
    </el-form-item>

    <div class="admin-form-btns">
      <el-button type="primary" @click="submitForm">送出</el-button>
    </div>
  </el-form>
</template>

<script>
import Upload from '@/components/admin/common/Upload'
// import { apiUploadImage } from '@/api'
import { apiAddProduct, apiUpdateProduct } from '@/api'
export default {
  name: 'ProductForm',
  components: {
    Upload,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isActionType: 'add',

      productData: {
        name: null,
        url: null,
        price: null,
        amount: null,
        type: null,
      },

      rules: {
        name: [{ required: true, message: '請輸入內容', trigger: 'blur' }],
        type: [{ required: true, message: '請輸入內容', trigger: 'change' }],
      },
    }
  },
  watch: {
    product: {
      immediate: false,
      handler() {
        if (Object.values(this.product).length) {
          this.isActionType = 'edit'
          this.handleProductDetail()
        }
      },
    },
  },
  methods: {
    handleUploadImage(val) {
      this.productData.url = val
    },
    handleProductDetail() {
      this.productData = {
        ...this.product,
      }
    },

    handleUpdateProduct() {
      this.$emit('update-loading', true)
      apiUpdateProduct(this.$route.params.id, this.productData).then(() => {
        this.$message({
          title: '商品更新通知',
          type: 'success',
          message: `商品更新成功`,
          showClose: true,
        })
        this.$emit('update-loading', false)
        this.$router.push('/admin/product/list')
      })
    },

    handleAddProduct() {
      this.$emit('update-loading', true)
      apiAddProduct(this.productData).then(() => {
        console.log('測試', this.$route.params.id)
        this.$message({
          title: '加入商品通知',
          type: 'success',
          message: `商品新增成功`,
          showClose: true,
        })
        this.$emit('update-loading', false)
        this.$router.push('/admin/product/list')
      })
    },

    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.isActionType === 'add') {
            this.handleAddProduct()
          } else {
            this.handleUpdateProduct()
          }
        } else {
          return false
        }
      })

      //TODO: 之後新增
      // const formData = new FormData()
      // formData.append('image', 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
      // formData.append('album', 'gwt3TRX')
      // apiUploadImage(formData).then((res) => {
      //   console.log('上傳圖片＝＝＝。', res)
      // })
    },
  },
}
</script>

<style></style>
