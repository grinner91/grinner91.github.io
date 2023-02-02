
// ///////////lab question2

// /*
// 2. Write a Node.js program that uses readline to keep on asking the user for a number until they enter “stop”. The program should then output the sum of all the numbers that the user has entered.

// */

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let sum = 0;
  function getNumber() {
      readline.question(
          "next number?\n",
      (x) => {
          if(x == 'stop') {
              readline.write(`sum of numbers: ${sum}\n`);
              readline.close();
              return;
          } 
          else if(!isNaN(x)) {
            sum += parseInt(x);
          }
          //recursive call to get number 
          getNumber();
      });
  }

  getNumber();