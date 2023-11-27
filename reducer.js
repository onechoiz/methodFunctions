
// Define an array with mixed data types
const arr = ['hello', 'random', 'people', 40, 80, 10, 80, 10, 30, 'yay'];

// Define a reducer function that takes an array and an accumulator as parameters
const reducer = (arr, acc = 0) => {
    // Initialize a variable to store the sum of numbers
    let sum = 0;

    // Initialize a variable to store the reduced array
    let reduced;

    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is a number, add it to the sum
        if (!isNaN(arr[i])) {
            sum += arr[i];
        }
    }

    // Return the sum
    return sum;
};

// Call the reducer function with the array as an argument
console.log(reducer(arr));
//
//In this code, the `reducer` function iterates through each element in the array. If the element is a number, it adds it to the `sum` variable. Finally, it returns the sum. The `console.log` statement