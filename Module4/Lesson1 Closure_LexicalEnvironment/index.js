// 'use strict';

// ============ example for future  =============
// const cards = [{ title: 'ghsgfsdfsdfdsa' },
// { title: 'ghsfdsgsa' },
// { title: 'ghsdfsdsgsa' },
// { title: 'ghsdfsdfdsfgsa' }];
// let markup = ''
// for (const card of cards) {
//     markup += `<li><h2>${card.title}</h2></li>`
// }
// console.log(markup);

// =============== callback example 1 ==============
// const printMessage = function (message) {
//     console.log(message);
// };

// const higherOrderFunction = function (callback) {
//     const string = 'HOFs are awesome';
//     callback(string);
// };

// higherOrderFunction(printMessage);


// =============== call back example 2 =========================
// const sum = (a, b) => console.log(a + b); //()=> {}
// const min = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const dev = (a, b) => a / b;
// const calculator = function (callback) {
//     const numberA = 5;
//     const numberB = 10;
//     return callback(numberA, numberB);
// }
// // calculator(sum);
// // calculator(min);
// // calculator(multiply);
// // calculator(dev);
// const result = function () {
//     return calculator(sum)
// }
// const call = function () {
//     return result();
// }
// call()

// ================= stack & lexical environment ==============

const sum = function (a, b) {
    return console.log(a + b);
    // Record: {}
    // Parent: calculator
}
const min = (a, b) => console.log(a - b);
const calculator = function (callback) {
    const numberA = 5;
    const numberB = 10;
    // console.log(this);
    return callback(numberA, numberB);//15
    // Record: {numberA: 5, numberB: 10}
    // Parent: result

}
const result = function (x) {
    // console.log(this);
    console.log(x);
    return calculator(sum); //15
    // Record: {sum}
    // Parent: call

}
const call = function (y) {
    const x = 10;
    console.log(y);
    return result(y); //15
    // Record: {}
    // Parent: Window
}
call(12)



// const user = {
//     name: "Alex",
//     getName() {
//         console.log(this.name);
//     }
// }
// user.getName();

// object.getName()


const globalScope = {
    sum,
    min,
    calculator,
    result,
    call
}

// const func = function () {
//     const x = 5;
//     console.log(this);
//     // Record: {x: 5}
//     // Parent: Window
// }
// func()

// const func = {
//     x: 5,
// }




// const sum = (a, b) => 6
// console.log(sum(1, 5));


// 1 ===========
// const getResult = function (n) {
//     return function () {
//         return console.log('result:', n * 1000);
//     }
// }

// const newResult = getResult(12);
// console.dir(newResult)

// newResult();

// =================================
// const getResult = function (newValue = 10) {
//     let n = newValue;
//     return function () {
//         return console.log('result:', n += 1);
//     }
// }

// const newResult = getResult();
// newResult();
// newResult();
// newResult();

// 2 ============
// 'use strict'
// const counter = function (n = 0) {
//     let count = n;

//     return function (step = 1) {
//         count += step;
//         return console.log('count', count);
//     }
// }

// const counter1 = counter(50);
// const counter1 = counter(50)(2);
// counter1(2);
// counter1(2);
// counter1(2);
// counter1(2);
// console.log("================");

// const counter2 = counter(100);
// counter2()
// counter2()
// counter2()
// counter2()
// console.log("================");
// counter1(2)

// const counter3 = counter();
// counter3(2)
// counter3(2)
// counter3(2)
// counter3(2)











