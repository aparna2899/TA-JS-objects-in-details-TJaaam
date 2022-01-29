// Pseudoclassical Pattern

createAnimal.prototype = {
     eat() {
        console.log(`I live in ${this.location} and I can eat`)
    },
     changeLocation(newLocation) {
        this.location = newLocation;
     },
     summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    },
};

function createAnimal(location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}


createDog.prototype = {
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

Object.setPrototypeOf(createDog.prototype,createAnimal.prototype);

function createDog(location, numberOfLegs, name, color) {
    createAnimal.apply(this,[location, numberOfLegs])
    this.name = name;
    this.color = color;
}


createCat.prototype = {
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

Object.setPrototypeOf(createCat.prototype,createAnimal.prototype);

function createCat(location, numberOfLegs, name, colorOfEyes) {
    createAnimal.apply(this,[location, numberOfLegs])
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}


// Class Pattern
 

class Animal {
    constructor(location, numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    }
     changeLocation(newLocation) {
        this.location = newLocation;
     }
     summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}


class Dog extends Animal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs)
        this.name = name;
        this.color = color;
    }
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName) {
        this.name = newName;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark 🐶`
    }
}


class Cat extends Animal{
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 🐱`)
    }
    changeName(newName) {
        this.name = newName;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    }
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow 🐱`
    }
}