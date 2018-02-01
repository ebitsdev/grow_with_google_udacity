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
 * Quiz: Bank Accounts 2 (7-4)
Directions:
Using the object from the previous quiz, answer the following quiz question:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    }
  };

savingsAccount.withdraw(50);
  console.log(savingsAccount);
/*
  QUIZ QUESTION

  Which of the following are valid ways to access properties and call methods from the savingsAccount object?
  savingsAccount.balance;
 ** Emphasys is on accessing the properties
  savingsAccount[balance]; // Correct
  savingsAccount["balance"]; // Correct

  savingsAccount."balance"; // Wrong

  savingsAccount.withdraw = 50; // Wrong

  savingsAccount.removeMoney = 50; // Wrong
  savingsAccount.withdraw(50);// Correct

  savingsAccount.removeMoney(50);// Wrong
  */
>>>>>>> 0840907740be70900139831f6f48649978cf5e1f
