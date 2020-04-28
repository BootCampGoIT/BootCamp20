// const object = {
//     name: "some name",
//     showThis: function showThis() {
//         //! this = object
//         const fn = function fn() {
//             console.log("this in fn: ", this); //?почему fn не взял контекст у showThis
//             const fn2 = () => {
//                 console.log("this in fn2: ", this);
//             };
//             fn2();
//         };
//         fn();
//         console.dir(fn);
//         console.log("this in showThis: ", this);
//     },
// };
// object.showThis();
// const object = {};
// const object = new Object();
// console.log(object);
// ============================
// const cart = {
//     items: [],
//     quantity: 0,
//     addItem() {
//         this.items.push({ productName: 'Milk' })
//     }
// }

// ======================

// const cart = {
//     items: [],
//     addItem() {
//     }
// }
// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);
// console.log(array.filter(item => item === 3));

// ===================== constructor ========================

// const user = {
//     name: "Alex",
//     showThis(name) {
//         this.name = name;
//         console.log(this);
//     },
// };
// user.showThis('Nikita');

// ============
// const getInfo = function () {
//     console.log(this.name);
// }

// const User = function (name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;

//     this.getInfo = getInfo;
// }

// const alex = new User('Alex', 25, 'student');
// const poly = new User('Poly', 27, 'student');
// const nikita = new User('Nikita', 28, 'student');

// // console.dir(alex);

// ==================================

// const Manager = function (name = 'manager', sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function (product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}.`;
//     };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// =============== prototype ==================

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// console.log(dog);
// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// ======================

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog);
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// const superUser = {
//     name: "Nikita",
//     logInfo() {
//         console.log(this.name);
//     }
// }

// const user = Object.create(superUser, {
//     name: {
//         value: "user",
//         enumerable: false,
//         writable: false,
//         configurable: true
//     },
//     age: {
//         value: 25,
//         enumerable: false,
//         writable: false,
//         configurable: false
//     },
// });

// user.status = "status"
// delete user.name;
// // console.log(user.name = 'Nikita');
// // delete user.name;
// console.log(user.hasOwnProperty('age'));

// user.logInfo()
// console.log(Object.keys(user));


// user.getName();

// user.method();


// user.name = "Nikita";
// console.log(user);

// for (const key in user) {
//     console.log(key);
// }

// ===================
// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
// };

// // console.dir(Guest);
// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// ========================


// // game "MARVEL'S HERO"
// // 1. Создаем прототип нашего героя 
// // const Hero = function ({ name = "", health = 100, hitPower = 1.1, speed = 1 }) {
// //     this.name = name;
// //     this.health = health;
// //     this.hitPower = hitPower;
// //     this.speed = speed;
// // }
// // Hero.prototype.hit = function (hitPower, speed) {
// //     this.health -= hitPower * speed;
// // }
// // // 2. Создаем героев на основе прототипа
// // const spiderMan = new Hero({ name: "spiderMan", hitPower: 1.3, speed: 2.3 });
// // const hulk = new Hero({ name: "Hulk", hitPower: 2.3 });

// // // 3. Тестируем возможности наших героев
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // console.log('hulk :', hulk);

// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // console.log('spiderMan :', spiderMan);



// const Hero = function ({ health = 100, speed = 1.1, strange = 2 }) {
//     this.health = health;
//     this.speed = speed;
//     this.strange = strange;

//     // this.hit = function (hit, strange, speed) {
//     //     this.health = this.health - hit * strange * speed;
//     // }
// }

// // 2. Создаем героев на основе прототипа

// const ironMan = new Hero({ health: 100, speed: 1.3, strange: 2 });

// const capAmerica = new Hero({ health: 100, speed: 1.1, strange: 2 })

// // 3. Тестируем возможности наших героев

// // ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// // ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// // capAmerica.hit(20, ironMan.strange, ironMan.speed)
// // console.log('ironMan :', ironMan);
// // console.log('capAmerica :', capAmerica);

// // 4. Выносим методы в отдельные функции

// Hero.prototype.hit = function (hit, strange, speed) {
//     this.health = this.health - hit * strange * speed;
// }
// // console.dir(Hero.prototype);
// // 5. Тестируем
// ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// capAmerica.hit(20, ironMan.strange, ironMan.speed)
// console.log('ironMan :', ironMan);
// console.log('capAmerica :', capAmerica);

// // game over


// ==========================
// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// // const newHero = new Hero("Alex", 200);
// // console.log(newHero);

// const Warrior = function (name, xp, weapon) {
//     this.weapon = weapon;
//     Hero.call(this, name, xp)
//     // console.log('this :>> ', this);
//     // console.log('this :>> ', this);
//     // this.asdf = new Hero('Poly', 200,)
//     // Hero.call(this, name, xp);
//     // console.log('this :>> ', this);
// };
// // const warrior = new Warrior("Alex", 200, "sword");
// // console.log(warrior);

// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };
// // console.dir(Hero);

// const poly = new Warrior('Poly', 200, 'sword');

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// console.dir(poly);


// console.log(poly);

// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = createObject("Poly", 25, 300);
// console.log(poly);

// ======================

// const creator = {
//     name: '',
//     age: 0,
//     xp: 0,
//     createObject( name = 0, age = 0, xp = 200 ) {
//         return { name, age, xp }
//     }
// }

// const newUser = {...creator, ...creator.createObject("Alex", 25, 500)};
// console.log(newUser);














// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
// };




// ======================
// const obj = {};

// const obj = new Object()
// console.log(obj)