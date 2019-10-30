// Write a program to find power of any number x ^ y.

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter two numbers :", msg => {
  let a, b;
  let input = msg.split(" ");
  a = +input[0];
  b = +input[1];
  console.log(Math.pow(a, b));
  process.exit();
});
