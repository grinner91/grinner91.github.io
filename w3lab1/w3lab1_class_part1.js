
//   function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();

/*
 
Q1. Rewrite to class

Ans1: I did the following steps to convert a class:

1. added constructor fuction 
2. removed let timer variable
3. added this.timer variable in methods
3. removed function key words from render(), start(), stop()

*/

class Clock {

    constructor({template}) {
        this.template = template;
    }
  
   render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
                  .replace('h', hours)
                  .replace('m', mins)
                  .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(this.render, 1000);
    }

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  clock.stop();

///////////////////////////////////

//////////////////////////////

class ExtendedClock extends Clock {
  constructor(pricision, template) {
    super(template)
    this.pricision = pricision
  }

  start() {
    super.render();
    this.timer = setInterval(() => super.render(), this.pricision);
  }

}

console.log("Extend clock: ");
let exclock = new ExtendedClock(5000, {template: 'h:m:s'});
exclock.start();
//exclock.stop();

/*


Q2: Class Inheritance (https://javascript.info/class-inheritance#tasks)

Q2.1: Error creating an instance
Ans2.1: error was in Rabbit constructor "supper constructor" was not called for parent animal constructor
Called parent's super(name) construcutor to fix it. 

 constructor(name) {
    super(name)
    this.created = Date.now();
  }

Q2.2. Extended clock

Ans2.2:
1. Added a new class ExtendedClock extends Clock 
2. Added a constructor function with params as following: 

class ExtendedClock extends Clock {
  constructor(pricision, template) {
    super(template)
    this.pricision = pricision
  }
} 

3. overrode start memthod to start timer with pricision 

*/

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);



