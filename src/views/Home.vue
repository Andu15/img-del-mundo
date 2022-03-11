<template>
  <div class="container">
    <section class="img-container">
      <img src="../assets/imagenes_del_mundo_logo.png"
            alt="logo"
            srcset="../assets/imagenes_del_mundo_logo-removebg.png"/>
    </section>
    <section class="introduction-container">
      <h2 class="welcome-text">Bienvenido</h2>
      <p>Encontrarás las mejores imágenes del mundo</p>
      <router-link to="main" class="btn">Empezar</router-link>
    </section>
  </div>
</template>

<style scoped>
  .container {
    @apply flex flex-col;
  }

  .img-container {
    /* width: 50vw; */
  }

  .introduction-container {
    /* width: 50vw; */
  }
</style>
