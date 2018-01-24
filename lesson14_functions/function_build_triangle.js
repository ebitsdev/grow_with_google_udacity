/*
Quiz: Build a Triangle (5-3)
Directions:
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

buildTriangle(10);
Returns:

*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
* * * * * * * * *
* * * * * * * * * *
We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!
Directions:
For this quiz, you're going to create a function called
buildTriangle() that will accept an input (the triangle at its widest width) and will return the string
representation of a triangle. See the example output below.
*/
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

function makeLine(length){
    var line = "";
    for (var j = 0; j <= length; j++){
        line += "* ";
    }
    return line + "\n"; //It was important to keep the new line feed in the code
}

function buildTriangle(num) {
    var triangle = "";
    for (var i = 0; i < num; i++){
        triangle += makeLine(i);
    }
    return triangle;
}
console.log(buildTriangle(10));
/*
Steps to build the function
1 - Create a function called makeLine
Create a variable to hold the line string value
Set the line length and loop through it to generate lines starting from 1 to 10 lines
Create a second function to build the actual triangle
Call the function makeLine from the second function

*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
* * * * * * * * *
* * * * * * * * * *
*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
* * * * * * * * *
* * * * * * * * * *
*/