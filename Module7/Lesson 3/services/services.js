export function getMarkup(dist, data) {
    const markup = data.map(item => `<li class="js-${dist.className}Item" data-id=${item.id}>${item.title}</li>`).join(''); //[]
    dist.insertAdjacentHTML('afterbegin', markup);
}

export function getListItems(dist, data) {
    const markup = data.map(item => `
    <li class="js-${dist.className}Item" data-id=${item.id}>
    <h3>${item.title}</h3>
    <img src=${item.anchor} alt=${item.title} >
    <p>${item.description}</p> 
    <p>${item.price}</p> 
    </li>
    `).join(''); //[]
    dist.insertAdjacentHTML('afterbegin', markup);
}