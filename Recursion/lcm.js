const rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the numbers :", ip => {
  let msg = ip.split(" ");
  let a = +msg[0];
  let b = +msg[1];
  let res = [];
  console.log(lcm(a, b, res));
  process.exit();
});

let lcm = (a, b, result) => {
  for (let i = 2; i < a; i++) {
    if ((a % i == 0) | (b % i == 0)) {
      result.push(i);
    }
  }
  return result;
};
