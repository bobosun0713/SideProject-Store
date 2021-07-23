<template>
  <li class="sidebar-item" :class="{ 'sidebar-item--active': isOpenSidebar }">
    <!-- 一 -->
    <router-link v-if="!menuChildren" :to="item.link" class="sidebar-item__link">
      <font-awesome :icon="item.icon" class="sidebar-item__icon"></font-awesome>
      <span class="sidebar-item__link-text">{{ item.name }}</span>
    </router-link>

    <!-- 二 -->
    <template v-else>
      <a
        class="sidebar-item__link"
        :class="{ 'sidebar-item__link--active': isListOpen }"
        href="javascript:;"
        @click="toggleList"
      >
        <font-awesome :icon="item.icon" class="sidebar-item__icon"></font-awesome>
        <span class="sidebar-item__link-text">{{ item.name }}</span>
        <font-awesome icon="chevron-right" class="sidebar-item__icon-arrow"></font-awesome>
      </a>
      <ul class="sidebar-list__sub" :style="{ height: childrenHight }">
        <sidebar-item v-for="child in item.children" :key="child.name" :item="child"></sidebar-item>
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    isOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isListOpen: false,
    }
  },
  computed: {
    menuChildren() {
      return this.item?.children ? this.item.children : false
    },
    childrenHight() {
      return this.isListOpen ? `${40 * this.menuChildren.length}px` : '0px'
    },
  },

  methods: {
    toggleList() {
      this.isListOpen = !this.isListOpen
    },
  },
}
</script>

<style lang="scss" scoped>
// menu
.sidebar-item {
  overflow: hidden;

  &__icon {
    width: 16px;
    height: 16px;
    margin-right: 12px;

    &-arrow {
      transition: all 0.2s;
      margin-left: auto;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 40px;
    font-size: 16px;
    color: map-get($theme-colors, light);

    &--active {
      .sidebar-item__icon-arrow {
        transform: rotate(90deg);
      }
    }
  }

  &--active {
    .sidebar-item__link {
      padding: 10px 17px;
      text-align: right;
      &-text {
        display: none;
      }
    }
    .sidebar-item__icon {
      margin-right: 0;
      margin-left: auto;

      font-size: 18px;

      &-arrow {
        display: none;
      }
    }
  }

  // 下拉選單
  .sidebar-list__sub {
    background-color: map-get($theme-colors, light-blue);
    transition: all 0.2s;
  }

  .nuxt-link-active {
    background-color: #40b983;
    border-left: 4px solid rgb(51, 245, 51);
  }
}
</style>
