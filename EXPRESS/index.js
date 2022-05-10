const express = require("express"); // importando o express
const app = express(); // iniciando o express e repassando para a variavel app

//.post
//.delete
//varias formas de criar rotas 
app.get("/",function(req, resp) {
  resp.send('Bem vindo ao Guia de Dev')
})

app.listen(4000,function(erro) {
  if (erro) {
    console.log("ocorreu um erro!");
  } else {
    console.log('Servidor iniciado com sucesso');
  }
})

