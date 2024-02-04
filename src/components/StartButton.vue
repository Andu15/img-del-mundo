<template>
  <router-link to="/" class="btn-large home-btn-container">
    <Icon icon="ant-design:home-filled" height="30" />
  </router-link>
</template>

<script>
  import { Icon } from '@iconify/vue';

  export default {
    name: 'StartButton',
    components: {
      Icon,
    }
  }
</script>

<style scoped>
  .home-btn-container {
    @apply
    my-auto
    rounded-full
    p-2
    sm:p-3
  }
</style>