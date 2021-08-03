const { MongoClient } = require('mongodb');
const config = require("./config/db.config");

const queryConnect = async () => {
  return await MongoClient.connect(config.mongoDB);
}

module.exports = {
  queryConnect
}


