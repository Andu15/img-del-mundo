<template>
  <section class="container">
    <div class="center">
      <div class="error">
        <div class="number">4</div>
        <div class="illustration">
          <div class="circle"></div>
          <div class="clip">
            <div class="paper">
              <div class="face">
                <div class="eyes">
                  <div class="eye eye-left"></div>
                  <div class="eye eye-right"></div>
                </div>
                <div class="rosyCheeks rosyCheeks-left"></div>
                <div class="rosyCheeks rosyCheeks-right"></div>
                <div class="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="number">4</div>
      </div>

      <div class="text">Oops. La página que estas buscando no se encuentra.</div>
      <router-link to="/" class="button">Volver al inicio</router-link>
    </div>
  </section>
</template>

<style scoped>
  body {
    @apply text-secondary-navy-blue
  }

  a {
    text-decoration: none;
  }

  .container {
    @apply w-full flex content-center mt-8 mx-auto
    md:justify-center	
  }

  .center {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .error {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.number {
  font-weight: 900;
  font-size: 15rem;
  line-height: 1;
}

.illustration {
  position: relative;
  width: 12.2rem;
  margin: 0 2.1rem;
}

.circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12.2rem;
  height: 11.4rem;
  border-radius: 50%;
  @apply bg-secondary-navy-blue
}

.clip {
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 12.5rem;
  height: 13rem;
  border-radius: 0 0 50% 50%;
}

.paper {
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 9.2rem;
  height: 12.4rem;
  border: 0.3rem;
  border-radius: 0.8rem;
  @apply bg-neutral-soft-white border-solid border-secondary-navy-blue
}

.paper::before {
  content: "";
  position: absolute;
  top: -0.5rem;
  right: -0.7rem;
  width: 1.4rem;
  height: 1rem;
  border-bottom: 0.3rem;
  transform: rotate(45deg);
  background-color: white;
  @apply  border-solid border-secondary-navy-blue
}

.face {
  position: relative;
  margin-top: 2.3rem;
}

.eyes {
  position: absolute;
  top: 0;
  left: 2.4rem;
  width: 4.6rem;
  height: 0.8rem;
}

.eye {
  position: absolute;
  bottom: 0;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  animation-name: eye;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @apply bg-secondary-navy-blue
}

.eye-left{
  left: 0;
}

.eye-right{
  right: 0;
}

@keyframes eye {
  0% {
    height: 0.8rem;
  }
  50% {
    height: 0.8rem;
  }
  52% {
    height: 0.1rem;
  }
  54% {
    height: 0.8rem;
  }
  100% {
    height: 0.8rem;
  }
}

.rosyCheeks {
  position: absolute;
  top: 1.6rem;
  width: 1rem;
  height: 0.2rem;
  border-radius: 50%;
  @apply bg-secondary-pinkish
}

.rosyCheeks-left {
  left: 1.4rem;
}

.rosyCheeks-right {
  right: 1.4rem;
}

.mouth {
  position: absolute;
  top: 3.1rem;
  left: 50%;
  width: 1.6rem;
  height: 0.2rem;
  border-radius: 0.1rem;
  transform: translateX(-50%);
  @apply bg-secondary-navy-blue
}

.text {
  margin-top: 5rem;
  font-weight: 300;
  @apply text-secondary-navy-blue font-medium text-lg
}

.button {
  margin-top: 4rem;
  padding: 1.2rem 3rem;
  @apply text-neutral-greenish-lead bg-primary-fluorescent-green rounded-lg
}

.button:hover {
  @apply bg-primary-medium-green text-neutral-soft-white
}

.by {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  text-transform: uppercase;
  @apply text-secondary-navy-blue
} 

.byLink {
  @apply text-primary-medium-green
}

</style>