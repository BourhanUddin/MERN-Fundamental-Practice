//add(2,3) // it shows referance error bcz  it didnot declare in index.js file 

const {add ,a}= require('./local-1.js')
// console.log(add(2,5));
console.log(add(10,10)+a );

 