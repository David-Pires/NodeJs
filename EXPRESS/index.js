const express = require("express")//importando express
const app = express()//iniciando express

app.get("/",function(req, res) {
  res.send("Bem vindo a minha rota")
})

app.listen(4000,function(erro) {
  if(erro) {
    console.log("Ocorre um erro");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})