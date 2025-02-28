<script setup>
defineProps({ activity: Object });
</script>

<template>
  <a href="" class="activity-card">
    <img :src="activity.image" />
    <div class="activity-info">
      <h3>{{ activity.title }}</h3>
      <small>{{ activity.project }} - {{ activity.company }}</small>
      <p>{{ activity.description }}</p>
    </div>
  </a>
</template>

<style scoped lang="scss">
.activity-card {
  text-decoration: none;
  color: #000000;
  width: 60%;
  min-width: 60rem;
  min-height: 20rem;
  display: flex;
  padding: 2rem;
  border-radius: 2rem;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  box-shadow: 0rem 0rem 2rem 0.5rem #003b2c3a;
  transition: 0.3s;
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0rem 0rem 2rem 1rem #003b2c44;
  }
  img {
    width: 16rem;
    border-radius: 2rem;
  }
  .activity-info {
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
}
@media (max-width: 768px) {
  .activity-card {
    width: 80%;
    // max-height: 40rem;
    flex-direction: column;
    text-align: center;
    min-width: auto;
  }
}
</style>
