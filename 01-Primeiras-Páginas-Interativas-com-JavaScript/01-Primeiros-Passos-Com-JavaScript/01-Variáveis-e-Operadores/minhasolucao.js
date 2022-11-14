// Faça um programa para calcular o valor de uma viagem.

/* Você terá 3 variáveis. Sendo elas:
1 - Preço do cumbustível;
2 - Gasto médio de combustível do carro por KM/litro;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

//Minha solução para o desafio
const preçoDoCombustivel = 5.79; 
//preço do combustível
var kmPorLitro = 10;
//distancia que o carro anda com 1 litro de gasolina
var distanciaEmKm = 100;
//distancia da viagem em Km

var valorGastoPorKM = preçoDoCombustivel/kmPorLitro;
//valor gasto de combustivel a cada 1 km
var gastoDaviagem = valorGastoPorKM * distanciaEmKm;
//valor gasto total da viagem

console.log(`O valor total da viagem é ${gastoDaviagem.toFixed(2)}`);