const express = require('express');
const app = express();
const connectionDB = require('./connection/database')
const rentalCarController = require('./controller/RentalCarController')
const userController = require('./controller/UserController')
require('dotenv/config');



//Setto la porta di ascolto del server
app.listen(process.env.PORTSERVER);

console.log("In ascolto su porta "+process.env.PORTSERVER);

//Connessione al DB MongoDB
connectionDB.CON.connectioDB();


app.use(rentalCarController);
app.use(userController);