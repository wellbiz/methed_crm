"use strict";

let goods = [
  {
    id: 1,
    title: "Смартфон Xiaomi 11T 8/128GB",
    price: 27000,
    units: "шт",
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
    units: "шт",
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
    units: "шт",
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

const modalTitle = document.querySelector(".modal__title");
const modalForm = document.querySelector(".modal__form");
const modalCheckbox = document.querySelector(".modal__checkbox");
const modalDiscount = document.querySelector(".modal__input_discount");

const removeActiveOverlay = () => {
  document.querySelector(".overlay").classList.remove("active");
};

removeActiveOverlay();

const openModalWindow = () => {
  const buttonAddGoods = document.querySelector(".panel__add-goods");
  buttonAddGoods.addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("active");
    setVendorCodeId(goods);
  });
};

openModalWindow();

const closeModalWindow = () => {
  const buttonClose = document.querySelector(".modal__close");
  buttonClose.addEventListener("click", () => {
    removeActiveOverlay();
  });

  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) removeActiveOverlay();
  });
};

closeModalWindow();

const createRow = (item, currentNumber) => {
  return ` <tr><td class="table__cell">${currentNumber}</td>
<td class="table__cell table__cell_left table__cell_name" data-id="${item.id}">
  <span class="table__cell-id">id: ${item.id}</span>
  ${item.title}</td>
<td class="table__cell table__cell_left">${item.category}</td>
<td class="table__cell">${item.units}</td>
<td class="table__cell">${item.count}</td>
<td class="table__cell">$${item.price.toLocaleString()}</td>
<td class="table__cell">$${(item.price * item.count).toLocaleString()}</td>
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
    tbody.insertAdjacentHTML("beforeend", createRow(el, ++currentNumber));
  });
};
renderGoods(goods);

const removeChoisedTr = () => {
  const tbody = document.querySelector(".table__body");
  tbody.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("table__btn_del")) {
      const currentTr = target.closest("tr");
      const dataId = currentTr.querySelector("td:nth-child(2)").dataset.id;
      currentTr.remove();
      goods.forEach((el, i) => {
        if (el.id == dataId) {
          goods.splice(i, 1);

          console.log(goods);
        }
        computeTotalPricePage(goods);
      });
    }
  });
};

removeChoisedTr();

const form = document.querySelector(".modal__form");

const enableInputDiscount = (f) => {
  const input = f.discount_count;
  if (input.disabled == true) {
    input.disabled = false;
    input.required = true;
  }
};

const disableInputDiscount = (f) => {
  const input = f.discount_count;
  if (input.disabled == false) {
    input.disabled = true;
    input.required = false;
    input.value = "";
  }
};
const setVendorCodeId = (goods) => {
  const spanId = document.querySelector(".vendor-code__id");
  spanId.textContent = goods[goods.length - 1].id + 1;
};

const editDiscount = () => {
  discount.addEventListener("click", () => {
    discount.checked ? enableInputDiscount(form) : disableInputDiscount(form);
  });
};

editDiscount();
const computeTotalPricePage = (goods) => {
  const spanTotalPrice = document.querySelector(".crm__total-price");
  let totalPrice = 0;
  goods.forEach((item) => (totalPrice += item.count * item.price));

  spanTotalPrice.textContent = `$ ${totalPrice.toLocaleString()}`;
};

const computeTotalPriceModal = (f) => {
  const totalPrice = f.total;
  const price = f.price;
  const count = f.count;
  const outTotal = () => {
    if (parseFloat(price.value.replace(",", ".")) && +count.value)
      totalPrice.value = `$ ${(
        parseFloat(f.price.value.replace(",", ".")) * count.value
      ).toLocaleString()}`;
  };
  price.addEventListener("blur", outTotal);
  count.addEventListener("blur", outTotal);
};

const addItemToTable = (f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const item = {
      id: +document.querySelector(".vendor-code__id").textContent,
      title: f.name.value,
      price: parseFloat(f.price.value.replace(",", ".")),
      description: f.description.value,
      category: f.category.value,
      discont: +f.discount_count.value,
      count: +f.count.value,
      units: f.units.value,
      images: {
        small: f.image.value,
        big: "",
      },
    };
    console.log("before push", goods);
    goods.push(item);
    console.log("after push", goods);
    let number = +document.querySelector(
      ".table tbody tr:last-child td:first-child"
    ).textContent;

    document
      .querySelector(".table tbody")
      .insertAdjacentHTML("beforeend", createRow(item, ++number));
    computeTotalPricePage(goods);
  });
  computeTotalPricePage(goods);
  computeTotalPriceModal(f);
};

addItemToTable(form);
/* добавить в базу литры шт и т д */
