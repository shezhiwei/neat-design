<template>
  <div class="n-avatar">
    <div v-if="isError" :class="errorClass" :style="isSize">
      <slot name="error">
        <Icon class="icon" :style="isSize" :size="size * 10" :name="errorIcon" />
      </slot>
    </div>
    <img v-else :draggable="draggable" :class="successClass" :style="isSize" :src="src" :alt="alt" @error="onError"
      @load="emit('load')" />
  </div>
</template>

<script lang="ts">
export default { name: 'n-avatar' };
</script>

<script lang="ts" setup>
import Icon from '../Icon/icon.vue';
import { ref, computed } from 'vue';
import { avatarProps } from './types';
import type { CSSProperties } from 'vue';
import './style/index.less';

const props = defineProps(avatarProps);
const emit = defineEmits(['error', 'load']);

const isError = ref<boolean>(false);

const onError = (): void => {
  emit('error');
  isError.value = true;
};

const isSize = computed((): CSSProperties => {
  return {
    width: `${props.size * 10}px`,
    height: `${props.size * 10}px`,
  };
});

const errorClass = computed((): (string | object)[] => {
  return ['n-avatar-error', { 'n-avatar-round': props.round }];
});

const successClass = computed((): object[] => {
  return [
    {
      [`n-avatar-${props.fit}`]: props.fit,
      'n-avatar-round': props.round,
      'n-avatar-border': props.border,
      'n-avatar-select': props.select,
    },
  ];
});
</script>
