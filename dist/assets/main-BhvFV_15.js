import{r as s}from"./utils-rRvfO0JT.js";import{P as c}from"./ProductData-Dx0C3TkS.js";class i{constructor(t,e,r){this.category=t,this.dataSource=e,this.listElement=r}async init(){const t=await this.dataSource.getData();this.renderList(t)}productCardTemplate(t){return`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img
                src="${t.Image}"
                alt="${t.Name}"
              />
              <h3 class="card__brand">${t.Brand.Name}</h3>
              <h2 class="card__name">${t.Name}</h2>
              <p class="product-card__price">$${t.FinalPrice}</p>
            </a>
          </li>`}renderList(t){s(this.productCardTemplate,this.listElement,t)}}const a=new c("tents"),n=document.querySelector(".product-list"),o=new i(a.category,a,n);o.init();
