export function getMarkup(dist, data) {
    const className = dist.className.split(' ')[0]
    const markup = data.map(item => {
        return `<li 
        class="js-${className}Item ${(item.id === '1') ? 'activeNavigationItem' : ''}" 
        data-id=${item.id}
        ${item.genre ? `data-genre=${item.genre}`: ''}
        >${item.title}</li>`
    }).join(''); //[]
    dist.innerHTML = markup;
}

export function getListItems(dist, data) {
    const markup = data.map(item => `
    <li class="listItem js-${dist.className}Item" data-id=${item.id}>
    <h3 class="listItemTitle">${item.title}</h3>
    <img class="listItemImage" src=${item.anchor} alt=${item.title} >
    <p class="listItemDescription"><b>Описание:</b> ${item.description.slice(0,200)}...</p> 
    <p class="listItemPrice"><b>Цена: </b> ${item.price} грн.</p> 
    <button class="listItemaddButton">Добавить в корзину</button> 
    </li>
    `).join(''); //[]
    dist.innerHTML = markup;
}