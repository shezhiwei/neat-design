<template>
  <n-info userInfo="szw1999" describe="hello world">
    <template v-slot:photo>
      <n-avatar round :size="5" errorIcon="warning-circle"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
    </template>
    <template v-slot:right>
      <n-button simple type="primary" size="mini">关注 TA</n-button>
    </template>

    <template v-slot:body>
      <span>这是我今天拍的照片，好看吗？</span>
      <img style="display: block" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
    </template>

    <template v-slot:footer>
      <span type="danger">2023-11-11</span>
    </template>
  </n-info>
</template>