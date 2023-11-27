
let array=[1,2,3,4,5, 400, 300, 89];

const forEach =(arr) =>{

    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// logs each iten on the console and add undefinied because nothing is explicitly returned 
console.log(forEach(array));