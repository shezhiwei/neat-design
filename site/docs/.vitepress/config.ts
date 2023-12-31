const argv = require('minimist')(process.argv.slice(2));
const build = argv.build || false;
const baseBuild = build ? '/neat-design-docs/' : '/';

export default {
  base: baseBuild,
  title: 'Neat Design',
  themeConfig: {
    siteTitle: false,
    // logo: '/logo.png',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/button' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/shezhiwei/neat-design.git' }],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        }
      ],
      '/examples/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/examples/button',
            },
            {
              text: 'Icon 图标',
              link: '/examples/icon',
            },
            {
              text: 'Container 布局容器',
              link: '/examples/container',
            },
          ],
        },
        {
          text: '数据展示',
          items: [
            {
              text: 'Avatar 头像',
              link: '/examples/avatar',
            },
            {
              text: 'Info 信息栏',
              link: '/examples/info',
            },
            {
              text: 'Card 卡片',
              link: '/examples/card',
            },
            {
              text: 'Scroll 滚动',
              link: '/examples/scroll',
            },
            {
              text: 'Switch 开关',
              link: '/examples/switch',
            },
            {
              text: 'Select 选择器',
              link: '/examples/select',
            },
            {
              text: 'Input 输入框',
              link: '/examples/input',
            },
            {
              text: 'Textarea 文本域',
              link: '/examples/textarea',
            },
            {
              text: 'Radio 单选框',
              link: '/examples/radio',
            },
            {
              text: 'Rate 评分',
              link: '/examples/rate',
            },
            {
              text: 'Upload 上传',
              link: '/examples/upload',
            },
            {
              text: 'Table 表格',
              link: '/examples/table',
            },
          ],
        },
        {
          text: '导航组件',
          items: [
            {
              text: 'BackTop 回到顶部',
              link: '/examples/back-top',
            },
          ],
        },
        {
          text: '反馈组件',
          items: [
            {
              text: 'Message 消息提示',
              link: '/examples/message',
            },
            {
              text: 'Notification 通知',
              link: '/examples/notification',
            },
            {
              text: 'Dialog 对话框',
              link: '/examples/dialog',
            },
            {
              text: 'Drawer 抽屉',
              link: '/examples/drawer',
            },
            {
              text: 'Shake 抖动',
              link: '/examples/shake',
            },
            {
              text: 'Popover 弹出框',
              link: '/examples/popover',
            },
          ],
        },
      ],
    },
  },
};
