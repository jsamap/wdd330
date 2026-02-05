import { renderListWithTemplate } from "./utils.mjs";

export default class ShoppingCart {
    constructor (dataSource, listElement){
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    
    async init(){
        this.renderList(this.dataSource);
    }

    cartItemTemplate(item) {
        return (
            `<li class="cart-card divider">
                <a href="/product_pages/?product=${item.Id}" class="cart-card__image">
                    <picture>
                        <source srcset="${item.Images.PrimarySmall}" media="(max-width: 250px)">
                        <source srcset="${item.Images.PrimaryMedium}" media="(max-width: 500px)">
                        <img src="${item.Images.PrimaryLarge}" alt="${item.Name}" />
                    </picture>
                </a>
                <a href="#">
                    <h2 class="card__name">${item.Name}</h2>
                </a>
                <p class="cart-card__color">${item.Colors[0].ColorName}</p>
                <p class="cart-card__quantity">qty: 1</p>
                <p class="cart-card__price">$${item.FinalPrice}</p>
            </li>`
        );
    }

    renderList(products){
        // const formattedProducts = products.map(this.productCardTemplate).join("");
        
        // //this.listElement.insertAdjacentHTML("beforebegin", formattedProducts);
        // this.listElement.innerHTML = formattedProducts;

        renderListWithTemplate(this.cartItemTemplate, this.listElement, products);
    }
}