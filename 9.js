//Farenheit to Celisius

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter Farenheit :", msg => {
  let farenheit = +msg;
  console.log("Farenheit :", converter(farenheit));
  process.exit();
});

let converter = farenheit => {
  return (farenheit - 32) / 1.8;
};
