import {
  getParam,
  setCartItemsNumber,
  loadHeaderFooter,
  setCartIconAnimation,
} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

async function init() {
  const dataSource = new ExternalServices("tents");
  const productId = getParam("product");
  const product = new ProductDetails(productId, dataSource);
  product.init();
  await loadHeaderFooter();

  setCartItemsNumber();
  setCartIconAnimation();
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
