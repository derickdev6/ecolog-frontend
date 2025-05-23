<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  company: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const goToDetail = () => {
  router.push(`/empresa/${encodeURIComponent(props.company.name)}`);
};
</script>

<template>
  <div class="company-card" @click="goToDetail">
    <img
      :src="company.logo"
      :alt="`${company.name} logo`"
      class="company-logo"
    />
    <div class="company-info">
      <h3>{{ company.name }}</h3>
      <small>{{ company.ceo || "CEO no disponible" }}</small>
      <p>{{ company.short || "Descripción no disponible" }}</p>
    </div>
    <div class="company-links" v-if="company.social?.length">
      <a
        v-for="social in company.social"
        :key="social.name"
        :href="
          social.link.startsWith('http')
            ? social.link
            : `https://${social.link}`
        "
        target="_blank"
        rel="noopener noreferrer"
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
</template>

<style scoped lang="scss">
.company-card {
  cursor: pointer;
  width: 25%;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 4rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
}

.company-logo {
  width: 14rem;
  height: 14rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.company-info {
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  small {
    font-size: 1rem;
    color: #777;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 0.5rem;
  }
}

.company-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      padding: 0.5rem;
      width: 3rem;
      // height: 5rem;
    }
  }
}

@media (max-width: 768px) {
  .company-card {
    width: 80%;
  }
}
</style>
