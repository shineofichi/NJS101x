const path = require("path");
const express = require("express");
const adminData = require("./admin")
const rootDir = require("../util/path");

const route = express.Router();

route.get("/", (req, res, next) => {
  console.log(adminData.product);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = route;
