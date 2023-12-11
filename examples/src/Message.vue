<template>
  <div class="pl-2">
    <h1 class="text-2xl mb-4">antdesign</h1>
    <div class="mt-4">
      <h2 class="text-lg">Message test</h2>
      <n-button @click="messageWarn">Warning Message</n-button>
      <n-button @click="messagsSuccess">Warning Message</n-button>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import { Message } from 'neat-design';
const { proxy } = getCurrentInstance();
// console.log(proxy);

const messageWarn = () => {
  proxy.$message({
    type: 'warning',
    message: '一条警告信息',
  });
};

const messagsSuccess = () => {
  Message({ type: 'success', message: '一跳成功信息' });
};
</script>
