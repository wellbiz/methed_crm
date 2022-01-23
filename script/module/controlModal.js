import { setVendorCodeId } from "./renderingTable.js";
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

export const openModalWindow = (goods) => {
  const buttonAddGoods = document.querySelector(".panel__add-goods");
  buttonAddGoods.addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("active");
    setVendorCodeId(goods);
    document.querySelector(".modal__form").reset();
  });
};
