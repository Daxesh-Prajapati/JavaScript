function reverse_string(str) {
  let reverse_store = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse_store += str.charAt(i); // Shorter syntax
  }
  return reverse_store;
}

console.log(reverse_string('dax')); // Output: "xad"
