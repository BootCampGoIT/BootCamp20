import { myAdviseData, navigation } from '../data.js';

const myAdvise = [...myAdviseData];
const form = () => {
    const addNewAdv = document.querySelector('.addNewAdv');
    const itemCreaterForm = document.forms.itemCreaterForm;


    const toggleStateForm = () => {
        itemCreaterForm.classList.toggle('hide');
    }

    const data = {
        title: '',
        anchor: '',
        price: '',
        description: ''
    }

    const getNewItemInfo = (e) => {
        data[e.target.name] = e.target.value;
    }

    const clear = (data) => {
        const keys = Object.keys(data);
        keys.map(key => data[key] = '')
    }

    const addNewItem = (e) => {
        e.preventDefault();
        myAdvise.push({ id: `${Date.now()}`, ...data });
        itemCreaterForm.reset();
        console.log(myAdvise);
        clear(data);
    }


    addNewAdv.addEventListener('click', toggleStateForm);
    itemCreaterForm.addEventListener('change', getNewItemInfo);
    itemCreaterForm.addEventListener('submit', addNewItem);
}

export default form;