<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import ActivityItem from "@/components/activities/ActivityItem.vue";

const route = useRoute();
const router = useRouter();
const project = ref(null);
const activities = ref([]);
const errorMessage = ref(null);
const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/projects/${route.params.id}`;

onMounted(async () => {
  try {
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);

    if (data && data._id) {
      console.log("Data fetched:", data);
      project.value = data;

      const API_URL2 = `${BACKEND_IP}/api/activities/project/${project.value._id}`;
      console.log("Fetching projects data from:", API_URL2);
      const { data: activitiesData } = await axios.get(API_URL2);
      console.log("Data fetched:", activitiesData);
      activities.value = activitiesData || [];
    } else {
      throw new Error("No valid project data found");
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    router.push("/404");
  }
});

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
    <div v-if="activities.length > 0" class="project-activities">
      <h2>Actividades</h2>
      <ul>
        <ActivityItem
          v-for="activity in activities"
          :key="activity._id"
          :activity="activity"
        />
      </ul>
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
    flex: 6;
    max-width: 100rem;
    margin: 40px auto;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out;
  }
  .activity-item {
    width: 90%;
  }

  .project-activities {
    overflow-y: scroll;
    flex: 4;
    margin: 40px auto;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
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
  main {
    flex-direction: column;
    min-height: calc(100vh - 20rem);
  }
  .project-content {
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  .project-activities {
    flex: 1;
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
