const users = [
  {
    name: "Yagnesh",
    age: 30,
    gender: "male",
  },
  {
    name: "Rohit",
    age: 26,
    gender: "male",
  },
  {
    name: "virat",
    age: 24,
    gender: "male",
  },
  {
    name: "dipila",
    age: 32,
    gender: "female",
  },
  {
    name: "priyanka",
    age: 34,
    gender: "female",
  },
  {
    name: "alia",
    age: 18,
    gender: "female",
  },
];

// Task - group by age
const groupByAge = users.reduce((p, c) => {
  if (c.age >= 10 && c.age <= 19) {
    (p["10-19"] = p["10-19"] || []).push(c);
  } else if (c.age >= 20 && c.age <= 29) {
    (p["20-29"] = p["20-29"] || []).push(c);
  } else if (c.age >= 30 && c.age <= 39) {
    (p["30-39"] = p["30-39"] || []).push(c);
  }
  return p;
}, {});

console.log(groupByAge);

// Task - some
const someExample = users.reduce((p, c) => {
  if (c.age < 20) {
    p = true;
  }

  return p;
}, false);

console.log(someExample, "someExample");

// Task - every
const everyExample = users.reduce((p, c) => {
  if (c.age < 40) {
    p = true;
  } else {
    p = false;
  }

  return p;
}, false);

console.log(everyExample, "everyExample");

// Task - map
const mapExample = users.reduce((p, c) => {
  if (c.age > 30) {
    p.push({ ...c, gender: "Male" });
  } else {
    p.push(c);
  }

  return p;
}, []);

console.log(mapExample, "mapExample");
