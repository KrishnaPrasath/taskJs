// Factorial

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the number : ", msg => {
  let n = +msg;
  console.log(fact(n));
  process.exit();
});

let fact = n => {
  let ans = 1;
  while (n > 0) {
    return n * fact(n - 1);
  }
  return 1;
};
