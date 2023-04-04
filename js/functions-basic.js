'use strict';
// function mainFUnc(){
//     console.log('Hello World');
// }
// mainFUnc();
// function juiceCount(apples = 1,oranges = 1){
//     console.log(apples,oranges);
//     var string = `We use ${apples} Apples and ${oranges} Oranges to Make Juice.`;
//     return{
//         string
//     }
// }
// const shakeDetails = juiceCount(10,6);
// console.log(shakeDetails.string);
// ======  function declaration =====
function CalculateAge (birthYear){
    let CurrentYear = new Date().getFullYear();
    let CurrentAge = (CurrentYear - birthYear);
    return  {
        CurrentAge,
        CurrentYear
    }
}
// ======  function Expression =====
let MyAGe = CalculateAge(2000);
console.log(MyAGe.CurrentAge);
let CalcAge2 = function(birthYear){
    let CurrentYear = new Date().getFullYear();
    return CurrentYear - birthYear;
}
console.log(CalcAge2(2000));
// =============== Arrow function ======
let CurrentYear = new Date().getFullYear();
const setArrow = bith => CurrentYear - birthYear;
