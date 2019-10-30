// cm to meter and KM

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter length in CM :", msg => {
  let length = +msg;
  console.log("In Meters : ", meter(length));
  console.log("In Kilo meters : ", km(length));
  process.exit();
});

let meter = len => {
  return len / 100;
};

let km = len => {
  return len / 100000;
};
