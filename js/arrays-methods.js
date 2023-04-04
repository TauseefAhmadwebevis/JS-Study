'use strict';

// ============ Adding Elements in Arrays ============
const friends = ['Waseem', 'Tauseef', 'Ahmad', "Aqib", 23];
console.log(friends,typeof(friends));
// ===== push method ====
// THis Method add Elemnt to the end of the array and return the lenght of arrays
var newFirends = friends.push('Pakistan');
console.log(newFirends,typeof(newFirends));
// ===== Unshift Method =====
// THis Method add an ELement at the begning of the array
friends.unshift('Zindabad');
console.log(friends);


// ============ Removing Elements from array ============



// ====== Pop Method Remove the Arrays Elemtn frm last in array it is oppisute to Push Method and this will return removed element not the lenght of new array
friends.pop();
console.log(friends);

// ===== Shift method remove element of array from start and this will also return the removed element ======
friends.shift();
console.log(friends);

// ======= indexof return the index of speciific Element in an array it is also checked the datatype====
console.log(friends.indexOf('Ahmad'));
console.log(friends.indexOf('Bob'));
console.log(friends.indexOf(23));


// ===== includes is ES6 method in arrays it is also checked the datatype =========

console.log(friends.includes('Ahmad'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));