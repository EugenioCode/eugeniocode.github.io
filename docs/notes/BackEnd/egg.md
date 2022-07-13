---
title: Egg.js
date: 2022-03-18
sidebar: false
tag:
- Node
- Koa
- Egg
category:
 - 服务端
 - 笔记
---
:::tip
Egg.js为企业级框架和应用而生的Node.js框架，Egg（简写）奉行【约定优于配置】的框架，按照一套同意的约定进行应用开发。
:::

<!-- more -->

##  一、 Egg.js项目创建与项目结构

### 1.1 安装
  ```bash
  mkdir egg-example && cd egg-example
  npm init egg --type=simple
  npm i
  ```

  :::danger
  如果项目报如下错 `ESLint couldn't find the plugin "eslint-plugin-jsdoc".`，先升级`npm`版本，保证`npm`版本大于`8.1.2`；删除 `node_modules`文件夹以及`pageage-lock.json`文件，重新`npm install`即可解决。
  :::

  ```bash
  npm run dev
  ```
### 1.2 项目目录
```bash
- app                        - 项目开发的主目录，工作中的代码几乎都写在这里面
-- controller                -- 控制器目录，所有的控制器都写在这个里面
-- router.js                 -- 项目的路由文件
- config                     - 项目配置目录，比如插件相关的配置
-- config.default.js         -- 系统默认配置文件
-- plugin.js                 -- 插件配置文件
- logs                       -- 项目启动后的日志文件夹
- node_modules               - 项目的运行/开发依赖包，都会放到这个文件夹下面
- test                       - 项目测试/单元测试时使用的目录
- run                        - 项目启动后生成的临时文件，用于保证项目正确运行
- typings                    - TypeScript配置目录，说明项目可以使用TS开发
- .eslintignore              - ESLint配置文件
- .eslintrc                  - ESLint配置文件，语法规则的详细配置文件
- .gitignore                 - git相关配置文件，比如那些文件归于Git管理，那些不需要
- jsconfig.js                - js配置文件，可以对所在目录下的所有JS代码个性化支持
- package.json               - 项目管理文件，包含包管理文件和命令管理文件
- README.MD                  - 项目描述文件  
```
### 1.3 Egg.js的Controller的使用
> Controller，也就是控制器，简单说Controller负责解析用户的输入，处理后返回相应的结果。

  ![controller](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223024.png)
  - 配置页面的路由
    ```bash
    # app/router.js
    router.get('/list', controller.list.list);
    ```
    ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223340.png)

## 二、请求与传参

### 2.1 路由params传参

  > 在router中通过 `:id`，接受参数
  ```bash
   # app/router.js
   router.get('/list/page/:id', controller.list.page);
   ```
   > 在controller中，通过`ctx.params`拿参数
   ```javascript
   async page() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = `pageIndex: ${id}`;
  }
   ```
  ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322225753.png)

### 2.2 query的形式传参
```bash
 # app/router.js
 router.get('/list/page2', controller.list.page2);
 ```
 > 在controller中，通过`ctx.query`拿参数
```js
async page2() {
    const { ctx } = this;
    const page = ctx.query.page;
    ctx.body = `pageIndex: ${page}`;
  }
```
![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230039.png)
### 2.3 返回状态码设置
> 通过`ctx.status`修改状态码
```js
ctx.status = 201;
```
![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230545.png)

### 2.4 post请求
- 配置csrf跨域相关配置
  
  安装跨域插件

  ```bash
  npm i egg-cors --savew
  ```

  配置config下的plugin.js

  ```js
  'use strict';

  /** @type Egg.EggPlugin */
  module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    cors: {
      enable: true,
      package: 'egg-cors',
    },
  };
  ```

  配置config下的config.default.js

  ```javascript
  // config.default.js
  const userConfig = {
    // 关闭crsf,开启跨域
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [],
    },
    // 允许跨域方法
    cors: {
      origin: '*',
      allowMethods: 'GET, PUT,  POST, DELETE, PATCH',
    },
  };
  ```

- post请求的参数
  > 在controller中，通过 ctx.request.body 拿参数
  ```js
  async createUser() {
    const { ctx } = this;
    console.log(ctx.request.body, 'post传参');
    const { username, age } = ctx.request.body;
    const result = { username, age };
    ctx.body = {
      code: 200,
      result,
      message: 'success',
    };
  }
  ```
  ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220324232947.png)

### 2.5 编写Service服务

## 三、Cookie与Session

## 四、 Egg.js的中间件

## 五、 Egg.js的Extend

## 六、 Egg.js的定时任务

## 七、Mysql查询