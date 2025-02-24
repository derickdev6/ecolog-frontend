<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const empresas = ref([]);

onMounted(async () => {
  const { data } = await axios.get('http://localhost:3000/empresas');
  empresas.value = data;
});
</script>

<template>
  <div class="empresas">
    <h1>Empresas</h1>
    <ul>
      <li v-for="empresa in empresas" :key="empresa.id">
        {{ empresa.nombre }}
      </li>
    </ul>
  </div>
</template>
