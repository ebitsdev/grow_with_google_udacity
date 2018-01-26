/*
 * To practice for loop on array element(s)
 * The forEach() loop

Arrays have a set of special methods to help you iterate over and perform operations on collections of data. You can view the MDN Documentation list of Array methods here, but a couple big ones to know are the forEach() and map() methods.

The forEach() method gives you an alternative way to iterate over an array, and manipulate each element in the array with an inline function expression.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
Prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE

Notice that the forEach() method iterates over the array without the need of an explicitly defined index. In the example above, donut corresponds to the element in the array itself. This is different from a for or while loop where an index is used to access each element in the array:

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}
Parameters
The function that you pass to the forEach() method can take up to three parameters. In the video, these are called element, index, and array, but you can call them whatever you like.

The forEach() method will call this function once for each element in the array (hence the name forEach.) Each time, it will call the function with different arguments. The element parameter will get the value of the array element. The index parameter will get the index of the element (starting with zero). The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.

Here's another example:

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat

On the next page, you'll do a quiz that uses the forEach() method to modify an array.
 */
var colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple' ];

function printColors(color){
    for (var i = 0; i < color.length; i++){
    color[i] += ' topping';
    color[i] = color[i].toUpperCase();
    }
    console.log(color);
}
printColors(colors);

// Cleaner version of the above function with inline function
colors.forEach(function (color){
    color += ' topping';
    color = color.toUpperCase();
    console.log(color);
});