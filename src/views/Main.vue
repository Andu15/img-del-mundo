<template>
  <div class="container">
    <section class="search-container">
      <label class="text-label" for="site-search">Buscar:</label>
      <div class="input-search-container">
        <input class="input-search" type="search" id="site-search" name="site-search" placeholder="Busca una imagen" v-model="query" @keyup.enter="getWordTag"/>
        <Icon icon="fa-solid:search" color="#2EC4B6" height="30" @click="getWordTag" />
      </div>
    </section>
    <section class="action-container">
      <span class="search-word" v-if="query.length">Palabra: {{ query }}</span>
      <router-link to="positions" class="action-btn-container">
        <Icon icon="bxs:medal" color="#f8f9fa" height="30" class="my-auto"/>
        <p class="text-btn">Posiciones</p>
      </router-link>
    </section>
    <main class="img-list">
      <!-- <notifications position="top left" width="60%"  /> -->
      <div v-if="query" class="image-container-panel">
        <ImageContainer 
        v-for="(image, index) in images" 
        :key="index" 
        :image="image" 
        :id="index"
        @like="handleLike"
        />
      </div>
      <div v-else>
        <p class="result-text">¡Opps, intenta buscando algo!</p>
      </div>
    </main>
    <!-- loading -->
    <div></div>
  </div>
</template>
<script>
  import { Icon } from "@iconify/vue";

  import ImageContainer from "../components/ImageContainer.vue";

  export default {
    name: "Main",
    components: {
      Icon,
      ImageContainer
    },
    mounted() {
      // this.$store.dispatch('')
    },
    updated() {
      // console.log("actualizado")
    },
    computed:  {
      images: function () {
        return this.$store.state.images
      },
      sellers: function () {
        return this.$store.state.sellers
      }
    },
    data() {
      return {
        query: '',
      }
    },
    methods: {
      async getWordTag (){
        await this.$store.dispatch("getAlegraSellers");
        // await this.$store.dispatch("getAllSellers");

        const payload = {
          searchWord: this.query,
          quantity: this.sellers.length
        }

        if(this.query.length) {
          await this.$store.dispatch("getImages", payload);
        } //else {
          // this.$notify({
          //   title: "Ups, El campo de búsqueda esta vacio",
          //   text: "Intenta escribiendo algo y luego click en la lupita",
          //   type: "error"
          // });
        // }
        
      },
      getLikesForImage(index) {
        const seller = this.sellers[index];
        return seller ? seller.likes : 0;
      },
      handleLike(index) {
        const seller = this.sellers[index];
        console.log("seller", seller)
        if (seller) {
          this.$store.dispatch("updateInfo", {
            id: index,
            likes: seller.likes + 1,
          });
        }
      },
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

.search-container {
  @apply
  flex
  flex-col
  content-center
  lg:flex-row
  lg:justify-between
}

.text-label {
  text-align: left;
  @apply
  text-secondary-main
  font-normal
  text-2xl
  my-auto
  lg:text-3xl
}

.input-search-container {
  @apply
  flex
  justify-between
  rounded-lg
  border-secondary-main
  border-2
  py-1
  px-4
  lg:w-10/12
}

.input-search {
  outline: none;
  background: none;
  width: 95%;
  @apply
  text-neutral-light
  lg:w-11/12
  lg:text-2xl
}

input::placeholder {
  @apply 
  /* text-neutral-greenish-lead */
  lg:text-xl
}

.action-container {
  @apply
  grid
  grid-cols-2
  my-6
  md:grid-cols-3
  lg:grid-cols-5
}

.search-word {
  @apply
  bg-neutral-secondary
  text-neutral-light
  rounded-lg
  py-2
  px-3
  col-start-1
  col-end-2
  lg:text-lg	
}

.action-btn-container {
  @apply
  flex
  flex-row
  justify-around
  content-center	
  bg-secondary-main
  rounded-lg
  col-start-2
  col-end-3
  md:col-start-3
  md:col-end-4
  lg:col-start-5
  lg:col-end-6
}

.action-btn-container:hover {
  @apply
  /* bg-neutral-greenish-lead */
  bg-primary-main
  rounded-lg
}

.text-btn {
  @apply
  text-neutral-light
  /* bg-secondary-main */
  my-auto
  py-2
  px-3
  lg:text-xl
}

.text-btn:hover {
  /* @apply */
  /* text-primary-fluorescent-green */
}
.img-list {
  margin-top: 3rem;
  /* @apply
  grid
  grid-cols-1
  gap-x-2
  gap-y-4
  sm:grid-cols-2
  lg:grid-cols-3 */
}
.result-text {
  /* text-align: center; */
  @apply
  text-neutral-light
}
.image-container-panel {
  @apply
  grid
  grid-cols-1
  gap-y-5
  md:grid-cols-2
  lg:grid-cols-3 
}
</style>
