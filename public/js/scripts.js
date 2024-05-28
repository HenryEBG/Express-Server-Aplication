/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


//import files to delete, to add o r modify and get information from the API
import {addCart} from './apiCartProducts.js';
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

//Event listener that submit a new product sending the data to the API
//formNewProduct.addEventListener('submit',addProduct)

/**
 * When the event listener in the productContainer receive a click
 * checks what button *delete or update* was clicked to decide what
 * action to do.
 */
function addProduct(event){
  event.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  //console.log($_POST['username'])
  const raw = JSON.stringify(
    {
      "id": event.target.id
    }
  );
  
  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:3000/carts/add", requestOptions)
    .then((response) => response.text())
    .then((result) =>{ console.log(result)
    //indicate that the product was added
    const addAlertNode=document.getElementById("addAlert")
    addAlertNode.textContent=`The register Number ${event.target.id} was added (only en actual session).`
    addAlertNode.style.display="block"
        setTimeout (() =>{
          addAlertNode.style.display="none"
          }, 5000) }
  )
    .catch((error) => console.error(error));


  
}

//event listenter occur when a button of any product is clicked.
productContainer.addEventListener('click',addProduct)

//event listener that calls an API when the form in the modal
//is subimited to send the product data to be modify with the
//API
//formUpdateProduct.addEventListener('submit',modifyProduct)