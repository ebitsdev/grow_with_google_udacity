/**
 * QUESTION 3 OF 4
Consider the following array, removeFirstElement:

var removeFirstElement = ["a", "b", "c"];
Let's say that you want to modify (i.e., mutate) removeFirstElement by removing the first element within it. Which method(s) could you use?

shift() will remove the first element from an array.
splice() can be used if you specify the index of the first element, and indicate that you want to delete 1 element.
Keep in mind that the slice() method allows you to create a copy of the array between two indices. Though you could just exclude the index of the first element, this approach does not directly modify a given array.
*/