let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter a number :", msg => {
  let n = +msg;
  let i = 0;
  while (i < n) {
    console.log(fibonacci(i));
    i++;
  }

  process.exit();
});

let fibonacci = n => {
  if (n == 1 || n == 0) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
