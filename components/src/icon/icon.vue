<template>
  <div class="n-icon">
    <svg class="icon" :class="iconClass" :style="iconStyle" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="n-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>

<script lang="ts">
export default { name: 'n-icon' };
</script>

<script setup lang="ts">
import './style/index.less';
import { computed, onMounted } from 'vue';
import { iconProps } from './types';
import { sizeChange } from '../utils';

onMounted(() => {
  import('./font/iconfont.js' as any);
});

const props = defineProps(iconProps);
const iconName = computed(() => {
  return `#young-${props.name}`;
});
const styleDot = computed(() => {
  return {
    [`n-dot`]: props.dot && !props.badge,
  };
});
const badge = computed(() => {
  return props.badge;
});
const iconStyle = computed(() => {
  return {
    color: props.color,
    width: sizeChange(props.size),
    height: sizeChange(props.size),
    ...props.iconStyle,
  };
});
</script>
