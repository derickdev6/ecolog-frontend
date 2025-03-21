<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import ActivityItem from "@/components/activities/ActivityItem.vue";
import Footer from "@/components/layout/Footer.vue";
import ControlButtons from "@/components/shared/ControlButtons.vue";
import router from "@/router";

const activities = ref([]);
const loading = ref(true);

const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/activities/list`;

onMounted(async () => {
  try {
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);
    if (data.length > 0) {
      activities.value = data;
    } else {
      router.push("/404");
    }
  } catch (error) {
    console.error("Error fetching activities:", error);
    router.push("/404");
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Navbar />
  <h1>Actividades</h1>

  <div v-if="loading" class="loading">
    <p>Cargando actividades...</p>
  </div>

  <div v-else class="activities">
    <ActivityItem
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
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

.activities {
  margin: 4rem 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
