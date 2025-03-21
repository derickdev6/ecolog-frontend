<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  activity: Object,
});

// Imagen por defecto si no tiene imagen
const activityImage = computed(() =>
  props.activity?.images?.length
    ? props.activity.images[0]
    : "https://via.placeholder.com/150"
);

// Redirección al detalle de la actividad
const goToDetail = () => {
  if (props.activity?._id) {
    router.push(`/actividad/${encodeURIComponent(props.activity._id)}`);
  }
};

// Computed property for formatted date
const formattedDate = computed(() =>
  props.activity?.date
    ? new Date(props.activity.date).toLocaleDateString()
    : "N/A"
);

// Computed property for activity description
const activityDescription = computed(() =>
  Array.isArray(props.activity?.description)
    ? props.activity.description.join(" ")
    : props.activity?.description || "No description available."
);
</script>

<template>
  <div class="activity-item" @click="goToDetail">
    <img :src="activityImage" alt="Activity Image" />

    <div class="activity-info">
      <h3>{{ activity.name }}</h3>
      <small>{{ activity.project.name }} - {{ activity.company.name }}</small>
      <br />
      <small>🗓️{{ formattedDate }}</small>
    </div>

    <p>{{ activityDescription }}</p>
  </div>
</template>

<style scoped lang="scss">
.activity-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 70%;
  height: 20rem;
  padding: 1rem;
  color: #000;
  overflow: hidden;
  transition: background-color 0.3s ease;
  border-radius: 1rem;
  gap: 2rem;

  img {
    width: 16rem;
    height: 16rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .activity-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    flex: 1;

    h3 {
      font-size: 2rem;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
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
    font-size: 1.4rem;
    line-height: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    // transition: -webkit-line-clamp 0.3s ease, line-clamp 0.3s ease,
    //   height 0.3s ease;
  }

  &:hover {
    background-color: #003b2c0f;
  }
}

@media (max-width: 768px) {
  .activity-item {
    width: 90%;
    height: 14rem;
    img {
      width: 8rem;
      height: 10rem;
    }

    .activity-info {
      h3 {
        font-size: 1.5rem;
      }
      small {
        font-size: 0.8rem;
      }
    }

    p {
      line-height: 1.4rem;
      flex: 1;
      font-size: 1rem;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
}
</style>
