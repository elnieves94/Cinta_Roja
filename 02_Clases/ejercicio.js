class Persona {
    constructor (nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = 2020 - this.edad;
        this.nombre = this.nombre.toString(0);
        this.anio = this.anio.toLocaleString();
        this.sexo = this.sexo.toString(0);
    };
    imc(){
        return this.peso / (this.altura*this.altura)
    };
    mayorEdad(){
        if(this.edad>=18){
            return 'eres mayor de edad'
        }else{
            return 'eres menor de edad'
        }
    }
    rfc(){
        return `${this.nombre.charAt(0,1)}${this.anio.charAt(2)}${this.sexo.charAt(0,1)}`
    }
}

const daniel = new Persona('Daniel',25, 'masculino', 78, 1.80)
console.log(daniel);
console.log(daniel.rfc());
console.log(daniel.mayorEdad());
console.log(daniel.imc());

class Cuenta{
    constructor (titular, cantidad, estado){
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = estado;
    };
    depositar(a){
        if (this.cantidad + a >= 900 && this.estado === 'activa') {
            return 'no puedes tener más de 900 pesos'
        } else if (this.cantidad + a <= 900 && this.estado === 'activa') {
            return `${this.titular}, depósito realizado con éxito`
        } else if (this.estado === 'inactiva'){
            return 'cuenta inactiva'
        }
    };
    retirar(b){
        if (this.cantidad - b <= 10 && this.estado === 'activa'){
            return 'no puedes tener menos de 10 pesos'
        }else if (this.cantidad - b >= 10 && this.estado === 'activa') {
            return `${this.titular}, retiro realizado con éxito!`
        } else if (this.estado === 'inactiva'){
            return 'cuenta inactiva'
        }
    };
}

const cuenta1 = new Cuenta('Daniel', 800, 'activa')
const cuenta2 = new Cuenta('Chuchito', 500, 'inactiva')
const cuenta3 = new Cuenta('Juanito', 100, 'activa')
const cuenta4 = new Cuenta ('Perenganito', 250, 'inactiva')

console.log(cuenta1.depositar(99));
console.log(cuenta1.depositar(110));
console.log(cuenta2.depositar(200));
console.log(cuenta3.retirar(10));
console.log(cuenta3.retirar(99));
console.log(cuenta4.retirar(100));