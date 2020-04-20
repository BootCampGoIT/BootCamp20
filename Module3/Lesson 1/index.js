console.log('object');

// 1. Есть пустой массив.
// 2. В массив будут добавляться строки
// 3. Ввод данных будет осуществляться при помощи prompt
// 4. Пока пользователь не нажмет кнопку "отмена" элементы добавляются в конец/начало массива
// 5. После начатия кнопки "отмена" в Prompt выводится результирующий массив.



// let input;

// const cart = [
//     [12132332, 'Ajax', [21,1221,12,12,212]], //
//     [2455465, 'Poly', [21,1221,12,12,212] ], 
//     [24234243233, 'Mango', [21,1221,12,12,212]],
//     [12132332, 'Ajax1', [21,1221,12,12,212]],
//     [2455465, 'Poly1', [21,1221,12,12,212]], 
//     [24234243233, 'Mango1', [21,1221,12,12,212]],
//     [12132332, 'Ajax2', [21,1221,12,12,212]],
//     [2455465, 'Poly2', [21,1221,12,12,212]], 
//     [24234243233, 'Mango2', [21,1221,12,12,212]],
// ];

// const addProduct = function (inputValue) {
//     if (inputValue !== null && inputValue !== '') {
//         cart.push([cart.length + 1, inputValue])
//     }
// }

// const delProduct = function (name) {
//     let elementIndex = 0;

//     for (const cartItem of cart) { // cartItem = [5345, 'rdffgfgf']
//         if (cartItem[1] === name) //cartItem[1] = 'rdffgfgf'
//             elementIndex = cart.indexOf(cartItem);
//     }

//     cart.splice(elementIndex, 1);
// }

// // while (input !== null) {
// //     input = prompt("Enter your product");
// //     addProduct(input);
// // }


// let inputDel = prompt('Enter productName')
// delProduct(inputDel)


let input;

const cart = [
    [12132332, 'Ajax', [21, 1221, 12, 12, 212]],
    [2455465, 'Poly', [21, 1221, 12, 12, 212]],
    [24234243233, 'Mango', [21, 1221, 12, 12, 212]],
    [12132332, 'Ajax1', [21, 1221, 12, 12, 212]],
    [2455465, 'Poly1', [21, 1221, 12, 12, 212]],
    [24234243233, 'Mango1', [21, 1221, 12, 12, 212]],
    [12132332, 'Ajax2', [21, 1221, 12, 12, 212]],
    [2455465, 'Poly2', [21, 1221, 12, 12, 212]],
    [24234243233, 'Mango2', [21, 1221, 12, 12, 212]],
];

const cart2 = {
    id: 'fgggd67df8g686dfgd',
    name: 'Poly',
    numbers: [21, 1221, 12, 12, 212]
};

cart2.numbers.forEach(item => {
    console.log(item);
})

// console.log(cart2.numbers)


// const addProduct = function (inputValue) {
//     if (inputValue !== null && inputValue !== '') {
//         cart.push([cart.length + 1, inputValue])
//     }
// }

// const delProduct = function (name) {
//     let elementIndex = 0;
//     //   cart = [ ..., [12132332, 'Ajax', [21,1221,12,12,212]], ...],

//     for (const cartItem of cart) { // cartItem = [12132332, 'Ajax', [21,1221,12,12,212]]
//         for (const cartItemNumber of cartItem[2]) {// cartItemNumber = [21,1221,12,12,212]
//                 if (cartItemNumber.includes(name)) 
//                     elementIndex = cart.indexOf(cartItem);
//             }

//         }


//     cart.splice(elementIndex, 1);
// }

// // while (input !== null) {
// //     input = prompt("Enter your product");
// //     addProduct(input);
// // }


// let inputDel = prompt('Enter productName')
// delProduct(inputDel)












