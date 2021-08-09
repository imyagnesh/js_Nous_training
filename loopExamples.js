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
// some method example
// const some = users.reduce((p,c) =>{
//     if(c.name === 'Sasi') {
//         p=true;
//     }
//     return p;
// }, false);
// console.log(some);

// const every = users.reduce((p,c) =>{
//         if(c.age === 26) {
//             p=true;
//         } else {
//             p=false;
//         }
//         return p;
//     }, false);
// console.log(every);


const map = users.reduce((p,c) =>{
            if(c.age >= 20) {
                p.push( {...c, major: true});
            } else{p.push(c);}
            return p;
        }, []);
    console.log(map);
