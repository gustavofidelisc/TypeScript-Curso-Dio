//Declaracao de variaveis
var a = 'a' // Escopo Global, nao recomendado
let b = 'b' // Escopo de Bloco, posso alterar o valor
const c = 'c' // Escopo de Bloco, constante nao posso alterar o valor
//---------------------------------------------------------

// Tipos primitivos 
let d: boolean = true  // Tipo boleano
let e: number = 10 // Tipo numerico
let f: string = 'teste' // Tipo string
let g: number[] = [1, 2, 3] // Array de numeros
let h: Array<number> = [4, 5, 6] // Array de numeros
let i: any = 'qualquer coisa' // Qualquer coisa
let j: any[] = [1, 'teste', true] // Array de qualquer coisa

let m: string | null | undefined = 'teste' // Union Types

//----------------------------------------------------------


//Interface declara tipo do Objeto

interface Pessoa {
    nome: string
    idade: number
    profissao?: string // ? indica que o atributo é opcional
}

//Objetos
const pessoa: Pessoa = {
    nome: 'Gustavo',
    idade: 21
}

const pessoa2: Pessoa = {
    nome: 'Felipe',
    idade: 26,
    profissao: 'Programador'
}

//Array de Objetos, forma de declarar, recomendado, mais legivel
const arrayPessoa: Pessoa[] = [
    pessoa,
    pessoa2
]

//Array de Objetos, outra forma de declarar, menos legivel, nao recomendado
const arrayPessoas: Array<Pessoa> = [
    pessoa,
    pessoa2
]

//----------------------------------------------------------

// Estutura de decisões e repetições


const num: number = 15

//Estrutura de decisão if else
if(num > 15 ){
    console.log('Numero maior que 15')
} else {
    console.log('Numero menor que 15')
}

if(num > 15 ){
    console.log('Numero maior que 15')
} else if (num === 15){ //sinais de igualdade == ou === a diferença é que === compara o tipo da variavel e o valor
    console.log('Numero menor que 15')
}

const typeUser = {
    admin: 'Seja bem vindo você é um administrador',
    student: 'Seja bem vindo você é um estudante',
    viewer: 'Seja bem vindo você é um espectador'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser]) // user é uma chave do objeto typeUser
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')

//-------------------------------------------

//Estrutura de repetição for

for(let i = 0; i < 10; i++){
    //console.log(i)
}

//Estrutura de repetição while 

let n = 2
while(n < 6){
    //console.log(n)
    n++
}

// Arrays 

const array: Array<number> = [ 1,2, 3, 4]

const stringArray: string[] = ['a', 'b', 'c']

console.log(array[0])

console.log("array antes de adicionar elemento: ")
console.log(stringArray.length)

//Adicionar elemento no array
stringArray.push('d')

console.log("array depois de adicionar elemento: ", stringArray)

//Remover elemento do array
stringArray.pop()

console.log("array depois de remover elemento: ", stringArray)

//Adicionar elemento no inicio do array
stringArray.unshift('z')

console.log("array depois de adicionar elemento no inicio: ", stringArray)

//Remover elemento do inicio do array

stringArray.shift()

console.log("array depois de remover elemento do inicio: ", stringArray)


// Definindo o num como elemento, e so retorna o elemento que for igual a 4
const buscaNum1 = array.find(num => num === 2)
console.log(buscaNum1)

// Definindo o num como elemento, e so retorna o elemento seguinte que for maior que 2
const buscaNum2 = array.find(num => num > 2)
console.log(buscaNum2)

// forEach

array.forEach(num => {
    if (num > 2 && num  % 2 === 0)
        console.log(num)
})

// map

array.map(num => console.log(num * 2))

// Difereca entre map, e foreach, map melhor para funcoes assincronas e o foreach para funcoes sincronas

// reduce

const soma = array.reduce((acumulador, num) => acumulador + num, 0)

// filter

array.filter(num => num > 2).forEach(num => console.log(num))