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
    my-2
    content-center	
  }

  .seller-name {
    @apply
    text-neutral-soft-white
    my-auto
  }

  .score-info-container {
    @apply
    grid
    grid-cols-4
    text-primary-medium-green
  }

  .current-points {
    @apply
    font-semibold
    my-auto
  }

  .slash {
    @apply
    my-auto
  }

  .missing-points {
    @apply
    text-neutral-soft-white
    my-auto
  }
</style>