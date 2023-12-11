<template>
  <n-input placeholder="请输入内容">
    <template #prepend>http://</template>
  </n-input>
  <br />
  <br />
  <n-input placeholder="请输入内容">
    <template #append>.com</template>
  </n-input>
</template>

<script setup>
import { ref } from 'vue';

const tel = ref('');
</script>
