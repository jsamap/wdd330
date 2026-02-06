import CheckoutProcess from "./CheckoutProcess";
import { setCartItemsNumber, loadHeaderFooter } from "./utils.mjs";

const checkoutProcess = new CheckoutProcess("so-cart", "");
checkoutProcess.init();

async function init() {
  await loadHeaderFooter();
  setCartItemsNumber();
}
init();

document.querySelector("#checkout-submit").addEventListener("click", (e) => {
  e.preventDefault();
  
  const checkoutForm = document.forms[0];
  const chk_status = checkoutForm.checkValidity();
  checkoutForm.reportValidity();
  if(chk_status)
    checkoutProcess.checkout();
});
