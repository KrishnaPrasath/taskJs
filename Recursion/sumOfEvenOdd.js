// Write a program to print all odd numbers between 1 to n using recursion.

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the value of N :", msg => {
  let n = +msg;
  let odd = 0,
    even = 0;
  sum(n, odd, even);

  process.exit();
});

let sum = (n, odd, even) => {
  if (n == 1) {
    console.log(`Sum of Odd : ${odd + n} and Sum of Even : ${even}`);
    return n;
  }
  if (n % 2 !== 0) {
    odd += n;
  }
  if (n % 2 == 0) {
    even += n;
  }

  return sum(n - 1, odd, even);
};
