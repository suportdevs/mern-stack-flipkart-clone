const express = require("express");
const router = express.Router();

//internal imports
const { signUp, signIn } = require("../controllers/UserController");
const authenticate = require("../middleware/authenticate");

router.post("/signup", signUp);
router.post("/signin", signIn);

router.post("/profile", authenticate, (req, res) => {
  res.status(200).json({ message: "authenticate" });
});

module.exports = router;
