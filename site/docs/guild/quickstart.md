# 快速开始

本节将介绍如何在项目中使用 `neat-design`

## 用法

### 1、在 main.js 中全部注册

```diff
//main.js
+ import neatDesign from 'neat-design';
import { createApp } from 'vue';
import App from './app.vue';

const app = createApp(App);

+ app.use(neatDesign);
app.mount('#app');

```

在组件中可以直接使用

```vue
<template>
  <n-button>按钮</n-button>
  <n-icon name="phone" dot />
</template>
```

### 2.在 main.js 中按需注册

```diff
//main.js
+ import { Button, Icon } from 'neat-design';
import { createApp } from 'vue';
import App from './app.vue';
const app = createApp(App);

+ app.use(Button);
+ app.use(Icon);
app.mount('#app');


```

在组件中可以直接使用

```vue
<template>
  <n-button>按钮</n-button>
  <n-icon name="phone" dot />
</template>
```

### 3、直接在组件中导入

```vue
<template>
  <Button>按钮</Button>
</template>

<script setup>
import { Button } from 'neat-design';
</script>
```
