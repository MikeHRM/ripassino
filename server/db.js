const mongodb = require("mongodb");
require("dotenv").config();

const MongoClient = mongodb.MongoClient;

// yeah, yeah, this is terrible but this is just for training purposes so who cares?
const MongoDbUrl =
  // "mongodb://michaelfilippo:GYLxX0xDrw4ON7DM@localhost:27017/?retryWrites=true&w=majority&appName=sample_mflix";
  "mongodb+srv://michaelfilippo:GYLxX0xDrw4ON7DM@ripassino.oupediz.mongodb.net/?retryWrites=true&w=majority&appName=sample_mflix";
// "mongodb://michaelfilippo:GYLxX0xDrw4ON7DM@localhost/?retryWrites=true&w=majority&appName=sample_mflix";

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
