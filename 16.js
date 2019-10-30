// TOtal average percentage

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the marks :", msg => {
  let input = msg.split(" ").map(Number);

  calc(input);
  process.exit();
});

let calc = marks => {
  let total = marks.reduce((a, b) => a + b, 0);
  console.log("Total :", total);
  console.log("Average :", total / 5);
  console.log("Percentage :", (total / 500) * 100);
};
