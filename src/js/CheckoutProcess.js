import { getLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const services = new ExternalServices();

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.calculateOrderTotal();
  }
  calculateOrderTotal() {
    // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total
    this.calculateItemSubTotal();
    this.tax = parseFloat((this.itemTotal * 0.06).toFixed(2));
    this.calculateShippingCost();

    this.orderTotal = this.itemTotal + this.tax + this.shipping;
    this.orderTotal = this.orderTotal.toFixed(2);

    this.tax = this.tax.toFixed(2);

    // display the totals.
    this.displayOrderTotals();
  }

  calculateItemSubTotal() {
    // this.list.forEach((item) => {
    //   this.itemTotal += item.ListPrice;
    // });
    this.itemTotal = parseFloat(
      this.list.reduce((total, item) => total + item.ListPrice, 0).toFixed(2),
    );
  }

  calculateShippingCost() {
    for (let i = 0; i < this.list.length; i++) {
      if (i == 0) this.shipping += 10;
      else this.shipping += 2;
    }
    this.shipping = parseFloat(this.shipping.toFixed(2));
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    document.querySelector(`${this.outputSelector}#subtotal`).innerText =
      `$${this.itemTotal.toFixed(2)}`;
    document.querySelector(`${this.outputSelector}#taxes`).innerText =
      `$${this.tax}`;
    document.querySelector(`${this.outputSelector}#shipping`).innerText =
      `$${this.shipping.toFixed(2)}`;
    document.querySelector(`${this.outputSelector}#total`).innerText =
      `$${this.orderTotal}`;
  }

  async checkout() {
    const formElement = document.forms["checkout"];
    const order = formDataToJSON(formElement);

    order.orderDate = new Date().toISOString();
    order.orderTotal = this.orderTotal;
    order.tax = this.tax;
    order.shipping = this.shipping;
    order.items = packageItems(this.list);
    console.log(order);

    try {
      const response = await services.checkout(order);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}

function formDataToJSON(formElement) {
  // convert the form data to a JSON object
  const formData = new FormData(formElement);
  const convertedJSON = {};
  formData.forEach((value, key) => {
    convertedJSON[key] = value;
  });
  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}
