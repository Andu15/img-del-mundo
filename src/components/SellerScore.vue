<template>
  <div class="scores-container">
    <span class="seller-name">Vendedor1</span>
    <div class="score-info-container">
      <span class="current-points">20</span>
      <p class="slash">/</p>
      <span class="missing-points">20</span>
      <Icon icon="mdi:heart-circle" height="30" />
    </div>
  </div>
</template>


<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'SellerScore',
  components: {
		Icon,
	}
}
</script>

<style scoped>
  .scores-container {
    @apply
    flex
    flex-row
    justify-between
    bg-neutral-greenish-lead
    rounded-lg
    py-2
    px-4
    text-base
    font-normal
    my-5
    content-center
    sm:py-4
    sm:px-6
    lg:my-7
  }

  .seller-name {
    @apply
    text-neutral-soft-white
    my-auto
    sm:text-xl
  }

  .score-info-container {
    @apply
    grid
    grid-cols-4
    text-primary-medium-green
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
    text-neutral-soft-white
    my-auto
  }
</style>