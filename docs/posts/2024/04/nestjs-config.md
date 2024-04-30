---
post: true
title: 【Nest.js】配置
date: 2024-04-01
sidebar: true
tags:
 - nodejs
 - nestjs
categories:
 - Nest.js

cover: 'https://oss.bytespace.site/uPic/nestjs.webp'

---

## Nodejs多环境配置比较

### `dotenv`
- 仓库地址：
[dotenv仓库](https://www.npmjs.com/package/dotenv)

- 安装：`npm install dotenv --save`

- 使用：

  创建`.env`文件
  ```.env
  S3_BUCKET="YOURS3BUCKET"
  SECRET_KEY="YOURSECRETKEYGOESHERE"
  ```
  获取`.env`配置
  ```ts
  require('dotenv').config()
  console.log(process.env)
  ```
  ```ts
  import * as dotenv from 'dotenv'
  dotenv.config()
  ```

> 优点：
1. 简化环境变量管理： dotenv 简化了环境变量的管理过程。通过将环境变量存储在 .env 文件中，你可以在一个地方管理所有的环境变量。
2. 与不同环境兼容： dotenv 可以根据当前环境加载不同的环境变量，比如开发、测试和生产环境，使得在不同环境中使用不同的配置变得更加容易。
3. 安全性： 使用 dotenv 将敏感信息（比如 API 密钥、密码等）存储在环境变量中，而不是直接硬编码在代码中，这有助于提高应用程序的安全性。
4. 易于集成： dotenv 可以轻松地集成到现有的 Node.js 项目中，并且不需要修改现有代码。

> 缺点：
1. 潜在的安全风险： 将敏感信息存储在 .env 文件中可能存在一定的安全风险，特别是在团队合作或者版本控制系统中共享代码时，需要注意确保 .env 文件的安全性。
2. 不适合所有情况： 对于一些特殊的情况，比如使用云服务提供商的环境变量管理工具，dotenv 可能并不是最佳选择。
3. 可能导致环境依赖性： 使用 dotenv 可能会导致应用程序对环境变量的依赖性增加，使得在不同环境中部署应用程序变得更加复杂。

### `config`
- 仓库地址：
[config仓库](https://www.npmjs.com/package/config)

- 安装：`npm install config --save`

- 获取`config`的配置
  ```ts
  const config = require('config')
  const dbConfig = config.get('db')
  ```
> 优点：

1. 简化配置管理： config 包使配置管理变得简单，你可以将所有配置信息集中存储在一个地方，并根据需要轻松访问。
2. 环境适应性： 它允许你根据环境变量或其他条件自动加载适当的配置文件，从而使你可以在不同的环境中使用不同的配置。
灵活性： config 包提供了许多灵活的功能，比如合并多个配置文件、设置默认值、动态修改配置等，使得配置管理更加灵活。
3. 支持多种格式： 它支持多种配置文件格式，包括 JSON、YAML、INI 和 JavaScript，让你可以根据自己的喜好选择配置文件格式。

> 缺点：

1. 依赖性： 使用 config 包意味着你的项目会依赖于这个包，如果这个包有更新或者出现了问题，可能会影响到你的项目。
2. 可能引入复杂性： 对于小型项目来说，config 包可能会引入不必要的复杂性，因为它提供了许多高级功能，而这些功能对于简单的项目来说可能并不需要。
3. 配置文件增加维护成本： 尽管将配置信息集中存储在一个地方可以简化配置管理，但也会增加维护配置文件的成本，特别是在项目规模增大或者配置文件格式复杂的情况下。

## Nestjs推荐`@nestjs/config`

### 最简单的用法

- 安装`@nest/config`

  ```shell
  npm install @nest/config --save
  ```

- 配置`src/app.module.ts`

  ````ts
  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { ConfigModule } from '@nestjs/config';

  @Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [AppService]
  })
  export class AppModule {}
  ````
- 创建`.env`文件

  ```.env
  DATABASE_USER=test
  DATABASE_PASSWORD=test123
  ```
- 在`src/app.controller.ts`中使用

  ```ts
  import { Controller, Get } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {
    constructor(
      private readonly appService: AppService,
      private configService: ConfigService,
    ) {}

    @Get()
    getHello(): string {
      const dbUser = this.configService.get<string>('DATABASE_USER');
      console.log(dbUser);
      return this.appService.getHello();
    }
  }
  ```

### 进阶用法
![img](https://static.www.toimc.com/blog/picgo/2022/10/21/200-84b8b3.webp)
`ConfigModuleOptions`支持的参数如下：
```ts
export interface ConfigModuleOptions {
    cache?: boolean;
    isGlobal?: boolean;
    ignoreEnvFile?: boolean;
    ignoreEnvVars?: boolean;
    envFilePath?: string | string[];
    encoding?: string;
    validate?: (config: Record<string, any>) => Record<string, any>;
    validationSchema?: any;
    validationOptions?: Record<string, any>;
    load?: Array<ConfigFactory>;
    expandVariables?: boolean;
}
```
#### 区分不同的环境


- 利用`envFilePath`配合`NODE_ENV`来配置不同启动命令使用不同的配置

  ```bash
  npm i cross-env
  ```
- 添加两个文件`.env.development`和`.env.production`
  ```bash
  DB=mysql-dev
  DB_HOST=127.0.0.1
  ```
  ```bash
  DB=mysql-prod
  DB_HOST=127.0.0.1
  ```
- 修改`package.json`中的启动命令
  ```bash
  "start:dev": "cross-env NODE_ENV=development nest start --watch",
  ```
  ```bash
  "start:prod": "cross-env NODE_ENV=production node dist/main",
  ```
- 在`app.module.ts`中设置环境变量，默认是`development`：
  ```ts
  const envPath = `.env.${process.env.NODE_ENV || 'development'}`;
  console.log('🚀 ~ file: app.module.ts ~ envPath', envPath);
  @Module({
    imports: [
      ConfigModule.forRoot({
        envFilePath: envPath,
      }),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
  ```

#### 读取公共配置

>如果需要读取公共的`.env`文件，则需要使用到`ConfigModule.forRoot`的`load`方法

- 安装`pnpm i dotenv`依赖

- 修改`app.module.ts`
  ```ts
  import { Module } from '@nestjs/common';
  import { UserModule } from './user/user.module';
  import { ConfigModule } from '@nestjs/config';
  import * as dotenv from 'dotenv';
  
  const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;
  
  @Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath,
        // 这里新增.env的文件解析
        load: [() => dotenv.config({ path: '.env' })],
      }),
      UserModule,
    ],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
  ```
- 配置`.env`文件
  ```bash
  DB=mysql
  DB_HOST=127.0.0.1
  DB_URL=www.imooc.com
  ```
- 设置测试：

  ```ts
  const url = this.configService.get('DB_URL');
  console.log(
    '🚀 ~ file: user.controller.ts ~ url',
    url,
  );
  ```
#### 公共配置数据校验
>配置验证，主要是指在应用程序启动时，如果没有提供所需的环境变量或不符合某些验证规则，就会抛出一个异常。

- 安装依赖

  ```shell
  pnpm install --save joi
  ```
- 定义验证Schema

```ts
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB: Joi.string().required(),
        DB_HOST: Joi.string().required().ip(),
        DB_URL: Joi.string().domain(),
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
```


