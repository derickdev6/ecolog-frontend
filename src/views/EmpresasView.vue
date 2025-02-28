<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CompanyCard from "@/components/CompanyCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";

const empresas = ref([]);
// Simulando el fetch de datos
empresas.value = [
  {
    id: 1,
    name: "Empresa 1",
    ceo: "CEO 1",
    description: "Descripción de la empresa 1",
    image: "https://loremflickr.com/200/200?random=10",
    contact: [
      { name: "instagram", link: "www.instagram.com" },
      { name: "facebook", link: "www.facebook.com" },
    ],
  },
  {
    id: 2,
    name: "Empresa 2",
    ceo: "CEO 2",
    description: "Descripción de la empresa 2",
    image: "https://loremflickr.com/200/200?random=11",
    contact: [
      { name: "instagram", link: "www.instagram.com" },
      { name: "facebook", link: "www.facebook.com" },
    ],
  },
  {
    id: 3,
    name: "Empresa 3",
    ceo: "CEO 3",
    description: "Descripción de la empresa 3",
    image: "https://loremflickr.com/200/200?random=12",
    contact: [{ name: "facebook", link: "www.facebook.com" }],
  },
  {
    id: 4,
    name: "Empresa 4",
    ceo: "CEO 4",
    description: "Descripción de la empresa 4",
    image: "https://loremflickr.com/200/200?random=13",
    contact: [{ name: "instagram", link: "www.instagram.com" }],
  },
  {
    id: 5,
    name: "Empresa 5",
    ceo: "CEO 5",
    description: "Descripción de la empresa 5",
    image: "https://loremflickr.com/200/200?random=14",
    contact: [
      { name: "instagram", link: "www.instagram.com" },
      { name: "facebook", link: "www.facebook.com" },
    ],
  },
];

onMounted(async () => {
  try {
    console.log("Fetching data...");
    const { data } = await axios.get("http://localhost:5001/api/empresas");
    if (data.length > 0) {
      console.log("Data fetched");
      empresas.value = data;
    } else {
      console.log("No data fetched");
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <NavBar />

  <h1>Empresas</h1>
  <div class="empresas-list">
    <CompanyCard
      v-for="empresa in empresas"
      :key="empresa.id"
      :company="empresa"
    />
  </div>

  <FooterComponent />
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 3rem;
  margin: 4rem 0;
}

.empresas-list {
  margin: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
}
</style>
