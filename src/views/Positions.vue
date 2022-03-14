<template>
  <div class="container">
    <h2 class="title-view">Posiciones:</h2>
    <section class="summary-container">
      <div class="intro-summary-container">
        <p class="description-text">Ya tenemos un ganador</p>
        <span class="winner-seller">Vendedor 1</span>
        <img src="../assets/podio.png" alt="medals"/>
      </div>
      <section class="info-summary-container">
        <div class="ref-tag">
          <p>Nombre</p>
          <p>Tiene/Falta</p>
        </div>
        <div>
          <SellerScore/>
          <SellerScore/>
        </div>
        <div class="invoice-btn-container">
          <router-link to="invoice" class="invoice-btn">
            <Icon icon="fa-solid:file-invoice-dollar" height="30" />
            <p>Reclamar Factura</p>
          </router-link>
          <div>
            <!-- otro componente -->
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";

  import SellerScore from "../components/SellerScore.vue";

  export default {
    name: "Positions",
    components: {
      Icon
    }
  }
</script>

<style scoped>
  .container {
    @apply
    m-auto
    mt-6
    lg:mt-12
  }

  .title-view {
    @apply 
    text-secondary-pasty-green
    text-left
    text-xl
    font-medium	
  }

  .summary-container {
    @apply
    flex
    flex-col
    lg:flex-row
    lg:flex-row
  }

  .intro-summary-container {
    margin: auto;
  }

  .description-text {
    @apply
    text-neutral-greenish-lead
    font-normal
    text-lg
    my-2
    lg:text-xl
    lg:my-4
  }

  .winner-seller {
    @apply
    text-primary-medium-green
    font-normal
    text-lg
    my-2
  }

  .info-summary-container {
    @apply
    flex
    flex-col
  }

  .ref-tag{
    @apply
    grid
    grid-cols-2
    font-normal
    text-primary-medium-green
    text-base
    mt-4
    mb-2
  }

  .invoice-btn-container {
    @apply
    flex
    flex-col
  }

  .invoice-btn {
    @apply
    bg-primary-fluorescent-green
    rounded-lg
    flex
    flex-row
    text-neutral-greenish-lead
    justify-evenly
    py-2
    text-lg
  }
</style>