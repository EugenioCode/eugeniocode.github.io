export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/logo.svg\",\"heroText\":\"你博客的名称\",\"heroFullScreen\":true,\"tagline\":\"你可以在这里放置你的口号与标语\",\"projects\":[{\"icon\":\"project\",\"name\":\"Mac软件推荐\",\"desc\":\"常用的Mac软件\",\"link\":\"/tools/mac\"},{\"icon\":\"link\",\"name\":\"Git\",\"desc\":\"Git常用命令\",\"link\":\"/tools/git\"},{\"icon\":\"book\",\"name\":\"npm包\",\"desc\":\"Npm工具包\",\"link\":\"/tools/npm\"}],\"footer\":\"自定义你的页脚文字\",\"summary\":\"--- home: true layout: Blog icon: home title: 博客主页 heroImage: /logo.svg heroText: 你博客的名称 heroFullScreen: true tagline: 你可以在这里放置你的口号与标语 projects: icon: project; name: Mac软件推荐 desc: \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"主题演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.49,\"words\":146},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
