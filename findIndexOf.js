const array = [20, 30, 400 , 799, 30]

// condition is to find the first number that is divisible by 3
const findIndexOf =(arr) =>{
    
    for(let i=0 ;i<arr.length;i++){

         if(arr[i]% 3 === 0){
            return i;
            break
         }
    }
    return -1

}

console.log(findIndexOf(array));