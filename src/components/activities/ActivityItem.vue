<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  activity: Object,
});

// Imagen por defecto si no tiene imagen
const activityImage = computed(
  () => props.activity?.image || "https://via.placeholder.com/150"
);

// Redirección al detalle de la actividad
const goToDetail = () => {
  if (props.activity?.id) {
    router.push(`/actividad/${encodeURIComponent(props.activity.id)}`);
  }
};
</script>

<template>
  <div class="activity-item" @click="goToDetail">
    <img :src="activityImage" alt="Activity Image" />

    <div class="activity-info">
      <h3>{{ activity.title }}</h3>
      <small>{{ activity.project }} - {{ activity.company }}</small>
      <br />
      <small>{{ activity.date }}</small>
    </div>

    <p>{{ activity.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.activity-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 70%;
  min-height: 12rem;
  padding: 1rem;
  color: #000;
  border-radius: 1rem;
  gap: 2rem;
  transition: background-color 0.3s ease;
  overflow: hidden;

  img {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .activity-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex: 1;

    h3 {
      font-size: 1.8rem;
      margin: 0;
    }

    small {
      font-size: 1rem;
      color: #666;
    }
  }

  p {
    border-left: 1px solid #666;
    padding-left: 1rem;
    flex: 3;
    font-size: 1.2rem;
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &:hover {
    background-color: #003b2c0f;
  }
}

@media (max-width: 768px) {
  .activity-item {
    width: 90%;
    min-height: 10rem;

    img {
      width: 8rem;
      height: 8rem;
    }

    .activity-info {
      h3 {
        font-size: 1.5rem;
      }
      small {
        font-size: 0.9rem;
      }
    }

    p {
      font-size: 1rem;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
}
</style>
