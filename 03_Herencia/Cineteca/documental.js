const { Largometraje } = require('./largometraje');

class Documental extends Largometraje{
    constructor(nombre, planeta){
        super(nombre);
        this.documental = 'Cosmos';
        this.narrador = 'Neil Degrasse Tyson'
        this.planeta = planeta;
    }
    reproducir(){
        return `Se está reproduciendo ${this.documental}, el creador es ${this.narrador} y estás viendo el planeta ${this.planeta}... Que lo disfrutes!`
    }
};

module.exports = {Documental};