import { CustomError } from '../CustomError';

Object.defineProperty(Object, 'setPrototypeOf', { configurable: true, value: undefined });

test('Object.setPrototypeOf not found', () => {
  expect(Object.setPrototypeOf).toBeUndefined();
  class MyError extends CustomError {
    name = 'MyError';
  }
  const error = new MyError('hehe');
  expect(error instanceof Error).toBe(true);
  expect(error instanceof CustomError).toBe(true);
  expect(error instanceof MyError).toBe(true);
});
