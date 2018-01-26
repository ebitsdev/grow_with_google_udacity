/*
 * Programming Quiz: Laugh (5-4)
 * Quiz: Laugh (5-4)
Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!

Your Code:

/*
 * Programming Quiz: Laugh (5-4)
 /*
var laugh = function(num){
    line = "";
    for (var i = 1; i <= num; i++){
        line += "ha";
    }
    return line + "!";
}

console.log(laugh(3));

 */

var laugh = function(num){
    line = "";
    for (var i = 1; i <= num; i++){
        line += "ha";
    }
    return line + "!";
}

console.log(laugh(3));
