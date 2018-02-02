/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var family2 = $('<div id="family2"><h1>Family2</h1></div>'),
    bruce = $('<div id="bruce"><h1>Bruce</h1></div>'),
    hunter = $('<div id="hunter"><h2>Hunter</h2></div>'),
    madison = $('<div id="madison"><h2>Madison</h2></div>');
family2.insertAfter(family1); // Add family2 after family1 div
family2.append(bruce);
bruce.append(madison, hunter);