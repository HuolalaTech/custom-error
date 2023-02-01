import { CustomError } from './CustomError';

describe('CustomError', () => {
  class MyError extends CustomError {
    name = 'MyError';
  }

  const error = new MyError('hehe');

  test('instanceorf Error', () => {
    expect(error instanceof Error).toBe(true);
  });

  test('instanceorf CustomError', () => {
    expect(error instanceof CustomError).toBe(true);
  });

  test('instanceorf MyError', () => {
    expect(error instanceof MyError).toBe(true);
  });

  test('toStringTag must be Error', () => {
    expect(Object.prototype.toString.call(error)).toBe('[object Error]');
  });

  test('name override', () => {
    expect(error.name).toBe('MyError');
  });

  test('constructor', () => {
    expect(error.constructor).toBe(MyError);
  });

  test('stack', () => {
    expect(typeof error.stack).toBe('string');
  });

  test('message', () => {
    expect(error.message).toBe('hehe');
  });

  const error2 = new MyError();
  test('empty message', () => {
    expect(error2.message).toBe('');
  });

  test("call directly without 'new'", () => {
    expect(() => {
      const myError: any = MyError;
      myError();
    }).toThrowError(TypeError);
  });

  test('throw', () => {
    expect(() => {
      throw error;
    }).toThrowError(MyError);
  });

  test('static property', () => {
    (Error as any).a = 1;
    expect((TypeError as any).a).toBe(1);
    expect((MyError as any).a).toBe(1);
    (Error as any).a = 2;
    expect((MyError as any).a).toBe(2);
    delete (Error as any).a;
    expect((MyError as any).a).toBe(undefined);
  });
});
