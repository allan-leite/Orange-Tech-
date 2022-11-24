// 1) Crie um programa que dado um número imprima a sua tabuada.
 
var tabuada = []

const numero = 5
let resultado = 0
var inicio = 1 //altere o valor dessa variavel para mudar o inicio da tabuada
var fim = 10 // altere o valor dessa variavel para mudar o fim da tabuada

for (let i = 0; i < fim; i++) {
    tabuada.push(i + inicio)
    resultado = numero * tabuada[i]
    console.log(`${numero} x ${tabuada[i]} = ${resultado}`)
}