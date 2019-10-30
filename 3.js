let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter two numbers :", msg => {
  let a, b;
  let input = msg.split(" ");
  a = +input[0];
  b = +input[1];
  console.log("Sum :", sum(a, b));
  console.log("Subtraction :", subtraction(a, b));
  console.log("Division :", division(a, b));
  console.log("Multiplication :", multiplication(a, b));
  console.log("Modulus :", modulus(a, b));
  process.exit();
});

let sum = (x, y) => {
  return x + y;
};

let subtraction = (x, y) => {
  return x - y;
};

let multiplication = (x, y) => {
  return x * y;
};

let division = (x, y) => {
  return Math.floor(x / y);
};

let modulus = (x, y) => {
  return x % y;
};
