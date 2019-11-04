const rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the numbers :", ip => {
  let msg = ip.split(" ");
  console.log(sum(msg, msg.length));
  process.exit();
});

let sum = (arr, len) => {
  let total = 0;
  if (len == 0) {
    return total;
  }
  total += parseInt(arr[len - 1], 10);
  return total + sum(arr, len - 1);
};
