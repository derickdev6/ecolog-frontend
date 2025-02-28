<script setup>
defineProps({ activity: Object });
</script>

<template>
  <a href="" class="activity-element">
    <li>
      <img :src="activity.image" />
      <div class="activity-info">
        <h3>{{ activity.title }}</h3>
        <small>{{ activity.project }} - {{ activity.company }}</small>
        <br />
        <small> {{ activity.date }}</small>
      </div>
      <p>{{ activity.description }}</p>
    </li>
  </a>
</template>

<style scoped lang="scss">
.activity-element {
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
    .activity-info {
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
  .activity-element {
    li {
      img {
        width: 8rem;
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
        flex: 2;
        font-size: 1rem;
      }
    }
  }
}
</style>
