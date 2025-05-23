<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import ProjectItem from "@/components/projects/ProjectItem.vue";
import router from "@/router";

const route = useRoute();
const company = ref(null);
const projects = ref([]); // Inicializado como array vacío
const loading = ref(true);
const errorMessage = ref(null);

const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const API_URL = `${BACKEND_IP}/api/companies/${route.params.name}`;

onMounted(async () => {
  try {
    loading.value = true;
    console.log("Fetching company data from:", API_URL);
    const { data } = await axios.get(API_URL);
    if (!data) {
      router.push("/404");
      return;
    }
    console.log("Data fetched:", data);
    company.value = data;

    const API_URL2 = `${BACKEND_IP}/api/projects/company/${company.value._id}`;
    console.log("Fetching projects data from:", API_URL2);
    const { data: projectsData } = await axios.get(API_URL2);
    projects.value = projectsData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    errorMessage.value = "Failed to load company data";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="page-container">
    <Navbar />
    <main>
      <!-- Loading state -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Cargando detalles de la empresa...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="errorMessage" class="error-container">
        <p class="error-message">{{ errorMessage }}</p>
      </div>

      <!-- Company content -->
      <div v-else-if="company" class="company-container">
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
              v-for="social in company.social || []"
              :key="social.name"
              :href="
                social.link.startsWith('http')
                  ? social.link
                  : `https://${social.link}`
              "
              target="_blank"
            >
              <img
                :src="
                  social.name === 'facebook'
                    ? 'https://cdn.brandfetch.io/facebook.com/w/512/h/512/symbol?c=1idsDWy9UK45loOuUIq'
                    : 'https://cdn.brandfetch.io/instagram.com/w/512/h/512/theme/light/symbol?c=1idsDWy9UK45loOuUIq'
                "
                :alt="social.name"
              />
            </a>
          </div>
        </div>
      </div>

      <div v-if="projects.length > 0" class="company-projects">
        <h2>Proyectos</h2>
        <ul>
          <ProjectItem
            v-for="project in projects"
            :key="project._id"
            :project="project"
          />
        </ul>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 14rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .loading-container,
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  .error-message {
    color: #e74c3c;
    font-size: 1.2rem;
    text-align: center;
  }

  .company-container {
    width: 40%;
    padding: 2rem;
    margin: 4rem 0;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d,
      0 -6px 16px -6px #00000008;
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
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      &:hover {
        transform: scale(1.2);
      }

      img {
        padding: 0.5rem;
        width: 3rem;
      }
    }
  }

  .company-projects {
    margin-top: 2rem;
    // text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      list-style: none;
      padding: 0;

      li {
        margin: 0.5rem 0;

        a {
          font-size: 1.2rem;
          text-decoration: none;
          color: #007bff;
          transition: color 0.3s;

          &:hover {
            color: #0056b3;
          }
        }
      }
    }
  }

  .no-projects {
    font-size: 1.2rem;
    color: #999;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 768px) {
  main {
    padding: 8rem 0 0 0;
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

/* Animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
