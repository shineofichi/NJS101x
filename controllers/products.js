const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProds: true,
    formCSS: true,
    productCSS: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product({ title: req.body.title });
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    products: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    layout: false,
  });
};
