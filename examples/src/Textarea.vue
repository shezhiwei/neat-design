<template>
  <n-textarea v-model="value1" />
  <!-- <n-textarea v-model="value1" resize="vertical" />
  <n-textarea v-model="value1" resize="horizontal" />
  <n-textarea v-model="value1" resize="none" /> -->
</template>

<script setup>
import { ref } from "vue";
const value1 = ref("");
</script>