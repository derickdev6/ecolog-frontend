<script setup>
import { ref } from 'vue';
import HeroSection from "@/components/HeroSection.vue";
import ActivityCard from "@/components/ActivityCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const activities = ref([
  { id: 1, title: "Evento Tech", description: "Lorem Ipsum is  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .", project: "TechTalks", company: "Google", image: "@/assets/images/event1.jpg" },
  { id: 2, title: "Hackathon 2025", description: "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", project: "CodeMasters", company: "Microsoft", image: "@/assets/images/event2.jpg" },
  { id: 2, title: "Hackathon 2025", description: "galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ing versions of Lorem Ipsum.", project: "CodeMasters", company: "Microsoft", image: "@/assets/images/event2.jpg" },
  { id: 2, title: "Hackathon 2025", description: "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic  versions of Lorem Ipsum.", project: "CodeMasters", company: "Microsoft", image: "@/assets/images/event2.jpg" },
  { id: 2, title: "Hackathon 2025", description: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ng versions of Lorem Ipsum.", project: "CodeMasters", company: "Microsoft", image: "@/assets/images/event2.jpg" }
  ]);
</script>

<template>
    <HeroSection />

    <section class="activities">
      <h2>Últimas actividades</h2>
      <div class="activity-list">
        <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" />
      </div>
    </section>

    <FooterComponent />
</template>

<style lang="scss">
@import "@/assets/main.scss";
</style>
