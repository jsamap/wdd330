import { renderListWithTemplate } from "./utils.mjs";

export default class ProudctList {
    constructor (category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    
    async init(){
        const list = await this.dataSource.getData(this.category);
        this.renderList(list);
    }

    productCardTemplate(product){
        return (
          `<li class="product-card">
            <a href="/product_pages/?product=${product.Id}">
              <div class="product-card-image">
                <img
                  src="${product.Images.PrimaryMedium}"
                  alt="${product.Name}"
                />
              </div>
              <h3 class="card__brand">${product.Brand.Name}</h3>
              <h2 class="card__name">${product.Name}</h2>
              <p class="product-card__price">$${product.FinalPrice}</p>
            </a>
          </li>`
        );
    }

    renderList(products){
        // const formattedProducts = products.map(this.productCardTemplate).join("");
        
        // //this.listElement.insertAdjacentHTML("beforebegin", formattedProducts);
        // this.listElement.innerHTML = formattedProducts;

        renderListWithTemplate(this.productCardTemplate, this.listElement, products);
    }
}