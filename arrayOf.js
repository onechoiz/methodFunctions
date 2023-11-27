
// Define an object with properties name and id
const obj = {
 name: "lily",
 id: 32,
};

// Define a string variable greet
const greet = "hello";

// Define a function arrayOf that takes any number of arguments
const arrayOf = (...args) => {
 // Initialize an empty array newArr
 let newArr = [];

 // Iterate over the arguments using a for loop
 for (let i = 0; i < args.length; i++) {
    // Push each argument into the newArr array
    newArr.push(args[i]);
 }

 // Return the newArr array
 return newArr;
};

// Use the Array.of method to create an array containing obj and greet
console.log(Array.of(obj, greet));

// Use the arrayOf function to create an array containing obj and greet
console.log(arrayOf(obj, greet));
