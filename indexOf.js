
let arr=[1,2,3,4,5, 400, 300, 89];

// The indexOf function takes two parameters: the element to search for (el) and the array to search in (arr).
const indexOf = (el, arr) => {

    // Initialize the index variable.
    let index;

    // Iterate through the array using a for loop.
    for(let i = 0; i<arr.length; i++){

        // If the current element in the array is equal to the element we are searching for,
        // set the index variable to the current index (i) and break out of the loop.
        if(arr[i] === el){
            index = i;
            break;
        }

        // If the current element in the array is not equal to the element we are searching for,
        // set the index variable to -1 (indicating that the element was not found).
        else {
            index = -1
        }

    }

    // Return the index variable, which will contain the index of the element if it was found, or -1 if it was not found.
    return index
}

// Call the indexOf function with the element 400 and the array arr.
console.log( 'index of function', indexOf(400,arr))


