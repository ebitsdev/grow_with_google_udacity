/**
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