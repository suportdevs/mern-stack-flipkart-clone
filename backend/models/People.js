const mongoose = require("mongoose");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      tirm: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    contact: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User");
