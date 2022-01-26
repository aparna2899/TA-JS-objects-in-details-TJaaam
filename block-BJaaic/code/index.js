let animalMethods = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation) {
        this.location = newLocation;
    },
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}

function animal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

let dogMethods = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColor(newColor) {
        this.color = newColor;
    },
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark 🐶`
    }
}

Object.setPrototypeOf(dogMethods,animalMethods);

function dog(location, numberOfLegs, name, color) {
    let dog = Object.create(dogMethods);
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;
    dog.name = name;
    dog.color = color;
    return dog;
}

let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 🐱`)
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow 🐱`
    }
}

Object.setPrototypeOf(catMethods,animalMethods);

function cat(location, numberOfLegs, name, colorOfEyes) {
    let cat = Object.create(catMethods);
    cat.location = location;
    cat.numberOfLegs = numberOfLegs;
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}
