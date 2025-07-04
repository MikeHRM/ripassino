const mongodb = require("mongodb");
require("dotenv").config();

const MongoClient = mongodb.MongoClient;

// yeah, yeah, this is terrible but this is just for training purposes so who cares?
const MongoDbUrl =
  "mongodb+srv://michaelfilippo:VSN2ghv2HpF0icjI@abb-cluster.qhy94ly.mongodb.net/training?retryWrites=true&w=majority";

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Database already initialized");
    return callback(null, _db);
  }
  MongoClient.connect(MongoDbUrl)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database not initialized");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
  MongoDbUrl,
};
