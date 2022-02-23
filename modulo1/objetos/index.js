//1.a)INTERPRETAÇÃO
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?
//R: Matheus Nachtergaele
//12
//Canal Brasil 19H


//2.a)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


//a) O que vai ser impresso no console?
//R: Juca 3 SRD
//R: Juba 3 SRD
//R: Jubo 3 SRD


//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//R: Acrescenta ou substitui uma chave



//3.a)
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//R: backender false
//R: undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//R: No console.log(minhaFuncao(pessoa, "altura")) porque não existe este valor.


//1.a)ESCRITA
const pessoa1 = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
//console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]}, ${pessoa1.apelidos[2]}.`)

 function imprimeApelidos(objeto){
     return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`
 }
const novaPessoa = {...pessoa1, apelidos:["Fofinha", "Fofa", "Fofuxa"]}

console.log(imprimeApelidos(novaPessoa))
 

 //b)
 const pessoa2 = {
     ...pessoa1, 
     apelidos: ["nem", "nenem", "nenê"]
}
console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]}, ${pessoa2.apelidos[2]}.`)


//2.a)
const aluno ={
    nome:"lucas",
    idade: 31,
    profissao: "Desenvolvedor"

}
const retornaArray= (objeto)=>{
    const array = [objeto.nome, objeto.nome.length]
}



const carrinho = ["Banana", "Maçã", "Melão", ]

const fruta1 ={
nome:"kiwi",
disponibilidade: true
}

function adicionaFruta(objeto){

}
adicionaFruta(fruta1)


funcaoCarrinho(fruta1)
funcaoCarrinho(fruta1)
funcaoCarrinho(fruta1)

console.log(carrinho)