/*
1. global scope 
2. lexical scope / function scope 

*/

// function a() {
//     var x; //hoisted to top of function scope if necessary
// }

// function b() {

//     var x = 20; //hoisted to top of function scope if necessary
//     a();
// }

// var x = 30; // hoiting: declaration of x move to top of GLOBAL scope, 
//             //NOT assignment = 30
// b();
// console.log(x)

///////////////////////////////////

// console.log(number)
// // ReferenceError: Cannot access 'number' before initialization

// //let number = 10
// //ReferenceError: number is not defined

// console.log(number)
///////////////////////
// let w = 20;
// function a(w) {
//     function b(y) {
//         console.log(w+y)
//     }
// }

// a(50)(5);
// //output: 55

/////////////////////
// function a(x) {
//     return function b(y) {
//         console.log(x*y);
//     }
// }

// function m2(x) {
//     return x *2
// }

// function m3(x) {
//     return x * 3;
// }

// let mul = a(2);
// mul(3);
////////////////////////

// const x = 1;
//   function f() {
//       let y = 2;
//       const sum = function() {
//           const z = 3;
//           console.log(x + y + z);
//       }
//      y = 10;
//       return sum;
//   } //end of f
//   const g = f();
//   g();
//   //13

//Common closure bug with fix
// var funcs = [];
// for (var i = 0; i < 5; i++) {
// funcs[i] = function() { 
//                     return i;
//             }; 
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());
// console.log("")
// console.log("")

// //• Closures that bind a loop variable often have this bug.
// //Why do all of the functions return 5?
// /* return a function with no parameters that has an ‘embedded parameter’ */
// var helper = function(n) {
//      return function() {return n;}
// }

// var funcs1 = [];
// for (var i = 0; i < 5; i++) {
//         funcs1[i] = helper(i); 
// }

// console.log(funcs1[0]()); 
// console.log(funcs1[1]()); 
// console.log(funcs1[2]()); 
// console.log(funcs1[3]()); 
// console.log(funcs1[4]());
// console.log("")
// console.log("")
// //////////////////
// ////ES6 solution: let vs var

// const funcs3 = [];
// for (let i = 0; i < 5; i++) {
//         funcs3[i] = function() { return i;};
//      }
// console.log(funcs3[0]()); 
// console.log(funcs3[1]()); 
// console.log(funcs3[2]()); 
// console.log(funcs3[3]()); 
// console.log(funcs3[4]());
// console.log("")
// console.log("")

///////////////////////////

// console.log(this);
// function foo() { 
//     console.log('this in foo() called global window: ',this); 
// } 

// const bob = {
//     log: function() { 
//         console.log('this in bob: ',this);
//         } 
// };


// console.log('this: window object. ',this); // this generally is window object 
// foo(); //foo() is called by global window object 
// bob.log();//log() is called by the object, bob
/////////////////////////////////////////////


var me = {
    first: 'Tina',
    last: 'Xing', 
    getFullName: function() {
    return this.first + ' ' + this.last; }
    };


    var you = { 
    first: 'Rujuan', 
    last: 'Xing'
    };

console.log(me.getFullName.apply(you)); 
console.log(me.getFullName.call(you));
// Rujuan Xing 
//would it work with call? How about bind?




