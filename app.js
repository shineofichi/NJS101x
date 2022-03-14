const express = require("express");

const app = express();
app.use("/", (req, res, next) => {
  console.log("App is running!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("Add more middleware!");
  res.send("<h1>This is Add product site.</h1>");
});
app.use("/", (req, res, next) => {
  console.log("Add more middleware!");
  res.send("<h1>Hello from NodeJS!</h1>");
});

app.listen(3000);
