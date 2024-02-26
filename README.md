# What is TypeMate?

## Introduction

#### TypeMate is a

-   **Lightweight** and batteries included utility helper :fire:
-   **Typesafe** and Easy-to-debug Package :smile:
-   **Easy to Use** with your Framework of choice :toolbox:

## When to use

#### whenever you want to have a condition for a variable type or whenever you want to check if the parameter is a `number`, `string`, `array` or etc...

---

#### **TypeMate** will come to your assistance and make your life easier while coding your next unicorn app :smile:

# Getting Started

## Installation

#### The only thing you should do is install the package in your framework of choice

::: code-group

```bash [npm]
npm install type-mate
```

```bash [yarn]
yarn add type-mate
```

```bash [pnpm]
pnpm add type-mate
```

:::

## Usage

#### To use the utility functions you just have to import your desired utility and use it

#### all utilities are type safe and all type errors are handled precisely :fire:

```js
import { isOdd } from "@amomammadw/type-mate";

console.log(isOdd(42)); // returns false

console.log(isOdd("42")); // Error: Please Enter Numbers Only! // [!code error]

console.log(isOdd(41)); // returns true
```
