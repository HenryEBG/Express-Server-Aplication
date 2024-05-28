//creating the express server
const express = require('express');
const app = express();
const PORT =3000;
//adding the view template ejs
app.set('views','views');
app.set('view engine','ejs');

//adding the routers
const users = require("./routes/user");
const products = require("./routes/products");
const carts = require("./routes/carts");
const error = require("./utilities/error");

//work with post and patch req.body
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//adding absolute path to the public files
app.use(express.static('public'));

//adding the routes with the routers
app.use("/users", users);
app.use("/products",products);
app.use("/carts",carts);


//adding the initial page that gives the initial routes to login to the page
app.get("/",(req,res) => {
  res.json({
    links: [
      {
        href: "/users/login",
        rel: "users",
        type: "GET",
      },
    ],
  }); 
})


//error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

//server online 
app.listen(PORT,() => {
  console.log(`Express is running on port ${PORT}`);
})



