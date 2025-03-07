import { addProductLsFunc } from "./addProducts";
import { productQuantityFunc } from "./productQuantity";

let productContainer = document.querySelector(".all-products--infos");

let productTemplate = document.getElementById("productTemplate");

export const showProductsFunc = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((currElem) => {
    const {
      id,
      image,
      hover,
      name,
      weight,
      band,
      battery,
      cases,
      resistance,
      size,
      origin,
      price,
      stock,
    } = currElem;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector(".product-name").textContent = name;
    productClone.querySelector(".product-image").src = image;
    productClone.querySelector(".product-image").alt = `Image of ${name}`;
    productClone.querySelector(".product-hover--image").src = hover;
    productClone.querySelector(
      ".product-hover--image"
    ).alt = `Image of ${hover}`;
    productClone.querySelector(".product-weight").textContent = weight;
    productClone.querySelector(".product-band").textContent = band;
    productClone.querySelector(".product-bat--life").textContent = battery;
    productClone.querySelector(".product-material").textContent = cases;
    productClone.querySelector(".product-resistance").textContent = resistance;
    productClone.querySelector(".product-size").textContent = size;
    productClone.querySelector(".product-origin").textContent = origin;
    productClone.querySelector(".product-price").textContent = `৳${price}`;
    productClone.querySelector(".product-stock").textContent = stock;

    productClone.getElementById("cardValue").setAttribute("id", `card${id}`);

    productClone
      .querySelector(".stock-element")
      .addEventListener("click", (event) => {
        productQuantityFunc(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart--btn")
      .addEventListener("click", (event) => {
        addProductLsFunc(event, id, stock);
      });

    productContainer.append(productClone);
  });
};
