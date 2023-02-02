const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion1() {
  readline.question("What is your name?\n", (answer) => {
    //console.log('Welcome ${name}');
    readline.write(`Welcom  ${answer}\n\n`);
    askQuestion2();
  });
}

function askQuestion2() {
  readline.question("What is your age?\n", (age) => {
    if (age < 16) {
      readline.write("You’re not allowed to drive in Iowa");
    } else {
      readline.write("You’re allowed to get a drivers license in Iowa");
    }
  });
}

askQuestion1();




// let command = 'start';
// let sum = 0;

// while(command != 'stop') {
//     readline.question('next number', num => {
//         if(num == 'stop') {
//             command =  num;
//         } else {
//             sum += parseInt(num);
//         }
//     });
// }

// //console.log('sum of the numbers: ', sum);

// readline.close();

// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// function ask(question) {
//     readline.question('question?', (answer) => {
//         readline.write(`The answer received:  ${answer}\n`)

//         ask('question?')
//     })
// }

// ask("What is your name: ")
