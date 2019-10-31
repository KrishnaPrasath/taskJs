let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the base and it's power : ", msg => {
  let input = msg.split(" ");
  let n = +input[0];
  let pow = +input[1];
  console.log(power(n, pow));
  process.exit();
});

let power = (n, p) => {
  while (p > 1) {
    --p;
    return n * power(n, p);
  }
  return n;
};
