import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { setCartItemsNumber } from "./utils.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productList = new ProductList(
  dataSource.category,
  dataSource,
  listElement,
);
productList.init();
setCartItemsNumber();
