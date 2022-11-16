/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

function verificaPagamento(preco, formapagamento) {
    if (formapagamento === 1) {
        console.log(`Desconto de 10% no valor de ${preco}`)
        return preco - (preco * 0.1);
    } else if (formapagamento === 2) {
        console.log(`Desconto de 15% no valor de ${preco}`)
        return preco - (preco * 0.15);
    } else if (formapagamento === 3) {
        console.log(`Não tem nenhum desconto ou acrescimo na forma de pagamento escolhida`);
        return preco;
    } else if (formapagamento === 4) {
        console.log(`Acrescimo de 10% de juros no valor de ${preco}`)
        return preco + (preco * 0.1)
    }
}

(function () {
    const debito = 1;
    const dinheiroAndPix = 2;
    const duasVezes = 3;
    const acimaDeDuasVezes = 4;

    console.log('Você vai pagar ' + verificaPagamento(100, acimaDeDuasVezes) + ' reais');
})()