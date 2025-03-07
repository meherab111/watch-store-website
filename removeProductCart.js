import { getProductsLsFunc } from "./getProducts";
import { toastNotifyFunc } from "./toastNotify";
import { updateCartTotalFunc } from "./updateCartTotal";
import { updateProductLsFunc } from "./updateProducts";

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
