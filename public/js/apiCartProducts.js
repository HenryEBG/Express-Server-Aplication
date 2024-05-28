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

export {addCart}