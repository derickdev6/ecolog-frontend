<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  company: Object,
});

const router = useRouter();

const goToDetail = () => {
  router.push(`/empresa/${encodeURIComponent(props.company.name)}`);
};
</script>

<template>
  <div class="company-card" @click="goToDetail">
    <img :src="company.logo" :alt="`${company.name} logo`" />
    <div class="company-info">
      <h3>{{ company.name }}</h3>
      <small>{{ company.ceo }}</small>
      <p>{{ company.short }}</p>
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
</template>

<style scoped lang="scss">
.company-card {
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  width: 35%;
  min-width: 35rem;
  min-height: 20rem;
  display: flex;
  padding: 2rem;
  border-radius: 2rem;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  background-color: #003b2c11;
  box-shadow: 0rem 0rem 2rem 0.5rem #003b2c22;
  transition: 0.3s;
  &:hover {
    transform: translateY(-0.2rem);
    background-color: #003b2c0a;
    box-shadow: 0rem 0rem 2rem 1rem #003b2c44;
  }
  img {
    width: 16rem;
    border-radius: 2rem;
  }
  .company-info {
    flex: 1;
    h3 {
      font-size: 2.4rem;
    }
    small {
      font-size: 1.2rem;
      color: #666;
    }
    p {
      font-size: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 2.4rem;
    }
  }
  .company-links {
    display: flex;
    flex-direction: column;
    // gap: .5rem;
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

@media (max-width: 768px) {
  .company-card {
    width: 80%;
    flex-direction: column;
    text-align: center;
    min-width: auto;
    .company-links {
      flex-direction: row;
    }
  }
}
</style>
