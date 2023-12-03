let express = require('express');
let app = express();
require('dotenv').config()
var bodyParser = require('body-parser');


//7---Implementa un Middleware de registro de peticiones a nivel raiz.
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

//1---Bienvenido a la consola de Node.
console.log("Hello World");

//2---Inicia un servidor Express
/*  app.get('/', (req, res) => {
    res.send("Hola express...");
});  */

//3---Sirve un archivo HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//4---Sirve recursos estaticos
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));

//5---Sirve JSON en una ruta especifica.
/* app.get("/json", (req, res) => {
    res.json({ "message": "Hello json"});
}); */

//6---Usa el archivo .env
app.get("/json", (req, res) => {
    var jsonResponse = { "message": "Hello json" };

    if(process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase();
    }

    res.json(jsonResponse);
});



    



 module.exports = app;
