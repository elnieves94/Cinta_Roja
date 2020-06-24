// objeto literal
const persona1 ={
    name: 'Daniel',
    age: 25,
    isHuman: true,

    // voy a tener una función y dentro de la función llamaré a propiedades de mi objeto
    getAge(){
        return this.age;
        // se pone this, porque no vas a llamar a persona1 dentro de mismo persona1, es confuso
    },
    // voy a cambiar el valor de mi propiedad age:
    setAge(newAge){
        this.age = newAge;
    }
}

// declaro la nueva edad y lo va a cambiar en mi console.log
persona1.setAge(26);

// creo el getAge() para poder devolver el valor. personalizar los valores que voy a devolver. paradigma orientado a objetos

console.log(`Hola! Soy ${persona1.name} y tengo ${persona1.getAge()}`);