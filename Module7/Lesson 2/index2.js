export function createListItem(elem, elemClass, text ) {
    const li = document.createElement(elem);
    li.classList.add(elemClass);
    li.textContent = text;
    return li
}

export function createMarkup (container, array) {
    const ul = document.createElement('ul');
    const fragment = document.createDocumentFragment();// <></>

    array.forEach(text => {
        const li = createListItem('li', 'listItem', text );
        fragment.append(li) //<><li></li><li></li></>
    });

    ul.append(fragment)
    container.append(ul);
} 