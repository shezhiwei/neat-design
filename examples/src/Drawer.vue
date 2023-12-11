<template>
  <n-drawer :visible="normalViaible" @cancel="handleClose" @confirm="handleClose" title="这是标题" size="50%"
    :direction="direction">
    <template v-slot:headerContent>
      <div>
        我是 header：啊实打实大所
        <n-button @click="handleClose">点我关闭</n-button>
      </div>
    </template>
    <template v-slot:footerContent>
      <div>我是 footer</div>
    </template>
    这是内容这是内容这是内容这是内容这是内容
  </n-drawer>

  <n-radio v-model="direction" label="right">从右面弹出</n-radio>
  <n-radio v-model="direction" label="left">从左面弹出</n-radio>
  <n-radio v-model="direction" label="bottom">从下面弹出</n-radio>
  <n-radio v-model="direction" label="top">从上面弹出</n-radio>
  <n-button @click="openDialog">点击</n-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const direction = ref('right');
const normalViaible = ref(false);
const openDialog = () => {
  normalViaible.value = true;
};

const handleClose = () => {
  normalViaible.value = false;
};
</script>
