function findMissingNumber(arr, n) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }

  let totalSum = (n * (n + 1)) / 2;

  return totalSum - sum;
}

let arr = [1, 2, 4, 5, 6, 7];
let n = 7; // number of elements in array
let result = findMissingNumber(arr, n);
console.log(result, 'is the missing number');
