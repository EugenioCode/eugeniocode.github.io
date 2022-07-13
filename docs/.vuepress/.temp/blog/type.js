export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-0a83f2b9","v-7dbc0a3e","v-09aaddd7","v-c7cc0c8a","v-e90d85d4","v-5b001e19","v-5e980d34","v-5ff0f658","v-02b940ee","v-0e503981","v-d440f426"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-0a83f2b9","v-7dbc0a3e","v-09aaddd7","v-c7cc0c8a","v-e90d85d4","v-5b001e19","v-5e980d34","v-5ff0f658","v-02b940ee"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
