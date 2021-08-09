
const users = [
    {
        name: 'Revanth',
        age: 20,
        gender: 'male'
    },
    {
        name: 'Krishna',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Kumar',
        age: 12,
        gender: 'male'
    },
    {
        name: 'Sasi',
        age: 22,
        gender: 'female'
    }
    ,
    {
        name: 'kiran',
        gender: 'male',
        age: 32
    },
    {
        name: 'Rama',
        age: 12,
        gender: 'female'
    }
];

const groupByAge = users.reduce((p,c)=> {
    console.log(p);
    console.log(c);
    if(c.age >= 10 && c.age<=19){
       (p['10-19'] = p['10-19'] || []).push(c);
    }
    if(c.age >= 20 && c.age<=29){
        (p['20-29'] = p['20-29'] || []).push(c);
     }
     if(c.age >= 30 && c.age<=39){
        (p['30-39'] = p['30-39'] || []).push(c);
     }
    return p;

}, {});

console.log(groupByAge);