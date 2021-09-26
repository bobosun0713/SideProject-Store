<template>
  <div v-loading="isLoading" class="admin-form">
    <product-form :product="productDetail" @update-loading="updateLoading"></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/product/ProductForm.vue'

import { apiProductDetail } from '@/api'
export default {
  name: 'ProductEdit',
  components: {
    ProductForm,
  },
  layout: 'admin',
  data() {
    return {
      isLoading: false,
      productDetail: {},
    }
  },
  mounted() {
    this.fetchProductDetail()
  },
  methods: {
    fetchProductDetail() {
      this.isLoading = true
      apiProductDetail(this.$route.params.id).then((res) => {
        this.productDetail = res
        this.isLoading = false
      })
    },
    updateLoading(val) {
      this.isLoading = val
    },
  },
}
</script>

<style></style>
