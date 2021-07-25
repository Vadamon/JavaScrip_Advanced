'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "http://dummyimage.com/200"},
    {id: 2, title: 'Mouse', price: 20, img: "http://dummyimage.com/200"},
    {id: 3, title: 'Keyboard', price: 200, img: "http://dummyimage.com/200"},
    {id: 4, title: 'Gamepad', price: 50, img: "http://dummyimage.com/200"},
];

/*
 * Функция формирует разметку для каждого продукта
 * @param item - это каждый объект массива
 * @returns {string}
 */

const renderProduct = (item) => {
    return `<div class="products__item">
                <img class="products__img" src="${item.img}" alt="product">
                <h3 class="products__h3">${item.title}</h3>
                <p class="products__price">${item.price} $</p>
                <button class="products__btn">Купить</button>
            </div>`
};

/*
 * Функция создает список товаров из массива и добавляет его в div.products
 * @param list
 */
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');//join убъединяет элементы в строку и убирает разделяющие символы 
};

renderPage(products);