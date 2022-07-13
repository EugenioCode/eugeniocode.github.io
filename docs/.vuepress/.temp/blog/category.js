export const categoryMap = {"category":{"/":{"path":"/category/","map":{"工具":{"path":"/category/%E5%B7%A5%E5%85%B7/","keys":["v-09aaddd7","v-c7cc0c8a","v-5e980d34"]},"笔记":{"path":"/category/%E7%AC%94%E8%AE%B0/","keys":["v-0a83f2b9","v-7dbc0a3e","v-09aaddd7","v-c7cc0c8a","v-e90d85d4","v-5b001e19","v-5e980d34","v-5ff0f658","v-02b940ee"]},"软件":{"path":"/category/%E8%BD%AF%E4%BB%B6/","keys":["v-09aaddd7"]},"服务端":{"path":"/category/%E6%9C%8D%E5%8A%A1%E7%AB%AF/","keys":["v-e90d85d4","v-5b001e19"]},"数据库":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","keys":["v-5b001e19"]},"前端":{"path":"/category/%E5%89%8D%E7%AB%AF/","keys":["v-0a83f2b9","v-7dbc0a3e","v-5ff0f658","v-02b940ee"]},"APP开发":{"path":"/category/app%E5%BC%80%E5%8F%91/","keys":["v-0a83f2b9"]}}}},"tag":{"/":{"path":"/tag/","map":{"Git":{"path":"/tag/git/","keys":["v-5e980d34"]},"Mac":{"path":"/tag/mac/","keys":["v-09aaddd7"]},"Npm":{"path":"/tag/npm/","keys":["v-c7cc0c8a"]},"Node":{"path":"/tag/node/","keys":["v-7dbc0a3e","v-c7cc0c8a","v-e90d85d4"]},"Koa":{"path":"/tag/koa/","keys":["v-e90d85d4"]},"Egg":{"path":"/tag/egg/","keys":["v-e90d85d4"]},"React":{"path":"/tag/react/","keys":["v-0a83f2b9"]},"React Native":{"path":"/tag/react-native/","keys":["v-0a83f2b9"]},"IOS":{"path":"/tag/ios/","keys":["v-0a83f2b9"]},"Html":{"path":"/tag/html/","keys":["v-5ff0f658"]},"Typescript":{"path":"/tag/typescript/","keys":["v-7dbc0a3e"]},"Javascript":{"path":"/tag/javascript/","keys":["v-7dbc0a3e"]},"Vue":{"path":"/tag/vue/","keys":["v-02b940ee"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
