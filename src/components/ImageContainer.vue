<template>
  <div class="img-container">
    <img class="img-item" :src="image.src.landscape" alt="prueba"/>
    <p class="likes"><span>{{ likes }}</span> likes</p>
    <p class="author">vendedor {{ id + 1}}</p>
    <button class="likes-action-btn" @click="increase">
      <Icon class="heart-icon" icon="el:heart-alt" height="30" />
    </button>
  </div>
</template>


<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'ImageContainer',
  components: {
		Icon,
	},
  props: [
    "image",
    "id"
  ],
  data() {
    return {
      likes: 0
    }
  },
  methods: {
    async increase () {
      this.likes++;
      const seller = {
        id: this.id,
        likes: this.likes,
        product: this.image.url,
        idProduct: this.image.id,
        photographer: this.image.photographer,
        imgDescription: this.image.alt
      }
      
      await this.$store.dispatch("updateInfo", seller);
    }
  }
}
</script>

<style scoped>
.img-container {
  @apply
  rounded-lg
  relative
  w-4/5
  mx-auto
  xl:w-10/12
}

.img-item {
  @apply
  rounded-lg
  w-full
}

.likes {
  @apply
  bg-primary-main
  rounded-full
  px-2.5
  text-neutral-soft-white
  font-normal
  absolute
  top-2
  left-2
}

.author {
  @apply
  bg-neutral-main
  rounded-full
  px-2.5
  font-normal
  text-neutral-greenish-lead
  absolute
  top-2
  right-2
}

.likes-action-btn {
  @apply
  absolute
  text-primary-fluorescent-green
  bottom-4
  right-4
  flex
  justify-between
  content-center
}

.text-btn{
  @apply
  my-auto
  mr-2
  hidden
}

/* .text-btn:hover{
  @apply
  block
} */

.likes-action-btn:hover {
  @apply
  text-neutral-greenish-lead
  scale-110
  cursor-pointer
}


</style>