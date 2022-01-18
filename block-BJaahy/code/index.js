class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`)
    }
    calcArea() {
        let _area = this.width * this.height;
        return _area;
    }
    get area() {
         return this.width * this.height;
    }
    set area(val) {
        this.width = Math.sqrt(val);
        this.height = this.width;
    }
    static isEqual(sqr1, sqr2) {
        return sqr1.calcArea() == sqr2.calcArea()
    }
}


let square1 = new Square(5);
let square2 = new Square(4);

console.log(`Area of square1 = ${square1.area}`);
console.log(`Area of square1 = ${square2.area}`);
console.log(Square.isEqual(square1,square2));



class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`);
        }
        let arr = fullName.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
    nameContains(text) {
        return this.fullName.includes(text)
    }
}

let user1 = new User('Arya','Stark')
let user2 = new User('Jon','Snow')

console.log(user1);
console.log(user2);
user1.fullName = 'Sansa Stark';
user2.fullName = 'xyz';
console.log(user1.fullName);
console.log(user1.nameContains('rk'));


