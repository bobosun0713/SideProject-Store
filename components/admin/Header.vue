<template>
  <header class="header">
    <div class="header-control">
      <!-- sidebar -->
      <button class="header-control-button" @click="toggleOpen">
        <span class="header-control-button__line"></span>
      </button>
      <!-- logout -->
      <button class="header-control-logout" @click="signOut">Sign Out</button>
    </div>
    <bread-crumb></bread-crumb>
  </header>
</template>

<script>
import BreadCrumb from '@/components/admin/BreadCrumb'
export default {
  name: 'Header',
  components: {
    BreadCrumb,
  },
  model: {
    prop: 'value',
    event: 'update:isOpenSidebar',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleOpen() {
      this.$emit('update:isOpenSidebar', !this.value)
    },
    signOut() {},
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: map-get($theme-colors, light);
  position: sticky;
  top: 0;
  z-index: 1;

  &-control {
    padding: 15px 25px;
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;

    // button
    &-button {
      margin: auto 0;
      padding: 10px 0;
      height: 30px;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      &__line {
        display: block;
        height: 3px;
        width: 30px;
        background-color: map-get($theme-colors, dark-blue);
        border-radius: 10px;
        position: relative;

        &::before,
        &::after {
          content: '';
          display: block;
          height: 3px;
          width: 100%;
          background-color: map-get($theme-colors, dark-blue);
          border-radius: 10px;
          position: absolute;
        }

        &::before {
          top: 8px;
        }

        &::after {
          top: -8px;
        }
      }
    }

    &-logout {
      cursor: pointer;
      display: block;
      width: 120px;
      padding: 10px 10px;
      border: 0;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 1px 1px 2px map-get($theme-colors, shadow);
      background-color: map-get($theme-colors, dark-blue);
      color: map-get($theme-colors, light);
      transition: all 0.3s;

      &:active,
      &:hover {
        background-color: map-get($theme-colors, light-green);
        box-shadow: 0 0 0;
        transform: translateY(0.5px);
      }
    }
  }
}
</style>
