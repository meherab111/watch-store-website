let updateProduct = document.getElementById("cardValue");

export const updateProductLsFunc = (allProductsArr) => {
  updateProduct.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${allProductsArr.length} </i>`;
};
