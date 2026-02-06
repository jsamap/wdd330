import CheckoutProcess from "./CheckoutProcess";
import ShoppingCart from "./ShoppingCart.mjs";
import {
  setCartItemsNumber,
  loadHeaderFooter,
  getCartTotal,
  getCartItems,
  getCartItemsNumber,
  getCartTaxes,
  calculateShippingCost,
} from "./utils.mjs";



async function init() {
  await loadHeaderFooter();
  setCartItemsNumber();
  fillOrderSummary();
}

function fillOrderSummary_new() {
  const checkoutProcess = new CheckoutProcess("so-cart",);   
}

function fillOrderSummary() {
  const itemsNumber = getCartItemsNumber();
  const cartItems = getCartItems();

  const subtotal = getCartTotal();
  const taxes = getCartTaxes();
  const shipping = calculateShippingCost(itemsNumber);
  const total = subtotal+taxes+shipping;

  document.querySelector("#subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.querySelector("#taxes").textContent = `$${taxes.toFixed(2)}`;
  document.querySelector("#shipping").textContent = `$${shipping.toFixed(2)}`;
  document.querySelector("#total").textContent = `$${total.toFixed(2)}`;
}

init();
