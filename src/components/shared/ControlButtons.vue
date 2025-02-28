<script setup></script>

<template>
  <div class="control-buttons">
    <button>First</button>
    <button><</button>
    <button>></button>
    <button>Last</button>
  </div>
</template>
<style lang="scss" scoped>
.control-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  button {
    padding: 1rem 2rem;
    border: none;
    background-color: #f3f3f3;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #333;
      color: #f3f3f3;
    }
  }
}
</style>
