# Info 信息栏

## 基本使用

`userInfo` 属性可以配置昵称

`describe` 属性可以配置描述信息

`photo` 插槽可以插入一个头像

`right` 插槽可以插入右侧内容

<n-info userInfo="铅笔" describe="hello world">
  <template v-slot:photo>
    <n-avatar
      round
      :size="5"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    />
  </template>
  <template v-slot:right>
    <n-button simple type="primary" size="mini">关注 TA</n-button>
  </template>
</n-info>

::: details 显示代码

```html
<n-info userInfo="铅笔" describe="hello world">
  <template v-slot:photo>
    <n-avatar
      round
      :size="5"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    />
  </template>
  <template v-slot:right>
    <n-button simple type="primary" size="mini">关注 TA</n-button>
  </template>
</n-info>
```

:::

## 更多扩展

`body` 和 `footer` 插槽可以进行插入身体和页脚的内容

<n-info userInfo="铅笔" describe="hello world">
  <template v-slot:photo>
    <n-avatar
      round
      :size="5"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    />
  </template>
  <template v-slot:right>
    <n-button simple type="primary" size="mini">关注 TA</n-button>
  </template>

  <template v-slot:body>
    <span class="content">这是我今天拍的照片，好看吗？</span>
    <img  src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/blogImg/yuhangyuan.jpg" />
  </template>

  <template v-slot:footer>
    <span type="danger">2022-02-12</span>
  </template>
</n-info>

::: details 显示代码

```html
<n-info userInfo="铅笔" describe="hello world">
  <template v-slot:photo>
    <n-avatar
      round
      :size="5"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    />
  </template>
  <template v-slot:right>
    <n-button simple type="primary" size="mini">关注 TA</n-button>
  </template>

  <template v-slot:body>
    <span class="content">这是我今天拍的照片，好看吗？</span>
    <img
      src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/blogImg/yuhangyuan.jpg"
    />
  </template>

  <template v-slot:footer>
    <span type="danger">2022-02-12</span>
  </template>
</n-info>
```

:::

## 昵称超链接

使用 `linkUrl` 属性，传入一个 `url` 可以配置点击昵称的时候进行超链接跳转

<n-info userInfo="铅笔" describe="hello world" linkUrl="https://github.com/shezhiwei">
  <template v-slot:photo>
    <n-avatar round :size="5" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
  </template>
</n-info>

::: details 显示代码

```html
<n-info
  userInfo="铅笔"
  describe="hello world"
  linkUrl="https://github.com/shezhiwei"
>
  <template v-slot:photo>
    <n-avatar
      round
      :size="5"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    />
  </template>
</n-info>
```

:::

## API

| 参数     | 说明               | 类型   | 可选值 | 默认值 |
| -------- | ------------------ | ------ | ------ | ------ |
| userInfo | 昵称               | string | ——     | ——     |
| describe | 描述信息           | string | ——     | ——     |
| linkUrl  | 点击昵称的跳转链接 | string | ——     | ——     |

## Slots

| 插槽名称 | 说明                   |
| -------- | ---------------------- |
| photo    | 自定义信息栏的头像     |
| right    | 自定义信息栏的右侧内容 |
| body     | 自定义信息栏的主要部分 |
| footer   | 自定义信息栏的页脚部分 |

<style scoped>
  .content{
    display:inline-block;
    margin:10px 0;
  }
</style>
