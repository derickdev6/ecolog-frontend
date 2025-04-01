<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© {{ currentYear }} Todos los derechos reservados</p>
      <p>Contacto: derickdev6@gmail.com</p>
      <a href="https://github.com/derickdev6" target="_blank">GitHub</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  background: #333;
  color: white;
  margin-top: auto;

  .footer-content {
    height: 8rem;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    color: #0ff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffff;
    }
  }
}
</style>
