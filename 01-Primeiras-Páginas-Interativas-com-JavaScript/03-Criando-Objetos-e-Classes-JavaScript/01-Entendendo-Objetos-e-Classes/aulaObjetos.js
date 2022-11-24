/*
Um objeto é uma coleção de valores, ou seja, um objeto agrupa valores, e 
ele funciona através de chave e valor.

Você pode incrementar um objeto literal dinamicamente.

Um objeto tambem pode receber uma função, uma função dentro de um objeto é chamada de método


*/
const pessoaObj = {
    nome: 'Vitor J Guerra',
    idade: 25,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

//incrementação dinamica
//vitor.altura = 169;

//delentando dinamicamente
//delete vitor.nome;

pessoaObj.nome = 'Renan';
pessoaObj.idade = 30;

pessoaObj.descrever();

pessoaObj.descrever = function() {
    console.log(`Meu nome é ${this.nome}`)
}

pessoaObj.descrever();

const atributo = 'idade';

pessoaObj['nome'] = 'teste';