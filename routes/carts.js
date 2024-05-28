const express = require('express');
const router = express.Router();
const carts = require("../data/carts");
const User = require("../data/user");

router
  .route("/add")
  .patch((req, res) => {
    console.log(req.body.id)
      //create a const to save temporarly the cart of this user if exists
    const existUserCart = carts.find((c) => c.userId == User[0].id)
    if(existUserCart===undefined){//doesn't exist a cart for this user
     console.log("estoy en que no existe el carro")
      carts.push(
        {
          id:carts.length+1,
          userId:User[0].id,
          date:'2020-03-02T00:00:00.000Z',
       
        products:[
          {productId:req.body.id,quantity:1}
        ]
      }
      )
      console.log(carts)
      console.log(req.body.id)
    }
    else{//in this case exist a cart for this user
       //find if the product added is in the list of the cart
       const productUserCart = existUserCart.products.find((p) => p.productId == req.body.id)
       //if product not exist add the product
       if (productUserCart===undefined) {
        console.log("estoy en que existe la cart pero no el producto")
        existUserCart.products.push({productId:req.body.id,quantity:1})
        console.log(existUserCart)
  
       }  //increment the product
       else{
        console.log("estoy en que existe la cart y el producto")
        productUserCart.quantity++
        console.log(productUserCart)
       }
    }
    return res.sendStatus(200);

  }

    // if(req.body && req.body.length>0){
  
   

       
    // }
    // else{
    //   res.sendStatus(400)
  //  }
    
    // //if cart exists
    // if (existUserCart) {
    //   //find if the product added is in the list of the cart
    //   const productUserCart = existUserCart.products.find((p) => p.productID == req.body.id)
    //   //if product exist just increment quantity
    //   if (productUserCart) {
    //     productUserCart.quantity++
    //   }
    //   else {//if the cart exist but not exist the product we add the product with quantity=1
    //     const newProduct = { productId: req.body.id, quantity: 1 }
    //     productUserCart.products.push(newProduct);
    //   }
    // } else {//if the cart of this user not exist and is the first product add we add the cart
    //   //create a variable to get the next number in the carts list
    //   let nextCart;
    //   //if cart is not empty we get the lenght +1 as number of the  next cart
    //   if (carts.lenght > 0) {
    //     nextCart = carts.lenght + 1
    //   } else {//if cart list is empty we give the number 1 to the next cart
    //     nextCart = 1;
    //   }
    //   //create an object to add at the cart list
    //   const newCart = {
    //     id: nextCart,//number of the cart
    //     userId: User.userId,//the ID of the customer/user
    //     products: [
    //       {
    //         productId: req.body.id,//the id of the product added
    //         quantity: 1 //quantity =1
    //       }
    //     ]
    //   }
    //   carts.push(newCart);
    //   
    // }
    // console.log(carts)
  
 );

module.exports = router;