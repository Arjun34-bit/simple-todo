const User = require("../models/User");
const generateToken = require("../config/generateToken");
const crypto = require("crypto");

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username });
    if (!isUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Hash the provided password for comparison with the stored hashed password
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (hashedPassword !== isUser.password) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    if (isUser) {
      return res.status(201).json({
        _id: isUser._id,
        username: isUser.username,
        token: generateToken(isUser._id),
      });
    } else {
      return res.status(500).json({ message: "Registration Failed" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const userRegister = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username });
    if (isUser) {
      return res.status(400).json({ message: "Username not availble " });
    }
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const hashedPasswordString = hashedPassword.toString();
    console.log(hashedPasswordString);

    const user = await User.create({
      username: username,
      password: hashedPasswordString,
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        username: user.username,
        password: user.password,
        token: generateToken(user._id),
      });
    } else {
      return res.status(500).json({ message: "Registration Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { userLogin, userRegister };
