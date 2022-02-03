class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log(`${this.name} is eating.`)
    }
    sleep() {
        console.log(`${this.name} is sleeping.`)
    }
    walk() {
        console.log(`${this.name} is walking.`)
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender)
        this.sportsName = sportsName
    }
    play() {
        console.log(`${this.name} is a Player`)
    }
}

class Teacher extends Person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender)
        this.instituteName = instituteName
    }
    teach() {
        console.log(`${this.name} is a Teacher`)
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender)
        this.kind = kind
    }
    createArt() {
        console.log(`${this.name} is a Artist`)
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender,sportsName)
        this.teamName = teamName
    }
    playCricket() {
        console.log(`${this.name} is a Cricketer`)
    }
}
