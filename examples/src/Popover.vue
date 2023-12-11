<template>
  <div class="box">
    <n-popover class="space" trigger="click" placement="right-start" content="我是内容">
      <template #reference>
        <div :style="{ height: '100px', width: '100px', background: '#fff', border: '1px solid gray' }">
          测试按钮
        </div>
      </template>
    </n-popover>

    <n-popover class="space" trigger="click" placement="right-start" content="我是内容">
      <template #reference>
        <div :style="{ height: '100px', width: '100px', background: '#fff', border: '1px solid gray' }">
          测试按钮
        </div>
      </template>
    </n-popover>
  </div>
</template>

<style lang="less" scoped>
.box {
  position: relative;
}

.space {
  position: relative;
  top: -500px;
  left: 100px;
}

.space2 {
  position: relative;
  top: -500px;
  left: 300px;
}
</style>
