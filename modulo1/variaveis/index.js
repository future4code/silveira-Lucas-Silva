/* 

1. imprime b = 10. 
 imprime a, b = 10 5. 

2. imprime = 10 10 10.

3. quantasHoras
recebeQuanto

*/

let nome;
let idade;

console.log("O tipo dessa variável 'nome' é", typeof nome);
console.log("O tipo dessa variável 'idade' é", typeof nome);

//Imprime variável indefinida, pois não foi atribuído nenhum valor

nome = prompt("Qual é o seu nome?");
idade = Number(prompt("Qual é a sua idade?"));

console.log("O tipo da variável 'nome' é", typeof nome);
console.log("O tipo da variável 'idade' é", typeof idade);

//Variáveis 'nome' e 'idade' são string e number

let tomouBanho = prompt("Você já tomou banho hoje?");
let refeicao = prompt("Você já fez sua primeira refeição hoje?");
let corBlusa = prompt("Você está usando preto hoje?");

console.log("Você já tomou banho hoje??", tomouBanho);
console.log("Você já bebeu água hoje?", refeicao);
console.log("Você está usando preto hoje?", corBlusa);

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de 'a' é", a);
console.log("O novo valor de 'b' é", b);


