let arr=[1,2,3,4,5, 400,[6,8], 300,[8,90], 89];

const flat = (array) =>{
    let newArr =[]
    for (let index = 0; index < array.length; index++) {
           if(Array.isArray(arr[index])){
               for (let j=0 ; j< array[index].length; j++)
               newArr.push(array[index][j])
           } else {newArr.push(array[index])}

        
    }
    return newArr
}

console.log('using Array.prototype.flat',arr.flat());
console.log('custom made flat function',flat(arr));