// 1. Display "Ajk amar mon valo nai" for 39 items

for(var i = 1; i <= 39; i++){
    console.log("Ajk amar mon valo nai", i);
}



// 2. Display numbers between 58 to 98 
for(var i = 58; i <= 98; i++){
    console.log( i);
}

// 3. Show all even Number form 412 to 456
for(var i = 412; i <= 456; i += 2){
    console.log(i);
}


// 4. show all odd number 581 to 623

for(var i = 581; i <= 623; i += 2){
    console.log(i);
}

// // 5. Difference between while loop and for loop

// In JavaScript, both while loops and for loops are used to create loops for executing a block of code repeatedly, but they have different syntax and use cases, just like in most programming languages. Here are the main differences between while loops and for loops in JavaScript:

// 1. While Loop:
//    - A while loop is a pre-test loop, meaning it evaluates a condition before executing the loop body.
//    - It continues to execute the loop as long as the specified condition is true.
//    - While loops are often used when you don't know in advance how many times the loop will iterate or when the loop should run until a certain condition is met.
//    - Example in JavaScript:
//      ```javascript
//      let count = 0;
//      while (count < 5) {
//          console.log(count);
//          count++;
//      }
//      ```
// /*
// 2. For Loop:
//    - A for loop is a compact loop construct in JavaScript that is commonly used when you know the number of iterations in advance.
//    - It has three parts: initialization, condition, and increment (or decrement). It iterates over a specified range and stops when the condition becomes false.
//    - For loops are particularly useful when you want to iterate over arrays or perform a specific action a known number of times.
//    - Example in JavaScript:
//      ```javascript
//      for (let i = 0; i < 5; i++) {
//          console.log(i);
//      }
//      ```

// In summary, while loops and for loops in JavaScript differ in their use cases and syntax. While loops are more flexible and are used when you want to repeat code based on a condition. For loops are convenient for iterating over sequences and when you know the exact number of iterations needed.


// while loop 

var numberWhile = 0;
while(numberWhile <= 10){
    console.log(numberWhile);
    numberWhile++;
}

// for Loop 

for(var i = 0; i <= 10; i++){
    console.log(i, "hellow");
}