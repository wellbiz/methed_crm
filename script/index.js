"use strict";

const modalTitle = document.querySelector(".modal__title");
const modalForm = document.querySelector(".modal__form");
const modalCheckbox = document.querySelector(".modal__checkbox");
const modalDiscount = document.querySelector(".modal__input_discount");

const removeActiveOverlay = () => {
  document.querySelector(".overlay").classList.remove("active");
};

removeActiveOverlay();

const goods = [
  {
    id: 1,
    title: "Смартфон Xiaomi 11T 8/128GB",
    price: 27000,
    description:
      "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    category: "mobile-phone",
    discont: false,
    count: 3,
    images: {
      small: "img/smrtxiaomi11t-m.jpg",
      big: "img/smrtxiaomi11t-b.jpg",
    },
  },
  {
    id: 2,
    title: "Радиоуправляемый автомобиль Cheetan",
    price: 4000,
    description:
      "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    category: "toys",
    discont: 5,
    count: 1,
    images: {
      small: "img/cheetancar-m.jpg",
      big: "img/cheetancar-b.jpg",
    },
  },
  {
    id: 3,
    title: "ТВ приставка MECOOL KI",
    price: 12400,
    description:
      "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    category: "tv-box",
    discont: 15,
    count: 4,
    images: {
      small: "img/tvboxmecool-m.jpg",
      big: "img/tvboxmecool-b.jpg",
    },
  },
];
const createRow = (item,currentNumber) => {
  return ` <tr><td class="table__cell">${currentNumber}</td>
<td class="table__cell table__cell_left table__cell_name" data-id="${item.id}">
  <span class="table__cell-id">id: ${item.id}</span>
  ${item.title}</td>
<td class="table__cell table__cell_left">${item.category}</td>
<td class="table__cell">шт</td>
<td class="table__cell">${item.count}</td>
<td class="table__cell">$${item.price}</td>
<td class="table__cell">$${item.price * item.count}</td>
<td class="table__cell table__cell_btn-wrapper">
  <button class="table__btn table__btn_pic"></button>
  <button class="table__btn table__btn_edit"></button>
  <button class="table__btn table__btn_del"></button>
</td>
</tr>`;
};

const renderGoods = (goods) => {
  const tbody = document.querySelector(".table__body");

  let currentNumber = 0;
  
  goods.forEach((el) => {
    tbody.insertAdjacentHTML('beforeend',createRow(el, ++currentNumber));
  });
};
renderGoods(goods);
