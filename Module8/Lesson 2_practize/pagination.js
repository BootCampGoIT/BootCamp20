
function pageGenerator(array) {
    let pageNumbers = Math.ceil(array.length / 3);
    let pages = '';
    for (let i = 1; i <= pageNumbers; i++) {
        let page = `<div class="pag"> ${i} </div>`
        pages += page
    }
    return pages;
}
function pageHandler(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return
    }
    const currentActiveLink = pagination.querySelector('.activePag');
    (currentActiveLink) && currentActiveLink.classList.remove('activePag');
    e.target.classList.add('activePag');
}

pageGenerator(products);

const pagination = document.querySelector('.pagination');
pagination.insertAdjacentHTML('afterbegin', pageGenerator(products));
pagination.addEventListener('click', pageHandler);
pagination.querySelector('.pag').classList.add('activePag')

