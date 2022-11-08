const { transporter } = require("../config/mailer");

exports.sendRegisterEmail = (user) => {
  transporter.sendMail({
    from: '"Librando BookStore 📖" <librandostore@gmail.com>',
    to: user.email,
    subject: "Bienvenido a Librando Bookstore",
    html: "<b>Gracias por registrarte</b>",
  });
};

exports.sendCheckoutEmail = (user) => {
  transporter.sendMail({
    from: '"Librando BookStore 📖" <librandostore@gmail.com>',
    to: user.email,
    subject: "Gracias por su compra en Librando Bookstore",
    html: "<b>Gracias por comprar</b>",
  });
};
