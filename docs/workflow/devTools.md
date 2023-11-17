---
title: 前端调试
date: 2023-08-24
sidebar: false
tag:
 - 调试
category:
 - 前端
 - workflow
---

# 前端调试技巧

## Charles本地代理到线上环境

> 场景：发布在生产环境或者测试环境的代码需要使用本地的代码进行联调

- 使用Charles的`Map Remote`来设置代理
![hs2YE9](https://oss.bytespace.site/uPic/hs2YE9.png)

- 通过配置本地与远程的映射关系来实现代理
![sqvbjT](https://oss.bytespace.site/uPic/sqvbjT.png)

**远程的地址映射需要使用通配符，本地的映射地址不需要使用通配符，否则会代理不成功**