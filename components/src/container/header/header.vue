<script lang="ts">
export default { name: "n-header" };
</script>

<script lang="ts" setup>
import "../style/index.less";
defineProps({
  height: {
    type: String,
    default: () => "60px",
  },
} as const);
</script>

<template>
  <header class="n-header" :style="{ height }">
    <slot />
  </header>
</template>
