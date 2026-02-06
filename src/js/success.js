import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { setCartItemsNumber, loadHeaderFooter } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();
  setCartItemsNumber();
}

init();
