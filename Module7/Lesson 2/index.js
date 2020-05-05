// import {createMarkup} from './index2.js';

// const body = document.querySelector('.ulContainer');

// const array = ['Home', 'About', 'Contacts'];
// createMarkup(body, array);

// ======== innerHTML ======= data => insertAdjasementHTML ===============


// const description = document.querySelector('.description');
// const string1 = `
// <li>Hello</li>
// `;
// const string2 = `
// <li>Hello dfsdfsdf</li>
// `;

// description.innerHTML = string1;
// const outer = description.outerHTML; 

// description.innerHTML = string2;
// console.log('outer:', outer);

// =====================================

// Будьте осторожны: 
// в отличие от innerHTML, запись в outerHTML не изменяет элемент. 
// Вместо этого элемент заменяется целиком во внешнем контексте.

// const outer = document.querySelector('.outer');
// const inner = document.querySelector('.inner');

// outer.outerHTML = `<p>fsdfdsfdsfsd</p>`
// outer.innerHTML = `<p>fsdfdsfdsfsd</p>`

// console.dir(description);


// ---------------------------
// const element = document.createElement('li');
// element.textContent = "Hello";
// description.insertAdjacentElement('beforebegin', element);

// description.insertAdjacentHTML('afterbegin', li);

// ----------------------------------------------------

// import data from './data.js';
// const comments = [...data];
// const description = document.querySelector('.description');
// const commentForm = document.forms.commentForm;
// const button = commentForm.elements.addComment;

// // console.dir(document.forms.commentForm);
// // console.dir(document.forms.commentForm.elements.name.value);

// function createElement({ name, email, body }) {
//     return `
//     <li>
//         <h2>${name}</h2>
//         <p>${email}</p>
//         <p>${body}</p>
//     </li>`
// }

// function createMarkup(dist, data) {
//     const markup = data.reduce((acc, comment) => {
//         return acc += createElement(comment)
//     }, '');
//     dist.innerHTML = markup;
// }

// function createNewComment(e) {
//     e.preventDefault();
//     const name = commentForm.elements.name.value;
//     const email = commentForm.elements.email.value;
//     const body = commentForm.elements.body.value;
//     const comment = { id: Date.now(), name, email, body }
//     commentForm.reset();

//     comments.push(comment);

//     const commentMarkup = createElement(comment);
//     description.insertAdjacentHTML('beforeend', commentMarkup);
//     console.log('comments :>> ', comments);
// }

// createMarkup(description, comments);

// button.addEventListener('click', createNewComment);
// button.addEventListener('click', () => console.log('comment was created'));

// // button.onclick = createNewComment; 

































