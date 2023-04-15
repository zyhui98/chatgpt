import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-cn',
  title: 'ChatGPT',
  description: '打造ChatGPT最新资讯和工具平台.',

  themeConfig: {
    nav: [
      { text: '首页', link: '/index' },
      { text: 'OpenAI', link: '/openai' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'OpenAI', link: '/openai' },
          // ...
        ],
      },
    ],
  },
});
