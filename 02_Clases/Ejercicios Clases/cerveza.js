const {Bebida} = require('./bebidas')

class Cerveza extends Bebida{
    constructor (porcentajeAlcohol, cantidad, nombre){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
        this.nombre = nombre;
    }
    getPorcentajeAlcohol(){
        if(this.porcentajeAlcohol >= 10){
            return `La cerveza ${this.nombre} tiene ${this.porcentajeAlcohol} % de alcohol, vas a empedar rápido!`
        }else{
            return `La cerveza ${this.nombre} tiene ${this.porcentajeAlcohol} % de alcohol, vas a empedar tranqui`

        }
    }
}

const heineken = new Cerveza (7, 355, 'Heineken');
console.log(heineken);
console.log(heineken.getPorcentajeAlcohol());