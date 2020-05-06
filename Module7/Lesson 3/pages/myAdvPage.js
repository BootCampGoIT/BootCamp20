export function toggleStateForm() {
    itemCreaterForm.classList.toggle('hide');
}

const data = {
    title: '',
    anchor: '',
    price: '',
    description: ''
}

export function getNewItemInfo(e) {
    data[e.target.name] = e.target.value;
}

function clear(data) {
    const keys = Object.keys(data);
    keys.map(key => data[key] = '')
}

export function addNewItem(e) {
    e.preventDefault();
    myAdvise.push({ id: `${Date.now()}`, ...data });
    itemCreaterForm.reset();
    console.log(myAdvise);
    clear(data);
}