<template>
  <n-layout>
    <n-layout-header>
      <div class="fixed top-0 bg-white h-10 flex items-center justify-between box-border border-b-solid border-b-light border-r-dark-200 border-r-solid pl-5 pr-5 w-screen z-1">
        <div>Button</div>
        <div>avator</div>
      </div>
    </n-layout-header>
    <n-layout-content>
      <div>11</div>
    </n-layout-content>
    <!-- <n-layout-footer>成府路</n-layout-footer> -->
  </n-layout>
</template>

<style scoped>
.n-layout-header {
  background: rgba(128, 128, 128, 0.1);
  padding-top: 2.5rem;
}

.n-layout-content {
  margin: 0 auto;
  max-width: 70rem;
  height: 10000px;
  background: rgba(128, 128, 128, 0.4);
}

.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}
</style>
