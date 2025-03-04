function isArm(n) {
  let original = n;

  let digits = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    digits++;
  }

  n = original;
  let sum = 0;
  while (n != 0) {
    let ld = n % 10;
    sum = sum + Math.pow(ld, digits);
    n = Math.floor(n / 10);
  }

  if (original === sum) {
    return true;
  } else {
    return false;
  }
}

let n = parseInt(prompt('Enter a number : '));
console.log(isArm(n) ? 'yes it is Armstrong' : 'It is not Armstrong');
