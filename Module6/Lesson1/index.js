// for (let i = 0; i < 5; i++){
//     console.log(i);

// }

// for (const number of numbers) {
//     console.log(elem);

// }

// =========================== forEach ===============
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => {
//     console.log(number);
// });

// ============================== map ===============
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(number => number + 2);
// console.log(numbers);
// console.log(result);

// const users = [
//     { id: 1, name: "Alex", isActive: true },
//     { id: 2, name: "Nick", isActive: false },
// ]

// const getInfo = function (inpid) {
//     let murkup = '';

//     users.map(({ id, name, isActive }) => {
//         if (id === inpid) {
//             murkup = `
//             <li>
//         <h2>${name}</h2>
//         <span>${isActive}</span>
//         </li>`
//         }
//     })
//     return murkup;
// }

// console.log(getInfo(1));
// // console.log(users);
// ======================
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [...numbers];

// newNumbers[0] = 5;
// console.log(numbers);
// console.log(newNumbers);

// ==============================

// const users = [
//     { id: 1, name: "Alex", isActive: true },
//     { id: 2, name: "Nick", isActive: false },
// ]

// // const newUsers = users.map(item => {
// //     return { ...item, nickName: "fsdfdsf" }
// // });
// const newUsers = users.map(item => ({ ...item, nickName: "" }));
// newUsers[0].isActive = false;
// console.log(users);
// console.log(newUsers);

// =============== map =========
// const users = [
//     { id: 1, name: "Alex", isActive: true },
//     { id: 2, name: "Nick", isActive: false },
// ]

// const newUsers = users.map(item => {
//     return { ...item, age: ((item.name === 'Alex') ? 20 : 0)}
// });

// console.log(users);
// console.log(newUsers);

// ================ filter ===================
// const users = [
//     { id: 1, name: 'Mango', isActive: true },
//     { id: 2, name: 'Poly', isActive: false },
//     { id: 3, name: 'Ajax', isActive: true },
//     { id: 4, name: 'Chelsey', isActive: false },
// ];

// const filteredUsers = users.filter(user => user.id === 3)
// console.log(filteredUsers);

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// =================== find ==============
// const users = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
//   ];

//   const user = users.find(user => user.id === '002');
//   console.log(user);

//   const getUserById = (arr, id) => arr.find(user => user.id === id);
//   console.log(getUserById(users, '001'));
//   console.log(getUserById(users, '003'));

// ==================== every =========================
// const isBigEnough = (val) => val >= 10; //boolean
// const array = [12, 5, 8, 130, 44]; //true && false && false && true && true
// console.log(array.every(number => isBigEnough(number))); // false

// // console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// // console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// // console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true
// ==================== some =========================

// const array = [12, 5, 8, 130, 44]; //true || false || false && true && true
// console.log(array.every(number => number >= 10)); //false
// console.log(array.some(number => number >= 10)); // true

// ====================== reduce =====================

// let res = 0;
// for (const tweet of tweets) {
//     res += tweet.likes
// }
// console.log(res);

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => {
//     console.log(totalLikes);
//     return totalLikes + tweet.likes
// }, 0);
// console.log(likes);

// =========================================
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => {
//     // totalLikes.push(...tweet.tags);
//     totalLikes = [...totalLikes, ...tweet.tags ]
//     return totalLikes
// }, []);

// console.log(likes);

// ==============================
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const result = tweets.filter(tweet => tweet.id === '003' || tweet.id === '002');
// console.log(result);
// const result2 = [tweets.find(tweet => tweet.id === '003' || tweet.id === '002')];
// console.log(result2);

// const likes = tweets.reduce((totalLikes, {likes, tags}) => {
//     (likes > 5) && (totalLikes = [...totalLikes, ...tags ])
//     // (likes > 5) ? (totalLikes = [...totalLikes, ...tags ]) : totalLikes
//     return totalLikes
// }, []);

// console.log(likes);
// let totalLikes = [];
// const result = tweets.filter(tweet => (tweet.likes > 5) && (totalLikes = [...totalLikes, ...tweet.tags]))
// .forEach(tweet => {
//     arr.push(...tweet.tags)
// });

// console.log(totalLikes);
// console.log(result);


// ============================== sort =======================
// const numbers = [1, 2, 3, 4, 3, 5, 99, 111, 1111];

// function compareNumbers(a, b) {
//     return a - b; //

// }

// console.log('Сортировка с функцией compareNumbers:', numbers.sort(compareNumbers));



// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];


// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
// console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]


// ===========

// console.log(['Mango', 'Ajax', 'Poly', 'Chelsey'].sort((a, b) => (a - b)));












//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 28 };

//   let arr = [ vasya, petya, masha ];

//   sortByAge(arr);

//   // теперь отсортировано: [vasya, masha, petya]
//   alert(arr[0].name); // Вася
//   alert(arr[1].name); // Маша
//   alert(arr[2].name); // Петя


const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 3, 2]
const set = new Set(arr); //{}
console.log('set :', set);

















// array.map((item, idx, arr) => {

// });
// array.filter((item, idx, arr) => {

// });


// array.map((item, idx, arr) => {

// });
// array.map((item, idx, arr) => {

// });


