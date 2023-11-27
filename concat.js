let a=[1,2,3,4,5, 400, 300, 89];
let b=[1, 89, 66, 44, 33];

const concat = (arr1, arr2) =>{
    
    for(let i =0; i<arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1
      
}

console.log(concat(a,b));