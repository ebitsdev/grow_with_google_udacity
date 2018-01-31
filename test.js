/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

// $(".artist").toggleClass("featured");
// console.log(featuredArticle);
// var article2, article3;

// article2 = $(".article-item featured");
// article2.addClass("featuredone");
// article2.next('li').toggleClass("featured");
var featuredArticle;

article2 = $(".featured");
article3 = article2.next();
article2.toggleClass("featured");
article3.toggleClass("featured"); //I used addClass() but I was supposed to use toggleClass

// Start with this variable!
var navList;

navList = $(".nav-item a"); // Select the first anchor tag of the list elements
navList.first().attr("href", "#1"); // Set href attr
