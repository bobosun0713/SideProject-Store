<template>
  <div class="admin">
    <div class="admin-search">
      <h2 class="admin-search__header">搜尋商品</h2>
      <el-row class="admin-search__body" :gutter="12">
        <el-col :span="6">
          <div class="admin-form-block">
            <div class="admin-form-block__title">商品名稱</div>
            <el-input v-model="searchParams.name" placeholder="請輸入商品名稱" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="admin-form-block">
            <div class="admin-form-block__title">商品類型</div>
            <el-select v-model="searchParams.type" placeholder="請選擇類型" clearable>
              <el-option label="本日精選" :value="1"></el-option>
              <el-option label="人氣精選" :value="2"></el-option>
              <el-option label="新品上市" :value="3"></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <div class="admin-search__footer">
        <button type="button" class="admin-button" @click="handleSearchProduct">搜尋</button>
      </div>
    </div>
    <div
      v-loading="isLoading"
      element-loading-text="拼命加載中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="admin-list"
    >
      <el-table :data="pageList" class="admin-list__table" style="width: 100%">
        <el-table-column prop="name" label="商品名稱" align="center"></el-table-column>
        <el-table-column prop="type" label="商品類別" align="center"></el-table-column>
        <el-table-column label="商品照片" align="center">
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px" :src="scope.row.image"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="價錢" align="center"></el-table-column>
        <el-table-column prop="amount" label="庫存" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <!-- <template slot-scope="scope"> -->
          <el-button type="text">編輯</el-button>
          <el-button type="text">刪除</el-button>
          <!-- </template> -->
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :page-count="totalPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { apiGetProducts } from '@/api'
export default {
  name: 'ProductList',
  layout: 'admin',
  data() {
    return {
      isLoading: false,
      isSearch: false,

      productsList: [],
      searchList: [],

      searchParams: {
        name: null,
        type: null,
      },

      currentPage: 1,
      perPage: 6,
    }
  },
  computed: {
    changeProductList() {
      return this.isSearch ? this.searchList : this.productsList
    },
    pageList() {
      let startPage = (this.currentPage - 1) * this.perPage
      return this.changeProductList.slice(startPage, startPage + this.perPage)
    },
    totalPage() {
      return Math.ceil(this.changeProductList.length / this.perPage)
    },
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        this.isLoading = true
        const resProd = await apiGetProducts()
        const resList = []
        for (let item in resProd) {
          resList.push({
            id: item,
            ...resProd[item],
          })
        }
        this.productsList = resList
        this.isLoading = false
      } catch (error) {
        console.log('error')
      }
    },

    handleSearchProduct() {
      this.isSearch = true
      const tempList = this.productsList.filter((item) => {
        if (this.searchParams.name && this.searchParams.type) {
          return item.name.match(this.searchParams.name) && item.type.match(this.searchParams.type)
        } else if (this.searchParams.name) {
          return item.name.match(this.searchParams.name)
        } else if (this.searchParams.type) {
          return item.type.match(this.searchParams.type)
        } else {
          return this.productsList
        }
      })
      this.searchList = tempList
    },
  },
}
</script>

<style lang="scss" scoped></style>
