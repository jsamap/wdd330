import{r as s}from"./utils-Dj6LvCoe.js";class c{constructor(a,t,r){this.category=a,this.dataSource=t,this.listElement=r}async init(){const a=await this.dataSource.getData(this.category);this.renderList(a)}productCardTemplate(a){return`<li class="product-card">
            <a href="/product_pages/?product=${a.Id}">
              <div class="product-card-image">
                <img
                  src="${a.Images.PrimaryMedium}"
                  alt="${a.Name}"
                />
              </div>
              <h3 class="card__brand">${a.Brand.Name}</h3>
              <h2 class="card__name">${a.Name}</h2>
              <p class="product-card__price">$${a.FinalPrice}</p>
            </a>
          </li>`}renderList(a){s(this.productCardTemplate,this.listElement,a)}}export{c as P};
