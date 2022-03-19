<template>
  <div class="container">
    <section class="statement-container">
      <img src="../assets/imagenes_del_mundo_logo.png" alt="logo"/>
      <div class="titles-invoice">
        <h2 class="title">Factura</h2>
        <p class="subtitle">Imagenes del Mundo</p>
      </div>
    </section>
    <section class="date-container">
      <p class="title-date">Fecha:</p>
      <p class="date">{{ new Date().toDateString() }}</p>
    </section>
    <section class="summary-invoice">
      <div class="seller-info-container">
        <h3 class="subtitle-text">Información del vendedor</h3>
        <p class="text-content">ID:</p>
        <p class="text-content">Estatus:</p>
        <p class="text-content-2">Nombre:</p>
      </div>
      <div class="seller-info-container">
        <h3 class="subtitle-text">Resumen de la transacción</h3>
        <p class="text-content-2">Cantidad vendida:</p>
        <p class="text-content-2">Productos:</p>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
  .statement-container{
    @apply
    flex
    flex-row
    justify-between
    content-center
    h-24
  }
  .titles-invoice {
    @apply
    flex
    flex-col
    content-center	
    my-auto
    border-secondary-pasty-green
    border-b-2
    ml-4
    w-10/12
  }
  .title {
    @apply
    text-secondary-pasty-green
    text-left
    text-xl
    font-semibold
  }
  .subtitle {
    @apply
    text-neutral-greenish-lead
    text-left
    text-sm
  }
  .date-container {
    @apply
    flex
    flex-row
    justify-between
    my-3
  }
  .title-date {
    @apply
    text-primary-medium-green
    font-medium
    text-base
  }
  .date {
    @apply
    text-neutral-greenish-lead
    font-medium
    text-base
  }
  .seller-info-container {
    @apply
    grid
    grid-cols-2
  }
  .subtitle-text {
    @apply
    bg-secondary-pasty-green
    text-neutral-soft-white
    font-medium
    col-span-2
    mb-1
    mt-4
    py-2
  }
  .text-content {
    @apply
    text-neutral-soft-white
    bg-neutral-greenish-lead
    text-left
    px-2
    py-2
    font-normal
    text-base
  }
  .text-content-2 {
    @apply
    text-neutral-soft-white
    bg-neutral-greenish-lead
    col-span-2
    text-left
    px-2
    py-2
    font-normal
    text-base
  }
</style>