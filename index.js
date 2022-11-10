const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const bancoDadosNome = "jornada_fullstack";

async function main() {
  const client = await MongoClient.connect(url);

  const bancoDados = client.db(bancoDadosNome);

  const collection = bancoDados.collection("killers");

  const app = express();

// Sinalizando que estamos utilizando JSON no body

  app.use(express.json());

// Endpoints

  app.get("/", function (req, res) {
  res.send('Hello World!!!')
  })

  app.get("/oi", function (req, res) {
    res.send("Olá cambada!")
  });

// Lista de Informações

  const itens = ["A Caçadora", "Michael Myers", "O Espirito", "Ghostface"];

// Endpoint [GET] /killers READ ALL
  app.get("/killers", async function (req, res) {
    const documentos = await collection.find().toArray();
    res.send(documentos);
  });

// Endpoint [POST] /killers CREATE (criar um item)

  app.post("/killers", async function (req, res) {
  console.log(req.body);

  //Pegamos o nome enviado no body
  const item = req.body;

  //Inserimos o valor recebido na lista
  await collection.insertOne(item);

  res.send("Item criado com sucesso!!")

  });

// Endpoint [GET] /killers/:id - READ BY ID (Pelo ID)
  app.get("/killers/:id", function(req, res) {
  //Pegamos o parametro de rota ID
  const id = req.params.id - 1;

  // Acessamos o item pelo indice
  const item = itens[id];

  // Exibimos o item encontrado
  res.send(item);
  });

// Endpoint [PUT] /killers:id - UPDATE BY ID
  app.put("/killers/:id", function (req, res) {
  // Pegamos o parametro de rota ID
  const id = req.params.id - 1;

  // Pegamos o nome enviado no body
  const item = req.body.nome;

  // Atualizamos com o novo item, na posicao ID da lista de Killers
  itens[id] = item;

  res.send("Item atualizado com sucesso");
  });

// Endpoint [DELETE] /killers/:id - DELETE BY ID
  app.delete("/killers/:id", function (req, res) {
  // Pegamos o parametro de rota ID
  const id =  req.params.id - 1;

  // Remove o item da lista
  delete itens[id];

  // Exibimos uma mensagem de sucesso
  res.send("Item removido com sucesso");
  });


  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
  });
}

main();