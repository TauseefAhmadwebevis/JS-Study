// winning Number is 19
let winningNumber = 19;
let userGuess = +prompt('Guess a Number');
console.log(typeof(userGuess), userGuess);
if(winningNumber === userGuess){
    alert("You Guess Write Number");
}
else{
    if(userGuess > winningNumber){
        alert("YOur Guess is TO Big");
    }
    else{
        alert("YOur Guess is TO Low");
    }
}