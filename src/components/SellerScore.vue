<template>
  <div class="scores-container">
    <span class="seller-name" v-if="infoVendor && infoVendor.name">{{ infoVendor.name }}</span>
    <div class="score-info-container">
      <strongs class="current-points">{{ vendor.score }}</strongs>
      <Icon icon="icon-park-twotone:like" height="30" />
      <p class="slash">/</p>
      <span class="missing-points">20</span>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'SellerScore',
  components: {
		Icon,
	},
  props: {
    vendor: Object
  },
  data(){
      return {
        infoVendor: {}
      }
  },
  methods: {
    async loadInfoVendor() {  
      if (this.vendor && this.vendor.sellerId) {
        console.log("id real", this.vendor.sellerId)
        this.infoVendor = await this.$store.dispatch("getAlegraSellerByID", this.vendor.sellerId)
        console.log("infoVEndor", this.infoVendor)
      }
    }
  },
  created(){
    this.loadInfoVendor()
  }
}
</script>

<style scoped>
  .scores-container {
    @apply
    flex
    flex-row
    justify-between
    bg-neutral-secondary
    rounded-lg
    py-2
    px-4
    text-base
    font-normal
    mb-5
    content-center
    sm:pb-4
    sm:px-6
    lg:mb-7
  }

  .seller-name {
    @apply
    text-neutral-light
    my-auto
    sm:text-xl
  }

  .score-info-container {
    @apply
    grid
    grid-cols-4
    text-secondary-secondary
    sm:text-xl
  }

  .current-points {
    @apply
    font-semibold
    my-auto
    sm:text-xl
  }

  .slash {
    @apply
    my-auto
    sm:text-xl
  }

  .missing-points {
    @apply
    text-neutral-light
    my-auto
  }
</style>