var musicians = -1;
if (musicians === 1) {
    console.log("solo");
}
if (musicians === 2) {
    console.log("duet");
}
if (musicians === 3) {
    console.log("trio");
}
if (musicians === 4) {
    console.log("quartet");
}
if (musicians > 4) {
    console.log("this is a large group");
} else if (musicians === -1) {
    console.log("not a group");
}
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 20.00;
var checkBalance = true;
var isActive = false;
 if (checkBalance === true){
    if (!isActive && balance > 0 ){   
       console.log("Your balance is $" + balance.toFixed(2) +".");
    }
    else if (isActive){
        console.log("Your account is no longer active.");
    } else if (balance === 0 && !isActive){
        console.log("Your account is empty.");
    } else if (balance < 0  && !isActive){
        console.log("Your balance is negative. Please contact bank.");
    }
 } else if (!checkBalance){
    console.log("Thank you. Have a nice day!");
}
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 10.00;
var checkBalance = true;
var isActive = true;
 if (checkBalance === true){
     
    if (isActive === true && balance > 0 ){        
        console.log("Your balance is $" + balance.toFixed(2) +".");
    }    
    else if (isActive === false){        
        console.log("Your account is no longer active.");        
    } else if (balance === 0 && isActive === true){        
        console.log("Your account is empty.");        
    } else if (balance < 0  && isActive === true){        
        console.log("Your balance is negative. Please contact bank.");        
    }     
 } else if (checkBalance === false){    
    console.log("Thank you. Have a nice day!");
}