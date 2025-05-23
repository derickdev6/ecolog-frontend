<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

const route = useRoute();
const router = useRouter();
const activity = ref(null);
const errorMessage = ref(null);
const isLoading = ref(true);
const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/activities/${route.params.id}`;

// Fetch activity details
const fetchProject = async () => {
  try {
    isLoading.value = true;
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);

    if (data && data._id) {
      console.log("Data fetched:", data);
      activity.value = data;
    } else {
      throw new Error("No valid activity data found");
    }
  } catch (error) {
    console.error("Error fetching activity:", error);
    router.push("/404");
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchProject);

// Computed properties
const activityImage = computed(
  () => activity.value?.images?.[0] || "https://via.placeholder.com/600"
);
const formattedDate = computed(() =>
  activity.value?.date
    ? new Date(activity.value.date).toLocaleDateString()
    : "N/A"
);
const activityDescription = computed(() =>
  Array.isArray(activity.value?.description)
    ? activity.value.description
    : [activity.value?.description || "No description available."]
);
</script>

<template>
  <div class="page-container">
    <Navbar />
    <main>
      <!-- Loading state -->
      <div v-if="isLoading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Cargando detalles de la actividad...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="errorMessage" class="error-container">
        <p class="error-message">{{ errorMessage }}</p>
      </div>

      <!-- Activity content -->
      <div v-else-if="activity" class="activity-container">
        <div class="activity-content">
          <!-- Project Image -->
          <div class="activity-image">
            <img :src="activityImage" alt="Project Image" />
          </div>

          <!-- Project Info -->
          <div class="activity-info">
            <h1>{{ activity.name }}</h1>
            <p class="company">{{ activity.company?.name || "N/A" }}</p>
            <p class="project">{{ activity.project?.name || "N/A" }}</p>
            <p class="date">📅 {{ formattedDate }}</p>

            <div class="description">
              <p
                v-for="(paragraph, index) in activityDescription"
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
  </div>
</template>

<style scoped lang="scss">
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 14rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: fadeIn 0.5s ease-in-out;
  width: 100%;
  box-sizing: border-box;

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

  .activity-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    animation: fadeIn 0.5s ease-in-out;
  }

  .activity-content {
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .activity-image {
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

  .activity-info {
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

    .company .project {
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
    padding: 8rem 0 0 0;
  }
  .activity-content {
    flex-direction: column;
    align-items: center;
  }

  .activity-image {
    max-width: 100%;
  }

  .activity-info {
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

/* Animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
