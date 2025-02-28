<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProjectElement from "@/components/ProjectElement.vue";

// Simulate a request to the API
const proyectos = ref([
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
      proyectos.value = data;
    } else {
      console.log("No data fetched");
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <NavBar />
  <div class="proyectos">
    <h1>Proyectos</h1>
    <ul>
      <ProjectElement
        v-for="project in proyectos"
        :key="project.id"
        :project="project"
      />
    </ul>
  </div>
  <FooterComponent />
</template>

<style scoped lang="scss">
.proyectos {
  h1 {
    text-align: center;
    font-size: 3rem;
    margin: 4rem 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 4rem 0;
    list-style: none;
  }
}
</style>
