import { getMarkup, getListItems } from '../services/services.js';
import { gamesGenres, actions, strategy } from '../data.js';

// именованный экспорт
// export function GamePage () {
//     const gamesGenresList = document.querySelector('.gamesGenresList');
//     getMarkup(gamesGenresList, gamesGenres);
// }

// экспорт по дефолту
const GamePage = () => {

    const gamesGenresList = document.querySelector('.gamesGenresList');
    const gamesItemsList = document.querySelector('.gamesItemsList')

    getMarkup(gamesGenresList, gamesGenres);

    const getData = (e) => {
        const genre = e.target.dataset.genre;
        switch (genre) {
            case 'actions':
                getListItems(gamesItemsList, actions);
                break;

            case 'strategy':
                getListItems(gamesItemsList, strategy);
                break;

            default:
                break;
        }
    }

    gamesGenresList.addEventListener('click', getData);
}

export default GamePage;


