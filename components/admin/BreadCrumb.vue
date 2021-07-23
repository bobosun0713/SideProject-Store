<template>
  <ul class="breadcrumb">
    <li v-if="breadCrumbList.length > 1" class="breadcrumb__links" @click="routerTo('/admin')">首頁</li>
    <li
      v-for="(breadcrumb, index) in breadCrumbList"
      :key="index"
      class="breadcrumb__links"
      @click="routerTo(breadcrumb.link)"
    >
      {{ breadcrumb.name }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BreadCrumbs',
  data() {
    return {
      breadCrumbList: [],
    }
  },
  computed: {
    ...mapState('admin', ['menuList']),
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        let urlPathName = val.fullPath.split('/')[2]
        let urlChildren = this.menuList.filter((parentItem) => parentItem.link.includes(urlPathName))[0]
        this.breadCrumbList = urlChildren ? urlChildren.children : [{ name: '首頁' }]
      },
    },
  },
  methods: {
    routerTo(Path) {
      this.$router.push(Path)
    },
  },
}
</script>

<style lang="scss" scoped>
// breadcrumb
.breadcrumb {
  display: flex;
  padding: 10px 25px;
  border-top: 1px solid map-get($theme-colors, border);
  border-bottom: 1px solid map-get($theme-colors, border);
  flex-basis: 100%;

  &__links {
    position: relative;
    color: map-get($theme-colors, dark-blue);
    font-size: 14px;

    &:first-child {
      cursor: pointer;
    }

    &:not(:first-child) {
      margin-left: 20px;

      &:before {
        content: '\276F';
        position: absolute;
        left: -13.5px;
        font-size: 10px;
        top: 1.5px;
        color: map-get($theme-colors, light-gray);
      }
    }
  }
}
</style>
