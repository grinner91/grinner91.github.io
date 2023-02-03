class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    printInf() {
        console.log(this.name + ", " + this.age);
    }

    get name() { return this._name; }
    set name(val) { this._name = val; }

    get age() { return this._age; }
    set age(val) { this._age = val;}
}

let p = new Person("Zaman",40);

p.printInf();

console.log('typeof person: ', Person)

// ///////////////////////////////////

// class User {
//     constructor(name = "Anonymous") {
//         this.name = name;
//       }
//     sayHi() {
//     console.log(`Hello, ${this.name}!`);
//     } }

//    let fred = new User(); 
//    console.log('fred: ',fred); 
//    console.log('fred.__proto__: ', fred.__proto__); 
//    console.log('User.prototype: ',User.prototype); 
//    fred.sayHi();
//    let bob = new User("Bob");
//     console.log('bob: ',bob);
//     bob.sayHi();

//

class Employee extends Person {
    constructor(salary) {
        super("Tom", 0)
        this.salary = salary;
    }
   
}



class Duck {
    constructor(flying = false, quacking = false, xPos = 0, yPos = 0) {
    this.flying = flying;
    this.quacking = quacking;
    this.xPos = xPos;
    this.yPos = yPos;
}
takeOff() {
    this.flying = true;
}
land() {
    this.flying = false;
}
startQuacking() {
    this.quacking = true;
}
stopQuacking() {
    this.quacking = false;
}
moveTo(x, y) {
    this.xPos = x;
    this.yPos = y;
}
status(){
    console.log(`Duck is swimming to ${x}, ${y}`);
}

}

module.exports = Duck;