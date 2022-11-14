/*
      1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

      Média = (nota 1 + nota 2 + nota 3) / 3;
      Classificação:
      -Média menor que 5, reprovação;
      -Média entre 5 e 7, recuperação;
      -Média acima de 7, passou de semestre.
*/

var nota1 = 6;
var nota2 = 2;
var nota3 = 9;

var media = (nota1 + nota2 + nota3) / 3;

console.log(`A média do aluno é ${media.toFixed(0)}`)

if (media < 5) {
    console.log('A classificação do aluno é: reprovação.');
} else if (media <= 7) {
    console.log('A classificação do aluno é: recuperação.');
} else {
    console.log('A classificação do aluno é: passou de semestre');
}