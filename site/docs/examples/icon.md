# Icon 图标

## 基础用法

<div class="icon-wrap">
  <div class="icon-item"  v-for="(item, index) in iconList" :key="item">
    <n-icon size="36" :name="item"/> 
    <span class="icon-name">{{item}}</span>
  </div>
</div>

```vue
<template>
  <n-icon name="组件名称" />
</template>
```

## 修改颜色

<div class="icon-wrap">
  <div class="icon-item" >
    <n-icon name="cloud-download" color="red"   size="36"/> 
  </div>
   <div class="icon-item" >
    <n-icon name="like" color="green"  size="36"/> 
  </div>
   <div class="icon-item" >
    <n-icon name="heart" color="orange"  size="36"/> 
  </div>
   <div class="icon-item" >
    <n-icon name="delete" color="blue"  size="36"/> 
  </div>
</div>

```vue
<template>
  <n-icon name="cloud-download" color="red" />
  <n-icon name="like" color="green" />
  <n-icon name="heart" color="orange" />
  <n-icon name="delete" color="blue" />
</template>
```

## 控制大小

<div class="icon-wrap">
  <div class="icon-item" >
    <n-icon name="cloud-download" size="10"/> 
  </div>
   <div class="icon-item" >
    <n-icon name="like" size="20"/> 
  </div>
   <div class="icon-item" >
    <n-icon name="heart" :size="30"/> 
  </div>
   <div class="icon-item" >
    <n-icon name="delete" :size="40"/> 
  </div>
</div>

```vue
<template>
  <n-icon name="cloud-download" size="10" />
  <n-icon name="like" size="20" />
  <n-icon name="heart" :size="30" />
  <n-icon name="delete" :size="40" />
</template>
```

## 添加角标

<div class="icon-wrap">
<n-icon name="phone" dot   size="36"/>
</div>

```vue
<template>
  <n-icon name="phone" dot />
</template>
```

## 数字角标

<div class="icon-wrap">
<n-icon name="phone" dot badge="1" size="36" />
</div>

```vue
<template>
  <n-icon name="phone" dot badge="1" />
</template>
```

## API

| 参数      | 说明                             | 类型            | 可选值                           | 默认值 |
| --------- | -------------------------------- | --------------- | -------------------------------- | ------ |
| name      | icon 名                          | string          | <a href="#基础用法">基础用法</a> | ——     |
| dot       | 是否有角标                       | boolean         | ——                               | false  |
| badge     | 数字角标内容(dot 为 true 才生效) | string          | ——                               | ——     |
| color     | icon 颜色                        | string          | ——                               | ——     |
| size      | icon 大小,传入 25 就是 25px      | string/number   | ——                               | 16     |
| iconStyle | svg 的内联样式                   | CSSProperties{} | ——                               | ——     |
| iconClass | svg 的 class 名                  | string          | ——                               | ——     |

<script setup lang="ts">
const iconList =[
    "you",
    "yixuan",
    "yixuanze",
    "zengjia",
    "zuo",
    "fire",
    "stop",
    "rollback",
    "question",
    "close",
    "check",
    "menu",
    "outdent",
    "vertical-align-top",
    "vertical-align-botto",
    "arrowdown",
    "arrowleft",
    "arrowup",
    "arrowright",
    "fullscreen-exit",
    "fullscreen",
    "down",
    "up",
    "left",
    "right",
    "verticalleft",
    "verticalright",
    "arrawsalt",
    "shrink",
    "share",
    "tags",
    "phone",
    "heart",
    "cloud-sync",
    "cloud-download",
    "cloud",
    "camera",
    "deploymentunit",
    "folder-add",
    "folder-open",
    "folder",
    "unlike",
    "like",
    "bank",
    "home",
    "delete",
    "filesearch",
    "filesync",
    "file-exception",
    "filedone",
    "mobile",
    "linechart",
    "team",
    "user",
    "addteam",
    "deleteuser",
    "deleteteam",
    "adduser",
    "detail",
    "codelibrary",
    "left-square",
    "appstore",
    "export",
    "edit-square",
    "location",
    "setting",
    "piechart",
    "poweroff",
    "message",
    "reloadtime",
    "reload",
    "redo",
    "undo",
    "sync",
    "warning-circle",
    "up-circle",
    "timeout",
    "right-circle",
    "question-circle",
    "play-circle",
    "plus-circle",
    "minus-circle",
    "down-circle",
    "left-circle",
    "check-circle",
    "info-circle",
    "close-circle",
    "instagram",
    "barcode",
    "dribbble",
    "laptop",
    "Gitlab",
    "sliders",
    "sketch",
    "build",
    "android",
    "boxplot",
    "apple",
    "select",
    "aliwangwang",
    "scan",
    "codepen",
    "calendar",
    "chrome",
    "calendar-check",
    "CodeSandbox",
    "carryout",
    "skype",
    "contacts",
    "facebook",
    "accountbook",
    "yahoo",
    "shopping",
    "linkedin",
    "rocket",
    "HTML",
    "shop",
    "zhihu",
    "medicinebox",
    "taobao",
    "moneycollect",
    "alipay",
    "flag",
    "slack",
    "customerservice",
    "amazon",
    "lock",
    "IE",
    "unlock",
    "google",
    "funnelplot",
    "medium",
    "filter",
    "googleplus",
    "skin",
    "behance",
    "USB",
    "ant-cloud",
    "rest",
    "antdesign",
    "trophy",
    "alibaba",
    "bell",
    "experiment",
    "bulb",
    "hourglass",
    "alert",
    "insurance",
    "safetycertificate",
    "propertysafety",
    "securityscan",
    "Batchfolding",
    "diff",
    "audit",
    "snippets",
    "file-copy",
    "file-text",
    "file-zip",
    "file",
    "file-word",
    "file-ppt",
    "file-unknown",
    "file-markdown",
    "file-image",
    "file-pdf",
    "file-exclamation",
    "file-excel",
    "file-add",
    "fileprotect",
    "solution",
    "reconciliation",
    "book",
    "redenvelope",
    "tablet",
    "sever",
    "database",
    "container",
    "pointmap",
    "barchart",
    "areachart",
    "radius-setting",
    "radius-upright",
    "radius-upleft",
    "radius-bottomright",
    "radius-bottomleft",
    "border-horizontal",
    "border-verticle",
    "border-inner",
    "border-right",
    "border-left",
    "border-bottom",
    "border-top",
    "border-outer",
    "border",
    "check-square",
    "interation",
    "calculator",
    "up-square",
    "wallet",
    "project",
    "right-square",
    "plus-square",
    "minus-square",
    "control",
    "play-square",
    "layout",
    "down-square",
    "close-square",
    "Import",
    "save",
    "eye",
    "logout",
    "issuesclose",
    "dashboard",
    "transaction",
    "YUAN",
    "earth",
    "time-circle",
    "trademark",
    "smile",
    "Pound",
    "meh",
    "copyright",
    "EURO",
    "frown",
    "compass",
    "file-exclamation-fil",
    "Dollar",
    "CI",
    "ungroup",
    "shortcut",
    "View",
    "safetycertificate-f",
    "Report",
    "send",
    "group",
    "file-GIF",
    "folder-view",
    "expend",
    "compress",
    "aim",
    "icon-test",
    "Console-SQL",
    "Field-Binary",
    "Storedprocedure",
    "index",
    "Partition",
    "GIF",
    "Field-time",
    "Function",
    "Field-String",
    "Field-number",
    "sisternode",
    "deleterow",
    "translate",
    "insertrowleft",
    "insertrowright",
    "formatpainter",
    "solit-cells",
    "table1",
    "insertrowabove",
    "piechart-circle-fil",
    "insertrowbelow",
    "rotate-right",
    "rotate-left",
    "trademark-circle-fil",
    "subnode",
    "merge-cells",
    "deletecolumn",
    "expand",
    "collapse",
    "clear",
    "eye-close",
    "plus",
    "woman",
    "swap-left",
    "copyright-circle-fil",
    "swap-right",
    "step-forward",
    "step-backward",
    "login",
    "retweet",
    "search",
    "fast-forward",
    "forward",
    "fast-backward",
    "thunderbolt",
    "caret-left",
    "gift",
    "caret-right",
    "desktop",
    "caret-up",
    "drag",
    "backward",
    "crown",
    "caret-down",
    "bg-colors",
    "appstoreadd",
    "pause",
    "whatsapp",
    "small-dash",
    "switchuser",
    "minus",
    "videocameraadd",
    "line",
    "enter",
    "verified",
    "dash",
    "ellipsis",
    "comment",
    "column-width",
    "audiostatic",
    "code",
    "bug",
    "italic",
    "number",
    "underline",
    "zoomin",
    "strikethrough",
    "robot",
    "line-height",
    "infomation",
    "audio",
    "font-size",
    "apartment",
    "exclaimination",
    "zoomout",
    "font-colors",
    "bold",
    "pic-left",
    "pic-right",
    "pic-center",
    "align-left",
    "align-center",
    "align-right",
    "orderedlist",
    "unorderedlist",
    "indent",
    "rise",
    "stock",
    "swap",
    "googleplus-square-f",
    "fall",
    "sort-ascending",
    "sort-descending",
    "download",
    "totop",
    "vertical-align-middl",
    "colum-height",
    "CodeSandbox-square-f",
    "upload",
    "doubleright",
    "doubleleft",
    "fork",
    "branches",
    "mr",
    "scissor",
    "wrench",
    "tag",
    "shake",
    "pushpin",
    "percentage",
    "man",
    "link",
    "monitor",
    "googleplus-circle-f",
    "highlight",
    "disconnect",
    "api",
    "key",
    "CodeSandbox-circle-f",
    "edit",
    "attachment",
    "wifi",
    "heatmap",
    "gold",
    "star",
    "error",
    "block",
    "creditcard",
    "idcard",
    "table",
    "weibo",
    "mail",
    "image",
    "twitter",
    "fund",
    "QQ",
    "qrcode",
    "radarchart",
    "sound",
    "notification",
    "video",
    "dingtalk",
    "cloud-upload",
    "dropbox",
    "cloud-server",
    "read",
    "Youtube",
    "printer",
    "yuque",
    "car",
    "windows",
    "gateway",
    "reddit",
    "cluster",
    "warning-circle-fill",
    "question-circle-fill",
    "info-circle-fill",
    "close-circle-fill",
    "check-circle-fill",
    "sliders-fill",
    "boxplot-fill",
    "build-fill",
    "golden-fill",
    "USB-fill",
    "setting-fill",
    "shop-fill",
    "printer-fill",
    "car-fill",
    "mail-fill",
    "crown-fill",
    "error-fill",
    "camera-fill",
    "bank-fill",
    "tags-fill",
    "wrench-fill",
    "tag-fill",
    "thunderbolt-fill",
    "rocket-fill",
    "pushpin-fill",
    "edit-fill",
    "phone-fill",
    "highlight-fill",
    "api-fill",
    "alert-fill",
    "unlock-fill",
    "star-fill",
    "unlike-fill",
    "lock-fill",
    "like-fill",
    "eye-fill",
    "experiment-fill",
    "customerservice-fill",
    "cloud-fill",
    "location-fill",
    "trophy-fill",
    "home-fill",
    "hourglass-fill",
    "gift-fill",
    "funnelplot-fill",
    "fire-fill",
    "filter-fill",
    "bell-fill",
    "bulb-fill",
    "sound-fill",
    "video-fill",
    "skin-fill",
    "shopping-fill",
    "rest-fill",
    "medicinebox-fill",
    "moneycollect-fill",
    "flag-fill",
    "notification-fill",
    "delete-fill",
    "contacts-fill",
    "read-fill",
    "fund-fill",
    "creditcard-fill",
    "idcard-fill",
    "image-fill",
    "calendar-check-fill",
    "sever-fill",
    "container-fill",
    "database-fill",
    "folder-open-fill",
    "folder-fill",
    "folder-add-fill",
    "reconciliation-fill",
    "batchfolding-fill",
    "snippets-fill",
    "file-copy-fill",
    "diff-fill",
    "file-image-fill",
    "file-pdf-fill",
    "file-zip-fill",
    "file-word-fill",
    "file-unknown-fill",
    "file-ppt-fill",
    "file-text-fill",
    "file-markdown-fill",
    "file-excel-fill",
    "file-fill",
    "file-add-fill",
    "securityscan-fill",
    "insurance-fill",
    "propertysafety-fill",
    "redenvelope-fill",
    "book-fill",
    "tablet-fill",
    "mobile-fill",
    "appstore-fill",
    "layout-fill",
    "control-fill",
    "wallet-fill",
    "save-fill",
    "detail-fill",
    "project-fill",
    "interation-fill",
    "calculator-fill",
    "calendar-fill",
    "carryout-fill",
    "accountbook-fill",
    "plus-square-fill",
    "right-square-fill",
    "up-square-fill",
    "play-square-fill",
    "left-square-fill",
    "codelibrary-fill",
    "close-square-fill",
    "formatpainter-fill",
    "minus-square-fill",
    "down-square-fill",
    "check-square-fill",
    "message-fill",
    "dashboard-fill",
    "heart-fill",
    "YUAN-circle-fill",
    "time-circle-fill",
    "stop-fill",
    "smile-fill",
    "Pound-circle-fill",
    "play-circle-fill",
    "meh-fill",
    "poweroff-circle-fill",
    "eyeclose-fill",
    "Dollar-circle-fill",
    "compass-fill",
    "CI-circle-fill",
    "frown-fill",
    "EURO-circle-fill",
    "plus-circle-fill",
    "right-circle-fill",
    "up-circle-fill",
    "minus-circle-fill",
    "down-circle-fill",
    "left-circle-fill",
    "shortcut-fill",
    "signal-fill",
    "bug-fill",
    "robot-fill",
    "audio-fill",
    "zhihu-square-fill",
    "weibo-square-fill",
    "taobao-square-fill",
    "slack-square-fill",
    "sketch-square-fill",
    "twitter-square-fill",
    "reddit-square-fill",
    "QQ-square-fill",
    "linkedin-fill",
    "medium-square-fill",
    "IE-square-fill",
    "instagram-fill",
    "google-square-fill",
    "facebook-fill",
    "dropbox-square-fill",
    "dribbble-square-fill",
    "codepen-square-fill",
    "amazon-square-fill",
    "behance-square-fill",
    "dingtalk-square-fill",
    "alipay-square-fill",
    "reddit-circle-fill",
    "zhihu-circle-fill",
    "weibo-circle-fill",
    "taobao-circle-fill",
    "twitter-circle-fill",
    "slack-circle-fill",
    "sketch-circle-fill",
    "dingtalk-circle-fill",
    "google-circle-fill",
    "IE-circle-fill",
    "QQ-circle-fill",
    "medium-circle-fill",
    "dribbble-circle-fill",
    "github-fill",
    "dropbox-circle-fill",
    "codepen-circle-fill",
    "amazon-circle-fill",
    "behance-circle-fill",
    "aliwangwang-fill",
    "alipay-circle-fill",
    "chrome-fill",
    "wechat-fill",
    "yahoo-fill",
    "Youtube-fill",
    "yuque-fill",
    "skype-fill",
    "windows-fill",
    "HTML-fill",
    "apple-fill",
    "android-fill",
    "Gitlab-fill"
]

</script>

<style scope>
.icon-wrap{
  display:flex;
  flex-wrap:wrap;
}
.icon-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100px;
  width:16.6%
}
.icon-name{
  font-size:12px
}
.icon-wrap .n-icon .icon{
  /* width:36px;
  height:36px; */
  color: #666;
  margin-bottom:10px
}
</style>
