import { getProductsLsFunc } from "./getProducts";
import { toastNotifyFunc } from "./toastNotify";
import { updateProductLsFunc } from "./updateProducts";

getProductsLsFunc();

export const addProductLsFunc = (event, id, stock) => {
  const productLsArray = getProductsLsFunc();

  let currentProduct = document.getElementById(`card${id}`);

  let price = currentProduct.querySelector(".product-price");

  let quantity = currentProduct.querySelector(".product-quantity");

  quantity = parseInt(quantity.innerText);

  price = price.innerText.slice(1);

  let existingProduct = productLsArray.find((currElem) => {
    return currElem.id === id;
  });

  if (existingProduct && quantity > 1) {
    quantity = existingProduct.quantity + quantity;

    price = parseInt(price * quantity);

    let updatedProductObject = {
      id,
      price,
      quantity,
    };

    updatedProductObject = productLsArray.map((currElem) => {
      return currElem.id === id ? updatedProductObject : currElem;
    });

    localStorage.setItem("productLS", JSON.stringify(updatedProductObject));

    toastNotifyFunc("added", id);
  }
  if (existingProduct) {
    return false;
  }

  price = price * quantity;

  let productObject = {
    id,
    price,
    quantity,
  };

  productLsArray.push(productObject);

  localStorage.setItem("productLS", JSON.stringify(productLsArray));

  updateProductLsFunc(productLsArray);

  toastNotifyFunc("added", id);
};
