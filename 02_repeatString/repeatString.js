const repeatString = function (word, number) {
  let array = [];
  if (number >= 0 && word.length != 0) {
    for (i = 0; i < number; i++) {
      array.push(word);
    }
  } else if (number >= 0 && word.length === 0) {
    array = [];
  } else {
    array = ["ERROR"];
  }

  return array.join("");
};

// Do not edit below this line
module.exports = repeatString;
