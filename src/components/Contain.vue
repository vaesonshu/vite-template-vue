<template>
  <div class="pl-30">
    <div class="float-left" v-for="(item, index) in data" :key="index">
      <n-card>{{ item.title }}</n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const data = ref([
  {
    title: '这是一篇文章1'
  },
  {
    title: '这是一篇文章2'
  },
  {
    title: '这是一篇文章3'
  },
  {
    title: '这是一篇文章4'
  },
  {
    title: '这是一篇文章5'
  },
  {
    title: '这是一篇文章6'
  },
  {
    title: '这是一篇文章7'
  }
])
</script>

<style scoped>
.n-card {
  width: 280px;
  height: 200px;
  margin: 10px;
}
</style>
