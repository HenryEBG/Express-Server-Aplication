import { cartDisplay } from './display.js';

/**
 * Creating a node to manipulate the alert showing when a fake product is added 
 * to the cart
 */
const addAlert=document.getElementById("addAlert")

/**
 * Function that receive the ID of a product to delete with the API
 * @param {} id 
 */
async function addCart(id){
  try {
    const response = await fetch(`http://localhost:3000/carts/add/${id}`)
        const data = await response.json()  
        
        addAlert.textContent=`The product id ${data.title} was added to the cart.`
        addAlert.style.display="block"
        setTimeout (() =>{
            addAlert.style.display="none"
          }, 5000)
  } catch (error) {
    console.log(`Can't add the element with the id ${id}`)
  }

}


/**
 * When the event listener in the productContainer receive a click
 * add a product to the cart or increment the quantity of the product
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



/**
 * Async function that consume a GET API to get all the products of the cart
 */
async function getProducts() {
  const myUser=document.getElementById("user");
  try {
    const response = await fetch(`http://localhost:3000/carts/products/${myUser.textContent}`);
    const data = await response.json();
    console.log(data)
    cartDisplay(data,true)
  } catch (error) {
    console.log(error)
  }
}


export {addCart,addProduct,getProducts}