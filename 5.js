//perimieter of a rectangle
// 2 ( l * b)

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter length and breadth :", msg => {
  let a, b;
  let input = msg.split(" ");
  a = +input[0];
  b = +input[1];
  console.log("Area :", area(a, b));
  process.exit();
});

let area = (a, b) => {
  return a * b;
};
