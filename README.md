# CustomError

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
```
