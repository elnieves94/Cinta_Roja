const myPenguin = {
    name: 'Skipper',
    origin: 'Madagascar',
    purpose: 'escapar del zoológico e irme a la Antártida!',

    getName(){
        return this.name;
    },
    getOrigin(){
        return this.origin;
    },
    getPurpose(){
        return this.purpose;
    },
}

myPenguin.puedeVolar = false;

myPenguin.getGraznar = () =>{
    return 'kaww kaww!!'
}

console.log(`Bienvenid@! Soy un pingüino y mi nombre es ${myPenguin.getName()}!`);
console.log(`Puedo volar? ${myPenguin.puedeVolar}`);
console.log(`Y hago así, mira: ${myPenguin.getGraznar()}`);

myPenguin.saludar = `Bienvenid@! Soy un pingüino y mi nombre es ${myPenguin.getName()}!`
myPenguin.getSaludar = () =>{
    return myPenguin.saludar
}

console.log(myPenguin.getSaludar());

myPenguin.name = 'Señor Pingu'
myPenguin.getSaludar = () =>{
    return `Bienvenid@! Soy un pingüino y mi nombre es ${myPenguin.name}!`
}

console.log(myPenguin.getSaludar());

myPenguin.getPuedeVolar = () =>{
    if (myPenguin.puedeVolar === true){
        return 'Puedo volar!! :)'
    } else if (myPenguin.puedeVolar ===false){
        return 'No puedo volar! :('
    }
}
console.log(myPenguin.getPuedeVolar());

myPenguin.puedeVolar = true;
console.log(myPenguin.getPuedeVolar());