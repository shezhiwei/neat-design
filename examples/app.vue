<template>
  <Popover />

  <n-popover placement="top" content="我是个弹出框内容">
    <template #reference>
      <n-button type="primary">hover激活</n-button>
    </template>
  </n-popover>
</template>

<script lang="ts" setup>
import Popover from './src/Popover.vue';
</script>

<style scoped></style>
