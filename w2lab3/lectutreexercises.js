// // // //Object literal 
// // // let x = {
// // //     x: "a",
// // //     y: "A"

// // // }


// // // x.y = "b";
// // // x.z = "c"; //created property "z"

// // //var name = "zaman";
// // let name = "zaman"

// // let x = {
// //     name: "obj x",
// //     fun: function() {
// //         return function() {
// //             return this.name;
// //         }
// //     },
// //     printInfo: function() {
// //         console.log('printInfo: ', name); //output: printInfo:  zaman
// //         console.log('printInfo: ', this.name); //printInfo:  obj x
// //     }
// // }

// // console.log(x.fun()) //[Function (anonymous)]
// // console.log(x.fun()()) //zaman
// // console.log(x.printInfo())
// // ////////////

// // //Arrow functions: this only refers global window object 
// // //does not matter how many nested functions
// // //Nested funciton: always belong to global window object
// // //nested function this refers global window object

// // let y = {
// //     name: "obj y",
// //     fun: () => {
// //         return function() {
// //             return this.name;
// //         }
// //     }
// // }

// // console.log(y.fun()) //[Function (anonymous)]
// // console.log(y.fun()()) //zaman


// // //////////////////////////////////
// // ///obj.bind ()
// // //obj.call()
// // //obj.app()

// // /*


// // Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

// // Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function. This way you can maintain context in async callbacks and events.

// // */


// // //module pattern 
// // //IIFE - 
// // (function(m,n) {
// //     console.log("m+n:"+(m+n));
// //     }
// // )(2, 3);

// // //var foo=1;
// // function bar() {
// //     if(!foo) {
// //         var foo = 100;
// //     }
// //     //alert(foo); //1, since foo in if(!foo) is not executed so foo is not reassigned.
// //     console.log(foo)
// // }
// // bar();


// // function longestNoSpace(...strs) {
// //     return strs.filter(str => !str.includes(" "))
// //     .map(str => str.length)
// //     .reduce((mx, len) => len > mx ? len : mx, 0);
// // }

// // console.log(longestNoSpace());
// // console.log(longestNoSpace("hello", "a test"));
// // console.log(longestNoSpace("hello", "a test"));
// // console.log(longestNoSpace("heo", "a test" , "zadsfasdasd"));
// //console.log(longestNoSpace("this is","a test"));

// // ///......longestNoSpace.apply.call

// // function showUserAlert() {
// //     alert("10 minutes have passed");
// // }
    
// //     let intervalId = setInterval(showUserAlert, 1000);

// //     /////////
//     function shortest(s1, s2, s3) {
//         return [s1, s2, s3].reduce((acc, str) => str.length < acc.length ? str : acc );
//         }



//         console.log(shortest("hello", "a", "zasdfd"))
//         console.log(shortest("hello", "zq", "bye"))
//         console.log(shortest("hello", "z","34","sfs"))

// var x = 10; function main() {
//     console.log("x1 is:" + x); x = 20;
//     console.log("x2 is:" + x); if (x > 0) {
//     var x = 30;
//     console.log("x3 is:" + x); }
//     console.log("x4 is:" + x); var x = 40;
//     var f = function(x) {
//     console.log("x5 is:" + x); };
//     f(50);
//     console.log("x6 is:" + x); }
//     main();
//     console.log("x7 is:" + x);
