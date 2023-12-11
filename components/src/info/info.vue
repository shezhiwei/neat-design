<template>
  <div class="n-info">
    <div class="n-info-header">
      <div class="n-info-left">
        <div v-if="$slots.photo" class="n-info-photo">
          <slot name="photo" />
        </div>
        <div class="n-info-data">
          <a v-if="linkUrl" :href="linkUrl">
            <span class="n-info-userInfo">{{ userInfo }}</span>
          </a>
          <span v-else class="n-info-userInfo">{{ userInfo }}</span>
          <span class="n-info-describe">{{ describe }}</span>
        </div>
      </div>
      <div v-if="$slots.right" class="n-info-right">
        <slot name="right" />
      </div>
    </div>
    <div v-if="$slots.body" class="n-info-body">
      <slot name="body" />
    </div>
    <div v-if="$slots.footer" class="n-info-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'n-info' };
</script>

<script lang="ts" setup>
import { infoProps } from './types';
import './style/index.less';
defineProps(infoProps);
</script>
