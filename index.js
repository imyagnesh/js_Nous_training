// ECMA SCRIPT

// ES5

// ES6+

// -> some problems where there in older version
// -> Added new feature so no need to use thirdparty library for complex operation
// -> they have make syntex better
// -> Javascript is used at enterpirse level

// Hoisting
//

// var a = 1;

// var a;

// a = 1;

// a = 2;

// console.log(a);

// Scoping

// {
//     var a = 1;

// }

// console.log(a);

// solved problem of hoisting
// let a = 1;

// let a = 2;

// solved scoping problem

// let a = 1;

// a = 2;

// console.log(a);

// {
//     let a = 1;
//     console.log(a);
// }

// {
//     let a = 2;
//     console.log(a);
// }

// const pi = 3.14;

// pi = 3.16

// {
//     const pii = 3.14
// }
// console.log(pii);

//          hoisting     scoping     reassign    redeclare
// var      yes             no         yes         yes
// let      no              yes         yes        no
// const    no              yes         no         no

// let & Const

// const firstName =  'Yagnesh';
// const lastName = 'Modh';

// old javascript
// const fullName = firstName + '\n' + lastName;

// es6+
// string literal
// const fullName = `${firstName}

// ${lastName}`

// console.log(fullName);

// const title = 'Learn Javascript'

// const html = '<!DOCTYPE html>' +
// '\n<html lang="en">' +
// '\n<head>' +
//     '\n\t<meta charset="UTF-8">' +
//     '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
//     '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//     '\n\t<title>'+ title +'</title>' +
// '\n</head>' +
// '\n<body>' +
//     '\n' +
// '\n</body>'+
// '\n</html>';

// const html5 = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>${title}</title>
// </head>
// <body>

// </body>
// </html>`

// console.log(html);

// console.log(html5);

// hoisting

// function add(a, b) {
//     return a + b;
// }

// function add(){
//    return 'hacked.....'
// }

// console.log(add(1,2));

// const add = function(a, b) {
//     return a + b;
// }

// ES6+
// Arrow Function
// const add = (a, b) => a + b;

// const greet = name => `Hello, ${name}`;

// const calc = (a, b, operator) => {
//     if(operator === '+') {
//         return a + b;
//     }
// }

// console.log(calc(1,2, '+'));

// console.log(add(1,2));

// console.log(greet('Yagnesh'));

// ==
// ===

// primitive type

// string
// number
// boolean
// bigint
// null
// undefined

// non premitive

// object
// Array

// const a = 1;

// const b = '1';

// const c = { a: 1 }
// const d = { a: 1 }

// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b);
// console.log(a === b);

// console.log(c == d);
// console.log(c === d);

// const firstName = 'Yagnesh';
// const lastName = 'Modh';
// // const age = 30;
// // const fullName = `${firstName} ${lastName}`

// const user = {
//     firstName,
//     lastName,
//     age: 30,
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.fullName());

// CRUD
// CREATE
// READ
// UPDATE
// DELETE

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     a: 6
// }

// object destructor
// const { c, a, ...rest } = obj;
// console.log(c);
// console.log(rest);

// delete obj.c;

// console.log(obj);

// O(1)
// Vanila Javascript
// const newObj = Object.assign({}, obj, { d: 4 });
// const updatedObj = Object.assign({}, obj, { b: 4 });

// ES6+
// Spread operator
// const newObj = {...obj, d: 4}
// const updatedObj = {...obj, b: 4}

// console.log(newObj);
// console.log(updatedObj);
// console.log(obj);

// console.log(obj);

// O(1)
// O(logN)
// O(N) ->
// O(N^2)
// O(N!)

// Mutable
// obj.d = 4;

// obj.b = 4;

// Mutable -> can changed
// Immutable -> cant change

// console.log(obj);

// // dot notation
// console.log(obj.a);
// console.log(obj.b);

// // array notation
// const key = 'a';

// console.log(obj[key]);
// console.log(obj['b']);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const arr1 = arr.slice(0, 5);

// const arr2 = arr.slice(5);

// console.log(arr2);

// console.log(arr1);

// const finalArr = [
//     ...arr.slice(0, 4),
//     ...arr.slice(4 + 1),
// ];

// console.log(finalArr);

// const newArr = [0, ...arr, 11];

// console.log(newArr);

// arr.push(11);

// console.log(arr)

// arr.pop();

// console.log(arr);

// LILO

// arr.unshift(0);

// console.log(arr);

// arr.shift(0);

// console.log(arr);

// FIFO

// const add = (a,b, c, ...rest) => {
//     console.log(rest);
//     let result  = 0;
//     for (let i = 0; i < rest.length; i++) {
//         result = result + rest[i]
//     }
//     return result;
//     // return a + b + c + d;
// }

// console.log(add(1,2, 3, 4, 5, 6));

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const mul = (a, b) => a * b;
// const mod = (a, b) => a % b;

// const calc = (a, b) => {
//     return (operator) => {
//         return operator(a, b)
//     }
// };

// console.log(calc(1,2)(add));
// console.log(calc(1,2)(sub));
// console.log(calc(1,2)(divide));
// console.log(calc(1,2)(mul));
// console.log(calc(1,2)(mod));

// const calc = (a, b, operator) => {
//   if (operator === "+") {
//     return add(a, b);
//   }
//   if (operator === "-") {
//     return sub(a,b);
//   }
//   if (operator === "/") {
//     return divide(a,b);
//   }
//   if (operator === "*") {
//     return mul(a,b);
//   }
// };

// console.log(calc(1,2, '+'));
// console.log(calc(1,2, '-'));
// console.log(calc(1,2, '/'));
// console.log(calc(1,2, '*'));

// for -> fastest loop
// foreach ->  slowest
// while ->
// do while ->

// const arr = [...Array(10000000).keys()]

// console.time('for')
// for (let i = 0; i < arr.length; i++) {
// }
// console.timeEnd('for')

// console.time('foreach')
// arr.forEach(element => {
// });
// console.timeEnd('foreach')

// console.time('while')
// let i = 0;
// while (i < arr.length) {
//     i++;
// }
// console.timeEnd('while')

// console.time('dowhile')
// let j = 0;
// do {
//     j++
// } while (j < arr.length);
// console.timeEnd('dowhile')

// Immutable

// find
// findIndex
// filter
// some
// every
// map
// reduce

// const users = [
//   {
//     name: "Yagnesh",
//     age: 30,
//     gender: 'male'
//   },
//   {
//     name: "Rohit",
//     age: 26,
//     gender: 'male'
//   },
//   {
//     name: "virat",
//     age: 24,
//     gender: 'male'
//   },
//   {
//     name: "dipila",
//     age: 32,
//     gender: 'female'
//   },
//   {
//     name: "priyanka",
//     age: 34,
//     gender: 'female'
//   },
//   {
//     name: "alia",
//     age: 18,
//     gender: 'female'
//   },
// ];

// {
//     male: [],
//     female: []
// }

// {}

// const obj = {a: 1, b: 2}

// console.log(obj['c']);

// const groupByGender = users.reduce((p , c) => {
//     (p[c.gender] = p[c.gender] || []).push(c);
//     return p;
// }, {});

// console.log(groupByGender);



// {
//     "10-19": [],
//     "20-29": [],
//     "30-39": []
// }

// {}

// const virat = users.reduce((p, c) => {
//     if(c.name === 'abc') {
//         return c;
//     }
//     return  p;
// }, undefined);

// const index = users.reduce((p, c, index) => {
//     if(c.name === 'virat') {
//         return index;
//     }
//     return  p;
// }, -1);

// const adultGroup = users.reduce((p , c) => {
//     if(c.age > 30) {
//         return [...p, c]
//     }
//     return p;
// }, [])

// console.log(adultGroup);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = arr.reduce((p, c) => p + c, 0)
// console.log(sum);

// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result += element;
// }
// console.log(result);

// const virat = users.find(user => user.name === 'virat');
// if recond found then return object
// if not found return undefined
// console.log(virat);

// const index = users.findIndex(user => user.name === 'asdf');
// if recound found it return number
// if not found then return -1
// console.log(index);

// const seniors = users.filter(x => x.age > 40);
// if records found return array with data
// if not found return empty array
// console.log(seniors);

// const isViratInTeam = users.some(x => x.name === 'virat');
// if record exist then return true;
// else return false
// console.log(isViratInTeam);

// const isEveryAdult = users.every(x => x.age > 18);
// if Every record exist then return true;
// else return false
// console.log(isEveryAdult);

// const updateUser = users.map(x => {
//     if(x.name === 'alia') {
//         return {...x, age: 24}
//     }
//     return x
// });

// console.log(users);
// console.log(updateUser);

// const a = null;
// const b = 2;

// console.log(a || b);

// console.log(a && b);

// class Animal {
//     hasLegs = true;

//     // call only once while initialization
//     constructor (type) {
//         console.log(type);
//         this.type = type;
//     }

//     set type(value) {
//         this._type = value.toUpperCase()
//     }

//     get type() {
//         return this._type
//     }

//     static layEggs() {
//         return false;
//     }

//     #canFly() {
//         return false;    
//     }

//     makeSound() {
//         console.log(this.hasLegs);
//         console.log(this.type);
//         console.log('bow wow....');
//         console.log(this.#canFly());
//     }
// }

// class Dog extends Animal {
//     constructor () {
//         super('dog')
//     }
//     makeSound() {
//         super.makeSound()
        
//         console.log('wow....');
//     }

    
// }
// console.log(Animal.layEggs());


// const a = new Animal('mammal');

// const d = new Dog();
// console.log(d.type);

// console.log(d.makeSound());


// console.log(a.type);



// console.log(a.makeSound());
// console.log(a.makeSound());

// Javascript is single thread 

// sync language

// asyc code execution

// callback
// promises
// generators

// document.addEventListener('copy', () => {
    
// })

const arr = [1,2,3,4,5];

// console.log(arr);

// for(var j = 0; j < arr.length; j++) {
//     console.log(j);
//     setTimeout(() => {
//         console.log(j);
//     }, 0)
// }

// console.log('s1');
// setTimeout(() => {
//     console.log('a1');
// }, 50)
// console.log('s2');
// setTimeout(() => {
//     console.log('a2');
// }, 100)
// console.log('s3');
// setTimeout(() => {
//     console.log('a3');
// }, 20)

// const users = [
//     {
//         name: "Yagnesh",
//         age: 30,
//         gender: 'male'
//     },
//     {
//         name: "Rohit",
//         age: 26,
//         gender: 'male'
//     },
//     {
//         name: "virat",
//         age: 24,
//         gender: 'male'
//     },
//     {
//         name: "dipila",
//         age: 32,
//         gender: 'female'
//     },
//     {
//         name: "priyanka",
//         age: 34,
//         gender: 'female'
//     },
//     {
//         name: "alia",
//         age: 18,
//         gender: 'female'
//     },
//     {
//         name: 'Amitabh',
//         age: 78,
//         gender: 'male'
//     }
// ];

// const groupByAge = users.reduce((p, c) => {
//     const age =  Math.floor(c.age/10);
//     const ageGroup = `${age}0-${age}9`;
//     (p[ageGroup] = p[ageGroup] || []).push(c);
//     return p;
// }, {})

// // sort inner array.

// console.log(groupByAge);


// {
//     "00-09": [],
    
// }

// const arr = [1,2,3,4,2,8,5,6,7];

// const isFourExist = arr.some(x => {
//     console.log(x);
//     return x === 4;
// });

// O(LogN)

// const set  = new Set(arr);
// const weakSet = new WeakSet();

// console.log(set.size);
// console.log(set.has(4));

// const userSet = new Set(users);

// const weakMap = new WeakMap();


// console.log(isFourExist);

// const map = new Map();

// map.set('yagnesh', {
//     name: 'yagnesh',
//     age: 30,
//     gender: 'male'
// });

// console.log(map.get('yagnesh'));

// Promises

// const login = ()  => {
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 resolve('adfadsfasdfdsas')
//             }, 1000)
//         } catch (error) {
//             reject('Login Fail')
//         }
//     })
// }

// const wether = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({
//                 ahmedabad: '38 degree'
//             })
//         }, 2000)
        
//     })
    
// }

//pending

// resolve
// reject

// let loading = false;

// const users = (token) => {
//     loading = true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(token) {
//                 resolve('users data')
//             }else {
//                 reject('Authentication Fail')
//             }
//         }, 500)
//     })
// }

// const loadData = async () => {
//     try {
//         console.time('apicall')
//         const res = await Promise.race([
//             login(),
//             wether()
//         ]);
//         console.log(res);
//         // const loginRes = await login();
//         // const wetherRes = await wether();
//         // console.log(loginRes);
//         // console.log(wetherRes);
//         console.timeEnd('apicall')
//     } catch (error) {
//         console.log(error);
//     }
// }

// loadData()

// All
// AllSettled
// Any
// Race


// old javascript approch
// login()
// .then((value) => {
//     console.log(value);
//     users()
//     .then((userData) => {
//         console.log(userData);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     loading = false;
// })



// function* xyz() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     return 'completed'
// }

// const gen = xyz();

// const set = new Set([1,2,3,4,5]);

// const map = new Map();
// map.set('a', {a: 1})
// map.set('b', {b: 1})
// map.set('c', {c: 1})

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

// console.log(Object.keys(obj)); 


// for (const [key, value] of map.entries()) {
//     console.log(key);
//     console.log(value);
// }

// for (const iterator of map.values()) {
//     console.log(iterator);
// }

// for (const iterator of set.values()) {
//     console.log(iterator);
// }

// for (const iterator of gen) {
//     console.log(iterator);
// }

// console.log(gen.next());

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());













