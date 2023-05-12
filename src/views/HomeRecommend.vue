<template>
  <div class="home-recommend">
    <!-- <h2>HomeRecommend</h2> -->
    <!-- <span>推荐歌单</span> -->
    <!-- <ul>
      <template v-for="item in banners">
        <img :src="item.image" alt="" />
      </template>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useHome from '@/stores/home'
const homeStore = useHome()
const { banners } = storeToRefs(homeStore)
homeStore.fetchHomeMultidata()
</script>

<style scoped></style>
