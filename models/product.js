const products = [];

module.exports = class Product {
  constructor(product) {
    this.title = product.title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
