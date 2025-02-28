<script setup>
defineProps({ project: Object });
</script>

<template>
  <a href="" class="project-item">
    <li>
      <img :src="project.image" />
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <small>{{ project.company }}</small>
        <br />
        <small> {{ project.date }}</small>
      </div>
      <p>{{ project.description }}</p>
    </li>
  </a>
</template>

<style scoped lang="scss">
.project-item {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 10rem;
  padding: 1rem 0;
  text-decoration: none;
  color: #000000;
  gap: 2rem;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    box-shadow: 0rem 0rem 1rem 0.5rem #003b2c22;
    background-color: #003b2c0f;
  }
  li {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2rem;
    img {
      width: 10rem;
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
      flex: 4;
      font-size: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
@media (max-width: 768px) {
  .project-item {
    li {
      img {
        width: 8rem;
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
        flex: 2;
        font-size: 1rem;
      }
    }
  }
}
</style>
