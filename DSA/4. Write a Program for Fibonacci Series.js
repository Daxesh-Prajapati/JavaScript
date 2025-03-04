function fibbonaci(n) {
  let a = 0,
    b = 1,
    c = a + b;

  console.log('Fibonacci series : ');
  for (let i = 0; i < n; i++) {
    console.log(a);
    a = b;
    b = c;
    c = a + b;
  }
}

fibbonaci(10);
