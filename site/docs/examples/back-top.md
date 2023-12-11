# BackTop 回到顶部

## 基本使用

回到顶部的基础用法

<n-back-top>Top</n-back-top>

::: details 显示代码

```html
<n-back-top>Top</n-back-top>
```

:::

## 位置偏移

`bottom` 和 `right` 属性可以配置距离右边和下边的距离

<n-back-top bottom="150px" right="120px">Go</n-back-top>

::: details 显示代码

```html
<n-back-top bottom="150px" right="120px">Go</n-back-top>
```

:::

## 插入 Icon

<n-back-top bottom="100px">
  <n-icon name="vertical-align-top" color="#409eff" />
</n-back-top>

::: details 显示代码

```html
<n-back-top bottom="100px">
  <n-icon name="vertical-align-top" color="#409eff" />
</n-back-top>
```

:::

## API

| 参数     | 说明             | 类型   | 可选值              | 默认值   |
| -------- | ---------------- | ------ | ------------------- | -------- |
| bottom   | 距离下面的距离   | string | ——                  | '50px'   |
| right    | 距离右面的距离   | string | ——                  | '50px'   |
| behavior | 滚动模式         | string | ['smooth' , 'auto'] | 'smooth' |
| beyond   | 超出 xx 范围显示 | number | ——                  | 100      |
