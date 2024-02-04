<template>
    <button class="invoice-btn btn-large" @click="generateInvoice" :disabled="!isExistWinner">
      <Icon icon="fa-solid:file-invoice-dollar" height="30" />
      <p>Reclamar Factura</p>
    </button>
</template>

<script>
  import { Icon } from '@iconify/vue';

  export default {
    name: 'InvoiceButton',
    components: {
      Icon,
    },
    props: {
      isExistWinner: Boolean
    },
    methods: {
      generateInvoice(){
        this.$router.push('/invoice')
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