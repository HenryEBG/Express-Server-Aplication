const express = require('express');
const router = express.Router();
const carts = require("../data/carts");
const User = require("../data/user");
const products = require("../data/products");

router
  .route("/:id")
  .get((req, res, next) => {
    res.render("cart", { title: `Thanks for buying here ${req.params.id}`, userid: req.params.id });
    next();
  });



//router to get all the products of one cart  
router
  .route("/products/:id")
  .get((req, res, next) => {
    console.log(req.params.id)
    console.log(carts)
    const existUserCart = carts.find((c) => c.userId == req.params.id)
    console.log(existUserCart);
    if (existUserCart === undefined) {
      console.log("we don't get products")
      res.send([]);

      next();

    } else {
      console.log("we got products")
      const listProducts = [];
      existUserCart.products.forEach((p, i) => {
        const foundProduct = products.find((product) => product.id == p.productId)
        if (foundProduct) {
          listProducts.push({ product: foundProduct, quantity: p.quantity })
        }
      })

      res.send(listProducts);
      next();
    }
  })



router
  .route("/add")
  .patch((req, res) => {
    //  console.log(req.body.id)
    //create a const to save temporarly the cart of this user if exists
    const existUserCart = carts.find((c) => c.userId == req.body.userid)
    console.log("adding product to the cart")
    if (existUserCart === undefined) {//doesn't exist a cart for this user
      carts.push(
        {
          id: carts.length + 1,
          userId: req.body.userid,
          date: '2020-03-02T00:00:00.000Z',

          products: [
            { productId: req.body.id, quantity: 1 }
          ]
        }
      )
    }
    else {//in this case exist a cart for this user
      //find if the product added is in the list of the cart
      const productUserCart = existUserCart.products.find((p) => p.productId == req.body.id)
      //if product not exist add the product
      if (productUserCart === undefined) {
        //console.log("estoy en que existe la cart pero no el producto")
        existUserCart.products.push({ productId: req.body.id, quantity: 1 })

      }  //increment the product
      else {
        productUserCart.quantity++
      }
    }
    return res.sendStatus(200);

  }

  );

//router to delete products
router
  .route("/:id")
  .delete((req, res) => {
    if (req.query.userid) {
      const existUserCart = carts.find((c) => c.userId == req.query.userid)
      if (existUserCart) {
        const productUserCart = existUserCart.products.find((p) => p.productId == req.params.id)
        if (productUserCart) {
          existUserCart.products.splice(existUserCart.products.indexOf(productUserCart), 1)
          if (existUserCart.products.length == 0) {
            carts.splice(carts.indexOf(existUserCart), 1);
          }
          res.send(req.params.id)
        } else {
          res.send(false)
        }
      } else {
        res.send(false)
      }
    } else {
      res.send(false)
    }
  }
  );

module.exports = router;