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
