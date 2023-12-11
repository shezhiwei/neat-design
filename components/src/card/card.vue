<template>
  <div :class="['n-card', `n-card-shadow-${shadow}`]">
    <div v-if="$slots.title || $slots.subtitle" class="n-card-header">
      <span v-if="$slots.title" class="n-card-title">
        <slot name="title" />
      </span>
      <span v-if="$slots.subtitle" class="n-card-subtitle">
        <slot name="subtitle" />
      </span>
    </div>
    <div class="n-card-body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'n-card' };
</script>

<script lang="ts" setup>
import './style/index.less';
import { cardProps } from './types';
defineProps(cardProps);
</script>
