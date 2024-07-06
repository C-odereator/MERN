const { User } = require("../Models/models");

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
    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  register,
};
