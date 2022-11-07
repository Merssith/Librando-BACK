const { User } = require("../models");

exports.findAll = () => {
  return User.findAll();
};

exports.create = (user) => {
  return User.create(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return false;
  const validate = await user.validatePassword(password);
  if (!validate) return false;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    isAdmin: user.isAdmin,
  };
};

exports.change = (id, body) => {
  return User.findByPk(id).then((user) => user.update(body));
};

exports.me = () => {
  return;
};
