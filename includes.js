let arr = [1, 2, 3, 4, 5, 400, 300, 89];
let b = 800;

// checking if the array includes

const includes = (arr, check) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === check) {
      return true;
    }
  }
  return false;
};
console.log(includes(arr, b));
