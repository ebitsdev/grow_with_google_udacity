/*Here is a summary of operators you've learned so far:
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
*/

// for (var i = 0; i < 5; i++){
//     for (var y = 0; y < 3; y++){
//         console.log(i + ": " + y);
//     }    
// }

/*
Notice the order that the output is being displayed.

For each value of x in the outer loop, the inner for loop executes completely. The outer loop starts with x = 0, and then the inner loop completes it's cycle with all values of y:

x = 0 and y = 0, 1, 2 // corresponds to (0, 0), (0, 1), and (0, 2)
Once the inner loop is done iterating over y, then the outer loop continues to the next value, x = 1, and the whole process begins again.

x = 0 and y = 0, 1, 2 // (0, 0) (0, 1) and (0, 2)
x = 1 and y = 0, 1, 2 // (1, 0) (1, 1) and (1, 2)
x = 2 and y = 0, 1, 2 // (2, 0) (2, 1) and (2, 2)
etc.
*/

for (i = 1; i < 10; i++){
    console.log("hello " + i);
}