import { myAdviseData } from '../data.js';
import { getListItems } from '../services/services.js';
import form from '../forms/form.js';


const AdsPage = () => {
    form();


    const myAdviseList = document.querySelector('.myAdviseList');
    getListItems(myAdviseList, myAdviseData);
}

export default AdsPage;



