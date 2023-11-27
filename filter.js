const a = [1, 2, 3, 4, 5, 400, 300, 89];
const filter = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 30) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log(filter(a));
