require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const debug = require("debug")("api-tipos:api");
const morganFreeman = require("morgan");
const cors = require("cors");
const { get } = require("mongoose");

const app = express()
const puerto = process.env.PORT || process.env.PUERTO || 4000;
const iniciarServidor = ()=>{
  const servidor = app.listen(puerto, () => {
    debug(chalk.yellow(`Servidor iniciado en el puerto ${puerto}`));
  });
  app.use(morganFreeman("dev"));
  app.use(cors());
  app.use(express.json());
  app.get("/kiwi",async (req, res, next) => {
  res.json({mensaje:"soy una fruta :3"});
  })
}
module.exports = {iniciarServidor};
