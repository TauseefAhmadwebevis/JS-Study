let firstName = "Tauseef Ahmad";
let age = 21;
let firstName2 = "Muhammad Ahtisham Butt";
let age2 = 20;
if(firstName[0] === "T" && age >= 18){
    console.log(`Your First Name's 1st Letter is ${firstName[0]} and your age is ${age}`);
}
else{
    console.log("Inside Else");
}
// =========== or operator ===============
if(firstName[0] === "T" ||  age >= 18){
    console.log(`Your First Name's 1st Letter is ${firstName[0]} and your age is ${age}`);
}
else{
    console.log("Inside Else");
}