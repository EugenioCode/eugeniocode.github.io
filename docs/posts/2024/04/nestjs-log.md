---
post: true
title: 【Nest.js】日志收集
date: 2024-04-11
sidebar: true
tags:
 - nodejs
 - nestjs
categories:
 - Nest.js

cover: 'https://oss.bytespace.site/uPic/nestjs.webp'

---


## Log日志简介

### Log日志等级

- Log: 通用日志，按需进行记录（打印）
- Warning: 警告日志，比如，尝试多次进行数据库操作
- Error: 严重日志，比如，数据库异常
- Debug: 调试日志，比如，加载数据日志
- Verbose: 详细日志，所有的操作与详细信息（非必要不打印）

### 功能分类日志

- 错误日志 -> 方便定位问题，给用户友好提示
- 调试日志 -> 方便开发
- 请求日志 -> 记录敏感行为

### 日志记录位置
- 控制台日志 -> 方便监看（调试用）
- 文件日志 -> 方便回溯与追踪（24小时滚动）
- 数据库日志 -> 敏感操作、敏感数据记录

### NestJS中记录日志

|      | Log     | Error    | Warning | Debug  | Verbose | API     |
| ---- | ------- | ------- | ------- | ------ | ------- | ------- |
| Dev  | &check; | &check; | &check; | &check;| &check; | &cross; |
| Staging | &check; | &check; | &check; | &cross;| &cross; | &cross; |
| Prod | &check; | &check; | &cross; | &cross;| &cross; | &check; |
| 位置  | console | 文件/DB  | console/文件 | console/文件| console | console/DB |
