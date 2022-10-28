//external imports
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.heders.authorization;
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decode;
  next();
}

module.exports = authenticate;
