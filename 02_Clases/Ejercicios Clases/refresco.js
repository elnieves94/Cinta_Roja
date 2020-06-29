const {Bebida} = require('./bebidas')

class Refresco extends Bebida{
    constructor (azucar, cantidad, nombre){
        super(cantidad);
        this.azucar = azucar;
        this.nombre = nombre;
    }
    getAzucar(){
        if (this.azucar >= 33){
            return `${this.nombre} tiene altos niveles de azucar, cuidado!`
        }else{
            return `${this.nombre} están bien sus niveles de azucar :)`
        }
    }
}

const coca = new Refresco (35, 700, 'Coca Cola')
console.log(coca);
console.log(coca.getAzucar());