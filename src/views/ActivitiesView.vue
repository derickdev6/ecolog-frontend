<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import ActivityItem from "@/components/activities/ActivityItem.vue";
import Footer from "@/components/layout/Footer.vue";
import ControlButtons from "@/components/shared/ControlButtons.vue";

const activities = ref([]);
const loading = ref(true);
const router = useRouter();

onMounted(async () => {
  try {
    console.log("Fetching activities...");
    const { data } = await axios.get(
      "http://localhost:5000/api/activities/list"
    );
    if (data.length > 0) {
      console.log("Activities fetched");
      activities.value = data;
    } else {
      console.log("No activities found");
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  width: 70%;
  gap: 2rem;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .activities {
    width: 90%;
  }
}
</style>
