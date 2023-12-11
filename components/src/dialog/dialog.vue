<template>
  <transition name="n-dialog-fade">
    <div v-show="visible" class="n-dialog-warpper">
      <div class="n-dialog-inner" @click.self="handleMaskClose">
        <div class="n-dialog-box transition-inner" :style="`width:${width}`">
          <div class="n-dialog-header">
            <span class="n-dialog-title" v-if="showHeader">
              {{ title }}
            </span>
            <slot v-else name="headerContent" />
            <Icon v-if="closable" @click="onClickCancelButton" class="n-dialog-close" name="close" />
          </div>

          <div class="n-dialog-body">
            <slot />
          </div>

          <div>
            <slot name="footerContent" />
            <div class="n-dialog-footer" v-if="showFooter">
              <Button v-if="showCancelButton" @click="onClickCancelButton">
                {{ cancelText }}
              </Button>
              <Button type="primary" v-if="showConfirmButton" @click="onClickConfirmButton">
                {{ confirmText }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default { name: 'n-dialog' };
</script>

<script setup lang="ts">
import './style/index.less';
import { ref, useSlots } from 'vue';
import Button from '../button/button.vue';
import Icon from '../icon/icon.vue';
import { dialogProps } from './types';

const props = defineProps(dialogProps);
const emit = defineEmits(['cancel', 'confirm']);
const slots = useSlots();

const handleMaskClose = (e: Event) => {
  if (props.maskClosable) {
    emit('cancel', e);
  }
};

const onClickCancelButton = (e: Event) => {
  emit('cancel', e);
};

const onClickConfirmButton = (e: Event) => {
  emit('confirm', e);
};

// 自定义尾部
const showFooter = ref(true);
const footerContent = slots?.footerContent;

if (footerContent) {
  showFooter.value = false;
}

// 自定义头部
const showHeader = ref(true);
const headerContent = slots?.headerContent;
if (headerContent) {
  showHeader.value = false;
}
</script>
