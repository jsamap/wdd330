import{r as e,l as s,s as c,g as o,a as i}from"./utils-6aLUDPX2.js";class n{constructor(t,r){this.dataSource=t,this.listElement=r}async init(){this.renderList(this.dataSource)}cartItemTemplate(t){return`<li class="cart-card divider">
                <a href="/product_pages/?product=${t.Id}" class="cart-card__image">
                    <picture>
                        <source srcset="${t.Images.PrimarySmall}" media="(max-width: 250px)">
                        <source srcset="${t.Images.PrimaryMedium}" media="(max-width: 500px)">
                        <img src="${t.Images.PrimaryLarge}" alt="${t.Name}" />
                    </picture>
                </a>
                <a href="#">
                    <h2 class="card__name">${t.Name}</h2>
                </a>
                <p class="cart-card__color">${t.Colors[0].ColorName}</p>
                <p class="cart-card__quantity">qty: 1</p>
                <p class="cart-card__price">$${t.FinalPrice}</p>
            </li>`}renderList(t){e(this.cartItemTemplate,this.listElement,t)}}function l(){const a=o("so-cart"),t=document.querySelector(".product-list");new n(a,t).init()}function d(){document.querySelector("#total").textContent=`$${i()}`}async function m(){await s(),l(),c(),d()}m();
