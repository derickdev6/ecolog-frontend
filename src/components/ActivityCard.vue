<script setup>
defineProps({ activity: Object });
</script>

<template>
  <div class="activity-card">
    <img :src="activity.image" />
    <div class="activity-info">
      <h3>{{ activity.title }}</h3>
      <small>{{ activity.project }} - {{ activity.company }}</small>
      <p>{{ activity.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .activity-card {
    width: 60%;
    min-width: 60rem;
    min-height: 20rem;
    display: flex;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 2rem;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    img {
      width: 16rem;
      border-radius: 2rem;
    }
    .activity-info {
      flex: 1;
      h3 { font-size: 2.4rem; }
      small { font-size: 1.2rem; color: #666; }
      p { 
        font-size: 1.6rem; overflow: hidden;
        text-overflow: ellipsis;
        line-height: 2.4rem;
      }
    }
  }
  @media (max-width: 768px) {
    .activity-card {
      width: 90%;
      // max-height: 40rem;
      flex-direction: column;
      text-align: center;
      min-width:auto;
    }
  }
</style>