"use strict";

import { goods } from "./module/goods.js";
import { addItemToTable, editDiscount } from "./module/addGoods.js";
import {
  renderGoods,
  closeModalWindow,
  openModalWindow,
} from "./module/renderingTable.js";
import { removeChoisedTr } from "./module/removeGoods.js";

const init = () => {
  const form = document.querySelector(".modal__form");
  openModalWindow();
  closeModalWindow();
  renderGoods(goods);
  removeChoisedTr();
  editDiscount();
  addItemToTable(form);
};
init();
