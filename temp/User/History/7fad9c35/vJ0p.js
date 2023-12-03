let express = require('express');
let app = express();
require('dotenv').config()
var bodyParser = require('body-parser');


//7---Implementa un Middleware de registro de peticiones a nivel raiz.
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});  

 //11---Usa body-parser para analizar las peticiones POST.

 //parse application/x-www-form-urlencoded.
 /* app.use(bodyParser.urlencoded({ extended: false }));

 //parse application/json.
 app.use(bodyParser.json());

 app.get("/body-parsed-info", (req, res) => {
   // res.json({ parsed: bodyParser.json()});
    console.log(bodyParser);
 }); */


//1---Bienvenido a la consola de Node.
console.log("Hello World");

//2---Inicia un servidor Express
 /* app.get('/', (req, res) => {
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
 app.get("/json", (req, res) => {
    res.json({ "message": "Hello json"});
}); 

//6---Usa el archivo .env
app.get("/json", (req, res) => {
    var jsonResponse = { "message": "Hello json" };

    if(process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase();
    }

    res.json(jsonResponse);
});  

//8---Encadenando Middlewares para crear un servidor horario.
 function getTheCurrentTimeString() {
    return new Date().toString();
}

 app.get("/now", (req, res, next) => {
    req.time = getTheCurrentTimeString();
    next();
 }, (req, res) => {
    res.json({ time: req.time});
 
 }); 

 //9---Obten la entrada de parametros de ruta del cliente.
  app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word});
 }); 

 //10---Obten la entrada de parametros de consulta del cliente.
   app.get("/name", (req, res) => {
    res.json({ name: req.query.first + " " + req.query.last});
 });  

//12---Obten datos de las peticiones POST.
 /* app.post("/name", (req, res) => {
    res.json({ name: req.body.first + " " + req.body.last});
}); */




 module.exports = app;
