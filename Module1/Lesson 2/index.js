'use strict';

// ============= && =============

// let bool = true;
// let bool1 = true;
// let bool2 = true;
// let bool3 = true;

// bool && bool1 && bool2 && bool3 && console.log("Hello");

// ============= || =============

// let bool = false;
// let bool1 = false; //isAuthenticated
// let bool2 = false; //isLogin
// let bool3 = true; //token

// if (bool || bool1 || bool2 || bool3) {
//     console.log("Hello");
// }

// ============= ! =============

// const bool = true;

// const result = !bool;

// console.log(result);

// let isOpen = false;

// isOpen && console.log('OPEN');

// let choice = confirm('open'); //true false

// if (choice === true) {
//     isOpen = !isOpen;
// }

// isOpen && console.log('OPEN');

// isOpen || console.log("CLOSE");

// ============= falsy =============

// Запомните 6 ложных (falsy) значений, 
// приводящихся к false в логическом преобразовании:
//  0, NaN, null, undefined, пустая строка: "" или '', 
//  false. Абсолютно все остальное приводится к true.

// let a = 5;
// let b = 5;

// if (!(a - b)) {
//     console.log("FALSE");
// }

// console.log((a - b));

// =================================

// let choice = prompt('hhdjscd');

// console.log("length", choice.length);

// if (!choice.length) {
//     console.log("HELLO");
// }

// true && console.log("HELLO");

// ============= if =============

// let a = 5;
// let b = 10;

// let isProcessRunning = false

// if (isProcessRunning) {
//     let result = a + b;
//     let result2 = result * 2;
//     console.log(result2);
// }

// ============= if else =============
// let a = 5;
// let b = 10;
// let result = 0;

// let isProcessRunning = true

// if (a > 6) { //true
//     console.log('GOOD');
// } else {
//     (a < 6 && b > 8)
//         ? (result = a + 2)
//         : result = a;
// }


// ========== () ? ... : =============
// let a = 5;
// let b = 10;

// let result = 0;

// let isProcessRunning = true;

// (a < 6 && b > 8)
//     ? (result = a + 2)
//     : result = a;

// console.log(a);

// ============= else if =============
// let a = 5;
// let b = 10;

// let result = 0;

// let isProcessRunning = true;

// if (a < 6) {
//     result += a; // result = result + a;
// } else
//     if (b < 10) {
//         result -= a;
//     } else
//         if (b > 10) {
//             result = 0;
//         } else result = 5;

// (a > 6 && b < 10) && (result += a)
// (a < 6 && b < 10) ? result -= a : result = 0;

// if (b > 10) {
//     result = 0;
// }
// console.log(a);

// ============= switch =============
// let result = 0;

// let a = prompt("Enter your number A"); // null
// let b = prompt("Enter your number B"); // 5
// let inputO = prompt("Enter operation"); // +

// if (Number.isNaN(Number(a))) {
//     a = 0;
//     console.log(a);
// }
// if (Number.isNaN(Number(b))) {
//     b = 0;
//     console.log(b);
// }

// if ((a === null) || (b === null) || inputO === null) {
//     alert(`Отменено пользователем`);
// }

// switch (inputO) {
//     case '+':
//         result = Number(a) + Number(b);
//         break;

//     case '-':
//         result = Number(a) - Number(b);
//         break;

//     case '*':
//         result = Number(a) * Number(b);
//         break;

//     case '/':
//         result = Number(a) / Number(b);
//         break;

//     default:
//         result = 0;
//         break;
// }
// console.log(result);

// ============= scope =============
// let x = 5;
// let y = 10;

// console.log("in global", y); //10

//                     if (x > 4) {
//                         let y = 20; //20
//                         console.log("In block =>", y);
//                         // console.log(x + y);
//                     }

// console.log("in global", y); //10

//                     if (x > 4) {
//                         let y = 50; //50
//                         console.log("In block2 =>", y);
//                                         if (y > 45) {
//                         console.log("In block2 =>", y);
//                                             // console.log(y - x);
//                                             if (y > 45) {
//                                                 let y = 1000; //50
//                                                 console.log("In block2 =>", y);
//                                                 // console.log(y - x);
//                                             }
//                                         }
//                         // console.log(y - x);
//                     }

// console.log("in global", y); //50





// ============= while =============
// let a = 15
// let b = 15


// while (a >= b) { // true 15 > 10 || 15 === 15   false// 15 > 16
//     console.log(b);
//     b += 1
//     console.log(b);
// }
// console.log('fsdfs');


// ============= do while =============
// let a = 15;
// let b = 10;
// do {
//     console.log(b); //15
//     b += 1
//     console.log(b); //16
// } while (a > b);



// ===============================
// let result = '';
// let input = '';

// while (input !== null) {
//     input = prompt('Enter your str');
//     (input !== null) && (result += input + ' ');
// }

// console.log(result);

//  ===================
// let result = '';
// let input = '';
// do {
//     let input = prompt('Enter your str');
//     (input !== null) && (result += input + ' ');
// } while (input === null)

// console.log(result);

// ============= break =============
// let num = 5;
// let string = 'dgf djgfhs df sdf mdsm f bsdfn bsdm';

// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
//     if (string[i] === 'm') {
//         break;
//     }
// }



// ============= continue =============
// let num = 5;
// let string = 'dgf djgfhs df sdf mdsm f bsdfn bsdm';
// let res = ''
// for (let i = 0; i < string.length; i++) {

//     if (string[i] !== 'm') {
//         continue;
//     }
//     res += string[i]
// }
// console.log(res.length);

