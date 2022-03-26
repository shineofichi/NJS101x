const getDb = require("../util/database").getDb;
const ObjectId = require("mongodb").ObjectId;
class User {
  constructor(userName, email, cart, id) {
    this.name = userName;
    this.email = email;
    this.cart = cart;
    this.id = id;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then(() => {
        console.log("Adding was done");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  addToCart(product) {
    const updatedProduct = {
      items: { productId: new ObjectId(product._id), quantity: 1 },
    };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this.id) },
        { $set: { cart: updatedProduct } }
      );
  }

  static findById(id) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(id) })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
