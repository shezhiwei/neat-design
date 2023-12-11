# Container 布局容器

## 基本使用

用于布局的容器组件，方便快速搭建页面的基本结构：

`<n-container>`：外层容器

`<n-header>`：顶栏容器

`<n-aside>`：侧边栏容器

`<n-main>`：主要区域容器

`<n-footer>`：底栏容器

常见页面布局

<n-container>
  <n-header>Header</n-header>
  <n-main>Main</n-main>
</n-container>

<br />

<n-container>
  <n-header>Header</n-header>
  <n-main>Main</n-main>
  <n-footer>Footer</n-footer>
</n-container>

<br />

<n-container>
  <n-aside width="200px">Aside</n-aside>
  <n-main>Main</n-main>
</n-container>

<br />

<n-container>
  <n-header>Header</n-header>
  <n-container>
    <n-aside width="200px">Aside</n-aside>
    <n-main>Main</n-main>
  </n-container>
</n-container>

<br />

<n-container>
  <n-header>Header</n-header>
  <n-container>
    <n-aside width="200px">Aside</n-aside>
    <n-container>
      <n-main>Main</n-main>
      <n-footer>Footer</n-footer>
    </n-container>
  </n-container>
</n-container>

<br />

<n-container>
  <n-aside width="200px">Aside</n-aside>
  <n-container>
    <n-header>Header</n-header>
    <n-main>Main</n-main>
  </n-container>
</n-container>

<br />

<n-container>
  <n-aside width="200px">Aside</n-aside>
  <n-container>
    <n-header>Header</n-header>
    <n-main>Main</n-main>
    <n-footer>Footer</n-footer>
  </n-container>
</n-container>

::: details 显示代码

```vue
<template>
  <n-container>
    <n-header>Header</n-header>
    <n-main>Main</n-main>
  </n-container>

  <n-container>
    <n-header>Header</n-header>
    <n-main>Main</n-main>
    <n-footer>Footer</n-footer>
  </n-container>

  <n-container>
    <n-aside width="200px">Aside</n-aside>
    <n-main>Main</n-main>
  </n-container>

  <n-container>
    <n-header>Header</n-header>
    <n-container>
      <n-aside width="200px">Aside</n-aside>
      <n-main>Main</n-main>
    </n-container>
  </n-container>

  <n-container>
    <n-header>Header</n-header>
    <n-container>
      <n-aside width="200px">Aside</n-aside>
      <n-container>
        <n-main>Main</n-main>
        <n-footer>Footer</n-footer>
      </n-container>
    </n-container>
  </n-container>

  <n-container>
    <n-aside width="200px">Aside</n-aside>
    <n-container>
      <n-header>Header</n-header>
      <n-main>Main</n-main>
    </n-container>
  </n-container>

  <n-container>
    <n-aside width="200px">Aside</n-aside>
    <n-container>
      <n-header>Header</n-header>
      <n-main>Main</n-main>
      <n-footer>Footer</n-footer>
    </n-container>
  </n-container>
</template>

<style scoped>
.n-header,
.n-footer {
  background: #6b8bf5;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.n-aside {
  background: rgb(101, 173, 240);
  color: #fff;
  text-align: center;
  line-height: 200px;
}
.n-main {
  background: #3178c6;
  color: #fff;
  text-align: center;
  line-height: 160px;
}
</style>
```

:::

## n-container

| 参数      | 说明             | 类型   | 可选值                     | 默认值 |
| --------- | ---------------- | ------ | -------------------------- | ------ |
| direction | 子元素的排列方向 | string | ['horizontal', 'vertical'] | ——     |

## n-header

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | ——     | 60px   |

## n-aside

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | ——     | 200px  |

## n-footer

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | ——     | 60px   |

<style scoped>
  .n-header,
  .n-footer {
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .n-aside {
    background: rgb(101, 173, 240);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .n-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
