import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { setCartItemsNumber, loadHeaderFooter, getParam } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();

  const category = getParam("category");
  const dataSource = new ExternalServices();
  const listElement = document.querySelector(".product-list");

  const productList = new ProductList(category, dataSource, listElement);
  productList.init();

  document.querySelector("#products-title").textContent =
    `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

  setCartItemsNumber();
}

init();
