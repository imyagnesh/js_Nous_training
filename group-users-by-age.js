const groupUsersByAge = (users) => {
    const groupedUsers = users.reduce((p, c) => {

        p['10-19'] = p['10-19'] || [];
        p['20-29'] = p['20-29'] || [];
        p['30-39'] = p['30-39'] || [];

        c.age >= 10 && c.age <= 19 && p['10-19'].push(c);
        c.age >= 20 && c.age <= 29 && p['20-29'].push(c);
        c.age >= 30 && c.age <= 39 && p['30-39'].push(c);

        return p;
    }, {});
    return groupedUsers;
}

const users = [
    { name: 'Kholi', age: 26, },
    { name: 'Dhoni', age: 34 },
    { name: 'Dravid', age: 35 },
    { name: 'Ganguly', age: 38 },
    { name: 'Sehwag', age: 28 },
    { name: 'KL Rahul', age: 28 },
    { name: 'Panth', age: 28 },
];

console.log(groupUsersByAge(users));