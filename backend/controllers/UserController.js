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
        message: "User c reated successfull.",
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

module.exports = {
  signUp,
};
