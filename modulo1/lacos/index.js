//______________INTERPRETAÇÃO_______________

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
//console.log(valor)

//R: 10

//2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		//console.log(numero)
	}
}


//a) O que vai ser impresso no console?
//R: 19, 21, 23, 25, 27, 30

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R: o "length()"

//3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} 

//R: *, **, ***, ****.




//________________ESCRITA_________________

//1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

const numeroDePets = +prompt('Quantos pets vocês tem?')
let nomesDosPets = []

if (numeroDePets == 0) {
    console.log ('Que pena! Você pode adotar um pet!')
}else {
    for (let i = 0; 1 < numeroDePets; i++) {
        nomesDosPets [i] = prompt(`Qual o nome do seu ${i + i}º pet`)
    }
    for (let i = 0; i < numeroDePets; i++) {
        console.log(nomesDosPets[1])
    }
}

const nomePets = []
    let numPets = Number (prompt("Quantos pets de estimação você tem?"))
        if (numPets ===0) {
            console.log("Que pena! Você pode adotar um pet!")
            else if(numPets > 0) {
                let i = 0
                while(i < numPets) {
                    nomePets.push(prompt("Digite o nome do seus pets"))
                    i++
                }
                console.log()
            }
        }

//COPIADO DO COLEGA ^
//Os dois incompletos
    
    




//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//R:
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//R:



//2.a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let k of arrayOriginal) {
    console.log(k)
}
//COPIADO DO COLEGA ^




//b)
for (let k of arrayOriginal) {
    console.log(k/10)
}
//COPIADO DO COLEGA ^



//c) 


//O DE ESCRITO HOJE FOI DIFÍCIL DE MAIS PRA MIM :(