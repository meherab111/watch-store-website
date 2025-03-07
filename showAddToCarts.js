import products from "./api/products.json";
import { getProductsLsFunc } from "./getProducts";
import { getQtyPrcFunc } from "./getQtyPrc";
import { incrementDecrementFunc } from "./incrementDecrement";
import { removeProductCartFunc } from "./removeProductCart";
import { updateCartTotalFunc } from "./updateCartTotal";

let cartProducts = getProductsLsFunc();

let filteredProducts = products.filter((elemApi) => {
  return cartProducts.some((elemLs) => elemLs.id === elemApi.id);
});

let addToCardContainer = document.getElementById("addToCardContainer");

let addToCartTemplate = document.getElementById("addToCartTemplate");

const ShowCartProductsFunc = () => {
  filteredProducts.forEach((matchedElem) => {
    const { name, price, image, id, stock } = matchedElem;

    const productLsValue = getQtyPrcFunc(price, id);

    const productClone = document.importNode(addToCartTemplate.content, true);

    productClone.getElementById("cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".cart-image").src = image;

    productClone.querySelector(".cart-image").alt = `Image of ${name}`;

    productClone.querySelector(".product-name").textContent = name;

    productClone.querySelector(
      ".product-price"
    ).textContent = `৳${productLsValue.price}`;

    productClone.querySelector(".product-quantity").textContent =
      productLsValue.quantity;

    productClone
      .querySelector(".stock-element")
      .addEventListener("click", (event) => {
        incrementDecrementFunc(event, id, stock, price);
      });

    productClone.querySelector(".remove-btn").addEventListener("click", () => {
      removeProductCartFunc(id);
    });

    addToCardContainer.append(productClone);
  });
};

updateCartTotalFunc();

ShowCartProductsFunc();
