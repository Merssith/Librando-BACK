const orderService = require("./orderService");
const bookOrderService = require("./bookOrderService");

exports.createFullOrder = async (fullOrder) => {
  let user = fullOrder.userData;
  let order = fullOrder.orderData;
  let bookOrders = fullOrder.bookOrdersData;
  let userId = user[0].id;

  // CREO LA ORDEN VACIA y ME QUEDO CON EL ID DE LA ORDEN PARA LOS BOOK ORDER
  let orderCreatedId = await createEmptyOrder(userId, order);

  // CREO LOS BOOK ORDER CON EL ID DE LA ORDEN
  await createBookOrders(orderCreatedId, bookOrders);

  //RECUPERO LA ORDEN COMPLETA PARA DEVOLVERLA EN EL RESPONSE
  let finishedOrder = await orderService.findByOrderId(orderCreatedId);

  return finishedOrder;
};

// ASYNC FUNCTIONS

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
