import {
  getLocalStorage,
} from "./utils.mjs";

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

  calculateItemSubTotal() {
    this.list.forEach(item => {
        this.itemTotal += item.ListPrice;
    });
    //this.itemTotal = this.list.reduce((total, item) => total + item.ListPrice, 0);
  }

calculateShippingCost(){
    for (let i = 0; i < this.list.length; i++) {
        if (i == 0)
            this.shipping +=10;
        else
            this.shipping += 2;
    }
}
  calculateOrderTotal() {
    // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total
    this.calculateItemSubTotal();
    this.tax = (this.itemTotal * 0.06)
    this.calculateShippingCost();

    this.orderTotal = this.itemTotal+this.tax+this.shipping;
    
    // display the totals.
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    document.querySelector(`${this.outputSelector}#subtotal`).innerText = `$${this.itemTotal.toFixed(2)}`;
    document.querySelector(`${this.outputSelector}#taxes`).innerText = `$${this.tax.toFixed(2)}`;
    document.querySelector(`${this.outputSelector}#shipping`).innerText = `$${this.shipping.toFixed(2)}`;
    document.querySelector(`${this.outputSelector}#total`).innerText = `$${this.orderTotal.toFixed(2)}`;

  }
}