/*
Lab tasks:

These are the functions you should write:
1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
9. Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

a) multiply each element by 10; 

b) return array with all elements equal to 3; 

c) return the product of all elements;

​After you finish, make sure all your functions are in ONE JS file .

*/

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  
  /* 
  1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  console.log("Expected output of max(9,88) is 88  " + myFunctionTest(88, max(9, 88)));
  
  /* 
  2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of maxOfThree(33,55,44) is 55  " + myFunctionTest(5, maxOfThree(33, 55, 44)));

  /*
  
  3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

  */

  function isVowel(letter) {
    return ["a","e","i","o","u"].includes(letter.toLowerCase());
  }

  console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, isVowel("e")));
  console.log("Expected output of isVowel('o') is true  " + myFunctionTest(true, isVowel("o")));
  console.log("Expected output of isVowel('b') is false  " + myFunctionTest(false, isVowel("b")));

  /*
  4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
  For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

  */

  function sum(arr) {
    return arr.reduce((acc, i) => (acc + i), 0);
  }

  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
  console.log("Expected output of sum([10,20,30,40]) is 100  " + myFunctionTest(100, sum([10,20,30,40])));

  function multiply(arr) {
    return arr.reduce((acc, i) => acc * i, 1);
  }

  console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
  console.log("Expected output of multiply([10,20,3,4]) is 2400  " + myFunctionTest(2400, multiply([10,20,3,4])));
  
  //console.log(multiply([10,20,3,4]));

  /*
  
  5. Define a function reverse() that computes the reversal of a string. 
  For example, reverse("jag testar") should return the string "ratset gaj".

  */

  function reverse(str) {
    return str.split("").reverse().join("");
  }

  console.log("Expected output of reverse('jag testar') is  'ratset gaj' " + myFunctionTest("ratset gaj", reverse("jag testar")));
  console.log("Expected output of reverse('jag') is  'gaj' " + myFunctionTest("gaj", reverse("jag")));

/*

6. Write a function findLongestWord() that takes an array of words 
and returns the length of the longest one.

*/

function findLongestWord(words) {
    return words.reduce((acc, w) => acc.length < w.length ? w : acc, "");
}

console.log("Expected output of findLongestWord(['a','bb']) is  'bb' " + myFunctionTest("bb", findLongestWord(['a','bb'])));
console.log("Expected output of findLongestWord(['my', 'you', 'me', 'rafsan', 'zaman', 'shai']) is  'rafsan' " + myFunctionTest("rafsan", findLongestWord(['my', 'you', 'me', 'rafsan', 'zaman', 'shai'])));


/* 
7. Write a function filterLongWords() that takes an array of words and an integer i 
and returns the array of words that are longer than i.

*/

function filterLongWords(words, len) {
    return words.filter(w => w.length > len);
}

console.log("Expected output of filterLongWords(['a','bb'], 1) is  'bb' " + myFunctionTest('bb', filterLongWords(['a','bb'], 1).toString()));
console.log("Expected output of filterLongWords(['you', 'me', 'rafsan', 'zaman', 'shai'], 5) is  'rafsan' " + myFunctionTest('rafsan', filterLongWords(['you', 'me', 'rafsan', 'zaman', 'shai'], 5).toString()));

//console.log(filterLongWords(['you', 'me', 'rafsan', 'zaman', 'shai'], 3))