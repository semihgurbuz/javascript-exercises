const getTheTitles = function (books) {
  let titles = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let title = Object.values(book)[0];
    titles.push(title);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
