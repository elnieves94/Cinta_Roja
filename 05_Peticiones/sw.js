const request = require ('request');

function getPlanet(error, response, body){
    const str = JSON.parse(body);
    const planeta = str.name;
    console.log(planeta);
    const residentes = str.residents;
    for(i=0; i<residentes.length; i++){
        request (residentes[i], getResidents)
        function getResidents (error, response, body){
            const res = JSON.parse(body)
            const nombre = res.name
            console.log(nombre);
        }
    }
}

request('http://swapi.dev/api/planets/1/', getPlanet)