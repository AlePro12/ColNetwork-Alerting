//Alejandro David Sanchez Marcano. (FKGG<3)
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const ExpressApp = express();

//middlewares
const app = express();
ExpressApp.use(morgan("dev"));
ExpressApp.use(express.json());
//routes
ExpressApp.use("/api/SendAlert", require("./routes/Alert.routes"));
//Colnetwork-APWIS
ExpressApp.listen(process.env.PORT, () => {
  console.log(`Server on port ${ExpressApp.get("port")}`);
});
