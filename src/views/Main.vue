<template>
  <n-layout>
    <n-layout-header>
      <div class="fixed top-0 bg-white h-10 flex items-center justify-between box-border border-b-1 border-b-solid border-b-light pl-5 pr-5 w-screen z-1">
        <div>Button</div>
        <div>avator</div>
      </div>
    </n-layout-header>
    <n-layout-content>
      <!-- 轮播图 -->
      <template class="flex justify-center">
        <div class="w-180 h-100 mb-10">
          <n-carousel autoplay show-dots dot-type="line" dot-placement="bottom">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
          </n-carousel>
        </div>
      </template>
      <!-- 内容部分 -->
      <Contain />
    </n-layout-content>
    <n-layout-footer>成府路</n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Contain from '@/components/Contain.vue'
</script>

<style scoped>
.n-layout {
  background-color: rgb(239, 239, 239);
}
.n-layout-header {
  background: rgba(128, 128, 128, 0.1);
  padding-top: 2.5rem;
}

.n-layout-content {
  height: 1000px;
  margin: 0 auto;
  max-width: 90rem;
  background: rgba(255, 255, 255);
}

.n-layout-footer {
  background: rgba(211, 209, 209, 0.2);
  padding: 24px;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
