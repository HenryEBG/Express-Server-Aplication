//Nodes pointing to the diferent select inside the modals and the filter in the main page
const selectCategories = document.getElementById("categories");


//function that add all the products or the products of one category
function productDisplay(products,erase) {
  if(erase){
  productContainer.innerHTML=""
  }
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add("col")
    card.classList.add("mb-5")
    card.innerHTML = `<div id="${product.id}" class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    <!-- Product image-->
    <img class="card-img-top h-50" src=${product.image} alt="..."  />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${product.title}</h5>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
            </div>
            <!-- Product price-->
             $ ${product.price}
        </div>
    </div>
    <!-- Product actions-->
    <form action="http://localhost:3000/carts/add" method="PATCH" id="form${product.id}"> 
    <input type="hidden" name="id" value="${product.id}" />
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center ">
        <div class="text-center">
        <input class="btn btn-outline-dark mt-auto ml-2" type="submit" id="${product.id}"value="Add to Cart">
        
        </div>
    </div>
    </form>
</div>`
productContainer.appendChild(card);
  });
}


function cartDisplay(products,erase) {
  if(erase){
  productContainer.innerHTML=""
  }
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add("col")
    card.classList.add("mb-5")
    card.innerHTML = `<div id="${product.product.id}" class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    <!-- Product image-->
    <img class="card-img-top h-50" src=${product.product.image} alt="..."  />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${product.product.title}</h5>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
            </div>
            <!-- Product Quantity-->
            Qty : ${product.quantity}
        </div>
    </div>
    <!-- Product actions-->
    <form action="http://localhost:3000/carts/delete" method="PATCH" id="form${product.product.id}"> 
    <input type="hidden" name="id" value="${product.product.id}" />
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center ">
        <div class="text-center">
        <input class="btn btn-outline-dark mt-auto ml-2" type="submit" id="${product.product.id}"value="Remove from Cart">
        
        </div>
    </div>
    </form>
</div>`
productContainer.appendChild(card);
  });
}


//fuction that add option elements to the select categories to filter or select in the modals
function categorySelect(categories){
  categories.forEach(category => {
     const option = document.createElement('option');
    option.innerHTML=`<option value="${category}">${category}</option>`
    selectCategories.appendChild(option)
  })
  
}

//export the fuctions to the apigetConsumers.js file
export {categorySelect,productDisplay,cartDisplay}