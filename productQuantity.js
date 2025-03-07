export const productQuantityFunc = (event, id, stock) => {
  let currentCard = document.getElementById(`card${id}`);

  let currentQuantity = currentCard.querySelector(".product-quantity");

  let quantity = parseInt(currentQuantity.innerText);

  if (event.target.classList.contains("product-increment")) {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.classList.contains("product-decrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  currentQuantity.innerText = quantity;
};
