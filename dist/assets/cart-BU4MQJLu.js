import{r as e,l as s,s as c,g as i}from"./utils-Dj6LvCoe.js";class n{constructor(t,r){this.dataSource=t,this.listElement=r}async init(){this.renderList(this.dataSource)}cartItemTemplate(t){return`<li class="cart-card divider">
                <a href="#" class="cart-card__image">
                    <img
                    src="${t.Image}"
                    alt="${t.Name}"
                    />
                </a>
                <a href="#">
                    <h2 class="card__name">${t.Name}</h2>
                </a>
                <p class="cart-card__color">${t.Colors[0].ColorName}</p>
                <p class="cart-card__quantity">qty: 1</p>
                <p class="cart-card__price">$${t.FinalPrice}</p>
            </li>`}renderList(t){e(this.cartItemTemplate,this.listElement,t)}}function o(){const a=i("so-cart"),t=document.querySelector(".product-list");new n(a,t).init()}async function l(){await s(),o(),c()}l();
