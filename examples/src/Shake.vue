<template>
  <n-shake :duration="500" v-model="trigger"> 这是一段要抖动的文字 </n-shake>
  <n-button @click="handletrigger"> 点击抖动文字 </n-button>
</template>

<script setup>
import { ref } from 'vue';

const trigger = ref(false);
const handletrigger = () => {
  trigger.value = true;
};
</script>
