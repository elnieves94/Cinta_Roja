const pokemon = require("request")


function getPokemon(error, response, body){
    const str = JSON.parse(body);
    const nombre = str.name;
    const altura = str.height;
    const peso = str.weight;
    const tipo1 = str.types[0].type.name;
    // console.log(tipos.tipo1);
    console.log(`Es ${nombre}, mide ${altura} cm y pesa ${peso} kg. Su tipo es ${tipo1}.`);
}



for (i=1; i<=151; i++){
    pokemon('https://pokeapi.co/api/v2/pokemon/' + i, getPokemon);
}
