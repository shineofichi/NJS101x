const path = require("path");
const express = require("express");
const adminData = require("./admin");
const rootDir = require("../util/path");

const route = express.Router();

route.get("/", (req, res, next) => {
  const products = adminData.product;
  res.render("shop", { products: products, docTitle: "Shop" });
});

module.exports = route;
