// const {starwars6, cosmo} = require('./cine');
const {StarWars, Cosmico} = require('./cine');

const cineonline = new StarWars('pelicula', 'Star Wars', 'Episodio 3', 'Cinemex')
console.log(cineonline.reproducirPeli());

const cineonline2 = new Cosmico('documental', 'Saturno', 'Cineteca Nacional')
console.log(cineonline2.reproducir());