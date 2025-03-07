export const toastNotifyFunc = (status, id) => {
  let toastDiv = document.createElement("div");

  toastDiv.classList.add("toast-div");

  if (status === "removed") {
    toastDiv.textContent = `Product ID: ${id}, has been removed`;
  } else {
    toastDiv.textContent = `Product ID: ${id}, has been added`;
  }

  document.body.append(toastDiv);

  setTimeout(() => {
    toastDiv.remove();
  }, 2000);
};
