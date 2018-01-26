/*
Quiz: Build a Triangle (5-3)
Directions:
For this quiz, you're going to create a function called buildTriangle() 
that will accept an input (the triangle at its widest width) and will 
return the string representation of a triangle. See the example output 
below.
*/

// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";        
//     }
//     return console.log(line + "\n");
// }
function buildTriangle(length){
    var line = "*";
    linefeed = 1;
    while(linefeed < length){
        line++;
    }
    return console.log(line + "\n");
}

buildTriangle(10);