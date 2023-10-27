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

// 6. Declare an array for all the topic that you have learned last few day Diplay then as autput for Loop

var allTheTopics = ["html5", "Css3", "tailwind", "dasiUi", "JavaScript"];

for(var i = 0; i < allTheTopics.length; i++){
    var myLearnAllTopic = allTheTopics[i];
    console.log(myLearnAllTopic, i);
}


// 7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop 

var myUseMobilePhoneName =['Semphony c 105', 'wintal w-60', 'Nokia 105', 'Nokia x2', 'Samseng A5', 'SmartPhone'];

var i = 0;
while(i < myUseMobilePhoneName.length){
    
    var usedMobileName = myUseMobilePhoneName[i];
    console.log(usedMobileName);
    i++;
}

// Run a loop from 30 to 86. this Loop will stop if the values get higer then 44

for(var i = 30; i <= 86; i++){

    console.log(i)

    if(i > 44){
        break;
    }
}

// 9. write the price of the books that you have. Display the pricesif the price lower then 200

var booksPrice =[120, 50, 800, 300, 500, 700, 1200, 1500, 100, 5, 20, 115, 739, 99];

for(var i = 0; i < booksPrice.length; i++){

    var bookPriceLeshen200 = booksPrice[i];
   

    if(bookPriceLeshen200 > 200){
        continue;
    }

    console.log(bookPriceLeshen200);
}

// Variable 
/*
1. what JavaScript?
2. how does Js works?
3. what is variable?
4. Declare a variable
5. Types of variable? How can you find out type of a vara
6. primitive and non-primitive data types
7. Naming convention of js variable
8. Math Operation: +, -, *, /, %
9. Short hand: +=, -=, /=
10. ++, --
11. parseInt, parseFloat
12. toFixed



*/


/*
---------------------------------
                    ARRAY
--------------------------------
1. What is the purpose?
2. how to declare an array in Js 
3. Number of element in an array
4. What is index?
5. find the value of an element by index
6. change an element by index
7. get the index of an element by the value
8. what does it men when you get undefind while getting the value of an element
9. how can you add an element to an array the last position
10. how can you remove the last element for array
11. Add an element at the first position of an array
12. Remove the first element of an array


*/

/*
-----------------------------------------
                Conitional
-----------------------------------------

1. meaning of: >, <, >=, ==, !=, ===
2. meaning fo: &&
3. meaning of: ||
4. let's say you have x amount of money. if you have more then
if more then 60,000 then will vy gaming Laptop
if you more then 40,000then you will be Lenovo Yoga
if you have more hten 20, 000 the will by an uses laptop, otherwise, you will use mobile phone

*/