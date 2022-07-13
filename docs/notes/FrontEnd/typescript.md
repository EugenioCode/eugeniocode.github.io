---
title: Typescript
date: 2022-04-08
sidebar: false
tag:
 - Node
 - Typescript
 - Javascript
category:
 - 前端
 - 笔记
---

# Typescript入门


## 一、 Typescript是什么

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

### 1.1 TS与JS的区别

| Typescript | Javascript |
| :-----:| :----: |
| JavaScript 的超集用于解决大型项目的代码复杂性 | 一种脚本语言，用于创建动态网页 |
| 可以在编译期间发现并纠正错误 | 作为一种解释型语言，只能在运行时发现错误 |
| 强类型，支持静态和动态类型 | 弱类型，没有静态类型选项 |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 | 可以直接在浏览器中使用 |

### 1.2 环境配置

#### 1. 安装Typescript
```bash
npm install -g typescript
```

#### 2. 将ts转成js
```bash
tsc index.ts
```

## 二、Typescript基本类型

### 2.1 Boolean类型
```ts
let isSuccess: boolean = true;
let isError: boolean = false;
```
### 2.2 Number类型
```ts
let count: number = 123;
```
### 2.3 String类型
```ts
let name: string = 'eugenio code'
```

### 2.4 Array类型
```ts
let list: number[] = [1, 2, 3]

let newList: Array<number> = [4, 5, 6] // 泛型方式定义数组
```

### 2.5 Tuple类型

>数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组

元组可用于定义具有有限数量的未命名属性的类型
```ts
let tupleType: [number, string, boolean]

tupleType = [123, 'helloworld', false]
```

### 2.6 Enum类型

>使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。
1. 数字枚举
   ```ts
   enum Direction {
    Sunday,
    Monday,
    Friday
   }

   let dir0: Direction = Direction.Sunday // 0
   let dir1: Direction = Direction.Monday // 1
   let dir2: Direction = Direction.Friday // 2
   ```
   已上代码对应的ES5代码如下：
   ```js
   "use strict";
    var Direction;
    (function (Direction) {
        Direction[Direction["Sunday"] = 0] = "Sunday";
        Direction[Direction["Monday"] = 1] = "Monday";
        Direction[Direction["Friday"] = 2] = "Friday";
    })(Direction || (Direction = {}));
    let dir0 = Direction.Sunday; // 0
    let dir1 = Direction.Monday; // 1
    let dir2 = Direction.Friday; // 2
   ```
2. 字符串枚举
   ```ts
   enum Direction {
     Sunday = "Sunday_enum",
     Monday = "Monday_enum",
     Friday = "Friday_enum"
   }

   let dir: Direction = Direction.Sunday // Sunday_enum
   ```
3. 常量枚举
   
   >除了数字枚举和字符串枚举之外，还有一种特殊的枚举 —— 常量枚举。它是使用 `const` 关键字修饰的枚举，常量枚举会使用内联语法，不会为枚举类型编译生成任何 JavaScript。
   ```ts
   const enum Direction {
    Sunday,
    Monday,
    Friday
   }

   let dir0: Direction = Direction.Sunday // 0
   let dir1: Direction = Direction.Monday // 1
   let dir2: Direction = Direction.Friday // 2
   ```
   已上代码对应的ES5代码如下：
   ```js
   "use strict";
   let dir0 = 0 /* Sunday */; // 0
   let dir1 = 1 /* Monday */; // 1
   let dir2 = 2 /* Friday */; // 2
   ```

4. 异构枚举
   >异构枚举的成员值是数字和字符串的混合
   ```ts
   enum Enum {
     A,
     B,
     C = "C",
     D = "D",
     E = 8,
     F,
   }

   let a1:Enum = Enum.A  // 0
   let a2:Enum = Enum[0] // "A"

   let c:Enum = Enum.C // "C"

   let e1:Enum = Enum.E // 8
   let e2:Enum = Enum[8] // "E"
   ```
   >异构枚举中数字枚举相对字符串枚举多了"反向映射"

### 2.7 Any类型
>在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）。
```ts
let notSure: any = 666;
notSure = "semlinker";
notSure = false;
```

### 2.8 Null与Undefined类型

>TypeScript 里，`undefined` 和 `null` 两者有各自的类型分别为 `undefined` 和 `null`
```ts
let u: undefined = undefined;
let n: null = null;
```

### 2.9 Void类型
>void 类型某种程度上是与 any 类型相反的，它表示没有任何类型。当一个函数没有返回值时，通常会见到其返回值类型是 void
```ts
function getConsole():void {
 console.log('this is a ts demo')
}
```

### 2.10 Never类型
>never 类型表示的是那些永不存在的值的类型
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
```

## 三、Typescript 断言

### 3.1 类型断言
>有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

类型断言有两种形式：
- '<>'语法
   ```ts
   let someValue: any = "this is a string";
   let strLength: number = (<string>someValue).length;
   ```
- 'as'语法
  ```ts
   let someValue: any = "this is a string";
   let strLength: number = (someValue as string).length;
   ```

### 3.2 非空断言
>在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 `!` 可以用于断言操作对象是非 `null` 和非 `undefined` 类型。

```ts
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}
```

## 四、Typescript 类型守护
### 4.1 `in` 关键字
```ts
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

```
### 4.2 `typeof` 关键字
>typeof 类型保护只支持两种形式：`typeof v === "typename"` 和 `typeof v !== typename`，`"typename"` 必须是 `"number"`， `"string"`， `"boolean"` 或 `"symbol"`。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```



