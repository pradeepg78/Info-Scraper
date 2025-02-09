require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

const { connectToDatabase } = require("../database/database_connect");

const startServer = async () => {
  try {
    const db = await connectToDatabase();
    if (db) {
      console.log("Connected to database");
    }
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};
startServer();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", async (req, res) => {
  console.log(req.body);
  return res.json({ message: "Hello World" });
});
