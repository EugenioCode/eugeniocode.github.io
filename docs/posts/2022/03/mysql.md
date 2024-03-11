---
title: Mysql入门
date: 2022-03-18
sidebar: false
tags:
 - Node
 - Mysql
categories:
 - 数据库
 
cover: https://oss.bytespace.site/uPic/15be0eaaf254b701da2cecb3731141ccdcad95d5.png
---
:::tip
MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。
:::
<!-- more -->

# Mysql使用
## 一、基础知识
### 1.1 概念
- MySQL 是开源的，目前隶属于 Oracle 旗下产品。
- MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。
- MySQL 使用标准的 SQL 数据语言形式。
- MySQL 可以运行于多个系统上，并且支持多种语言。

### 1.2 RDBMS 术语
![RDMBS](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220319223457.png)

- 数据库: 数据库是一些关联表的集合。
- 数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
- 列: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。
- 行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
- 主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。

## 二、Mysql使用

### 2.1 mysql连接
```bash
mysql -u root -p
```
### 2.2 创建数据库
```bash
create database <要创建的数据库名>;
```
> 创建 `newtable` 数据库
```sql
create database newtable;
```
### 2.3 查看已有的数据库
```sql
show databases;
```
控制台会打印出已经创建的数据库
```sql
+--------------------+
| Database           |
+--------------------+
| eggapi             |
| information_schema |
| mailsystem         |
| mysql              |
| newtable           |
| performance_schema |
| sys                |
+--------------------+
7 rows in set (0.00 sec)
```

### 2.4 删除数据库
```bash
drop database <数据库名>;
```
> 删除 `newtable` 数据库
```sql
drop database newtable;
```

### 2.5 选择数据库
```bash
use <数据库名>
```
> 使用 `eggapi` 数据库
```sql
use eggapi;
```
### 2.6 创建数据表
```bash
CREATE TABLE table_name (column_name column_type);
```
> 创建名为 `newtable` 的 数据表
```sql
CREATE TABLE IF NOT EXISTS `newtable` (
 `id` INT UNSIGNED AUTO_INCREMENT,
 `title` VARCHAR(100) NOT NULL,
 `author` VARCHAR(40) NOT NULL,
 PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 2.7 删除数据表
```bash
drop table <table_name>;
```
> 删除 `newtable` 数据表
```sql
drop table newtable;
```


