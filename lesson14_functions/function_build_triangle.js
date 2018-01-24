/*
Directions:
For this quiz, you're going to create a function called
buildTriangle() that will accept an input (the triangle at its widest width) and will return the string
representation of a triangle. See the example output below.
*/
function makeLine(length){
    var line = "";
    for (var j = 1; j <= length; j++){
        line += "* ";
    }
    return console.log(line + "\n");
}
/*
Steps to build the function
1 - Create a function called makeLine
Create a variable to hold the line string value
Set the line length and loop through it to generate lines starting from 1 to 10 lines
Create a second function to build the actual triangle
Call the function makeLine from the second function
*/