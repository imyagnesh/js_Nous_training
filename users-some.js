
const users = [
    { name: 'Kholi', age: 26, },
    { name: 'Dhoni', age: 34 },
    { name: 'Dravid', age: 35 },
    { name: 'Ganguly', age: 38 },
    { name: 'Sehwag', age: 28 },
    { name: 'KL Rahul', age: 28 },
    { name: 'Panth', age: 28 },
];

const userExists = users.reduce((p, c) => {
    if (c.name === 'Kholi') {
        return true;
    }
    return p;
}, false);

const userNorExists = users.reduce((p, c) => {
    if (c.name === 'Hatim') {
        return true;
    }
    return p;
}, false);



console.log(userExists);
console.log(userNorExists);