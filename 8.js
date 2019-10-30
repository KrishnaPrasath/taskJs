// Celsius to Farenheit

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter Celsius :", msg => {
  let celsius = +msg;
  console.log("Farenheit :", converter(celsius));
  process.exit();
});

let converter = celsius => {
  return celsius * 1.8 + 32;
};


  