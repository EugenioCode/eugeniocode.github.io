---
title: Typescript
date: 2022-04-08
sidebar: false
outline: [2, 3]
tag:
 - Node
 - Typescript
category:
 - 前端
 - 笔记
---

# Typescript强制入门


## 一、 Typescript是什么

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

### TS与JS的区别

| Typescript | Javascript |
| :-----:| :----: |
| JavaScript 的超集用于解决大型项目的代码复杂性 | 一种脚本语言，用于创建动态网页 |
| 可以在编译期间发现并纠正错误 | 作为一种解释型语言，只能在运行时发现错误 |
| 强类型，支持静态和动态类型 | 弱类型，没有静态类型选项 |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 | 可以直接在浏览器中使用 |

### 环境配置

#### 安装Typescript
```shell
npm install -g typescript
```

#### 将ts转成js
```shell
tsc index.ts
```

#### 终端直接解析TS
```shell
npm install -g ts-node
```

## 二、Typescript语法基础

### 基础类型
```typescript
// 基础类型
const myName: string = 'hello'
const age: number = 30
const isMale: boolean = true
// 数组类型
const numberArr:number[] = [1, 3, 5]
const stringArr: string[] = ['1', '2']
const BooleanArr: Array<boolean> = [true, false]

// 对象类型
const user: {name: string, age: number} = {name: 'eugenio', age: 30}
const userOne: {name: string, age?: number} = {name: 'eugenio'}

// 联合类型
function union(id: string | number) {
    if(typeof id === 'string') {
        console.log(id.toUpperCase())
    }
}

// 类型别名
type typeUser = {name: string, age: number}
const userTwo: typeUser = {name: 'hello', age: 30}
const userThree: typeUser = {name: 'hello world', age: 20}

// any类型
function showMessage(message: any) {
    return message
}
// 函数类型
function abc(message: string): number {
    return 123
}
const def:(age: number) => number = (age: number) => {
    return 30
}

// 接口类型 interface
interface Student {
    age: number;
    sex?: string;
}
const student: Student = {age: 18, sex: 'male'}

interface OldStudent extends Student {
    name: string
}
const  oldStudent: OldStudent = {age: 18, sex:'male', name: 'hello'}

// 交叉类型
type User = {name: string, age: number}
type Employee = User & {salary: number}
const employee: Employee = {name: 'hello', age: 30, salary: 1}

// 断言
const dom: undefined = document.getElementById('#root') as undefined
const dom1: undefined = <undefined>document.getElementById('#root')
const testString: String = 123 as any as string

// 字面量类型
const str: 'ast' = 'ast'

function getPosition(position: 'right' | 'left'): string {
    return position
}

// null undefined
const testNull: null = null
const testUndefined: undefined = undefined

function checkNull(abc: string | null) {
    console.log(abc.toUpperCase())
}

// void
function getNumber():void {}
```



### 类型注解与类型推断

- 类型注解

  人为告知TS告知变量或者对象的明确属性类型
```typescript
const userName: string = 'eugenio'
```

- 类型推断
  
  如果类型推断能自动推断出类型，就没必要去手写类型注解

```typescript
const userAge = 30

function getTotal(x: number, y:number) {
    return x + y
}

```

