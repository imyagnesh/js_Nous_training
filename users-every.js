
const users = [
    { name: 'Kholi', age: 26, },
    { name: 'Dhoni', age: 34 },
    { name: 'Dravid', age: 35 },
    { name: 'Ganguly', age: 38 },
    { name: 'Sehwag', age: 28 },
    { name: 'KL Rahul', age: 28 },
    { name: 'Panth', age: 28 },
];

const AllUsersAbove25 = users.reduce((p, c) => c.age > 25, false);
console.log(AllUsersAbove25);

const AllUsersAbove30 = users.reduce((p, c) => c.age > 30, false);
console.log(AllUsersAbove30);