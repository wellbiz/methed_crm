

export const computeTotalPricePage = (goods) => {
  const spanTotalPrice = document.querySelector(".crm__total-price");
  let totalPrice = 0;
  goods.forEach((item) => (totalPrice += item.count * item.price));

  spanTotalPrice.textContent = `$ ${totalPrice.toLocaleString()}`;
};

export const computeTotalPriceModal = (f) => {
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


