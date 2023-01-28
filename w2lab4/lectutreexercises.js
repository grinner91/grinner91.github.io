// let Animal = {
//     name: "mamal",
//     age: 1
// }

// console.log(Animal)

// let Cat = {
//     wisker : true,
//     __proto__: Animal
// }

// Cat.__proto__ = Animal;

// console.log(Cat)
// console.log(Cat.__proto__.name) //mamal --- super name 



//  function Person() {}
//             Person.prototype.initialize = function (name, age) {
//                 this.name = name;
//                 this.age = age;
//             };
//             Person.prototype.describe = function () {
//                 return this.name + ", " + this.age + " years old.";
//             };
            
//             function Teacher() {}

//             //Teacher.prototype = new Person();
//             Teacher.prototype =  Person.prototype;
            
//             Teacher.prototype.teach = function (subject) {
//                 return this.name + " is now teaching " + subject;
//             };

//             let teacher = new Teacher();
//             teacher.initialize("John", 30);
//             console.log(teacher.teach("JavaScript"));


            ////////////////


            
// function Person(name) {
// 	this.name = name;
//  };

//  Person.prototype.speak = function(){
//    return this.name;
//  }

//  function Dave(name) {

//  }

//  Dave.prototype.__proto__ = Person.prototype;

//  let dave = new Dave("Dave Smith");
//  console.log('dave: ', dave.speak())

//  let charlie = new Person("Charlez Brown");
 
//  charlie.eat = function() {
//    return "eating....";
//  }

//  console.log(charlie.speak())

//  function Person(name) {
// 	this.name = name;
//  };

//  Person.prototype.speak = function(){
//    return this.name;
//  }
 
//  let dave = new Person("Dave Smith");
 
//  let charlie = new Person("Charlez Brown");
 
//  charlie.eat = function() {
//    return "eating....";
//  }
// console.log(dave.speak())
//  console.log(charlie.speak())
//  console.log(charlie.eat())
 

//////////////////

function Person(name) {
	this.name = name;
 };

 Person.prototype.speak = function(){
   return this.name;
 }
 
 function Dave(name) {
     this.name = name;
 }

 Dave.prototype.__proto__ = Person.prototype;

 function Charlez(name) {
    this.name = name;
}
Charlez.prototype.__proto__ = Person.prototype;

Charlez.prototype.eat = function() {
    return this.name + " is eating....";
}

let dave = new Dave("Dave Smith")
let charlie = new Charlez("Charlez Brown");
 
 console.log(dave.speak())
 console.log(charlie.speak())
 console.log(charlie.eat())

//  console.log(dave);
//  console.log(charlie);
 

