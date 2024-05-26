/**
 * Import the functions insede display.js to show the 
 * products in the container in the index.html
 */
import { productDisplay,categorySelect } from './display.js';

/**
 * get the form inside the modal to update products
 */
const myUpdateForm=document.getElementById('form_update_product')


/**
 * Async function that consume a GET API to get all the products
 */
async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data)
    productDisplay(data,true)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Async function that consume a GET API to get all the categories
 */
async function getCategories(){
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    categorySelect(data)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Async funtion that filter the product from a category chosen
 * using a GET API
 * @param {*} event 
 */
async function productsByCategories(event){
  console.log(event.target.value)
  let url='https://fakestoreapi.com/products'
  if(event.target.value!=""){
    url+=`/category/${event.target.value}`
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    productDisplay(data,true)
    //ProductDisplay(newProducts.filter(product => product.category==event.target.value),false)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Async function that get the info from a product using an API
 * It is used to get the actual data of the product to be modified
 * @param {*} productId 
 */
async function productById(productId){
  try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      //agregar el id
      myUpdateForm.id.value=data.id;
      myUpdateForm.update_name.value=data.title;
      myUpdateForm.update_price.value=data.price;
      myUpdateForm.update_description.value=data.description;
      myUpdateForm.update_image.value=data.image;
  } catch (error) {
    console.log(error)
  }
}


//exports functions to the index.js file
export {productsByCategories, getCategories,getProducts,productById}