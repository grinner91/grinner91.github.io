// let obj = {desc: "testname"}

// function fname(x, y) {
//     console.log(y)
//     console.log(x)
// }

// fname(obj);


// let obj = {desc: "testname"}

// function fname(x) {
//     console.log(x, arguments)

// }

// fname((e,r ) => e *r, 5, 9);

//////////////////
//rest params 
// function fname(x, ...restParams) {
//     console.log(x)
//     console.log('restparams:', restParams)
//     console.log('args:', arguments)
// }

// fname((e,r ) => e *r, 5, 9);


///////////////
//spread operator 
//desrtructuring elements int one 

// function combine(x, y) {
//     console.log([...x, ...y]);
// }

// combine([1,2,3], ["a", "b"])

// let obj1 = {name: 'zaman', mobile: '3453'}
// let obj2 = {name: 'rafsan', mobile: '098766'}
// //tricky 
// let z = {...obj1, ...obj2};

// console.log(z);
/// output: { name: 'rafsan', mobile: '098766' } 
//2nd objects keys, override 1st object keys when spread applied
//index 0: obj1.name;, 1 = obj1.mobile
//again: 0: obj2.name, 1 = obj2.mobile 
//so, last one overrides earlies ones 

///////////////
//// for...in : to access properties/keys of the object 


////for...of: values in arrays/objs



//user of rest and spread 
// function restSpread(...restParams) { //restParams operator
//     let z = [];
//     restParams.forEach(x => { 
//         z.push(...x)
//         console.log('x-spread: ', ...x)
//         console.log('x-arr: ', x)
//     }) //spread operator 
//     console.log(z)
// }

// restSpread([2,4,5,6],['a', 'k'])

// ///////////////////////////////
// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));
//   // Expected output: 6
  
//   console.log(sum.apply(null, numbers));
//   // Expected output: 6
  
////////////////destructuring variables 
/////////
//   let nums = [2,4,5,6];
//   let [y, x] = nums;
//   //let {y, x} = nums; //not work, since, no keys in the obj:  y, y
//   console.log(y, x)
//   //2 4

//   let [,m,,n] = nums;
//   console.log(m, n)
//   //output: 4 6

  /////////////////
  //map, filter, reduce functional programmming 


  ///regular expression 
  //regex builder: https://regexr.com/

//email: 
//^([a-zA-Z0-9]{4,})+@+(miu)\.+(edu)$
//miu emial: zaman91@miu.edu

//any email:
//^([a-zA-Z0-9]{4,})+@+([a-zA-Z0-9]{2,})(\.)+([a-zA-Z]{2,4})$
//girnner@gmail.com