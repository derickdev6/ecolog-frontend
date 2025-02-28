<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import ProjectItem from "@/components/projects/ProjectItem.vue";
import ControlButtons from "@/components/shared/ControlButtons.vue";

// Simulate a request to the API
const projects = ref([
  {
    id: 1,
    title: "EcoProjectt",
    description:
      "the release of Letraset sheets containing Lorem Ipsum passages, and .",
    company: "Google",
    image: "https://loremflickr.com/200/200?random=1",
    date: "27/02/2025",
  },
  {
    id: 2,
    title: "GreenHacks",
    description:
      "publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=2",
    date: "26/02/2025",
  },
  {
    id: 3,
    title: "CleanTech",
    description:
      "Ipsum passages, and more recently ing versions of Lorem Ipsum.",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=3",
    date: "25/02/2025",
  },
  {
    id: 4,
    title: "EkoTech",
    description: ", but also the leap into electronic versions of Lorem Ipsum.",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=4",
    date: "24/02/2025",
  },
]);

onMounted(async () => {
  try {
    console.log("Fetching data...");
    const { data } = await axios.get("http://localhost:5001/api/proyectos");
    if (data.length > 0) {
      console.log("Data fetched");
      projects.value = data;
    } else {
      console.log("No data fetched");
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <Navbar />
  <h1>Proyectos</h1>
  <div class="projects">
    <ul>
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </ul>
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
.projects {
  margin: 4rem 0;
  gap: 4rem;
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
