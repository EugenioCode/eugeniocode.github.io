---
title: 浏览器相关
date: 2023-08-24
sidebar: false
tag:
 - 浏览器
category:
 - 前端
 - 笔记
---

:::tip
当浏览器内多页面发生跳转时，无法保证当前页面进程内的请求能够顺利完成，大多数情况下，这些请求会被浏览器 cancled，此时请求还未到达后端服务器。这些请求的可靠性可能取决于以下几点：网络连接速度、应用程序性能，甚至外部服务本身的配置。
:::

# 浏览器相关

## 在用户离开页面时可靠地发送 HTTP 请求

- fetch 提供了 keepalive 参数

```javascript
document.getElementById('link').addEventListener('click', (e) => {
  fetch("/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      name: 'FedJavaScript'
    }),
    keepalive: true
  });
});
```