const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function (array) {
  const mult = array.reduce((a, b) => a * b, 1);
  return mult;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  } else {
    let array = [];
    for (i = 1; i <= a; i++) {
      array.push(i);
    }
    const mult = array.reduce((a, b) => a * b, 1);
    return mult;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
