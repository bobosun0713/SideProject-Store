<template>
  <div class="default-admin">
    <admin-sidebar :is-open-sidebar="isOpenSidebar"></admin-sidebar>
    <div class="backend" :class="{ 'backend--active': isOpenSidebar }">
      <admin-header v-model="isOpenSidebar"></admin-header>
      <div class="backend-wrapper">
        <transition name="v" mode="out-in">
          <Nuxt></Nuxt>
        </transition>
      </div>
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
.backend {
  margin-left: 200px;
  transition: all 0.5s;

  &--active {
    margin-left: 50px;
  }

  &-wrapper {
    background-color: #373e57;
    min-height: calc(100vh - 112px);
    padding: 24px;
  }
}

// transition
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.6s;
}
.v-leave-to {
  opacity: 0;
}

.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.6s;
}
.v-enter-to {
  opacity: 1;
}
</style>
