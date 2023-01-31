
/* Lab Part2:  JS implemeantion */

/*

Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"

*/

String.prototype.filter = function(notStr) {
    return this.split(' ').filter(x => x != notStr).join(' ');
}

console.log("This house is not nice!".filter('not'));


/*

Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]


*/

Array.prototype.bubbleSort = function() {
    for(let i = 0; i < this.length; i++) {
        for(let j = 1; j < this.length - i; j++) {
            if(this[j-1] > this[j] ) {
                const temp = this[j];
                this[j] = this[j-1];
                this[j-1] = temp;
            }
        }
    }
    return this;
}

console.log([6,4,0, 3,-2,1].bubbleSort());


////////////////////////exercise 3

function Person() {

 }

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
};
  
function Teacher() {

 }
 
Teacher.prototype = new Person();
  
Teacher.prototype.teach = function (subject) {
    return this.name + " is now teaching " + subject;
};

let teacher = new Teacher();
teacher.initialize("Zaman", 40);
console.log(teacher.teach("WAP"));

