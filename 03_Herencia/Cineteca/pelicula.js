const { Largometraje } = require('./largometraje');

class Pelicula extends Largometraje{
    constructor(nombre, pelicula, episodio){
        super(nombre);
        this.pelicula = pelicula;
        this.episodio = episodio;
    }
    repro(){
        return `se está reproduciendo ${this.pelicula}, episodio ${this.episodio}`
    }
};

const peli = new Pelicula ('pelicula', 'Star Wars', '3');

module.exports = {Pelicula, peli};