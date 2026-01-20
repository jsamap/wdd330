import{r,s as c}from"./utils-DlYW4DG9.js";import{P as i}from"./ProductData-Dx0C3TkS.js";class n{constructor(t,e,s){this.category=t,this.dataSource=e,this.listElement=s}async init(){const t=await this.dataSource.getData();this.renderList(t)}productCardTemplate(t){return`<li class="product-card">
            <a href="product_pages/?product=${t.Id}">
              <img
                src="${t.Image}"
                alt="${t.Name}"
              />
              <h3 class="card__brand">${t.Brand.Name}</h3>
              <h2 class="card__name">${t.Name}</h2>
              <p class="product-card__price">$${t.FinalPrice}</p>
            </a>
          </li>`}renderList(t){r(this.productCardTemplate,this.listElement,t)}}const a=new i("tents"),o=document.querySelector(".product-list"),d=new n(a.category,a,o);d.init();c();
