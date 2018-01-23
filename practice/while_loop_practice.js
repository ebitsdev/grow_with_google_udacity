x = 5;
while (x >= 1) {
    console.log("This is from the while loop: " + x);
    --x;
}

for (let i = 1; i < 5; ++i) {
    const element = i;
    console.log("This is from the for loop: " + i);
}

i = 0
while(i < 6){
    // Adding condition to the while loop
    if (i % 3 === 0){
        console.log("This number " + i + " is divisible by 3");
    }
    else { console.log("This while loop works fine: " + i);
    }
    // Increment the value of i
    i++
}
