"use strict";

import { goods } from "./module/goods.js";
import {
  addItemToTable,
  editDiscount,
  viewImgNewWindow,
} from "./module/addGoods.js";
import {
  renderGoods,
  closeModalWindow,
  openModalWindow,
} from "./module/renderingTable.js";
import { removeChoisedTr } from "./module/removeGoods.js";
import { createPreview, previewImg } from "./module/previewImg.js";

const init = () => {
  const form = document.querySelector(".modal__form");
  openModalWindow();
  closeModalWindow();
  renderGoods(goods);
  viewImgNewWindow();
  removeChoisedTr();
  editDiscount();
  addItemToTable(form);
  createPreview();
  previewImg();
};
init();
