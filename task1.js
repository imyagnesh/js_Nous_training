const users = [
    {
        name: 'Yagnesh',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Rohit',
        age: 26,
        gender: 'male'
    },
    {
        name: 'virat',
        age: 24,
        gender: 'male'
    },
    {
        name: 'dipila',
        age: 32,
        gender: 'female'
    },
    {
        name: 'priyanka',
        age: 34,
        gender: 'female'
    },
    {
        name: 'alia',
        age: 18,
        gender: 'female'
    },
    {
        name: 'tanu',
        age: 17,
        gender: 'female'
    },
    {
        name: 'mohit',
        age: 52,
        gender: 'male'
    },
];

const states = [
    {
        abb: 'KA',
        name: 'Karnataka'
    },
    {
        abb: 'AP',
        name: 'Andhra Pradesh'
    },
    {
        abb: 'MH',
        name: 'Maharashtra'
    },
    {
        abb: 'RJ',
        name: 'Rajasthan'
    }
]

// Reduce - Some
const reduceSome = users.reduce((p, c) => {
    if (c.age === 18) {
        p = true;
    }
    return p;
}, false);
// console.log(reduceSome);

// Reduce - Every
const reduceEvery = users.reduce((p, c) => {
    if (c.age > 18) {
        p = true;
    } else {
        p = false;
    }
    return p;
}, false);
// console.log(reduceEvery);

// Reduce - Map
const reduceMap = states.reduce((p, c) => {
    if (c.abb === 'KA') {
        p.push({ ...c, state: true });
    } else {
        p.push(c);
    };
    return p;
}, []);
// console.log(reduceMap);

// Group By Age with Reduce
const groupByAge = users.reduce((p, c) => {
    if ((c.age >= 10) && (c.age < 20)) {
        (p['10-19'] = p['10-19'] || []).push(c);
    } else if ((c.age >= 20) && (c.age < 30)) {
        (p['20-29'] = p['20-29'] || []).push(c);
    } else if ((c.age >= 30) && (c.age < 39)) {
        (p['30-39'] = p['30-39'] || []).push(c);
    }
    return p;
}, {});
// console.log(groupByAge);