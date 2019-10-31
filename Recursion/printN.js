// Write a program to print all natural numbers between 1 to n using recursion.

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the value of N :", msg => {
  let n = +msg;
  print(n);
  process.exit();
});

let print = n => {
  console.log(n);
  if (n == 1) {
    return n;
  }
  return print(n - 1);
};
