let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the value of N :", msg => {
  let n = +msg;
  console.log(print(n));
  process.exit();
});

let print = n => {
  if (n == 1) {
    return n;
  }
  return n + print(n - 1);
};
