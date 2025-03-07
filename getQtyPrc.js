import { getProductsLsFunc } from "./getProducts.js";

export const getQtyPrcFunc = (price, id) => {
  let storageData = getProductsLsFunc();

  let quantity = 1;

  let existingProduct = storageData.find((elem) => {
    return elem.id === id;
  });

  if (existingProduct) {
    price = existingProduct.price;
    quantity = existingProduct.quantity;
  }

  return { price, quantity };
};
