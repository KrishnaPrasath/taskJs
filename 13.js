let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter two angles :", msg => {
  let a, b;
  let input = msg.split(" ");
  a = +input[0];
  b = +input[1];
  console.log(third(a, b));
  process.exit();
});

let third = (x, y) => {
  return 180 - (x + y);
};
