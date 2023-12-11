<script lang="ts">
export default { name: "n-footer" };
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
  <footer class="n-footer" :style="{ height }">
    <slot />
  </footer>
</template>
