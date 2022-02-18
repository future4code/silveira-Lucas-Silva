// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}
console.log.apply(soma[10, 10])

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Qual a altura do retângulo?'))
  let largura = Number(prompt('Qual a largura do retângulo?'))
  let area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoatual = Number (prompt('Digite o ano atual'))
  let anoNascimento = Number (prompt('Digite o ano de nascimento'))
  let resultado = anoatual - anoNascimento
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let calculo = peso/(altura **2)
return calculo
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt('Digite seu nome')
  let idade = Number (prompt('Digite sua idade'))
  let email = prompt('Digite seu email')
    
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Digite sua 1ª cor favorita')
  let cor2 = prompt('Digite sua 2ª cor favorita')
  let cor3 = prompt('Digite sua 3ª cor favorita')
  let arrayCores =[cor1, cor2, cor3]

  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return saldoPositivo = custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let comparacao = string1.length === string2.length
  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}