import {getProducts,deleteProduct} from './apiCartProducts.js';
//import { getProducts,getCategories,productsByCategories,productById } from '/js/apiGetConsumers.js';
const productContainer = document.getElementById("productContainer");
//Call to the function to get the products using API's
getProducts();


productContainer.addEventListener('click',deleteProduct)