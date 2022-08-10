const palindromes = function (string) {
  let newString = string.split("").reverse().join("");

  let finalString = string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let finalNewString = newString
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const check =
    finalString.replace(/\s/g, "") === finalNewString.replace(/\s/g, "");
  return check;
};

// Do not edit below this line
module.exports = palindromes;
