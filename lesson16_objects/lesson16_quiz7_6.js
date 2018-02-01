<<<<<<< HEAD
/*
Directions:
Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.
*/
/*
 * Programming Quiz: Menu Items (7-2)
 */

var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);
=======
/**
 * Quiz: Donuts Revisited (7-6)
Here is an array of donut objects.

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
Directions:
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
  ];

  donuts.forEach(element => {
      console.log(element.type + " donuts cost $" + element.cost + " each");
  });

  donuts.forEach(function (element) {
    console.log(element.type + " donuts cost $" + element.cost + " each");
});
>>>>>>> 0840907740be70900139831f6f48649978cf5e1f
