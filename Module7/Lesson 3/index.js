import { navigation, gamesGenres, myAdviseData } from './data.js';
import { getMarkup, getListItems} from './services/services.js';
import {toggleStateForm, addNewItem, getNewItemInfo} from './pages/myAdvPage.js';

const myAdvise = [...myAdviseData];
// ==== pages ======
const myAdvPage = document.querySelector('.myAdvPage');
// ====================
const navigationList = document.querySelector('.navigationList');
const gamesGenresList = document.querySelector('.gamesGenresList');
const myAdviseList = document.querySelector('.myAdviseList');
const addNewAdv = document.querySelector('.addNewAdv');
const itemCreaterForm = document.forms.itemCreaterForm;

function openGengresPage(e) {
    if (e.target === e.currentTarget) {
        return
    }
    const currentActiveLink = navigationList.querySelector('.activeNavigationItem');
    if (currentActiveLink) {
        currentActiveLink.classList.remove('activeNavigationItem');
    }
    (e.target.dataset.id) && e.target.classList.add('activeNavigationItem');
    
    if (e.target.dataset.id === '2') {
        gamesGenresList.classList.remove('hide');
    } else {
        gamesGenresList.classList.add('hide');
    }
    
    if (e.target.dataset.id === '1') {
        myAdvPage.classList.remove('hide');
    } else {
        myAdvPage.classList.add('hide');
    }
}

// ======= bugs ==============
getMarkup(navigationList, navigation);
getMarkup(gamesGenresList, gamesGenres);
getListItems(myAdviseList, myAdvise);

// ========================

navigationList.addEventListener('click', openGengresPage);
addNewAdv.addEventListener('click', toggleStateForm);
itemCreaterForm.addEventListener('change', getNewItemInfo);
itemCreaterForm.addEventListener('submit', addNewItem);














