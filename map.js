let array=[1,2,3,4,5, 400, 300, 89];
// condition is  * 4
const map = (arr) =>{
    let newArr= []
    for(let i=0;i<arr.length;i++){
        if( typeof arr[i] === 'number' ){
            newArr.push(arr[i]*2);
        }
       

    }
     return newArr

}

console.log(map(array));