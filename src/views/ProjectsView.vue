<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import ProjectItem from "@/components/projects/ProjectItem.vue";
import ControlButtons from "@/components/shared/ControlButtons.vue";
import router from "@/router";

const projects = ref([]);
const loading = ref(true);

const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/projects/list`;

onMounted(async () => {
  try {
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);
    if (data.length > 0) {
      console.log("Data fetched");
      projects.value = data;
    } else {
      console.log("No data fetched");
      router.push("/404");
    }
  } catch (error) {
    console.error(error);
    router.push("/404");
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Navbar />
  <main>
    <h1>Proyectos</h1>

    <div v-if="loading" class="loading">
      <p>Cargando proyectos...</p>
    </div>

    <div class="projects">
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <ControlButtons />
  </main>
  <Footer />
</template>

<style scoped lang="scss">
main {
  padding: 14rem 0 0 0;
}
h1 {
  text-align: center;
  font-size: 3rem;
  margin: 4rem 0;
}
.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #666;
}

.projects {
  margin: 4rem 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 768px) {
  main {
    padding: 8rem 0 0 0;
  }
  h1 {
    font-size: 2rem;
  }
}
</style>
