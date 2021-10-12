const express = require('express');
const app = express();
//console.log(process.env.PORT);

const path = require('path');
const pathPublic = path.join(__dirname, './public');
app.use(express.static(pathPublic));

//Falta una barra para el OR
app.listen(process.env.PORT || 3030,() => {console.log("Mercado Liebre funciona")});

//app.listen(undefined || 3000, console.log('Servidor OK'));
//app.get('/', (req,res) => {res.sendFile(path.join(__dirname, './views/home.html'))});
// app.get('/', (req,res) => {res.sendFile(__dirname + './views/home.html')});


