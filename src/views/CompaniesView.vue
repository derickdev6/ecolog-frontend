<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import CompanyCard from "@/components/companies/CompanyCard.vue";
import router from "@/router";

const companies = ref([]);
const loading = ref(true);

const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/companies`;

onMounted(async () => {
  try {
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);
    if (data.length > 0) {
      console.log("Data fetched");
      companies.value = data;
    } else {
      console.log("No data fetched");
      router.push("/404");
    }
  } catch (error) {
    console.error(error);
    router.push("/404");
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Navbar />
  <main>
    <h1>Empresas</h1>

    <div v-if="loading" class="loading">
      <p>Cargando empresas...</p>
    </div>

    <div class="companies">
      <CompanyCard
        v-for="empresa in companies"
        :key="empresa.id"
        :company="empresa"
      />
    </div>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
main {
  padding: 14rem 0 0 0;
}
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

.companies {
  margin: 4rem 0;
  display: flex;
  // flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  main {
    padding: 8rem 0 0 0;
  }
  h1 {
    font-size: 2rem;
  }
}
</style>
