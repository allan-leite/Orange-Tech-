// Teste para saber se o número é par, feito pelo professor da vídeo aula

const numero = 0;

const numeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log('Número invalido')
}else if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}

