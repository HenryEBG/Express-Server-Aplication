/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


//import files to delete, to add o r modify and get information from the API
//import {deleteProduct} from './apiDeleteConsumers.js';
//import { addProduct,modifyProduct } from './apiPostConsumers.js';
import { getProducts,getCategories,productsByCategories,productById } from '/js/apiGetConsumers.js';


//Nodes to the product Container and to the Categories select
const productContainer = document.getElementById("productContainer");
const selectCategories = document.getElementById("categories");

//Nodes to the forms inside the new and update modals
//const formNewProduct = document.getElementById("form_new_product")
//const formUpdateProduct = document.getElementById("form_update_product")
//const cards = document.getElementsByClassName("card");


// let newProductID=21;
// const newProducts=[];
// const deletedProducts=[];
// const modifiedProducts=[];

//Call to the function to get the products using API's
getProducts();

//call to the function to get the categories using API's
getCategories();


//Event listener that let filter the products depending of the category selected
selectCategories.addEventListener('change', productsByCategories)

//Event listener that submit a new product sending the data to the API
//formNewProduct.addEventListener('submit',addProduct)

/**
 * When the event listener in the productContainer receive a click
 * checks what button *delete or update* was clicked to decide what
 * action to do.
 */
// function modifyDeleteProduct(event){
//   event.preventDefault();
  
//   if(event.target.id.substring(0,6)==="delete"){
//     deleteProduct(parseInt(event.target.id.substring(7,8)))
//   }
//   else {

//     productById(parseInt(event.target.id.substring(7,8)))
//   }
// }

//event listenter occur when a button of any product is clicked.
//productContainer.addEventListener('click',modifyDeleteProduct)

//event listener that calls an API when the form in the modal
//is subimited to send the product data to be modify with the
//API
//formUpdateProduct.addEventListener('submit',modifyProduct)