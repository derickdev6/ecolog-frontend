<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import ActivityItem from "@/components/activities/ActivityItem.vue";
import Footer from "@/components/layout/Footer.vue";
import ControlButtons from "@/components/shared/ControlButtons.vue";

// Simulate a request to the API
const activities = ref([
  {
    id: 1,
    title: "Evento Tech",
    description:
      "the release of Letraset sheets containing Lorem Ipsum passages, and .",
    project: "TechTalks",
    company: "Google",
    image: "https://loremflickr.com/200/200?random=1",
    date: "27/02/2025",
  },
  {
    id: 2,
    title: "Vnet",
    description:
      "publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=2",
    date: "26/02/2025",
  },
  {
    id: 3,
    title: "Histoy Context",
    description:
      "Ipsum passages, and more recently ing versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=3",
    date: "25/02/2025",
  },
  {
    id: 4,
    title: "Ekologik",
    description: ", but also the leap into electronic versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=4",
    date: "24/02/2025",
  },
  {
    id: 5,
    title: "Ecohakk",
    description:
      "and more recently with desktop publishing ng versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=5",
    date: "23/02/2025",
  },
  {
    id: 6,
    title: "Evento Tech",
    description:
      "the release of Letraset sheets containing Lorem Ipsum passages, and .",
    project: "TechTalks",
    company: "Google",
    image: "https://loremflickr.com/200/200?random=1",
    date: "22/02/2025",
  },
  {
    id: 7,
    title: "Vnet",
    description:
      "publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=2",
    date: "21/02/2025",
  },
  {
    id: 8,
    title: "Histoy Context",
    description:
      "Ipsum passages, and more recently ing versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=3",
    date: "20/02/2025",
  },
  {
    id: 9,
    title: "Ekologik",
    description: ", but also the leap into electronic versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=4",
    date: "19/02/2025",
  },
  {
    id: 10,
    title: "Ecohakk",
    description:
      "and more recently with desktop publishing ng versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=5",
    date: "18/02/2025",
  },
  {
    id: 11,
    title: "Evento Tech",
    description:
      "the release of Letraset sheets containing Lorem Ipsum passages, and .",
    project: "TechTalks",
    company: "Google",
    image: "https://loremflickr.com/200/200?random=1",
    date: "17/02/2025",
  },
  {
    id: 12,
    title: "Vnet",
    description:
      "publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=2",
    date: "16/02/2025",
  },
  {
    id: 13,
    title: "Histoy Context",
    description:
      "Ipsum passages, and more recently ing versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=3",
    date: "15/02/2025",
  },
  {
    id: 14,
    title: "Ekologik",
    description: ", but also the leap into electronic versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=4",
    date: "14/02/2025",
  },
  {
    id: 15,
    title: "Ecohakk",
    description:
      "and more recently with desktop publishing ng versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=5",
    date: "13/02/2025",
  },
]);

onMounted(async () => {
  try {
    console.log("Fetching data...");
    const { data } = await axios.get("http://localhost:5001/api/actividades");
    if (data.length > 0) {
      console.log("Data fetched");
      activities.value = data;
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
  <h1>Actividades</h1>
  <div class="activities">
    <ul>
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
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
.activities {
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
  .activities {
    ul {
      width: 90%;
    }
  }
}
</style>
