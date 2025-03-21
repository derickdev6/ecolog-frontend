<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ActivityCard from "@/components/activities/ActivityCard.vue";
import router from "@/router";

const activities = ref([]);
const loading = ref(true);

const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/api/activities/latest`;

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
  <section class="activities">
    <h2>Últimas actividades</h2>
    <div class="activity-list">
      <ActivityCard
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.activities {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  // background-color: #f1f1f1;
  .activity-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 6rem;
  }
}
</style>
