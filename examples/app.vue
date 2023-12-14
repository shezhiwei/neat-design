<template>
  <Popover />

  <n-popover placement="top" content="我是个弹出框内容">
    <template #reference>
      <n-button type="primary">hover激活</n-button>
    </template>
  </n-popover>

  <input type="text" v-model.lazy="text" />
  <p>{{ text }}</p>
</template>

<script lang="ts" setup>
import Popover from './src/Popover.vue';

import { ref } from 'vue'
const text = ref('')
</script>

<style scoped></style>
