const express = require('express');
const router = express.Router();
const users = require("../data/users");

//user authenticate middleware
//validate user when login
const auth= ((req,res,next)=>{
  if(req.body.username&&req.body.password){
    if (users.find((u) => u.username == req.body.username && u.password==req.body.password)){
      next();
    }else{
      next(error(400, "Username or password doesn't exist"));
    }

  } else {
    next(error(410,"Username and password required"));
  }
 // console.log(req.body)
  //console.log(users)
  next();
});

router
.route("/login")
.get((req,res)=>{
  res.render("login",{title : "Login Customer Fake Store"});

});

router
.route("/store")
.post(auth, (req,res)=> {
  res.render("store",{title:"Welcomte to my Fake Store"});
});

module.exports = router;