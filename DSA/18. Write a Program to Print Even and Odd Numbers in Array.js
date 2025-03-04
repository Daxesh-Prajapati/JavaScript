function printEvenOdd(arr) {
  console.log('Even elements are: ');
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }

  console.log('Odd elements are: ');
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
}

let arr = [1, 2, 3, 9, 5, 9, 1, 23, 45, 65, 45];
printEvenOdd(arr);

//------------------------2nd method-----------------------------------//

// function printEvenOdd(arr) {
//     console.log("Even elements are:");
//     for (let i = 0; i < arr.length; i++) {  // ✅ Added `let` before `i`
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }

//     console.log("Odd elements are:");
//     for (let i = 0; i < arr.length; i++) {  // ✅ Added `let` before `i`
//         if (arr[i] % 2 !== 0) {  // ✅ Fixed condition for odd numbers
//             console.log(arr[i]);
//         }
//     }
// }

// // Example usage
// let arr = [1, 2, 3, 9, 5, 9, 1, 23, 45, 65, 45];
// printEvenOdd(arr);  // ✅ Removed `console.log(printEvenOdd(arr))`
