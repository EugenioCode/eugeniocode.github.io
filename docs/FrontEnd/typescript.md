---
title: Typescript
date: 2022-04-08
sidebar: false
outline: [1, 4]
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

### 原始类型

#### Boolean 布尔类型

布尔类型就是简单的 `true / false` 值
```ts
const isMale: boolean = true
```
#### String 字符串类型
```ts
// 基础类型
const myName: string = 'hello'
```
#### number 数字类型
```ts
const age: number = 30
```

#### 数组类型
  通过**类型** + **方括号**定义数组类型：
```ts
const numberArr:number[] = [1, 3, 5]
const stringArr: string[] = ['1', '2']

```
通过**泛型**定义数组类型：
```ts
const BooleanArr: Array<boolean> = [true, false]
```

#### 对象类型
```ts
const user: {name: string, age: number} = {name: 'eugenio', age: 30}
const userOne: {name: string, age?: number} = {name: 'eugenio'}
```
***
> 对象类型补充

- `interface`中的`readonly`属性
```ts
interface Person {
    readonly name: string;
    readonly age: number;
}
const hello: Person = {
    name: 'eugenio',
    age: 30
}
```
- 给对象拓展属性

***


#### 联合类型
```ts
function union(id: string | number) {
    if(typeof id === 'string') {
        console.log(id.toUpperCase())
    }
}
```
#### 类型别名
```ts
// 类型别名
type typeUser = {name: string, age: number}
const userTwo: typeUser = {name: 'hello', age: 30}
const userThree: typeUser = {name: 'hello world', age: 20}
```
#### any 类型
```ts
function showMessage(message: any) {
    return message
}
```
#### 函数类型
```ts
function abc(message: string): number {
    return 123
}
const def:(age: number) => number = (age: number) => {
    return 30
}
```
***
> 函数类型补充

- 有属性的函数类型定义方法
```ts
interface FunctionWithAttributes {
    attr: string;
    (): void
}
const test3: FunctionWithAttributes = (str: string) => {
    console.log(str)
}
test3.attr = 'attributes'
```
- 构造函数的类型如何定义
```ts
interface ClassWithConstructor {
    new (str: string):void
}
function testOne(outerClass: ClassWithConstructor) {
    const instance = new outerClass('new')
}

class TestOne {
    name: string
    constructor(str: string) {
        this.name = str
    }
}
testOne(TestOne)
```
- 函数与泛型
```ts
function getArrayFirstItem<T>(array: T[]):T {
    return arr[0]
}
const numberResult = getArrayFirstItem([1,2,3])
const stringResult = getArrayFirstItem(['1','2','3'])
```
- 函数重载

***
#### 接口类型 interface
```ts
interface Student {
    age: number;
    sex?: string;
}
const student: Student = {age: 18, sex: 'male'}

interface OldStudent extends Student {
    name: string
}
const  oldStudent: OldStudent = {age: 18, sex:'male', name: 'hello'}
```
#### 交叉类型
```ts
type User = {name: string, age: number}
type Employee = User & {salary: number}
const employee: Employee = {name: 'hello', age: 30, salary: 1}
```
#### 类型断言
```ts
const dom: undefined = document.getElementById('#root') as undefined
const dom1: undefined = <undefined>document.getElementById('#root')
const testString: String = 123 as any as string
```
#### 字面量类型
```ts
const str: 'ast' = 'ast'

function getPosition(position: 'right' | 'left'): string {
    return position
}
```
#### null和undefined
```ts
const testNull: null = null
const testUndefined: undefined = undefined

function checkNull(abc: string | null) {
    console.log(abc.toUpperCase())
}
```
#### void类型
```ts
function getNumber():void {}
```



### 类型注解与类型推断
-  **类型注解**: 显式指定变量的类型
```typescript
const userName: string = 'eugenio'
```

-  **类型推断**: 由 `TypeScript` 根据上下文内容自动推断出变量类型

```typescript
const userAge = 30

function getTotal(x: number, y:number) {
    return x + y
}
```

### 类型收窄
#### typeof 类型收窄
```ts
function uppercase(content: string | number) {
    if(typeof content === 'string') {
        return content.toUpperCase()
    }
    return content;
}
```
#### 真值收窄
```ts
function getString(content?: string) {
    if(typeof content === 'string') {
        if(content) {
            return content.toUpperCase()
        }
    } 
}
```
#### 相等收窄
```ts
function example(x: number | string, y: string | boolean) {
    if(x === y) {
        return x.toUpperCase()
    }
}
```

#### In 语法下的类型收窄
```ts
type Fish = {swim: () => {}}
type Bird = {fly: () => {}}
function test(animal: Fish | Brid) {
    if('swim' in animal) {
        return animal.swim()
    }
    return animal.fly()
}
```

#### Instanceof 语法下的类型收窄
```ts
function test1(param: Date | string) {
    if(param instanceof Date) {
        return param.getTime()
    }
    return param.toUpperCase()
}
```
