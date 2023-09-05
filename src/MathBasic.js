const verifyArgs = (...args) => {
  if (args.length < 2 || args.length > 2) {
    throw new Error('function can only be accept 2 parameters');
  }

  const [a, b] = args;
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('functions can only accept parameters of type number');
  }

  return [a, b];
};

const MathBasic = {
  add: (...args) => {
    const [a, b] = verifyArgs(...args);
    return a + b;
  },
  subtract: (...args) => {
    const [a, b] = verifyArgs(...args);
    return a - b;
  },
  multiply: (...args) => {
    const [a, b] = verifyArgs(...args);
    return a * b;
  },
  divide: (...args) => {
    const [a, b] = verifyArgs(...args);
    return a / b;
  },
};

module.exports = MathBasic;
