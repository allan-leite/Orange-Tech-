// Faça um programa para calcular o valor de uma viagem.

/* Você terá 3 variáveis. Sendo elas:
1 - Preço do cumbustível;
2 - Gasto médio de combustível do carro por KM/litro;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const preçoDoCombustivel = 4.98 //preço do combustível
var kmLitro = 8 //distancia que o carro anda com 1 litro de gasolina 
var distancia = 15 //distancia da viagem
var valorGastoPorKM = preçoDoCombustivel/kmLitro // valor gasto de combustivel a cada km
var gastoDaviagem = valorGastoPorKM * distancia // gasto total da viagem

console.log(`O valor total da viagem é ${gastoDaviagem}`)