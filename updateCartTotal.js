import { getProductsLsFunc } from "./getProducts.js";

export const updateCartTotalFunc = () => {
  let totalPrice = document.querySelector(".total-price");

  let totalVat = document.querySelector(".total-vat");

  let totalDiscount = document.querySelector(".total-discount");

  let finalTotalPrice = document.querySelector(".final-total--price");

  let storageProds = getProductsLsFunc();

  let totalCalculatedPrice = storageProds.reduce((accum, elem) => {
    let prodPrice = parseInt(elem.price) || 0;

    return accum + prodPrice;
  }, 0);

  let calculatedPrice = totalCalculatedPrice;

  let calculatedVat = Math.ceil((2 / 100) * calculatedPrice);

  let calculatedDiscount = Math.ceil(
    (10 / 100) * (calculatedPrice + calculatedVat)
  );

  let calculatedFinalPrice =
    calculatedPrice + calculatedVat - calculatedDiscount;

  totalPrice.textContent = `+ ৳${calculatedPrice}`;

  totalVat.textContent = `+ ৳${calculatedVat}`;

  totalDiscount.textContent = `- ৳${calculatedDiscount}`;

  finalTotalPrice.textContent = `৳${calculatedFinalPrice}`;
};

updateCartTotalFunc();
