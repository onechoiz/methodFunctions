
//// Define an array of numbers
const a = [10, 49, 79];
//
//// Create a function called 'join' that takes an array as an argument
const join = (arr) => {
   // Initialize an empty string variable called 'str'
   let str = "";

//    Iterate through each element in the array using a for loop
  for (let i = 0; i < arr.length; i++) {
     // Append the current element to the 'str' variable
      str += arr[i];
   }
//    Return the 'str' variable, which now contains the concatenated string of numbers
  return str;};


// Call the 'join' function with the array 'a' as an argument and log the result to the console
console.log(join(a));

