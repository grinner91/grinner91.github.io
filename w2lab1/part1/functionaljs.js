/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers

*/

function sum(numbers) {
    return numbers.reduce((acc, x) => acc + x, 0);
}

console.log("Expected sum of numbers[2, 5, 7] is 14, result: " + sum([2,5,7]));

function multiplyNums(numbers) {
    return numbers.reduce((acc, x) => acc * x, 1);
}

console.log("Explected product of numbers[2, 5, 7] is 70, result: " + multiplyNums([2,5,7]))

function reverseStr(str) {
    return [...str].reduce((acc, ch) => ch + acc, '');
}

console.log("Exprected reverse of 'WAP' is 'PAW'. result: " + reverseStr("WAP"))
console.log("Exprected reverse of 'WAP is a fun' is 'nuf a si PAW'. result: " + reverseStr('WAP is a fun'))


/* 7 Write a function filterLongWords() that takes an array of words and an integer i 
and returns the array of words that are longer than i. */

function filterLongWords(words, n) {
    return words.filter(x => x.length > n);
}

console.log("Expected longer 4 lenghts words from ['rafsan', 'zaman', 'shaila', 'wap', 'is', 'fun'] is ['rafsan', 'zaman', 'shaila'], result:" + filterLongWords(['rafsan', 'zaman', 'shaila', 'wap', 'is', 'fun'], 4))


/******************************* */

