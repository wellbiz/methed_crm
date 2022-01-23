import { createRow } from "./addGoods.js";
import { goods } from "./goods.js";
export const renderGoods = (goods) => {
  const tbody = document.querySelector(".table__body");
  goods.forEach((el) => {
    tbody.insertAdjacentHTML("beforeend", createRow(el));
  });
};

const setVendorCodeId = (goods) => {
  const spanId = document.querySelector(".vendor-code__id");
  spanId.textContent = goods[0] ? goods[goods.length - 1].id + 1 : "1";
};

export const closeModalWindow = () => {
  const buttonClose = document.querySelector(".modal__close");
  buttonClose.addEventListener("click", () => {
    removeActiveOverlay();
  });

  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) removeActiveOverlay();
  });
};

const removeActiveOverlay = () => {
  document.querySelector(".overlay").classList.remove("active");
};

export const openModalWindow = () => {
  const buttonAddGoods = document.querySelector(".panel__add-goods");
  buttonAddGoods.addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("active");
    setVendorCodeId(goods);
    document.querySelector(".modal__form").reset();
  });
};
