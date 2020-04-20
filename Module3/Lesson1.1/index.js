console.log('lesson 1.1');

// const person = {
//     id: Date.now(),
//     name: "Alex",
//     age: 23,
//     email: 'alex@gmail.com',
//     numbers: ["098-845-34-45", "098-845-34-45"],
//     isActive: true,
//     status: {
//         course: 'BC#20',
//         number: 1,
//     },
//     getName () {
//         console.log(this.name);
//     },
//     getAge: function () {
//         console.log(this.age)
//     }
// };
// console.log(person);

// const authentification = {
//     isActive: true,
//     isLogin: true, 
//     token: ''
// }

// authentification.isActive && authentification.isLogin && authentification.token && person.getName();
// authentification.isActive && authentification.isLogin && authentification.token && person.getAge();

// ==========================================
// const person = {
//     id: Date.now(),
//     name: "Alex",
//     age: 23,
//     email: 'alex@gmail.com',
//     numbers: ["098-845-34-45", "098-845-34-45"],
//     isActive: true,
//     status: {
//         course: 'BC#20',
//         number: 1,
//     }
// };
// console.log(person['name']);

// const arr = ['name', 'age', 'email'];

// const newObject = new Object();
// const newObject = {};
// console.log(newObject);

// const keys = Object.keys(person)
// console.log(keys);

// const statusKeys = Object.keys(person.status);
// console.log(statusKeys)

// for (const key of keys) {
//     console.log(`${key}:  ${person[key]}`)
// }

// const values = Object.values(person)
// console.log(values);

// const entries = Object.entries(person)
// console.log(entries);

// for (const entry of entries) {
//     console.log(`${entry[0]}: ${entry[1]}`)
// }


// ===========================
// const person = {
//     id: Date.now(),
//     name: "Alex",
//     age: 23,
//     email: 'alex@gmail.com',
//     numbers: ["098-845-34-45", "098-845-34-45"],
//     isActive: true,
//     status: {
//         course: 'BC#20',
//         number: 1,
//     }
// };
// person.gender = 'male';

// console.log(person);
// console.log(person.gender);

// // delete person.gender;

// // console.log(person);
// // console.log(person.gender);

// =========================
// const userName = 'Alex';
// const age = 23;
// const email = 'alex@gmail.com';

// const user = {
//     userName,
//     age,
//     email,
//     setData(newName = 'Alex', newAge = 23, newEmail = 'alex@gmail.com') {
//         this.userName = newName;
//         this.age = newAge;
//         this.email = newEmail;
//         // return this.userName
//     }
// }
// console.log(user);
// console.log(user.setData("Nikita", 24, 'Nikita@gmail.com'));
// console.log(user);

// =====================================================================

// const person = {
//     id: Date.now(),
//     name: "Alex",
//     age: 23,
//     email: 'alex@gmail.com',
//     numbers: ["098-845-34-45", "098-845-34-45"],
//     isActive: true,
//     status: {
//         course: 'BC#20',
//         number: 1,
//     }
// };

// for (const key in person) {
//     console.log(key)
// }

// console.log(person.name);
// console.log(person['name']);

// const keys = Object.keys(person);
// let findKey;

// for (const key of keys) {
//     if (key.includes('na')) {
//         findKey = key;
//     }
// }

// console.log(keys)

// const newData = [];

// if (findKey in person) {
//     newData.push(person.name)
// }
// console.log(newData)

// if ('name' in person) {
//     newData.push(person.name)
// }


// ==================================

// const universal = function (data) {

//     // if (typeof data === 'string') {
//     //     console.log("string")
//     // }
//     // if (typeof data === 'object') {
//     //     console.log("object")
//     // }
//     // if (typeof data === 'array') {
//     //     console.log("array")
//     // }
//     // const JS = {
//     //     array: {
//     //         constructor: {
//     //             name: "Function"
//     //         }
//     //     },
//     //     string: {
//     //         constructor: {
//     //             name: "Number"
//     //         }
//     //     },

//     // }

//     // const str = new Array(1,2,3,4,5);
//     // const arr = [1,2,3,4,5]
//     // console.log(str)
//     if (data.constructor.name === 'Function') {
//             console.log('This is Function')
//         }
//     if (data.constructor.name === 'String') {
//         console.log('This is string')
//     }
//     if (data.constructor.name === 'Number') {
//         console.log('This is Number')
//     }
//     if (data.constructor.name === 'Array') {
//         console.log('This is Array')
//     }

// }

// // universal(3);
// // universal('Alex');
// universal(() => function () {
//     return 0
// });




// const obj = new Array();
// console.log(obj.constructor.name);


// ========= spread ===============

// const array = [1, 2, 3, 4, 5];
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 4, 5];

// const newArray = [...array,...array1, ...array2]

// newArray[0] = 100;
// console.log(array)
// console.log(newArray)


// -------- rest ---------
// const array = [1, 2, 3, 4, 5];

// function getData(a, b, ...rest) {
//     console.log(a, b);
//     console.log(rest);
// }

// getData(...array)
// ============================

// const users = [
//     { name: "alex" },
//     { name: "Mikita" },
//     { name: "Andrii" }
// ];

// const persons = [{ name: "Jack" }, ...users, { name: "Jack" }]
// console.log(persons)
// console.log(users)

// ========  Object.assign({}, {}, {}) ==========




















