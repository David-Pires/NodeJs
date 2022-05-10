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

app.get("/ola/:nome/:empresa", function(req, res) {
  var nome = req.params.nome
  var empresa = req.params.empresa

  res.send(`<h1>Oi ${nome} ${empresa}</h1>`)
})
//req: são os dados enviados  pelo usuario
//res: é a resposta que será enviada ao usuário
//parametro nome
//posso ter quantos parametros eu quiser
// é necessário passar parametro mais valor 
// neste caso /ola/AlgumaCoisa

app.listen(4000,function(erro) {
  if (erro) {
    console.log("ocorreu um erro!")
  } else {
    console.log('Servidor iniciado com sucesso')
  }
})

