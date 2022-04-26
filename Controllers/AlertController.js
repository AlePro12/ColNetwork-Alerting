const bot = require("../Telegram");
require("dotenv").config();
const AlertController = {
  msg: "",
  type: "",
  SendAlertToGroup: function (msg, type) {
    this.msg = msg;
    this.type = type;
    bot.sendMessage(process.env.CHANNEL_ID, this.msg);
    return {
      msg: this.msg,
      type: this.type,
      status: true,
    };
  },
};
module.exports = AlertController;
