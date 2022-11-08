const { PaymentMethod } = require("../models");

const payments = [
  {
    name: "VISA",
    logo: "https://img2.freepng.es/20180330/riq/kisspng-credit-card-visa-logo-payment-visa-5abe34c64c0e56.2717996915224147903115.jpg",
  },
  {
    name: "MasterCard",
    logo: "https://img2.freepng.es/20171216/dcc/mastercard-icon-png-5a3556c6e81b34.5328243515134450629507.jpg",
  },
  {
    name: "Cash",
    logo: "https://img2.freepng.es/20180507/axe/kisspng-money-cash-clip-art-cash-coupon-vector-material-5af0ec3c87b683.0742394915257385565559.jpg",
  },
  {
    name: "Paypal",
    logo: "https://img2.freepng.es/20180820/soz/kisspng-logo-paypal-image-brand-vector-graphics--5b7b44131a3a99.9642223615348050111074.jpg",
  },
];

async function createPayments() {
  PaymentMethod.bulkCreate(payments).then(() => {
    console.log("PAYMENTS todo bien");
  });
}

module.exports = createPayments;
