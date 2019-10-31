// Write a program to print all odd numbers between 1 to n using recursion.

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the value of N :", msg => {
  let n = +msg;
  print(n);
  process.exit();
});

let print = n => {
  if (n == 1) {
    console.log(n);
    return n;
  }
  if (n % 2 !== 0) {
    console.log(n);
  }
  return print(n - 1);
};
