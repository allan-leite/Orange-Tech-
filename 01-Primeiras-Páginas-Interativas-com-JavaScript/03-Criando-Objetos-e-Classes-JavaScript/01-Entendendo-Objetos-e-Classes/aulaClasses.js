/*
Classe é a definição do que deve ser aquele objeto, e instância é uma ocorrência daquele objeto.
*/

class pessoaClass {
    nome;
    idade;
    anoDenascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDenascimento = 2022 - idade;
        //this.nome = 'teste';
        //this.idade = 20;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new pessoaClass('Vitor', 25);
//vitor.nome = 'Vitor J Guerra';
//vitor.idade = 25;

const renan = new pessoaClass('Renan', 30);
//renan.nome = 'Renan J Paula';
//renan.idade = 30;

//console.log(vitor);
//console.log(renan);

vitor.descrever();
renan.descrever();

console.log(vitor)