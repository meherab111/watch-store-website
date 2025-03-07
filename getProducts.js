import { updateProductLsFunc } from "./updateProducts";

export const getProductsLsFunc = () => {
  let getProducts = localStorage.getItem("productLS");

  if (!getProducts) {
    return [];
  }

  let parsedProducts = JSON.parse(getProducts);

  updateProductLsFunc(parsedProducts);

  return parsedProducts;
};
