const express = require("express"); // importando o express
const app = express(); // iniciando o express e repassando para a variavel app

//.post
//.delete
//varias formas de criar rotas 
app.get("/",function(req, res) {
  res.send('Bem vindo ao Guia de Dev')
})

app.get("/blog", function(req, res) {
  res.send("Bem vindo ao meu blog")
})

app.get("/canal/youtube", function(req, res) {
  res.send("<h1>Bem vindo a m</h1>")
})

app.listen(4000,function(erro) {
  if (erro) {
    console.log("ocorreu um erro!")
  } else {
    console.log('Servidor iniciado com sucesso')
  }
})

