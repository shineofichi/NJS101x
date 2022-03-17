const fs = require("fs");
const path = require("path");

const products = [];

module.exports = class Product {
  constructor(product) {
    this.title = product.title;
  }

  save() {
    products.push(this);
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return products;
  }
};
