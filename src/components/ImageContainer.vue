<template>
  <div class="img-container">
    <img class="img-item" :src="image.src.landscape" alt="image"/>
    <p class="likes"><span>{{ likes }}</span> likes</p>
    <p class="author">vendedor {{ id + 1}}</p>
    <button class="likes-action-btn" @click="likeButton" :style="isLike ? 'color:#03045E' : 'color:#2EC4B6'">
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
      isLike: false,
      likes: 0
    }
  },
  watch: {
    isLike(){
      this.handlerClicks()
    }
  },
  methods: {
    async likeButton() {
      this.isLike = !this.isLike
    },
    async handlerClicks(){
      this.likes += 3

      const seller = {
        sellerId: this.id,
        imageId: this.image.id,
        imageLike: this.likes
      }

      await this.$store.commit("fillInfo", seller)
      await this.$store.commit("fillImages", [])
      await this.$store.commit("fillSellers", [])
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
  transition: 1s;
  @apply
  absolute
  /* text-secondary-main */
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
  /* text-primary-main */
  scale-110
  cursor-pointer
}


</style>