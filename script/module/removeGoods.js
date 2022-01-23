import { computeTotalPricePage } from "./computeTotalPrice.js";
import { goods } from "./goods.js";

export const removeChoisedTr = () => {
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
        }
        computeTotalPricePage(goods);
      });
    }
  });
};
