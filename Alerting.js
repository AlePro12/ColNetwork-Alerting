//momentjs
const moment = require("moment");

const Alerting = {
  FormularMensaje: function (mensaje, tipo) {
    switch (tipo) {
      case "INFO":
        return {
          msg:
            "INFO🧐 - " +
            mensaje +
            "\n\n" +
            moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        break;
      case "ERROR":
        return {
          msg:
            "ERROR ⛔️❗️❗️ - " +
            mensaje +
            "\n\n" +
            moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        break;
      case "WARNING":
        return {
          msg:
            "WARNING ⚠️⚠️ - " +
            mensaje +
            "\n\n" +
            moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        break;
      default:
        return {
          msg:
            "INFO🧐 - " +
            mensaje +
            "\n\n" +
            moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        break;
    }
  },
};
module.exports = Alerting;
