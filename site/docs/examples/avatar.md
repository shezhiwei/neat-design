# Avatar 头像

## 基本使用

`src` 属性可以添加图片路径

`size` 可以配置头像大小

<n-avatar :size="10" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

::: details 显示代码

```html
<n-avatar
  :size="10"
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
/>
```

:::

## 配置圆角

`round` 属性配置头像的圆角

<n-avatar round src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />

::: details 显示代码

```html
<n-avatar
  round
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
/>
```

:::

## 如何适应容器框

`fit` 属性配置头像如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<div class="fitBox">
  <div class="item" v-for="fit in fits" :key="fit">
    <span class="text">{{ fit }}</span>
    <n-avatar
      round
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      :fit="fit"
    />
  </div>
</div>

<div class="fitBox">
  <div class="item" v-for="fit in fits" :key="fit">
    <span class="text">{{ fit }}</span>
    <n-avatar
      src="https://img2.baidu.com/it/u=3311458432,501503621&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      :fit="fit"
    />
  </div>
</div>

::: details 显示代码

```html
<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <n-avatar
        round
        src="https://img2.baidu.com/it/u=3311458432,501503621&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script setup>
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
</script>
```

:::

## 配置边框

`border` 属性配置头像的边框

<n-avatar border src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
<n-avatar border round  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

::: details 显示代码

```html
<n-avatar
  border
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
/>
<n-avatar
  border
  round
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
/>
```

:::

## 加载失败

`errorIcon` 属性配置加载失败的 `icon`

<n-avatar src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/assets/giraffe.jpg" />&emsp;
<n-avatar errorIcon="info-circle" src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/assets/giraffe.jpg"/>

::: details 显示代码

```html
<n-avatar
  src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/assets/giraffe.jpg"
/>
<n-avatar
  errorIcon="info-circle"
  src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/assets/giraffe.jpg"
/>
```

:::

## API

| 参数      | 说明               | 类型    | 可选值 | 默认值                     |
| --------- | ------------------ | ------- | ------ | -------------------------- |
| src       | 图片路径           | string  | ——     | ——                         |
| size      | 图片大小           | number  | ——     | 8,(计算方式：(size\*10)px) |
| round     | 圆角               | boolean | ——     | false                      |
| border    | 边框               | boolean | ——     | false                      |
| fit       | 图片如何适应容器框 | string  | ——     | ——                         |
| alt       | 原生 alt 属性      | string  | ——     | ——                         |
| select    | 是否可以选择       | boolean | ——     | false                      |
| draggable | 是否可以拖动       | boolean | ——     | false                      |
| errorIcon | 失败时显示的 icon  | string  | ——     | 'close-circle'             |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| load     | 图片加载成功触发 | ——       |
| error    | 图片加载失败触发 | ——       |

## Slots

| 插槽名称 | 说明说明       |
| -------- | -------------- |
| error    | 自定义失败提示 |

<script setup>
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>

<style scoped>
.fitBox {
  display: flex;
}
.fitBox .item {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fitBox .item .text {
  color: #333333;
  margin-bottom: 20px;
}
</style>
