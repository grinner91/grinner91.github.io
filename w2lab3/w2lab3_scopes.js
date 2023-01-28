
/*
Q1. What is the output is of the following JavaScript (without running it)

*/
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    console.log(x); // udefined, declared but not initialized yet 
    console.log(a); // 8, in parameters a=8 is passed at line 17  
    var f = function(a, b, c) {
        b  = a;
        console.log(b); //8, b is assigned value of a in f() its local scope at line 8
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b); //9, in parameters b=9 is passed at line 17 and b is 9 its c() local scope  
    var x = 10;
}

c(8, 9 ,10);
console.log(b); //10, since b is assinged  10 at line 3 in global scope 
console.log(x); //1, since x is assigned 1 at line 1 in global scope 
/*
output: 
undefined  // udefined,  because declared but not initialized yet 
8          // 8, because in parameters a=8 is passed at line 17 
8          //8, because b is assigned value of a in f() its local scope at line 8
9          //9, because in parameters b=9 is passed at line 17 and b is 9 its c() local scope
10         //10, since b is assinged  10 at line 3 in global scope 
1          //1, since x is assigned 1 at line 1 in global scope 
*/

/* 
Q2. Define Global Scope and Local Scope in JavaScript

Answer2:
Scope controls variables, objects, functions accessivility or visibility from other sections of codes.

Global scope: variables are declared out side of functions are global scope. 
Global variables can be accessed from any function or any local scope. 

Local scope: variables are declared within a fuction are local scope or function scope. 
Variables of local scope are only accessed or visible or recognized within that function. 
No visibility from outside of that function or block.
Variables of local scope are created when fuction started and deleted when function exited. 
function arguments are same as local variables. 
*/

/*...............................*/
/*
Q3: consider the following JS code:
*/

//scope A
function xFunc() {
    //scope B
    function yFunc() {
        //scope C
    }
}
/*
//a. Do statements in Scope A have access to variables defined in Scope B and C? 
//Ans: No. global scope A has NO access to local scope defined in B and C.
    
//b. Do statements in Scope B have access to variables defined in Scope A?
Ans: yes. local scope B has access to global scope A

// c. Do statements in Scope B have access to variables defined in Scope C? 
Ans: No. Scope B is outer scope, so can not access nested local scope  Scope C

//d. Do statements in Scope C have access to variables defined in Scope A?
Ans: Yes. Scope C has access to its outer scope and global scope A.

//e. Do statements in Scope C have access to variables defined in Scope B?
Ans: Yes. Scope C hass acces to its outer scope as closure and free variables. 

*/
/*................................ */

/*
Q4: What is the output is of the following JavaScript (without running it)
*/

var x = 9;
function myFunction() {
    return x * x;
}
console.log(myFunction()); //81 since x is declared and initialized 9 
x = 5;
console.log(myFunction()); //25, since x is reassigned as 5

/*
output: 
81     //81 since x is declared and initialized 9 in global scope at line 1
25     //25, since x is reassigned as 5 in gloabl scope 
*/

/*
Q5: What is the output of the following alert (without running it)
*/

var foo = 1;
function bar() {
    //let a = (!undefined) ? 'a' : 'b';
    console.log('a : ', a);

    if(!foo) {
        //console.log('foo in if {} : ', foo)
        var foo = 100;
    }
    //alert(foo); //100, since foo is hoisted whithin bar() local scope, and assigned foo = 100
    console.log('foo: ',foo);
}
bar();

//output: 
//100  //100, since foo is hoisted whithin bar() local scope, if !foo means it exsisted and == assigned foo = 100
