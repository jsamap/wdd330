import{r as e,l as s,s as c,g as i}from"./utils-Dj6LvCoe.js";class o{constructor(a,t){this.dataSource=a,this.listElement=t}async init(){this.renderList(this.dataSource)}cartItemTemplate(a){return`<li class="cart-card divider">
                <a href="/product_pages/?product=${a.Id}" class="cart-card__image">
                    <picture>
                        <source srcset="${a.Images.PrimarySmall}" media="(max-width: 250px)">
                        <source srcset="${a.Images.PrimaryMedium}" media="(max-width: 500px)">
                        <img src="${a.Images.PrimaryLarge}" alt="${a.Name}" />
                    </picture>
                </a>
                <a href="#">
                    <h2 class="card__name">${a.Name}</h2>
                </a>
                <p class="cart-card__color">${a.Colors[0].ColorName}</p>
                <p class="cart-card__quantity">qty: 1</p>
                <p class="cart-card__price">$${a.FinalPrice}</p>
            </li>`}renderList(a){e(this.cartItemTemplate,this.listElement,a)}}function n(){const r=i("so-cart"),a=document.querySelector(".product-list");new o(r,a).init()}async function l(){await s(),n(),c()}l();
