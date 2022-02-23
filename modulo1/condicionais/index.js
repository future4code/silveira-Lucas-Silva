//____________________________________________________________________________
//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//1.a)Explique o que o código faz. Qual o teste que ele realiza? 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero2 = Number(respostaDoUsuario)

if (numero2 % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//R: Pega o número do usuário e divide por 2, se o resto for igual a 0 "Passou no teste." se não "Não passou no teste"



//1.b) Para que tipos de números ele imprime no console "Passou no teste"? 
//R: Números que são divivíseis por 2 e sobram 0.

//1.c) Para que tipos de números a mensagem é "Não passou no teste"? 
//R: Números que há restos quando dividos por 2.


//2.a)Para que serve o código acima?
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a)R:Para o usuário saber o valor da fruta escolhida por ele.


//2.b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//R: O preço da fruta Maçã é R$2.25

//2.c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//R: O preço da fruta Pêra é R$5

//3.a)O que a primeira linha está fazendo?
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//R:Pedindo ao usuário para digitar o primeiro número.

//3.b)Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//R: Considere um usuário digitou o número 10 retornari a mensagem: Esse número passou no teste.
//R: E se fosse o número -10 retornaaria: Undefined (RESPOSTA CERTA: Erro no console )


//3.c)Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R: A variável "mensage" está fora do escopo a qual o console.log(mensagem) se refere.


//_________________________________________________________________________________
//EXERCÍCIO DE ESCRITA DE CÓDIGO

//1.a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
//1.b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
//1.c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

//R:a,b,c)
let idade = Number (prompt("Diga sua idade"))
if (idade >= 18) { 
    resposta = "Você pode dirigir."
} else if (idade < 18) {
    resposta = "Você não pode dirigir."
}

console.log(resposta)

//2.Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turno = prompt("Qual sua turno? (M)matutino, (V)vespertino, (N)noturno")


if (turno.includes("M") ) { 
    resposta = "Bom dia."
}    if (turno.includes("V") ) { 
        resposta = "Boa tarde."
} if (turno.includes("N")) {
    resposta = "Boa noite"
}

console.log(resposta)


//3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoAluno = prompt("Qual sua turno? (M)matutino, (V)vespertino, (N)noturno")

switch (turnoAluno){
    case 'M':
        console.log('Bom dia')
        break
    case 'V':
        console.log('Boa tarde')
        break
    case 'N':
        console.log('Boa noite')       
                  

}

//4.
const genero = prompt('Qual gênero de filme vamos assistir?');
const valor = Number (prompt('Qual preço do ingresso?'));

if(genero === "fantasia" && valor < 15){
    console.log("Bom filme")
}else{
    console.log("Escolha ouotro filme :(")
}
