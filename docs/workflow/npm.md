---
title: NPM
date: 2022-03-21
sidebar: false
outline: [2, 3]
tag:
 - NPM
 - Node
category:
 - workflow
---
# 列举一些实用的NPM包

## 1. 切换`npm`源的工具 —— `nrm`

### 1.1 `nrm`的安装

```bash
npm install -g nrm
```

### 1.2 查看可选npm源

```bash
nrm ls
```

![可选的npm源](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321225239.png)

### 1.3 切换npm源

```bash
nrm use npm
```

![切换npm源](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321225525.png)

### 1.4 增加npm源

```bash
nrm add <name> <url>
```

### 1.5 删除npm源

```bash
nrm del <name>
```

### 1.6 测试npm源速度

```bash
nrm test [<name>]
```

![测试npm源速度](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321230122.png)

## 2. ~~（弃用）切换`node`版本的工具 —— `n`~~

### 2.1 安装 `n`

```shell
npm install -g n
```
### 2.2 查看可用的 `node` 版本
```shell
n 
```
![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220624180809.png)
### 2.3 基本命令
```shell
// 稳定版本
n stable
 
// 最新版
n lastest
 
// 指定版本
n 16.15.1

// 删除指定版本
sudo n rm 16.15.1
```
## 3. 切换`node`版本的工具 —— `fnm`

### 3.1 安装 `fnm`
```shell
brew install fnm
```

### 3.2 配置 `fnm` 所需的环境变量到 `bash` 或 `zsh` 配置文件中，以 `zsh`为例
```shell
fnm env --use-on-cd >> ~/.zshrc
```

### 3.3 用 `fnm` 安装 Node
```shell
# 安装 LTS 版本
fnm install --lts

# 安装指定大版本的最新版本
fnm install 18

# 安装指定版本
fnm install 18.21.1
```
### 3.4 通过 `fnm` 来指定 Node 版本
```shell
# 使用系统版本
fnm use system

# 使用 fnm 所安装，且版本号为 18.21.1 的 Node 程序
fnm use 18.21.1

# 使用 fnm 所安装，且主版本号为 18 的最新版本的 Node 程序
fnm use 18

# 指定默认版本
fnm default 18.21.1
```

### 3.5 卸载`fnm`
```shell
brew uninstall fnm

# 移除 ~/.fnm 目录
rm -rf ~/.fnm

# 移除 .bash 或 .zsh 的配置文件中与 fnm 相关的配置
```


