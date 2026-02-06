import{r as s}from"./utils-DAaM6Wbz.js";class c{constructor(a,e,r){this.category=a,this.dataSource=e,this.listElement=r}async init(){const a=await this.dataSource.getData(this.category);this.renderList(a)}productCardTemplate(a){return`<li class="product-card">
            <a href="/product_pages/?product=${a.Id}">
              <div class="product-card-image">

                <picture>
                  <source srcset="${a.Images.PrimarySmall}" media="(max-width: 250px)">
                  <source srcset="${a.Images.PrimaryMedium}" media="(max-width: 500px)">
                  <img src="${a.Images.PrimaryLarge}" alt="${a.Name}" />
                </picture>
              </div>
              <h3 class="card__brand">${a.Brand.Name}</h3>
              <h2 class="card__name">${a.Name}</h2>
              <p class="product-card__price">$${a.FinalPrice}</p>
            </a>
          </li>`}renderList(a){s(this.productCardTemplate,this.listElement,a)}}export{c as P};
