<template>
  <n-info userInfo="Tyh2001" describe="hello world">
    <template v-slot:photo>
      <n-avatar round :size="5" errorIcon="warning-circle" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
    </template>
    <template v-slot:right>
      <n-button simple type="primary" size="mini">关注 TA</n-button>
    </template>

    <template v-slot:body>
      <span>这是我今天拍的照片，好看吗？</span>
      <img style="display: block" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
    </template>

    <template v-slot:footer>
      <span type="danger">2022-02-12</span>
    </template>
  </n-info>
</template>