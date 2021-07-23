<template>
  <div>
    <admin-sidebar :is-open-sidebar="isOpenSidebar"></admin-sidebar>
    <div class="backend" :class="{ 'backend--active': isOpenSidebar }">
      <admin-header v-model="isOpenSidebar"></admin-header>
      <Nuxt></Nuxt>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/admin/Sidebar'
import AdminHeader from '@/components/admin/Header'

export default {
  name: 'DefaultAdmin',
  components: {
    AdminSidebar,
    AdminHeader,
  },
  data() {
    return {
      isOpenSidebar: false,
    }
  },
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.backend {
  margin-left: 200px;
  transition: all 0.5s;

  &--active {
    margin-left: 50px;
  }
}
</style>
