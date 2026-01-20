import{s as c,g as e}from"./utils-DlYW4DG9.js";function s(){const r=e("so-cart").map(t=>o(t));document.querySelector(".product-list").innerHTML=r.join("")}function o(a){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Image}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`}s();c();
