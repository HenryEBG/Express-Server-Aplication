const express = require('express');
const router = express.Router();
const products = require("../data/products");

router
.route("/")
.get((req,res)=>{
//console.log(products)
res.send(products);
});

router
.route("/category/:nameCategory")
.get((req,res)=>{
res.send(products.filter((p)=>{if(p.category==req.params.nameCategory) return(p)}))
});
module.exports = router;