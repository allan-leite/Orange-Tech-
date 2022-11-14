/*
      2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
      
      Formula do IMC:
      IMC = peso / (altura * altura)

      Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

      IMC em adultos Condição:
      - Abaixo de 18.5 Abaixo do peso;
      - Entre 18.5 e 25 Peso normal;
      - Entre 25 e 30 Acima do peso;
      - Entre 30 e 40 Obeso;
      - Acima de 40 Obesidade Grave; 
*/

var altura = 1.70;
var peso = 65;

var imc = peso / (altura * altura);

console.log(`O IMC da pessoa é: ${imc.toFixed(1)}`);

if (imc < 18.5) {
    console.log('Essa pessoa está abaixo do peso.');
} else if (imc <= 25) {
    console.log('O Pesso dessa pessoa está normal.');
} else if (imc <= 30) {
    console.log('Essa pessoa está acima do peso.');
} else if (imc <= 40) {
    console.log('Essa pessoa está obesa.');
} else {
    console.log('Essa pessoa está com obesidade grave!');
}