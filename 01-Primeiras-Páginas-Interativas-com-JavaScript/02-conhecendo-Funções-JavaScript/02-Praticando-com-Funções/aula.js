function escrevaUmNome(nome) {
    return nome;
}

function verificaIdade18(idade) {
    if(idade < 18) {
        console.log(escrevaUmNome('Allan, ') + 'Você é menor de idade');
    } else {
        console.log('Você é maior de idade');
    }
}

(function () {
    //escrevaUmNome('Allan');
    //escrevaUmNome('Jesus');
    verificaIdade18(6);
})()
