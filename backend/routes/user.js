const express = require("express");
const router = express.Router();

//internal imports
const { signUp, signIn } = require("../controllers/UserController");

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
