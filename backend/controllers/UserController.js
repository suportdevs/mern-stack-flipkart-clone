const jwt = require("jsonwebtoken");

// internal imports
const User = require("../models/People");

async function signUp(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const { firstname, lastname, username, email, password } = req.body;
      const newUser = new User({
        firstname,
        lastname,
        username,
        email,
        hashPassword: password,
      });
      const result = await newUser.save();
      return res.status(200).json({
        message: "User created successfull.",
      });
    } else {
      return res.status(500).json({ message: "User already exist!" });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
}

async function signIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_SECRET
        );
        res.status(200).json({
          token,
          user: {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
          },
        });
      } else {
        res.status(400).json({ message: "Password is invaild!" });
      }
    } else {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
}

module.exports = {
  signUp,
  signIn,
};
