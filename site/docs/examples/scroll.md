# Scroll 滚动

## 基本使用

可以设置 `height` 控制滚动区域的高度

<n-scroll :height="250">
<div class="demo-scroll-item" v-for="item in 10">{{item}}</div>
</n-scroll>

::: details 显示代码

```html
<template>
  <n-scroll :height="250">
    <div class="demo-scroll-item" v-for="item in 10">{{item}}</div>
  </n-scroll>
</template>
<style>
  .n-scroll {
    .demo-scroll-item {
      padding: 20px 0;
      background-color: rgba(242, 235, 235, 0.2);
      font-size: 18px;
      margin-bottom: 10px;
      text-align: center;

      &:nth-of-type(odd) {
        background-color: rgba(134, 110, 110, 0.1);
      }
    }
  }
</style>
```

:::

## 触发事件

`onScroll` 事件可以知道当前滚动的比值，从而实现业务逻辑

<n-button type="primary" plain @click="handleClick(true)">添加内容</n-button>
<n-button type="danger" plain @click="handleClick(false)">减少内容</n-button>
<n-scroll :height="250" @onScroll="scroll"> <div class="demo-scroll-item" v-for="item in count">{{item}}</div></n-scroll>

::: details 显示代码

```html
<template>
  <n-button type="primary" size="small" plain @click="handleClick(true)">添加内容</n-button>
  <n-button type="danger" size="small" plain @click="handleClick(false)">减少内容</n-button>
  <n-scroll :height="250" @onScroll="scroll">
    <div class="demo-scroll-item" v-for="item in count">{{item}}</div>
  </n-scroll>
</template>
<script setup>
  import { ref } from 'vue';
  import { Message } from 'neat-design';

  const count = ref(3);

  const scroll = val => {
    if (val === 0) {
      Message.info('到顶部了');
    } else if (val === 1) {
      Message.danger('到底部了');
    }
  };
  const handleClick = val => {
    if (val) {
      count.value += 3;
    } else {
      count.value -= 3;
      count.value = count.value < 0 ? 0 : count.value;
    }
  };
</script>
<style>
  .n-scroll {
    .demo-scroll-item {
      padding: 20px 0;
      background-color: rgba(242, 235, 235, 0.2);
      font-size: 18px;
      margin-bottom: 10px;
      text-align: center;

      &:nth-of-type(odd) {
        background-color: rgba(134, 110, 110, 0.1);
      }
    }
  }
</style>
```

:::

## 滚动到指定坐标

`v-model:to` 是一个双向绑定的值，用于控制滚动到指定的坐标

`alwaysVisible` 是否隐藏滚动条,默认 `true`

<n-button type="primary" plain @click="to = 500">滚动到 500</n-button>
<n-button type="primary" plain @click="to = 1200">滚动到 1200</n-button>
{{to}}

<n-scroll :height="250" v-model:to="to"  :alwaysVisible="false">
  <div class="demo-scroll-item" v-for="item in 50">{{item}}</div>
</n-scroll>

::: details 显示代码

```html
<template>
  <n-button type="primary" plain @click="to = 500">滚动到 500</n-button>
  <n-button type="primary" plain @click="to = 1200">滚动到 1200</n-button>
  {{to}}

  <n-scroll :height="250" v-model:to="to" :alwaysVisible="false">
    <div class="demo-scroll-item" v-for="item in 50">{{item}}</div>
  </n-scroll>
</template>

<script setup>
  import { ref } from 'vue';
  const to = ref(0);
</script>
<style>
  .n-scroll {
    .demo-scroll-item {
      padding: 20px 0;
      background-color: rgba(242, 235, 235, 0.2);
      font-size: 18px;
      margin-bottom: 10px;
      text-align: center;

      &:nth-of-type(odd) {
        background-color: rgba(134, 110, 110, 0.1);
      }
    }
  }
</style>
```

:::

## 无限滚动

在滚动条 `80%` 的位置开始追加内容

<n-scroll :height="250" @onScroll="handleScroll">

<div class="demo-scroll-item" v-for="item in scrollData">{{item}}</div>
</n-scroll>

::: details 显示代码

```html
<template>
  <n-scroll :height="250" @onScroll="handleScroll">
    <div class="demo-scroll-item" v-for="item in scrollData">{{item}}</div>
  </n-scroll>
</template>

<script setup>
  import { ref } from 'vue';
  const scrollData = ref(10);
  const handleScroll = val => {
    if (val >= 0.8) {
      scrollData.value += 3;
    }
  };
</script>
<style>
  .n-scroll {
    .demo-scroll-item {
      padding: 20px 0;
      background-color: rgba(242, 235, 235, 0.2);
      font-size: 18px;
      margin-bottom: 10px;
      text-align: center;

      &:nth-of-type(odd) {
        background-color: rgba(134, 110, 110, 0.1);
      }
    }
  }
</style>
```

:::

<script setup>
 import {ref} from 'vue'
 import { Message } from 'neat-design'

  const count = ref(6)
  const scrollData = ref(10)
  const to = ref(0)

  const scroll = (val) => {
    if(val === 0){
     Message.info('到顶部了')
    } else if(val === 1) {
     Message.danger('到底部了')
    }
  }
  const handleClick = (val) => {
    if(val){
      count.value += 3
    } else {
      count.value -= 3
      count.value = count.value < 0 ? 0 : count.value
    }
  }
  const handleScroll =  (val) => {
    if(val >= 0.8){
        scrollData.value += 3
    }
  }
</script>

## API

| 参数          | 说明               | 类型    | 可选值 | 默认值 |
| ------------- | ------------------ | ------- | ------ | ------ |
| height        | 容器高度           | number  | ——     | 100    |
| to            | 滚动到的位置       | number  | ——     | ——     |
| alwaysVisible | 是否始终显示滚动条 | boolean | ——     | false  |
| size          | 滚动条大小(px)     | number  | ——     | 6      |

## Events

| 事件名称 | 说明             | 回调参数              |
| -------- | ---------------- | --------------------- |
| onScroll | 滚动是触发的事件 | 当前内容所在位置(0-1) |

<style lang='less' scope>
.n-button{
  margin-right:10px
}
.n-scroll {
  .demo-scroll-item {
    padding: 20px 0;
    background-color: rgba(242, 235, 235, 0.2);
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;

    &:nth-of-type(odd) {
      background-color: rgba(134, 110, 110, 0.1);
    }
  }
}
</style>
