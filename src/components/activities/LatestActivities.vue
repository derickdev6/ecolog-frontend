<script setup>
import { ref } from "vue";
import ActivityCard from "@/components/activities/ActivityCard.vue";

const activities = ref([
  {
    id: 1,
    title: "Evento Tech",
    description:
      "Lorem Ipsum is  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .",
    project: "TechTalks",
    company: "Google",
    image: "https://loremflickr.com/200/200?random=1",
  },
  {
    id: 2,
    title: "Vnet",
    description:
      "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=2",
  },
  {
    id: 2,
    title: "Histoy Context",
    description:
      "galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ing versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=3",
  },
  {
    id: 2,
    title: "Ekologik",
    description:
      "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic  versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=4",
  },
  {
    id: 2,
    title: "Ecohack",
    description:
      "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ng versions of Lorem Ipsum.",
    project: "CodeMasters",
    company: "Microsoft",
    image: "https://loremflickr.com/200/200?random=5",
  },
]);
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
