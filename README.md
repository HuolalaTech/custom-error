# CustomError · [![LICENSE](https://img.shields.io/npm/l/@huolala-tech/custom-error)](LICENSE.txt) [![codecov](https://codecov.io/gh/HuolalaTech/custom-error/branch/main/graph/badge.svg?token=I2EU9MD3AK)](https://codecov.io/gh/HuolalaTech/custom-error)

Used to fix the odd behaviors of native Error object inheritance code compiled to ES5.

## Why?

If your code is compiled to ES5 target, you may encounter an unexpected behavior.

```typescript
class MyError extends Error {
  // blah blah blah
}

const error = new MyError();

console.log(error instanceof Error); // true
console.log(error instanceof MyError); // false <!-- should be true
```

see https://babeljs.io/docs/en/caveats/#classes

## Include

```bash
yarn add @huolala-tech/custom-error
```

or

```bash
npm install @huolala-tech/custom-error --save
```

## Use the CustomError

```typescript
import { CustomError } from '@huolala-tech/custom-error';

class MyError extends CustomError {
  // blah blah blah
}

const error = new MyError();

console.log(error instanceof Error); // true
console.log(error instanceof MyError); // true
console.log(error instanceof CustomError); // true
console.log(Object.prototype.toString.call(error)); // [object Error]
```
