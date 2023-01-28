/* Lab Part1: Answers */
/*

Prototypal Inheritance Exercises:
	Working with prototype
		true
		null
		undefined
	Searching algorithm
		3
		1
		undefined
	
	Where dies it write?
		rabbit
	
    Why are both hamsters full?
    
1. The method speedy.eat is found in the prototype (=hamster), then executed with this=speedy (the object before the dot).

2. Then this.stomach.push() needs to find stomach property and call push on it. It looks for stomach in this (=speedy), but nothing found.

3. Then it follows the prototype chain and finds stomach in hamster.

4. Then it calls push on it, adding the food into the stomach of the prototype.

//////////////////////////

F.prototype:
	Changing “prototype” 
		true
		false
		true
		undefined
	Creating an object with the same constructor
		function User(name) {
			this.name = name;
		}

		let user = new User('John');
		let user2 = new user.constructor('Pete');

		alert( user2.name );

////////////

Native Prototypes: 
	Add method f.defer(ms) to functions
		Function.prototype.defer = function(ms) {
		setTimeout(this, ms);
		};

		function f() {
		  alert("Hello!");
		}

f.defer(1000); 
	Add the decorating “defer()” to functions  
		Function.prototype.defer = function(ms) {
			let f = this;
			return function(...args) {
			setTimeout(() => f.apply(this, args), ms);
		}
	};

	// check it
	function f(a, b) {
	  alert( a + b );
	}

	f.defer(1000)(1, 2);

////////////////////////    
Prototype Methods:
	The difference between calls
		 only the first call shows Rabbit, other ones show undefined

*/


