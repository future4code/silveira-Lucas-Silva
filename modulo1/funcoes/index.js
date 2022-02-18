
//Exercícios de interpretação de código

//1.a) O que vai ser impresso no console?
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))  //R: =10
console.log(minhaFuncao(10)) //R: =50

//.....................................

//1.b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

//R: Não aparecera no console.

//_____________________________________

//2.a)Explique o que essa função faz e qual é sua utilidade

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//R:Pede um texto ao usuário, tansforma tudo em misuscula e diz se é true(verdadeiro) ou false(falso)

//......................................

//2.b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//i.   Eu gosto de cenoura          R:true
//ii.  CENOURA é bom pra vista      R:true
//iii. Cenouras crescem na terra    R:true

//_______________________________________


//Exercícios de escrita de código


//1.a) Escreva as funções explicadas abaixo:
    
    //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//R: 
console.log("Eu sou Lucas, tenho 31 anos, moro em Rio de Janeiro e sou estudante.")


//........................................

//1.b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
/*
const infoUsuario = prompt("nome")
const infoUsuario1 = Number (prompt("idade"))
const infoUsuario2 = prompt("cidade")
const infoUsuario3 = prompt("profissao")

console.log(`Eu sou ${infoUsuario}, tenho ${infoUsuario1} anos, moro em ${infoUsuario2} e sou ${infoUsuario3}.`)
*/
//R: Eu sou Paulo, tenho 30 anos, moro em Minas Gerais e sou Militar.

//........................................

//2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.do.
/*
let primeiroNumeros = Number (prompt
("Digite um numero"))
let segundoNumeros = Number (prompt
("Digite outro numero"))

let somar = Number (primeiroNumeros + segundoNumeros)
 
 console.log(somar);  */

//R: Soma dos dois números digitados pelo usuário.

//......................................

//2.b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

const comparar = function(a ,b) {
    return a >= b;
 };
 
 console.log(comparar(10, 10));
 
 //.........................................

 //2.c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

 function devolva(num1) {
    return num1 % 2 === 0
 }
 devolva(10)
 devolva(5)
 devolva(3)


 //2.d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.



 function mensagem(alteracao){

 const novaFrase = alteracao.toLowerCase()
    const tamanho = novaFrase .length
    console.log(novaFrase, tamanho)
}

mensagem("vou embora.")



























//Warm Up 18/02/2022

const minhaFuncao = (array) => {
    return array[array.length]}

console.log(minhaFuncao([1, 2, 3]))

function fora(x, y) {
        function dentro() {
            let z = x + y
                return z;
        }
        return z;
}
console.log(fora(4, 4))

let primeiraFuncao = (primeiroNumero, segundoNumero) => {
    return primeiroNumero + segundoNumero
};
let segundaFuncao = (primeiroNumero, segundoNumero) => {
    return primeiroNumero % segundoNumero
};
let terceiraFuncao = (primeiroNumero, segundoNumero) => {
    let primeiroValor = primeiraFuncao(primeiroNumero, segundoNumero)
    let segundoValor = segundaFuncao(primeiroNumero, segundoNumero)
    return primeiroValor + segundoValor
};
console.log(terceiraFuncao(2, 1))