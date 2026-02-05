import {
  getLocalStorage,
  setCartItemsNumber,
  loadHeaderFooter,
} from "./utils.mjs";

import ShoppingCart from "./ShoppingCart.mjs";

function renderCartContents() {
  const dataSource = getLocalStorage("so-cart");
  const listElement = document.querySelector(".product-list");

  const shoppingCart = new ShoppingCart(dataSource, listElement);
  shoppingCart.init();
}

async function init() {
  await loadHeaderFooter();

  renderCartContents();

  setCartItemsNumber();
}

init();
