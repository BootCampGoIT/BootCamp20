const productForm = document.querySelector('.productForm');
const productTitle = document.querySelector('.productTitle');
const productIMG = document.querySelector('.productIMG');
const productPrice = document.querySelector('.productPrice');
const productDescription = document.querySelector('.productDescription');
const addProductButton = document.querySelector('.addProduct');
const productList = document.querySelector('.productList');
const newProduct = document.querySelector('.newProduct');
const actionsItems = document.querySelector('.actions');
const rpgItems = document.querySelector('.rpg');
const category = document.querySelector('#category');

let isOpenModal = false;
const products = [];

const actions = [
    {
        id: 1,
        category: 'actions',
        title: 'Streets of Rage 4',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/985890/header.jpg?t=1588284729',
        description: 'The all-time classic Streets of Rage, known as Bare Knuckle (ベア・ナックル Bea Nakkuru) in Japan, is a trilogy of beat ‘em up known for this timeless gameplay and electronic dance influenced music. Streets of Rage 4 builds upon the classic trilogy’s gameplay with new mechanics, beautiful hand drawn visuals and a God tier soundtrack.',
        price: 100
    },
    {
        id: 2,
        category: 'actions',
        title: 'Moving Out',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/996770/header.jpg?t=1588272180',
        description: 'Moving Out — это уморительный симулятор переезда, опирающийся на законы физики, который перевернет ваше преставление о диванной совместной игре! Готовы начать свою карьеру в мире мебели? Станьте специалистом по перемещению и расстановке мебели',
        price: 200
    },
    {
        id: 3,
        category: 'actions',
        title: 'Streets of Rage 4',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/985890/header.jpg?t=1588284729',
        description: 'The all-time classic Streets of Rage, known as Bare Knuckle (ベア・ナックル Bea Nakkuru) in Japan, is a trilogy of beat ‘em up known for this timeless gameplay and electronic dance influenced music. Streets of Rage 4 builds upon the classic trilogy’s gameplay with new mechanics, beautiful hand drawn visuals and a God tier soundtrack.',
        price: 100
    },
    {
        id: 4,
        category: 'actions',
        title: 'Moving Out',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/996770/header.jpg?t=1588272180',
        description: 'Moving Out — это уморительный симулятор переезда, опирающийся на законы физики, который перевернет ваше преставление о диванной совместной игре! Готовы начать свою карьеру в мире мебели? Станьте специалистом по перемещению и расстановке мебели',
        price: 200
    },
    {
        id: 5,
        category: 'actions',
        title: 'Streets of Rage 4',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/985890/header.jpg?t=1588284729',
        description: 'The all-time classic Streets of Rage, known as Bare Knuckle (ベア・ナックル Bea Nakkuru) in Japan, is a trilogy of beat ‘em up known for this timeless gameplay and electronic dance influenced music. Streets of Rage 4 builds upon the classic trilogy’s gameplay with new mechanics, beautiful hand drawn visuals and a God tier soundtrack.',
        price: 100
    },
    {
        id: 6,
        category: 'actions',
        title: 'Moving Out',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/996770/header.jpg?t=1588272180',
        description: 'Moving Out — это уморительный симулятор переезда, опирающийся на законы физики, который перевернет ваше преставление о диванной совместной игре! Готовы начать свою карьеру в мире мебели? Станьте специалистом по перемещению и расстановке мебели',
        price: 200
    },
]

const rpg = [
    {
        id: 1,
        category: 'rpg',
        title: 'Train Station',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/914010/header.jpg?t=1588352146',
        description: 'Попробуйте собственными руками отреконструировать заброшенные станции и старые поезда. Верните им былую славу и помогите снова функционировать.',
        price: 300
    },
    {
        id: 2,
        category: 'rpg',
        title: "Lumberjack's Dynasty",
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/968970/header_alt_assets_0.jpg?t=1588250102',
        description: 'Неповторимый симулятор дровосека с видом от первого лица. Вам предстоит развить бизнес и основать свою династию.',
        price: 100
    },
    {
        id: 3,
        category: 'rpg',
        title: 'Train Station',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/914010/header.jpg?t=1588352146',
        description: 'Попробуйте собственными руками отреконструировать заброшенные станции и старые поезда. Верните им былую славу и помогите снова функционировать.',
        price: 300
    },
    {
        id: 4,
        category: 'rpg',
        title: "Lumberjack's Dynasty",
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/968970/header_alt_assets_0.jpg?t=1588250102',
        description: 'Неповторимый симулятор дровосека с видом от первого лица. Вам предстоит развить бизнес и основать свою династию.',
        price: 100
    },
    {
        id: 5,
        category: 'rpg',
        title: 'Train Station',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/914010/header.jpg?t=1588352146',
        description: 'Попробуйте собственными руками отреконструировать заброшенные станции и старые поезда. Верните им былую славу и помогите снова функционировать.',
        price: 300
    },
    {
        id: 6,
        category: 'rpg',
        title: "Lumberjack's Dynasty",
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/968970/header_alt_assets_0.jpg?t=1588250102',
        description: 'Неповторимый симулятор дровосека с видом от первого лица. Вам предстоит развить бизнес и основать свою династию.',
        price: 100
    },
    {
        id: 7,
        category: 'rpg',
        title: 'Train Station',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/914010/header.jpg?t=1588352146',
        description: 'Попробуйте собственными руками отреконструировать заброшенные станции и старые поезда. Верните им былую славу и помогите снова функционировать.',
        price: 300
    },
    {
        id: 8,
        category: 'rpg',
        title: "Lumberjack's Dynasty",
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/968970/header_alt_assets_0.jpg?t=1588250102',
        description: 'Неповторимый симулятор дровосека с видом от первого лица. Вам предстоит развить бизнес и основать свою династию.',
        price: 100
    },
]

function openModal() {
    isOpenModal = !isOpenModal;
    isOpenModal && productForm.classList.add('modal');
    !isOpenModal && productForm.classList.remove('modal');
}

function createCard(array = products) {
    let markup = '';
    for (const item of array) {
        markup += `<li class="productlistItem">
        <h3 class="title">${item.title}</h3>
        <img src=${item.img} alt="image" class="image"/>
        <p class="productDescription">Description: ${ item.description ? item.description.slice(0, 230): '' } ...</p>
        <p class="price">Price: ${item.price}</p>
        <button id=${item.id} data-category=${item.category} >Add to cart</button>
        </li>`
    }
    const navList = document.querySelector('.list');
    productList.innerHTML = markup;
}



function createProduct(event) {
    event.preventDefault();
    const newProduct = {
        title: productTitle.value,
        img: productIMG.value,
        description: productDescription.value,
        price: productPrice.value
    };


    [category.value].push(newProduct);
    createCard(category.value);
    productForm.reset();
}

const cart = []

function addToCart (e) {
    const id = e.target.id;
    console.log(id);
    console.log(actions);
    const result = actions.filter(item => item.id == id)
    if (e.target.nodeName === "BUTTON") {
        cart.push(...result)
    }
    console.log(cart);
}

addProductButton.addEventListener('click', createProduct);
newProduct.addEventListener('click', openModal);
actionsItems.addEventListener('click', () => createCard(actions));
rpgItems.addEventListener('click', () => createCard(rpg));
productList.addEventListener('click', addToCart)

