let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the number : ", msg => {
  let n = +msg;
  if (n < 10) {
    console.log(n);
  } else {
    console.log(sumOfDigits(n));
  }
  process.exit();
});

let sumOfDigits = n => {
  let sum = 0;
  if (n > 0) {
    sum = n % 10;
    n = Math.floor(n / 10);
    return sum + sumOfDigits(n);
  } else {
    return 0;
  }
};
