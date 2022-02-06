import * as calc from "./computeTotalPrice.js";
import { goods } from "./goods.js";

const form = document.querySelector(".modal__form");
export const createRow = (item) => {
  return ` <tr><td class="table__cell row_id"></td>
<td class="table__cell table__cell_left table__cell_name" data-id="${item.id}">
  <span class="table__cell-id">id: ${item.id}</span>
  ${item.title}</td>
<td class="table__cell table__cell_left">${item.category}</td>
<td class="table__cell">${item.units}</td>
<td class="table__cell">${item.count}</td>
<td class="table__cell">${new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(item.price)}</td>
<td class="table__cell">${new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(item.price * item.count)}</td>

<td class="table__cell table__cell_btn-wrapper">
  <button class="table__btn table__btn_pic" data-pic="./img/pic.jpg"></button>
  <button class="table__btn table__btn_edit"></button>
  <button class="table__btn table__btn_del"></button>
</td>
</tr>`;
};

export const viewImgNewWindow = () => {
  const tbody = document.querySelector(".table__body");
  tbody.addEventListener("click", (e) => {

    const target = e.target; //-> button view picture of current item

    if (!target.classList.contains("table__btn_pic")) return;

    const WIDTH_WINDOW = 600;
    const HEIGHT_WINDOW = 800;

    const offsetTop = (screen.height - HEIGHT_WINDOW) / 2;
    const offsetLeft = (screen.width - WIDTH_WINDOW) / 2;

    const win = open(
      target.dataset.pic,
      "picture",
      `width=${WIDTH_WINDOW},height=${HEIGHT_WINDOW},top=${offsetTop},left=${offsetLeft}`
    );

    const img = document.createElement("img");
    img.src = target.dataset.pic;
    img.width = WIDTH_WINDOW;
    img.height = HEIGHT_WINDOW;
    img.alt = "рисунок товара";

    win.document.body.append(img);
  });
};

export const addItemToTable = (f) => {
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
    goods.push(item);

    document
      .querySelector(".table tbody")
      .insertAdjacentHTML("beforeend", createRow(item));
    calc.computeTotalPricePage(goods);
  });
  calc.computeTotalPricePage(goods);
  calc.computeTotalPriceModal(f);
};

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

export const editDiscount = () => {
  discount.addEventListener("click", () => {
    discount.checked ? enableInputDiscount(form) : disableInputDiscount(form);
  });
};
