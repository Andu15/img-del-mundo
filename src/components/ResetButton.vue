<template>
  <button class="home-btn-container" @click="deleteData">
    <Icon class="home-btn" icon="radix-icons:update" height="30" />
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