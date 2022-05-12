const express = require("express") // importar o express
const aplicativo = express() // iniciando

aplicativo.get("/", function(req, res){
 res.send("Meu teste de Rota")
})

aplicativo.listen(4000, function(erro) {
  if(erro) {
    console.log("ocorreu um erro");
  } else {
    console.log("servidor iniciado");
  }
})