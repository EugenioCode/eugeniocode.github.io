import { getThemeConfig, defineConfig } from '@sugarat/theme/node'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
// 主题独有配置
// 详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '星が隠れ',
  article: {
    readingTime: false
  },
  // 友链
  friend: [
    {
      nickname: '一颗白菜',
      des: '日益努力、而后风生水起',
      avatar:
        'https://nanjingcaiyong.github.io/logo.png',
      url: 'https://nanjingcaiyong.github.io/'
    },
    {
      nickname: '茂茂物语',
      des: '知识是进步的阶梯，争取每天都有知识点更新',
      avatar: 'https://notes.fe-mm.com/logo.png',
      url: 'https://notes.fe-mm.com/nav'
    }
    // {
    //   nickname: 'Vitepress',
    //   des: 'Vite & Vue Powered Static Site Generator',
    //   avatar:
    //     'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
    //   url: 'https://vitepress.vuejs.org/'
    // }
  ],
  recommend: {
    showSelf: true
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: false,
  // popover: {
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'text',
  //       content: 'QQ交流群：681489336 🎉🎉'
  //     },
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'button',
  //       content: '博客',
  //       link: 'https://sugarat.top'
  //     }
  //   ],
  //   duration: 0
  // }
})

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: '星が隠れ',
  description: '生活的琐碎',
  vite: {
    plugins: [pagefindPlugin()],
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新于',
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2023 | <a target="_blank" href="https://github.com/EugenioCode/Eugeniocode"> 星が隠れ </a>'
    },
    outline: {
      level: [2, 6],
      label: '目录'
    },
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端', items: [
          {
            text: '', items: [
              { text: 'Html', link: '/FrontEnd/html' },
              { text: 'Typescript基础知识', link: '/FrontEnd/typescript/base' },
              { text: 'Vue', link: '/FrontEnd/vue' },
            ]
          },
          {
            text: '', items: [
              {text: 'Vite入门', link: '/FrontEnd/Vite'}
            ]
          }
        ]
      },
      {
        text: '工作流', items: [
          { text: '代码片段', link: '/workflow/codeSnippet' },
          { text: '开发调试', link: '/workflow/devTools' },
          { text: 'Npm', link: '/workflow/npm' },
          { text: 'Git', link: '/workflow/git' }
        ]
      },
      {
        text: '工具', items: [
          { text: 'Mac软件', link: '/tools/mac' }
        ]
      },
      {
        text: '扩展提升', items: [
          {
            text: '',
            items: [
              { text: 'Mysql入门', link: '/database/mysql' },
            ]
          },
        ]
      },
      {
        text: '宝藏网站',
        items: [
          { text: '格式转换', link: 'https://cn.office-converter.com/png-to-ico' },
          { text: '在线图片压缩', link: 'https://tinypng.com/' },
          { text: '前端API兼容查询', link: 'https://caniuse.com/' }
        ]
      },
      // { text: '关于作者', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/EugenioCode'
      }
    ]
  }
})
