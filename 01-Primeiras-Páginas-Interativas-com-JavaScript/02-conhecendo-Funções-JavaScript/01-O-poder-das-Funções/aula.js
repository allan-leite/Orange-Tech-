function teste() {
    console.log('teste');
}

teste();
teste();

function sayMyName(name, lastname) {
    console.log('Your name is:' + name);
    console.log('Your last name is: ' + lastname)
}

sayMyName('Allan', 'Leite');
sayMyName('Jesus', 'Cristo');

function quadrado(valor) {
    return valor * valor; 
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, precentualJuros) {
    const valorDeAcrecimo = (precentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))