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

let a = parseInt(prompt('Enter lowest number : '));
let b = parseInt(prompt('Enter highest number : '));

for (let i = a; i <= b; i++) {
  if (isArm(i)) {
    console.log(i);
  }
}
