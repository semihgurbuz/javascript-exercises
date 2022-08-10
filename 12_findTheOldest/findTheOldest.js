const findTheOldest = function (people) {
  let age = [];
  for (i = 0; i < people.length; i++) {
    if (Object.values(people[i])[2] !== undefined) {
      age.push(Object.values(people[i])[2] - Object.values(people[i])[1]);
    } else {
      age.push(2022 - Object.values(people[i])[1]);
    }
  }

  let largestAge = Math.max(...age);

  for (i = 0; i < age.length; i++) {
    if (age[i] === largestAge) {
      return people[i].name;
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
