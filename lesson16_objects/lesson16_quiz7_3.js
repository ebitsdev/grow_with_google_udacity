<<<<<<< HEAD
/*
Quiz: Bank Accounts 1 (7-3)
Directions:
Using the given object:
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
  },
  print: function printAccountSummary(){
      accountMessage: "Your balance is currently $" + savingsAccount + "and your interest rate is " + savingsAccount.interestRatePercent; 
  }
};
console.log(savingsAccount.print);
=======
/*Quiz: Bank Accounts 1 (7-3)
Directions:
Using the given object:
*/

>>>>>>> 0840907740be70900139831f6f48649978cf5e1f
/* add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/
<<<<<<< HEAD
=======
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
    },
    printAccountSummary(){ //The grader did not like a property name to the printAccountSummary() method.
        return "Welcome!\n" + "Your balance is currently $" + savingsAccount.balance + " and your interest rate is 1%.";
    }
  };
  console.log(savingsAccount.printAccountSummary());
>>>>>>> 0840907740be70900139831f6f48649978cf5e1f
