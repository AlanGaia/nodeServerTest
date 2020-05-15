//Require del modulo express
const express = require("express");
//require del path para hacer rutas absolutas
const path = require("path");
//PUERTO constante que tiene el numero del puerto
const puerto = 3000;
//inicializo express y lo que devuelve lo guardo en app
const app = express();

//middlewares
app.use(express.static(path.join(__dirname, "./../client/")));

//Rutas del get
app.get("/", function (req, res) {
  res.sendfile("index.html");
});
app.get("/bonito", function (req, res) {
  res.sendfile("nice.html");
});

//Abro el servidor en el puerto que declare con las CONST
app.listen(puerto, () => {
  console.log(`Servidor encendido en el puerto ${puerto}`);
});
