// Write a program to find if a number is palindrome or not

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the number : ", msg => {
  let n = +msg;
  //   console.log(n);
  if (n < 10) {
    console.log("It's a palindrome...");
  } else if (reverse(n) === n) {
    console.log("It's a palindrome...");
  } else {
    console.log("It's not a palindrome...");
  }
  process.exit();
});

let reverse = n => {
  let result = 0;
  while (n > 0) {
    result += n % 10;

    if (n > 10) {
      result *= 10;
    }
    n = Math.floor(n / 10);
  }
  return result;
};
