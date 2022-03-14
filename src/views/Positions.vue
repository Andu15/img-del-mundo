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
          <p>Tiene / Falta</p>
        </div>
        <div>
          <SellerScore/>
          <SellerScore/>
        </div>
        <div class="invoice-btn-container">
          <router-link to="invoice" class="invoice-btn">
            <Icon class="invoice-icon" icon="fa-solid:file-invoice-dollar" height="30" />
            <p>Reclamar Factura</p>
          </router-link>
          <StartButton/>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";

  import SellerScore from "../components/SellerScore.vue";
  import StartButton from "../components/StartButton.vue";

  export default {
    name: "Positions",
    components: {
      Icon,
      SellerScore,
      StartButton
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
    sm:text-2xl
    lg:text-3xl
  }

  .summary-container {
    @apply
    flex
    flex-col
    sm:my-8
    /* lg:flex-row */
    /* lg:justify-evenly */
    /* lg:content-center */
    lg:grid
    lg:grid-cols-2
    lg:mx-auto
  }

  .intro-summary-container {
    margin: auto;
    @apply
    w-4/5	
    xl:w-8/12
    2xl:w-7/12
  }

  .description-text {
    @apply
    text-neutral-greenish-lead
    font-normal
    text-lg
    my-2
    sm:text-xl
    lg:text-2xl
  }

  .winner-seller {
    @apply
    text-primary-medium-green
    font-normal
    text-lg
    my-2
    sm:text-xl
    lg:text-2xl
  }

  .info-summary-container {
    @apply
    flex
    flex-col
    sm:w-4/5
    sm:mx-auto
    lg:w-11/12
    lg:my-auto
    xl:w-9/12
    2xl:w-8/12
  }

  .ref-tag{
    @apply
    flex
    flex-row
    justify-between
    font-normal
    text-primary-medium-green
    text-lg
    mt-4
    mb-2
    mx-8
    sm:text-xl
  }

  .invoice-btn-container {
    @apply
    flex
    flex-row
    justify-between
    content-center
    relative
  }

  .invoice-btn {
    @apply
    bg-primary-fluorescent-green
    rounded-lg
    flex
    flex-row
    text-neutral-greenish-lead
    justify-center
    py-2
    text-lg
    col-span-2
    px-1
    w-9/12
    my-auto
    sm:justify-evenly
    sm:text-xl
    sm:py-4
    sm:px-6
  }

  .invoice-btn:hover {
    @apply
    bg-neutral-greenish-lead
    text-primary-fluorescent-green
    duration-500
  }

  .invoice-icon {
    @apply
    my-auto
    mr-1
  }
</style>