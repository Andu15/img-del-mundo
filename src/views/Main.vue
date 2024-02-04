<template>
  <div class="container">
    <h2 class="main-title">¡Qué comience la carrera!</h2>
    <p class="main-subtitle">Por cada imagen que selecciones se le brindará 3 puntos al vendedor, cuando alguno de los vendedores supere los 20 pts, se termina la carrera.</p>
    <p class="score-span">Puntaje máximo: {{ topScore }} pts</p>
    <section class="search-container">
      <label class="text-label" for="site-search">Buscar:</label>
      <div class="input-search-container">
        <input class="input-search" type="search" id="site-search" name="site-search" placeholder="Busca una imagen" v-model="query" @keyup.enter="getWordTag"/>
        <Icon icon="fa-solid:search" color="#2EC4B6" height="30" @click="getWordTag" />
      </div>
    </section>
    <section class="action-container">
      <span class="search-word" v-if="query.length">Palabra: {{ query }}</span>
      <router-link to="/" v-if="isTopScore" class="action-btn-container">
        <Icon icon="ic:round-home" color="#f8f9fa" height="30" class="my-auto"/>
        <p class="text-btn">Ir a inicio</p>
      </router-link>
    </section>
    <main class="img-list">
      <section v-if="query.length">
        <div v-if="isLoading">
          <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :is-full-page="fullPage"/>
        </div>
        <div v-else>
          <article v-if="!isTopScore" class="image-container-panel">
            <ImageContainer 
            @cleanQuery="cleanQuery"
            v-for="(image, index) in images" 
            :key="index" 
            :image="image" 
            :id="index + 1"
            />
          </article>
          <article class="goal-container" v-else>
            <img class="flag-image" src="../assets/flag.png" alt="final de la carrera imagen"/>
            <h3 class="goal-text-main">La carrera ha terminado</h3>
            <p class="goal-text-secondary">Gracias por participar</p>
          </article>
        </div>
      </section>
      <section v-else>
        <p class="result-text">¡Opps, intenta buscando algo!</p>
      </section>
    </main>
  </div>
</template>
<script>
  import { Icon } from "@iconify/vue";
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';

  import ImageContainer from "../components/ImageContainer.vue";

  export default {
    name: "Main",
    components: {
      Icon,
      ImageContainer,
      Loading
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
      },
      sellersInfo: function () {
        return this.$store.state.sellersInfo.length > 3
      }
    },
    data() {
      return {
        query: '',
        isTopScore: false,
        topScore: 0,
        isLoading: false,
        fullPage: true
      }
    },
    watch: {
      '$store.state.sellersInfo': {
        handler(newValue, oldValue) {
          this.analyzeScore()
        },
        deep: true,
      },
    },
    methods: {
      async getWordTag (){
        this.isLoading = true
        await this.$store.dispatch("getAlegraSellers");

        const payload = {
          searchWord: this.query,
          quantity: this.sellers.length
        }
        
        if(this.query.length) {
          await this.$store.dispatch("getImages", payload);
        } 
        this.isLoading = false
      },
      getLikesForImage(index) {
        const seller = this.sellers[index]
        return seller ? seller.likes : 0
      },
      async analyzeScore() {
        const sellersInfo = await this.$store.state.sellersInfo
        const maximumScore = sellersInfo.find((vendedor) => vendedor.score >= 20)
        if(maximumScore !== undefined){
          this.isTopScore = true
        } else {
          this.isTopScore = false
        }
      },
      async cleanQuery(){
        await this.findMaximumScore()

        if(this.topScore < 20){
          this.query = ''
        }
      },
      async findMaximumScore(){
        const sellersInfo = await this.$store.state.sellersInfo

        if (sellersInfo.length > 0){
          const getMaximumScore = sellersInfo.reduce((a, b) => (b.score > a ? b.score : a), 0)
          this.topScore = getMaximumScore;
        } else {
          this.topScore = 0
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
.main-title {
  @apply
  text-secondary-main
  font-bold 
  text-2xl
  my-5
  sm:text-3xl
}
.main-subtitle {
  @apply
  text-neutral-other
  text-lg
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
  lg:text-xl
}
.goal-container {
  width: 100%;
  margin: auto;
}
.flag-image {
  width:200px;
  margin: auto;
  border: 1px solid white;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 4rem;
  @apply
  bg-neutral-main
}
.goal-text-main {
  font-size: 20px;
  @apply
  text-neutral-other
}
.goal-text-secondary {
  font-size: 17px;
  @apply
  text-neutral-secondary
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
  bg-primary-main
  rounded-lg
}
.score-span {
  margin-top: .5rem;
  border-radius: 0.5rem;
  padding: 5px;
  @apply
  bg-primary-main
  text-primary-other
  text-center
  col-start-1
  col-end-3
  md:col-end-4
  lg:col-end-6
  font-semibold
  mb-10
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
.invoice-btn {
  @apply 
  my-20
  bg-primary-main
}
.invoice-btn:hover, .invoice-btn:active {
  @apply 
  bg-primary-main
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
