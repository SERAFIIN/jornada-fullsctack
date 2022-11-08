const express = require('express')
const app = express()

//
app.get('/', function (req, res) {
  res.send('Hello World!!!')
})

app.get("/oi", function (req, res){
    res.send("Olá cambada!")
});

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
});