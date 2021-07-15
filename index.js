const conectaMongo = require("./db/index");
const { iniciarServidor } = require("./servidor/init");

conectaMongo(iniciarServidor);
