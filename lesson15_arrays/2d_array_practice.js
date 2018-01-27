/**
 * 2D Donut Arrays
2D Donut Arrays
Oftentimes, donuts are arranged in a grid like this:

A box of donuts can resemble a two dimensional grid with rows and columns.
You could use an array of arrays that has the name of each donut associated with its position in the box.

Here's an example:

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
If you wanted to loop over the donut box and display each donut (along with its position in the box!) you would start with writing a for loop to loop over each row of the box of donuts:

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}
Prints:
["glazed", "chocolate glazed", "cinnamon"]
["powdered", "sprinkled", "glazed cruller"]
["chocolate cruller", "Boston creme", "creme de leche"]

Since each row is an array of donuts, you next need to set up an inner-loop to loop over each cell in the arrays.

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
 */

var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];
for (var row = 0; row < donutBox.length; row++){
    for (var column = 0; column < donutBox[row].length; column++){
    console.log(donutBox[row][column]);
    }
}