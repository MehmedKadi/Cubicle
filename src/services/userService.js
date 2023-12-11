const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const jwt = require("../lib/jwt.js");
const { SECRET } = require("../constants.js");

exports.register = (userData) => {
  //
  return User.create(userData);
};

exports.login = async (username, password) => {
  //
  const user = await User.findOne({ username });

  //* Validate username
  if (!user) {
    throw new Error("Invalid username or pass! :(");
  }

  //* Validate password

  const isValidPass = await bcrypt.compare(password, user.password);

  if (!isValidPass) {
    throw new Error("Invalid username or pass! :(");
  }
  const payload = {
    _id: user._id,
    username: user.username,
  };

  const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

  return token;
};
