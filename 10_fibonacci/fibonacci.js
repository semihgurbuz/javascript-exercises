const fibonacci = function (n) {
  n++;
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else if (n >= 3) {
    output = [0, 1];
    for (var i = 3; i <= n; i++) {
      output.push(output[i - 3] + output[i - 2]);
    }
  } else {
    return "OOPS";
  }
  return output[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
