<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import ProjectItem from "@/components/projects/ProjectItem.vue";
import ControlButtons from "@/components/shared/ControlButtons.vue";

const loading = ref(true);

const projects = ref([]);
onMounted(async () => {
  try {
    console.log("Fetching data...");
    const { data } = await axios.get("http://localhost:5000/api/projects/list");
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
  <Footer />
</template>

<style scoped lang="scss">
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
  ul {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  }
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .projects {
    ul {
      width: 90%;
    }
  }
}
</style>
