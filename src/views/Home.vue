<template>
  <div class="container">
    <section class="img-container">
      <img src="../assets/imagenes_del_mundo_logo.png"
            alt="logo"
            srcset="../assets/imagenes_del_mundo_logo-removebg.png"/>
    </section>
    <section class="introduction-container">
      <h2 class="welcome-text">Bienvenid@</h2>
      <p class="description-text">Encontrarás las mejores imágenes del mundo</p>
      <div class="btn-group">
        <router-link to="main" class="btn-large btn-start">Usuario</router-link>
        <router-link to="positions" class="btn-large btn-start">Vendedor</router-link>
      </div>
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
    lg:rounded-lg
    lg:w-1/2
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
  }
  .btn-group {
    @apply 
    flex 
    flex-col 
    justify-center 
    items-center
    w-full 
    mx-auto
    mt-10
  }
  .btn-start {
    @apply 
    my-5
    w-4/5
    py-2
    xl:md:w-3/4
  }
</style>
