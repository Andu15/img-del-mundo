<template>
  <div class="container">
    <section class="search-container">
      <label class="text-label" for="site-search">Buscar:</label>
      <div class="input-search-container">
        <input class="input-search" type="search" id="site-search" name="site-search" placeholder="Escribe aquí..." v-model="query"/>
        <Icon icon="fa-solid:search" color="#98f5e1" height="30" @click="getWordTag"/>
      </div>
    </section>
    <section class="action-container">
      <span class="search-word" v-if="tagWord.length">{{ tagWord }}</span>
      <router-link to="positions" class="action-btn-container">
        <Icon icon="bxs:medal" color="#98f5e1" height="30" class="my-auto"/>
        <p class="text-btn">Posiciones</p>
      </router-link>
    </section>
    <main class="img-list">
      <notifications position="top left" width="60%"  />
      <h2 v-if="!tagWord">Intenta buscando algo</h2>
      <div v-if="tagWord">
        <ImageContainer v-for="image in images" :key="image.id" :image="image" />
      </div>
    </main>
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
        tagWord: ''
      }
    },
    methods: {
      getWordTag(){
        this.tagWord = this.query;

        this.$store.dispatch("getAllSellers");

        const payload = {
          searchWord: this.query,
          // quantity: this.sellers.length
          quantity: 6
        }
        if(this.query.length) {
          this.$store.dispatch("getImages", payload);
        } else {
          this.$notify({
            title: "Ups, El campo de búsqueda esta vacio",
            text: "Intenta escribiendo algo y luego click en la lupita",
            type: "error"
          });
        }
        
      }
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
  text-secondary-pasty-green
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
  border-secondary-pasty-green
  border-2
  py-1
  px-4
  lg:w-10/12
}

.input-search {
  outline: none;
  @apply
  lg:w-11/12
  lg:text-2xl
}

input::placeholder {
  @apply 
  text-neutral-greenish-lead
  lg:text-xl
}

.action-container {
  @apply
  flex
  flex-row
  justify-between
  items-center
  my-6
}

.search-word {
  @apply
  bg-primary-aqua-green
  text-neutral-greenish-lead
  rounded-lg
  py-2
  px-3
  lg:text-lg	
}

.action-btn-container {
  @apply
  flex
  flex-row
  justify-around
  content-center	
}

.action-btn-container:hover {
  @apply
  bg-neutral-greenish-lead
  rounded-lg
}

.text-btn {
  @apply
  text-secondary-pasty-green
  my-auto
  py-2
  px-3
  lg:text-xl
}

.text-btn:hover {
  @apply
  text-primary-fluorescent-green
}

.img-list {
  @apply
  grid
  grid-cols-1
  gap-x-2
  gap-y-4
  sm:grid-cols-2
  lg:grid-cols-3
}

</style>
