/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilômetro rodade.
Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dê o valor gasto
em reais para realizar este percurso.
*/

class Carros{
    marca;
    cor;
    gastoCombstvel;

    constructor(marca, cor, gastoMedioCombstvel){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombstvel = gastoMedioCombstvel;
    }

    calcularGastoViagem(quilometros, precoCombustivel){
        var gastoPorKm = precoCombustivel / this.gastoCombstvel
        var gastoTotal = gastoPorKm * quilometros

        console.log(`O seu ${this.marca} ${this.cor}, roda ${this.gastoCombstvel}km por litro. A viagem tem distancia de ${quilometros}km. O seu gasto na viagem será de ${gastoTotal.toFixed(2)}R$. `)
    }
}

const celta = new Carros('chevrolet', 'azul', 10)

celta.calcularGastoViagem(70, 5)

