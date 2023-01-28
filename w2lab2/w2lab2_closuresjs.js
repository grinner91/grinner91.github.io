// var add = (
//     function(){
//         var counter = 0;
//         return function() {
//             return counter+1;
//         }
//     }
// )();


// //IIFE - Immediately Invoke Functional Expressions

// console.log(add());
// console.log(add());

/****************************************/
//W2D3 Homework: 
//Q1:
//Answer 1: 
var adder = (
    function(){
        let counter = 0;
        return  {
            'add': function() { return counter+=1;}, 
            'reset': function() { counter = 0; }
        }
    }
)();


console.log(adder.add());
console.log(adder.add());
console.log(adder.reset());
console.log(adder.add());
console.log(adder.reset());
console.log(adder.add());

/*
Q2:
In the definition of the add() function in the code for the question 1, identify the “free” variable.
 Also write down a definition of what “free” variables are.
*/

/*
//Answer2: 
   i) In Adder function free variable is "counter"
   ii) free variable is a variable which is not defined in the function parameters or locally, 
   but defined in outer scope of the function iteself.
*/

/****************************************/

/*
Q3:
The add() function in question 1 always adds 1 to the counter each time it is called. 
Write a make_adder(inc) function whose return value is an add function with increment value of inc instead of 1. 
In other words your function should be able to do the following:
  
Answer3:
*/

function make_adder(inc) {
    let counter = 0;
    //let increment = inc;
    return function() {
        return counter += inc;
    }
}

console.log("");
const add5 = make_adder(5);
console.log("make_adder(5): ",add5());
console.log("make_adder(5): ",add5());
console.log("make_adder(5): ",add5());
console.log("");

const add7 = make_adder(7);
console.log("make_adder(7): ",add7());
console.log("make_adder(7): ",add7());
console.log("make_adder(7): ",add7());
console.log("");
/****************************************/


/*
Q4:
 Suppose you are given a file of JavaScript code containing a list of many function and variable declarations. 
 All of these function and variable names will be added to the Global JavaScript namespace. 
 What simple modification to the JavaScript file can remove all the names from the Global namespace?

 Answer4: 
 -> using revealing module pattern 
 -> using IIFE module pattern ( Immediately Invoke Function Expression). 
 Enclose code block within anonymous function expression as follows:

 (function(params){
    //code - statements
 })(params);


 -> using Block scope in ES6, enclose whole codes whithin brackets as follows:
 { 
     ///...block scope... 
};
 
*/

/*
Q5: 

5. Using the Revealing Module Pattern, write a JavaScript definition of a Module that creates an Employee Object with the following fields and methods:
Private field: name 
Private field: age 
Private field: salary

Private method: getName() 
Private method: getAge()
Private method: getSalary()

Public method: setName()
Public method: setAge()
Public method: setSalary()
Public method: increaseSalary(percentage) // uses private getSalary() 
Public method: incrementAge() // uses private getAge()

*/

const employee = (function(){
    //private name, age, salary 
    let _name = "";
    let _age = 0;
    let _salary = 0.0;
    //private getName 
    const getName = function() { return _name; }
    const setName = function(name) { _name = name; }
    const getAge = function() {return _age; }
    const setAge = function(age) { _age = age; }
    const getSalary = function() {return _salary; }
    const setSalary = function(salary) {_salary = salary; }
    
    return {
        getSalary: getSalary,
        getAge: getAge,
        getName: getName,

        setName: setName,
        setAge: setAge,
        setSalary: setSalary,

        increaseSalary: function (percentage) { 
            let currentSal = getSalary();
            currentSal = currentSal + currentSal * (percentage / 100);
            setSalary(currentSal);
         },

        incrementAge: function(age) {
            let currentAage = getAge();
            currentAage += age;
            setAge(currentAage);
        }
    };
})();

employee.setName('zaman');
employee.setAge(40);
employee.setSalary(10000);
employee.increaseSalary(10);
employee.incrementAge(1);

console.log('_age:',employee._age); //undefined

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());

///////////////////////////////////////////
console.log('used module extension feature: ')
employee._address = "";

employee.getAddress = function () {
    return this._address;
}

employee.setAddress = function (address) {
     this._address = address;
}

employee.setAddress("MIU, 1000 N 4th St, MR #635");
console.log('address: ', employee.getAddress());
