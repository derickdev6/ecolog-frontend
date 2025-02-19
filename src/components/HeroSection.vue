<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>EcoLog</h1>
      <p>Actividades por el bien ecologico de nuestra isla</p>
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
    justify-content: space-around;
    height: 90vh;
    padding: 0 0rem;

    background-color: #003b2c;
  
    .hero-text {
      min-width: 40rem;
    //   width: 30%;
      color: #f1f1f1;
    //   background-color: #ffffff22;

      h1 {
        font-size: 10rem;
        margin-bottom: 1rem;
      }
      p{
        font-size: 1.8rem;
      }
    }
  
    .hero-images {
      min-width: 60rem;
    //   width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    //   background-color: #ffffff22;
  
      .img {
        width: 32rem;
        border-radius: 2rem;
      }
  
      .img1 { top: 0; left: 0; transform: rotate(-10deg); }
      .img2 { top: 50px; left: 50px; transform: rotate(5deg); }
      .img3 { top: 100px; left: 100px; transform: rotate(-5deg); }
    }
  }
  
</style>