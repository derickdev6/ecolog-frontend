<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  project: Object,
});

// Computed property for image source
const projectImage = computed(() =>
  props.project?.images?.length
    ? props.project.images[0]
    : "https://via.placeholder.com/150"
);

// Function to navigate to project details
const goToDetail = () => {
  if (props.project?._id) {
    router.push(`/proyecto/${encodeURIComponent(props.project._id)}`);
  }
};

// Computed property for formatted date
const formattedDate = computed(() =>
  props.project?.date
    ? new Date(props.project.date).toLocaleDateString()
    : "N/A"
);

// Computed property for project description
const projectDescription = computed(() =>
  Array.isArray(props.project?.description)
    ? props.project.description.join(" ")
    : props.project?.description || "No description available."
);
</script>

<template>
  <div v-if="project" class="project-item" @click="goToDetail">
    <img :src="projectImage" alt="Project Image" />

    <div class="project-info">
      <h3>{{ project.name }}</h3>
      <small>{{ project.company?.name || "N/A" }}</small>
      <br />
      <small>{{ formattedDate }}</small>
    </div>

    <p>{{ projectDescription }}</p>
  </div>
</template>

<style scoped lang="scss">
.project-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 70%;
  min-height: 20rem;
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

  .project-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    flex: 1;

    h3 {
      font-size: 2rem;
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
    font-size: 1.4rem;
    line-height: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    transition: -webkit-line-clamp 0.3s ease, line-clamp 0.3s ease,
      height 0.3s ease;
  }

  &:hover {
    background-color: #003b2c0f;
  }
}

@media (max-width: 768px) {
  .project-item {
    width: 90%;
    min-height: 14rem;
    img {
      width: 8rem;
      height: 8rem;
    }

    .project-info {
      h3 {
        font-size: 1.5rem;
      }
      small {
        font-size: 0.8rem;
      }
    }

    p {
      line-height: 1.4rem;
      flex: 2;
      font-size: 1rem;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
}
</style>
