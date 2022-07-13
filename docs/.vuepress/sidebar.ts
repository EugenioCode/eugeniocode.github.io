import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  // "/home",
  // "/slide",
  // {
  //   text: "工具",
  //   icon: "creative",
  //   prefix: "/tools/",
  //   // link: "/guide/",
  //   children: ['git.md', 'npm.md', 'mac.md'],
  // },
  {
    text: "Git",
    icon: "code-fork",
    link: "/tools/git.md",
  },
  {
    text: "NPM",
    icon: "npm",
    link: "/tools/npm.md",
  },
  {
    text: "Mac",
    icon: "apple-core",
    link: "/tools/mac.md",
  },
  // {
  //   text: "笔记",
  //   icon: "note",
  //   prefix: "/notes/",
  //   children: [
  //     {
  //       text: "前端",
  //       icon: "note",
  //       collapsable: true,
  //       prefix: "FrontEnd/",
  //       children: ["html", "vue", "typescript", "ReactNative"],
  //     },
  //     {
  //       text: "后端",
  //       icon: "note",
  //       collapsable: true,
  //       prefix: "BackEnd/",
  //       children: ["egg", "mysql"],
  //     },
  //   ],
  // },
]);
