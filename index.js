const express = require('express');
const app = express();
const PORT =3000;
app.set('views','views');
app.set('view engine','ejs');
const users = require("./routes/user");
const error = require("./utilities/error");

//work with post and patch req.body
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


app.use("/users", users);


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

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT,() => {
  console.log(`Express is running on port ${PORT}`);
})



