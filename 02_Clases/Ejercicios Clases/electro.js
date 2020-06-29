class Electrodomestico{
    constructor (precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = 100;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico{
    constructor (precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal(){
        return `el precio final de la lavadora es de $${this.carga * this.consumoEnergetico}`;
    }
}

const lavadora = new Lavadora (300, 'blanco', 200, 150);
console.log(lavadora);
console.log(lavadora.precioFinal());