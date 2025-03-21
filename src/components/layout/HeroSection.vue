<script setup></script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>EcoLog</h1>
      <p>Actividades por el bien ecológico de nuestra isla</p>
      <div class="link-set">
        <router-link to="/empresas">Empresas</router-link>
        <router-link to="/proyectos">Proyectos</router-link>
        <router-link to="/actividades">Actividades</router-link>
      </div>
    </div>
    <div class="hero-images">
      <img src="@/assets/images/img1.jpg" class="img img1" />
      <img src="@/assets/images/img2.jpg" class="img img2" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
  padding: 2rem;
  background-color: #003b2c;

  .hero-text {
    color: #f1f1f1;
    h1 {
      font-size: 6rem;
      margin-bottom: 1rem;
      text-shadow: 0rem 0.5rem 0.2rem #003b2c88, 0rem 1rem 5rem #ffffff66;
    }
    p {
      font-size: 1.8rem;
    }
    .link-set {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      a {
        color: #f1f1f1;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        background-color: #ffffff22;
        transition: 0.2s;
        &:hover {
          background-color: #ffffff44;
        }
      }
    }
  }
  .hero-images {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .img {
      filter: brightness(85%);
      width: 20vw;
      border-radius: 3rem;
      transition: 0.5s;
      box-shadow: 0 13px 27px -5px #ffffff40, 0 8px 16px -8px #ffffff4d,
        0 -6px 16px -6px #ffffff08;
      // Hover effect
      // When hovering, the image will float up, and glow
      &:hover {
        transform: translate(0, -0.1rem);
        filter: brightness(100%);
        box-shadow: 0 13px 27px -5px #ffffff20, 0 8px 16px -8px #ffffff2d,
          0 -6px 16px -6px #ffffff02;
      }
    }
  }
}
@media (max-width: 768px) {
  .hero {
    height: auto;
    flex-direction: column;
    text-align: center;
    .hero-text {
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.4rem;
      }
      .link-set {
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        a {
          width: 18rem;
          padding: 1.5rem 0rem;
        }
      }
    }
    .hero-images {
      gap: 2vw;
      padding: 5rem 0rem;
      .img {
        width: 35vw;
      }
    }
  }
}
</style>
