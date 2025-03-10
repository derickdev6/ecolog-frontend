<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

const route = useRoute();
const router = useRouter();
const project = ref(null);
const errorMessage = ref(null);
const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/api/projects/${route.params.id}`;

// Fetch project details
const fetchProject = async () => {
  try {
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);

    if (data && data._id) {
      console.log("Data fetched:", data);
      project.value = data;
    } else {
      throw new Error("No valid project data found");
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    router.push("/404");
  }
};

onMounted(fetchProject);

// Computed properties
const projectImage = computed(
  () => project.value?.images?.[0] || "https://via.placeholder.com/600"
);
const formattedDate = computed(() =>
  project.value?.date
    ? new Date(project.value.date).toLocaleDateString()
    : "N/A"
);
const projectDescription = computed(() =>
  Array.isArray(project.value?.description)
    ? project.value.description
    : [project.value?.description || "No description available."]
);
</script>

<template>
  <Navbar />
  <main>
    <div v-if="project" class="project-container">
      <div class="project-content">
        <!-- Project Image -->
        <div class="project-image">
          <img :src="projectImage" alt="Project Image" />
        </div>

        <!-- Project Info -->
        <div class="project-info">
          <h1>{{ project.name }}</h1>
          <p class="company">{{ project.company?.name || "N/A" }}</p>
          <p class="date">📅 {{ formattedDate }}</p>

          <div class="description">
            <p
              v-for="(paragraph, index) in projectDescription"
              :key="index"
              class="description-text"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 23rem);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;

  .project-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out;
  }

  .project-content {
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    flex: 1;
    min-width: 25rem;
    max-width: 40%;
    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }

  .project-info {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
    }

    .company {
      font-size: 1.6rem;
      color: #666;
    }

    .date {
      font-size: 1rem;
      color: #888;
      margin-bottom: 15px;
    }

    .description {
      h2 {
        font-size: 1.8rem;
        color: #444;
        margin-bottom: 10px;
      }

      .description-text {
        font-size: 1.4rem;
        color: #222;
        line-height: 1.6;
      }
    }
  }
}
/* Responsive */
@media (max-width: 768px) {
  .project-content {
    flex-direction: column;
    align-items: center;
  }

  .project-image {
    max-width: 100%;
  }

  .project-info {
    text-align: center;
    padding: 15px;
  }
}

/* Fade-in effect */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
