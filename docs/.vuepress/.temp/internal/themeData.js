export const themeData = JSON.parse("{\"blog\":{\"description\":\"一个前端开发者\",\"intro\":\"/intro.html\",\"medias\":{\"Dingding\":\"https://example.com\",\"GitHub\":\"https://example.com\",\"Gmail\":\"https://example.com\"}},\"encrypt\":{\"config\":{\"/guide/encrypt.html\":[\"$2a$10$D5oC8AGEyPQ1i2KRpVNmvOTTznIOSObR7atTUON8shhbhDePQ2ZKe\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":[\"/\",{\"text\":\"工具\",\"icon\":\"creative\",\"prefix\":\"/tools/\",\"children\":[\"git.md\",\"npm.md\",\"mac.md\"]}],\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"收藏\",\"slides\":\"幻灯片\",\"encrypt\":\"加密\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"404msg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Jianjun.yang\"},\"logo\":\"/logo.svg\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"demo/src\",\"navbar\":[\"/\",{\"text\":\"工具\",\"icon\":\"creative\",\"link\":\"/tools/\"},{\"text\":\"笔记\",\"icon\":\"edit\",\"prefix\":\"/notes/\",\"children\":[{\"text\":\"前端开发\",\"icon\":\"edit\",\"prefix\":\"FrontEnd/\",\"children\":[{\"text\":\"Html\",\"icon\":\"edit\",\"link\":\"html\"},{\"text\":\"Vue\",\"icon\":\"edit\",\"link\":\"vue\"},{\"text\":\"TypeScript\",\"icon\":\"edit\",\"link\":\"typescript\"}]},{\"text\":\"后端开发\",\"icon\":\"edit\",\"prefix\":\"BackEnd/\",\"children\":[{\"text\":\"Egg\",\"icon\":\"edit\",\"link\":\"egg\"},{\"text\":\"Mysql\",\"icon\":\"edit\",\"link\":\"mysql\"}]}]},{\"text\":\"主题文档\",\"icon\":\"note\",\"link\":\"https://vuepress-theme-hope.github.io/v2/zh/\"}],\"footer\":\"默认页脚\",\"displayFooter\":true,\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
