<script setup>
defineProps({
  activity: Object
});
</script>

<template>
  <div class="activity-card">
    <img :src="activity.image"/>

    <div class="activity-info">
      <span><h3>{{ activity.title }}</h3>
      <small>{{ activity.project }} - {{ activity.company }}</small></span>
      <p>{{ activity.description }}</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
// Cards are 60% of the screen width
// They have a fixed height of 14rem
  .activity-card {
    width: 60%;
    height: 14rem;
    display: flex;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 2rem;
    align-items: center;
    margin: 1rem 0;
    // background-color: #66666622;
  
    // Image is 20rem wide
    img {
      width: 20rem;
      height: 100%;
      border-radius: 1rem;
      background-color: #049560;
    }

    // Activity info is the rest of the card
    .activity-info {
      width: calc(100% - 20rem);
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      // background-color: #ff666622;

      // Title is 3rem font size
      h3 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        // background-color: #66ff6622;
      }
      // Small text is 1rem font size
      small {
        font-size: 1rem;
        color: #666;
        // background-color: #66ff6622;
      }
      // Description is 1.6rem font size
      // If it's too long, truncate it with ellipsis
      p{
        width: 25rem;
        height: 10rem;
        font-size: 1.6rem;
        margin-bottom: 0rem;
        // background-color: #6666ff22;
        padding: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      // p {
      //   width: 25rem;
      //   height: 10rem;
      //   font-size: 1.6rem;
      //   margin-bottom: 0rem;
      //   // background-color: #6666ff22;
      //   padding: 2rem;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      // }
    }
  }
  
</style>