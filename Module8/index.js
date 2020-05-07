// const todo = [];

// const refs = {
//     formTodo: document.forms.formTodo,
//     list: document.querySelector('.list'),
// }

// const createListItem = (object) => {
//     refs.list.insertAdjacentHTML('beforeend', createMarkup(object));
// }

// const addTask = (e) => {
//     e.preventDefault();
//     const task = refs.formTodo.elements.task.value
//     const newTask = { id: `${Date.now()}`, task };
//     refs.formTodo.reset();
//     todo.push(newTask);
//     createListItem(newTask);
// }

// const createMarkup = (object) => {
//     return `<li>
//     <span>${object.task}</span>
//     <button data-id=${object.id}>Delete</button>
//     </li>`;
// }

// const deleteTask = (e) => {
//     console.log(e.target)
//     // ========== 1 =============
//     //e.currentTarget = ul; //list
//     //e.target = ul || li || span || button
//     // if (e.target === e.currentTarget) { //ul = ul 
//     //     return 
//     // }

//     if (e.target.nodeName === 'BUTTON') {
//         const result = todo.find(todoItem => todoItem.id === e.target.dataset.id);
//         const index = todo.indexOf(result);
//         todo.splice(index, 1);

//         const markup = todo.reduce((acc, task) => {
//             return acc += createMarkup(task);
//         }, '');
//         refs.list.innerHTML = markup;
//     }
// }

// refs.list.addEventListener('click', deleteTask)
// refs.formTodo.addEventListener('submit', addTask);



// ========  filter =================

const todo = [];

const refs = {
    formTodo: document.forms.formTodo,
    filterForm: document.forms.filterForm,
    list: document.querySelector('.list'),
}

const createListItem = (object) => {
    refs.list.insertAdjacentHTML('beforeend', createMarkup(object));
}

const addTask = (e) => {
    e.preventDefault();
    const task = refs.formTodo.elements.task.value
    const newTask = { id: `${Date.now()}`, task };
    refs.formTodo.reset();
    todo.push(newTask);
    createListItem(newTask);
}

const createMarkup = (object) => {
    return `<li>
    <span>${object.task}</span>
    <button data-id=${object.id}>Delete</button>
    </li>`;
}

const deleteTask = (e) => {
    console.log(e.target)
    // ========== 1 =============
    //e.currentTarget = ul; //list
    //e.target = ul || li || span || button
    // if (e.target === e.currentTarget) { //ul = ul 
    //     return 
    // }

    if (e.target.nodeName === 'BUTTON') {
        const result = todo.find(todoItem => todoItem.id === e.target.dataset.id);
        const index = todo.indexOf(result);
        todo.splice(index, 1);

        const markup = todo.reduce((acc, task) => {
            return acc += createMarkup(task);
        }, '');
        refs.list.innerHTML = markup;
    }
}

const filterElements = (e) => {
    e.preventDefault();
    const value = refs.filterForm.elements.filter.value;
    const result = todo.filter(item => item.task.toLowerCase().includes(value));

    const markup = result.reduce((acc, task) => {
        return acc += createMarkup(task);
    }, '');
    refs.list.innerHTML = markup;
}

refs.filterForm.addEventListener('input', _.debounce((e) => filterElements(e), 5000))
refs.filterForm.addEventListener('input', _.throttle((e) => filterElements(e), 5000))
refs.list.addEventListener('click', deleteTask);
refs.formTodo.addEventListener('submit', addTask);



