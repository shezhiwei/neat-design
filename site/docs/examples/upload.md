# Upload 上传

在控制台可查看上传文件变化时的文件数组

## 基本使用

<div class="upload-demo">
  <n-upload @getFilesList="getFilesList">
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</div>

```vue
<template>
  <n-upload @getFilesList="getFilesList">
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## 多选文件

<div class="upload-demo">
  <n-upload @getFilesList="getFilesList" multiple>
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</div>

```vue
<template>
  <n-upload @getFilesList="getFilesList" multiple>
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## 指定文件类型

<div class="upload-demo">
  <n-upload @getFilesList="getFilesList"  accept="image/*">
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</div>

```vue
<template>
  <n-upload @getFilesList="getFilesList" accept="image/*">
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## 拖拽上传

<div class="upload-demo">
  <n-upload @getFilesList="getFilesList" drag>
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</div>

```vue
<template>
  <n-upload @getFilesList="getFilesList" drag>
    <n-button type="primary" size="small">文件上传</n-button>
  </n-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## API

| 参数     | 说明                                                   | 类型    | 可选值                                                                                                                         | 默认值 |
| -------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------ | ------ |
| multiple | 是否可以多选                                           | boolean | ——                                                                                                                             | false  |
| accept   | 可以选择的文件 MIME 类型，多个 MIME 类型用英文逗号分开 | string  | <a href='https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%84%E5%8A%A0%E5%B1%9E%E6%80%A7'>见 MDN</a> | ——     |
| drag     | 是否是拖拽上传                                         | boolean | ——                                                                                                                             | false  |

## Events

| 事件名称     | 说明               | 回调参数     |
| ------------ | ------------------ | ------------ |
| getFilesList | 文件列表改变时触发 | 新的文件列表 |

<script setup lang="ts">
  const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>

<style scope>
.upload-demo {
  width: 400px;
  margin: 50px;

}
.upload-demo .n-icon{
  font-size:20px
}
</style>
