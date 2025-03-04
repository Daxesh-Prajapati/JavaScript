function isPalindrome(n) {
  let original = n;
  let reverse = 0;

  while (n != 0) {
    let ld = n % 10;
    reverse = reverse * 10 + ld;
    n = Math.floor(n / 10);
  }

  if (original === reverse) {
    return true;
  } else {
    return false;
  }
}

let number = parseInt(prompt('Enter a number : '));
if (isPalindrome(number)) {
  console.log(number, 'is a palindrome');
} else {
  console.log(number, 'is not palindrome');
}
