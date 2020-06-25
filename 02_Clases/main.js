const carro = {
    color: 'rojo',
    velocidad: '120km/h',
    ruedas: 4,
    motor: 'V6',
    arranca(){
        return 'de 0 a 100 en 5 segundos'
    },
    frena(){
        return 'de 120 a 0 en 7 segundos'
    },
    dobla(){
        return 'doblaste sin problema'
    }
}

// para hacer un carro igual al objeto anterior
// existe la palabra reservada "class"
// clase va a ser la plantilla para hacer objetos

// debe iniciar con mayúscula
class Carro {
    // el métdo constructor nos va a permitir crear o iniciar las variables (las propiedades del carro como color, ruedas, velocidad, etc)
    constructor (dueno, color, velocidad, ruedas, motor, tipoRueda){
        // inicializamos variables, pero se pasan como parámetros al constructor
        // se van a crear con this.propiedad y se va a = a lo que voy a recibir como parametro
        this.dueno = dueno;
        this.color = color;
        this. velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
        this.tipoRueda = tipoRueda;
    };
    // los métodos se pueden agregar a las clases, todos los hijos tendrán esos mismos métodos, pero se van a agregar afuera del constructor
    arranca(){
        if (this.dueno === 'Daniel'){
            return `el carro de ${this.dueno} hace de 0 a 100 en solo 5 segundos`
        } else {
            return `el carro de ${this.dueno} hace 0 a 100 en 10 segundos`
        }
    };
    frena(){
        return 'de 120 a 0 en 7 segundos'
    };
    dobla(){
        return 'doblaste sin problema'
    };
}

class Rueda {
    constructor (rin, rodada){
        this.rin = rin;
        this.rodada = rodada
    }
}

const tipoRueda = new Rueda ('alumninio', 32)

// como class es solo una plantilla, voy crear un objeto con esa plantilla
// lo tengo que guardar en una variable SIEMPRE
const carro1 = new Carro ('César', 'verde', 200, 4, 'V8');
const carro2 = new Carro ('verde', 200, 4, 'V8', tipoRueda)

carro2.dueno = 'Daniel';
// console.log(carro1);
// console.log(carro);
// console.log(carro2);

// acceder a las propiedades
// console.log(carro1.velocidad);
// console.log(carro2.tipoRueda.rodada);
console.log(carro1.arranca());
console.log(carro2.arranca());

carro1.dueno = 'Daniel'

console.log(carro1.arranca());  