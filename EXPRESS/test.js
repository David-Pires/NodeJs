const express = require("express")
const aplicativo = express()

aplicativo.get("/", function(req, res) {
  res.send("New Route")
})

aplicativo.listen(4000, function(e) {
  if(e) {
    console.log('ocorreu um erro');
  } else {
    console.log('Servidor iniciado');
  }
})