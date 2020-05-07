import { getMarkup } from '../services/services.js';
import { gamesGenres } from '../data.js';

const GamePage = () => {
    const gamesGenresList = document.querySelector('.gamesGenresList');
    getMarkup(gamesGenresList, gamesGenres);
}


export default GamePage;