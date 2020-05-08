import { navigation } from '../data.js';
import { getMarkup } from '../services/services.js';

const Header = () => {
    const navigationList = document.querySelector('.navigationList');
    const myAdvPage = document.querySelector('.myAdvPage');
    const gamesGenresList = document.querySelector('.gamesGenresList');//

    const openGengresPage = (e) => {
        if (e.target === e.currentTarget) {
            return
        }

        const currentActiveLink = navigationList.querySelector('.activeNavigationItem');
        if (currentActiveLink) {
            currentActiveLink.classList.remove('activeNavigationItem');
        }
        (e.target.dataset.id) && e.target.classList.add('activeNavigationItem');

        gamesGenresList.classList.add('hide');
        myAdvPage.classList.add('hide');


        switch (e.target.dataset.id) {
            case '1':
                myAdvPage.classList.remove('hide');
                break;
            case '2':
                gamesGenresList.classList.remove('hide');
                break;

            default:
                console.log("Hello")
                break;
        }
    }

    getMarkup(navigationList, navigation);
    navigationList.addEventListener('click', openGengresPage);
}


export default Header;