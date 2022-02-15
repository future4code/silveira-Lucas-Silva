/*EXERCÍCIO INTERPRETAÇÃO 1*/

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 //false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) //false
console.log("c. ", resultado)

console.log("d. ", typeof resultado) //boolean (vi na internet)



/*EXERCÍCIO INTERPRETAÇÃO 2*/
let primeiroNumero = Number (prompt ("Digite um numero!"))
let segundoNumero = Number (prompt ("Digite outro numero!"))

let soma = primeiroNumero + segundoNumero

console.log(soma)


/*EXERCÍCIO INTERPRETAÇÃO 3*/



/*EXERCÍCIO ESCRITA 1*/
    let idadeUsuario = Number (prompt ("Digite sua idade!"))
    let idadeAmigo = Number (prompt ("Digite a idade do amigo!"))


    const idaUsu = idadeUsuario
    const idaAmg = idadeAmigo

    let resultado3 = idaUsu > idaAmg
    console.log("Sua idade é maior do que a do seu melhor amigo?", resultado3) 

    let resultado1 = idadeUsuario - idadeAmigo
    console.log ("A diferença de idade é =",resultado1)




    /*EXERCÍCIO ESCRITA 2*/

    /*a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/

    /*let numeroPar = Number (prompt ("Digite um numero Par!"))

    let Number = numeroPar / 2  
 

    console.log (numeroPar)*/


    /*const KWConsumo = 280;
    const total = KWConsumo*0.05
    const total2=KWConsumo*/
