//express routes
const express = require("express");
const router = express.Router();
require("dotenv").config();
const AlertController = require("../Controllers/AlertController");
const Alerting = require("../Alerting");
router.post("/:token", async (req, res) => {
  //ruta de envio de alertas
  //get token bearer and decode
  const token = req.params.token;
  if (process.env.TOKEN == token) {
    res
      .status(200)
      .send(
        AlertController.SendAlertToGroup(
          Alerting.FormularMensaje(req.body.msg, req.body.type).msg,
          req.body.type
        )
      );
  } else {
    console.log("Token no valido ALERTAA!!!");
    res.status(401).send("Token no valido");
  }
});

module.exports = router;
