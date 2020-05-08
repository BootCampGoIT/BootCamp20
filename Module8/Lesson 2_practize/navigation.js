const nav = document.querySelector('.nav');
nav.querySelector('.navLink a').classList.add('activeNavLink');

nav.addEventListener("click", navClickHandler);

function navClickHandler(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return
    }
    const currentActiveLink = nav.querySelector('.activeNavLink');
    (currentActiveLink) && currentActiveLink.classList.remove('activeNavLink');
    e.target.classList.add('activeNavLink');
}