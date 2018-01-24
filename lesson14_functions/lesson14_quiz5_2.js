/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function laugh(num){
    var laugh = "";
    for (var i = 0; i < num; ++i){
        laugh += "ha";
    }
    return laugh + "!";
}
console.log(laugh(2));

function buildTriangle(num){
    var repeat = "";
    for(var i = 0; i < num.length; ++i){
        repeat += num[i];
    }
    return repeat;
}
buildTriangle(10)