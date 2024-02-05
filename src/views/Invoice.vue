<template>
  <div>
    <main class="invoice-section-container">
      <section class="statement-container">
        <img src="../assets/imagenes_del_mundo_logo.png"
              alt="logo"
              srcset="../assets/imagenes_del_mundo_logo-removebg.png"/>
        <div class="titles-invoice">
          <h2 class="title">Factura</h2>
          <p class="subtitle">Imagenes del Mundo</p>
        </div>
      </section>
      <section class="date-container">
        <p class="title-date">Fecha:</p>
        <p class="date">{{ currentDate }}</p>
      </section>
      <section class="summary-invoice">
        <article class="seller-info-container">
          <h3 class="subtitle-text">Información del vendedor</h3>
          <div class="text-content">
            <p> 
              <span class="highlighted-property">Nombre: </span>
              <span>{{ winnerSellerInfo.name }}</span>
            </p>
          </div>
          <div class="text-content">
            <p>
              <span class="highlighted-property">Identificación: </span>
              <span>{{ winnerSellerInfo.identification }}</span>
            </p>
          </div>
          <div class="text-content">
            <p> 
              <span class="highlighted-property">Puesto: </span>
              <span>{{ winnerSellerInfo.position }}</span>
            </p>
          </div>
          <div class="text-content">
            <p> 
              <span class="highlighted-property">Estado: </span>
              <span>{{ winnerSellerInfo.status === "active" ? "Activo" : "Inactivo" }}</span>
            </p>
          </div>
        </article>
        <section class="summary-invoice">
          <article class="seller-info-container">
            <h3 class="subtitle-text">Resumen de la transacción</h3>
            <div class="text-content">
              <p>
                <span class="highlighted-property">Cantidad vendida: </span>
                <span>{{ winnerSellerInfo.winningImages.length }}</span>
              </p>
            </div>
            <div class="text-content">
              <p>
                <span class="highlighted-property">Puntaje: </span>
                <span>{{ winnerSellerInfo.totalScore }} pts </span>
              </p>
            </div>
            <div class="text-content-2">
              <p>
                <span class="highlighted-property">ID Productos: </span>
                <span>{{ winnerSellerInfo.winningImages.join(", ") }}</span>
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
    <aside class="btn-section">
      <button class="btn-large download-btn">
        <Icon icon="ic:twotone-download" />
          Descargar en PDF
      </button>
    </aside>
  </div>
</template>
<script>
  import { Icon } from '@iconify/vue';

  import { getCurrentDate } from "../services/dayjs"

  export default {
    name: 'Invoice',
    components: {
      Icon,
    },
    data(){
      return {
        infoSellers: [],
        winnerSellerInfo: {
          name: '',
          identification: '',
          position: '',
          status: '',
          totalScore: 0,
          winningImages: []
        }
      }
    },
    computed: {
      currentDate: function () {
        return getCurrentDate()
      }
    },
    async created(){
      const sellersInfo = await this.$store.state.sellersInfo

      if (sellersInfo.length > 0){
         const maxScoreIndex = await sellersInfo.findIndex(vendedor => vendedor.score === Math.max(...sellersInfo.map(v => v.score)));
        const { arraySellerImages, score, sellerId } = await sellersInfo[maxScoreIndex]
        const { identification, name, observations, status } = await this.$store.dispatch("getAlegraSellerByID", sellerId)

        this.winnerSellerInfo.name = name
        this.winnerSellerInfo.identification = identification
        this.winnerSellerInfo.position = observations
        this.winnerSellerInfo.status = status
        this.winnerSellerInfo.totalScore = score
        this.winnerSellerInfo.winningImages = arraySellerImages
      } else {
        this.winnerSellerInfo.name = ''
        this.winnerSellerInfo.identification = ''
        this.winnerSellerInfo.position = ''
        this.winnerSellerInfo.status = ''
        this.winnerSellerInfo.totalScore = 0
        this.winnerSellerInfo.winningImages = []
      }
    },
    async mounted(){
      // const invoiceNumber = await this.$store.dispatch("createInvoiceNumber")
    }
  }
</script>
<style scoped>
  .invoice-section-container{
    @apply
    mt-14
  }
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
    border-secondary-main
    border-b-2
    ml-4
    w-10/12
  }
  .title {
    @apply
    text-secondary-main
    text-left
    text-3xl
    font-semibold
  }
  .subtitle {
    @apply
    text-secondary-other
    text-left
    text-xl
  }
  .date-container {
    @apply
    flex
    flex-row
    justify-between
    my-3
    text-lg
  }
  .title-date {
    @apply
    text-secondary-secondary
    font-medium
    text-lg
  }
  .date {
    @apply
    text-secondary-other
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
    text-lg
    bg-secondary-main
    text-neutral-light
    font-medium
    col-span-2
    mb-1
    mt-4
    py-2
  }
  .text-content {
    @apply
    bg-secondary-other
    text-left
    px-2
    py-2
    font-normal
    text-base
  }
  .text-content-2 {
    @apply
    bg-secondary-other
    col-span-2
    text-left
    px-2
    py-2
    font-normal
    text-base
  }
  .btn-section {
    @apply
    grid
    grid-cols-2
    mt-8
  }
  .download-btn {
    @apply
    col-end-3
    flex
    gap-x-2
    justify-center
    items-center
    my-auto
    rounded-full
    p-2
    text-lg
    sm:p-3
  }

</style>