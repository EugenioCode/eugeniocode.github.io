import { getThemeConfig, defineConfig } from '@sugarat/theme/node'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
// 主题独有配置
// 详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '星が隠れ',
  // 友链
  friend: [
    {
      nickname: '一颗白菜',
      des: '日益努力、而后风生水起',
      avatar:
        'https://nanjingcaiyong.github.io/logo.png',
      url: 'https://nanjingcaiyong.github.io/'
    },
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
        'Copyright © 2023 | <a target="_blank" href="https://theme.sugarat.top/"> 星が隠れ </a>'
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
        text: '大前端', items: [
          { text: 'Html', link: '/FrontEnd/html' },
          { text: 'Typescript', link: '/FrontEnd/typescript' },
          { text: 'Vue', link: '/FrontEnd/vue' },
          { text: 'Mysql入门', link: '/FrontEnd/mysql' },
        ]
      },
      {
        text: '工具', items: [
          { text: 'Git', link: '/tools/git' },
          { text: 'Mac软件', link: '/tools/mac' },
          { text: 'Npm', link: '/tools/npm' },
        ]
      },
      {
        text: '宝藏网站',
        items: [
          { text: '格式转换', link: 'https://cn.office-converter.com/png-to-ico' }
        ]
      },
      { text: '关于作者', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/EugenioCode'
      }
    ]
  }
})
