const { User } = require("../Models/models");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
  try {
    res.send("nothing World");
  } catch (error) {
    console.log(error);
  }
};
// nothing
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });

    console.log(userCreated);
    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  register,
};
