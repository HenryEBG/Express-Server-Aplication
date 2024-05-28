//creating the router instance
const express = require('express');
const router = express.Router();

//creating arrays with the data of the users
const users = require("../data/users");
const User = require("../data/user");

//user authenticate middleware

//validate user when login
const auth = ((req, res, next) => {
  if (User.length<1) {
    if (req.body.username && req.body.password) {
      const myUser = users.find((u) => u.username == req.body.username && u.password == req.body.password)
      
      if (myUser) {
        User.push(myUser);
        
        next();
      } else {
        next(error(400, "Username or password doesn't exist"));
      }

    } else {
      next(error(410, "Username and password required"));
    }
  } else {
    next()
  }
  next();
});

//generate the template for the login page
router
  .route("/login")
  .get((req, res,next) => {
    res.render("login", { title: "Login Customer Fake Store" });
    next();
  });

  //generate the template for the store page
  //the auth middleware is isued for this page
  //to validate the user add the username and password
router
  .route("/store")
  .post(auth, (req, res,next) => {
    res.render("store", { title: "Welcomte to my Fake Store" });
    next();
  });

module.exports = router;