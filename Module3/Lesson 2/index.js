// ================== spread =======================
// const numbers = [1, 2, 3, 4, 5, 6];

// function getNumber(...data) {


//     // console.log(data);

//     // const data = Array.from(arguments)
//     // console.log(data);
//     // const data = [...arguments];
//     // console.log(a);
//     // console.log(b);
//     // console.log(rest);
//     // console.log(arguments);
//     console.log([...arguments]); //spread
//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }

// }

// getNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

// ====================== rest ===================
// const numbers = [1, 2, 3, 4, 5, 6];
// const newNumbers = [...numbers, 1, 2, 3, 4, 5];
// console.log(newNumbers);

// =================== деструктуризация объекта ======================

// const user = {
//     id: Date.now(),
//     name: "Alex",
//     age: 25,
//     status: 'student',
//     course: {
//         courseName: "BC#20",
//         listNumber: 10
//     },
//     getData() {
//         console.log(this.name);
//     },
// }

// function getInfo({name = "Alex", age = 25, course: {listNumber = 10} = {}}) { //newUser: user

//     // const name = newUser.name;
//     // const age = newUser.age;
//     // const listNumber = course.listNumber;

//     // const { age, name } = newUser;
//     // const { age = 0, name = 'No name' } = newUser;
//     console.log(`UserName: ${name}. 
//     He is: ${age}. 
//     His listNumbe: ${listNumber} `);
// }

// getInfo(user)





// =========================================
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
// =========================================

// const arr = [[1, 2], [[3, 4], {name: "Alex"}]];

// const [[x1, y1], [, a]] = arr;
// console.log(x1, y1, a);

// console.log(arr[1][1]);

// ================= TODO LIST ========================
// const todo = {
//     todoList: [],

//     getId() {
//         return this.todoList.length + 1
//     },

//     logTasks() {
//         console.table(this.todoList);
//     },

//     addTask(newTask) {
//         const id = this.getId();
//         this.todoList = [...this.todoList, { id: id, title: newTask }];
//         this.logTasks();
//     },

//     delTask(id) {
//         for (const task of this.todoList) {
//             if (id === task.id) {
//                 const index = this.todoList.indexOf(task);
//                 this.todoList.splice(index, 1);
//                 this.logTasks();
//             }
//         }
//         this.todoList = this.todoList.filter(item => item.id !== id);
//     },
//     editTask(id, newTitle) {
//         for (const task of this.todoList) {
//             if (id === task.id) {
//                 task.title = newTitle;
//                 this.logTasks();
//             }
//         }
//     }
// }

// todo.addTask('Task1');
// todo.addTask('Task2');
// todo.addTask('Task3');
// todo.addTask('Task4');
// todo.addTask('Task5');

// todo.delTask(2);

// todo.editTask(4, 'Hello');

// console.log(window);
// console.log(document);

// fetch('https://kidslike.herokuapp.com/auth/signup', {
//     method: "POST",
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({ email: "test111111@mail.com", password: "qwer114321" })
// }).then(res => res.json()).then(resData => console.log('resData', resData));


