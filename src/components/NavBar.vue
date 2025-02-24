<script setup>

</script>

<template>
  <nav class="navbar">
      <a href="/" class="logo">GEF</a>
      <div class="link-set">
        <router-link to="/empresas">Empresas</router-link>
        <router-link to="/proyectos">Proyectos</router-link>
        <router-link to="/actividades">Actividades</router-link>
      </div>
  </nav>
</template>

// Scoped styles
<style scoped lang="scss">
  .navbar {
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;
    background-color: #003b2c;
    color: #ffffff;
    .logo {
      font-size: 2rem;
      text-decoration: none;
      color: #ffffff;
    }
    .link-set {
      display: flex;
      gap: 1rem;
      a {
        color: #f1f1f1;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        background-color: #ffffff22;
        transition: .2s;
        &:hover { background-color: #ffffff44; }
      }
    }
    @media screen and (max-width: 768px) {
        height: 6rem;
        padding: 2rem 5rem;
        .logo { font-size: 1.6rem; }
        .link-set {
            a { font-size: 1rem; padding: .5rem 1rem; border-radius: .5rem;}
            
            }
        }
  }
</style>