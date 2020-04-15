
// ================ array ================

// const arr = [
//     [1, 2, 3, 5, 54, 5, 54, 45],
//     [1, 2, 3, 5, 54, 5, 54, 45],
//     [1, 2, 3, 5, 54, 5, 54, 45]
// ]

// console.log(arr[2][7]);

// ================ iteration ================
// const string = "Lorem, ipsum dolor."
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const users = ["Mango", "Poly", "Ajax"]

// function logElements(aaa) {
//     for (let i = 0; i < aaa.length; i += 1) { // 0 - 8
//         console.log(`index : ${i}`, `value : ${aaa[i]}`);
//     }
// }

// logElements(users);


// ================ for ================
// const string = "Lorem, ipsum dolor."
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const users = ["Mango", "Poly", "Ajax"]

// for (let i = 0; i < users.length; i += 1) { // 0 - 8
//     console.log(`index : ${i}`, `value : ${users[i]}`);
// }


// ================ for of ================

// const string = "Lorem, ipsum dolor."
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const users = ["Mango", "Poly", "Ajax"]

// for (const char of string) {
//     console.log(char)
//     // console.log(users.indexOf(user))
// }

// ===== копирование по значению  ================

// let x = 5;
// x = 20;
// let y = x;
// console.log(y); //20

// x = 50;
// console.log(x); //50
// console.log(y); //20
// y = x; //50


// =============== копирование по ссылке ================

// const array = [1, 2, 3, 4]; const users = ['Mango', 'Poly']
// const newArray = array;
// const numbers = array;
// // console.log(numbers);
// numbers[0] = 35;

// function getelem(arr) { //const arr = array //const arr = users
//     console.log(arr)
// }


// getelem(array); getelem(users);

// ================ split ================

// const string = "Lorem ipsum dolor sit amet."; // '' => []
// const array = string.split(' '); //разделитель
// console.log(array);

// console.dir(new String("Lorem ipsum dolor sit amet."));
// console.dir(new Number(1))
// ================ join ================
// const string = "Lorem sit ipsum sit dolor sit amet."; // '' => []
// console.log(string)
// const array = string.split(' '); //разделитель
// console.log(array);
// const badChars = ['sit', 'dolor'];
// for (const char of array) { //["Lorem", "sit", "ipsum", "sit", "dolor", "sit", "amet."]
//     for (const badChar of badChars) { //['sit', 'dolor']
//         if (char === badChar) { //'sit' !== 'situ'
//             const index = array.indexOf(char);
//             array[index] = '***';
//         }
//     }
// }
// console.log(array);
// const newString = array.join(' ');
// console.log(newString)

// ================ indexOf ================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8];

// const index = numbers.indexOf(8);
// console.log(index)

// ================ includes ================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8];

// const bool = numbers.includes(8);

// console.log(bool)

// ---------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8];

// let findNumber = 8;
// numbers.includes(findNumber) && console.log(numbers.indexOf(findNumber));

// ================ push ================
// const users = ['Andrii', "Jim", "John", "Alex"];
// const user = 'Poly';
// users.push(user);
// console.log(users); //["Andrii", "Jim", "John", "Alex", "Poly"]

// ================ pop ================
// const users = ['Andrii', "Jim", "John", "Alex"];
// const delUser = users.pop();
// console.log(delUser)
// console.log(users);


// ================ unshift ================
// const users = ['Andrii', "Jim", "John", "Alex"];
// users.unshift('Poly');
// console.log(users);

// ================ shift ================
// const users = ['Andrii', "Jim", "John", "Alex"];
// users.shift();
// console.log(users);

// ================= reverse =================
// const users = ['Andrii', "Jim", "John", "Alex"];
// const del = users.reverse().shift();
// console.log(users.includes(del))

// ================ slice ================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.slice(0, 5)); //let a = arr.slice(0, 5)
// console.log(arr.slice(3, 7)); //let b = arr.slice(3, 7) a.concat(b)
// console.log(arr.slice(5));

// ================ splice ================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(4, 2);
// console.log(arr);
// let a = 20;
// arr.splice(4, 0, a, 30);
// console.log(arr);

// ================ concat ================
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];
// const arr = arr1.concat(arr2);
// // const arr = [...arr1, ...arr2];
// console.log(arr1);
// console.log(arr2);
// console.log(arr);


