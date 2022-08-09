const removeFromArray = function (array, ...number) {
  for (i = 0; i < number.length; i++) {
    const index = array.indexOf(number[i]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
