const{Pelicula, peli} = require('./pelicula');
const {Documental} = require('./documental');
const {Largometraje} = require('./largometraje')

class StarWars extends Pelicula{
    constructor(nombre, pelicula, episodio, cine){
        super(nombre, pelicula, episodio);
        this.cine = cine;
    }
    reproducirPeli(){
        return this.repro();
    }
}

class Cosmico extends Documental{
    constructor(nombre, planeta, cine){
        super(nombre, planeta);
        this.cine = cine;
    }
    reproducirDocu(){
        return this.reproducir();
    }
}

module.exports = {StarWars, Cosmico}
