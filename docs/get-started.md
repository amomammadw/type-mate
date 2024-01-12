# Getting Started :book:

## Installation :jigsaw:

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

## Usage :key:

#### To use the utility functions you just have to import your desired utility and use it

#### all utilities are type safe and all type errors are handled precisely :fire:

```js
import { isOdd } from "type-mate";

console.log(isOdd(42)); // returns false

console.log(isOdd("42")); // Error: Please Enter Numbers Only! // [!code error]

console.log(isOdd(41)); // returns true
```
