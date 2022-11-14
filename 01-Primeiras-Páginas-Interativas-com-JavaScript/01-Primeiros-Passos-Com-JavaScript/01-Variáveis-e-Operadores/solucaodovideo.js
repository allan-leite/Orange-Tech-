// Faça um programa para calcular o valor de uma viagem.

/* Você terá 3 variáveis. Sendo elas:
1 - Preço do cumbustível;
2 - Gasto médio de combustível do carro por KM/litro;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

//solução do vídeo

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2))