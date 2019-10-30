//Circle - get radius
//Find D, circumference and area

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the radius :", msg => {
  let pi = Math.PI;
  let r = +msg;
  console.log("Area :", area(r, pi));
  console.log("Circumference :", circumference(r, pi));
  console.log("Diameter :", diameter(r));
  process.exit();
});

let area = (r, pi) => {
  return pi * (r * r);
};

let circumference = (r, pi) => {
  return 2 * pi * r;
};

let diameter = r => {
  return 2 * r;
};
