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
        name: "Virat",
        age: 24,
        gender: 'male'
    },
    {
        name: "Dipila",
        age: 20,
        gender: 'female'
    },
    {
        name: "Priyanka",
        age: 19,
        gender: 'female'
    },
    {
        name: "Alia",
        age: 18,
        gender: 'female'
    },
];


// Reduce => map

const map = users.reduce((p,c) =>{
    if(c.age >= 20) {
        p.push( {...c, Role: 'Engineer'});
    } else{p.push(c);}
    return p;
}, []);
console.log(map);



// Reduce => every

const every = users.reduce((p,c) =>{
    console.log(p)
    console.log(c)
    
    if(c.age===18)
      p=true;
    else 
       p=false;

        return p;
    }, false);
console.log(every);


 //Reduce => some

const some = users.reduce((p,c) =>{
        if(c.name === 'priyanka') {
            p=true;
        }
        return p;
    }, false);
    console.log(some);

   
    
// output
// {
//     "10-19": [],
//     "20-29": [],
//     "30-39": []
// }

const ageGroups = users.reduce((p, c) => {
    console.log(c)
    console.log(p)
        if (c.age >= 10 && c.age < 20)
         {
            (p["10-19"] = p["10-19"] || []).push(c);
        } 
        else if (c.age >= 20 && c.age < 30) 
        {
            (p["20-29"] = p["20-29"] || []).push(c);
        } 
        else
        {
            (p["30-39"] = p["30-39"] || []).push(c);
        }
        return p;
    }, {});
    
    console.log(ageGroups)
