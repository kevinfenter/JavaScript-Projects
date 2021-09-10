/*
    Intro to Arrays
    Complete the Following Exercises.
*/

/*
Exercise One - Accessing an array
*/

let sentence = ["The", "dog", "jumped", "over", "the", "fence"];

// Step One ------------------
// Log the word "jumped" to the console by accessing it in the array.
//
//
// declaring the #2 index item in the array as the variable answer then logging the answer

let answer = sentence[2];
console.log (answer) 

// Step Two ------------------
// Log the last word in the array to the console.
// 
//
// declaring the last (#5) index item in the array as the variable answer2 then logging the answer

let answer2 =sentence[5];
console.log (answer2)

/*
---------------------------------------------------------------------------
Exercise Two - Adding up numbers
Create a statement which adds up every number of the array, assigning 
the sum to a new variable.
Then log the sum to the console. (Hint: It should be 28)

You don't need to do anything fancy here, like loops or functions, 
just access every index of the array and add up the numbers in one big equation.
*/

let numbers = [3, 4, 5, 7, 9];
//
// declaring everying and adding them all
//
let nOne = numbers[0];
let nTwo = numbers[1]
let nThree = numbers[2]
let nFour = numbers[3]
let nFive = numbers[4]
let answer3 = nOne + nTwo + nThree + nFour + nFive
console.log (answer3)

/*
---------------------------------------------------------------------------
Exercise Three - Creating an array
*/

// Step One ------------------
// Create a new array and initialize with the names of five different colors.
// The array should be assigned to a variable named "colors"

let colors = ["blue", "red", "yellow", "gold", "silver"];
 console.log (colors.length)

// Step Two ------------------
// Log the length of the array to the console (it should print 5)

/*
---------------------------------------------------------------------------
Exercise Four - Updating an array
*/

let names = []; // Don't modify this line.

// Step One ------------------
// Add 5 names of people to the array.
// Then log your array to the console.

names[0] = "Billy";
names[1] = "Willy";
names[2] = "Sinbad";
names[3] = "Bobbie";
names[4] = "Kevo";
console.log (names)

// Step Two ------------------
// Using the index variable, assign a new name to the given index.
// Then log the modified array to the console.
let index = 2;
names[2] = "Wonka"
console.log (names)

// Your Code Here

/*
---------------------------------------------------------------------------
Exercise Five - Concatenating an array
Concatenate the second array to the first array.
You will need to assign the result to a new variable. 
Then log the new array to the console.   Hint: Use concat, this was shown in the reading.
*/

let firstArray = ["This", "will", "make"];
let secondArray = ["a", "combined", "array."];

let lastanswer = firstArray.concat(secondArray);
console.log (lastanswer)