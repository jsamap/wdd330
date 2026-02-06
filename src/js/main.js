import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { setCartItemsNumber, loadHeaderFooter } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();

  const category = "tents";
  const dataSource = new ExternalServices();
  const listElement = document.querySelector(".product-list");

  const productList = new ProductList(category, dataSource, listElement);
  productList.init();

  setCartItemsNumber();
}

init();
