const { Sequelize } = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});

module.exports = Product;
// const Cart = require("./cart");
// const db = require("../util/database");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO product(title, imageUrl, description, price) VALUES (?, ?, ? ,?)",
//       [this.title, this.imageUrl, this.description, this.price]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute("SELECT * FROM product");
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM product WHERE id = ?", [id]);
//   }
// };
