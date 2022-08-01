// trim(); will remove the spaces froms start and last and return a new string
// toUpperCase(); will capitalize all characters and also return a new string
// toLowerCase(); will small all characters and also return a new string
// slice();
let firstName = '   Tauseef Ahmad   ';
let firstNameWithoutSpace = firstName.trim();
console.log(firstName.length);
console.log(firstNameWithoutSpace.length);
console.log(firstNameWithoutSpace.toUpperCase());
console.log(firstNameWithoutSpace.toLowerCase());
// to use slice you will tell this function from where to start and where to end slic(starting_index,last_index,) and not include last index in
console.log(firstNameWithoutSpace.slice(0,5));
// if you oass only starting index this will go till last sting automatically 
// Exampple is here console.log(firstNameWithoutSpace.slice(0)); this will autmatically goes to last string chanracter
console.log(firstNameWithoutSpace.slice(0));