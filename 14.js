let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter breadth and height :", msg => {
  let a, b;
  let input = msg.split(" ");
  a = +input[0];
  b = +input[1];
  console.log(area(a, b));
  process.exit();
});

let area = (x, y) => {
  return (x * y) / 2;
};
