const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://anhtt:agzwSoCXtFOQfLui@cluster0.0fvan.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw "No database was not found!";
  }
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "note-complete",
//   password: "123123",
// });

// module.exports = pool.promise();

// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "123123", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;
