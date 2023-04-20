<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button>找点乐子吧</n-button>
    </template>
  </n-result>
  <div class="not-found">
    <!-- <h2>NotFound: 您当前的路径{{ $route.params.pathMatch }}不正确, 请输入正确的路径!</h2> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  color: red;
}
</style>
