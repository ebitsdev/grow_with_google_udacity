/**
<<<<<<< HEAD
 * Quiz: Umbrella (7-1)
Directions:
Using the umbrella example from the previous video, see if you can follow the example open() 
method and create the close() method. It's alright if you have trouble at first! We'll go into more detail 
later in this lesson.

var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};
TIP: Remember to put all of your object's properties and methods inside curly braces: 
var myObject = { greeting: "hello", name: "Julia" };. Also, remember that an object is just 
another data type. Just like how you would put a semicolon after a string variable declaration 
var myString = "hello";, don't forget to put a semi-colon at the end of your object's declaration.
 */
/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if (umbrella.isOpen === false){
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false; // To toggle the value of isOpen
            return "Julia closes the umbrella!";
        }
    }
};
console.log(umbrella);
=======
 * Quiz: Facebook Friends (7-5)
Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */
var facebookProfile = {
    name: "Emmanuel",
    friends: 5,
    messages: ["Message one", "Message two", "Message three,"],

    postMessage(message){

        return facebookProfile.messages.push(message);
    },
    addFriend(){
        return facebookProfile.friends += 1;
    },
    removeFriend(){
        return facebookProfile.friends -= 1;
    },
    deleteMessage(index){
        return facebookProfile.messages.splice(index,1);
    }
};
console.log(facebookProfile.removeFriend());
>>>>>>> 0840907740be70900139831f6f48649978cf5e1f
