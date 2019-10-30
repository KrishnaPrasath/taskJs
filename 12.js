// square root

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter a number :", msg => {
  let num = +msg;
  console.log(Math.sqrt(num));
  process.exit();
});
