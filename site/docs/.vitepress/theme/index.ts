// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme';
import neatDesign from 'neat-design';
import { Message } from 'neat-design';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(neatDesign);
  },
};
