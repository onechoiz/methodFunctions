//define array from 

const string = 'hello my friend '

const arrayFrom =(str) =>{
    let newArr= []
    for (let i =0;i< str.length ;i++){
        if(str[i] === " ") {
            continue
        } 
        else {newArr.push(str[i])}
      
    }
    return newArr
}

console.log(arrayFrom(string));