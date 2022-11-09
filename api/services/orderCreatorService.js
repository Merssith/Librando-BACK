const userService = require("./userService");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.createFullOrder = async (fullOrder) => {
  let user = fullOrder.userData;
  let order = fullOrder.orderData;
  let bookOrders = fullOrder.bookOrdersData;

  // SI EL USUARIO TIENE ID, YA ESTA REGISTADO Y NO HAGO NADA. SI EL ID VIENE EN NULL, DEBO DE REGISTRARLO

  if (!user.id) {
    // Puede ser que el usuario exista pero no este logueado. entonces voy a buscarlo por dni.
    let foundUser = await userService.findByDni(user.dni);
    // Si no lo encuentra, creo el usuario
    if (foundUser == null) {
      await userService.create(user);
    }
    // Si lo encuentra, me quedo con su userId
    else {
      let userId = foundUser.id;
    }
  } else {
    let userId = user.id;
  }
  // CREO LA ORDEN VACIA, TOMANDO EL USERDATA.ID

  // CREO LOS BOOK ORDEN CON EL ID DE LA ORDEN
};
