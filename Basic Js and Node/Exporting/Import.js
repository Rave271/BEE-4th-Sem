//Assigning a normal const
// const math = require("./Export.js");
// console.log(math.addition(2, 3));


//Assigning a destructured const
const {addition,subtraction,multiplication,division, alpha}= require('./Export.js');
console.log(addition(2,3));
console.log(alpha);
 
