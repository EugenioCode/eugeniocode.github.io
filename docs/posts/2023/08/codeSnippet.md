---
title: 常用代码片段
date: 2023-08-24
sidebar: false
tags:
 - 代码片段
categories:
 - workflow

cover: https://oss.bytespace.site/uPic/2f0821cc8bd14b7d9dac3385269d5d03.jpeg
---

# 常用代码片段

## 环境判断

```javascript
const UA = window.navigator.userAgent.toLowerCase()

// Android
const isAndroid = /android/.test(UA)

// IOS
const isIOS = /iphone|ipad|ipod|ios/.test(UA)

// 浏览器环境
const inBrowser = typeof window !== 'undefined'

// IE
const isIE = /msie|trident/.test(UA)

// Edge
const isEdge = UA.indexOf('edge/') > 0

// Chrome
const isChrome = /chrome\/\d+/.test(UA) && !isEdge

// 微信
const isWeChat = /micromessenger/.test(UA)

// 移动端
const isMobile = 'ontouchstart' in window
```

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
