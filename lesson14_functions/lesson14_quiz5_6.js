/*
Quiz: Inline (5-6)
Directions:
Call the emotions() function so that it prints the output you see below,
but instead of passing the laugh() function as an argument, pass an inline
function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the
previous quizzes
Prints: "I am happy, haha!"
*/
function emotions(laugh, laughter){
    console.log("I am " + laugh + ", " + laughter(2)); // Laughter here is a callback
}
// Keep the function signature by giving string para and then function para
emotions("happy", function laugh(num){
    var nlaugh = "";
    for (var i = 0; i < num; ++i){
        nlaugh += "ha";
    }
    return nlaugh + "!";
});
