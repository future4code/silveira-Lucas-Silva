
//EXERCÍCIO 1 - INTERPRETAÇÃO

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i]) //11

array[i+1] = 19
console.log('e. ', array) //11

const valor = array[i+6] //17
console.log('f. ', valor)


//EXERCÍCIO 2 - INTERPRETAÇÃO

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS



//------------------------------------------



//EXERCÍCIO 1 - ESCRITA

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu e-mail")

const infoUsuaruio = `O E-mail` + email + `foi cadastrado com sucesso. Seja bem-vinda(o),` + nome + `!`

const infoUsuaruio2 = `O E-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`


console.log(infoUsuaruio2)


//EXERCÍCIO 2 - ESCRITA

//a)
let comidaPreferida = ['Macarrão', 'Pizza', 'Churrasco', 'Camarão', 'Strogonoff'];
console.log(comidaPreferida)

//b)
console.log(`Essas são as minhas comidas preferidas: 
    ${comidaPreferida[0]},
    ${comidaPreferida[1]},
    ${comidaPreferida[2]},
    ${comidaPreferida[3]},
    ${comidaPreferida[4]}.`);

//c)

const comidapreferidaUsuario = (prompt('Diga seu prato favorito'))

comidaPreferida[0] = comidapreferidaUsuario

console.log(comidaPreferida)  



//EXERCÍCIO 3 - ESCRITA
//a.
let listaDeTarefas = [];

//b. 
let tarefa1 = prompt("Qual sua 1ª tarefa do dia?");
let tarefa2 = prompt("Qual sua 2ª tarefa do dia?");
let tarefa3 = prompt("Qual sua 3ª tarefa do dia?");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

console.log(listaDeTarefas)

let tarefaEscolhida = Number (prompt("Digite a tarefa realizada"))

listaDeTarefas.plices(tarefaEscolhida)

//c.
console.log(listaDeTarefas);

/*
//d.
let escolhaIndice = Number(prompt(`Por favor, insira o índice de uma tarefa que você já realizou:
    0 - ${listaDeTarefas[0]}
    1 - ${listaDeTarefas[1]}
    2 - ${listaDeTarefas[2]}`));

//e.
listaDeTarefas.splice(escolhaIndice, 1);

//f.
console.log(listaDeTarefas);*/