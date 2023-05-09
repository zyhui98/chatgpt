import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-cn',
  title: 'ChatGPT',
  description: '打造ChatGPT最新资讯和工具平台.',

  themeConfig: {
    nav: [
      { text: '首页', link: '/index' },
      { text: 'AI办公', link: '/office' },
      { text: '提示词', link: '/prompt' },
      { text: '场景案例', link: '/scene' },
      { text: '开源项目', link: '/project' },
      { text: '关于', link: '/about' },

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
        text: 'ChatGPT使用指南',
        items: [
          { text: 'OpenAI', link: '/openai' },
          { text: 'Midjourney', link: '/midjourney' },
          { text: 'Claude', link: '/claude' },
          { text: 'BingChat', link: '/bingchat' },
          // ...
        ],
      },
    ],
  },
});
