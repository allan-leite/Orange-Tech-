/* 
faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por km;
 5 - Distância em km da viagem.

Imprima no console o valor que será gasto para realizar a viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
var kmPorLitro = 10;
var distanciaEmKm = 100;
var tipoCombustivelDoCarro = precoGasolina

const litrosConsumidos = distanciaEmKm / kmPorLitro
const valorGastoGasolina = litrosConsumidos * precoGasolina
const valorGastoEtanol = litrosConsumidos * precoEtanol

if (tipoCombustivelDoCarro === precoGasolina){
    console.log(`O valor gasto com gasolina foi ${valorGastoGasolina.toFixed(2)}`)
} else {
    console.log(`O valor gasto com etanol foi ${valorGastoEtanol.toFixed(2)}`)
}

