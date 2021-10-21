const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

let db = null;

const connection = () => {
  return db 
  ? Promise.resolve(db)
  : MongoClient.connect(DB_URL, OPTIONS)
  .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  });
};

module.exports = connection;
