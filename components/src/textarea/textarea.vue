<template>
  <div class="n-textarea">
    <textarea :cols="cols" :rows="rows" :class="isClass" :autofocus="autofocus" :value="modelValue"
      :placeholder="placeholder" :disabled="disabled" :name="name" :maxlength="max" :style="{ resize }" @input="input"
      @blur="emit('onblur')" @focus="emit('onfocus')" />
    <div v-if="max" class="n-textarea-max">
      {{ modelValue?.length }}/{{ max }}
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'n-textarea' };
</script>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
import { textareaProps } from './types';

const props = defineProps(textareaProps);
const emit = defineEmits(['update:modelValue', 'onfocus', 'onblur']);

const input = (e: Event): void =>
  emit('update:modelValue', (e.target as HTMLTextAreaElement).value);

const isClass = computed((): (string | object)[] => {
  return ['n-textarea-textarea', { 'n-textarea-disabled': props.disabled }];
});
</script>
