const { Largometraje } = require('./largometraje');

class Pelicula extends Largometraje{
    constructor(nombre, pelicula, episodio){
        super(nombre);
        this.pelicula = pelicula;
        this.episodio = episodio;
    }
    repro(){
        return `Se está reproduciendo ${this.pelicula}, episodio ${this.episodio}... Que la disfrutes!`
    }
};


module.exports = {Pelicula};