const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

env.config();
app.use(express.json());
app.use(bodyParser());

app.listen(process.env.PORT, () => {
  console.log(`Server is runing in port ${process.env.PORT}`);
});
