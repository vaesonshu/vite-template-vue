<template>
  <div class="home">
    <div class="image">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://pinia.vuejs.org" target="_blank">
        <img src="../assets/pinia.svg" class="logo pinia" alt="Pinia logo" />
      </a>
      <a href="https://naiveui.com/" target="_blank">
        <img src="../assets/naiveui.svg" class="logo naiveui" alt="NaiveUI logo" />
      </a>
    </div>
    <HelloWorld msg="a composition template of vue by vite" />
    <!-- <h2>Home</h2>
    <div class="home-nav">
      <router-link to="/home/recommend">推荐</router-link>
      <br />
      <router-link to="/home/ranking">排行</router-link>
    </div>
    <button @click="logoutClick">退出登录</button> -->

    <!-- <div>{{ count }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <div>{{ counterStore.getFriendById(111) }}</div>
    <div>{{ counterStore.showMessage }}</div>
    <button @click="incrementCount">count+1</button> -->
    <!-- 占位组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { storeToRefs } from 'pinia'
import useCounter from '@/stores/counter'
const counterStore = useCounter()
const { count } = storeToRefs(counterStore)

function logoutClick() {}

function incrementCount() {
  counterStore.count++
  // counterStore.increment()
}
</script>

<style scoped>
.image {
  margin: 0 auto;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #f7d336aa);
}
.logo.naiveui:hover {
  filter: drop-shadow(0 0 2em #5fbc21aa);
}
</style>
