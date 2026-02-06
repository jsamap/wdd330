import { setCartItemsNumber, loadHeaderFooter } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();
  setCartItemsNumber();
}

init();
