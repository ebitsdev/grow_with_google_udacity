/* Push
So you can find length of an array, but what if you want to modify an array?

Thankfully, arrays have quite a few built-in methods for adding and removing elements from an array. The two most common methods for modifying an array are push() and pop().

Push
You can use the push() method to add elements to the end of an array.

For example, imagine the following spread of donuts. 

A spread of donuts. Yummy!

You can represent the spread of donuts using an array.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
Then, you can push donuts onto the end of the array using the push() method.

donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array
Returns: 7
donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"]
Notice, with the push() method you need to pass the value of the element you want to add to the end of the array. Also, the push() method returns the length of the array after an element has been added.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered"); // the `push()` method returns 7 because the `donuts` array now has 7 elements
Returns: 7

NEXT
*/