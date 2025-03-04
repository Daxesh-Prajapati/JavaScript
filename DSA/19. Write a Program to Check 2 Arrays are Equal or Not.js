function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6];

let result = isSame(arr1, arr2);

if (isSame(arr1, arr2)) {
  console.log('Both arrays are same');
} else {
  console.log('Both arrays are not same');
}
