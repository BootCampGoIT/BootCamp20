const products = {
    items: [],
    // isFirst: true,
    selectedPageNumber: 1,
    productsCount: 2,
    filteredArr: [],
    add(product, price) {
        const item = {
            id: `${Date.now()}`,
            product,
            price
        }

        this.items = [item, ...this.items]
        return item
    },
    delete(id) {
        this.items = [...this.items.filter(item => item.id !== id)];
        getProductsList();
        getPagesCount(this.items)
    },
    select(pageNumber) {
        const currentArray = [...this.items.filter((item, index) => {
            return ((index < (pageNumber * this.productsCount)) && (index >= (pageNumber * this.productsCount - this.productsCount)))
        })]
        return currentArray
    }
}

// ================== product Block ====================

const refs = {
    productForm: document.querySelector('.productForm'),
    productList: document.querySelector(".productList"),
    pagination: document.querySelector(".pagination"),
    formButton: document.querySelector('.formButton'),
}

function createProductCard(item) {
    const { id, product, price } = item;
    return `
        <li class="productItem" data-id=${id}>
            <h2 class="productName">${product}</h2>
            <p class="productPrice">${price}</p>
            <button class="cardButton">Delete</button>
        </li>
        `
}

function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const productName = form.elements.name.value;
    const productPrice = form.elements.price.value;
    const currentProduct = products.add(productName, productPrice);
    createProductCard(currentProduct);
    form.reset();
    getPagesCount(products.items)
    getProductsList();
}

function getPagesCount(array) {
    refs.pagination.innerHTML = pageGenerator(array);
    refs.pagination.querySelector('.pag').classList.add('activePag');
}

function getProductsList() {
    const result = products.select(1);
    let string = '';
    result.forEach(element => {
        string += createProductCard(element);
    });
    refs.productList.innerHTML = string
}

function deleteProductMarkup(e) {
    if (e.target.nodeName !== "BUTTON") return;
    const button = e.target;
    const li = button.closest(".productItem");
    const id = li.dataset.id
    products.delete(id);
    li.remove();
}

// ============= pagination block ===========
function pageGenerator(array) {
    let pageNumbers = Math.ceil(array.length / products.productsCount);
    let pages = '';
    for (let i = 1; i <= pageNumbers; i++) {
        let page = `<div class="pag" data-id=${i}> ${i} </div>`
        pages += page
    }
    return pages;
}

function pageHandler(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return
    }
    const currentActiveLink = refs.pagination.querySelector('.activePag');
    (currentActiveLink) && currentActiveLink.classList.remove('activePag');
    e.target.classList.add('activePag');
    const result = products.select(e.target.dataset.id);

    let string = '';
    result.forEach(element => {
        string += createProductCard(element);
    });
    refs.productList.innerHTML = string
}


refs.pagination.addEventListener('click', pageHandler);
refs.productForm.addEventListener("submit", handleSubmit);
refs.productList.addEventListener('click', deleteProductMarkup);


























