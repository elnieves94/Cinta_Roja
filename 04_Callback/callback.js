function mensajeSaludo (callback){
    let nombre = 'Daniel'
    let saludin = 'Hola! ' + nombre;
    callback(saludin)
}
function mensajeDos (saludin){
    console.log(saludin + '... Cómo estás?');
}

mensajeSaludo(mensajeDos);


// de minutos a horas

let minutos = [120, 80, 200, 100];
let horas = minutos.map(function(x){
    return x/60;
})

// for (i=0; i<horas.length; i++){
//     console.log(horas[i]);
// }

function min (callback){
    // console.log(horas);
    callback(horas)
}

function hrs (horas){
    for (i=0; i<horas.length; i++){
        // console.log(horas[i]);
        if (horas[i] >= 2){
            console.log(horas[i] + ' es mayor a dos horas');
        }else {
            console.log(horas[i] + ' es menor a dos horas');;
        }
    }
}

min(hrs);