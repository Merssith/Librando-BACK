const userService = require("../services/userService");
const emailService = require("../services/emailService");
const { generateToken } = require("../config/tokens");

exports.getUsers = (req, res) => {
  userService
    .findAll()
    .then((orders) => res.status(200).send(orders))
    .catch((err) => res.status(400).send(err));
};

exports.createUser = (req, res) => {
  const user = req.body;
  userService
    .create(user)
    .then((newUser) => {
      emailService.sendRegisterEmail(newUser);
      res.status(201).send(newUser);
    })
    .catch((err) => res.status(400).send(err));
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const payload = await userService.login(email, password);
  if (!payload) res.sendStatus(401);
  const token = generateToken(payload);
  res.cookie("token", token);
  res.send(payload);
};

exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

exports.editUser = (req, res) => {
  const id = req.params.id;
  userService.change(id, req.body).then((updatedUser) => res.send(updatedUser));
};

exports.getMe = (req, res) => {
  res.send(req.user);
};

// exports.removeUser = (req, res) => {
//   const id = req.params.id;
//   userService.delete();
// };
