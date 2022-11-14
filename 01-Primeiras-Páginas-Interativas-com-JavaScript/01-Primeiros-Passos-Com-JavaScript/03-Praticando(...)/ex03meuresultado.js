/*
      3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
      Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

      Código Condição de pagamento:
      - À vista Débito, recebe 10% de desconto;
      - À vista no Dinheiro ou no PIX, rece 15% de desconto;
      - Em duas vezes, preço normal de etiqueta sem juros;
      - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

var preco = 100;
var debito10 = 'debito';
var dinheiroPix15 = 'dinheiro e pix';
var duasVezes = 'duas vezes';
var maisDuasVezes = 'mais de duas vezes'
var formaPagamento = maisDuasVezes;

if (formaPagamento === debito10) {
    var debito10 = 10 * preco / 100;
    debito10 = preco - debito10;
    console.log(debito10);
} else if (formaPagamento == dinheiroPix15) {
    var dinheiroPix15 = 15 * preco / 100;
    dinheiroPix15 = preco - dinheiroPix15;
    console.log(dinheiroPix15);
} else if (formaPagamento == duasVezes) {
    console.log(preco);
} else if (formaPagamento == maisDuasVezes) {
    var maisDuasVezes = 10 * preco / 100;
    maisDuasVezes = preco + maisDuasVezes;
    console.log(maisDuasVezes);
}
