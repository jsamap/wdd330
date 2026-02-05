import { getParam, setCartItemsNumber, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";


async function init() {
  const dataSource = new ProductData("tents");
  const productId = getParam("product");
  const product = new ProductDetails(productId, dataSource);
  product.init();
  await loadHeaderFooter();

  setCartItemsNumber();
}

init();

// // add to cart button event handler
// async function addToCartHandler(e) {

//   // ProductDetails.addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
