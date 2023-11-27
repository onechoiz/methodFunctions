
const arr = ['hello', 'random', 'people', 40 , 80, 10, 80, 30, 'yay']

// The splice function takes an array, a starting index, and an ending index as parameters.
// It returns a new array containing the elements from the original array within the specified range.
const splice =(arr, from,to)=>{
    let newArr=[]

    // The for loop iterates through the elements of the original array within the specified range.
    for (let i = from; i <= to ; i++) {

        // If the ending index is greater than the length of the original array,
        // the ending index is set to the last index of the original array.
        if(arr.length < to ){
          to = arr.length - 1
        }

        // The current element is added to the new array.
        newArr.push(arr[i])
       
       
    }
   
    // The new array is returned.
    return newArr
}

console.log(splice(arr, 4,20)); // Output: [40, 80, 10, 80, 30, 'yay']
console.log(arr); // Output: ['hello', 'random', 'people', 40 , 80, 10, 80, 30, 'yay']
