import {getMarkup} from '../services/services.js';
import {navigation } from '../data.js';


const header = () => {
    const gamesGenresList = document.querySelector('.gamesGenresList');
    const myAdvPage = document.querySelector('.myAdvPage');
    const navigationList = document.querySelector('.navigationList');

    const openGengresPage = (e) => {
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
    getMarkup(navigationList, navigation); 
    navigationList.addEventListener('click', openGengresPage);
}

export default header;