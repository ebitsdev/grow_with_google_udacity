// Call the movies function, pass in two arguments: a function for displaying a messgae, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}
// Call the movies function, pass in the function and name of movie
// Calling a function inline
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
function askForName(questionFunction, name) {
    questionFunction(name);
}
// Call function inlcls
askForName(function typingName(name) {
    console.log("What is your: " + name);
}, "Emmanuel");

function inLineCaller(inlineFunction, cityName){
    inlineFunction(cityName);
}
inLineCaller(function whatCity(myCityName){
    console.log("My city name is: " + myCityName);
}, "Silver Spring");

function calculateValues(calculator, qty, price){
    calculator(qty, price);
}
calculateValues(function addValues(unit, price){
    return console.log(unit * price);
    // Multiply quantity by price as shown in the function signature
}, 4, 6);
