/**
 * Use the same HTML
 */
article2 = $(".featured");
article3 = article2.next();
article2.toggleClass("featured");
article3.toggleClass("featured"); //I used addClass() but I was supposed to use toggleClass

