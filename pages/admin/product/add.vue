<template>
  <el-form ref="ruleForm" :model="productData" status-icon label-width="100px" class="admin-form">
    <el-form-item label="產品名稱" prop="pass">
      <el-input v-model="productData.name" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="圖片" prop="pass">
      <upload></upload>
    </el-form-item>
    <el-form-item label="價格" prop="pass">
      <el-input v-model="productData.name" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="類別" prop="pass">
      <el-select v-model="productData.type" placeholder="請選擇類型" clearable>
        <el-option label="本日精選" :value="1"></el-option>
        <el-option label="人氣精選" :value="2"></el-option>
        <el-option label="新品上市" :value="3"></el-option>
      </el-select>
    </el-form-item>

    <div class="admin-form-btns">
      <el-button type="primary">送出</el-button>
    </div>
  </el-form>
</template>

<script>
import Upload from '@/components/admin/common/Upload'
export default {
  name: 'ProductAdd',
  components: {
    Upload,
  },
  layout: 'admin',
  data() {
    return {
      productData: {
        name: null,
        url: null,
        type: null,
      },
    }
  },
}
</script>
