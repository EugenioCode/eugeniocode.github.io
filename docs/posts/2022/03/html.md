---
post: true
title: HTML、JS、CSS 整理与采坑记录
date: 2022-03-16
sidebar: false
tags:
 - Html
categories:
 - HTML
 - CSS

cover: https://oss.bytespace.site/uPic/15234241296878340.jpg
---

# HTML、JS、CSS 整理与采坑记录

## HTML
 ### Image标签
 
 #### srcset与sizes的作用
  - 介绍

    响应式页面中经常用到根据屏幕密度设置不同的图片。这个时候肯定会用到image标签的srcset属性。srcset属性用于设置不同屏幕密度下，image自动加载不同的图片。用法如下：
  
    ```html
    <img src="image-128.png" srcset="image-128.png 1x, image-256.png 2x" />
    ```
    使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。

  - 新标准
    按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片的话，太麻烦了。所以就有了新的srcset标准。
    ```html
    <img src="image-128.png" srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w" sizes="(max-width: 360px) 340px, 128px" />
    ```
    其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。
对于srcset里面出现了一个w单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用，当然，浏览器会自动选择一个最小的可用图片。

## JAVASCRIPT

### Javascript遍历dom时报错
```js
  const ele = document.getElementsByClassName("pdp-bubbles")
  ele.forEach(e => {
    e.classList.add("hidden");
  });
```
控制台报错如图：
![Bd5XdH](https://oss.bytespace.site/uPic/Bd5XdH.png)

> 解决方案
1. 加上一行代码`Array.from(ele)`。

`Array.from()`方法就是讲一个类对象数组或者可遍历对象转换成真正的数组。
```js
  const ele = document.getElementsByClassName("pdp-bubbles")
  Array.from(ele).forEach(e => {
    e.classList.add("hidden");
  });
```
2. 使用`document.querySelectorAll()`获取dom元素
```js
  const ele = document.querySelectorAll("pdp-bubbles")
  ele.forEach(e => {
    e.classList.add("hidden");
  });
```






