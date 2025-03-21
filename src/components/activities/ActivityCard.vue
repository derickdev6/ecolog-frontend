<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  activity: Object,
});

const activityImage = computed(() =>
  props.activity?.images?.length
    ? props.activity.images[0]
    : "https://via.placeholder.com/150"
);

const goToDetail = () => {
  if (props.activity?._id) {
    router.push(`/actividad/${encodeURIComponent(props.activity._id)}`);
  }
};

const formattedDate = computed(() =>
  props.activity?.date
    ? new Date(props.activity.date).toLocaleDateString()
    : "Sin fecha"
);

const activityDescription = computed(() =>
  Array.isArray(props.activity?.description)
    ? props.activity.description.join(" ")
    : props.activity?.description || "Descripción no disponible."
);

const project = computed(() => props.activity.project);
const company = computed(() => props.activity.company);
</script>

<template>
  <div class="activity-card" @click="goToDetail">
    <img
      :src="activityImage"
      alt="Imagen de la actividad"
      class="activity-img"
    />
    <div class="activity-content">
      <h3 class="activity-title">{{ activity.name }}</h3>
      <p class="activity-meta">
        <span>{{ activity.project.name }}</span> ·
        <span>{{ activity.company.name }}</span>
      </p>
      <p class="activity-date">🗓️ {{ formattedDate }}</p>
      <p class="activity-description">{{ activityDescription }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.activity-card {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 70%;
  max-width: 800px;
  padding: 2rem;
  overflow: hidden;
  border-radius: 1.5rem;
  gap: 2rem;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
}

.activity-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  flex-shrink: 0;
}

.activity-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.activity-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.activity-meta {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.activity-date {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.activity-description {
  font-size: 1.4rem;
  color: #444;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .activity-card {
    flex-direction: column;
    text-align: center;
    width: 80%;
    padding: 1.5rem;
  }

  .activity-img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }

  .activity-content {
    margin-left: 0;
    margin-top: 1rem;
  }

  .activity-title {
    font-size: 1.6rem;
  }

  .activity-description {
    -webkit-line-clamp: 4;
  }
}
</style>
