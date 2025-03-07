import { getProductsLsFunc } from "./getProducts.js";
import { toastNotifyFunc } from "./toastNotify.js";
import { updateCartTotalFunc } from "./updateCartTotal.js";
import { updateProductLsFunc } from "./updateProducts.js";

export const removeProductCartFunc = (id) => {
  let storageData = getProductsLsFunc();

  let afterRemoveData = storageData.filter((elem) => elem.id !== id);

  localStorage.setItem("productLS", JSON.stringify(afterRemoveData));

  let removeDiv = document.getElementById(`card${id}`);

  if (removeDiv) {
    removeDiv.remove();
  }

  toastNotifyFunc("removed", id);

  updateProductLsFunc(afterRemoveData);

  updateCartTotalFunc();
};
