<template>
  <button class="home-btn-container btn-large" @click="deleteData">
    <Icon icon="radix-icons:update" height="30" />
  </button>
</template>

<script>
  import { Icon } from '@iconify/vue';

  export default {
    name: 'StartButton',
    components: {
      Icon,
    },
    methods: {
      deleteData(){
        console.log("eliminando console")
      }
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