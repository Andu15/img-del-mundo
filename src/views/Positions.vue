<template>
  <div class="container">
    <h2 class="title-view">Posiciones:</h2>
    <section class="summary-container">
      <div class="intro-summary-container">
        <p class="description-text">{{ textResult }}</p>
        <span class="winner-seller">{{ winningSeller }}</span>
        <img src="../assets/podio.png" alt="medals"/>
      </div>
      <section class="info-summary-container" v-if="vendors.length > 0">
        <div class="ref-tag">
          <p>Vendedor</p>
          <p>Likes</p>
        </div>
        <div v-for="(vendor, index) in vendors" :key="index">
          <SellerScore :vendor="vendor" />
        </div>
        <div class="invoice-btn-container">
          <InvoiceButton :isExistWinner="isExistWinner" />
          <StartButton />
          <ResetButton />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";

  import SellerScore from "../components/SellerScore.vue";
  import InvoiceButton from "../components/InvoiceButton.vue";
  import StartButton from "../components/StartButton.vue";
  import ResetButton from "../components/ResetButton.vue";

  export default {
    name: "Positions",
    components: {
      Icon,
      SellerScore,
      InvoiceButton,
      StartButton,
      ResetButton
    },
    mounted() {
      this.getWinners()
    },
    computed: {
    },
    data(){
      return {
        vendors: [],
        textResult: '',
        winningSeller: '',
        isExistWinner: false
      }
    },
    watch: {
      '$store.state.sellersInfo': {
        handler(newValue, oldValue) {
          this.getWinners()
        },
        deep: true,
      },
    },
    methods: {
      async getWinners (){
        this.vendors = await this.$store.state.sellersInfo
        const maximumScore = this.vendors.find((vendedor) => vendedor.score >= 20)

        if(maximumScore !== undefined){
          this.textResult = "Ya tenemos un ganador"
          this.winningSeller = ""
          this.isExistWinner = true
        } else {
          this.textResult = "Aún no tenemos ganador"
          this.winningSeller = "Sigamos jugando"
          this.isExistWinner = false
        }
      }
    },
    updated(){
      // console.log("vendors", this.vendors)
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
    text-secondary-main
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
    text-secondary-other
    font-normal
    text-lg
    my-2
    sm:text-xl
    lg:text-2xl
  }

  .winner-seller {
    @apply
    text-secondary-secondary
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
    text-secondary-secondary
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
    gap-x-2.5
  }

  .invoice-btn {
    @apply
    rounded-lg
    flex
    flex-row
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
    duration-500
  }

  .invoice-icon {
    @apply
    my-auto
    mr-1
  }
</style>