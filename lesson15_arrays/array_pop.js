/* Pop
Alternatively, you can use the pop() method to remove elements from the end of an array.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array
Returns: "cinnamon sugar"
donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"]*/
/*
With the pop() method you don’t need to pass a value; instead, pop() will always remove the last element from the end of the array. Also, pop() returns the element that has been removed in case you need to use it.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
donuts.pop(); // the `pop()` method returns "powdered" because "powdered" was the last element on the end of `donuts` array
Returns: "powdered"

QUIZ QUESTION
We’ve decided to replace some of the donuts in the donuts array.

var donuts = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

donuts.pop();
donuts.pop();
donuts.pop();
donuts.push("maple walnut");
donuts.pop();
donuts.push("sprinkled");
What does the donuts array look like after the following changes?
*/