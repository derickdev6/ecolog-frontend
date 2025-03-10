<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

const route = useRoute();
const company = ref(null);

onMounted(async () => {
  try {
    console.log("Fetching data...");
    const { data } = await axios.get(
      `http://localhost:5000/api/companies/${route.params.name}`
    );
    if (data) {
      console.log("Data fetched");
      company.value = data;
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
  <div v-if="company" class="container mx-auto px-4">
    <div class="flex flex-col items-center">
      <img
        :src="company.logo"
        alt="Company Logo"
        class="w-32 h-32 rounded-full mt-8"
      />
      <h1 class="text-3xl font-bold mt-4">{{ company.name }}</h1>
      <p class="text-lg text-gray-600">{{ company.address }}</p>
      <p class="text-lg text-gray-600">{{ company.nit }}</p>
      <p class="text-lg text-gray-600">{{ company.phone }}</p>
      <p class="text-lg text-gray-600">{{ company.mail }}</p>
      <p class="text-lg text-gray-600">{{ company.ceo }}</p>
      <div class="mt-4">
        <h2 class="text-2xl font-bold">Descripción</h2>
        <p
          v-for="(paragraph, index) in company.description"
          :key="index"
          class="text-lg text-gray-600 mt-2"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>
