<template>
  <div class="container">
    <section class="search-container">
      <label class="text-label" for="site-search">Buscar:</label>
      <div class="input-search-container">
        <input class="input-search" type="search" id="site-search" name="site-search" placeholder="Escribe aquí..."/>
        <Icon icon="fa-solid:search" color="#98f5e1" height="30" />
      </div>
    </section>
    <section class="action-container">
      <span class="search-word">encanto</span>
      <button class="action-btn-container">
        <Icon icon="bxs:medal" color="#98f5e1" height="30" class="my-auto"/>
        <p class="text-btn">Posiciones</p>
      </button>
    </section>
    <main class="img-list">
      <ImageContainer/>
      <ImageContainer/>
      <ImageContainer/>
      <ImageContainer/>
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
