/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/
var family1 = $("#family1"),
    family2 = $('<div id="family2"/>'),
    brue = $('<div id="bruce">Bruce</div>'),
    hunter = $('<div id="hunter">Hunter</div>'),
    madison = $('<div id="Madison">Madison</div>'),
family2.insertAfter(family1); // I had it backward
