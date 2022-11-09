const express = require('express')
const app = express()

// Sinalizando que estamos utilizando JSON no body

app.use(express.json());

// Endpoints

app.get('/', function (req, res) {
  res.send('Hello World!!!')
})

app.get("/oi", function (req, res){
    res.send("Olá cambada!")
});

// Lista de Informações

const itens = ["A Caçadora", "Michael Myers", "O Espirito", "Ghostface"];

// Endpoint [GET] /killers READ ALL
app.get("/killers", function (req, res) {
  res.send(itens);
});

// Endpoint [POST] /killers CREATE (criar um item)

app.post("/killers", function (req, res) {
  console.log(req.body);

  //Pegamos o nome enviado no body
  const item = req.body.nome;

  //Inserimos o valor recebido na lista
  itens.push(item);

  res.send("Item criado com sucesso!!")

});

// Endpoint [GET] /itens/:id - READ BY ID (Pelo ID)
app.get("/killers/:id", function(req, res) {
  //Pegamos o parametro de rota ID
  const id = req.params.id - 1;

  // Acessamos o item pelo indice
  const item = itens[id];

  // Exibimos o item encontrado
  res.send(item);
});

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
});