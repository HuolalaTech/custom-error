function setPrototypeOf(obj, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(obj, proto);
  } else {
    obj.__proto__ = proto;
  }
}

function CustomError(message) {
  if (this instanceof CustomError) {
    var error = new Error(message);
    setPrototypeOf(error, this.constructor.prototype);
    return error;
  } else {
    throw new TypeError("Constructor CustomError requires 'new'");
  }
}

CustomError.prototype = Object.create(Error.prototype, {
  name: { writable: true, configurable: true, value: 'CustomError' },
  constructor: { writable: true, configurable: true, value: CustomError },
});

setPrototypeOf(CustomError, Error);

exports.CustomError = CustomError;
