<template>
  <h1>{{ error }}</h1>
</template>

<script>
export default {
  name: 'Error',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style></style>
