<!-- ProjectDetailView.vue - Displays detailed information about a specific project -->
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import ActivityItem from "@/components/activities/ActivityItem.vue";

// Route and router instances
const route = useRoute();
const router = useRouter();

// State management
const project = ref(null);
const activities = ref([]);
const isLoading = ref(true);
const errorMessage = ref(null);

// API configuration
const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/projects/${route.params.id}`;

/**
 * Fetches project data and its associated activities
 * @returns {Promise<void>}
 */
const fetchProjectData = async () => {
  try {
    isLoading.value = true;
    const { data } = await axios.get(API_URL);

    if (!data?._id) {
      throw new Error("No valid project data found");
    }

    project.value = data;

    // Fetch associated activities
    const activitiesUrl = `${BACKEND_IP}/api/activities/project/${project.value._id}`;
    const { data: activitiesData } = await axios.get(activitiesUrl);
    activities.value = activitiesData || [];
  } catch (error) {
    console.error("Error fetching project:", error);
    errorMessage.value = "Failed to load project data";
    router.push("/404");
  } finally {
    isLoading.value = false;
  }
};

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

// Lifecycle hooks
onMounted(fetchProjectData);
</script>

<template>
  <Navbar />
  <main>
    <!-- Loading state -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Cargando detalles del proyecto...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="errorMessage" class="error-container">
      <p class="error-message">{{ errorMessage }}</p>
    </div>

    <!-- Project content -->
    <div v-else-if="project" class="project-container">
      <div class="project-content">
        <!-- Project Image -->
        <div class="project-image">
          <img
            :src="projectImage"
            :alt="`${project.name} image`"
            loading="lazy"
          />
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

    <!-- Activities section -->
    <div v-if="activities.length > 0" class="project-activities">
      <h2>Actividades</h2>
      <ActivityItem
        v-for="activity in activities"
        :key="activity._id"
        :activity="activity"
      />
    </div>
  </main>

  <Footer />
</template>

<style scoped lang="scss">
main {
  padding: 14rem 0 0 0;
  min-height: calc(100vh - 23rem);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;

  .loading-container,
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  .error-message {
    color: #e74c3c;
    font-size: 1.2rem;
    text-align: center;
  }

  .project-container {
    flex: 5;
    max-width: 100rem;
    margin: 40px auto;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out;
  }

  .project-activities {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    flex: 5;
    margin: 40px auto;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    .activity-item {
      width: 90%;
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

/* Animations */
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  main {
    padding: 8rem 0 0 0;
    flex-direction: column;
    min-height: calc(100vh - 20rem);
  }

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
</style>
