const express = require("express");
const app = express();

const PORT = 8000;

// Initialize mongoose
const mongoose = require("mongoose");
const MONGODB_URI = `mongodb://localhost:27017/company`;

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  }
);

const Schema = mongoose.Schema;
const User = mongoose.model(
  "users",
  new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    address: {}
  })
);

app.listen(PORT, () => console.log(`App running on ${PORT}`));
