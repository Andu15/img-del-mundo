<template>
  <router-link to="/" class="home-btn-container">
    <Icon class="home-btn" icon="ant-design:home-filled" height="30" />
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
    bg-primary-fluorescent-green
    rounded-full
    p-2
    text-neutral-soft-white
    sm:p-3
  }

  .home-btn-container:hover {
    @apply
    bg-neutral-soft-white
    text-neutral-greenish-lead
  }

</style>