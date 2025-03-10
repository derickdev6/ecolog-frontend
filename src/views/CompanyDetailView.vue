<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import router from "@/router";

const route = useRoute();
const company = ref(null);
const loading = ref(true);

const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/api/companies/${route.params.name}`;

onMounted(async () => {
  try {
    console.log("Fetching data from:", API_URL);
    const { data } = await axios.get(API_URL);
    company.value = data || null;
    console.log(data ? "Data fetched" : "No data fetched");
    if (!data) {
      router.push("/404");
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Navbar />
  <main>
    <div v-if="company" class="company-container">
      <div class="company-info">
        <img :src="company.logo" alt="Company Logo" class="company-logo" />
        <h1 class="company-name">{{ company.name }}</h1>
        <p class="company-details">{{ company.address }}</p>
        <p class="company-details">NIT {{ company.nit }}</p>
        <p class="company-details">{{ company.phone }}</p>
        <p class="company-details">{{ company.mail }}</p>
        <p class="company-details">{{ company.ceo }}</p>
        <div class="company-description">
          <h2>Nosotros</h2>
          <p
            v-for="(paragraph, index) in company.description"
            :key="index"
            class="company-text"
          >
            {{ paragraph }}
          </p>
        </div>
        <div class="company-links">
          <a
            v-for="contact in company.contact || []"
            :key="contact.name"
            :href="
              contact.link.startsWith('http')
                ? contact.link
                : `https://${contact.link}`
            "
            target="_blank"
          >
            <img
              :src="`/src/assets/icons/${contact.name}.png`"
              :alt="contact.name"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 23rem);
  display: flex;
  justify-content: center;
  align-items: center;

  .company-container {
    width: 40%;
    height: 60%;
    padding: 2rem;
    margin: 4rem 0;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeIn 0.5s ease-in-out;
  }

  .company-logo {
    width: 20rem;
    height: 20rem;
    border-radius: 4rem;
  }

  .company-name {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .company-details {
    font-size: 1.2rem;
    color: #666;
    margin-top: 0.5rem;
  }

  .company-description {
    margin-top: 2rem;
  }

  .company-text {
    font-size: 1rem;
    color: #444;
    margin-top: 0.5rem;
  }
  .company-links {
    display: flex;
    justify-content: center;
    // gap: 0.5rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
      }
      img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  main {
    .company-container {
      width: 80%;
    }
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
</style>
