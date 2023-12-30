<template>
  <div class="container">
    <section class="img-container">
      <img src="../assets/imagenes_del_mundo_logo.png"
            alt="logo"
            srcset="../assets/imagenes_del_mundo_logo-removebg.png"/>
    </section>
    <section class="introduction-container">
      <h2 class="welcome-text">Bienvenido</h2>
      <p class="description-text">Encontrarás las mejores imágenes del mundo</p>
      <router-link to="main" class="btn-large btn-start">Empezar</router-link>
    </section>
  </div>
</template>

<style scoped>
  .container {
    @apply
    flex 
    flex-col 
    mt-4
    sm:mt-16
    md:mt-8
    lg:mt-20
    lg:flex-row
    lg:content-center
    lg:gap-10
    lg:mx-auto
  }

  .img-container {
    @apply 
    mx-auto
    lg:w-1/2
  }

  .img-container img {
    @apply m-auto
  }

  .introduction-container {
    @apply 
    flex 
    flex-col 
    justify-center 
    w-full 
    mx-auto
    sm:w-9/12
    md:w-7/12
    /* lg:bg-neutral-greenish-lead */
    lg:rounded-lg
    lg:w-1/2
    /* lg:bg-neutral-light-grey */
  }

  .welcome-text {
    @apply 
    text-secondary-main 
    font-bold 
    text-2xl	
    my-10
    sm:text-4xl
    md:text-5xl
  }

  .description-text {
    @apply 
    text-secondary-other
    font-normal 
    text-xl
    sm:text-3xl
    md:text-4xl
  }

  .btn-start {
    @apply my-20
    md:w-4/5
    md:mx-auto
    lg:mx-auto
    xl:md:w-3/4
  }
</style>
