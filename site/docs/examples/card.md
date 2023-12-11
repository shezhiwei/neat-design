# Card 卡片

## 基本使用

`title` 自定义卡片的主标题

`subtitle` 自定义卡片的副标题

<n-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</n-card>

::: details 显示代码

```html
<n-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</n-card>
```

:::

## 简约卡片

`simple` 可以配置简约的卡片

<n-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</n-card>

::: details 显示代码

```html
<n-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</n-card>
```

:::

## 阴影显示时机

`shadow` 属性可以配置阴影显示时机

<n-card class="n-card-item" shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</n-card>

<n-card class="n-card-item" shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</n-card>

<n-card class="n-card-item">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</n-card>

::: details 显示代码

```html
<n-card shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</n-card>

<n-card shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</n-card>

<n-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</n-card>
```

:::

## API

| 参数       | 说明             | 类型   | 可选值               | 默认值           |
| ---------- | ---------------- | ------ | -------------------- | ---------------- |
| shadow     | 阴影显示时机     | string | ['always' , 'hover'] | ——               |
| bodn-style | 自定义 body 样式 | object | ——                   | {padding:'20px'} |

## Slots

| 插槽名称 | 说明               |
| -------- | ------------------ |
| title    | 自定义卡片的主标题 |
| subtitle | 自定义卡片的副标题 |

<style scope>
  .n-card-item{
    margin:10px
  }
</style>
