console.dir(document);

const body = document.querySelector('body');
const list = document.querySelectorAll('.listItem');
console.log([...list]);

mainTitle.textContent = "BOM"
body.style.backgroundColor = 'black';

const array = ['Home', 'About', 'Contacts'];

// let markup = '<li class="listItem">Home</li><li class="listItem">About</li><li class="listItem">Contacts</li>';

const markup = array.reduce((acc, item) => {
    return acc += `<li class="listItem">${item}</li>`
}, '');
console.log(markup);

list.innerHTML = markup;

// =======================

// const email = document.querySelector('.email');
// const name = document.querySelector('.name');
// const password = document.querySelector('.password');

// console.log(email, name, password)
// console.dir(email.classList.contains('email'))
// email.classList.add('active');
// email.classList.remove('active');
// email.classList.replace('email', 'emailRed');
// email.classList.toggle('emailRed');

// ==============================================
// const modal = document.querySelector('.modal');
// const signUpForm = document.querySelector('.signUpForm')

// // const state = {
// //     isModalOpen: false,
// // }

// function modalHandler() {
//     signUpForm.classList.toggle('openModal');
//     // console.log(state.isModalOpen)
//     // if (!state.isModalOpen) {
//     //     signUpForm.classList.add('openModal');
//     //    state.isModalOpen = !state.isModalOpen;
//     // } else  {
//     //     signUpForm.classList.remove('openModal');
//     //    state.isModalOpen = !state.isModalOpen;
//     // }

//     // if (!state.isModalOpen) {
//     //     signUpForm.classList.add('openModal');
//     //     return state.isModalOpen = !state.isModalOpen;
//     // }
//     // if (state.isModalOpen) {
//     //     signUpForm.classList.remove('openModal');
//     //     return state.isModalOpen = !state.isModalOpen;
//     // }
// }

// // modal.addEventListener('click', modalHandler)
// modal.addEventListener('click', () => signUpForm.classList.toggle('openModal'))

// ===================================
// const email = document.querySelector('.email');
// const name = document.querySelector('.name');
// const password = document.querySelector('.password');
// const modal = document.querySelector('.modal');
// const signUpForm = document.querySelector('.signUpForm');
// const addButton = document.querySelector('.addButton');

// const refs = {
//     email: document.querySelector('.email'),
//     name: document.querySelector('.name'),
//     password: document.querySelector('.password'),
//     modal: document.querySelector('.modal'),
//     signUpForm: document.querySelector('.signUpForm'),
//     addButton: document.querySelector('.addButton')
// }

// const users = [];

// function modalHandler() {
//     refs.signUpForm.classList.toggle('openModal');
// }

// function createNewUser(event) {
//     const {email, name, password} = refs;
//     event.preventDefault();
//     const newUser = {
//         email: email.value,
//         name: name.value,
//         password: password.value,
//     }
//     users.push(newUser);
//     refs.signUpForm.reset();
//     console.log(users);
//     modalHandler();
// }

// refs.modal.addEventListener('click', modalHandler);
// refs.addButton.addEventListener('click', createNewUser);
// // document.querySelector('.addButton').addEventListener('click', createNewUser);

// ==================================================
// const email = document.querySelector('.email');
// const name = document.querySelector('.name');
// const password = document.querySelector('.password');
// const modal = document.querySelector('.modal');
// const signUpForm = document.querySelector('.signUpForm');
// const addButton = document.querySelector('.addButton');

// // console.log(email.hasAttribute('name'))
// // console.log(email.getAttribute('name'))
// // email.setAttribute('id', Date.now());
// // email.removeAttribute('id');
// // console.log(email.attributes);

// //  ------------ data ----------------------
// // email.dataset.id = '32312312312312312';
// // console.dir(email.dataset.id)
// // console.dir(name.dataset.id)

// ==========================================
// const heading = document.createElement('img', {src: "", alt:"picture"}, 'fsdfdsf');

// const body = document.querySelector('body');
// const modal = document.querySelector('.modal');

// const heading = document.createElement('h1');
// heading.textContent = 'This is a heading';
// heading.dataset.id = '12345'
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img'); //<img/>
// image.src = 'https://placeimg.com/640/480/nature';
// // image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');

// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">

// body.appendChild(heading);

// body.insertBefore(heading, body.firstChild)
// body.insertBefore(heading, modal);


// body.append(heading);
// body.prepend(heading);
// modal.before(heading)
// modal.after(heading)
// modal.replaceWith(heading);

// =======================
// const parent = document.querySelector('.parent');
// const title2 = parent.querySelector('.title2')
// console.log(title2);

// const all = document.querySelectorAll('.title2');
// console.log([...all].map(item=> item.textContent));


// ================= FRAGMENT =============
// const data = [1, 2, 3, 4, 5, 6, 7]

// const fragment = document.createDocumentFragment();
// function createFragment() {
//     return data.map(item=> {
//         const elem = document.createElement('h2');
//         elem.textContent = `${item}`
//         fragment.appendChild(elem)
//     })

// }
// createFragment();
// document.querySelector('.insertion').appendChild(fragment);

// ============================

// const component = {
//     users: [],
//     refs: {
//         email: document.querySelector('.email'),
//         name: document.querySelector('.name'),
//         password: document.querySelector('.password'),
//         modal: document.querySelector('.modal'),
//         signUpForm: document.querySelector('.signUpForm'),
//         addButton: document.querySelector('.addButton')
//     },
//     modalHandler() {
//         this.refs.signUpForm.classList.toggle('openModal');
//     },
//     createNewUser(event) {
//         const { email, name, password } = this.refs;
//         event.preventDefault();
//         const newUser = {
//             email: email.value,
//             name: name.value,
//             password: password.value,
//         }
//         this.users.push(newUser);
//         this.refs.signUpForm.reset();
//         console.log(this.users);
//         this.modalHandler();
//     },
// }

// component.refs.modal.addEventListener('click', component.modalHandler);
// component.refs.addButton.addEventListener('click', component.createNewUser);

// -----------------------------------------------------










