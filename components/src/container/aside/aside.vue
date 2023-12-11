<script lang="ts">
export default { name: "n-aside" };
</script>

<script lang="ts" setup>
import "../style/index.less";
defineProps({
  width: {
    type: String,
    default: () => "200px",
  },
} as const);
</script>

<template>
  <aside class="n-aside" :style="{ width }">
    <slot />
  </aside>
</template>
