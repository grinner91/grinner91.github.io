/*

3. Write a module called my_math.js. Your module should expose the following functions and constant:
add(x, y)
subtract(x, y)
 multiply(x, y)
divide(x, y)
pi // constant set to 3.14

*/

module.exports = { 
    add: function(x, y) {return x + y;},
    subtract: function(x, y) {return x - y;},
    multiply: function(x, y) {return x * y;},
    divide: function(x, y) {return x / y;},
    pi: 3.14
}
