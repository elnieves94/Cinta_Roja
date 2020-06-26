const{Pelicula} = require('./pelicula');
const {Documental} = require('./documental');
const {Largometraje} = require('./largometraje')

class StarWars extends Pelicula{
    constructor(nombre, pelicula, episodio, cine){
        super(nombre, pelicula, episodio);
        this.cine = cine;
    }
    reproducirPeli(){
        return `${this.repro()} Solo en ${this.cine}.`;
    }
}

class Cosmico extends Documental{
    constructor(nombre, planeta, cineteca){
        super(nombre, planeta);
        this.cineteca = cineteca;
    }
    reproducirDocu(){
        return `${this.reproducir()} Solo en ${this.cineteca}.`;
    }
}

module.exports = {StarWars, Cosmico}
