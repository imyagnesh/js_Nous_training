const users = [
    {
        name: "Yagnesh",
        age: 30,
        gender: 'male'
    },
    {
        name: "Rohit",
        age: 26,
        gender: 'male'
    },
    {
        name: "virat",
        age: 24,
        gender: 'male'
    },
    {
        name: "dipila",
        age: 32,
        gender: 'female'
    },
    {
        name: "priyanka",
        age: 34,
        gender: 'female'
    },
    {
        name: "alia",
        age: 18,
        gender: 'female'
    },
];

// Sum
const mainArray = [1, 4, 5, 6, 7, 8, 9];
const sumOperation = mainArray.reduce((p, c) => p + c, 0)
console.log(sumOperation);

// GroupBy
const groupByAge = users.reduce((p, c) => {
    if (c.age >= 10 && c.age <= 19) {
        (p['10-19'] = p['10-19'] || []).push(c);
    }
    if (c.age >= 20 && c.age <= 29) {
        (p['20-29'] = p['20-29'] || []).push(c);
    }
    if (c.age >= 30 && c.age <= 39) {
        (p['30-39'] = p['30-39'] || []).push(c);
    }
    return p;
}, {});

console.log(groupByAge);

// Map
const mapSample = users.reduce((p, c) => {
    if (c.name === 'virat') {
        return c;
    }
    return p;
}, [])
console.log(mapSample);
