<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
<template>
  <Navbar />
  <div class="container">
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 11rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
