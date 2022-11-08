const express = require('express')
const app = express()

// Endpoints

app.get('/', function (req, res) {
  res.send('Hello World!!!')
})

app.get("/oi", function (req, res){
    res.send("Olá cambada!")
});

// Lista de Informações

const itens = ["A Caçadora", "Michael Myers", "O Espirito"];

// Endpoint [GET] /killers READ ALL
app.get("/killers", function (req, res) {
  res.send(itens);
});

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
});