// Map, Set, WeakSet, WeekMap

// const user = {
//     name: "Alex",
//     age: 30,
//     isActive: true
// }

// const entries = [["name", "Alex"], ["age", "30"], ["isActive", "true"]];
// console.log('user', Object.entries(user));
// console.log('user', Object.fromEntries(entries));

// =================== Map ====================
// const user = {
//     name: "Alex",
//     age: 30,
//     isActive: true
// }
// // const entries = [["name", "Alex"], ["age", "30"], ["isActive", "true"]];
// const map = new Map(Object.entries(user));

// console.log(map);

// console.log('map.get:', map.get('isActive'))

// // map.set(user, 'MyObject')
// // console.log(map);
// // map.set(NaN, 'Not a number')
// // console.log(map);
// // map.set("isActive", "online");

// map
//     .set("status", "online")
//     .set(user, 'MyObject')
//     .set(NaN, 'Not a number')

// map.delete("status");
// console.log(map);

// console.log(map.has("status"));

// console.log(map.size);


// =============== forEach map ===================
// const user = {
//     name: "Alex",
//     age: 30,
//     isActive: true
// }

// const map = new Map(Object.entries(user));

// for (let [key, value] of map) {
//     console.log(key, value);
// }
// for (let key of map.keys()) {
//     console.log(key);
// }
// for (let value of map.values()) {
//     console.log(value);
// }
// console.log(map);

// const array = [...map];
// const newArr = Array.from(map);
// console.log(array);
// console.log(newArr);

// map.forEach((value, key, arr) => console.log((value, key)));

// console.log(map);
// const mapUser = Object.fromEntries(map.entries());
// console.log(mapUser);

// ==========================
// const database = [
//     { name: "Alex" },
//     { name: "Nick" },
//     { name: "Anna" }
// ];

// const map = new Map();
// console.log(map);

// map.set(database[0], 'Alex@gmai.com');
// map.set(database[1], 'Alex@gmai.com');
// map.set(database[2], '{key: Alex@gmai.com}');

// console.log(map);

// function getEmail(user) {
//     return map.get(user);
// }

// console.log(getEmail(database[2]));

// ========================= Set =====================

// const arr = [1, 2, 3, 3, 3, 4, 5, 3, 2, 23, 4, 4, 2, 2, 42342, 3, 4];

// const set = new Set(arr);
// console.log(set);

// set.add(100).add(42342).add('efsfsdf')

// console.log(set.entries());

// console.log(set.has(100));
// console.log(set.has(100000));

// console.log(set.size);

// console.log(set.delete('42342dasdsa'));
// set.clear();
// console.log(set);
// console.log(arr);
// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 56]


// ============== example ============
// function getUniqueValue(array) {
//     return [...new Set(array)]
//     // return Array.from(new Set(arr))
// }

// console.log(getUniqueValue(arr));


// =============== weak Map ======================

// let obj = { name: "Alex" };

// const arr = [obj];

// obj = null;

// console.log(obj);

// console.log(arr);

// console.log(arr[0]);

// ==================================================
// Убрать утечки памяти

// let newObj = { name: "Alex" };
// const data = Object.entries(newObj);
// // console.log(data);

// const weakmap = new WeakMap([[newObj, "{gadhjd}"]]);
// console.log(weakmap);

// // get set delete has

// newObj = null;
// console.log(weakmap.get(newObj));
// console.log(weakmap);

// ================= example ====================

// let alex = { name: "Alex", email: "alex@gmail.com" }
// let nick = { name: "Nick", email: "nick@gmail.com" }
// let anna = { name: "Anna", email: "Anna@gmail.com" }

// const database = new WeakMap();

// function getUser(user) {
//     if (!database.has(user)) {
//         database.set(user, `{email: ${user.email}}`)
//     }
//     return database.get(user)
// }
// console.log(getUser(alex));
// console.log(database.has(alex));

// alex = null;
// console.log(database.has(alex));

// ================== WeakSet==================================

// const users = [
//     { name: "Alex", email: "alex@gmail.com" },//0
//     { name: "Nick", email: "nick@gmail.com" },//1 //0
//     { name: "Anna", email: "Anna@gmail.com" } //2 //1
// ];

// const database = new WeakSet();

// database
//     .add(users[0])
//     .add(users[1])
//     .add(users[2])
// console.log(database);

// users.splice(0, 1);

// console.log(users);
// console.log(database.has(users[0]));
// console.log(database.has(users[1]));


// =================== 1 ================================

// const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 8, 8, 8, 8, 8, 15, 1, 2];

// const data = array.reduce((acc, item) => {
//     if (!acc.hasOwnProperty(item)) {
//         acc[item] = 1
//     } else acc[item] += 1

//     return acc
// }, {})

// console.log(data);

// ['1', 0}]

// ====================== 2 =======================
// const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 8, 8, 8, 8, 8, 15, 1, 2];

// const data = array.reduce((acc, item) => {
//     if (acc[item] in acc) {
//         acc[item] += 1
//     } else acc[item] = 1;
//     return acc
// }, {})

// console.log(data); 

// ==============================================

const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];

const getSortedUniqueSkills = users => {
    return users.reduce((allskils, user) => {
        allskils.push(...user.skills);
        return allskils
    }, [])
};

function getUniqueValue (data) {
    console.log([...new Set(data)].sort()); 
}

getUniqueValue(getSortedUniqueSkills(users));



// console.log(getSortedUniqueSkills(users)// [skill,]
//     .filter((skill, index, user) => user.indexOf(skill) === index).sort())
//     // .filter((skill, index, user) => console.log(`${index}: ${user.indexOf(skill)}`)))

//   // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]





















