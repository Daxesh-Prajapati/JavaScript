function sumOfArray(arr) {
  let sum = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let arr = [1, 2, 3, 9];
console.log(sumOfArray(arr));
