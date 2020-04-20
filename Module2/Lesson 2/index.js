
// ================ function expression ==============
// let g;
// console.log(g);// undefined

// let res = 0;
// const sum = function (a, b) {
//     res = a + b;
//     // return a + b;
// }
// console.log(res);
// console.log(sum(5, 10));

// ============= function declaration ==============
// let res = 0;

// function sum1(a, b) {
//     res = a + b;
//     return res;
// }

// console.log(sum1(5, 10));


//  =================== IIFE ========================

// console.dir(window);

// (function () {
//     console.log(window.innerWidth);
//     console.dir(document.location.origin);
// })();

// ============ параметры по умолчанию ============

// let res = 0;

// function sum1(a = 0, b = 0) {

//     res = a + b;

//     return res;

// }

// sum1(10, 20);

// console.log(res);

// -------------------------

// let arr = [1, 2, 3, 4, 5];

// function logArrayElements(array = [1, 2, 3]) {

//     for (const elem of array) {
//         console.log(elem);
//     }
// }

// logArrayElements(arr);


// ================ arrow function =========================
// const sum = (a, b) => {
//     a = a + 5;
//     b = b + 10;
//     return a + b
// }
// console.log(sum(3, 5)); 

// const sum = (a, b) => a + b;
// console.log(sum(3, 5)); 


// ==========================================================

// let arr = [1, 2, 3, 4, 5];

// function logArrayElements(array = [1, 2, 3, 4]) {

//     for (const elem of array) {
//         console.log(elem);
//     }

//     const newRes = function () {
//         return array[2] + array[3]
//     }

//     console.log("New result", newRes());
//     console.log(array[3]);
// }


// logArrayElements(arr);


// ======================
// let arr = [1, 2, 3, 4, 5];

// const newRes = function (a, b) {
//     return a + b;
// }

// function logArrayElements(array = [10, 20, 30, 40]) {

//     for (const elem of array) {
//         console.log(elem);
//     }

//     const res = newRes(array[2], array[3]);

//     console.log("New result", res);
// }

// logArrayElements(arr);

// ================== arguments ======================

// const sum = (a, b, c) => a + b + c;

// console.log(sum(1, 2, 3));

// ================= arguments ==========================

// const sum = function (a, b, c, d) {

//     let result = 0;

//     for (const arg of arguments) { //! [1,2,3,4,5,6,7,8,9]
//         result += arg;
//     }

//     // result = a + b + c + d + e + f + g + h + k;

//     return result;
// }

// console.log("result", sum(1, 2, 3, 4, 5, 6, 7, 8, 9));


// ====================== rest =========================

// const sum = function (...rest) { //[...['name']]

//     const newArr = Array.from(arguments);
//     console.log(newArr);

//     console.log(arguments);

//     console.log(rest);

//     let result = 0;

//     for (const arg of rest) {
//         result += arg;
//     }

//     // result = a + b + c + d + e + f + g + h + k;

//     return result;
// }

// console.log("result", sum(1, 2, 3, 4, 5, 6, 7, 8, 9));


// -------------------

// const sum = function (id, name, ...rest) { //[...['name']]

//     let result = 0;

//     console.log(arguments);

//     for (const arg of rest) {
//         result += arg;
//     }

//     return console.log(`Id: ${id}, Name: ${name}, generation: ${result}`);;
// }

// sum('dfdsf432', 'User1', 2, 3, 4, 5, 6, 7, 8, 9);


// console.log(arr);

// ===============================

// const sum = (a, b) => a + b;
// const min = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const dev = (a, b) => a / b;

// const inputA = prompt("Enter A");
// const inputB = prompt("Enter B");
// const option = prompt("Enter option");

// let res = 0;

// if (parseInt(inputA) && inputA !== null) {
//     switch (option) {
//         case '+':
//             console.log(sum(Number(inputA), Number(inputB)));
//             break;
//         case '-':
//             console.log(min(Number(inputA), Number(inputB)));
//             break;
//         case '*':
//             console.log(mult(Number(inputA), Number(inputB)));
//             break;
//         case '/':
//             console.log(dev(Number(inputA), Number(inputB)));
//             break;
//         default:
//             console.log(res);
//             break;
//     }
// } else console.log("No correct input");













