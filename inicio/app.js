//require é utilizado e esse valor deve ser armazenado em uma função
var somaFuncao = require('./calculadora')

function multi(a,b) {
  return a * b 
}
function sub(a,b) {
  return a - b 
}
function div(a,b) {
  return a / b 
}


console.log(somaFuncao(6,6));

// var resultadoSoma = somaFuncao(2,2)
// var resultadoMulti = multi(2,8)
// var resultadoSub = sub(2,2)
// var resultadoDiv = div(12,2)
// console.log(resultadoSoma, resultadoMulti, resultadoSub, resultadoDiv);







  
  
  // var mostrarSite = true
  // const site = "www.david.com"

  // console.log('Oh my,my!!')
  // console.log("I'm David")
  // console.log('Starting with Node.Js')

  
  // if(mostrarSite) {
  //   console.log(site)
  // }
  