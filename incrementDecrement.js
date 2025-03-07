import { getProductsLsFunc } from "./getProducts";
import { updateCartTotalFunc } from "./updateCartTotal";

export const incrementDecrementFunc = (event, id, stock, price) => {
  let currentProduct = document.getElementById(`card${id}`);

  let currentPrice = currentProduct.querySelector(".product-price");

  let currentQuantity = currentProduct.querySelector(".product-quantity");

  let quantity = 1;

  let lsPrice = 0;

  let localCartProducts = getProductsLsFunc();

  let existingProduct = localCartProducts.find((currElem) => {
    return currElem.id === id;
  });

  if (existingProduct) {
    quantity = existingProduct.quantity;
    lsPrice = existingProduct.price;
  } else {
    lsPrice = price;
    price = price;
  }

  if (event.target.classList.contains("product-increment")) {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      lsPrice = price * stock;
    }
  }

  if (event.target.classList.contains("product-decrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  lsPrice = price * quantity;

  let updatedProductObject = {
    id,
    price: lsPrice,
    quantity,
  };

  updatedProductObject = localCartProducts.map((currElem) => {
    return currElem.id === id ? updatedProductObject : currElem;
  });

  localStorage.setItem("productLS", JSON.stringify(updatedProductObject));

  currentPrice.textContent = lsPrice;

  currentQuantity.textContent = quantity;

  updateCartTotalFunc();
};
