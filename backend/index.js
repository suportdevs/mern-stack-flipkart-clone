const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
env.config();

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());

app.listen(process.env.PORT, () => {
  console.log(`Server is runing in port ${process.env.PORT}`);
});
