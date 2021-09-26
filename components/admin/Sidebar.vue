<template>
  <div class="sidebar" :class="{ active: isOpenSidebar }">
    <!-- Logo -->
    <img class="sidebar__logo" src="../../assets/image/logo.png" alt="logo" @click="goAdminHome" />
    <div class="sidebar__text">BACKEND</div>

    <!-- 側邊選單 -->
    <ul class="sidebar-list">
      <sidebar-item
        v-for="item in transformMenuList"
        :key="item.name"
        :item="item"
        :is-open-sidebar="isOpenSidebar"
      ></sidebar-item>
    </ul>
  </div>
</template>

<script>
import SidebarItem from '@/components/admin/SidebarItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('admin', ['menuList']),
    transformMenuList() {
      const menuList = this.menuList.map((item) => {
        return {
          icon: item.icon,
          link: item.link,
          name: item.name,
          ...(item.children && { children: item.children.filter((child) => !child.link.includes('edit')) }),
        }
      })
      return menuList
    },
  },
  methods: {
    goAdminHome() {
      this.$router.push('/admin')
    },
  },
}
</script>

<style lang="scss" scope>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  background-color: map-get($theme-colors, dark-blue);
  height: 100vh;
  width: 200px;
  transition: left 0.5s;

  &__logo {
    display: block;
    border: 1px solid;
    margin: 60px auto 30px;
    cursor: pointer;
    border-radius: 100%;
    background-color: map-get($theme-colors, light);
    height: 80px;
    width: 80px;
    padding: 5px;
  }

  &__text {
    color: map-get($theme-colors, light);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    display: none;
    margin-left: auto;
    margin-right: 14px;
    letter-spacing: 2px;
  }

  // 收合
  &.active {
    left: -150px;
    .sidebar__logo {
      display: none;
    }
    .sidebar__text {
      display: block;
      padding: 20px 0 20px;
    }
  }
}
</style>
