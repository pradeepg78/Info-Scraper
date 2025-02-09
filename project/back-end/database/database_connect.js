require("dotenv").config();
const { MongoClient } = require("mongodb");

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.MONGODB_DB_NAME;

async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI);

  await client.connect();
  return client.db(DATABASE_NAME);
}

module.exports = { connectToDatabase };
