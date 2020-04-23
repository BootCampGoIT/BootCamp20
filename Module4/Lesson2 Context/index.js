
// ==================== 
// const getContext = function () {
//     console.log(this);
// } 
// getContext(); //window || undefined

// =======================
// const getContext = function () {
//     console.log(this);
// }

// const user = {
//     name: "Alex",
//     age: 25,
//     getContext,
// }

// user.getContext(); //{}
// getContext();

// ========================

// const user = {
//     name: "Alex",
//     age: 25,
//     getContext: function () {
//         console.log(this);
//         // return this
//     },
// }
// const user1 = user;
// console.log(user1);

// const func = function () {
//     console.log('Hello');
// }

// console.log(typeof func);

// func.newFunc = function () {
//     console.log("HEllo 1");
// }

// func.newFunc()

// user.getContext()

// window.getInfo = function () {
//     console.log(this);
// }
// getInfo()//window

// console.dir(window);

// ==================== () => {} ==========================

// const getUserInfo = () => {
//     console.log(this);
// }

// const user = {
//     name: "Alex",
//     getUserInfo: () => {
//         console.log(this);
//     }
// }

// user.getUserInfo()


// ===================================

// const getContext = function () {
//     console.log('this', this);
// }

// const functionsForUser = {
//     getProperties(course, status) {
//         this.course = course;
//         this.status = status;

//         console.log(this);
//         console.group(`${this.name} properties`);
//         console.log('Name:', this.name);
//         console.log('Age:', this.age);
//         console.log('Course:', course);
//         console.log('Status:', status);
//         console.groupEnd();
//     }
// }


// const alex = {
//     name: "Alex",
//     age: 25,
//     info: ['BC#20', 'student']
// }
// const nikita = {
//     name: "Nikita",
//     age: 30,
//     info: ['BC#19', 'student']
// }

// const users = [alex, nikita];

// for (const user of users) {
//     functionsForUser.getProperties.bind(user, 'BC#20', 'student');
// }

// const getInfo = functionsForUser.getProperties.bind(nikita, 'BC#20', 'student');
// getInfo()
// console.log(alex);


// (function getProperties(course, status) {
//     console.log(alex);
//     console.group(`${alex.name} properties`);
//     console.log('Name:', alex.name);
//     console.log('Age:', alex.age);
//     console.log('Course:', course);
//     console.log('Status:', status);
//     console.groupEnd();
// })()
// getInfo('BC#20', 'student');


// const course = 'BC#21';
// const status = 'teacher';
// const props = ['BC#20', 'student'];

// functionsForUser.getProperties.bind(alex, 'BC#20', 'student')();
// functionsForUser.getProperties.call(nikita, course, status);
// functionsForUser.getProperties.apply(nikita, props);

// ============================
// const functionsForUser = {
//     getProperties(course = "BC+20", status='student') {
//         this.course = course;
//         this.status = status;
//         console.log(this);
//         console.group(`${this.name} properties`);
//         console.log('Name:', this.name);
//         console.log('Age:', this.age);
//         console.log('Course:', this.course);
//         console.log('Status:', this.status);
//         console.groupEnd();
//     }
// }
// const nikita = {
//     name: "Nikita",
//     age: 30,
//     info: ['BC#19', 'student']
// }
// const course = 'BC#21';
// const status = 'teacher';

// const getInfo = functionsForUser.getProperties.bind(nikita);
// getInfo();
// functionsForUser.getProperties.call(nikita);

// =============================

// const alex = {
//     name: "Alex",
//     getName: () => {
//         console.log(this);
//     }
// }

// const getName = new Function();
// console.log(alex.getName.bind(alex)());

// =========================
// const test = {
//     name: "Alex",
//     createContext: function () {
//         return function () {
//             console.log(this);
//             // console.log(arguments);
//         }
//     },
//     createArrowContext: function () {
//         return () => {
//             console.log(this);
//             // console.log(arguments);
//         }
//     }
// }

// const anonim = test.createContext();
// const arrow = test.createArrowContext();

// anonim(); //window
// arrow(); // test

// const getData = function () {
//     console.log(this);
// }
// // getData()

// const object = {
//     name: "Alex",
//     getData: function () {
//         console.log(this);
//     }
// }

// const get = function () {
//     console.log(this);
// }
// get()

// =========================
// const showThis = () => {
//     console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = {
//     name: 'Mango',
//     showContext: {
//         getCont: function () {
//             return () => {
//             console.log('this in showThis: ', this);
//         }
//     }
// }



// user.showContext.getCont();

// function asd() {
//     const getData = () => {
//         console.log(this); //
//     }
//     getData()
// }

// asd()




// =============================
// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//       const context = this;
//       const fn = function fn() {
//         console.log('this in fn: ', context);
//       };

//       fn();
//       console.log('this in showThis: ', this);
//     },
//   };

//   hotel.showThis();
//   // this in fn: {name: 'Resort hotel', showThis: ƒ}
//   // this in showThis: {name: 'Resort hotel',showThis: ƒ}

//  ================== !!!!!!!!! ===============
// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//         const fn = () => {
//             console.log('this in fn: ', this); //{}
//         };
//         fn();
//     },
// };

// hotel.showThis();

// === ИЛИ =====
// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//         const fn = () => console.log('this in fn: ', this); 
//         fn();
//     },
// };

// hotel.showThis();

// ===================================
// const hotel = {
//     name: 'Resort hotel',
//     showThis: () => console.log('this:', this)
// };

// const user = {
//     name: "Alex"
// }

//     hotel.showThis.call(user);
// ==================================

// const func = function () {
//     console.log('Hello');
// }
// const arrow = () => {
//     console.log(this);
// }
// console.dir(func);
// console.dir(arrow);


// ================= Очень важно !!! ================================

// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//         // console.log(this);
//         const context = this;

//         const fn = function fn() {
//             console.log('this in fn: ', context);
//             console.log(this);
//           };

//         fn();

//     },
// };

// hotel.showThis();


// ==============================
// const alex = {
//     name: 'Alex',
//     age: 25,
//     getProps(data) {
//         console.group(`${this.name} props`);
//         console.log('this.name :>> ', this.name);
//         console.log('this.age :>> ', this.age);
//         console.groupEnd();
//         for (const a of data) {
//             console.log('a', a);
//         }
//     }
// }

// const nick = {
//     name: 'Nick',
//     age: 35,
// }

// // const getResult = alex.getProps.bind(nick);
// // getResult()
// alex.getProps.call(alex, ['40', '35']);


// ==========================================
// let i = 0;

// const getNumber = function (num) {
//     console.log(i);
//     if (i <= num) {
//         getNumber(5);
//         i += 1;
//     }
// }

// =============================================

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let i = 0;
// function func(num) {
//     console.log(array[i]);
//     i++;
//     if (i <= num.length - 1) {
//         func(num);
//     }
// }
// func(array);


const obj = {

}
console.dir(obj);


