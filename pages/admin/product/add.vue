<template>
  <div v-loading="isLoading" class="admin-form">
    <product-form @update-loading="updateLoading"></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/product/ProductForm.vue'
export default {
  name: 'ProductAdd',
  components: {
    ProductForm,
  },
  layout: 'admin',
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    updateLoading(val) {
      this.isLoading = val
    },
  },
}
</script>
