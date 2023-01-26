// // //Object literal 
// // let x = {
// //     x: "a",
// //     y: "A"

// // }


// // x.y = "b";
// // x.z = "c"; //created property "z"

// //var name = "zaman";
// let name = "zaman"

// let x = {
//     name: "obj x",
//     fun: function() {
//         return function() {
//             return this.name;
//         }
//     },
//     printInfo: function() {
//         console.log('printInfo: ', name); //output: printInfo:  zaman
//         console.log('printInfo: ', this.name); //printInfo:  obj x
//     }
// }

// console.log(x.fun()) //[Function (anonymous)]
// console.log(x.fun()()) //zaman
// console.log(x.printInfo())
// ////////////

// //Arrow functions: this only refers global window object 
// //does not matter how many nested functions
// //Nested funciton: always belong to global window object
// //nested function this refers global window object

// let y = {
//     name: "obj y",
//     fun: () => {
//         return function() {
//             return this.name;
//         }
//     }
// }

// console.log(y.fun()) //[Function (anonymous)]
// console.log(y.fun()()) //zaman


// //////////////////////////////////
// ///obj.bind ()
// //obj.call()
// //obj.app()

// /*


// Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

// Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function. This way you can maintain context in async callbacks and events.

// */


// //module pattern 
// //IIFE - 
// (function(m,n) {
//     console.log("m+n:"+(m+n));
//     }
// )(2, 3);

var foo=1;
function bar() {
    if(!foo) {
        var foo = 100;
    }
    //alert(foo); //1, since foo in if(!foo) is not executed so foo is not reassigned.
    console.log(foo)
}
bar();