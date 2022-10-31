//external imports
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decode;
  next();
}

module.exports = authenticate;
