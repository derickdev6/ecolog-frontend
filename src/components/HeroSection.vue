<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>EcoLog</h1>
      <p>Actividades por el bien ecológico de nuestra isla</p>
      <div class="link-set">
        <a href="">Empresas</a>
        <a href="">Proyectos</a>
        <a href="">Actividades</a>
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
      h1 { font-size: 6rem; margin-bottom: 1rem; }
      p { font-size: 1.8rem; }
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
          &:hover { background-color: #ffffff44; }
        }
      }
    }
    .hero-images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .img { width: 20vw; border-radius: 3rem; }
    }
  }
  @media (max-width: 768px) {
    .hero {
      height: auto;
      flex-direction: column;
      text-align: center;
      .hero-text {
        h1 { font-size: 4rem; }
        p { font-size: 1.4rem; }
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
        .img { width: 35vw; }
      }
    }
  }
</style>