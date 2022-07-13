import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/jianjun.yang/Documents/blog_v2/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/Users/jianjun.yang/Documents/blog_v2/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("/Users/jianjun.yang/Documents/blog_v2/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("/Users/jianjun.yang/Documents/blog_v2/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
