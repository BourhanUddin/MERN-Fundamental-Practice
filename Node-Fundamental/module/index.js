//add(2,3) // it shows referance error bcz  it didnot declare in index.js file 

// local-modules
const {add ,a}= require('./local-1.js')
const {add : sum ,a: a2}= require('./local-2.js')//use name alias for skip syntexError
// console.log(add(2,5));
console.log(sum(10,10,10)+a2 );

// built-in-modules 

const path = require('path')

console.log(path.parse('/I:/MERN-Fundamental-Practice/Node-Fundamental/module/index.js'));
console.log(path.join('/I:/MERN-Fundamental-Practice/Node-Fundamental/module/', "local-1.js"));
