function FindLargestNumber(a, b, c) {
  if (a >= b && a >= c) {
    console.log('Largest number is: ', a);
  } else if (b >= a && b >= c) {
    console.log('Largest number is: ', b);
  } else {
    console.log('Largest number is: ', c);
  }
}

FindLargestNumber(5, 88, 9);
