let express = require('express');
let app = express();
require('dotenv').config()
var bodyParser = require('body-parser');

//Bienvenido a la consola de Node.
console.log("Hello World");

//Inicia un servidor Express
/* app.get('/', (req, res) => {
    res.send("Hola express...");
}); */

//Sirve un archivo HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//Sirve recursos estaticos

    



 module.exports = app;
