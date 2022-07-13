import { defineClientConfig } from "@vuepress/client";
import Presentation from "/Users/jianjun.yang/Documents/blog_v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/jianjun.yang/Documents/blog_v2/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});