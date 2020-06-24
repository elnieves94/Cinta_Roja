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

myPenguin.graznar = "kaww kaww!!"

console.log(`Bienvenid@! Soy un pingüino y mi nombre es ${myPenguin.getName()}!`);
console.log(`Puedo volar? ${myPenguin.puedeVolar}`);
console.log(`Y hago así, mira: ${myPenguin.graznar}`);