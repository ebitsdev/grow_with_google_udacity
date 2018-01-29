/**
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
