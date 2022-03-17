const product = [];

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
  product.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  res.render("shop", {
    products: product,
    pageTitle: "Shop",
    path: "/",
    hasProducts: product.length > 0,
    activeShop: true,
    layout: false,
  });
};
