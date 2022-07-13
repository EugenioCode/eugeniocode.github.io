import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  { text: "工具", icon: "trowel", link: "/tools/" },
  {
    text: "笔记",
    icon: "circle-nodes",
    prefix: "/notes/",
    children: [
      {
        text: "前端开发",
        prefix: "FrontEnd/",
        children: [
          { text: "Html", icon: "edit", link: "html" },
          { text: "Vue", icon: "edit", link: "vue" },
          { text: "TypeScript", icon: "edit", link: "typescript" },
        ],
      },
      {
        text: "后端开发",
        prefix: "BackEnd/",
        children: [
          { text: "Egg", icon: "edit", link: "egg" },
          { text: "Mysql", icon: "edit", link: "mysql" },
        ],
      },
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
