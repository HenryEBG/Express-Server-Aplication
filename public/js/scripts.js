/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


//import files to delete, to add o r modify and get information from the API
import {addCart,addProduct} from './apiCartProducts.js';
//import { add } from './apiPostConsumers.js';
import { getProducts,getCategories,productsByCategories,productById } from '/js/apiGetConsumers.js';

//Nodes to the product Container and to the Categories select
const productContainer = document.getElementById("productContainer");
const selectCategories = document.getElementById("categories");

//Nodes to the forms inside the new and update modals
//const formNewProduct = document.getElementById("form_new_product")
//const formUpdateProduct = document.getElementById("form_update_product")
//const cards = document.getElementsByClassName("card");



//Call to the function to get the products using API's
getProducts();

//call to the function to get the categories using API's
getCategories();


//Event listener that let filter the products depending of the category selected
selectCategories.addEventListener('change', productsByCategories)


//event listenter occur when a button of any product is clicked.
productContainer.addEventListener('click',addProduct)

