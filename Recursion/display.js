const rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the numbers :", ip => {
  let msg = ip.split(" ");
  console.log(display(msg, msg.length));
  process.exit();
});

let display = (arr, len) => {
  console.log(arr[len - 1]);
  if (len == 2) {
    return arr[len - 2];
  }

  return display(arr, len - 1);
};
