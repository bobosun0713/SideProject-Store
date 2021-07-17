<template>
  <div>
    <default-header></default-header>
    <Nuxt></Nuxt>
    <sub-scription></sub-scription>
    <default-footer></default-footer>
  </div>
</template>
<script>
import DefaultHeader from '@/components/layout/Header'
import DefaultFooter from '@/components/layout/Footer'
import SubScription from '@/components/layout/SubScription'
export default {
  name: 'Default',
  components: {
    DefaultHeader,
    DefaultFooter,
    SubScription,
  },
}
</script>

<style>
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
</style>
