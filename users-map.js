const users = [
    { name: 'Kholi', age: 26, },
    { name: 'Dhoni', age: 34 },
    { name: 'Dravid', age: 35 },
    { name: 'Ganguly', age: 38 },
    { name: 'Sehwag', age: 28 },
    { name: 'KL Rahul', age: 28 },
    { name: 'Panth', age: 28 },
];

const usersMap = users.reduce((p, c) => {
    p.push(c);
    return p;
}, []);

console.log(usersMap);