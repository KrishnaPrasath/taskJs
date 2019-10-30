let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter two numbers :", msg => {
  let a, b;
  let input = msg.split(" ");
  a = +input[0];
  b = +input[1];
  console.log("Sum :", sum(a, b));
  process.exit();
});

let sum = (x, y) => {
  return x + y;
};

