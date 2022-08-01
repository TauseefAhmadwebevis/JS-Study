// undefine
// null
// if we will define a vriable with let or var and we dont assign it anything then its type is undefined or if we decalare a const and not assign a value to iy this generate an error
let firstName ;
console.log(typeof(firstName));
firstName = "Tauseef";
console.log(typeof(firstName), firstName);
let varNull = null;
console.log(typeof(varNull), varNull);
// there should be a limit to save a number in javascript after this we will use BigInt
let mynum =  BigInt(123);
console.log(mynum, typeof(mynum));
let mynum2 =  123n;
console.log(mynum2, typeof(mynum2));
// we can perform mathametics operations with bigint datatype we cannot use the other datatype with bigint