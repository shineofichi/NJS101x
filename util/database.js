// const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://anhtt:agzwSoCXtFOQfLui@cluster0.0fvan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;

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
