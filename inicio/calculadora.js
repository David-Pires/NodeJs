function soma(a,b) {
  return a + b 
}

function multi(a,b) {
  return a * b 
}
function sub(a,b) {
  return a - b 
}
function div(a,b) {
  return a / b 
}


module.exports = {
  soma,
  multi,
  sub,
  div
}
//module.exports pra exportar função/modulo

/* É possível exportar variáveis 

exemplo 

var vouExportar = 1

function soma(a,b) {
  return a + b 
}

module.exports = vouExportar
*/