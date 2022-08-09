const sumAll = function (n1, n2) {
  let array = [n1, n2];
  if (
    n1 < n2 &&
    n1 > 0 &&
    n2 > 0 &&
    typeof n1 == "number" &&
    typeof n2 == "number"
  ) {
    while (n1 < n2 - 1) {
      n2--;
      array.push(n2);
    }
    const sum = array.reduce((a, b) => a + b, 0);
    return sum;
  } else if (
    n1 > n2 &&
    n1 > 0 &&
    n2 > 0 &&
    typeof n1 == "number" &&
    typeof n2 == "number"
  ) {
    while (n2 < n1 - 1) {
      n1--;
      array.push(n1);
    }
    const sum = array.reduce((a, b) => a + b, 0);
    return sum;
    //   } else if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     return "ERROR";
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
