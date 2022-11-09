const userService = require("./userService");
const orderService = require("./orderService");
const bookOrderService = require("./bookOrderService");

exports.createFullOrder = async (fullOrder) => {
  let user = fullOrder.userData;
  let order = fullOrder.orderData;
  let bookOrders = fullOrder.bookOrdersData;
  let userId = user[0].id;

  // SI EL USUARIO TIENE ID, YA ESTA REGISTADO Y LOGUEADO ==NO HAGO NADA==. SI EL ID VIENE EN NULL, DEBO BUSCARLO O REGISTRARLO
  if (userId === null) {
    userId = await getUserIdOrCreateUser(user);
  }

  // CREO LA ORDEN VACIA y ME QUEDO CON EL ID DE LA ORDEN PARA LOS BOOK ORDER
  let orderCreatedId = await createEmptyOrder(userId, order);

  // CREO LOS BOOK ORDER CON EL ID DE LA ORDEN
  await createBookOrders(orderCreatedId, bookOrders);

  //RECUPERO LA ORDEN COMPLETA PARA DEVOLVERLA EN EL RESPONSE
  let finishedOrder = await orderService.findByOrderId(orderCreatedId);

  return finishedOrder;
};

// ASYNC FUNCTIONS

async function getUserIdOrCreateUser(user) {
  let userId = null;
  // Puede ser que el usuario exista pero no este logueado. entonces voy a buscarlo por dni.
  let foundUser = await userService.findByDni(user[0].dni);
  // Si no lo encuentra, creo el usuario
  if (foundUser == null) {
    let newUser = await userService.create(user[0]);
    userId = newUser.id;
  }
  // Si lo encuentra, me quedo con su userId
  else {
    userId = foundUser.id;
  }
  return userId;
}

async function createEmptyOrder(userId, order) {
  let newOrder = {
    userId: userId,
    statusId: order[0].statusId,
    paymentMethodId: order[0].paymentMethodId,
  };
  let orderCreated = await orderService.create(newOrder);
  return orderCreated.id;
}

async function createBookOrders(orderCreatedId, bookOrders) {
  for (let i = 0; i < bookOrders.length; i++) {
    let newBookOrder = {
      orderId: orderCreatedId,
      quantity: bookOrders[i].quantity,
      bookId: bookOrders[i].bookId,
    };
    await bookOrderService.create(newBookOrder);
  }
}
